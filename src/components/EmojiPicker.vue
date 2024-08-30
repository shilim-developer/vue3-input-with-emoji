<template>
  <el-popover v-model:visible="visible" :width="510" trigger="click">
    <div style="width: 480px; height: 384px">
      <el-tabs v-model="emojiType" size="small">
        <el-tab-pane name="normal" label="基础">
          <div class="emoji-picker">
            <div
              v-for="(item, emojiIndex) in normalEmojiList"
              :key="emojiIndex"
              @click="addEmoji(item)"
            >
              {{ item.emoji }}
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="wechat" label="微信">
          <div class="emoji-picker">
            <div
              v-for="(item, emojiIndex) in wechatEmojiList"
              :key="emojiIndex"
              @click="addEmoji(item)"
            >
              <img :src="item.url" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <template #reference>
      <svg
        t="1724916253430"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="4266"
        width="24"
        height="24"
        style="cursor: pointer"
      >
        <path
          d="M512 63.791885c-247.536746 0-448.208115 200.671369-448.208115 448.208115s200.671369 448.208115 448.208115 448.208115 448.208115-200.671369 448.208115-448.208115S759.535723 63.791885 512 63.791885zM512 906.423141c-217.829144 0-394.423141-176.593997-394.423141-394.423141s176.593997-394.423141 394.423141-394.423141 394.423141 176.593997 394.423141 394.423141S729.829144 906.423141 512 906.423141zM368.573403 494.071675c29.707602 0 53.784974-42.005696 53.784974-71.713298s-24.077372-71.713298-53.784974-71.713298c-29.707602 0-53.784974 42.005696-53.784974 71.713298S338.865801 494.071675 368.573403 494.071675zM655.426597 494.071675c29.707602 0 53.784974-42.005696 53.784974-71.713298s-24.077372-71.713298-53.784974-71.713298c-29.707602 0-53.784974 42.005696-53.784974 71.713298S625.718995 494.071675 655.426597 494.071675zM691.283246 619.569948c-8.695033-3.764744-20.904099-4.715395-32.790824-4.427846-32.450063 46.003753-85.912695 76.141144-146.492422 76.141144-61.726853 0-116.139114-31.195489-148.392702-78.669734-10.075473 0.214894-20.779256 1.90028-30.890544 6.956436-11.599176 5.809309-15.633049 13.984503-18.143219 21.029966 41.21775 71.050196 114.113991 122.396631 197.426465 122.396631 84.764546 0 158.737304-53.157687 199.524243-126.143978C706.396455 629.771287 699.906647 623.317295 691.283246 619.569948z"
          fill="#272636"
          p-id="4267"
        ></path>
      </svg>
    </template>
  </el-popover>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { normalEmojiList, wechatEmojiList } from "./emoji-config.ts";

const emojiType = ref("normal");
const visible = ref(false);

const emits = defineEmits(["addEmoji"]);
function addEmoji(params: any) {
  emits("addEmoji", params, emojiType.value);
}
</script>
<style scoped>
.emoji-picker {
  display: grid;
  grid-template-columns: repeat(16, 30px);
}
.emoji-picker > div {
  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.emoji-picker > div:hover {
  background: rgba(139, 142, 146, 0.2);
}
.normal-emoji {
  width: 24px;
  height: 24px;
  line-height: 24px;
  background-image: url(//f2e.cn.ronghub.com/sdk/emoji-48.png);
  background-size: auto 24px;
  overflow: hidden;
}
img {
  width: 24px;
  height: 24px;
}
</style>
