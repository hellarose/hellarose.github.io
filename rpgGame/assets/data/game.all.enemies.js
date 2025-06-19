const rpgGameEnemyData = [
  {
    id: "road1",
    name: "路边一条",
    icon: rpgGameIconData.eMo,
    hp: 4,
    maxHp: 4,
    attack: 1,
    reward: {
      exp: 5, gold: 5, item: [
        { name: '物品宝箱', rate: 5 }
      ], equip: [
        {
          type: 'accessory',
          name: "奇怪吊坠",
          rate: 5,
          icon: rpgGameIconData.diaoZhui,
          criticalRate: 30,
          criticalDamage: 50,
        }
      ]
    }
  },
  {
    id: "road2",
    name: "路边一筒",
    icon: rpgGameIconData.guiMian,
    hp: 3,
    maxHp: 3,
    attack: 2,
    reward: {
      exp: 5, gold: 5, item: [
        { name: '物品宝箱', rate: 5 }
      ], equip: [
        {
          type: 'accessory',
          name: "奇怪吊坠",
          rate: 5,
          icon: rpgGameIconData.diaoZhui,
          criticalRate: 30,
          criticalDamage: 50,
        }
      ]
    }
  },
  {
    id: "road3",
    name: "路边一万",
    icon: rpgGameIconData.xiaoChou,
    hp: 2,
    maxHp: 2,
    attack: 3,
    reward: {
      exp: 5, gold: 5, item: [
        { name: '物品宝箱', rate: 5 }
      ], equip: [
        {
          type: 'accessory',
          name: "奇怪吊坠",
          rate: 5,
          icon: rpgGameIconData.diaoZhui,
          criticalRate: 30,
          criticalDamage: 50,
        }
      ]
    }
  },
  {
    id: "goblin1",
    name: "哥布木",
    icon: rpgGameIconData.youLing,
    hp: 4,
    maxHp: 4,
    attack: 2,
    reward: {
      exp: 6, gold: 6, item: [
        { name: '物品宝箱', rate: 10 }
      ], equip: [
        {
          type: 'accessory',
          name: "奇怪吊坠",
          rate: 10,
          icon: rpgGameIconData.diaoZhui,
          criticalRate: 30,
          criticalDamage: 50,
        }
      ]
    }
  },
  {
    id: "goblin2",
    name: "哥布林",
    icon: rpgGameIconData.waiXingRen,
    hp: 3,
    maxHp: 3,
    attack: 3,
    reward: {
      exp: 6, gold: 6, item: [
        { name: '物品宝箱', rate: 10 }
      ], equip: [
        {
          type: 'accessory',
          name: "奇怪吊坠",
          rate: 10,
          icon: rpgGameIconData.diaoZhui,
          criticalRate: 30,
          criticalDamage: 50,
        }
      ]
    }
  },
  {
    id: "goblin3",
    name: "哥布森",
    icon: rpgGameIconData.jiQiRen,
    hp: 4,
    maxHp: 4,
    attack: 3,
    reward: {
      bigExp: 3, bigGold: 3, item: [
        { name: '物品宝箱', rate: 20 }
      ], equip: [
        {
          type: 'accessory',
          name: "奇怪吊坠",
          rate: 20,
          icon: rpgGameIconData.diaoZhui,
          criticalRate: 30,
          criticalDamage: 50,
        }
      ]
    }
  },
  {
    id: "stone1",
    name: "哥石木",
    icon: rpgGameIconData.piFengRen,
    hp: 5,
    maxHp: 5,
    attack: 3,
    reward: {
      exp: 8, gold: 8, item: [
        { name: '物品宝箱', rate: 10 }
      ]
    }
  },
  {
    id: "stone2",
    name: "哥石林",
    icon: rpgGameIconData.lvPiRen,
    hp: 5,
    maxHp: 5,
    attack: 4,
    reward: {
      exp: 9, gold: 9, item: [
        { name: '物品宝箱', rate: 10 }
      ]
    }
  },
  {
    id: "boss1",
    name: "哥石森",
    icon: rpgGameIconData.kuLou,
    hp: 6,
    maxHp: 6,
    attack: 6,
    isBoss: true,
    reward: {
      bigExp: 60, bigGold: 1, item: [
        { name: '物品宝箱', rate: 20 },
        { name: '技能宝箱', rate: 10 },
        ...Array.from({ length: 10 }).map((m, i) => {
          let lvNum = i + 1;
          return {
            name: `财富攻击Lv${lvNum}`,
            rate: 20 / lvNum,
            quantity: 1,
          }
        })
      ],
    }
  },
  // 弟剪木 
  {
    id: "djm1",
    name: "弟剪木",
    icon: rpgGameIconData.kuLou,
    hp: 8,
    maxHp: 8,
    attack: 3,
    reward: {
      exp: 11, gold: 11, item: [
        { name: '物品宝箱', rate: 20 }
      ]
    }
  },
  // 弟剪林
  {
    id: "djl2",
    name: "弟剪林",
    icon: rpgGameIconData.kuLou,
    hp: 10,
    maxHp: 10,
    attack: 2,
    reward: {
      exp: 12, gold: 12, item: [
        { name: '物品宝箱', rate: 20 }
      ]
    }
  },
  // 弟剪森
  {
    id: "djs3",
    name: "弟剪森",
    icon: rpgGameIconData.kuLou,
    hp: 50,
    maxHp: 50,
    attack: 5,
    reward: {
      bigExp: 26, bigGold: 1,
      item: [
        { name: '物品宝箱', rate: 80 }
      ],
      skill: [
        {
          name: "木弹",
          rate: 10,
        },
        {
          name: "果弹",
          rate: 5,
        }
      ],
    }
  },
  // 弟剪吹
  {
    id: "djc000",
    name: "弟剪吹",
    icon: "✂",
    hp: 66,
    maxHp: 66,
    attack: 6,
    reward: {
      bigExp: 36, bigGold: 6,
      item: [
        { name: '物品宝箱', rate: 10 },
        { name: '技能宝箱', rate: 10 }
      ],
    }
  },
  {
    id: "undefined",
    name: "undefined",
    icon: "404",
    hp: Math.floor(Math.random() * 200) + 1,
    maxHp: 250,
    attack: Math.floor(Math.random() * 80) + 1,
    reward: {
      bigExp: Math.floor(Math.random() * 200) + 1,
      bigEold: Math.floor(Math.random() * 20) + 1,
      item: [
        { name: '物品宝箱', rate: 100 },
        { name: '技能宝箱', rate: 20 }
      ],
      skill: [
        {
          name: "掷骰子",
          rate: 5,
        }
      ],
      equip: [
        {
          id: "datouziWp",
          name: "单面骰子",
          icon: rpgGameIconData.touZi,
          attack: Math.floor(Math.random() * 200) + 1,
          type: 'weapon',
          rate: 5
        },
        {
          id: "datouziAm",
          name: "宽面骰子",
          icon: rpgGameIconData.touZi,
          defend: Math.floor(Math.random() * 200) + 1,
          type: 'armor',
          rate: 5
        },
        {
          id: "datouziAcs",
          name: "骰子吊坠",
          icon: rpgGameIconData.touZi,
          criticalRate: Math.floor(Math.random() * 100) + 1,
          criticalDamage: Math.floor(Math.random() * 100),
          type: 'accessory',
          rate: 5
        }
      ],
    }
  },
  // 路边大四喜
  {
    id: "rdBossDsx",
    name: "路边大四喜",
    icon: rpgGameIconData.maJiang,
    hp: 400,
    maxHp: 400,
    attack: 40,
    isBoss: true,
    reward: {
      bigExp: 100, bigGold: 1,
      equip: [
        {
          id: "buxi",
          name: "不喜",
          icon: rpgGameIconData.maJiang,
          attack: 44,
          type: 'weapon',
          rate: 20
        }
      ],
      skill: [
        {
          name: "欢愉",
          rate: 5,
        }
      ],
      item: [
        { name: '物品宝箱', rate: 20 },
        { name: '技能宝箱', rate: 10 },
        ...Array.from({ length: 10 }).map((m, i) => {
          let lvNum = i + 1;
          return {
            id: `cur-gold-attack-lv${lvNum}`,
            name: `财富攻击Lv${lvNum}`,
            rate: 20 / lvNum,
            quantity: 1,
          }
        }),
      ]
    }
  },
  {
    id: "boss2",
    name: "路边一条龙",
    icon: rpgGameIconData.long,
    hp: 120,
    maxHp: 120,
    attack: 20,
    isBoss: true,
    onFightStart: {
      status: ['大恢复祝福']
    },
    onRoundStart: {},
    onRound: {
      extraAttack: 1, // 进行一次普攻,
      skill: {
        rate: 0.8, // 80%的概率使用技能
        count: 2,// 使用技能的次数
      }, // 技能使用
    },
    onRoundEnd: {},
    skills: [
      '龙吟', '火弹'
    ],
    status: ['大恢复祝福'],
    reward: {
      bigExp: 100, bigGold: 10,
      equip: [
        {
          id: "weapon1",
          name: "开刃字典",
          icon: rpgGameIconData.shuJi,
          attack: 3,
          type: 'weapon',
          rate: 20
        }
      ],
      skill: [
        {
          name: "龙吟",
          rate: 5,
        }
      ],
      item: [
        { name: '物品宝箱', rate: 20 },
        { name: '技能宝箱', rate: 10 },
      ]
    }
  },{

    id: "RoadSideKing",
    name: "路边王",
    icon: "👿",
    hp: 1e4,
    maxHp: 1e4,
    attack: 1e3,
    defend: 3e2,
    isBoss: true,
    onFightStart: {
      status: ['大恢复祝福']
    },
    onRoundStart: {
      bigAttackDamage: 20,
      bigHpRecover: 20,
    },
    onRound: {

      status: {
        player: { '中毒': 2 },
        enemy: { '恢复祝福': 1 },
      },
      extraAttack: 2,
      skill:1,
    },
    onRoundEnd: {
      absoluteDamage: 100,
    },
    onDeath:{
      event:{
        title: "一切都给本神陪葬吧！",
        description: `路边王临死发出怒吼并向世界释放诅咒！`,
        actions:[
          { text: '故事的最后', type: 'lastStory' }
        ]
      },
    },
    skill: [
      '神血弹', '错误的神术', "路边魔啸"
    ],
    inventory: [
      { name: '魔化药剂' },
      { name: '神力结晶' },
      { name: '镇国大炮' },
    ],
    status: [{ name: '大恢复祝福', value: 3 }],
    equipment: {
      weapon: {
        name: '亵渎之杖',
        attack: 1000,
        bigAttack: 50,
      },
      armor: {
        name: '染血星袍',
        defend: 1000,
        bigDefend: 100,
      },
      accessory: {
        name: '染血神目',
        criticalRate: 90,
        criticalDamage: 90,
      },
    },
  }
].filter(Boolean);