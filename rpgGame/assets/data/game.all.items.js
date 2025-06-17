
const rpgGameItemData = [
  // 伤害类
  { id: "bomb", name: "土炸药", icon: rpgGameIconData.zhaDan, quantity: 1, effectType: 'damage', effect: { damage: 15 }, description: '造成15点伤害' },
  { id: "gold-attack", name: "千金一击", icon: rpgGameIconData.chaoPiao, quantity: 1, effectType: 'damage', effect: { damangeCost: { gold: 1000 }, damage: 1000 }, description: '消耗1000金币造成1000伤害' },
  { id: "super-attack", name: "虚空助拳", icon: rpgGameIconData.quanTou, quantity: 1, effectType: 'damage', effect: { damage: 100, damageType: 'absolute' }, description: '造成100点绝对伤害' },
  { id: "big-gold-attack", name: "万金豪击", icon: rpgGameIconData.qianDai, quantity: 1, effectType: 'damage', effect: { damangeCost: { gold: 10000 }, damage: 10000 }, description: '消耗10000金币造成10000伤害' },
  // 财富攻击系列
  ...Array.from({ length: 10 }).map((m, i) => {
    let lvNum = i + 1;
    return {
      id: `cur-gold-attack-lv${lvNum}`,
      name: `财富攻击Lv${lvNum}`,
      icon: rpgGameIconData.qianDai,
      quantity: 1,
      effectType: 'damage',
      effect: { damageCost: { bigGold: 10 * lvNum }, bigGoldDamage: 20 * lvNum },
      description: `消耗${10 * lvNum}%当前财富，造成消耗前财富量${20 * lvNum}%的伤害`,
    }
  }),
  { id: "super-bomb", name: "大爆炸", icon: rpgGameIconData.baoZha, quantity: 1, effectType: 'damage', effect: { bigDamage: 1000 }, description: '基于攻击力造成1000%的伤害' },
  // 恢复类
  { id: "potion", name: "回复药", icon: rpgGameIconData.yaoJi, quantity: 1, effectType: 'heal', effect: { hp: 20 }, description: '恢复20点生命值' },
  { id: "big-potion", name: "大回复药", icon: rpgGameIconData.yaoJi, quantity: 1, effectType: 'heal', effect: { bigHp: 20 }, description: '恢复20%生命值' },
  // 强化类
  { id: "strong-potion", name: "强化药", icon: rpgGameIconData.jiaoNang, quantity: 1, effectType: 'enPower', effect: { attack: 3, duration: 3 }, description: '提升3点攻击力' },
  { id: "big-strong-potion", name: "大强化药", icon: rpgGameIconData.jiaoNang, quantity: 1, effectType: 'enPower', effect: { attack: 3, duration: Infinity }, description: '永久提升3点攻击力' },
  { id: 'qiyu', name: '泣玉', icon: rpgGameIconData.shuiJing, quantity: Infinity, effectType: 'story', description: '一看就有大用' },
  { id: 'item-box', name: '物品宝箱', icon: rpgGameIconData.xiangZi, rate: 20, effectType: 'box', description: '随机获得一个物品或什么都没有' },
  { id: 'skill-box', name: '技能宝箱', icon: rpgGameIconData.duYan, rate: 20, effectType: 'box', description: '随机获得一个技能或什么都没有' },
  { id: '魔化药剂', name: '魔化药剂', icon: rpgGameIconData.eMo, effectType: 'rule', description: '受污染的神明遗物' },
  { id: '神力结晶', name: '神力结晶', icon: rpgGameIconData.eMo, effectType: 'rule', description: '受污染的神明遗物' },
  { id: '镇国大炮', name: '镇国大炮', icon: rpgGameIconData.eMo, effectType: 'rule', description: '受污染的神明遗物' },
].filter(Boolean);

const rgpGameCommonItemBoxResults = [
  // 伤害类
  // { id: "bomb", resultType: 'item', name: "土炸药", rate: 20 },
  { id: "gold-attack", resultType: 'item', name: "千金一击", rate: 20 },
  { id: "super-attack", resultType: 'item', name: "虚空助拳", rate: 5 },
  { id: "big-gold-attack", resultType: 'item', name: "万金豪击", rate: 5 },
  { id: "super-bomb", resultType: 'item', name: "大爆炸", rate: 5 },
  // 恢复类
  // { id: "potion", resultType: 'item', name: "回复药", rate: 20 },
  { id: "big-potion", resultType: 'item', name: "大回复药", rate: 5 },
  // 强化类
  { id: "strong-potion", resultType: 'item', name: "强化药", rate: 10 },
  { id: "big-strong-potion", resultType: 'item', name: "大强化药", rate: 5 },

].filter(Boolean)



const rgpGameCommonSkillBoxResults = [
  { resultType: 'skill', name: '毒球', rate: 20, },
  { resultType: 'skill', name: '冰弹', rate: 20, },
  { resultType: 'skill', name: '自然祝福', rate: 80, },
  // {resultType:'skill',name:'',rate:10,},
  // {resultType:'skill',name:'',rate:5,},
  // {resultType:'skill',name:'',rate:2,},
  // {resultType:'skill',name:'',rate:1,},
].filter(Boolean);

