'use strict'

var weaList = [
    {
        name : 'エクスカリバーA',
        eff : ['HPを30アップ'],
        num : 60,
        put : function ( hp, pow, def ){
            itemHp = hp + 30;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'エクスカリバーB',
        eff : ['HPを50アップ'],
        num : 61,
        put : function ( hp, pow, def ){
            itemHp = hp + 50;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'エクスカリバーC',
        eff : ['HPを100アップ'],
        num : 62,
        put : function ( hp, pow, def ){
            itemHp = hp + 100;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'エクスカリバーD',
        eff : ['HPを10%アップ'],
        num : 63,
        put : function ( hp, pow, def ){
            itemHp = Math.ceil(hp * 1.1);
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'エクスカリバーE',
        eff : ['HPを20%アップ'],
        num : 64,
        put : function ( hp, pow, def ){
            itemHp = Math.ceil(hp * 1.2);
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'エクスカリバーF',
        eff : ['HPを30%アップ'],
        num : 65,
        put : function ( hp, pow, def ){
            itemHp = Math.ceil(hp * 1.3);
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ハンマーA',
        eff : ['攻撃力を30アップ'],
        num : 108,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow + 30;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ハンマーB',
        eff : ['攻撃力を50アップ'],
        num : 109,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow + 50;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ハンマーC',
        eff : ['攻撃力を100アップ'],
        num : 110,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow + 100;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ハンマーD',
        eff : ['攻撃力を10%アップ'],
        num : 111,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = Math.ceil(pow * 1.1);
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ハンマーE',
        eff : ['攻撃力を20%アップ'],
        num : 112,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = Math.ceil(pow * 1.2);
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ハンマーF',
        eff : ['攻撃力を30%アップ'],
        num : 113,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = Math.ceil(pow * 1.3);
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ブーメランA',
        eff : ['防御力を30アップ'],
        num : 130,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def + 30;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ブーメランB',
        eff : ['防御力を50アップ'],
        num : 131,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def + 50;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ブーメランC',
        eff : ['防御力を100アップ'],
        num : 132,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def + 100;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ブーメランD',
        eff : ['防御力を10%アップ'],
        num : 133,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = Math.ceil(def * 1.1);
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ブーメランE',
        eff : ['防御力を20%アップ'],
        num : 134,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = Math.ceil(def * 1.2);
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'ブーメランF',
        eff : ['防御力を30%アップ'],
        num : 135,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = Math.ceil(def * 1.3);
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'えんぴつ',
        eff : ['自分が受けるダメージを', '10%軽減'],
        num : 282,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            if(player == 1){
                return dam;
            }else{
                return Math.floor(dam * 0.9);
            }
        }
    },
    {
        name : 'ふで',
        eff : ['自分が受けるダメージを', '20%軽減'],
        num : 283,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            if(player == 1){
                return dam;
            }else{
                return Math.floor(dam * 0.8);
            }
        }
    },
    {
        name : 'うちわ',
        eff : ['相手に与えるダメージを', '10%増幅'],
        num : 264,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            if(player == 1){
                return Math.ceil(dam * 1.1);
            }else{
                return dam;
            }
        }
    },
    {
        name : 'ほうちょう',
        eff : ['相手に与えるダメージを', '20%増幅'],
        num : 260,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            if(player == 1){
                return Math.ceil(dam * 1.2);
            }else{
                return dam;
            }
        }
    },
    {
        name : 'ぴぺっと',
        eff : ['相手に与えるダメージを', 'たまに50%増幅'],
        num : 285,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            if(player == 1){
                if(Math.random()<0.4){
                    return Math.ceil(dam * 1.5);
                }else{
                    return dam;
                }
            }else{
                return dam;
            }
        }
    },
    {
        name : 'ごえんだま',
        eff : ['どこか遠い国の金貨。', '経験値が少し多くもらえる'],
        num : 269,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'おまもり',
        eff : ['HPが0になっても、一度だけ', 'HP1で耐える'],
        num : 272,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : '秘伝の書',
        eff : ['必ず自分が先攻になる'],
        num : 251,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
    {
        name : 'わりばし',
        eff : ['相手の必殺技を全てかわす'],
        num : 43,
        put : function ( hp, pow, def ){
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        },
        use : function ( dam, player ){
            return dam;
        }
    },
];