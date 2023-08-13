'use strict'

var itemList = [
    {
        name : 'あかいくすり',
        eff : ['HPを30回復'],
        num : 220,
        use : function (){
            if(meHP + 30 < meOrHP){
                meHP = meHP + 30;
            }else{
                meHP = meOrHP;
            }
        }
    },
    {
        name : 'あおいくすり',
        eff : ['HPを50回復'],
        num : 221,
        use : function (){
            if(meHP + 50 < meOrHP){
                meHP = meHP + 50;
            }else{
                meHP = meOrHP;
            }
        }
    },
    {
        name : 'おれんじのくすり',
        eff : ['HPを100回復'],
        num : 222,
        use : function (){
            if(meHP + 100 < meOrHP){
                meHP = meHP + 100;
            }else{
                meHP = meOrHP;
            }
        }
    },
    {
        name : 'あかいこな',
        eff : ['HPを10%回復'],
        num : 224,
        use : function (){
            if(meHP + meOrHP * 0.1 < meOrHP){
                meHP = meHP + meOrHP * 0.1;
            }else{
                meHP = meOrHP;
            }
        }
    },
    {
        name : 'あおいこな',
        eff : ['HPを20%回復'],
        num : 225,
        use : function (){
            if(meHP + meOrHP * 0.2 < meOrHP){
                meHP = meHP + meOrHP * 0.2;
            }else{
                meHP = meOrHP;
            }
        }
    },
    {
        name : 'きいろいこな',
        eff : ['HPを50%回復'],
        num : 226,
        use : function (){
            if(meHP + meOrHP * 0.5 < meOrHP){
                meHP = meHP + meOrHP * 0.5;
            }else{
                meHP = meOrHP;
            }
        }
    },
    {
        name : 'みどりのこな',
        eff : ['HPを全回復'],
        num : 227,
        use : function (){
            meHP = meOrHP;
        }
    },
    {
        name : '◯ーいお茶',
        eff : ['攻撃力を', '一時的に30アップ'],
        num : 234,
        use : function (){
            mePow = mePow + 30;
        }
    },
    {
        name : '午◯の紅茶',
        eff : ['攻撃力を', '一時的に50アップ'],
        num : 235,
        use : function (){
            mePow = mePow + 50;
        }
    },
    {
        name : 'B◯SSコーヒー',
        eff : ['攻撃力を', '一時的に100アップ'],
        num : 236,
        use : function (){
            mePow = mePow + 100;
        }
    },
    {
        name : '天然水',
        eff : ['攻撃力を', '一時的に10％アップ'],
        num : 237,
        use : function (){
            mePow = mePow * 1.1;
        }
    },
    {
        name : 'あかきのこ',
        eff : ['攻撃力を', '一時的に20％アップ'],
        num : 246,
        use : function (){
            mePow = mePow * 1.2;
        }
    },
    {
        name : 'むらさききのこ',
        eff : ['攻撃力を', '一時的に40％アップ'],
        num : 247,
        use : function (){
            mePow = mePow * 1.4;
        }
    },
    {
        name : 'みどりのくさ',
        eff : ['防御力を', '一時的に30アップ'],
        num : 240,
        use : function (){
            meDef = meDef + 30;
        }
    },
    {
        name : 'ちゃいろのくさ',
        eff : ['防御力を', '一時的に50アップ'],
        num : 241,
        use : function (){
            meDef = meDef + 50;
        }
    },
    {
        name : 'みずいろのくさ',
        eff : ['防御力を', '一時的に100アップ'],
        num : 242,
        use : function (){
            meDef = meDef + 100;
        }
    },
    {
        name : 'くろのくさ',
        eff : ['防御力を', '一時的に10%アップ'],
        num : 243,
        use : function (){
            meDef = meDef * 1.1;
        }
    },
    {
        name : 'みどりきのこ',
        eff : ['防御力を', '一時的に20%アップ'],
        num : 244,
        use : function (){
            meDef = meDef * 1.2;
        }
    },
    {
        name : 'しろきのこ',
        eff : ['防御力を', '一時的に40%アップ'],
        num : 245,
        use : function (){
            meDef = meDef * 1.4;
        }
    },
    {
        name : 'はっぱ',
        eff : ['必殺ゲージを10%ためる'],
        num : 248,
        use : function (){
            meDead = meDead + 6;
        }
    },
    {
        name : 'みずいろはっぱ',
        eff : ['必殺ゲージを30%ためる'],
        num : 249,
        use : function (){
            meDead = meDead + 18;
        }
    },
    {
        name : 'おちば',
        eff : ['必殺ゲージを50%ためる'],
        num : 250,
        use : function (){
            meDead = meDead + 30;
        }
    },
    {
        name : 'マイク',
        eff : ['征山が使用していたと', '思われるマイク', '必殺ゲージを80%ためる'],
        num : 263,
        use : function (){
            meDead = meDead + 48;
        }
    },
];