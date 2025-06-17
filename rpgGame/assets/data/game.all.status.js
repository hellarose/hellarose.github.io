const rpgGameStatusData = [
  { target: 'oppo', id: 'poison', name: '中毒', statusType: 'normal', damageType: 'poison', damage: 1, removeOn: '0', autoOn: 'roundStart', description: '回合开始每一点状态值造成1点毒属性伤害并状态值减一' },
  { target: 'self', id: 'recover-bless', name: '恢复祝福', statusType: 'bless', hp: 2, removeOn: 'fightEnd', autoOn: 'roundStart', description: '回合开始每一点状态值恢复2点生命值', },
  { target: 'self', id: 'big-recover-bless', name: '大恢复祝福', statusType: 'bless', bigHp: 5, removeOn: 'fightEnd', autoOn: 'roundStart', description: '回合开始每一点状态值恢复5%生命值', },
  { target: 'self', id: 'damage-bless', name: '杀伤祝福', statusType: 'bless', damageType: 'absolute', damageSumFight: 10, autoOn: 'roundEnd', description: '回合末，根据这场战斗我方已造成的总伤害，造成10%绝对伤害', },
  { target: 'self', id: 'round-bless', name: '额外回合', statusType: 'bless', autoOn: 'roundEnd', removeOn: '0', description: '拥有额外的回合' },
  { target: 'self', id: 'armour-bless', name: '护甲祝福', statusType: 'bless', autoOn: 'roundStart', armour: 2, description: '回合开始每一点状态值获得2点护甲拥有额外的回合' },
  { target: 'self', id: 'nohurt-bless', name: '无敌祝福', statusType: 'bless', description: '持续期间免疫伤害' },
  { target: 'self', id: 'self-round-nohurt-bless', name: '自回合无敌', statusType: 'bless', description: '自身回合内不会受到伤害' },
  { target: 'oppo', id: 'action-forbid-bless', name: '禁止行动', statusType: 'bless', removeOn: '0', description: '回合行动阶段无法行动' },
].filter(Boolean)