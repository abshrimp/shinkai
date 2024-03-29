'use strict'
var commonlv = 0.43;

var enemyList = [
    {
        name : '超弱そうな征山の手下',
        id : 'enemy1',
        exp : 0.5,
        level : 1,
        charge : 0,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 100
    },{
        name : 'マジ弱そうな征山の手下',
        id : 'enemy2',
        exp : 0.7,
        level : 0.8,
        charge : 0,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 100
    },{
        name : '普通に弱そうな征山の手下',
        id : 'enemy3',
        exp : 0.8,
        level : 0.7,
        charge : 0,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 100
    },{
        name : '弱そうな征山の手下',
        id : 'enemy4',
        exp : 0.9,
        level : 0.6,
        charge : 0,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 100
    },{
        name : '征山の手下その１',
        id : 'enemy5',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 80
    },{
        name : '征山の手下その２',
        id : 'enemy6',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 70
    },{
        name : '征山の手下その３',
        id : 'enemy7',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 70
    },{
        name : '征山の手下その４',
        id : 'enemy8',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 30
    },{
        name : '征山の手下その５',
        id : 'enemy9',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 70
    },{
        name : '強そうな征山の手下',
        id : 'enemy10',
        exp : 1.2,
        level : 0.3,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 70
    },{
        name : '普通に強そうな征山の手下',
        id : 'enemy11',
        exp : 1.3,
        level : 0.2,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 60
    },{
        name : 'マジ強そうな征山の手下',
        id : 'enemy12',
        exp : 1.4,
        level : 0.1,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 30
    },{
        name : '超強そうな征山の手下',
        id : 'enemy13',
        exp : 1.6,
        level : 0,
        charge : 50,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 10
    },{
        name : '高村光太郎',
        id : 'enemy14',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 40
    },{
        name : 'フリー素材',
        id : 'enemy15',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 70
    },{
        name : 'リア充',
        id : 'enemy16',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 60
    },{
        name : 'フリー素材(サマーフォルム)',
        id : 'enemy17',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 40
    },{
        name : 'お馬さん',
        id : 'enemy18',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 18
    },{
        name : '猫その１',
        id : 'enemy19',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 90
    },{
        name : '猫その２',
        id : 'enemy20',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 50
    },{
        name : '猫その３',
        id : 'enemy21',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 40
    },{
        name : '猫その４',
        id : 'enemy22',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 80
    },{
        name : '猫その５',
        id : 'enemy23',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 120
    },{
        name : 'よったん',
        id : 'enemy24',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 20
    },{
        name : '種田山頭火',
        id : 'enemy25',
        exp : 1,
        level : commonlv,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 110
    },{
        name : '鬼',
        id : 'enemy26',
        exp : 1.8,
        level : 0.1,
        charge : 70,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 50
    },{
        name : '厨二族棟梁',
        id : 'enemy27',
        exp : 2,
        level : 0,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 30
    },{
        name : 'プロテイン族',
        id : 'enemy28',
        exp : 1,
        level : 0.3,
        charge : 30,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 30
    },{
        name : '征山竹ノ内',
        id : 'enemy29',
        exp : 3.5,
        level : 0,
        charge : 95,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 50
    },{
        name : '小後富也',
        id : 'enemy30',
        exp : 1,
        level : 0,
        charge : 0,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 70
    },{
        name : '征山の手下',
        id : 'enemy6',
        exp : 0.5,
        level : 1,
        charge : 0,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 70
    },{
        name : '小後富也',
        id : 'enemy30',
        exp : 10,
        level : 0,
        charge : 100,
        wazamid : "light2",
        wazamlength : 15,
        wazabg : "wazabg2",
        wazaid : 'airbreak',
        wazalength : 10,
        eye : 70
    }
];