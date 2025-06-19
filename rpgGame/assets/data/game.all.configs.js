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
  hp: 5,
  maxHp: 5,
  attack: 1,
  defend: 0,
  gold: 0,
  exp: 0,
  props:['hp','attack','defend'],
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

// 玩家角色升级奖励规则
const rpgGamePlayerLevelUpRewardData = [
  {
    type:'range',
    start:1,
    end:5,
    reward:{
      hp:1,
    }
  },
  {
    type:'single',
    value:5,
    reward:{
      skill:['火弹']
    }
  },
  {
    type:'range',
    start:6,
    end:10,
    reward:{
      hp:1,
      attack:1,
    }
  },
  {
    type:'single',
    value:10,
    reward:{
      skill:['电弹']
    }
  },
  {
    type:'range',
    start:11,
    end:15,
    reward:{
      hp:2,
      attack:1,
      defend:1,
    }
  },
  {
    type:'single',
    value:15,
    reward:{
      skill:['治疗术']
    }
  },
  {
    type:'range',
    start:16,
    end:20,
    reward:{
      hp:4,
      attack:2,
      defend:2,
    }
  },
  {
    type:'single',
    value:20,
    reward:{
      skill:['大治疗术']
    }
  },
  {
    type:'range',
    start:21,
    end:25,
    reward:{
      hp:8,
      attack:4,
      defend:4,
    }
  },
  {
    type:'single',
    value:25,
    reward:{
      skill:['强力击']
    }
  },
  {
    type:'range',
    start:26,
    end:30,
    reward:{
      hp:16,
      attack:8,
      defend:8,
    }
  },
  {
    type:'single',
    value:30,
    reward:{
      options:[
        {type:'item',name:'技能宝箱'},
        {type:'item',name:'物品宝箱'},
        {type:'prop',name:'额外属性'},
        {type:'specialProp',name:'特殊属性'},
      ],
      propOptions:[
        {name:'大生命',prop:'bigHp',value:20,description:'增加 20 百分点的大生命'},
        {name:'大攻击',prop:'bigAttack',value:20,description:'增加 20 百分点的大攻击'},
        {name:'大防御',prop:'bigDefend',value:20,description:'增加 20 百分点的大防御'},
      ],
      specialOptions:[
        {name:'暴击率',prop:'criticalRate',value:1,description:'增加1百分比的暴击率'},
        {name:'暴击伤害',prop:'criticalDamage',value:1,description:'增加1百分比的暴击伤害'},
      ],
    }
  },
  {
    type:'range',
    start:31,
    end:35,
    reward:{
      doubleProp:['hp','attack','defend'],
    }
  },
  {
    type:'single',
    value:35,
    reward:{
      options:[
        {type:'item',name:'技能宝箱'},
        {type:'item',name:'物品宝箱'},
        {type:'prop',name:'额外属性'},
        {type:'specialProp',name:'特殊属性'},
      ],
      propOptions:[
        {name:'大生命',prop:'bigHp',value:20,description:'增加 20 百分点的大生命'},
        {name:'大攻击',prop:'bigAttack',value:20,description:'增加 20 百分点的大攻击'},
        {name:'大防御',prop:'bigDefend',value:20,description:'增加 20 百分点的大防御'},
      ],
      specialOptions:[
        {name:'暴击率',prop:'criticalRate',value:1,description:'增加1百分比的暴击率'},
        {name:'暴击伤害',prop:'criticalDamage',value:1,description:'增加1百分比的暴击伤害'},
        {name:'回合回复',prop:'hpRecover',value:1,description:'增加1点回合回复'},
      ],
    }
  },
  {
    type:'range',
    start:36,
    end:40,
    reward:{
      tenningProp:'all',
    }
  },
  {
    type:'single',
    value:40,
    reward:{
      options:[
        {type:'item',name:'技能宝箱'},
        {type:'item',name:'物品宝箱'},
        {type:'prop',name:'额外属性'},
        {type:'specialProp',name:'特殊属性'},
      ],
      propOptions:[
        {name:'大生命',prop:'bigHp',value:20,description:'增加 20 百分点的大生命'},
        {name:'大攻击',prop:'bigAttack',value:20,description:'增加 20 百分点的大攻击'},
        {name:'大防御',prop:'bigDefend',value:20,description:'增加 20 百分点的大防御'},
      ],
      specialOptions:[
        {name:'暴击率',prop:'criticalRate',value:1,description:'增加1百分比的暴击率'},
        {name:'暴击伤害',prop:'criticalDamage',value:1,description:'增加1百分比的暴击伤害'},
        {name:'回合回复',prop:'hpRecover',value:1,description:'增加1点回合回复'},
        {name:'回合追击',prop:'chaseAttack',value:1,description:'增加1点回合追击'},
      ],
    }
  },
  {
    type:'range',
    start:41,
    reward:{
      funnyProp:'all',
    }
  },
  {
    type:'perFrom',
    from:45,
    length:5,
    reward:{
      options:[
        {type:'item',name:'技能宝箱'},
        {type:'item',name:'物品宝箱'},
        {type:'prop',name:'额外属性'},
        {type:'specialProp',name:'特殊属性'},
      ],
      propOptions:[
        {name:'大生命',prop:'bigHp',value:20,description:'增加 20 百分点的大生命'},
        {name:'大攻击',prop:'bigAttack',value:20,description:'增加 20 百分点的大攻击'},
        {name:'大防御',prop:'bigDefend',value:20,description:'增加 20 百分点的大防御'},
      ],
      specialOptions:[
        {name:'暴击率',prop:'criticalRate',value:1,description:'增加1百分比的暴击率'},
        {name:'暴击伤害',prop:'criticalDamage',value:1,description:'增加1百分比的暴击伤害'},
        {name:'回合回复',prop:'hpRecover',value:1,description:'增加1点回合回复'},
        {name:'回合追击',prop:'chaseAttack',value:1,description:'增加1点回合追击'},
        {name:'闪避率',prop:'dodgeRate',value:1,description:'增加1百分比的闪避率'},
        {name:'额外绝对伤害',prop:'extraAbsoluteDamage',value:1,description:'增加1百分比的额外绝对伤害'},
      ],
    }
  },
].filter(Boolean);

function rpgGameWhatLevelUpReward(level=1){
  let reward = {}
  // range 设定一个等级范围内的升级属性变化 不给出end就是最后一个 range ， end认为是正无穷大
  // range 应互补相交 且 互补为全部等级
  let theRange = rpgGamePlayerLevelUpRewardData.find(item=>item.type=='range' && item.start<=level && (item.end?(level<=item.end):true))
  // 特殊配置 dounbleProp 与 tenningProp 分别为 将当前属性翻倍 和 乘以 10
  // funnyProp 为毁灭性配置 对应改配置涵盖属性 可得到任意大的提升
  let thePropsReward = theRange.reward
  if(thePropsReward.hp){
    // hp 奖励代表 最大生命值 和 当前生命值 同时提升的奖励
    reward.hp = (reward.hp||0) + thePropsReward.hp
  }
  if(thePropsReward.attack){
    reward.attack = (reward.attack||0) + thePropsReward.attack
  }
  if(thePropsReward.defend){
    reward.defend = (reward.defend||0) + thePropsReward.defend
  }
  reward.doubleProp = thePropsReward.doubleProp;
  reward.tenningProp = thePropsReward.tenningProp;
  reward.funnyProp = thePropsReward.funnyProp;

  // 设 single 为 skill 或 给出多项进行选择的类目 不直接给属性
  // 对特定等级 single 最多存在一个
  let theSingle = rpgGamePlayerLevelUpRewardData.find(item=>item.type=='single' && item.value==level)
  if(theSingle){
    reward.skill = reward.skill;
    reward.options = theSingle.options;
    reward.propOptions = theSingle.propOptions;
    reward.specialOptions = theSingle.specialOptions;
  }

  // perFrom 类似 single 从 from 等级起 每 length 触发一次 奖励形式与 single 逻辑结构一致
  // form length 相同的 perFrom 不可共存 反之 from  length 至少有一个不同时 可共存
  let perFroms = rpgGamePlayerLevelUpRewardData.filter(m=>m.type==='perFrom' && m.from <= level && ((level - m.from) % m.length === 0))
  perFroms.forEach(perSet=>{
    if(perSet.skill){
      if(reward.skill){
        // 合并去重
        reward.skill = [...new Set([...reward.skill, ...perSet.skill])]
      }else{
        reward.skill = perSet.skill
      }
    }
    if(perSet.options){
      if(reward.options){
        // 查询是否有同名选项 存在则决定为数值更高的
        perSet.options.forEach(option=>{
          let find = reward.options.find(item=>item.name === option.name)
          if(find){
            if(find.value < option.value){
              find.value = option.value
            }
          }else{
            reward.options.push(option)
          }
        })
      }else{
        reward.options = perSet.options
        reward.propOptions = perSet.propOptions;
        reward.specialOptions = perSet.specialOptions;
      }
    }
  })
  if(reward.item && !reward.item.length){
    delete reward.item
  }
  if(reward.skill && !reward.skill.length){
    delete reward.skill
  }
  if(reward.options && !reward.options.length){
    delete reward.options
  }
  if(reward.propOptions && !reward.propOptions.length){
    delete reward.propOptions
  }
  if (reward.specialOptions && !reward.specialOptions.length){
    delete reward.specialOptions
  }
  return reward
}