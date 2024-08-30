// function toUnicode(emoji) {
//   const emojiReg =
//     /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi;
//   return emoji.replace(
//     emojiReg,
//     (match) => `[u+${match.codePointAt(0).toString(16)}]`
//   );
// }

// function emojiToUnicode(str) {
//   return str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function (pair) {
//     return (
//       "\\u" +
//       pair.charCodeAt(0).toString(16) +
//       "\\u" +
//       pair.charCodeAt(1).toString(16)
//     );
//   });
// }

// // 将Unicode编码转换回表情符号
// function unicodeToEmoji(str) {
//   return str.replace(/\\u[\dA-F]{4}-[\dA-F]{4}/gi, function (match) {
//     var codes = match.split("-").slice(1);
//     return String.fromCharCode(parseInt(codes[0], 16), parseInt(codes[1], 16));
//   });
// }

// const list = [];
// function emojiToUnicode(str) {
//   return str.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, function (pair) {
//     return (
//       "\\u" +
//       pair.charCodeAt(0).toString(16) +
//       "\\u" +
//       pair.charCodeAt(1).toString(16)
//     );
//   });
// }
// document.querySelectorAll(".emoji_card").forEach((item) => {
//   list.push({
//     name: item.querySelector(".emoji_name").innerText,
//     emoji: item.querySelector(".emoji_font").innerText,
//     unicode: emojiToUnicode(item.querySelector(".emoji_font").innerText),
//   });
// });
// console.log(list);

// const list = [];
// document.querySelectorAll("td img").forEach((item) => {
//   list.push({
//     name: item.attributes.alt.value,
//     url: item.attributes.src.baseURI + item.attributes.src.value,
//   });
// });
// console.log(list);

export const normalEmojiList = [
  {
    name: "嘿嘿",
    emoji: "😀",
    unicode: "\ud83d\ude00",
  },
  {
    name: "哈哈",
    emoji: "😃",
    unicode: "\ud83d\ude03",
  },
  {
    name: "大笑",
    emoji: "😄",
    unicode: "\ud83d\ude04",
  },
  {
    name: "嘻嘻",
    emoji: "😁",
    unicode: "\ud83d\ude01",
  },
  {
    name: "斜眼笑",
    emoji: "😆",
    unicode: "\ud83d\ude06",
  },
  {
    name: "苦笑",
    emoji: "😅",
    unicode: "\ud83d\ude05",
  },
  {
    name: "笑得满地打滚",
    emoji: "🤣",
    unicode: "\ud83e\udd23",
  },
  {
    name: "笑哭了",
    emoji: "😂",
    unicode: "\ud83d\ude02",
  },
  {
    name: "呵呵",
    emoji: "🙂",
    unicode: "\ud83d\ude42",
  },
  {
    name: "倒脸",
    emoji: "🙃",
    unicode: "\ud83d\ude43",
  },
  {
    name: "融化",
    emoji: "🫠",
    unicode: "\ud83e\udee0",
  },
  {
    name: "眨眼",
    emoji: "😉",
    unicode: "\ud83d\ude09",
  },
  {
    name: "羞涩微笑",
    emoji: "😊",
    unicode: "\ud83d\ude0a",
  },
  {
    name: "微笑天使",
    emoji: "😇",
    unicode: "\ud83d\ude07",
  },
  {
    name: "喜笑颜开",
    emoji: "🥰",
    unicode: "\ud83e\udd70",
  },
  {
    name: "花痴",
    emoji: "😍",
    unicode: "\ud83d\ude0d",
  },
  {
    name: "好崇拜哦",
    emoji: "🤩",
    unicode: "\ud83e\udd29",
  },
  {
    name: "飞吻",
    emoji: "😘",
    unicode: "\ud83d\ude18",
  },
  {
    name: "亲亲",
    emoji: "😗",
    unicode: "\ud83d\ude17",
  },
  {
    name: "微笑",
    emoji: "☺️",
    unicode: "☺️",
  },
  {
    name: "羞涩亲亲",
    emoji: "😚",
    unicode: "\ud83d\ude1a",
  },
  {
    name: "微笑亲亲",
    emoji: "😙",
    unicode: "\ud83d\ude19",
  },
  {
    name: "含泪的笑脸",
    emoji: "🥲",
    unicode: "\ud83e\udd72",
  },
  {
    name: "好吃",
    emoji: "😋",
    unicode: "\ud83d\ude0b",
  },
  {
    name: "吐舌",
    emoji: "😛",
    unicode: "\ud83d\ude1b",
  },
  {
    name: "单眼吐舌",
    emoji: "😜",
    unicode: "\ud83d\ude1c",
  },
  {
    name: "滑稽",
    emoji: "🤪",
    unicode: "\ud83e\udd2a",
  },
  {
    name: "眯眼吐舌",
    emoji: "😝",
    unicode: "\ud83d\ude1d",
  },
  {
    name: "发财",
    emoji: "🤑",
    unicode: "\ud83e\udd11",
  },
  {
    name: "抱抱",
    emoji: "🤗",
    unicode: "\ud83e\udd17",
  },
  {
    name: "不说",
    emoji: "🤭",
    unicode: "\ud83e\udd2d",
  },
  {
    name: "睁眼捂嘴",
    emoji: "🫢",
    unicode: "\ud83e\udee2",
  },
  {
    name: "偷看",
    emoji: "🫣",
    unicode: "\ud83e\udee3",
  },
  {
    name: "安静的脸",
    emoji: "🤫",
    unicode: "\ud83e\udd2b",
  },
  {
    name: "想一想",
    emoji: "🤔",
    unicode: "\ud83e\udd14",
  },
  {
    name: "致敬",
    emoji: "🫡",
    unicode: "\ud83e\udee1",
  },
  {
    name: "闭嘴",
    emoji: "🤐",
    unicode: "\ud83e\udd10",
  },
  {
    name: "挑眉",
    emoji: "🤨",
    unicode: "\ud83e\udd28",
  },
  {
    name: "冷漠",
    emoji: "😐",
    unicode: "\ud83d\ude10",
  },
  {
    name: "无语",
    emoji: "😑",
    unicode: "\ud83d\ude11",
  },
  {
    name: "沉默",
    emoji: "😶",
    unicode: "\ud83d\ude36",
  },
  {
    name: "虚线脸",
    emoji: "🫥",
    unicode: "\ud83e\udee5",
  },
  {
    name: "迷茫",
    emoji: "😶‍🌫️",
    unicode: "\ud83d\ude36‍\ud83c\udf2b️",
  },
  {
    name: "得意",
    emoji: "😏",
    unicode: "\ud83d\ude0f",
  },
  {
    name: "不高兴",
    emoji: "😒",
    unicode: "\ud83d\ude12",
  },
  {
    name: "翻白眼",
    emoji: "🙄",
    unicode: "\ud83d\ude44",
  },
  {
    name: "龇牙咧嘴",
    emoji: "😬",
    unicode: "\ud83d\ude2c",
  },
  {
    name: "呼气",
    emoji: "😮‍💨",
    unicode: "\ud83d\ude2e‍\ud83d\udca8",
  },
  {
    name: "说谎",
    emoji: "🤥",
    unicode: "\ud83e\udd25",
  },
  {
    name: "颤抖",
    emoji: "🫨",
    unicode: "\ud83e\udee8",
  },
  {
    name: "左右摇头",
    emoji: "🙂‍↔️",
    unicode: "\ud83d\ude42‍↔️",
  },
  {
    name: "上下点头",
    emoji: "🙂‍↕️",
    unicode: "\ud83d\ude42‍↕️",
  },
  {
    name: "松了口气",
    emoji: "😌",
    unicode: "\ud83d\ude0c",
  },
  {
    name: "沉思",
    emoji: "😔",
    unicode: "\ud83d\ude14",
  },
  {
    name: "困",
    emoji: "😪",
    unicode: "\ud83d\ude2a",
  },
  {
    name: "流口水",
    emoji: "🤤",
    unicode: "\ud83e\udd24",
  },
  {
    name: "睡着了",
    emoji: "😴",
    unicode: "\ud83d\ude34",
  },
  {
    name: "眼袋脸",
    emoji: "🫩",
    unicode: "\ud83e\udee9",
  },
  {
    name: "感冒",
    emoji: "😷",
    unicode: "\ud83d\ude37",
  },
  {
    name: "发烧",
    emoji: "🤒",
    unicode: "\ud83e\udd12",
  },
  {
    name: "受伤",
    emoji: "🤕",
    unicode: "\ud83e\udd15",
  },
  {
    name: "恶心",
    emoji: "🤢",
    unicode: "\ud83e\udd22",
  },
  {
    name: "呕吐",
    emoji: "🤮",
    unicode: "\ud83e\udd2e",
  },
  {
    name: "打喷嚏",
    emoji: "🤧",
    unicode: "\ud83e\udd27",
  },
  {
    name: "脸发烧",
    emoji: "🥵",
    unicode: "\ud83e\udd75",
  },
  {
    name: "冷脸",
    emoji: "🥶",
    unicode: "\ud83e\udd76",
  },
  {
    name: "头昏眼花",
    emoji: "🥴",
    unicode: "\ud83e\udd74",
  },
  {
    name: "晕头转向",
    emoji: "😵",
    unicode: "\ud83d\ude35",
  },
  {
    name: "晕",
    emoji: "😵‍💫",
    unicode: "\ud83d\ude35‍\ud83d\udcab",
  },
  {
    name: "爆炸头",
    emoji: "🤯",
    unicode: "\ud83e\udd2f",
  },
  {
    name: "牛仔帽脸",
    emoji: "🤠",
    unicode: "\ud83e\udd20",
  },
  {
    name: "聚会笑脸",
    emoji: "🥳",
    unicode: "\ud83e\udd73",
  },
  {
    name: "伪装的脸",
    emoji: "🥸",
    unicode: "\ud83e\udd78",
  },
  {
    name: "墨镜笑脸",
    emoji: "😎",
    unicode: "\ud83d\ude0e",
  },
  {
    name: "书呆子脸",
    emoji: "🤓",
    unicode: "\ud83e\udd13",
  },
  {
    name: "带单片眼镜的脸",
    emoji: "🧐",
    unicode: "\ud83e\uddd0",
  },
  {
    name: "困扰",
    emoji: "😕",
    unicode: "\ud83d\ude15",
  },
  {
    name: "郁闷",
    emoji: "🫤",
    unicode: "\ud83e\udee4",
  },
  {
    name: "担心",
    emoji: "😟",
    unicode: "\ud83d\ude1f",
  },
  {
    name: "微微不满",
    emoji: "🙁",
    unicode: "\ud83d\ude41",
  },
  {
    name: "不满",
    emoji: "☹️",
    unicode: "☹️",
  },
  {
    name: "吃惊",
    emoji: "😮",
    unicode: "\ud83d\ude2e",
  },
  {
    name: "缄默",
    emoji: "😯",
    unicode: "\ud83d\ude2f",
  },
  {
    name: "震惊",
    emoji: "😲",
    unicode: "\ud83d\ude32",
  },
  {
    name: "脸红",
    emoji: "😳",
    unicode: "\ud83d\ude33",
  },
  {
    name: "恳求的脸",
    emoji: "🥺",
    unicode: "\ud83e\udd7a",
  },
  {
    name: "忍住泪水",
    emoji: "🥹",
    unicode: "\ud83e\udd79",
  },
  {
    name: "啊",
    emoji: "😦",
    unicode: "\ud83d\ude26",
  },
  {
    name: "极度痛苦",
    emoji: "😧",
    unicode: "\ud83d\ude27",
  },
  {
    name: "害怕",
    emoji: "😨",
    unicode: "\ud83d\ude28",
  },
  {
    name: "冷汗",
    emoji: "😰",
    unicode: "\ud83d\ude30",
  },
  {
    name: "失望但如释重负",
    emoji: "😥",
    unicode: "\ud83d\ude25",
  },
  {
    name: "哭",
    emoji: "😢",
    unicode: "\ud83d\ude22",
  },
  {
    name: "放声大哭",
    emoji: "😭",
    unicode: "\ud83d\ude2d",
  },
  {
    name: "吓死了",
    emoji: "😱",
    unicode: "\ud83d\ude31",
  },
  {
    name: "困惑",
    emoji: "😖",
    unicode: "\ud83d\ude16",
  },
  {
    name: "痛苦",
    emoji: "😣",
    unicode: "\ud83d\ude23",
  },
  {
    name: "失望",
    emoji: "😞",
    unicode: "\ud83d\ude1e",
  },
  {
    name: "汗",
    emoji: "😓",
    unicode: "\ud83d\ude13",
  },
  {
    name: "累死了",
    emoji: "😩",
    unicode: "\ud83d\ude29",
  },
  {
    name: "累",
    emoji: "😫",
    unicode: "\ud83d\ude2b",
  },
  {
    name: "打呵欠",
    emoji: "🥱",
    unicode: "\ud83e\udd71",
  },
  {
    name: "傲慢",
    emoji: "😤",
    unicode: "\ud83d\ude24",
  },
  {
    name: "怒火中烧",
    emoji: "😡",
    unicode: "\ud83d\ude21",
  },
  {
    name: "生气",
    emoji: "😠",
    unicode: "\ud83d\ude20",
  },
  {
    name: "嘴上有符号的脸",
    emoji: "🤬",
    unicode: "\ud83e\udd2c",
  },
  {
    name: "恶魔微笑",
    emoji: "😈",
    unicode: "\ud83d\ude08",
  },
  {
    name: "生气的恶魔",
    emoji: "👿",
    unicode: "\ud83d\udc7f",
  },
  {
    name: "头骨",
    emoji: "💀",
    unicode: "\ud83d\udc80",
  },
  {
    name: "骷髅",
    emoji: "☠️",
    unicode: "☠️",
  },
  {
    name: "大便",
    emoji: "💩",
    unicode: "\ud83d\udca9",
  },
  {
    name: "小丑脸",
    emoji: "🤡",
    unicode: "\ud83e\udd21",
  },
  {
    name: "食人魔",
    emoji: "👹",
    unicode: "\ud83d\udc79",
  },
  {
    name: "小妖精",
    emoji: "👺",
    unicode: "\ud83d\udc7a",
  },
  {
    name: "鬼",
    emoji: "👻",
    unicode: "\ud83d\udc7b",
  },
  {
    name: "外星人",
    emoji: "👽",
    unicode: "\ud83d\udc7d",
  },
  {
    name: "外星怪物",
    emoji: "👾",
    unicode: "\ud83d\udc7e",
  },
  {
    name: "机器人",
    emoji: "🤖",
    unicode: "\ud83e\udd16",
  },
  {
    name: "大笑的猫",
    emoji: "😺",
    unicode: "\ud83d\ude3a",
  },
  {
    name: "微笑的猫",
    emoji: "😸",
    unicode: "\ud83d\ude38",
  },
  {
    name: "笑出眼泪的猫",
    emoji: "😹",
    unicode: "\ud83d\ude39",
  },
  {
    name: "花痴的猫",
    emoji: "😻",
    unicode: "\ud83d\ude3b",
  },
  {
    name: "奸笑的猫",
    emoji: "😼",
    unicode: "\ud83d\ude3c",
  },
  {
    name: "亲亲猫",
    emoji: "😽",
    unicode: "\ud83d\ude3d",
  },
  {
    name: "疲倦的猫",
    emoji: "🙀",
    unicode: "\ud83d\ude40",
  },
  {
    name: "哭泣的猫",
    emoji: "😿",
    unicode: "\ud83d\ude3f",
  },
  {
    name: "生气的猫",
    emoji: "😾",
    unicode: "\ud83d\ude3e",
  },
  {
    name: "非礼勿视",
    emoji: "🙈",
    unicode: "\ud83d\ude48",
  },
  {
    name: "非礼勿听",
    emoji: "🙉",
    unicode: "\ud83d\ude49",
  },
  {
    name: "非礼勿言",
    emoji: "🙊",
    unicode: "\ud83d\ude4a",
  },
  {
    name: "情书",
    emoji: "💌",
    unicode: "\ud83d\udc8c",
  },
  {
    name: "心中箭了",
    emoji: "💘",
    unicode: "\ud83d\udc98",
  },
  {
    name: "系有缎带的心",
    emoji: "💝",
    unicode: "\ud83d\udc9d",
  },
  {
    name: "闪亮的心",
    emoji: "💖",
    unicode: "\ud83d\udc96",
  },
  {
    name: "搏动的心",
    emoji: "💗",
    unicode: "\ud83d\udc97",
  },
  {
    name: "心跳",
    emoji: "💓",
    unicode: "\ud83d\udc93",
  },
  {
    name: "舞动的心",
    emoji: "💞",
    unicode: "\ud83d\udc9e",
  },
  {
    name: "两颗心",
    emoji: "💕",
    unicode: "\ud83d\udc95",
  },
  {
    name: "心型装饰",
    emoji: "💟",
    unicode: "\ud83d\udc9f",
  },
  {
    name: "心叹号",
    emoji: "❣️",
    unicode: "❣️",
  },
  {
    name: "心碎",
    emoji: "💔",
    unicode: "\ud83d\udc94",
  },
  {
    name: "火上之心",
    emoji: "❤️‍🔥",
    unicode: "❤️‍\ud83d\udd25",
  },
  {
    name: "修复受伤的心灵",
    emoji: "❤️‍🩹",
    unicode: "❤️‍\ud83e\ude79",
  },
  {
    name: "红心",
    emoji: "❤️",
    unicode: "❤️",
  },
  {
    name: "粉红色的心",
    emoji: "🩷",
    unicode: "\ud83e\ude77",
  },
  {
    name: "橙心",
    emoji: "🧡",
    unicode: "\ud83e\udde1",
  },
  {
    name: "黄心",
    emoji: "💛",
    unicode: "\ud83d\udc9b",
  },
  {
    name: "绿心",
    emoji: "💚",
    unicode: "\ud83d\udc9a",
  },
  {
    name: "蓝心",
    emoji: "💙",
    unicode: "\ud83d\udc99",
  },
  {
    name: "浅蓝色的心",
    emoji: "🩵",
    unicode: "\ud83e\ude75",
  },
  {
    name: "紫心",
    emoji: "💜",
    unicode: "\ud83d\udc9c",
  },
  {
    name: "棕心",
    emoji: "🤎",
    unicode: "\ud83e\udd0e",
  },
  {
    name: "黑心",
    emoji: "🖤",
    unicode: "\ud83d\udda4",
  },
  {
    name: "灰心",
    emoji: "🩶",
    unicode: "\ud83e\ude76",
  },
  {
    name: "白心",
    emoji: "🤍",
    unicode: "\ud83e\udd0d",
  },
  {
    name: "唇印",
    emoji: "💋",
    unicode: "\ud83d\udc8b",
  },
  {
    name: "一百分",
    emoji: "💯",
    unicode: "\ud83d\udcaf",
  },
  {
    name: "怒",
    emoji: "💢",
    unicode: "\ud83d\udca2",
  },
  {
    name: "爆炸",
    emoji: "💥",
    unicode: "\ud83d\udca5",
  },
  {
    name: "头晕",
    emoji: "💫",
    unicode: "\ud83d\udcab",
  },
  {
    name: "汗滴",
    emoji: "💦",
    unicode: "\ud83d\udca6",
  },
  {
    name: "尾气",
    emoji: "💨",
    unicode: "\ud83d\udca8",
  },
  {
    name: "洞",
    emoji: "🕳️",
    unicode: "\ud83d\udd73",
  },
  {
    name: "话语气泡",
    emoji: "💬",
    unicode: "\ud83d\udcac",
  },
  {
    name: "眼睛对话框",
    emoji: "👁️‍🗨️",
    unicode: "\ud83d\udc41\ud83d\udde8",
  },
  {
    name: "朝左的话语气泡",
    emoji: "🗨️",
    unicode: "\ud83d\udde8",
  },
  {
    name: "愤怒话语气泡",
    emoji: "🗯️",
    unicode: "\ud83d\uddef",
  },
  {
    name: "内心活动气泡",
    emoji: "💭",
    unicode: "\ud83d\udcad",
  },
  {
    name: "睡着",
    emoji: "💤",
    unicode: "\ud83d\udca4",
  },
];

export const wechatEmojiList = [
  {
    name: "[裂开]",
    url: "https://www.emojiall.com/images/60/wechat/wx141.png",
  },
  {
    name: "[苦涩]",
    url: "https://www.emojiall.com/images/60/wechat/wx142.png",
  },
  {
    name: "[叹气]",
    url: "https://www.emojiall.com/images/60/wechat/wx143.png",
  },
  {
    name: "[让我看看]",
    url: "https://www.emojiall.com/images/60/wechat/wx144.png",
  },
  {
    name: "[666]",
    url: "https://www.emojiall.com/images/60/wechat/wx145.png",
  },
  {
    name: "/尴尬",
    url: "https://www.emojiall.com/images/60/wechat/wx046.png",
  },
  {
    name: "/酷",
    url: "https://www.emojiall.com/images/60/wechat/wx052.png",
  },
  {
    name: "/奋斗",
    url: "https://www.emojiall.com/images/60/wechat/wx066.png",
  },
  {
    name: "/疑问",
    url: "https://www.emojiall.com/images/60/wechat/wx068.png",
  },
  {
    name: "/擦汗",
    url: "https://www.emojiall.com/images/60/wechat/wx076.png",
  },
  {
    name: "/抠鼻",
    url: "https://www.emojiall.com/images/60/wechat/wx077.png",
  },
  {
    name: "/鄙视",
    url: "https://www.emojiall.com/images/60/wechat/wx084.png",
  },
  {
    name: "/勾引",
    url: "https://www.emojiall.com/images/60/wechat/wx120.png",
  },
  {
    name: "/差劲",
    url: "https://www.emojiall.com/images/60/wechat/wx122.png",
  },
  {
    name: "/NO",
    url: "https://www.emojiall.com/images/60/wechat/wx124.png",
  },
  {
    name: "/跳跳",
    url: "https://www.emojiall.com/images/60/wechat/wx128.png",
  },
  {
    name: "/转圈",
    url: "https://www.emojiall.com/images/60/wechat/wx131.png",
  },
  {
    name: "/回头",
    url: "https://www.emojiall.com/images/60/wechat/wx133.png",
  },
  {
    name: "/激动",
    url: "https://www.emojiall.com/images/60/wechat/wx136.png",
  },
  {
    name: "/左太极",
    url: "https://www.emojiall.com/images/60/wechat/wx139.png",
  },
  {
    name: "/右太极",
    url: "https://www.emojiall.com/images/60/wechat/wx140.png",
  },
  {
    name: "/福",
    url: "https://www.emojiall.com/images/60/wechat/wx001.png",
  },
  {
    name: "/奸笑",
    url: "https://www.emojiall.com/images/60/wechat/wx003.png",
  },
  {
    name: "/嘿哈",
    url: "https://www.emojiall.com/images/60/wechat/wx004.png",
  },
  {
    name: "/捂脸",
    url: "https://www.emojiall.com/images/60/wechat/wx005.png",
  },
  {
    name: "/机智",
    url: "https://www.emojiall.com/images/60/wechat/wx006.png",
  },
  {
    name: "/加油",
    url: "https://www.emojiall.com/images/60/wechat/wx011.png",
  },
  {
    name: "/加油加油",
    url: "https://www.emojiall.com/images/60/wechat/wx014.png",
  },
  {
    name: "/社会社会",
    url: "https://www.emojiall.com/images/60/wechat/wx018.png",
  },
  {
    name: "/吃瓜",
    url: "https://www.emojiall.com/images/60/wechat/wx033.png",
  },
  {
    name: "[翻白眼]",
    url: "https://www.emojiall.com/images/60/wechat/1f644.png",
  },
  {
    name: "/微笑",
    url: "https://www.emojiall.com/images/60/wechat/1f642.png",
  },
  {
    name: "/撇嘴",
    url: "https://www.emojiall.com/images/60/wechat/1f61f.png",
  },
  {
    name: "/色",
    url: "https://www.emojiall.com/images/60/wechat/1f60d.png",
  },
  {
    name: "/发呆",
    url: "https://www.emojiall.com/images/60/wechat/1f626.png",
  },
  {
    name: "/得意",
    url: "https://www.emojiall.com/images/60/wechat/1f60e.png",
  },
  {
    name: "/流泪",
    url: "https://www.emojiall.com/images/60/wechat/1f62d.png",
  },
  {
    name: "/害羞",
    url: "https://www.emojiall.com/images/60/wechat/1f60a.png",
  },
  {
    name: "/闭嘴",
    url: "https://www.emojiall.com/images/60/wechat/1f910.png",
  },
  {
    name: "/睡",
    url: "https://www.emojiall.com/images/60/wechat/1f62a.png",
  },
  {
    name: "/大哭",
    url: "https://www.emojiall.com/images/60/wechat/1f622.png",
  },
  {
    name: "/发怒",
    url: "https://www.emojiall.com/images/60/wechat/1f621.png",
  },
  {
    name: "/调皮",
    url: "https://www.emojiall.com/images/60/wechat/1f61b.png",
  },
  {
    name: "/呲牙",
    url: "https://www.emojiall.com/images/60/wechat/1f601.png",
  },
  {
    name: "/惊讶",
    url: "https://www.emojiall.com/images/60/wechat/1f632.png",
  },
  {
    name: "/难过",
    url: "https://www.emojiall.com/images/60/wechat/1f641.png",
  },
  {
    name: "/冷汗",
    url: "https://www.emojiall.com/images/60/wechat/1f630.png",
  },
  {
    name: "/抓狂",
    url: "https://www.emojiall.com/images/60/wechat/1f62b.png",
  },
  {
    name: "/吐",
    url: "https://www.emojiall.com/images/60/wechat/1f92e.png",
  },
  {
    name: "/偷笑",
    url: "https://www.emojiall.com/images/60/wechat/1f92d.png",
  },
  {
    name: "/可爱",
    url: "https://www.emojiall.com/images/60/wechat/1f60a-new.png",
  },
  {
    name: "/白眼",
    url: "https://www.emojiall.com/images/60/wechat/1f644-new.png",
  },
  {
    name: "/傲慢",
    url: "https://www.emojiall.com/images/60/wechat/1f615.png",
  },
  {
    name: "/饥饿",
    url: "https://www.emojiall.com/images/60/wechat/1f60b.png",
  },
  {
    name: "/困",
    url: "https://www.emojiall.com/images/60/wechat/1f62a-new.png",
  },
  {
    name: "/惊恐",
    url: "https://www.emojiall.com/images/60/wechat/1f628.png",
  },
  {
    name: "/流汗",
    url: "https://www.emojiall.com/images/60/wechat/1f613.png",
  },
  {
    name: "/憨笑",
    url: "https://www.emojiall.com/images/60/wechat/1f600.png",
  },
  {
    name: "/悠闲",
    url: "https://www.emojiall.com/images/60/wechat/1f6ac.png",
  },
  {
    name: "/咒骂",
    url: "https://www.emojiall.com/images/60/wechat/1f92c.png",
  },
  {
    name: "/嘘",
    url: "https://www.emojiall.com/images/60/wechat/1f92b.png",
  },
  {
    name: "/晕",
    url: "https://www.emojiall.com/images/60/wechat/1f635.png",
  },
  {
    name: "/折磨",
    url: "https://www.emojiall.com/images/60/wechat/1f623.png",
  },
  {
    name: "/衰",
    url: "https://www.emojiall.com/images/60/wechat/1f622-new.png",
  },
  {
    name: "/骷髅",
    url: "https://www.emojiall.com/images/60/wechat/1f480.png",
  },
  {
    name: "/敲打",
    url: "https://www.emojiall.com/images/60/wechat/1f915.png",
  },
  {
    name: "/再见",
    url: "https://www.emojiall.com/images/60/wechat/1f44b.png",
  },
  {
    name: "/鼓掌",
    url: "https://www.emojiall.com/images/60/wechat/1f44f.png",
  },
  {
    name: "/糗大了",
    url: "https://www.emojiall.com/images/60/wechat/1f611.png",
  },
  {
    name: "/坏笑",
    url: "https://www.emojiall.com/images/60/wechat/1f62c.png",
  },
  {
    name: "/左哼哼",
    url: "https://www.emojiall.com/images/60/wechat/1f624.png",
  },
  {
    name: "/右哼哼",
    url: "https://www.emojiall.com/images/60/wechat/1f624-new.png",
  },
  {
    name: "/哈欠",
    url: "https://www.emojiall.com/images/60/wechat/1f971.png",
  },
  {
    name: "/委屈",
    url: "https://www.emojiall.com/images/60/wechat/1f641-new.png",
  },
  {
    name: "/快哭了",
    url: "https://www.emojiall.com/images/60/wechat/1f625.png",
  },
  {
    name: "/阴险",
    url: "https://www.emojiall.com/images/60/wechat/1f60f.png",
  },
  {
    name: "/亲亲",
    url: "https://www.emojiall.com/images/60/wechat/1f61a.png",
  },
  {
    name: "/吓",
    url: "https://www.emojiall.com/images/60/wechat/1f631.png",
  },
  {
    name: "/可怜",
    url: "https://www.emojiall.com/images/60/wechat/1f97a.png",
  },
  {
    name: "/菜刀",
    url: "https://www.emojiall.com/images/60/wechat/1f52a.png",
  },
  {
    name: "/西瓜",
    url: "https://www.emojiall.com/images/60/wechat/1f349.png",
  },
  {
    name: "/啤酒",
    url: "https://www.emojiall.com/images/60/wechat/1f37a.png",
  },
  {
    name: "/篮球",
    url: "https://www.emojiall.com/images/60/wechat/1f3c0.png",
  },
  {
    name: "/乒乓",
    url: "https://www.emojiall.com/images/60/wechat/1f3d3.png",
  },
  {
    name: "/咖啡",
    url: "https://www.emojiall.com/images/60/wechat/2615.png",
  },
  {
    name: "/饭",
    url: "https://www.emojiall.com/images/60/wechat/1f35a.png",
  },
  {
    name: "/猪头",
    url: "https://www.emojiall.com/images/60/wechat/1f437.png",
  },
  {
    name: "/玫瑰",
    url: "https://www.emojiall.com/images/60/wechat/1f339.png",
  },
  {
    name: "/凋谢",
    url: "https://www.emojiall.com/images/60/wechat/1f940.png",
  },
  {
    name: "/示爱",
    url: "https://www.emojiall.com/images/60/wechat/1f444.png",
  },
  {
    name: "/爱心",
    url: "https://www.emojiall.com/images/60/wechat/2764.png",
  },
  {
    name: "/心碎",
    url: "https://www.emojiall.com/images/60/wechat/1f494.png",
  },
  {
    name: "/礼物",
    url: "https://www.emojiall.com/images/60/wechat/1f381.png",
  },
  {
    name: "/闪电",
    url: "https://www.emojiall.com/images/60/wechat/26a1.png",
  },
  {
    name: "/炸弹",
    url: "https://www.emojiall.com/images/60/wechat/1f4a3.png",
  },
  {
    name: "/刀",
    url: "https://www.emojiall.com/images/60/wechat/2694.png",
  },
  {
    name: "/足球",
    url: "https://www.emojiall.com/images/60/wechat/26bd.png",
  },
  {
    name: "/便便",
    url: "https://www.emojiall.com/images/60/wechat/1f4a9.png",
  },
  {
    name: "/月亮",
    url: "https://www.emojiall.com/images/60/wechat/1f319.png",
  },
  {
    name: "/太阳",
    url: "https://www.emojiall.com/images/60/wechat/1f31e.png",
  },
  {
    name: "/礼物",
    url: "https://www.emojiall.com/images/60/wechat/1f381-new.png",
  },
  {
    name: "/拥抱",
    url: "https://www.emojiall.com/images/60/wechat/1f917.png",
  },
  {
    name: "/赞",
    url: "https://www.emojiall.com/images/60/wechat/1f44d.png",
  },
  {
    name: "/踩",
    url: "https://www.emojiall.com/images/60/wechat/1f44e.png",
  },
  {
    name: "/握手",
    url: "https://www.emojiall.com/images/60/wechat/1f91d.png",
  },
  {
    name: "/胜利",
    url: "https://www.emojiall.com/images/60/wechat/270c.png",
  },
  {
    name: "/抱拳",
    url: "https://www.emojiall.com/images/60/wechat/1f64f.png",
  },
  {
    name: "/拳头",
    url: "https://www.emojiall.com/images/60/wechat/270a.png",
  },
  {
    name: "/爱你",
    url: "https://www.emojiall.com/images/60/wechat/1f91f.png",
  },
  {
    name: "/OK",
    url: "https://www.emojiall.com/images/60/wechat/1f44c.png",
  },
  {
    name: "/爱情",
    url: "https://www.emojiall.com/images/60/wechat/1f491.png",
  },
  {
    name: "/飞吻",
    url: "https://www.emojiall.com/images/60/wechat/1f618.png",
  },
  {
    name: "/发抖",
    url: "https://www.emojiall.com/images/60/wechat/1f976.png",
  },
  {
    name: "/怄火",
    url: "https://www.emojiall.com/images/60/wechat/1f620.png",
  },
  {
    name: "/磕头",
    url: "https://www.emojiall.com/images/60/wechat/1f647.png",
  },
  {
    name: "/挥手",
    url: "https://www.emojiall.com/images/60/wechat/1f44b-new.png",
  },
  {
    name: "/街舞",
    url: "https://www.emojiall.com/images/60/wechat/1f483.png",
  },
  {
    name: "/献吻",
    url: "https://www.emojiall.com/images/60/wechat/1f617.png",
  },
  {
    name: "/发",
    url: "https://www.emojiall.com/images/60/wechat/1f005.png",
  },
  {
    name: "/红包",
    url: "https://www.emojiall.com/images/60/wechat/1f9e7.png",
  },
  {
    name: "/耶",
    url: "https://www.emojiall.com/images/60/wechat/270c-new.png",
  },
  {
    name: "/皱眉",
    url: "https://www.emojiall.com/images/60/wechat/1f97a-new.png",
  },
  {
    name: "/emm",
    url: "https://www.emojiall.com/images/60/wechat/1f611-new.png",
  },
  {
    name: "/好的",
    url: "https://www.emojiall.com/images/60/wechat/1f44c-new.png",
  },
  {
    name: "/天啊",
    url: "https://www.emojiall.com/images/60/wechat/1f632-new.png",
  },
  {
    name: "/打脸",
    url: "https://www.emojiall.com/images/60/wechat/1f915-new.png",
  },
  {
    name: "/汗",
    url: "https://www.emojiall.com/images/60/wechat/1f613-new.png",
  },
  {
    name: "/强壮",
    url: "https://www.emojiall.com/images/60/wechat/1f4aa.png",
  },
  {
    name: "/鬼魂",
    url: "https://www.emojiall.com/images/60/wechat/1f47b.png",
  },
  {
    name: "/吐舌",
    url: "https://www.emojiall.com/images/60/wechat/1f61d.png",
  },
  {
    name: "/合十",
    url: "https://www.emojiall.com/images/60/wechat/1f64f-new.png",
  },
  {
    name: "/礼物",
    url: "https://www.emojiall.com/images/60/wechat/1f381-new.png",
  },
  {
    name: "/庆祝",
    url: "https://www.emojiall.com/images/60/wechat/1f389.png",
  },
  {
    name: "/破涕为笑",
    url: "https://www.emojiall.com/images/60/wechat/1f602.png",
  },
  {
    name: "/笑脸",
    url: "https://www.emojiall.com/images/60/wechat/1f604.png",
  },
  {
    name: "/无语",
    url: "https://www.emojiall.com/images/60/wechat/1f612.png",
  },
  {
    name: "/失望",
    url: "https://www.emojiall.com/images/60/wechat/1f614.png",
  },
  {
    name: "/恐惧",
    url: "https://www.emojiall.com/images/60/wechat/1f631-new.png",
  },
  {
    name: "/脸红",
    url: "https://www.emojiall.com/images/60/wechat/1f633.png",
  },
  {
    name: "/哇",
    url: "https://www.emojiall.com/images/60/wechat/1f929.png",
  },
  {
    name: "/旺柴",
    url: "https://www.emojiall.com/images/60/wechat/1f436.png",
  },
  {
    name: "/瓢虫",
    url: "https://www.emojiall.com/images/60/wechat/1f41e.png",
  },
];
