function rpgGameSkillWaterShotFactory(lv=1){
  return {
    id:`waterShot_${Date.now()}_lv${lv}`,
    name: `水弹Lv${lv}`,
    skillSeries:'waterShot',
    lv:lv,
    icon: rpgGameIconData.shuiDi,
    skillType:'damage',
    bigAttackDamage:100 + lv * 10,
    damageType: 'water',
    cost:5,
    description:`造成${100 + lv * 10}%攻击力的水属性伤害`,
    skillRareLevel:'normal',
  }
}
function rpgGameSkillWaterGunFactory(lv=1){
  return {
    id:`waterGun_${Date.now()}_lv${lv}`,
    name: `水枪Lv${lv}`,
    skillSeries:'waterGun',
    lv:lv,
    icon: rpgGameIconData.shuiDi,
    skillType:'damage',
    bigAttackDamage:150 + lv * 15,
    damageType: 'water',
    cost:5,
    description:`造成${150 + lv * 15}%攻击力的水属性伤害`,
    skillRareLevel:'rare',
  }
}
function rpgGameSkillWaterDragonShotFactory(lv=1){
  return {
    id:`waterDragonShot_${Date.now()}_lv${lv}`,
    name: `水龙弹Lv${lv}`,
    skillSeries:'waterDragonShot',
    lv:lv,
    icon: rpgGameIconData.taiFeng,
    skillType:'damage',
    bigAttackDamage:200 + lv * 25,
    damageType: 'water',
    cost:5,
    description:`造成${200 + lv * 25}%攻击力的水属性伤害`,
    skillRareLevel:'superRare',
  }
}
function rpgGameSkillWaterDragonWaveFactory(lv=1){
  return {
    id:`waterDragonWave_${Date.now()}_lv${lv}`,
    name: `水龙波Lv${lv}`,
    skillSeries:'waterDragonWave',
    lv:lv,
    icon: rpgGameIconData.taiFeng,
    skillType:'damage',
    bigAttackDamage:300 + lv * 50,
    damageType: 'water',
    cost:5,
    description:`造成${300 + lv * 50}%攻击力的水属性伤害`,
    skillRareLevel:'superSuperRare',
  }
}

const rpgGameSkillData = [ // todo  cost cd 
// -------------- 水系 --------------
  ...Array.from({length:10}).map((m,i)=>{
    return rpgGameSkillWaterShotFactory(i+1)
  }),
  ...Array.from({length:5}).map((m,i)=>{
    return rpgGameSkillWaterGunFactory(i+1)
  }),
  ...Array.from({length:3}).map((m,i)=>{
    return rpgGameSkillWaterDragonShotFactory(i+1)
  }),
  rpgGameSkillWaterDragonWaveFactory(),
  { id: "wind", name: "风弹", icon: rpgGameIconData.longJuanFeng, skillType: 'damage', bigAttackDamage: 110, damageType: 'wind', cost: 6, description: "造成110%攻击力的风属性伤害" },
  { id: "fire", name: "火弹", icon: rpgGameIconData.huoYan, skillType: 'damage', bigAttackDamage: 112, damageType: 'fire', cost: 8, description: "造成112%攻击力的火属性伤害" },
  { id: "lightning", name: "电弹", icon: rpgGameIconData.electric, skillType: 'damage', bigAttackDamage: 115, damageType: 'electric', cost: 10, description: "造成115%攻击力的电属性伤害" },
  { id: "ice", name: "冰弹", icon: rpgGameIconData.snow, skillType: 'damage', bigAttackDamage: 120, damageType: 'water', cost: 5, description: "造成120%攻击力的冰属性伤害" },
  { id: "power", name: "强力击", icon: rpgGameIconData.strong, skillType: 'damage', bigAttackDamage: 200, damageType: 'normal', cost: 15, description: "造成200%攻击力的强力伤害" },
  { id: "heal", name: "治疗术", icon: rpgGameIconData.heart, skillType: 'heal', heal: 20, cost: 12, description: "恢复20点生命值" },
  { id: "big-heal", name: "大治疗术", icon: rpgGameIconData.heart, skillType: 'heal', bigHeal: 30, cost: 12, description: "恢复30%生命值" },
  { id: "mp-getting", name: "回魔术", icon: rpgGameIconData.yuZhou, skillType: 'mpRecover', recover: 20, description: "获得20点魔法值" },
  { id: "big-mp-getting", name: "大回魔术", icon: rpgGameIconData.yuZhou, skillType: 'mpRecover', bigRecover: 20, description: "获得20%魔法值" },
  { id: "gold", name: "钱袋猛击", icon: rpgGameIconData.qianDai, skillType: 'damage', bigGoldDamage: 20, damageType: 'normal', isAnyCost: true, costType: 'gold', bigCost: 10, description: "造成20%当前金币数量的伤害" },
  { id: "power", name: "龙吟", icon: rpgGameIconData.longTou, skillType: 'damage', bigEnemyMaxHpDamage: 30, damageType: 'normal', cost: 30, description: "造成敌人最大生命值30%的伤害", },
  { id: "huanyu", name: "欢愉", icon: rpgGameIconData.kaiXin, skillType: 'damage', bigAttackDamage: 280, damageType: 'normal', cost: 30, description: "280%攻击力的伤害", },
  { id: "touzi", name: "掷骰子", icon: rpgGameIconData.touZi, skillType: 'damage', randomDamage: 200, isUnico: true, damageType: 'normal', cost: Math.floor(Math.random() * 200) + 1, description: "每个掷好的骰子都不一样,造成最大200点伤害", },
  { id: "woodShot", name: "木弹", icon: rpgGameIconData.daShu, skillType: 'damage', damage: 1, damageType: 'normal', cost: 0, description: "没啥伤害", },
  { id: "fruitShot", name: "果弹", icon: rpgGameIconData.yeZi, skillType: 'damage', bigAttackDamage: 300, damageType: 'normal', cost: 0, description: "毕业", },
  { id: 'poison-ball', name: '毒球', icon: rpgGameIconData.lvXin, skillType: 'status', status: { name: '中毒', value: 3 }, description: '让敌人中毒', },
  { id: 'random-use', name: '技能盲盒', icon: rpgGameIconData.duYan, skillType: 'rule', ruleType: 'randomSkill', successRate: 50, /* 技能使用成功概率*/effect: { type: 'item', item: '技能宝箱', }, description: '随机使用一种其他技能', },
  { id: 'random-box', name: '物品盲盒', icon: rpgGameIconData.xiangZi, skillType: 'rule', ruleType: 'randomItem', successRate: 50, /* 技能使用成功概率 */effect: { type: 'item', item: '物品宝箱', }, description: '成功使用时获得并开启一个物品宝箱', },
  { id: "hp-bless", name: "自然祝福", icon: rpgGameIconData.lvXin, skillType: 'bless', blessType: 'hook', hook: 'onRoundStart', hpRecover: 2, description: "为自己添加一个祝福，随后本次战斗中，每当回合开始，获得生命值恢复", },
  { id: '神血弹', name: '神血弹', icon: rpgGameIconData.eMo, skillType: 'damage', damageType: 'absolute', bigAttackDamage: 400, cost: 12, description: '被污染的神明力量', },
  { id: '错误的神术', name: '错误的神术', icon: rpgGameIconData.eMo, skillType: 'damage', damageType: 'absolute', bigAttackDamage: 500, cost: 12, description: '被污染的神明力量', },
  { id: '路边魔啸', name: '路边魔啸', icon: rpgGameIconData.eMo, skillType: 'damage', damageType: 'absolute', bigAttackDamage: 600, cost: 12, description: '被污染的神明力量', },
].filter(Boolean)

const damageProps = [
  {prop:'damage',done(skill){
    return skill.damage;
  }},
  {prop:'bigAttackDamage',done(skill,scope){
    return scope.attack * (skill.bigAttackDamage/100)
  }},
  {prop:'bigGoldDamage',done(skill,scope){
    return scope.gold * ( skill.bigGoldDamage/100)
  }},
  {prop:'bigEnemyMaxHpDamage',done(skill,scope){
    return scope.enemyMaxHp * (skill.bigEnemyMaxHpDamage/100)
  }},
  {prop:'randomDamage',done(skill){
    return Math.floor(Math.random() * skill.randomDamage + 1)
  }}
]

const healProps = [
  {prop:'heal',done(skill,scope){
    return skill.heal
  }},
  {prop:'bigHeal',done(skill,scope){
    return scope.attack * (skill.bigHeal/100)
  }}
]

const mpRecoverProps = [
  {prop:'recover',done(skill,scope){
    return skill.recover
  }},
  {prop:'bigRecover',done(skill,scope){
    return scope.mp * (skill.bigRecover/100)
  }}
]