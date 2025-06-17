const rpgGameEnemyData = [
  {
    id: "road1",
    name: "路边一条",
    icon: rpgGameIconData.eMo,
    hp: 8,
    maxHp: 8,
    attack: 2,
    reward: {
      exp: 10, gold: 5, item: [
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
    hp: 10,
    maxHp: 10,
    attack: 3,
    reward: {
      exp: 15, gold: 8, item: [
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
    hp: 12,
    maxHp: 12,
    attack: 4,
    reward: {
      exp: 20, gold: 12, item: [
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
    hp: 15,
    maxHp: 15,
    attack: 5,
    reward: {
      exp: 25, gold: 15, item: [
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
    hp: 18,
    maxHp: 18,
    attack: 6,
    reward: {
      exp: 30, gold: 18, item: [
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
    hp: 20,
    maxHp: 20,
    attack: 7,
    reward: {
      bigExp: 5, bigGold: 1, item: [
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
    hp: 25,
    maxHp: 25,
    attack: 8,
    reward: {
      exp: 80, gold: 80, item: [
        { name: '物品宝箱', rate: 10 }
      ]
    }
  },
  {
    id: "stone2",
    name: "哥石林",
    icon: rpgGameIconData.lvPiRen,
    hp: 30,
    maxHp: 30,
    attack: 9,
    reward: {
      exp: 90, gold: 90, item: [
        { name: '物品宝箱', rate: 10 }
      ]
    }
  },
  {
    id: "boss1",
    name: "哥石森",
    icon: rpgGameIconData.kuLou,
    hp: 50,
    maxHp: 50,
    attack: 12,
    isBoss: true,
    reward: {
      bigExp: 100, bigGold: 10, item: [
        { name: '物品宝箱', rate: 20 },
        ...Array.from({ length: 10 }).map((m, i) => {
          let lvNum = i + 1;
          return {
            id: `cur-gold-attack-lv${lvNum}`,
            name: `财富攻击Lv${lvNum}`,
            rate: 20 / lvNum,
            quantity: 1,
          }
        }),
      ],
      skill: [
        { name: '技能盲盒', rate: 10 }
      ]
    }
  },
  // 弟剪木 
  {
    id: "djm1",
    name: "弟剪木",
    icon: rpgGameIconData.kuLou,
    hp: 30,
    maxHp: 30,
    attack: 6,
    reward: {
      exp: 50, gold: 200, item: [
        { name: '物品宝箱', rate: 20 }
      ]
    }
  },
  // 弟剪林
  {
    id: "djl2",
    name: "弟剪林",
    icon: rpgGameIconData.kuLou,
    hp: 12,
    maxHp: 12,
    attack: 30,
    reward: {
      exp: 100, gold: 20, item: [
        { name: '物品宝箱', rate: 20 }
      ]
    }
  },
  // 弟剪森
  {
    id: "djs3",
    name: "弟剪森",
    icon: rpgGameIconData.kuLou,
    hp: 800,
    maxHp: 800,
    attack: 1,
    reward: {
      bigExp: 1, bigGold: 10,
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
        },
        { name: '技能盲盒', rate: 5 }
      ],
    }
  },
  // 弟剪吹
  {
    id: "djc000",
    name: "弟剪吹",
    icon: "✂",
    hp: 666,
    maxHp: 666,
    attack: 6,
    reward: {
      bigExp: 6, bigGold: 6,
      item: [
        { name: '物品宝箱', rate: 10 }
      ],
      skill: [
        { name: '技能盲盒', rate: 5 }
      ]
    }
  },
  {
    id: "undefined",
    name: "undefined",
    icon: "404",
    hp: Math.floor(Math.random() * 2000) + 1,
    maxHp: 2500,
    attack: Math.floor(Math.random() * 200) + 1,
    reward: {
      bigExp: Math.floor(Math.random() * 200) + 1,
      bigEold: Math.floor(Math.random() * 100) + 1,
      item: [
        { name: '物品宝箱', rate: 100 }
      ],
      skill: [
        {
          name: "掷骰子",
          rate: 5,
        },
        { name: '技能盲盒', rate: 50 }
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
      bigExp: 100, bigGold: 10,
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
        },
        { name: '技能盲盒', rate: 5 },
      ],
      item: [
        { name: '物品宝箱', rate: 20 },
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
    roundAi: {
      onFightStart: {
        status: ['大恢复祝福']
      },
      onRoundStart: {},
      onRound: {
        attack: 1, // 进行一次普攻,
        skill: {
          rate: 0.8, // 80%的概率使用技能
          count: 2,// 使用技能的次数
        }, // 技能使用
      },
      onRoundEnd: {},
    },
    skill: [
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
        },
        { name: '技能盲盒', rate: 5 }
      ],
      item: [
        { name: '物品宝箱', rate: 20 }
      ]
    }
  }
].filter(Boolean);