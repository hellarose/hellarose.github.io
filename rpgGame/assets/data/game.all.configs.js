const rpgGameIconData = {
  all: '🦠💎💍🌌🌀⚔️🛡️🧪💣💊📦💧🔥💴👊💰💥👹👺🤡📿👻👾🤖🦹🧟💀🥥✂🎲🀄🐉📕🌪️⚡💪💖🐲😃🌳💚👁‍🗨❄',
  shuiJing: '🦠',
  zuanShi: '💎',
  jieZhi: '💍',
  yuZhou: '🌌',
  taiFeng: '🌀',
  fight: '⚔️',
  dunPai: '🛡️',
  yaoJi: '🧪',
  zhaDan: '💣',
  jiaoNang: '💊',
  xiangZi: '📦',
  shuiDi: '💧',
  huoYan: '🔥',
  chaoPiao: '💴',
  quanTou: '👊',
  qianDai: '💰',
  baoZha: '💥',
  eMo: '👹',
  guiMian: '👺',
  xiaoChou: '🤡',
  diaoZhui: '📿',
  youLing: '👻',
  waiXingRen: '👾',
  jiQiRen: '🤖',
  piFengRen: '🦹',
  lvPiRen: '🧟',
  kuLou: '💀',
  yeZi: '🥥',
  jianDao: '✂',
  touZi: '🎲',
  maJiang: '🀄',
  long: '🐉',
  shuJi: '📕',
  longJuanFeng: '🌪️',
  electric: '⚡',
  strong: '💪',
  heart: '💖',
  longTou: '🐲',
  kaiXin: '😃',
  daShu: '🌳',
  lvXin: '💚',
  duYan: '👁‍🗨',
  snow: '❄',
}

const rpgGameDamageTypeMapper = {
  normal: '普通伤害',
  water: '水属性伤害',
  fire: '火属性伤害',
  ice: '冰属性伤害',
  wind: '风属性伤害',
  electric: '电属性伤害',
  poison: '毒属性伤害',
  absolute: '绝对伤害',
}


const rpgGameBasePlayerData = {
  name: "勇者",
  hp: 4,
  maxHp: 4,
  attack: 1,
  defend: 0,
  gold: 0,
  exp: 0,
  level: 1,
  nextLevelExp: 10,
  equipment: {
    weapon: { name: "硬木棍", },
    armor: { name: "树皮甲", },
    accessory: null
  },
  inventory: [
    { name: "物品宝箱", quantity: 1, }
  ],
  skills: [
    { name: "水弹Lv1" }
  ],
  status: [],
  statusEffects: [],
  bag: [],
  history: [],
  onFightStart: {},
  onFigntEnd: {},
  onRoundStart: {},
  onRoundEnd: {},
  onActionEnd: {},
  onLevelUp: {},
  onDeath: {},
  onDefeat: {},
  onGetItem: {},
  onGetSkill: {},
}

const rpgGameBaseCombatData = {
  active: false,
  enemy: null,
  totalRound: 0,
  isPlayerRound:true,
  currentTurn: 'player',
  playerRoundNum: 0,
  enemyRoundNum: 0,
  log: []
}

const rpgGameVeryStartEvent = {
  title: "最初的剧情事件",
  description: "村庄被暴动的侵染者毁灭了，你是唯一可能逃离的人！现在做出行动吧：",
  actions: [
    { text: "从林地逃走", type: "escape" },
    { text: "冒险搜寻", type: "explore" },
    { text: '使用物品', type: 'useItem' }
  ]
}