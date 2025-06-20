const rpgGameEquipmentData = [
  // ---------------- 武器 ----------------
  { eqpType: 'weapon', name: "硬木棍", icon: rpgGameIconData.fight, attack: 1 ,description:'幼年捡到的极品木棍，如今是唯一傍身的武器'},
  { id: "weapon1", name: "开刃字典", icon: rpgGameIconData.shuJi, attack: 3, eqpType: 'weapon', rate: 20,description:'锋利的知识', },
  { id: "buxi", name: "不喜", icon: rpgGameIconData.maJiang, attack: 44, eqpType: 'weapon', rate: 20,description:'会让敌人不开心的武器', },
  { id: "datouziWp", name: "单面骰子", icon: rpgGameIconData.touZi, eqpType: 'weapon',  randomGain:[{prop:'bigAttack',max:600,min:100}],description:'你能获得最好的骰子吗', },
  { eqpType: 'weapon', name: '亵渎之杖', attack: 1000, bigAttack: 50,description:'透过邪恶的污秽，还能辨认出那和神像上的权杖一模一样，你知道这不是赝品，这糟糕极了', },
  // ---------------- 盔甲 ----------------
  { eqpType: 'armor', name: "树皮甲", icon: rpgGameIconData.dunPai, defend: 1,description:'一块稍微让人安心的树皮', },

  { id: "datouziAm", name: "宽面骰子", icon: rpgGameIconData.touZi,  randomGain:[{prop:'defend',max:600,min:100}],  eqpType: 'armor', rate: 5,description:'这种骰子也许能用来做井盖', },
  { eqpType: 'armor', name: '染血星袍', defend: 1000, bigDefend: 100,description:'去除那些血迹，那就是神像披着的星袍，它怎么会在这里？', },
  // ---------------- 饰品 ----------------

  { eqpType: 'accessory', name: "奇怪吊坠", rate: 5, icon: rpgGameIconData.diaoZhui, criticalRate: 30, criticalDamage: 50,description:'污浊脑袋们完全不知道这东西的好处', },
  { id: "datouziAcs", name: "骰子吊坠", icon: rpgGameIconData.touZi,randomGain:[  {prop:'criticalRate',max:100,min:1},  {prop:'criticalDamage',max:100,min:0}],description:'对于赌徒来说这骰子棒极了' },
  { eqpType: 'accessory', name: '染血神目', criticalRate: 90, criticalDamage: 90,description:'你被瞪地头晕目眩', },
].filter(Boolean)