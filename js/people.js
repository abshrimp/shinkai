'use strict'

var peopleList = [
    {
        num : 1151,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("黶子族民", "真改様、こんにちは", 1, stage, next);
            function next() { talk("真改", "こいつは小後じゃないな", 2, stage, next2);}
            function next2() { talk("真改", "この人に留守番を頼もうかな", 2, stage, next3, next4, "頼む", "頼まない");}
            function next3() { talk("真改", "すまないがしばらくの間黶子族を守ってくれないか", 2, stage, next31);}
            function next31() { talk("黶子族民", "お任せください！", 2, stage, next32);}
            function next32() { talk("黶子族民", "出発されるのですね", 2, stage, next33);}
            function next33() { talk("真改", "ああ", 2, stage, next34);}
            function next34() { talk("真改", "では行ってくる", 3, stage, next5);}
            function next5(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[1] = 1;
                fieldstart(map11, [-265, -3]);
            }

            function next4() { talk("真改", "すまない、なんでもない", 3, stage, next6)}
            function next6(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                game.stopOn = false;
            }
        }
    },
    {
        num : 1182,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("小後富也", "真改様、こんにちは", 1, stage, next);
            function next() { talk("真改", "しばらくの間、黶子族を守ってくれないか", 2, stage, next2);}
            function next2() { talk("小後富也", "ついに出発されるのですね", 2, stage, next3);}
            function next3() { talk("真改", "ああ", 2, stage, next4);}
            function next4() { talk("真改", "決着をつける旅だ", 2, stage, next5);}
            function next5() { talk("小後富也", "黶子族はお任せください", 2, stage, next6);}
            function next6() { talk("真改", "では行ってくる", 3, stage, next7);}
            function next7(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[0] = 1;
                param[1] = 1;
                fieldstart(map11, [-265, -3]);
            }
        }
    },
    {
        num : 1114,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            if(quenum == 1){
                talk("通行人", "助けてください！", 1, stage, n1);
                function n1() { talk("真改", "どうした", 2, stage, n2);}
                function n2() { talk("通行人", "この先で誰かが倒れているのを見たんです", 2, stage, n3);}
                function n3() { talk("真改", "なんだと", 2, stage, n4);}
                function n4() { talk("通行人", "しかもその直前、緑色の光が見えて、、、", 2, stage, n5);}
                function n5() { talk("真改", "、、、!", 2, stage, n6);}
                function n6() { talk("真改", "それは、鼓膜破壊＜エアドラムブレイク＞、、、!", 2, stage, n7);}
                function n7() { talk("通行人", "助けてください！", 2, stage, n8);}
                function n8() { talk("真改", "、、、わかった", 3, stage, n9);}
                function n9(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map2, [-20, -30]);
                }
            }

            else if(quenum == 2){
                talk("通行人", "この先は洞窟です", 1, stage, n10);
                function n10() { talk("通行人", "お気をつけ下さい", 2, stage, n11);}
                function n11() { talk("真改", "哀、行くぞ", 2, stage, n12);}
                function n12() { talk("哀", "、、、", 2, stage, n13);}
                function n13() { talk("真改", "哀、どうした？", 2, stage, n14);}
                function n14() { talk("哀", "、、、あ、いや、何でもないわ", 2, stage, n15);}
                function n15() { talk("真改", "何かあるなら言ってくれ", 2, stage, n16);}
                function n16() { talk("哀", "、、、真改は征山を倒したいと本気で思っているのよね？", 2, stage, n17);}
                function n17() { talk("真改", "もちろん", 2, stage, n18);}
                function n18() { talk("哀", "、、、実は私、猫族なの", 2, stage, n19);}
                function n19() { talk("真改", "、、、猫族！？", 2, stage, n20);}
                function n20() { talk("哀", "でも！", 2, stage, n21);}
                function n21() { talk("哀", "私も征山を倒したいと思っているわ", 2, stage, n22);}
                function n22() { talk("真改", "どうして？", 2, stage, n23);}
                function n23() { talk("哀", "実は、私の父が征山に殺されたの", 2, stage, n24);}
                function n24() { talk("真改", "、、、！？", 2, stage, n25);}
                function n25() { talk("哀", "現場に偶然出くわしてしまって、私は物陰から父が殺されるのを見るしかなかった", 2, stage, n26);}
                function n26() { talk("哀", "私は征山の暗殺を企てたわ、でもその計画はすぐにバレてしまって", 2, stage, n27);}
                function n27() { talk("哀", "私は必死に逃げたけど、捕まってしまって鼓膜破壊＜エアドラムブレイク＞を受けたわ", 2, stage, n28);}
                function n28() { talk("哀", "でも偶然、真改が助けてくれた、いやたぶん私たちの出会いは必然だったんだと思う", 2, stage, n29);}
                function n29() { talk("哀", "だから真改、お願い", 2, stage, n30);}
                function n30() { talk("哀", "征山を倒して", 2, stage, n31);}
                function n31() { talk("真改", "ああ", 3, stage, n32);}
                function n32(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map3, [-1, -2]);
                }
            }

            else if(quenum == 3){
                talk("通行人", "この先はかつて女神族が暮らしていた場所です", 1, stage, n33);
                function n33() { talk("真改", "女神族？　そんなの聞いたことないぞ", 2, stage, n34);}
                function n34() { talk("哀", "私も書物で読んだだけなので詳しいことは、、、", 2, stage, n35);}
                function n35() { talk("真改", "何か知っているのか", 2, stage, n36);}
                function n36() { talk("哀", "、、、", 2, stage, n37);}
                function n37() { talk("哀", "その書物には、女神族は黶子＜ほくろ＞族の棟梁、陰波桜龍＜かげなみおうりゅう＞に滅ぼされたと", 2, stage, n38);}
                function n38() { talk("真改", "、、、!？", 2, stage, n39);}
                function n39() { talk("真改", "もう一回言ってくれ", 2, stage, n40);}
                function n40() { talk("哀", "女神族は、陰波桜龍＜かげなみおうりゅう＞に滅ぼされたと、、、", 3, stage, n41);}
                function n41(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map4, [-44, -7]);
                }
            }

            else if(quenum == 4){
                talk("通行人", "この先は柳葉魚＜ししゃも＞族の森です", 1, stage, n42);
                function n42() { talk("通行人", "とても道に迷いやすいですが、大丈夫ですか？", 2, stage, n43);}
                function n43() { talk("哀", "でもこの道が近道だわ", 2, stage, n44);}
                function n44() { talk("真改", "それじゃあ行こう", 3, stage, n45);}
                function n45(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map5, [-4, -7]);
                }
            }

            else if(quenum == 5){
                talk("通行人", "この先は厨二族が暮らす、ダークサイドシティです", 1, stage, n46);
                function n46() { talk("哀", "いよいよクソゲー感が増してきたわね", 2, stage, n47);}
                function n47() { talk("真改", "メタい", 3, stage, n48);}
                function n48(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map6, [-2, -82]);
                }
            }

            else if(quenum == 6){
                talk("通行人", "この先は写真族の村です", 1, stage, n49);
                function n49() { talk("哀", "写真は正しい使い方をするべきね", 2, stage, n50);}
                function n50() { talk("真改", "そうだな", 3, stage, n51);}
                function n51(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map7, [-2, -5]);
                }
            }

            else if(quenum == 7){
                talk("通行人", "この先はプロテイン族の村です", 1, stage, n52);
                function n52() { talk("哀", "プロテイン族、、、？", 2, stage, n53);}
                function n53() { talk("真改", "なんだろう、、、？", 3, stage, n54);}
                function n54(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map8, [-87, -16]);
                }
            }

            else if(quenum == 8){
                talk("通行人", "この先は猫族勢力の最前線です", 1, stage, n55);
                function n55() { talk("通行人", "猫族の奴らがうろちょろしていて大変危険です", 2, stage, n56);}
                function n56() { talk("哀", "アーラキ沼までもう少しよ", 2, stage, n57);}
                function n57() { talk("真改", "よし、ここを抜けていこう", 3, stage, n58);}
                function n58(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map9, [-88, -82]);
                }
            }

            else if(quenum == 9){
                talk("通行人", "この先はアーラキ沼です", 1, stage, n59);
                function n59() { talk("哀", "、、、ついに来たわね", 2, stage, n60);}
                function n60() { talk("真改", "ああ、、、、", 3, stage, n61);}
                function n61(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map10, [-1, -2]);
                }
            }

            else if(quenum == 10){
                talk("真改", "征山を見たか？", 1, stage, n59);
                function n59() { talk("通行人", "さっき通っていきましたよ", 2, stage, n60);}
                function n60() { talk("真改", "、、、、行くぞ", 3, stage, n61);}
                function n61(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 0;
                    quenum++;
                    fieldstart(map2, [-20, -30], [1176, 1159]);
                }
            }
        }
    },
    {
        num : 1180,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("真改", "大丈夫かっ", 1, stage, next);
            function next() { talk("真改", "鼓膜破壊＜エアドラムブレイク＞をくらったのか", 2, stage, next2);}
            function next2() { talk("真改", "、、、助けたいのに助けられない", 2, stage, next3);}
            function next3() { talk("真改", "そうだ、あのとき敵が持っていた、この微量のアッポンドを使えばまだ間に合うかもしれない", 3, stage, next4);}
            function next4(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                setTimeout(function(){
                    fieldstart(map2, [-18, -15], [1181, 1164]);
                }, 1000);
            }
        }
    },
    {
        num : 1139,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("？？？", "この先は通さん、、、", 1, stage, next);
            function next() { talk("哀", "なんなの、こいつ", 2, stage, next2);}
            function next2() { talk("真改", "とっとと倒してしまおう", 3, stage, next3);}
            function next3() { battle2("", enemyList[25], next4, next5);}
            function next4(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[1] = 1;
                fieldstart(map11, [-265, -3]);
            }
            function next5(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                game.stopOn = false;
                fieldbgm.play({loop: -1});
            }
        }
    },
    {
        num : 1154,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("真改", "誰だお前は、何をしている", 1, stage, next);
            function next() { talk("？？？", "何をしている、、、って家に帰るところだけど", 2, stage, next2);}
            function next2() { talk("真改", "、、、！？", 2, stage, next3);}
            function next3() { talk("真改", "こんな廃墟で暮らしていると言うのか", 2, stage, next4);}
            function next4() { talk("真改", "、、、まさか、女神族の生き残りか？", 2, stage, next5);}
            function next5() { talk("？？？", "そうさ", 2, stage, next6);}
            function next6() { talk("女神族の生き残り", "私が女神族唯一の生き残り、、、", 2, stage, next7);}
            function next7() { talk("真改", "生き残った女神族がいたのか、、、", 2, stage, next8);}
            function next8() { talk("哀", "この人なら何か知ってるかもしれない", 2, stage, next9, next10, "話を聞く", "このまま先に進む");}
            function next10() { talk("女神族の生き残り", "用は無いの？", 2, stage, next11);}
            function next11(){
                talk("真改", "大丈夫です、ありがとうございました", 3, stage, next12);
                if(param[0] == 1){
                    param[0] = 2;
                }
            }
            function next12(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[1] = 1;
                fieldstart(map11, [-265, -3]);
            }

            function next9() { talk("真改", "女神族について話を聞かせてもらえますか？", 2, stage, next13);}
            function next13() { talk("女神族の生き残り", "そんなことが知りたいのかね？", 2, stage, next14);}
            function next14() { talk("真改", "はいっ、是非聞かせてください", 2, stage, next15);}
            function next15() {
                fade(fieldbgm);
                talk("女神族の生き残り", "何年前だったかなぁ……黶子＜ほくろ＞族と女神族は本当に仲が良かった", 2, stage, next16);
            }
            function next16() { talk("真改", "そうだったんですか？", 2, stage, next17);}
            function next17() { talk("女神族の生き残り", "お互いのことをよく知っとった。どちらかの食料が不足すれば、片方の食料を分け合っとったし、一緒に祭りもやっとった", 2, stage, next18);}
            function next18() { talk("哀", "祭り？", 2, stage, next19);}
            function next19() { talk("女神族の生き残り", "そう、祭り。そりゃあ楽しいもんだった。共に酒を交わし、一晩中火の周りで騒ぎ、踊り続けた", 2, stage, next201);}
            function next201() { talk("女神族の生き残り", "特に女神族棟梁、石張＜いしばり＞がとても面白い人でな、、、", 2, stage, next202);}
            function next202() { talk("真改", "女神族棟梁、石張＜いしばり＞、、、", 2, stage, next20);}
            function next20() { talk("女神族の生き残り", "でも、猫族が間に入るようになった頃から、黶子＜ほくろ＞族と女神族の関係が崩れ始めた", 2, stage, next21);}
            function next21() { talk("真改", "猫族、、、？", 2, stage, next22);}
            function next22() { talk("女神族の生き残り", "最初は良い奴だと思っていた。三つの族で仲良くやっていけると思っていた。でもそれは違った。猫族の本当の狙いは、他の族を根絶させ、猫族の世界を築き上げることだった", 2, stage, next23);}
            function next23() { talk("女神族の生き残り", "猫族が間に入り始めてから、小さな争いが頻繁に起こるようになった", 2, stage, next231);}
            function next231() { talk("女神族の生き残り", "初めは猫族との争いだった。でも、しだいに黶子＜ほくろ＞族と女神族との間でも争いが起きるようになっていった", 2, stage, next24);}
            function next24() { talk("女神族の生き残り", "そしてあるとき突然、黶子＜ほくろ＞族が大勢で女神族を攻めてきた。なぜ急に大勢で攻めてきたのかはわからないが、それは女神族を滅ぼす勢いだった", 2, stage, next25);}
            function next25() { talk("女神族の生き残り", "というわけさ", 2, stage, next26);}
            function next26() { talk("真改", "、、、貴重な情報ありがとうございました", 2, stage, next27);}
            function next27() { talk("女神族の生き残り", "そうそう、思い出した", 2, stage, next28);}
            function next28() { talk("女神族の生き残り", "黶子＜ほくろ族＞と女神族の関係を壊した猫族の奴の名前、", 2, stage, next29);}
            function next29() { talk("真改", "征山ですか？", 2, stage, next30);}
            function next30() { talk("女神族の生き残り", "いや、征山に言われてやって来たと言ってた。名前は確か", 2, stage, next31);}
            function next31() { talk("女神族の生き残り", "伊魔頭　匠＜いまずたくみ＞", 2, stage, next32);}
            function next32() { talk("哀", "、、、！", 2, stage, next33);}
            function next33(){
                talk("哀", "私の父だわ", 3, stage, next12);
                param[0] = 1;
            }
        }
    },
    {
        num : 1120,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            if(param[2] == 0){
                param[2] = 1;
                talk("？？？", "しーんかいっ", 1, stage, next);
                function next() { talk("真改", "、、、誰お前？", 2, stage, next2);}
                function next2() { talk("？？？", "もしかして忘れちゃったの？", 2, stage, next3);}
                function next3() { talk("？？？", "昔よく遊んだじゃーん", 2, stage, next4);}
                function next4() { talk("幼馴染？", "真改が急にいなくなってから、ずっと探してたんだからね？", 2, stage, next5, next6, "あー思い出した", "誰お前？");}

                function next5() { talk("幼馴染？", "覚えてくれてたんだ！　嬉しい！", 2, stage, next7);}
                function next6() { talk("幼馴染？", "ん？　よく聞こえなーい", 2, stage, next7);}

                function next7() { talk("幼馴染？", "あっごめんね？　引き止めちゃって、しんかい忙しいもんね？", 2, stage, next8);}
                function next8() { talk("幼馴染？", "じゃあまたね！　しんかいっ", 2, stage, next9);}
                function next9() { talk("哀", "、、、今の誰？", 3, stage, next10);}
                function next10(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }

            else if(param[2] == 1){
                param[2] = 2;
                talk("幼馴染？", "しーんかいっ", 1, stage, next11);
                function next11() { talk("幼馴染？", "婚姻届持ってきたんだけど、サインしてくれる？", 2, stage, next12);}
                function next12() { talk("幼馴染？", "え、、、？", 2, stage, next13);}
                function next13() { talk("幼馴染？", "しんかいあのとき、結婚しようって言ってくれたよね？", 2, stage, next14, next15, "ああそうだったな", "そんなこと言ってない");}

                function next14() { talk("幼馴染？", "だよねーっ", 2, stage, next16);}
                function next15() { talk("幼馴染？", "ん？　よく聞こえなーい", 2, stage, next16);}

                function next16() { talk("幼馴染？", "あーでもしんかい今忙しいもんね、、、", 2, stage, next17);}
                function next17() { talk("幼馴染？", "市役所行ってる時間なんか無いか、、、", 2, stage, next18);}
                function next18() { talk("幼馴染？", "また時間できたら連絡してねっ、いつでも行くから！", 2, stage, next19);}
                function next19() { talk("幼馴染？", "じゃーね、しんかいっ", 2, stage, next20);}
                function next20() { talk("哀", "、、、、", 3, stage, next21);}
                function next21(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }
            
            else if(param[2] == 2){
                param[2] = 3;
                talk("幼馴染？", "しーんかいっ", 1, stage, next22);
                function next22() { talk("幼馴染？", "また会ったねーっ", 2, stage, next23);}
                function next23() { talk("幼馴染？", "うふふふふっ", 3, stage, next24);}
                function next24(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }

            else if(param[2] == 3){
                param[2] = 4;
                talk("幼馴染？", "しーんかいっ", 1, stage, next25);
                function next25() { talk("幼馴染？", "今でも私のこと好きだよね？", 2, stage, next26, next26, "はい", "はい");}
                function next26() { talk("幼馴染？", "よかったーっ", 2, stage, next27);}
                function next27() { talk("幼馴染？", "じゃーね、しんかいっ", 2, stage, next28);}
                function next28() { talk("哀", "（袖を引っ張る哀）", 3, stage, next29);}
                function next29(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }

            else{
                talk("幼馴染？", "しーんかいっ", 1, stage, next30);
                function next30() { talk("幼馴染？", "今でも私のこと好きだよね？", 2, stage, next31, next35, "はい", "いいえ");}
                function next31() { talk("幼馴染？", "よかったーっ", 2, stage, next32);}
                function next32() { talk("幼馴染？", "じゃーね、しんかいっ", 2, stage, next33);}
                function next33() { talk("哀", "真改、、、、、？", 3, stage, next34);}
                function next34(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
                function next35() { talk("幼馴染？", "今でも私のこと好きだよね？", 2, stage, next31, next36, "はい", "いいえ");}
                function next36() { talk("幼馴染？", "今でも私のこと好きだよね、、、？", 2, stage, next31, next37, "はい", "いいえ");}
                function next37() { talk("幼馴染？", "好きだよね、、、？", 2, stage, next31, next38, "はい", "いいえ");}
                function next38() { talk("幼馴染？", "好き、だよね？", 2, stage, next31, next39, "はい", "いいえ");}
                function next39() { talk("幼馴染？", "ねえ？（包丁）", 2, stage, next31, next40, "はい", "いいえ");}
                function next40() { talk("幼馴染？", "え？", 2, stage, next31, next41, "はい", "いいえ");}
                function next41() { talk("", "真改は包丁で刺された", 2, stage, next42);}
                function next42() { talk("", "END７　真改暗殺", 2, stage, next43);}
                function next43() { talk("", "なおこのゲームには８種類のエンディングが用意されています", 2, stage, next44);}
                function next44() { talk("", "繰り返しプレイして８種類制覇を目指してください", 2, stage, next45);}
                function next45() { talk("", "８種類制覇者にはいいことが待っています", 3, stage, next46);}
                function next46() {
                    quenum = 1;
                    var end = param[5];
                    param = [0, 0, 0, 10000000, 0, 100000000];
                    if(end % 20 < 10) end = end + 10;
                    param[5] = end;
                    setTimeout(function(){
                        preopen();
                    }, 1000);
                    function preopen(){
                        var bl = rect("#000", 0, 0, 320, 533);
                        bl.alpha = 0;
                        createjs.Tween.get(bl).to({alpha: 1}, 400).call(preopen2);
                        stage.addChild(bl);
                    }
                    function preopen2(){
                        GLstage.removeAllChildren();
                        GLstage.update();
                        stage.removeAllChildren();
                        opening(stage);
                    }
                }
            }
        }
    },
    {
        num : 1117,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("村人", "この森を抜けてこられたのですか……？", 1, stage, next);
            function next() { talk("真改", "ああ", 2, stage, next2);}
            function next2() { talk("村人", "それはそれはご苦労様です", 3, stage, next3);}
            function next3() {
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[1] = 1;
                fieldstart(map11, [-265, -3]);
            }
            
        }
    },
    {
        num : 1150,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("村人", "ここは厨二族が暮らす、ダークサイドシティさ", 1, stage, next);
            function next() { talk("真改", "何だ、この頑丈そうな建物は", 2, stage, next2);}
            function next2() { talk("村人", "これこそ我が厨二族が誇る闇の力", 2, stage, next3);}
            function next3() { talk("村人", "闇の力は文明をも超える、、、", 2, stage, next4);}
            function next4() { talk("真改", "あーもう大丈夫です", 2, stage, next5);}
            function next5() { talk("哀", "かっこいい、、、！", 2, stage, next6);}
            function next6() { talk("真改", "（え、、、？）", 3, stage, next7);}
            function next7() {
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                game.stopOn = false;
            }
        }
    },
    {
        num : 1148,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("村人", "、、、貴様、どこから現れた、、、？", 1, stage, next);
            function next() { talk("村人", "何だ貴様、我が秘密結社ダークベルムに潜入しようとするスパイか？", 2, stage, next2);}
            function next2() { talk("村人", "、、、違うようだな、お前からは厨二の闇が感じられない", 2, stage, next3);}
            function next3() { talk("村人", "ならどうだ、ぜひエージェントとして共に活動しないか？", 2, stage, next4, next6, "結構です", "お願いします");}
            function next4() { talk("村人", "そうか、それは残念だな", 3, stage, next5);}
            function next5() {
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                game.stopOn = false;
            }
            function next6() { talk("村人", "ではまず神の加護を受ける必要があるな", 2, stage, next7);}
            function next7() { talk("真改", "（え、、、？）", 2, stage, next8);}
            function next8() { talk("村人", "告げる", 2, stage, next9);}
            function next9() { talk("村人", "神よ", 2, stage, next10);}
            function next10() { talk("村人", "創造主から授かりし力を汝の元に", 2, stage, next11);}
            function next11() { talk("村人", "我が命運を汝の剣に", 2, stage, next12);}
            function next12() { talk("村人", "聖杯の理に従うならば", 2, stage, next13);}
            function next13() { talk("村人", "答えよ", 2, stage, next141);}
            function next141() { talk("村人", "はあああああああああっっっ！！！！", 2, stage, next14);}
            function next14() { talk("村人", "、、、これで汝は秘密結社ダークベルムのエージェントだ", 2, stage, next15);}
            function next15() { talk("真改", "あ、、、", 2, stage, next16);}
            function next16() { talk("真改", "ありがとうございまーす", 3, stage, next17);}
            function next17() {
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[4] = 1;
                game.stopOn = false;
            }

        }
    },
    {
        num : 1144,
        com : function (game){ darkside(game);}
    },
    {
        num : 1145,
        com : function (game){ darkside(game);}
    },
    {
        num : 1143,
        com : function (game){ darkside(game);}
    },
    {
        num : 1141,
        com : function (game){ darkside(game);}
    },
    {
        num : 1146,
        com : function (game){ darkside(game);}
    },
    {
        num : 1121,
        com : function (game){ darkside(game);}
    },
    {
        num : 1149,
        com : function (game){ darkside(game);}
    },
    {
        num : 1153,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            if(param[4] != 1){
                talk("？？？", "この先は通さないわよ", 1, stage, next);
                function next() { talk("真改", "お願いします通してください", 2, stage, next2);}
                function next2() { talk("？？？", "そなた", 2, stage, next3);}
                function next3() { talk("？？？", "神の加護を受けていないようですね", 2, stage, next4);}
                function next4() { talk("？？？", "なら断じて通すわけにはいきません", 2, stage, next5);}
                function next5() { talk("真改", "え、、、？", 3, stage, next6);}
                function next6() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }else{
                talk("？？？", "この先は通さないわよ", 1, stage, next7);
                function next7() { talk("？？？", "出よ、闇から生まれし精霊の力よ", 2, stage, next8);}
                function next8() { talk("？？？", "その力を我が元へ！", 3, stage, next9);}
                function next9() { battle2("", enemyList[26], next10, next11);}
                function next10(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 1;
                    fieldstart(map11, [-265, -3]);
                }
                function next11(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                    fieldbgm.play({loop: -1});
                }
            }
        }
    },
    {
        num : 1179,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("村人", "ここは写真族が暮らす村です", 1, stage, next);
            function next() { talk("村人", "この美しい自然、", 2, stage, next2);}
            function next2() { talk("村人", "風が吹けば草木が揺れ、鳥のさえずりが聞こえる、", 2, stage, next3);}
            function next3() { talk("村人", "世の雑踏から遠く離れたこの村こそ、写真撮影にぴったりだとは思いませんか？", 3, stage, next4);}
            function next4() {
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                game.stopOn = false;
            }
        }
    },
    {
        num : 1155,
        com : function (game){ picture(game);}
    },
    {
        num : 1116,
        com : function (game){ picture(game);}
    },
    {
        num : 1147,
        com : function (game){ picture(game);}
    },
    {
        num : 1178,
        com : function (game){ picture(game);}
    },
    {
        num : 1173,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("村人", "やっぱりこういう、のどかな風景がいいですね", 1, stage, next);
            function next() { talk("村人", "争いなんて愚かなものですよ", 2, stage, next2);}
            function next2() { talk("村人", "今も遠くで黶子族と猫族が争っているみたいですが、", 2, stage, next3);}
            function next3() { talk("村人", "私は争いの無い世界がいいと思いますね", 2, stage, next4);}
            function next4() { talk("村人", "そう思いませんか？", 2, stage, next5, next8, "そうだな", "そうは思わない");}
            function next5() { talk("村人", "ですよねー、ぜひ争いなんか辞めちゃってください", 2, stage, next6);}
            function next6() { talk("真改", "ああそうするよ", 3, stage, next7);}
            function next7(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[1] = 1;
                param[0] = 3;
                fieldstart(map11, [-265, -3]);
            }
            function next8() { talk("村人", "そうですか、それは残念ですね、、、", 3, stage, next9);}
            function next9(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[1] = 1;
                fieldstart(map11, [-265, -3]);
            }
            
        }
    },
    {
        num : 1140,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("村人", "プロテイン族の村へようこそ！", 1, stage, next);
            function next() { talk("村人", "筋肉を愛し、筋肉に愛された族", 2, stage, next2);}
            function next2() { talk("村人", "みんなトレーニングに勤しんでいるぜ！", 2, stage, next3);}
            function next3() { talk("村人", "ぜひトレーニングの相手になってあげてくれ！", 3, stage, next4);}
            function next4() {
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                game.stopOn = false;
            }
        }
    },
    {
        num : 1142,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            if(param[3] % 2000000 < 1000000){
                talk("村人", "よう、", 1, stage, next);
                function next() { talk("村人", "一緒にトレーニングしようぜ！", 3, stage, next2);}
                function next2() { battle2("", enemyList[27], next3, next11);}
                function next11() { talk("村人", "いいトレーニングになったぜ", 1, stage, next12);}
                function next12() { talk("村人", "またトレーニングしような！", 3, stage, next8);}
                function next3() { talk("村人", "お前さん強いなあ", 1, stage, next4);}
                function next4() {
                    param[3] = param[3] + 1000000;
                    if(param[3] == 11111111){
                        talk("村人", "もしかしてお前さん、村の全員を倒しちまったんじゃあねえか？", 2, stage, next5);
                    }else{
                        talk("村人", "またトレーニングしような！", 3, stage, next8);
                    }
                }
                function next5() { talk("村人", "すごいなあ", 2, stage, next6);}
                function next6() { talk("村人", "これからも頑張れよ！", 3, stage, next7);}
                function next7(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 1;
                    fieldstart(map11, [-265, -3]);
                }
                function next8() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                    fieldbgm.play({loop: -1});
                }
            }else{
                talk("村人", "さっきはありがとよ、", 1, stage, next9);
                function next9() { talk("村人", "またトレーニングしような！", 3, stage, next10);}
                function next10() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }
        }
    },
    {
        num : 1174,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            if(param[3] % 200000 < 100000){
                talk("村人", "よう、", 1, stage, next);
                function next() { talk("村人", "一緒にトレーニングしようぜ！", 3, stage, next2);}
                function next2() { battle2("", enemyList[27], next3, next11);}
                function next11() { talk("村人", "いいトレーニングになったぜ", 1, stage, next12);}
                function next12() { talk("村人", "またトレーニングしような！", 3, stage, next8);}
                function next3() { talk("村人", "お前さん強いなあ", 1, stage, next4);}
                function next4() {
                    param[3] = param[3] + 100000;
                    if(param[3] == 11111111){
                        talk("村人", "もしかしてお前さん、村の全員を倒しちまったんじゃあねえか？", 2, stage, next5);
                    }else{
                        talk("村人", "またトレーニングしような！", 3, stage, next8);
                    }
                }
                function next5() { talk("村人", "すごいなあ", 2, stage, next6);}
                function next6() { talk("村人", "これからも頑張れよ！", 3, stage, next7);}
                function next7(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 1;
                    fieldstart(map11, [-265, -3]);
                }
                function next8() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                    fieldbgm.play({loop: -1});
                }
            }else{
                talk("村人", "さっきはありがとよ、", 1, stage, next9);
                function next9() { talk("村人", "またトレーニングしような！", 3, stage, next10);}
                function next10() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }
        }
    },
    {
        num : 1175,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;
            
            if(param[3] % 20000 < 10000){
                talk("村人", "よう、", 1, stage, next);
                function next() { talk("村人", "一緒にトレーニングしようぜ！", 3, stage, next2);}
                function next2() { battle2("", enemyList[27], next3, next11);}
                function next11() { talk("村人", "いいトレーニングになったぜ", 1, stage, next12);}
                function next12() { talk("村人", "またトレーニングしような！", 3, stage, next8);}
                function next3() { talk("村人", "お前さん強いなあ", 1, stage, next4);}
                function next4() {
                    param[3] = param[3] + 10000;
                    if(param[3] == 11111111){
                        talk("村人", "もしかしてお前さん、村の全員を倒しちまったんじゃあねえか？", 2, stage, next5);
                    }else{
                        talk("村人", "またトレーニングしような！", 3, stage, next8);
                    }
                }
                function next5() { talk("村人", "すごいなあ", 2, stage, next6);}
                function next6() { talk("村人", "これからも頑張れよ！", 3, stage, next7);}
                function next7(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 1;
                    fieldstart(map11, [-265, -3]);
                }
                function next8() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                    fieldbgm.play({loop: -1});
                }
            }else{
                talk("村人", "さっきはありがとよ、", 1, stage, next9);
                function next9() { talk("村人", "またトレーニングしような！", 3, stage, next10);}
                function next10() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }
        }
    },
    {
        num : 1118,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;
            
            if(param[3] % 2000 < 1000){
                talk("村人", "よう、", 1, stage, next);
                function next() { talk("村人", "一緒にトレーニングしようぜ！", 3, stage, next2);}
                function next2() { battle2("", enemyList[27], next3, next11);}
                function next11() { talk("村人", "いいトレーニングになったぜ", 1, stage, next12);}
                function next12() { talk("村人", "またトレーニングしような！", 3, stage, next8);}
                function next3() { talk("村人", "お前さん強いなあ", 1, stage, next4);}
                function next4() {
                    param[3] = param[3] + 1000;
                    if(param[3] == 11111111){
                        talk("村人", "もしかしてお前さん、村の全員を倒しちまったんじゃあねえか？", 2, stage, next5);
                    }else{
                        talk("村人", "またトレーニングしような！", 3, stage, next8);
                    }
                }
                function next5() { talk("村人", "すごいなあ", 2, stage, next6);}
                function next6() { talk("村人", "これからも頑張れよ！", 3, stage, next7);}
                function next7(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 1;
                    fieldstart(map11, [-265, -3]);
                }
                function next8() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                    fieldbgm.play({loop: -1});
                }
            }else{
                talk("村人", "さっきはありがとよ、", 1, stage, next9);
                function next9() { talk("村人", "またトレーニングしような！", 3, stage, next10);}
                function next10() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }
        }
    },
    {
        num : 1119,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;
            
            if(param[3] % 200 < 100){
                talk("村人", "よう、", 1, stage, next);
                function next() { talk("村人", "一緒にトレーニングしようぜ！", 3, stage, next2);}
                function next2() { battle2("", enemyList[27], next3, next11);}
                function next11() { talk("村人", "いいトレーニングになったぜ", 1, stage, next12);}
                function next12() { talk("村人", "またトレーニングしような！", 3, stage, next8);}
                function next3() { talk("村人", "お前さん強いなあ", 1, stage, next4);}
                function next4() {
                    param[3] = param[3] + 100;
                    if(param[3] == 11111111){
                        talk("村人", "もしかしてお前さん、村の全員を倒しちまったんじゃあねえか？", 2, stage, next5);
                    }else{
                        talk("村人", "またトレーニングしような！", 3, stage, next8);
                    }
                }
                function next5() { talk("村人", "すごいなあ", 2, stage, next6);}
                function next6() { talk("村人", "これからも頑張れよ！", 3, stage, next7);}
                function next7(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 1;
                    fieldstart(map11, [-265, -3]);
                }
                function next8() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                    fieldbgm.play({loop: -1});
                }
            }else{
                talk("村人", "さっきはありがとよ、", 1, stage, next9);
                function next9() { talk("村人", "またトレーニングしような！", 3, stage, next10);}
                function next10() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }
        }
    },
    {
        num : 1115,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;
            
            if(param[3] % 20 < 10){
                talk("村人", "よう、", 1, stage, next);
                function next() { talk("村人", "一緒にトレーニングしようぜ！", 3, stage, next2);}
                function next2() { battle2("", enemyList[27], next3, next11);}
                function next11() { talk("村人", "いいトレーニングになったぜ", 1, stage, next12);}
                function next12() { talk("村人", "またトレーニングしような！", 3, stage, next8);}
                function next3() { talk("村人", "お前さん強いなあ", 1, stage, next4);}
                function next4() {
                    param[3] = param[3] + 10;
                    if(param[3] == 11111111){
                        talk("村人", "もしかしてお前さん、村の全員を倒しちまったんじゃあねえか？", 2, stage, next5);
                    }else{
                        talk("村人", "またトレーニングしような！", 3, stage, next8);
                    }
                }
                function next5() { talk("村人", "すごいなあ", 2, stage, next6);}
                function next6() { talk("村人", "これからも頑張れよ！", 3, stage, next7);}
                function next7(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 1;
                    fieldstart(map11, [-265, -3]);
                }
                function next8() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                    fieldbgm.play({loop: -1});
                }
            }else{
                talk("村人", "さっきはありがとよ、", 1, stage, next9);
                function next9() { talk("村人", "またトレーニングしような！", 3, stage, next10);}
                function next10() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }
        }
    },
    {
        num : 1177,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;
            
            if(param[3] % 2 < 1){
                talk("村人", "よう、", 1, stage, next);
                function next() { talk("村人", "一緒にトレーニングしようぜ！", 3, stage, next2);}
                function next2() { battle2("", enemyList[27], next3, next11);}
                function next11() { talk("村人", "いいトレーニングになったぜ", 1, stage, next12);}
                function next12() { talk("村人", "またトレーニングしような！", 3, stage, next8);}
                function next3() { talk("村人", "お前さん強いなあ", 1, stage, next4);}
                function next4() {
                    param[3] = param[3] + 1;
                    if(param[3] == 11111111){
                        talk("村人", "もしかしてお前さん、村の全員を倒しちまったんじゃあねえか？", 2, stage, next5);
                    }else{
                        talk("村人", "またトレーニングしような！", 3, stage, next8);
                    }
                }
                function next5() { talk("村人", "すごいなあ", 2, stage, next6);}
                function next6() { talk("村人", "これからも頑張れよ！", 3, stage, next7);}
                function next7(){
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    param[1] = 1;
                    fieldstart(map11, [-265, -3]);
                }
                function next8() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                    fieldbgm.play({loop: -1});
                }
            }else{
                talk("村人", "さっきはありがとよ、", 1, stage, next9);
                function next9() { talk("村人", "またトレーニングしような！", 3, stage, next10);}
                function next10() {
                    createjs.Ticker.removeEventListener("tick", stage);
                    stage.clear();
                    game.stopOn = false;
                }
            }
        }
    },
    {
        num : 1183,
        com : function (game){
            param[1] = 1;
            fieldstart(map11, [-265, -3]);
        }
    },
    {
        num : 1152,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            talk("真改", "どういうことだ", 1, stage, next);
            function next() { talk("真改", "アッポンドどころか、草すら生えていないじゃないか", 2, stage, next2);}
            function next2() { talk("村人", "先ほど征山がやってきて、アッポンドを一つ残らず奪っていったのです", 2, stage, next3);}
            function next3() { talk("真改", "征山が？", 2, stage, next4);}
            function next4() { talk("真改", "こちらの動きを読まれていたのか？", 2, stage, next5);}
            function next5() { talk("哀", "まだ近くに征山はいるはずです", 2, stage, next6);}
            function next6() { talk("真改", "よし、追うぞ", 2, stage, next7);}
            function next7() {
                createjs.Ticker.removeEventListener("tick", stage);
                stage.clear();
                param[1] = 1;
                fieldstart(map11, [-265, -3]);
            }
        }
    },
    {
        num : 1176,
        com : function (game){
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            if(param[0] != 3){
                talk("征山", "よく来たな、威ヶ神真改、あのとき以来だろうか", 1, stage, next);
                function next() { talk("真改", "アッポンドを渡せ", 2, stage, next2);}
                function next2() { talk("征山", "ほう、桜龍が生きていたとは驚きだな", 2, stage, next3);}
                function next3() { talk("征山", "ただアッポンドを渡すわけにはいかねえ、桜龍には大人しくしていてもらわないと", 2, stage, next4);}
                function next4() { talk("真改", "なんだと", 2, stage, next5);}
                function next5() { talk("征山", "その横の女は誰だ？", 2, stage, next6);}
                function next6() { talk("征山", "、、、誰だと思ったら、これはこれは手下が殺したはずの哀じゃないか", 2, stage, next7);}
                function next7() { talk("征山", "まだ生きていたとはな", 2, stage, next8);}
                function next8() { talk("哀", "ひゃっ！", 2, stage, next9);}
                function next9() { talk("真改", "哀に何をした！", 2, stage, next10);}
                function next10() { talk("征山", "何ってちょっと波動を当てただけじゃないか", 2, stage, next11);}
                function next11() { talk("哀", "痛い、、、、", 2, stage, next12);}
                function next12() { talk("真改", "哀！　頭から血が吹き出してるじゃないか！", 2, stage, next13);}
                function next13() { talk("真改", "哀を傷つけるとは、、、", 2, stage, next14);}
                function next14() { talk("真改", "貴様、、、", 2, stage, next15);}
                function next15() { talk("真改", "今日こそ決着をつけてやる、、、！", 3, stage, next16);}
                function next16() { battle2("", enemyList[28], n1, n2);}
                function n1(){
                    if(param[0] == 1){
                        talk("真改", "、、、どうしてまたこんなことを", 1, stage, n50);
                    }else{
                        talk("真改", "残念だったな、征山竹ノ内、、、", 1, stage, nn1);
                    }
                }
                function n2(){
                    if(param[0] == 1){
                        talk("真改", "、、、これまでか", 1, stage, n20);
                    }else{
                        talk("征山", "まだまだだな", 1, stage, n3);
                    }
                }
                function n3() { talk("征山", "はっはっはっ", 2, stage, n4);}
                function n4() { talk("征山", "よし、おいお前たち、黶子＜ほくろ＞族に攻め入る準備をしろ", 2, stage, n5);}
                function n5() { talk("征山", "猫族全員駆り出せ", 2, stage, n6);}
                function n6() { talk("征山", "今度は完全に黶子＜ほくろ＞族の息の根を止めてやる、、、", 3, stage, n7);}
                function n7(){
                    var bl = rect("#000", 0, 0, 320, 533);
                    bl.alpha = 0;
                    createjs.Tween.get(bl).to({alpha: 1}, 400).call(n777);
                    stage.addChild(bl);
                }
                function n777(){
                    GLstage.removeAllChildren();
                    GLstage.update();
                    stage.removeAllChildren();
                    talk("", "こうして猫族に攻められた黶子＜ほくろ＞族は、あっけなく全滅した。", 1, stage, n8);
                }
                function n8() { talk("真改", "くそおおおお、、、、、", 2, stage, n9);}
                function n9() { talk("", "これが真改の発した最後の言葉だった。", 2, stage, n10);}
                function n10() { talk("", "END１　黶子＜ほくろ＞族全滅", 2, stage, n11);}
                function n11() { talk("", "なおこのゲームには８種類のエンディングが用意されています", 2, stage, n12);}
                function n12() { talk("", "繰り返しプレイして８種類制覇を目指してください", 2, stage, n13);}
                function n13() { talk("", "８種類制覇者にはいいことが待っています", 3, stage, n14);}
                function n14() {
                    quenum = 1;
                    var end = param[5];
                    param = [0, 0, 0, 10000000, 0, 100000000];
                    if(end % 20000000 < 10000000) end = end + 10000000;
                    param[5] = end;
                    setTimeout(function(){
                        preopen();
                    }, 1000);
                    function preopen(){
                        var bl = rect("#000", 0, 0, 320, 533);
                        bl.alpha = 0;
                        createjs.Tween.get(bl).to({alpha: 1}, 400).call(preopen2);
                        stage.addChild(bl);
                    }
                    function preopen2(){
                        GLstage.removeAllChildren();
                        GLstage.update();
                        stage.removeAllChildren();
                        opening(stage);
                    }
                }

                function n20() { talk("征山", "はっはっはっ", 2, stage, n21);}
                function n21() { talk("哀", "真改！", 2, stage, n22);}
                function n22() { talk("真改", "、、、、！", 2, stage, n23);}
                function n23() { talk("哀", "まだ諦めたらだめ！", 2, stage, n24);}
                function n24(){
                    var bl = rect("#000", 0, 0, 320, 533);
                    bl.alpha = 0;
                    createjs.Tween.get(bl).to({alpha: 1}, 400).call(n291);
                    stage.addChild(bl);
                }
                function n291(){
                    GLstage.removeAllChildren();
                    GLstage.update();
                    stage.removeAllChildren();
                    talk("哀", "征山竹ノ内！", 1, stage, n25);
                }
                function n25() { talk("哀", "よくも私の父を殺してくれたわね！", 2, stage, n26);}
                function n26() { talk("哀", "そして何より！", 2, stage, n27);}
                function n27() { talk("哀", "私の命を救い、ここまで私を守ってきた真改をよくも傷つけてくれたわね！", 2, stage, n28);}
                function n28() { talk("哀", "許せないわ、、、、", 2, stage, n29);}
                function n29(){ talk("", "そのとき哀の周りに黒い光が渦を撒き始めた。", 2, stage, n30);}
                var img1 = bmp("endimg2", 10, 40, 300);
                function n30() {
                    img1.alpha = 0;
                    createjs.Tween.get(img1).to({alpha: 1}, 200);
                    stage.addChild(img1);
                    talk("真改", "、、、、！", 2, stage, n31);
                }
                function n31() { talk("真改", "間違いねえ、、、、", 2, stage, n32);}
                function n32() { talk("真改", "これは終焉ノ黶子＜デマイズモウル＞、、、、", 2, stage, n321);}
                function n321() { talk("真改", "哀は猫族じゃなかったのか、、、？", 2, stage, n33);}
                function n33() { talk("征山", "まさかあの話は本当だったのか、、、、！", 2, stage, n34);}
                function n34() { talk("征山", "哀は、女神族の棟梁、石張＜いしばり＞と黶子族の棟梁、桜龍との間に生まれ、猫族である伊魔頭匠＜いまずたくみ＞によって育てられたという噂は、、、！", 2, stage, n35);}
                function n35() { talk("哀", "くらえ、、、、！", 2, stage, n36);}
                function n36() { talk("", "哀の終焉ノ黶子＜デマイズモウル＞は征山を飲み込んだ。", 2, stage, n37);}
                function n37(){
                    createjs.Tween.get(img1).to({alpha: 0}, 200);
                    talk("征山", "ぐああああああっ！", 2, stage, n38);
                }
                function n38() { talk("", "気づくと、征山はその場に倒れていた、、、、", 2, stage, n39);}
                function n39() { talk("", "END６　哀の真実", 2, stage, n40);}
                function n40() { talk("", "なおこのゲームには８種類のエンディングが用意されています", 2, stage, n41);}
                function n41() { talk("", "繰り返しプレイして８種類制覇を目指してください", 2, stage, n42);}
                function n42() { talk("", "８種類制覇者にはいいことが待っています", 3, stage, n43);}
                function n43() {
                    quenum = 1;
                    var end = param[5];
                    param = [0, 0, 0, 10000000, 0, 100000000];
                    if(end % 200 < 100) end = end + 100;
                    param[5] = end;
                    setTimeout(function(){
                        preopen();
                    }, 1000);
                    function preopen(){
                        var bl = rect("#000", 0, 0, 320, 533);
                        bl.alpha = 0;
                        createjs.Tween.get(bl).to({alpha: 1}, 400).call(preopen2);
                        stage.addChild(bl);
                    }
                    function preopen2(){
                        GLstage.removeAllChildren();
                        GLstage.update();
                        stage.removeAllChildren();
                        opening(stage);
                    }
                }

                function n50() { talk("征山", "許せなかったんだ、、、", 2, stage, n51);}
                function n51() { talk("征山", "桜龍が女神族を滅ぼしたことが、、、", 2, stage, n52);}
                function n52() { talk("征山", "その昔、俺や桜龍、そして女神族棟梁、石張＜いしばり＞がまだ小さかった頃、人々はともに暮らし、そこに族の区別なんて無かった", 2, stage, n53);}
                function n53() { talk("征山", "しかしあるとき、火山の噴火、全てを破壊するような嵐、そして干ばつが立て続けに起きた", 2, stage, n54);}
                function n54() { talk("征山", "人々はもうそこには住めないことを悟った", 2, stage, n55);}
                function n55() { talk("征山", "だから人々は三つに分かれて移動し始めたんだ", 2, stage, n56);}
                function n56() { talk("征山", "まだ小さかった俺のいたグループは大陸を北へ", 2, stage, n57);}
                function n57() { talk("征山", "石張のいたグループは大陸を東へ", 2, stage, n58);}
                function n58() { talk("征山", "そして桜龍のいたグループは大陸を南へ", 2, stage, n59);}
                function n59() { talk("真改", "西へ向かった者はいなかったのか？", 2, stage, n60);}
                function n60() { talk("征山", "西、、、？", 2, stage, n61);}
                function n61() { talk("征山", "そんなこと今は関係ねえ", 2, stage, n62);}
                function n62() { talk("征山", "三つに分かれた人々はそれぞれ猫族、黶子＜ほくろ＞族、女神族となり、その棟梁に大人になった俺や桜龍、石張が就いたんだ", 2, stage, n63);}
                function n63() { talk("征山", "今や写真族とかいっぱいいるが、ありゃその三つの族から分かれたもんだ", 2, stage, n64);}
                function n64() { talk("征山", "そして猫族、女神族、黶子族の三つに分かれたはずだったのに、女神族と黶子族が急に仲良くしだしたんだ", 2, stage, n65);}
                function n65() { talk("征山", "まるで猫族を仲間外れにするかのように", 2, stage, n66);}
                function n66() { talk("征山", "そこで俺は女神族、黶子族に使いを送ったんだ", 2, stage, n67);}
                function n67() { talk("哀", "それが私の父である伊魔頭　匠＜いまずたくみ＞、、、", 2, stage, n68);}
                function n68() { talk("征山", "ああそうだ", 2, stage, n69);}
                function n69() { talk("征山", "しかし驚いたよ", 2, stage, n70);}
                function n70() { talk("征山", "黶子族の桜龍と伊魔頭が協力して、女神族を滅ぼしたと聞いたときは", 2, stage, n71);}
                function n71() { talk("真改", "桜龍と伊魔頭が、女神族を滅ぼした、、、", 2, stage, n72);}
                function n72() { talk("征山", "俺はすぐに伊魔頭を始末した。そして桜龍も眠らせた", 2, stage, n73);}
                function n73() { talk("征山", "俺は女神族の敵討ちをしたかっただけなんだ", 2, stage, n74);}
                function n74() { talk("征山", "俺は何か間違っていたのか、、、？", 2, stage, n75);}
                function n75() { talk("征山", "俺はどうすればよかったんだよ、、、、", 2, stage, n76);}
                function n76() { talk("", "END５　猫族の本当のねらい", 2, stage, n77);}
                function n77() { talk("", "なおこのゲームには８種類のエンディングが用意されています", 2, stage, n78);}
                function n78() { talk("", "繰り返しプレイして８種類制覇を目指してください", 2, stage, n79);}
                function n79() { talk("", "８種類制覇者にはいいことが待っています", 3, stage, n80);}
                function n80() {
                    quenum = 1;
                    var end = param[5];
                    param = [0, 0, 0, 10000000, 0, 100000000];
                    if(end % 2000 < 1000) end = end + 1000;
                    param[5] = end;
                    setTimeout(function(){
                        preopen();
                    }, 1000);
                    function preopen(){
                        var bl = rect("#000", 0, 0, 320, 533);
                        bl.alpha = 0;
                        createjs.Tween.get(bl).to({alpha: 1}, 400).call(preopen2);
                        stage.addChild(bl);
                    }
                    function preopen2(){
                        GLstage.removeAllChildren();
                        GLstage.update();
                        stage.removeAllChildren();
                        opening(stage);
                    }
                }

                function nn1() { talk("", "真改はそう言うと征山にとどめの一撃を食らわせた。", 3, stage, nn3);}
                function nn2() { talk("", "その後、真改はその勢いで猫族の中心地に乗り込み、猫族を全滅させた、、、", 1, stage, nn100);}
                function nn3(){
                    var bl = rect("#000", 0, 0, 320, 533);
                    bl.alpha = 0;
                    createjs.Tween.get(bl).to({alpha: 1}, 400).call(nn333);
                    stage.addChild(bl);
                }
                function nn333(){
                    GLstage.removeAllChildren();
                    GLstage.update();
                    stage.removeAllChildren();
                    nn2();
                }
                function nn100(){
                    if(param[0] == 0){
                        nn4();
                    }else{
                        nn20();
                    }
                }
                function nn4() { talk("", "桜龍の元へ戻った真改は、手に入れたアッポンドを桜龍に飲ませた。", 2, stage, nn411);}
                function nn411() { talk("真改", "師匠、、、真改です、、、わかりますか、、、、？", 2, stage, nn5);}
                function nn5() { talk("桜龍", "、、、、、、、、、、、、、ああ", 2, stage, nn6);}
                function nn6() { talk("真改", "、、、、！！", 2, stage, nn7);}
                function nn7() { talk("", "END２　桜龍の目覚め", 2, stage, nn8);}
                function nn8() { talk("", "なおこのゲームには８種類のエンディングが用意されています", 2, stage, nn9);}
                function nn9() { talk("", "繰り返しプレイして８種類制覇を目指してください", 2, stage, nn10);}
                function nn10() { talk("", "８種類制覇者にはいいことが待っています", 3, stage, nn11);}
                function nn11() {
                    quenum = 1;
                    var end = param[5];
                    param = [0, 0, 0, 10000000, 0, 100000000];
                    if(end % 2000000 < 1000000) end = end + 1000000;
                    param[5] = end;
                    setTimeout(function(){
                        preopen();
                    }, 1000);
                    function preopen(){
                        var bl = rect("#000", 0, 0, 320, 533);
                        bl.alpha = 0;
                        createjs.Tween.get(bl).to({alpha: 1}, 400).call(preopen2);
                        stage.addChild(bl);
                    }
                    function preopen2(){
                        GLstage.removeAllChildren();
                        GLstage.update();
                        stage.removeAllChildren();
                        opening(stage);
                    }
                }
                function nn20() { talk("", "真改はアッポンドをたんまりを抱えて黶子族の村に帰ってきた。", 2, stage, nn21);}
                var img2 = bmp("endimg1", 10, 40, 300);
                function nn21(){
                    img2.alpha = 0;
                    createjs.Tween.get(img2).to({alpha: 1}, 200);
                    stage.addChild(img2);
                    talk("", "しかしそこは火の海だった", 2, stage, nn22);
                }
                function nn22() { talk("真改", "、、、大変だ！", 2, stage, nn23);}
                function nn23() { talk("", "その辺りには動かなくなった人が転がっていて、誰かの泣き声も聞こえる。", 2, stage, nn24);}
                function nn24() { talk("真改", "誰がこんなことを、、、、", 2, stage, nn25);}
                function nn25() { talk("？？？", "おかえりなさい、真改", 2, stage, nn26);}
                function nn26() { talk("真改", "お前は小後富也、、、、！", 2, stage, nn27);}
                function nn27() { talk("真改", "まさかお前が、、、、？", 2, stage, nn28);}
                function nn28() { talk("小後富也", "ああそうさ", 2, stage, nn29);}
                function nn29(){
                    createjs.Tween.get(img2).to({alpha: 0}, 200);
                    talk("真改", "なんでこんなことを、、、", 2, stage, nn30);
                }
                function nn30() { talk("真改", "遊びなのか？　許さねえ！", 3, stage, nn31);}
                function nn31(){
                    if(param[5] == 111111110){
                        battle2("", enemyList[29], nn32, nn33);
                    }else{
                        battle2("", enemyList[31], nn32, nn33);
                    }
                }
                function nn33() { talk("小後富也", "残念だったなあ、はっはっはっ", 1, stage, nn34);}
                function nn34() { talk("真改", "なぜこんなことを、、、", 2, stage, nn35);}
                function nn35() { talk("", "END３　黒幕登場", 2, stage, nn36);}
                function nn36() { talk("", "なおこのゲームには８種類のエンディングが用意されています", 2, stage, nn37);}
                function nn37() { talk("", "繰り返しプレイして８種類制覇を目指してください", 2, stage, nn38);}
                function nn38() { talk("", "８種類制覇者にはいいことが待っています", 3, stage, nn39);}
                function nn39() {
                    quenum = 1;
                    var end = param[5];
                    param = [0, 0, 0, 10000000, 0, 100000000];
                    if(end % 200000 < 100000) end = end + 100000;
                    param[5] = end;
                    setTimeout(function(){
                        preopen();
                    }, 1000);
                    function preopen(){
                        var bl = rect("#000", 0, 0, 320, 533);
                        bl.alpha = 0;
                        createjs.Tween.get(bl).to({alpha: 1}, 400).call(preopen2);
                        stage.addChild(bl);
                    }
                    function preopen2(){
                        GLstage.removeAllChildren();
                        GLstage.update();
                        stage.removeAllChildren();
                        opening(stage);
                    }
                }

                function nn32() { talk("真改", "なぜこんなことを、、、", 1, stage, nn50);}
                function nn50(){
                    img2.alpha = 0;
                    createjs.Tween.get(img2).to({alpha: 1}, 200);
                    stage.addChild(img2);
                    talk("小後富也", "すべては復讐のためさ、、、", 2, stage, nn51);
                }
                function nn51() { talk("小後富也", "人々が三つに分かれたという話は聞いたか？", 2, stage, nn52);}
                function nn52() { talk("真改", "ああ", 2, stage, nn531);}
                function nn531() { talk("小後富也", "北と東と南に分かれた話も？", 2, stage, nn532);}
                function nn532() { talk("真改", "ああ", 2, stage, nn53);}
                function nn53() { talk("小後富也", "あのとき大陸の西に向かったのは俺のいたグループさ", 2, stage, nn54);}
                function nn54() { talk("小後富也", "ひどい話だよ", 2, stage, nn55);}
                function nn55() { talk("小後富也", "西には植物すら育たない荒野だけが広がっていることは、そのとき誰もが知っていた", 2, stage, nn56);}
                function nn56() { talk("小後富也", "一緒に北に行きたいと、征山のいたグループに頼んだよ", 2, stage, nn57);}
                function nn57() { talk("小後富也", "話すら聞いてくれなかった", 2, stage, nn58);}
                function nn58() { talk("小後富也", "一緒に東に行きたいと、石張のいたグループに頼んだよ", 2, stage, nn59);}
                function nn59() { talk("小後富也", "奴隷として隷従するならいいとだけ言われた", 2, stage, nn60);}
                function nn60() { talk("小後富也", "一緒に南に行きたいと、龍桜のいたグループに頼んだよ", 2, stage, nn61);}
                function nn61() { talk("小後富也", "ボコボコにされたよ", 2, stage, nn62);}
                function nn62() { talk("小後富也", "まあ何とか桜龍のグループに紛れることができ、お前の弟弟子として過ごすことにした", 2, stage, nn63);}
                function nn63() { talk("小後富也", "復習としてまずは女神族を消した", 2, stage, nn64);}
                function nn64() { talk("真改", "まさか、女神族を滅ぼしたのって、、、", 2, stage, nn65);}
                function nn65() { talk("小後富也", "ああ俺さ", 2, stage, nn66);}
                function nn66() { talk("小後富也", "そして征山とかいう奴は、桜龍が女神族を消したと勘違いしたらしいな", 2, stage, nn67);}
                function nn67() { talk("小後富也", "それは想定外だった。でもそれは都合がよかった", 2, stage, nn68);}
                function nn68() { talk("小後富也", "だって猫族と黶子族が戦って、勝手にどっちかが消えてくれるんだもんな", 2, stage, nn69);}
                function nn69() { talk("小後富也", "俺はお前、真改の力を見込んでいた", 2, stage, nn70);}
                function nn70() { talk("小後富也", "俺の予想通り、お前は猫族を消すことに成功した", 2, stage, nn71);}
                function nn71() { talk("小後富也", "ならあとは俺の手で黶子族を消すのみ、、、", 2, stage, nn72);}
                function nn72() { talk("小後富也", "これで俺の復習は全て終わりだ、、、", 2, stage, nn73);}
                function nn73() { talk("小後富也", "みんな俺をのけ者にするから悪いんだ、、、、", 2, stage, nn74);}
                function nn74() { talk("小後富也", "自業自得さ、、、、", 2, stage, nn75);}
                function nn75(){
                    createjs.Tween.get(img2).to({alpha: 0}, 200);
                    talk("", "炎のメラメラという音と、小後の泣きじゃくる声だけが、その場に響いていた。", 2, stage, nn76);
                }
                function nn76() { talk("", "END８　全ての真実", 2, stage, nn77);}
                function nn77() { talk("", "おめでとうございます！　８種類のエンディングコンプリートです！", 2, stage, nn78);}
                function nn78() { talk("", "このゲームを最後までプレイしていただき、ありがとうございました", 2, stage, nn79);}
                function nn79() { talk("", "次の画面で表彰状が発行されます。ぜひスクショして自慢してください", 2, stage, nn80);}
                function nn80() { talk("", "なお画面に触れると消えてしましますので、ご注意ください", 3, stage, nn81);}
                var img3 = bmp("endimg3", 5, 43, 310);
                var t;
                function nn81(){
                    img3.alpha = 0;
                    createjs.Tween.get(img3).to({alpha: 1}, 200).call(nn82);
                    stage.addChild(img3);
                    var font = "bold 20px sans-serif";
                    t = new createjs.Text(playerName, font, "Black");
                    t.textAlign = "end";
                    t.textBaseline = "middle";
                    t.x = 188;
                    t.y = 400;
                    t.rotation = 90;
                    stage.addChild(t);
                }
                var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
                function nn82(){
                    document.addEventListener(tap, nn83, false);
                }
                function nn83(e) {
                    document.removeEventListener(tap, nn83);
                    stage.removeChild(img3);
                    stage.removeChild(t);
                    talk("", "プレイしていただきありがとうございました！", 1, stage, nn84);
                }
                function nn84() { talk("", "また最初から繰り返しプレイすることができます！", 3, stage, nn85);}
                function nn85() {
                    quenum = 1;
                    param = [0, 0, 0, 10000000, 0, 100000000];
                    setTimeout(function(){
                        preopen();
                    }, 1000);
                    function preopen(){
                        var bl = rect("#000", 0, 0, 320, 533);
                        bl.alpha = 0;
                        createjs.Tween.get(bl).to({alpha: 1}, 400).call(preopen2);
                        stage.addChild(bl);
                    }
                    function preopen2(){
                        GLstage.removeAllChildren();
                        GLstage.update();
                        stage.removeAllChildren();
                        opening(stage);
                    }
                }


            }else{
                talk("征山", "よく来たな、威ヶ神真改、あのとき以来だろうか", 1, stage, next21);
                function next21() { talk("真改", "アッポンドを渡せ", 2, stage, next22);}
                function next22() { talk("征山", "ほう、桜龍が生きていたとは驚きだな", 2, stage, next23);}
                function next23() { talk("征山", "ただアッポンドを渡すわけにはいかねえ、桜龍には大人しくしていてもらわないと", 2, stage, next24);}
                function next24() { talk("真改", "征山竹ノ内、ここで提案なんだが", 2, stage, next25);}
                function next25() { talk("征山", "何だ？", 2, stage, next26);}
                function next26() { talk("真改", "もうお互い争いはやめにしないか？", 2, stage, next27);}
                function next27() { talk("真改", "写真族のやつに言われて改心したよ", 2, stage, next28);}
                function next28() { talk("真改", "争いほど愚かなものはないよ", 2, stage, next29);}
                function next29() { talk("真改", "お互い仲良くすれば、きっといい未来が待ってるよ", 2, stage, next30);}
                function next30() { talk("真改", "黶子＜ほくろ＞族はもう猫族に攻撃しない", 2, stage, next31);}
                function next31() { talk("真改", "だからもう争いはやめて、アッポンドを渡してくれよ", 2, stage, next32);}
                function next32() { talk("征山", "、、、、", 2, stage, next33);}
                function next33() { talk("征山", "言ったな、、、？", 2, stage, next34);}
                function next34() { talk("征山", "言ったことは守れよ？", 2, stage, next35);}
                function next35() { talk("真改", "ああ、もちろん", 2, stage, next36);}
                function next36() { talk("征山", "では桜龍のもとへ手下にアッポンドを持っていかせよう", 2, stage, next37);}
                function next37() { talk("真改", "、、、！", 2, stage, next38);}
                function next38() { talk("征山", "今夜は祝杯だあああああっ！", 2, stage, next42);}
                function next42() { talk("", "END４　争いの無い世界", 2, stage, next43);}
                function next43() { talk("", "なおこのゲームには８種類のエンディングが用意されています", 2, stage, next44);}
                function next44() { talk("", "繰り返しプレイして８種類制覇を目指してください", 2, stage, next45);}
                function next45() { talk("", "８種類制覇者にはいいことが待っています", 3, stage, next46);}
                function next46() {
                    quenum = 1;
                    var end = param[5];
                    param = [0, 0, 0, 10000000, 0, 100000000];
                    if(end % 20000 < 10000) end = end + 10000;
                    param[5] = end;
                    setTimeout(function(){
                        preopen();
                    }, 1000);
                    function preopen(){
                        var bl = rect("#000", 0, 0, 320, 533);
                        bl.alpha = 0;
                        createjs.Tween.get(bl).to({alpha: 1}, 400).call(preopen2);
                        stage.addChild(bl);
                    }
                    function preopen2(){
                        GLstage.removeAllChildren();
                        GLstage.update();
                        stage.removeAllChildren();
                        opening(stage);
                    }
                }

            }
            
        }
    },
];

function darkside(game){
    var stage = new createjs.Stage("canvas2");
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Ticker.framerate = createjs.Ticker.RAF;
    var ran = Math.random();

    if(ran < 0.2){
        talk("村人", "このゲームの世界観、", 1, stage, next);
        function next() { talk("村人", "よくわかんないよね", 3, stage, next6);}
    }else if(ran < 0.4){
        talk("村人", "こんなクソゲーをここまで進めていただき、", 1, stage, next2);
        function next2() { talk("村人", "本当にありがとうございます", 3, stage, next6);}
    }else if(ran < 0.6){
        talk("村人", "ここは厨二族なんだから、中二病っぽいこと言ってよと開発者に言われたのですが、", 1, stage, next3);
        function next3() { talk("村人", "そんなこと言われてもね、、、", 3, stage, next6);}
    }else if(ran < 0.8){
        talk("村人", "フィールドマップとか適当感満載ですみません、", 1, stage, next4);
        function next4() { talk("村人", "と、開発者が申していました", 3, stage, next6);}
    }else{
        talk("村人", "素材がなさすぎてぴえん、イラストなどの素材募集してます、", 1, stage, next5);
        function next5() { talk("村人", "と、開発者が申していました", 3, stage, next6);}
    }
    function next6() {
        createjs.Ticker.removeEventListener("tick", stage);
        stage.clear();
        game.stopOn = false;
    }

}

function picture(game){
    var stage = new createjs.Stage("canvas2");
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Ticker.framerate = createjs.Ticker.RAF;
    var ran = Math.random();

    if(ran < 0.2){
        talk("村人", "エ、", 1, stage, next);
        function next() { talk("村人", "ジョシカトオモッタ", 3, stage, next6);}
    }else if(ran < 0.4){
        talk("村人", "モシモシ内閣、", 1, stage, next2);
        function next2() { talk("村人", "自分二人権アリマスカ", 3, stage, next6);}
    }else if(ran < 0.6){
        talk("村人", "れん君って、", 1, stage, next3);
        function next3() { talk("村人", "だれだろう、、、？", 3, stage, next6);}
    }else if(ran < 0.8){
        talk("村人", "威ヶ神真改公式Youtube、Twitter、Instagram、", 1, stage, next4);
        function next4() { talk("村人", "そして小説版もよろしく！", 3, stage, next6);}
    }else{
        talk("村人", "彼は綾鷹を振り回すだけで", 1, stage, next5);
        function next5() { talk("村人", "開発者を倒せると思っているらしい、、、", 3, stage, next6);}
    }
    function next6() {
        createjs.Ticker.removeEventListener("tick", stage);
        stage.clear();
        game.stopOn = false;
    }
}