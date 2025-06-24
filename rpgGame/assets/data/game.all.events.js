const rpgGameEventData = [
  {
    name: "抵达新地点",
    title: "抵达新地点",
    description: `你成功抵达了{location}，暂时没有发现敌人。`,
    actions: [
      '冒险探索',
      '休息回复',
      '继续前进',
      '返回',
      '使用物品',
    ].filter(Boolean)
  },
  {
    name:'开箱子',
    title: "开箱子",
    description: '',
    actions: [
      '冒险探索',
      '休息回复',
      '继续前进',
      '返回',
      '使用物品',
    ].filter(Boolean)
  },
  {
    name:'使用道具',
    title: "使用道具",
    description: '',
    actions: [
      '冒险探索',
      '休息回复',
      '继续前进',
      '返回',
      '使用物品',
    ].filter(Boolean)
  },
  {
    name: "遭遇敌人",
    title: "遭遇敌人",
    description: `你遭遇了{enemy}！准备战斗！`,
    actions: []
  },
  {
    name:'休息恢复',
    title: "休息恢复",
    description: `你休息了一会儿，花费{gold}金币，恢复了{hp}点生命值。{encounter}`,
    actions: [
      '冒险探索',
      '休息回复',
      '继续前进',
      '返回',
      '使用物品',
    ].filter(Boolean)
  },
  {
    name:'发现物品',
    title: "发现物品",
    description: `你在探索时发现了一个{item}！`,
    actions: [
      '冒险探索',
      '休息回复',
      '继续前进',
      '返回',
      '使用物品',
    ].filter(Boolean)
  },
  {
    name:'发现技能',
    title: "发现技能",
    description: `你在探索时发现了技能{skill}！已自动比较和处理。`,
    actions: [
      '冒险探索',
      '休息回复',
      '继续前进',
      '返回',
      '使用物品',
    ].filter(Boolean)
  },
  {
    name:'发现宝藏',
    title: "发现宝藏",
    description: `你在探索时发现了{gold}枚金币！`,
    actions: [
      '冒险探索',
      '休息回复',
      '继续前进',
      '返回',
      '使用物品',
    ].filter(Boolean)
  },
  {
    name:'无可用道具',
    title: "没有可用道具",
    description: `你目前没有非战道具！`,
    actions: [
      '冒险探索',
      // 如果生命值不满 且 拥有回复药
      '休息回复',
      '继续前进',
      '返回',
      '使用物品',
    ].filter(Boolean)
  },
  {
    name: '被BOSS击杀',
    title: "你死了！",
    description: `你被BOSS单位{enemy}击败了，故事终结！`,
    actions: [
      '查看后续',
    ].filter(Boolean)
  },
  {
    name: '最终之战',
    title: '最终之战',
    description: `路边王注意到了你，于是来到你面前，它不打算放任你了。你经历了很多，这一刻终于来临。`,
    actions: [
      '开始战斗'
    ]
  },
  {
    name:'遭遇路边王',
    title: "遭遇敌人",
    description: `你遭遇了路边王！准备战斗！`,
    actions: []
  },
  {
    name:'伪神之恨',
    title: "一切都给本神陪葬吧！",
    description: `路边王临死发出怒吼并向世界释放诅咒！`,
    actions:[
      '故事的最后'
    ]
  },
  {
    name:'更好的未来',
    title: '结局：更好的未来',
    description: `你扑上前去，尽力阻止了污染的神明残屑向外面扩散，泣玉发出神奇的光，净化了大部分污染，一直没有作用的技能木弹发挥了作用，将剩余所有污染吸收带劲，最后消失在了世间。勇者成功拯救了世界，污染被彻底清除！`,
    actions: [
      '查看统计',
      '下一局游戏'
    ]
  },
  {
    name:'好的结局',
    title: '结局：一切将迎来好的结局',
    description: `你扑上前去，尽力阻止了污染的神明残屑向外面扩散，泣玉发出神奇的光，净化了大部分污染。勇者成功拯救了世界！`,
    actions: [
      '查看统计',
      '下一局游戏'
    ]
  },
  {
    name:'污染的世界',
    title: '结局：污染的世界',
    description: `你扑上前去，但无法阻止污染的神明残屑向外面扩散，泣玉发出光芒但无济于事，仿佛有什么存在发出一声叹息。一切都被污染了！`,
    actions: [
      '查看统计',
      '下一局游戏'
    ]
  },
  {
    name:'战败结局',
    title: "Game Over",
    description: `你距离真相还很远，下辈子注意点！`,
    actions: [
      "查看统计",
      "下辈子",
    ].filter(Boolean)
  },
  {
    name: "最初的剧情事件",
    title: "最初的剧情事件",
    description: "村庄被暴动的侵染者毁灭了，你是唯一可能逃离的人！现在做出行动吧：",
    actions: [
      '从林地逃走',
      '冒险探索',
      '使用物品'
    ]
  }
].filter(Boolean);

const rpgGameActionData = [
  { name: "休息回复",text: "休息回复", type: "rest",},
  { name: "查看后续",text: "查看后续", type: "end:lose" },
  { name: '开始战斗',text: '开始战斗', type: 'startBattle' },
  { name: '故事的最后',text: '故事的最后', type: 'lastStory' },
  {name: '下一局游戏', text: '下一局游戏', type: 'regame' },
  { name: "下辈子",text: "下辈子", type: "regame" },
  { name: "查看统计", text: "查看统计", type: "viewStat" },
  {name:'从林地逃走', text: "从林地逃走", type: "escape" },
  {name:'继续前行', text: "继续前行", type: "escape",require:{isLastLocation:false,} },
  {name:'返回', text: "返回", type: "goForward",require:{isFirstLocation:false,} },
  {name:'冒险探索',text: "冒险探索", type: "explore"},
  { name: '使用物品', text: '使用物品', type: 'useItem',require:{hasSomeItem:true,}, },
].filter(Boolean);
