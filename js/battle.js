'use strict'

function rect(fillcolor, x, y, width, height, round, stcolor, stW) {
    if (round === void 0) {
        var rect = new createjs.Shape();
        rect.graphics.beginFill(fillcolor);
        rect.graphics.drawRect(x, y, width, height);
        return rect;
    } else if (stcolor === void 0) {
        var graphics = new createjs.Graphics();
        graphics
            .beginFill(fillcolor)
            .drawRoundRect(x, y, width, height, round);
        var rect = new createjs.Shape(graphics);
        return rect;
    } else if (stW === void 0) {
        var graphics = new createjs.Graphics();
        graphics
            .beginStroke(stcolor)
            .setStrokeStyle(2)
            .beginFill(fillcolor)
            .drawRoundRect(x, y, width, height, round);
        var rect = new createjs.Shape(graphics);
        return rect;
    } else {
        var graphics = new createjs.Graphics();
        graphics
            .beginStroke(stcolor)
            .setStrokeStyle(stW)
            .beginFill(fillcolor)
            .drawRoundRect(x, y, width, height, round);
        var rect = new createjs.Shape(graphics);
        return rect;
    }
}

function text(msg, fontsize, x, y, nomal) { //nomalなければreggaefont
    if (nomal === void 0) {
        var font = fontsize + "px 'Reggae One', cursive";
    } else {
        var font = "bold " + fontsize + "px sans-serif";
    }
    var text = new createjs.Text(msg, font, "White");
    text.textAlign = "center";
    text.textBaseline = "middle";
    text.x = x;
    text.y = y;
    return text;
}

function bmp(bmpid, x, y, sizeX, sizeY, reg) {
    var bmp = new createjs.Bitmap(loadQueue.getResult(bmpid));
    bmp.x = x;
    bmp.y = y;
    bmp.scaleX = sizeX / loadQueue.getResult(bmpid).width;
    if (sizeY === void 0) {
        bmp.scaleY = bmp.scaleX;
    } else {
        bmp.scaleY = sizeY / loadQueue.getResult(bmpid).height;
    }
    if (reg !== void 0) {
        bmp.regX = loadQueue.getResult(bmpid).width / 2;
        bmp.regY = loadQueue.getResult(bmpid).height / 2;
    }
    return bmp;
}


var meOrHP;
var meHP;
var mePow;
var meDef;
var meDead;
var enOrHP;
var enHP;
var enPow;
var enDef;

function battle2(game, enemydata, next1, next2) {
    var stage = new createjs.Stage("canvas2");
    battle4(stage, game, enemydata, next1, next2);
}

function battle3(stage, game, enemydata, next1, next2) {
    battle4(stage, game, enemydata, next1, next2);
}

function battle4(stage2, game, enemydata, next1, next2) {

    var stage = stage2

    var bname1 = "威ヶ神真改";
    var bname2 = enemydata.name;

    //背景
    if (quenum == 3 && param[1] === 0) {
        var bg = bmp("battlebg8", 0, 0, 320, 533);
    } else {
        var bg = bmp("battlebg" + Math.ceil(Math.random() * bgnumber), 0, 0, 320, 533);
    }
    stage.addChild(bg);

    //マス目
    var shape = rect("White", 48, 91, 224, 277);
    stage.addChild(shape);
    for (var i = 0; i < 4; i++) {
        shape = rect("Green", i * 53 + 56, 98, 49, 264);
        stage.addChild(shape);
    }

    //画像
    var shi = bmp("shinkai", 272, 485, 67, 67, true);
    stage.addChild(shi);
    var enemy = bmp(enemydata.id, 46, 46, 67, 67, true);
    stage.addChild(enemy);

    //必殺ゲージ
    var dgcon = new createjs.Container();
    stage.addChild(dgcon);
    var dg = rect("#a9a9a9", 91, 379, 213, 59, 10, "#ffffff");
    dgcon.addChild(dg);
    var dgtext = text("終焉ノ黶子", 22, 198, 409);
    dgcon.addChild(dgtext);
    var dg2 = rect("#000", 91, 379, 213, 59, 10);
    dg2.alpha = 0.5;
    dg2.visible = true;
    dgcon.addChild(dg2);

    //アイテム
    var itemb = rect("#594D80", 16, 379, 64, 59, 10, "#ffffff");
    stage.addChild(itemb);
    var itemb2 = bmp("onigiri", 21, 384, 54, 49);
    stage.addChild(itemb2);

    //HP1
    shape = rect("Gray", 96, 48, 203, 11, 2, "#ffffff");
    stage.addChild(shape);
    var enhpr = rect("Red", 0, 50, 199, 7);
    enhpr.x = 98;
    stage.addChild(enhpr);
    var enhpg = rect("#00ff7f", 0, 50, 199, 7);
    enhpg.x = 98;
    stage.addChild(enhpg);

    //HP2
    shape = rect("Gray", 19, 501, 203, 11, 2, "#ffffff");
    stage.addChild(shape);
    var mehpr = rect("Red", 0, 503, 199, 7);
    mehpr.x = 21;
    stage.addChild(mehpr);
    var mehpg = rect("#00ff7f", 0, 503, 199, 7);
    mehpg.x = 21;
    stage.addChild(mehpg);

    //name1
    shape = rect("#000", 96, 10, 233, 30);
    shape.alpha = 0.6;
    stage.addChild(shape);
    var name1 = new createjs.Text(bname2, "15px 'Reggae One', cursive", "White");
    name1.textAlign = "left";
    name1.textBaseline = "middle";
    name1.x = 101;
    name1.y = 25;
    stage.addChild(name1);

    //name2
    shape = rect("#000", 0, 463, 222, 30);
    shape.alpha = 0.6;
    stage.addChild(shape);
    var name1 = new createjs.Text(bname1, "15px 'Reggae One', cursive", "White");
    name1.textAlign = "left";
    name1.textBaseline = "middle";
    name1.x = 24;
    name1.y = 478;
    stage.addChild(name1);

    //必殺モーション
    var bg2 = rect("#000", 0, 0, 320, 533);
    bg2.alpha = 0;
    bg2.visible = true;

    var playmsg = text("相手のターンです", 26, 160, 267);
    playmsg.visible = false;
    //球の後で追加


    var enemyexp = exp * enemydata.exp;
    var playerlv = Math.floor((3 + Math.sqrt(9 + 24 * (exp - 300))) / 6);
    var enemyexp2 = Math.ceil(enemyexp * 0.8 + enemyexp * 0.2 * (300 / (playerlv + 299)));
    var enemystatus = Math.floor(enemyexp2 / 3);

    meOrHP = itemHp;
    meHP = meOrHP;
    mePow = itemPow;
    meDef = itemDef;
    meDead = 0;
    enOrHP = enemystatus;
    enHP = enOrHP;
    enPow = enemystatus;
    enDef = enemystatus;
    var enDead = enemydata.charge;
    var isOkDead = false;
    var player = 1;
    var touchOk = false;
    var isNonStart = true;

    var isHissatsu = false;
    var metaiki = 0;
    var entaiki = 0;
    var deadtaiki = 0;


    createjs.Ticker.addEventListener("tick", handleTick3);
    createjs.Ticker.framerate = createjs.Ticker.RAF;

    function handleTick3() {
        if (isHissatsu) {
            stage.update();
            return;
        }

        if (player == 1) {
            playmsg.visible = false;
        } else {
            playmsg.visible = true;
        }

        //自分のHP
        if (mehpg.scaleX > meHP / meOrHP && mehpg.scaleX > 0) {
            mehpg.scaleX -= 0.015;
            if (mehpg.scaleX <= 0) {
                if (meHP > 0) {
                    mehpg.scaleX = meHP / meOrHP;
                } else {
                    mehpg.scaleX = 0;
                }
            }
            if (meHP > 0 && mehpg.scaleX < 0.01) mehpg.scaleX = 0.005;
        } else if (mehpg.scaleX + 0.015 <= meHP / meOrHP && mehpg.scaleX > 0) {
            mehpg.scaleX += 0.015;
            mehpr.scaleX = mehpg.scaleX;
            metaiki = 0;
        } else {
            metaiki++;
        }

        if (mehpr.scaleX >= mehpg.scaleX) {
            if (metaiki > 50) mehpr.scaleX -= 0.003;
            if (mehpr.scaleX <= 0) mehpr.scaleX = 0;
            if (meHP > 0 && mehpr.scaleX < 0.01) mehpr.scaleX = 0.005;
        } else {
            metaiki = 0;
        }


        //相手のHP
        if (enhpg.scaleX > enHP / enOrHP && enhpg.scaleX > 0) {
            enhpg.scaleX -= 0.015;
            if (enhpg.scaleX <= 0) enhpg.scaleX = 0;
            if (enHP > 0 && enhpg.scaleX < 0.01) enhpg.scaleX = 0.005;
        } else {
            entaiki++;
        }

        if (enhpr.scaleX >= enhpg.scaleX) {
            if (entaiki > 50) enhpr.scaleX -= 0.003;
            if (enhpr.scaleX <= 0) enhpr.scaleX = 0;
            if (enHP > 0 && enhpr.scaleX < 0.01) enhpr.scaleX = 0.005;
        } else {
            entaiki = 0;
        }


        if (deadtaiki <= meDead) {
            deadtaiki += 0.05;
            dgcon.removeChild(dg);
            dgcon.removeChild(dgtext);
            dgcon.removeChild(dg2);
            //必殺ゲージ
            graphics = new createjs.Graphics();
            graphics
                .beginStroke("#ffffff")
                .setStrokeStyle(2)
                .beginFill("#594D80")
                .beginLinearGradientFill(["#00ffff", "#a9a9a9"], [1, 1], 91, 91, 213 / 60 * (deadtaiki + 0.0001) + 91, 91)
                .drawRoundRect(91, 379, 213, 58, 10);
            dg = new createjs.Shape(graphics);
            dgcon.addChild(dg);
            dgcon.addChild(dgtext);

            if (isOkDead) {
                dg2.visible = false;
                dgcon.addChild(dg2);
            } else {
                dg2.visible = true;
                dgcon.addChild(dg2);
            }
        }

        stage.update();
    }


    var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

    document.addEventListener(tap, touch2, false);

    let doubleflag = false;
    function touch2(e) {
        if (doubleflag) return;
        if (!touchOk) return;
        doubleflag = true;
        if (tap == 'touchstart') {
            var touches = e.changedTouches[0];
        } else {
            var touches = e;
        }
        var rect = canvas.getBoundingClientRect();
        var X = (touches.clientX - rect.left) / rect.width * canvas.width;
        var Y = (touches.clientY - rect.top) / rect.height * canvas.height;
        touch(X, Y);
        doubleflag = false;
    }

    function itemwindowend() {
        touchOk = true;
    }


    function touch(x, y) {
        if (isNonStart) {
            touchstart(x, y);
            return;
        }
        if (x > 53 && x < 267 && y > 96 && y < 363) {
            if (x > 53 && x < 107) {
                play(1);
            } else if (x >= 107 && x < 160) {
                play(2);
            } else if (x >= 160 && x < 213) {
                play(3);
            } else if (x >= 213 && x < 267) {
                play(4);
            }
        } else if (x > 91 && x < 304 && y > 379 && y < 437) {
            if (!isOkDead) return;
            meHissatsu();

        } else if (x > 16 && x < 80 && y > 379 && y < 437) {
            touchOk = false;
            clickbgm.pause();
            clickbgm.currentTime = 0;
            clickbgm.play();
            itemwindow(5, itemwindowend, stage);

        }

    }


    var container = new createjs.Container();
    stage.addChild(container);

    stage.addChild(playmsg);

    var height = [0, 0, 0, 0];
    var balls = "";
    var circles = [];
    var tamacolors = ["#ee82ee", "#40e0d0", "#00ff7f", "#fa8072", "#ffd700", "#00bfff", "#ff7f50", "#00ced1", "#a9a9a9"];
    var tamacolor = tamacolors[Math.floor(Math.random() * tamacolors.length)];

    function tamaoki(ww, next) {
        //球のデザイン
        balls = balls + ww;
        var w = ww - 1;
        height[w]++;
        var movex = w * 53 + 81;
        var movey = (5 - height[w]) * 53 + 123;
        var circle = new createjs.Shape();
        if (player == 1) {
            circle.graphics.beginFill("White").drawCircle(0, 0, 21);
        } else {
            circle.graphics.beginFill(tamacolor).drawCircle(0, 0, 21);
        }
        circle.x = movex;
        circle.y = -20;
        if (next == 1) {
            createjs.Tween.get(circle).to({ y: movey }, 800, createjs.Ease.bounceOut).call(playsend);
        } else if (next == 2) {
            createjs.Tween.get(circle).to({ y: movey }, 800, createjs.Ease.bounceOut).call(playenemywin);
        } else {
            createjs.Tween.get(circle).to({ y: movey }, 800, createjs.Ease.bounceOut).call(playenemy2);
        }
        container.addChild(circle);
        circles.push(circle);
    }

    function tamakeshi() {
        for (var i = 0; i < circles.length; i++) {
            createjs.Tween.get(circles[i]).to({ y: 555 }, 1000, createjs.Ease.bounceOut).call(eraser);
        }
        height = [0, 0, 0, 0];
        balls = "";
        circles = [];
    }

    function eraser() {
        stage.removeChild(container);
        var container = new createjs.Container();
        stage.addChild(container);
    }

    var isending = false;
    var taeru = true;

    //player -1 or 1, power 20 or 5 or 3
    function damage(power, enhi) {
        if (player == 1) {
            var dam = mePow * mePow / (mePow + enDef) / power;
            var bmp2 = enemy;
        } else {
            var dam = enPow * enPow / (enPow + meDef) / power;
            var bmp2 = shi;
        }

        dam = Math.ceil(dam * 0.95 + Math.random() * 0.1 * dam);

        if (nowwea !== "") {
            dam = weaList[wea[nowwea]].use(dam, player);
        }

        var bmpx = bmp2.x;
        var bmpy = bmp2.y;
        var rx = Math.random() * i - 11;
        var ry = Math.random() * i - 11;
        createjs.Tween.get(bmp2).to({ x: bmpx + rx, y: bmpy + ry }, 100).call(move);
        attackbgm.pause();
        attackbgm.currentTime = 0;
        attackbgm.play();

        var cou = 6;

        function move() {
            cou--;
            if (cou <= 0) return;
            var rx = Math.random() * cou * 11 - 32;
            var ry = Math.random() * cou * 11 - 32;
            createjs.Tween.get(bmp2).to({ x: bmpx + rx, y: bmpy + ry }, 40).call(move2);
        }

        function move2() {
            createjs.Tween.get(bmp2).to({ x: bmpx, y: bmpy }, 30).call(move);
        }

        var dambg = bmp("damage", bmpx - 15, bmpy, 60, 60);
        dambg.alpha = 0;
        createjs.Tween.get(dambg).to({ y: bmpy - 15, alpha: 1 }, 300, createjs.Ease.cubicOut).wait(1000).to({ y: bmpy - 30, alpha: 0 }, 300, createjs.Ease.cubicIn).call(damdel, [dambg]);
        stage.addChild(dambg);

        if (wea[nowwea] == 26 && enhi !== void 0) {
            var damtxt = new createjs.Text("ミス", "15px 'Reggae One', cursive", "#b22222");
            dam = 0;
        } else {
            if (dam.length > 2) {
                var damtxt = new createjs.Text(dam, "15px 'Reggae One', cursive", "#b22222");
            } else {
                var damtxt = new createjs.Text(dam, "20px 'Reggae One', cursive", "#b22222");
            }
        }
        damtxt.textAlign = "center";
        damtxt.textBaseline = "middle";
        damtxt.x = bmpx + 15;
        damtxt.y = bmpy + 30;
        damtxt.alpha = 0;
        createjs.Tween.get(damtxt).to({ y: bmpy + 15, alpha: 1 }, 300, createjs.Ease.cubicOut).wait(1000).to({ y: bmpy, alpha: 0 }, 300, createjs.Ease.cubicIn).call(damdel, [damtxt]);
        stage.addChild(damtxt);

        function damdel(obj) {
            stage.removeChild(obj);
        }

        if (player == 1) {
            enHP = enHP - dam;
        } else {
            meHP = meHP - dam;
        }

        if (meHP <= 0 || enHP <= 0) {
            if (meHP <= 0 && wea[nowwea] == 24 && taeru) {
                meHP = 1;
                taeru = false;
                return;
            }
            if (isending) return;
            isending = true;
            ending();
        }
    }

    function ending() {
        document.removeEventListener(tap, touch2, false);
        fade(checkmate);
        var b = rect("#000", 0, 0, 320, 533);
        b.alpha = 0;
        b.visible = true;
        createjs.Tween.get(b).wait(3000).to({ alpha: 1 }, 2000);
        stage.addChild(b);
        if (enHP <= 0) {
            var win = new createjs.Text("Win!", "36px 'Reggae One', cursive", "#ff7f50");
            win.textAlign = "center";
            win.textBaseline = "middle";
            win.x = 160;
            win.y = 120;
            win.scaleX = win.scaleY = 0;
            createjs.Tween.get(win).wait(3600).call(winsound).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.bounceOut).call(ending4);
            stage.addChild(win);
        } else {
            var win = new createjs.Text("Lose...", "32px 'Reggae One', cursive", "#add8e6");
            win.textAlign = "center";
            win.textBaseline = "middle";
            win.x = 160;
            win.y = 250;
            win.alpha = 0;
            createjs.Tween.get(win).wait(3600).to({ alpha: 1 }, 1000).wait(2000).to({ alpha: 0 }, 500).wait(200).call(ending2);
            stage.addChild(win);
        }
    }

    function winsound() {
        winbgm.play();
    }

    var winThisBattle;

    function ending2() {
        winThisBattle = false;
        isHissatsu = true;
        var bla = rect("#000", 0, 0, 320, 533);
        createjs.Tween.get(bla).to({ alpha: 0 }, 400).wait(100).call(ending3);
        stage.addChild(bla);
        for (var i = 0; i < stage.children.length - 1; i++) {
            createjs.Tween.get(stage.children[i]).to({ alpha: 0 }, 1);
        };
    }

    function ending3() {
        stage.removeAllChildren();
        createjs.Tween.removeAllTweens();
        createjs.Ticker.removeEventListener("tick", handleTick3);
        stage.clear();
        if (next1 === void 0) {
            fieldbgm.currentTime = 0;
            fieldbgm.play();
            game.stopOn = false;
        } else {
            if (winThisBattle) {
                next1();
            } else {
                next2();
            }
        }
    }

    var orLv;
    var newLv;

    function ending4() {
        winThisBattle = true;
        orLv = Math.floor((3 + Math.sqrt(9 + 24 * (exp - 300))) / 6);
        var getexp = Math.floor(orLv * (Math.random() * 0.2 + 1.0) * enemydata.exp);
        if (getexp == 0) getexp = 1;
        if (wea[nowwea] == 23) getexp = Math.floor(getexp * 1.2);
        var hasuu = getexp * (Math.random() * 0.1);
        if (Math.random() < 0.5) {
            var getpow = Math.round(getexp / 3 + hasuu);
            var getdef = Math.round(getexp / 3 - hasuu);
            if (getpow == 0 && getdef == 0 && Math.random < 0.6) getpow = 1;
        } else {
            var getpow = Math.round(getexp / 3 - hasuu);
            var getdef = Math.round(getexp / 3 + hasuu);
            if (getpow == 0 && getdef == 0 && Math.random < 0.6) getdef = 1;
        }
        exp = exp + getexp;
        pow = pow + getpow;
        def = def + getdef;
        hp = exp - pow - def;
        newLv = Math.floor((3 + Math.sqrt(9 + 24 * (exp - 300))) / 6);
        if (nowwea === "") {
            itemHp = hp;
            itemPow = pow;
            itemDef = def;
        } else {
            weaList[wea[nowwea]].put(hp, pow, def);
        }
        var res1 = text("経験値", 26, 160, 180);
        res1.scaleX = res1.scaleY = 0;
        createjs.Tween.get(res1).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut);
        stage.addChild(res1);
        var res2 = text(getexp, 26, 160, 230);
        res2.scaleX = res2.scaleY = 0;
        createjs.Tween.get(res2).wait(100).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut);
        stage.addChild(res2);
        var res3 = text("を獲得した！", 26, 160, 280);
        res3.scaleX = res3.scaleY = 0;
        createjs.Tween.get(res3).wait(200).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut);
        stage.addChild(res3);
        var itembox = rect("#00008b", 0, 0, 120, 54, 10, "#ffffff");
        itembox.x = 100;
        itembox.y = 400;
        itembox.scaleX = itembox.scaleY = 0;
        createjs.Tween.get(itembox).wait(300).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut);
        stage.addChild(itembox);
        var res4 = text("OK", 26, 160, 427);
        res4.scaleX = res4.scaleY = 0;
        createjs.Tween.get(res4).wait(400).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut).call(ending5);
        stage.addChild(res4);
    }

    function ending5() {
        document.addEventListener(tap, touch3, false);
        touchOk = true;
    }

    var lvupt = false;

    function touch3(e) {
        if (!touchOk) return;
        touchOk = false;
        if (tap == 'touchstart') {
            var touches = e.changedTouches[0];
        } else {
            var touches = e;
        }
        var rect2 = canvas.getBoundingClientRect();
        var x = (touches.clientX - rect2.left) / rect2.width * canvas.width;
        var y = (touches.clientY - rect2.top) / rect2.height * canvas.height;
        if (x > 100 && x < 200 && y > 400 && y < 455) {
            clickbgm.pause();
            clickbgm.currentTime = 0;
            clickbgm.play();
            if (lvupt) {
                for (var i = 0; i < stage.children.length; i++) {
                    createjs.Tween.get(stage.children[i]).wait(400).to({ alpha: 0 }, 1);
                }
                var b = rect("#000", 0, 0, 320, 533);
                b.alpha = 0;
                createjs.Tween.get(b).to({ alpha: 1 }, 400).wait(100).to({ alpha: 0 }, 400).call(ending3);
                stage.addChild(b);
                return;
            }
            for (var i = 0; i < stage.children.length; i++) {
                createjs.Tween.get(stage.children[i]).wait(400).to({ alpha: 0 }, 1);
            }
            var b = rect("#000", 0, 0, 320, 533);
            b.alpha = 0;
            if (orLv == newLv) {
                document.removeEventListener(tap, touch3);
                createjs.Tween.get(b).to({ alpha: 1 }, 400).wait(100).to({ alpha: 0 }, 400).call(ending3);
                stage.addChild(b);
            } else {
                document.removeEventListener(tap, touch3);
                
                createjs.Tween.get(b).to({ alpha: 1 }, 400);
                stage.addChild(b);

                var res1 = text("真改は", 24, 160, 160);
                res1.scaleX = res1.scaleY = 0;
                createjs.Tween.get(res1).wait(500).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut);
                stage.addChild(res1);
                var res2 = new createjs.Text("Lv. " + newLv, "24px 'Reggae One', cursive", "#ff7f50");
                res2.textAlign = "center";
                res2.textBaseline = "middle";
                res2.x = 160;
                res2.y = 210;
                res2.scaleX = res2.scaleY = 0;
                createjs.Tween.get(res2).wait(600).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut);
                stage.addChild(res2);
                var res3 = text("にレベルアップした！！", 24, 160, 260);
                res3.scaleX = res3.scaleY = 0;
                createjs.Tween.get(res3).wait(700).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut);
                stage.addChild(res3);
                var itembox = rect("#00008b", 0, 0, 120, 54, 10, "#ffffff");
                itembox.x = 100;
                itembox.y = 400;
                itembox.scaleX = itembox.scaleY = 0;
                createjs.Tween.get(itembox).wait(800).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut);
                stage.addChild(itembox);
                var res4 = text("OK", 26, 160, 427);
                res4.scaleX = res4.scaleY = 0;
                createjs.Tween.get(res4).wait(900).to({ scaleX: 1, scaleY: 1 }, 400, createjs.Ease.bounceOut).call(ending6);
                stage.addChild(res4);
            }
        } else {
            touchOk = true;
        }
    }

    function ending6() {
        lvupt = true;
        touchOk = true;
    }

    function hissatsu() {
        isHissatsu = true;
        createjs.Tween.get(bg2).to({ alpha: 0.5 }, 400).wait(300).call(motion);
        stage.addChild(bg2);
    }

    var waza;
    var chara = new createjs.Container();
    var lnum = 1;

    function motion() {
        wazabgm.play();
        stage.addChild(chara);
        if (player == 1) {
            waza = bmp("light" + lnum, 0, 147, 320);
        } else {
            waza = bmp(enemydata.wazamid + lnum, 0, 147, 320, 240);
        }
        createjs.Tween.get(waza).wait(40).call(motion2).call(motion4);
        stage.addChild(waza);
    }

    function motion2() {
        lnum++;
        stage.removeChild(waza);
        if (player == 1) {
            waza = bmp("light" + lnum, 0, 147, 320);
            var maxlnum = 16;
        } else {
            waza = bmp(enemydata.wazamid + lnum, 0, 147, 320, 240);
            var maxlnum = enemydata.wazamlength;
        }
        if (lnum < maxlnum) {
            createjs.Tween.get(waza).wait(40).call(motion2);
        } else {
            createjs.Tween.get(waza).wait(40).call(motion3);
        }
        stage.addChild(waza);
    }

    function motion3() {
        stage.removeChild(waza);
        lnum = 1;
    }

    function motion4() {
        if (player == 1) {
            var wazabg = "wazabg1";
            var playerbmp = "shinkai";
            var eye = 180;
        } else {
            var wazabg = enemydata.wazabg;
            var playerbmp = enemydata.id;
            var eye = enemydata.eye;
        }
        var demaizu = bmp(wazabg, 320, 224, 714, 85);
        createjs.Tween.get(demaizu).wait(700).to({ x: -160 }, 300, createjs.Ease.cubicOut).to({ x: -181 }, 400).to({ x: -1387 }, 400, createjs.Ease.cubicIn).call(motion5);
        chara.addChild(demaizu);
        var shi2 = new createjs.Bitmap(loadQueue.getResult(playerbmp));
        shi2.sourceRect = {
            x: 0,
            y: eye,
            width: loadQueue.getResult(playerbmp).width,
            height: Math.floor(loadQueue.getResult(playerbmp).width * 0.46)
        }
        shi2.x = 320;
        shi2.y = 224;
        shi2.scaleX = 185 / loadQueue.getResult(playerbmp).width;
        shi2.scaleY = shi2.scaleX;
        createjs.Tween.get(shi2).wait(400).to({ x: 21 }, 300, createjs.Ease.cubicOut).to({ x: 11 }, 400).to({ x: -320 }, 400, createjs.Ease.cubicIn);
        chara.addChild(shi2);
    }

    function motion5() {
        stage.removeChild(chara);
        chara = new createjs.Container();
        createjs.Tween.get(bg2).to({ alpha: 0 }, 400).call(motion6);
    }

    var mewaza;
    var mewazacou = 1;
    var enwaza;
    var enwazacou = 1;

    function motion6() {
        stage.removeChild(bg2);
        if (player == 1) {
            mehissatsumotion();
            damage(3);
        } else {
            enemyhissatsumotion();
            damage(3, true);
        }
        wazabgm2.play()
        tamakeshi();
    }

    function motion7() {
        meDead++;
        enDead++;
        if (player == 1) {
            player = player * -1;
            window.setTimeout(function() { playenemy("0X0X0X0") }, 600);
        } else {
            if (meDead > 60) isOkDead = true;
            touchOk = true;
            player = player * -1;
        }
        isHissatsu = false;
    }


    function mehissatsumotion() {
        if (mewazacou > 1) stage.removeChild(mewaza);
        if (mewazacou > 10) {
            mewazacou = 1;
            motion7();
            return;
        }
        mewaza = bmp("yami" + mewazacou, -43, -43, 213);
        createjs.Tween.get(mewaza).wait(80).call(mehissatsumotion);
        stage.addChild(mewaza);
        mewazacou++;
    }

    function enemyhissatsumotion() {
        if (enwazacou > 1) stage.removeChild(enwaza);
        if (enwazacou > enemydata.wazalength) {
            enwazacou = 1;
            motion7();
            return;
        }
        enwaza = bmp(enemydata.wazaid + enwazacou, 150, 340, 213, 213);
        createjs.Tween.get(enwaza).wait(80).call(enemyhissatsumotion);
        stage.addChild(enwaza);
        enwazacou++;
    }


    function play(width) {
        touchOk = false;
        if (height[width - 1] >= 5) {
            touchOk = true;
            return;
        }
        tamaoki(width, 1);
        damage(20); ////////////////////////////
    }

    function playsend() {
        var url = "https://ikegamishinkai.shop/c4solver.cgi?" + balls;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            var res = xhr.response;
            play2(res);
        }
        xhr.send();
    }

    function play2(res) {
        if (res == "Lose") {
            var connect = find();
            gocircle(connect, enemy, true);
        } else if (res == "InvalidXInvalidXInvalidXInvalidX") {
            tamakeshi();
            meDead++;
            enDead++;
            player = player * -1;
            playenemy("0X0X0X0X0");
        } else {
            meDead++;
            enDead++;
            player = player * -1;
            playenemy(res);
        }
    }

    function gocircle(connect, img, isme) {
        fourbgm.play();
        for (var i = 0; i < 4; i++) {
            container.removeChild(circles[connect[i]]);
            container.addChild(circles[connect[i]]);
            for (var ii = 0; ii < 20; ii++) {
                var circle = new createjs.Shape();
                if (player == 1) {
                    circle.graphics.beginFill("White").drawCircle(0, 0, ii + 16);
                } else {
                    circle.graphics.beginFill(tamacolor).drawCircle(0, 0, ii + 16);
                }
                circle.alpha = 0;
                circle.compositeOperation = "lighter";
                circle.x = circles[connect[i]].x;
                circle.y = circles[connect[i]].y;
                createjs.Tween.get(circle).wait(ii * 10).to({ alpha: 0.3 }, 200).to({ alpha: 0 }, 200);
                container.addChild(circle);
            }
        }
        var tx = img.x + 11;
        var ty = img.y + 11;
        createjs.Tween.get(circles[connect[0]]).wait(600 + 1 * 200).to({ x: tx, y: ty, scaleX: 0.2, scaleY: 0.2 }, 1000, createjs.Ease.cubicIn).to({ scaleX: 0, scaleY: 0 }, 100).call(damage, [5]);
        createjs.Tween.get(circles[connect[1]]).wait(600 + 2 * 200).to({ x: tx, y: ty, scaleX: 0.2, scaleY: 0.2 }, 1000, createjs.Ease.cubicIn).to({ scaleX: 0, scaleY: 0 }, 100);
        createjs.Tween.get(circles[connect[2]]).wait(600 + 3 * 200).to({ x: tx, y: ty, scaleX: 0.2, scaleY: 0.2 }, 1000, createjs.Ease.cubicIn).to({ scaleX: 0, scaleY: 0 }, 100);
        if (isme) {
            createjs.Tween.get(circles[connect[3]]).wait(600 + 4 * 200).to({ x: tx, y: ty, scaleX: 0.2, scaleY: 0.2 }, 1000, createjs.Ease.cubicIn).to({ scaleX: 0, scaleY: 0 }, 100).call(gocircle2);
        } else {
            createjs.Tween.get(circles[connect[3]]).wait(600 + 4 * 200).to({ x: tx, y: ty, scaleX: 0.2, scaleY: 0.2 }, 1000, createjs.Ease.cubicIn).to({ scaleX: 0, scaleY: 0 }, 100).call(playenemywin2);
        }
    }

    function gocircle2() {
        tamakeshi();
        meDead++;
        enDead++;
        player = player * -1; //下に入れる？
        window.setTimeout(function() { playenemy("0X0X0X0") }, 600);
    }


    function find() {
        var ballArr = [
            [],
            [],
            [],
            []
        ];
        var stturn = balls.length % 2; //0なら後攻
        var i = 0;
        for (; i < balls.length - 2; i += 2) {
            var w1 = balls.slice(i, i + 1);
            ballArr[w1 - 1].push([1, i]);
            var w2 = balls.slice(i + 1, i + 1 + 1);
            ballArr[w2 - 1].push([0, i + 1]);
        }
        var w = balls.slice(i, i + 1);
        ballArr[w - 1].push([1, i]);
        if (stturn == 0) {
            w = balls.slice(i + 1, i + 1 + 1);
            ballArr[w - 1].push([0, i + 1]);
        }

        //横
        var connect = [];
        for (var i = 0; i < 4; i++) {
            if (height[i] >= height[w - 1]) {
                if (ballArr[i][height[w - 1] - 1][0] == stturn) {
                    connect.push(ballArr[i][height[w - 1] - 1][1]);
                } else {
                    connect = [];
                    break;
                }
            } else {
                connect = [];
                break;
            }
        }
        if (connect.length >= 4) return connect;

        //縦
        if (height[w - 1] >= 4) {
            for (var i = 0; i < 4; i++) {
                if (ballArr[w - 1][height[w - 1] - i - 1][0] == stturn) {
                    connect.push(ballArr[w - 1][height[w - 1] - i - 1][1]);
                } else {
                    connect = [];
                    break;
                }
            }
        }
        if (connect.length >= 4) return connect;

        var ww = w - 1;

        //右上がり
        for (var i = 0; i < 4; i++) { //置いたところ含め左に４つ
            if (ww - i < 0) continue; //左に出てたら    0 - 3
            if (height[ww] - i < 1) continue; //下に出てたら  1 - 4
            if (height[ww - i] >= height[ww] - i) { //高さがあったら  1 - 4
                if (ballArr[ww - i][height[ww] - i - 1][0] == stturn) {
                    connect.push(ballArr[ww - i][height[ww] - i - 1][1]);
                }
            }
        }
        for (var i = 1; i < 4; i++) { //置いたところから右に３つ
            if (ww + i >= 4) continue; //右に出てたら    0 - 3
            if (height[ww + i] >= height[ww] + i) { //高さがあったら  1 - 4
                if (ballArr[ww + i][height[ww] + i - 1][0] == stturn) {
                    connect.push(ballArr[ww + i][height[ww] + i - 1][1]);
                }
            }
        }
        if (connect.length >= 4) {
            return connect;
        } else {
            connect = [];
        }

        //右下がり
        for (var i = 0; i < 4; i++) { //置いたところ含め左に４つ
            if (ww - i < 0) continue; //左に出てたら    0 - 3
            if (height[ww - i] >= height[ww] + i) { //高さがあったら  1 - 4
                if (ballArr[ww - i][height[ww] + i - 1][0] == stturn) {
                    connect.push(ballArr[ww - i][height[ww] + i - 1][1]);
                }
            }
        }
        for (var i = 1; i < 4; i++) { //置いたところから右に３つ
            if (ww + i >= 4) continue; //右に出てたら    0 - 3
            if (height[ww] - i < 1) continue; //下に出てたら  1 - 4
            if (height[ww + i] >= height[ww] - i) { //高さがあったら  1 - 4
                if (ballArr[ww + i][height[ww] - i - 1][0] == stturn) {
                    connect.push(ballArr[ww + i][height[ww] - i - 1][1]);
                }
            }
        }
        return connect;

    }

    function playenemywin() {
        var connect = find();
        gocircle(connect, shi, false);
    }

    function playenemywin2() {
        tamakeshi();
        meDead++;
        enDead++;
        player = player * -1;
        if (meDead > 60) isOkDead = true;
        touchOk = true;
    }




    function playenemy(res) {
        if (meHP <= 0 || enHP <= 0) return;
        var resArr = res.split("X");
        resArr.pop();
        var okArr = [];
        var loseflag = false;
        for (var i = 0; i < 4; i++) {
            if (resArr[i] == "Win") {
                tamaoki(i + 1, 2);
                damage(20);
                return;
            } else if (resArr[i] != "Invalid") {
                okArr.push(i);
            }
            if (resArr[i] == -100 && enemydata.level < 0.7) loseflag = true;
        }
        if (enDead > 100) {
            hissatsu();
            enDead = 0;
            return;
        }
        if (!loseflag && Math.random() < enemydata.level) {
            var putw = Math.floor(Math.random() * okArr.length);
            tamaoki(okArr[putw] + 1, 3);
            damage(20);
        } else {
            var putArr = [okArr[0]];
            for (var i = 1; i < okArr.length; i++) {
                if (resArr[okArr[i]] > resArr[putArr[0]]) {
                    putArr = [okArr[i]];
                } else if (resArr[okArr[i]] == resArr[putArr[0]]) {
                    putArr.push(okArr[i]);
                }
            }
            var putw = Math.floor(Math.random() * putArr.length);
            tamaoki(putArr[putw] + 1, 3);
            damage(20);
        }
    }

    function playenemy2() {
        if (height[0] >= 5 && height[1] >= 5 && height[2] >= 5 && height[3] >= 5) {
            tamakeshi();
        }
        meDead++;
        enDead++;
        player = player * -1;
        if (meDead > 60) isOkDead = true;
        touchOk = true;
    }

    function meHissatsu() {
        touchOk = false;
        hissatsu();
        isOkDead = false;
        meDead = 0;
        deadtaiki = 0;
    }

    var t = text("が先攻です", 26, 160, 170);
    t.alpha = 0;

    var msg = rect("#00008b", 107, 320, 107, 59, 10, "#ffffff");
    msg.alpha = 0;

    var t2 = text("OK", 26, 160, 352);
    t2.alpha = 0;

    var t3;

    function battlestart(name1, name2) {
        fade(fieldbgm);
        if (wea[nowwea] == 25) {
            player = 1;
            var name = name1;
        } else {
            if (Math.random() > 0.5) {
                player = 1;
                var name = name1;
            } else {
                player = -1;
                var name = name2;
            }
        }

        t3 = text(name, 26, 160, 128);
        t3.alpha = 0;

        bg2.alpha = 1;
        createjs.Tween.get(bg2).wait(200).to({ alpha: 0.7 }, 400);
        stage.addChild(bg2);
        createjs.Tween.get(t).wait(200).to({ alpha: 1 }, 400);
        stage.addChild(t);
        createjs.Tween.get(msg).wait(200).to({ alpha: 1 }, 400);
        stage.addChild(msg);
        createjs.Tween.get(t2).wait(200).to({ alpha: 1 }, 400);
        stage.addChild(t2);
        createjs.Tween.get(t3).wait(200).to({ alpha: 1 }, 400).call(touchstart1);
        stage.addChild(t3);
    }

    function touchstart1() {
        touchOk = true;
        checkmate.currentTime = 22;
        checkmate.play();
    }

    function touchstart(x, y) {
        if (x > 107 && x < 213 && y > 320 && y < 373) {
            touchOk = false;
            clickbgm.pause();
            clickbgm.currentTime = 0;
            clickbgm.play();

            bg2.alpha = 0.7;
            createjs.Tween.get(bg2).wait(200).to({ alpha: 0 }, 400).call(start2);
            t.alpha = 1;
            createjs.Tween.get(t).to({ alpha: 0 }, 100);
            msg.alpha = 1;
            createjs.Tween.get(msg).to({ alpha: 0 }, 100);
            t2.alpha = 1;
            createjs.Tween.get(t2).to({ alpha: 0 }, 100);
            t3.alpha = 1;
            createjs.Tween.get(t3).to({ alpha: 0 }, 100);
        }
    }

    function start2() {
        stage.removeChild(t);
        stage.removeChild(msg);
        stage.removeChild(t2);
        stage.removeChild(t3);

        if (player == 1) {
            touchOk = true;
            isNonStart = false;
        } else {
            touchOk = false;
            isNonStart = false;
            window.setTimeout(function() { playenemy("0X0X0X0") }, 600);
        }
    }

    createjs.Tween.get(bg2).to({ alpha: 0.5 }, 400);

    battlestart(bname1, bname2);

}















function battle(game) {
    clickbgm.pause();
    clickbgm.currentTime = 0;
    clickbgm.play();

    var enemydata = enemyList[Math.floor(Math.random() * 25)];

    var stage2 = new createjs.Stage("canvas2");
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.framerate = createjs.Ticker.RAF;

    var touchOk = false;

    var b = rect("#000", 0, 0, 320, 533);
    b.alpha = 0;
    b.visible = true;
    createjs.Tween.get(b).to({ alpha: 0.5 }, 200).call(comein);
    stage2.addChild(b);

    var t = text(enemydata.name, 25, 160, 60);
    t.scaleX = t.scaleY = 0;
    var t1 = text("が現れた", 25, 160, 110);
    t1.scaleX = t1.scaleY = 0;

    var charabox = rect("#dcdcdc", 0, 0, 213, 213, 10, "#ffffff");
    charabox.x = 54;
    charabox.y = 160;
    charabox.scaleX = charabox.scaleY = 0;

    var enemy = bmp(enemydata.id, 64, 171, 0);

    var nigeru = rect("#00008b", 0, 0, 107, 59, 10, "#ffffff");
    nigeru.x = 32;
    nigeru.y = 427;
    nigeru.scaleX = nigeru.scaleY = 0;

    var t2 = text("逃げる", 26, 85, 457);
    t2.scaleX = t2.scaleY = 0;

    var tatakau = rect("#00008b", 0, 0, 107, 59, 10, "#ffffff");
    tatakau.x = 181;
    tatakau.y = 427;
    tatakau.scaleX = tatakau.scaleY = 0;

    var t3 = text("戦う", 26, 235, 457);
    t3.scaleX = t3.scaleY = 0;

    var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

    function comein() {
        document.addEventListener(tap, can2touch, false);
        createjs.Tween.get(t).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.bounceOut);
        stage2.addChild(t);
        createjs.Tween.get(t1).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.bounceOut);
        stage2.addChild(t1);
        createjs.Tween.get(charabox).to({ scaleX: 1, scaleY: 1 }, 600, createjs.Ease.bounceOut);
        stage2.addChild(charabox);
        createjs.Tween.get(enemy).to({ scaleX: 192 / loadQueue.getResult(enemydata.id).width, scaleY: 192 / loadQueue.getResult(enemydata.id).height }, 600, createjs.Ease.bounceOut);
        stage2.addChild(enemy);
        createjs.Tween.get(nigeru).wait(300).to({ scaleX: 1, scaleY: 1 }, 200);
        stage2.addChild(nigeru);
        createjs.Tween.get(t2).wait(400).to({ scaleX: 1, scaleY: 1 }, 200);
        stage2.addChild(t2);
        createjs.Tween.get(tatakau).wait(600).to({ scaleX: 1, scaleY: 1 }, 200);
        stage2.addChild(tatakau);
        createjs.Tween.get(t3).wait(700).to({ scaleX: 1, scaleY: 1 }, 200).call(comeinend);
        stage2.addChild(t3);
    }

    function handleTick() {
        stage2.update();
    }

    function comeinend() {
        touchOk = true;
    }

    function can2touch(e) {
        if (!touchOk) return;
        touchOk = false;
        if (tap == 'touchstart') {
            var touches = e.changedTouches[0];
        } else {
            var touches = e;
        }
        var rect = canvas.getBoundingClientRect();
        var x = (touches.clientX - rect.left) / rect.width * canvas.width;
        var y = (touches.clientY - rect.top) / rect.height * canvas.height;

        if (x > 32 && x < 139 && y > 427 && y < 480) {
            clickbgm.pause();
            clickbgm.currentTime = 0;
            clickbgm.play();
            createjs.Tween.get(b).to({ alpha: 1 }, 200).call(escape);
            stage2.addChild(b);
        } else if (x > 181 && x < 288 && y > 427 && y < 480) {
            clickbgm.pause();
            clickbgm.currentTime = 0;
            clickbgm.play();
            createjs.Tween.get(b).to({ alpha: 1 }, 200).call(bs);
            stage2.addChild(b);
        } else {
            touchOk = true;
        }
    };

    var t4;

    function escape() {
        stage2.removeChild(t);
        stage2.removeChild(t1);
        stage2.removeChild(charabox);
        stage2.removeChild(enemy);
        stage2.removeChild(nigeru);
        stage2.removeChild(t2);
        stage2.removeChild(tatakau);
        stage2.removeChild(t3);

        if (Math.random() > game.eva) {
            t4 = text("真改は逃げ切った", 26, 160, 267);
            t4.alpha = 0;
            createjs.Tween.get(t4).to({ alpha: 1 }, 200).wait(2000).call(nigeta);
            stage2.addChild(t4);
        } else {
            t4 = text("真改は逃げられなかった", 26, 160, 267);
            t4.alpha = 0;
            createjs.Tween.get(t4).to({ alpha: 1 }, 200).wait(2000).call(nigerenai);
            stage2.addChild(t4);
        }
    }

    function nigeta() {
        createjs.Tween.get(t4).to({ alpha: 0 }, 300);
        createjs.Tween.get(b).to({ alpha: 0 }, 300).call(fieldon);
    }

    function fieldon() {
        document.removeEventListener(tap, can2touch);
        stage2.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", handleTick);
        createjs.Tween.removeAllTweens();
        stage2.clear();
        game.stopOn = false;
    }

    function nigerenai() {
        createjs.Tween.get(t4).to({ alpha: 0 }, 200);
        createjs.Tween.get(b).to({ alpha: 1 }, 300).call(bs);
    }

    function bs() {
        createjs.Ticker.removeEventListener("tick", handleTick);
        createjs.Tween.removeAllTweens();
        battle3(stage2, game, enemydata);
    }

}
