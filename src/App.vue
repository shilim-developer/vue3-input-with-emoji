<template>
  <div class="container">
    <div class="message-list">
      <div
        class="message-item"
        v-for="(item, index) in messageList"
        :key="index"
      >
        <div class="message" v-html="formatHtml(item)"></div>
        <pre class="message">{{ item }}</pre>
      </div>
    </div>
    <div
      class="input-wrapper"
      ref="inputRef"
      :contenteditable="true"
      @blur="rememberCurrentRange"
      @input="handleInput"
      @paste="handlePaste"
      @compositionstart="compositionstart"
      @compositionend="compositionend"
      data-placeholder="请输入内容"
    ></div>
    <div class="operation-wrapper">
      {{ inputLen }} / {{ limitLen }}
      <div class="btn-wrapper">
        <emoji-picker @add-emoji="addEmoji" />
        <el-button type="primary" @click="send" style="margin-left: 10px">
          发送
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EmojiPicker from "@/components/EmojiPicker.vue";
import { wechatEmojiList } from "@/components/emoji-config.ts";
import { ref } from "vue";

const messageList = ref<string[]>([]);
const currentRange = ref<Range>();
const inputRef = ref<HTMLElement>();
const inputLen = ref<number>(0);
const lock = ref(false);
const limitLen = 5;

const replaceStr = wechatEmojiList
  .map((item) => item.name.replace("[", "\\[").replace("]", "\\]"))
  .join("|");
const wechatEmojiMap = wechatEmojiList.reduce<{ [key: string]: string }>(
  (map, item) => {
    map[item.name] = item.url;
    return map;
  },
  {}
);
const replaceReg = new RegExp(replaceStr, "g");

function formatHtml(data: string) {
  return data.replace(/\n/g, "<br/>").replace(replaceReg, (match) => {
    const img = new Image(16, 16);
    img.style.marginLeft = "2px";
    img.style.marginRight = "2px";
    img.src = wechatEmojiMap[match];
    return img.outerHTML;
  });
}

function rememberCurrentRange() {
  currentRange.value = window.getSelection()?.getRangeAt(0);
}

function getContent(node: Node): string | null {
  if (node.nodeName === "#text") {
    return node.textContent;
  } else if (node.nodeName === "IMG") {
    return (node as HTMLImageElement).alt;
  } else if (node.nodeName === "DIV") {
    return "\n" + [].map.call(node.childNodes, getContent).join("");
  } else {
    return "";
  }
}

function computedInputLen() {
  const message: string = [].map
    .call(inputRef.value?.childNodes, getContent)
    .join("");
  const len = replaceStr + "|[\uD800-\uDBFF][\uDC00-\uDFFF]|.";
  const surrogatePairs = message.match(new RegExp(len, "g")) || [];
  let actualLength = surrogatePairs.length; // 计算表情字符的实际长度
  // 获取光标的位置
  let cursorPosition = getCursorPosition(inputRef.value!);
  console.log("cursorPosition:", cursorPosition);
  if (actualLength > limitLen) {
    let startIndex = cursorPosition - (actualLength - limitLen);
    let range = window.getSelection()?.getRangeAt(0);
    range?.setStartAfter(inputRef.value?.childNodes[startIndex - 1]!);
    range?.setEndAfter(inputRef.value?.childNodes[cursorPosition - 1]!);
    range?.deleteContents();
    actualLength = limitLen;
  }
  return actualLength; // 按照长度计算
}

function handleInput() {
  if (lock.value) {
  } else {
    inputLen.value = computedInputLen();
  }
}

function handlePaste(e: ClipboardEvent) {
  e.preventDefault();
  if (!currentRange.value) return;
  const textArr = e.clipboardData?.getData("text/plain").split("\r\n") || [];
  console.log("textArr:", textArr);
  const selection = getSelection();
  for (const text of textArr) {
    const addNode = document.createElement("div");
    addNode.innerText = text || "\n";
    currentRange.value.insertNode(addNode);
    currentRange.value.setStartAfter(addNode);
    selection?.removeAllRanges();
    selection?.addRange(currentRange.value);
  }
  handleInput();
}

function addEmoji(emoji: any, emojiType: "normal" | "wechat") {
  if (!currentRange.value) {
    inputRef.value?.focus();
    currentRange.value = getSelection()?.getRangeAt(0);
  }
  if (!currentRange.value) return;
  const selection = getSelection();
  selection?.removeAllRanges();
  selection?.addRange(currentRange.value);
  let emojiStr = "";
  let addNode;
  if (emojiType === "normal") {
    emojiStr = emoji.unicode;
    addNode = document.createTextNode(emojiStr);
  } else {
    emojiStr = emoji.name;
    const img = new Image(16, 16);
    img.style.paddingLeft = "2px";
    img.style.paddingRight = "2px";
    img.src = emoji.url;
    img.alt = emojiStr;
    addNode = img;
  }
  currentRange.value.insertNode(addNode);
  currentRange.value.setStartAfter(addNode);
  selection?.removeAllRanges();
  selection?.addRange(currentRange.value);
  currentRange.value = selection?.getRangeAt(0);
  handleInput();
}

function send() {
  const message: string = [].map
    .call(inputRef.value?.childNodes, getContent)
    .join("");
  messageList.value.push(message);
}
function compositionstart() {
  lock.value = true;
}
function compositionend() {
  lock.value = false;
  handleInput();
}
/**
 * 获取 HTML 元素中的光标位置
 * 如果没有获取到 selection，则返回 0
 * 如果获取到 selection，则通过获取其 range 对象，克隆该对象，设置其范围，获取克隆对象的文本内容长度来计算光标的位置
 * @param element - 要获取光标位置的 HTML 元素
 * @returns 光标在指定元素中的位置
 */
function getCursorPosition(element: HTMLElement) {
  let caretOffset = 0;
  let selection = window.getSelection();
  let range = selection?.getRangeAt(0);
  let rangeCopy = range?.cloneRange();
  rangeCopy?.selectNodeContents(element);
  rangeCopy?.setEnd(range!.endContainer, range!.endOffset);
  caretOffset = rangeCopy?.endOffset ?? 0;
  return caretOffset;
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.message-list {
  flex: 1;
  width: 800px;
}
.message-item {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  margin-bottom: 10px;
}
.message {
  margin: 0;
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  background: #faf8f8;
  word-break: break-all;
  white-space: pre-wrap;
  font-family: inherit;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.input-wrapper {
  width: 800px;
  height: 94px;
  padding: 6px 10px;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  word-break: break-all;
  overflow-y: auto;
  vertical-align: middle;
}
.input-wrapper:empty::before {
  content: attr(data-placeholder);
  color: gray;
}
.input-wrapper:focus {
  border-color: #40a9ff;
  border-right-width: 1px !important;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.operation-wrapper {
  width: 800px;
  padding: 6px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-wrapper {
  display: flex;
  align-items: center;
}
</style>
