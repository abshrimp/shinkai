'use strict'

function EncodeHTMLForm( data ){
    var params = [];
    for( var name in data ){
        var value = data[ name ];
        var param = encodeURIComponent( name ) + '=' + encodeURIComponent( value );
        params.push( param );
    }
    return params.join( '&' ).replace( /%20/g, '+' );
}



function title(){

    var div = document.getElementById('div');
    div.classList.toggle('is-show');
    window.setTimeout(function() {
        div.parentNode.removeChild(div);
        var ctx = document.getElementById('canvas2').getContext('2d');
        ctx.fillStyle = "White";
        ctx.font = "24px 'Reggae One', cursive";
        ctx.fillText("タッチまたはクリック", 40, 250);
        var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
        document.addEventListener(tap, prepare, false);
    }, 1000);

}

function prepare(e){
    var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
    document.removeEventListener(tap, bgmstart);
    document.removeEventListener(tap, prepare);
    var ctx = document.getElementById('canvas2').getContext('2d');
    ctx.fillStyle = "Black";
    ctx.fillRect(0,0,320,533);
    window.setTimeout(function() {
        title3();
    }, 1000);
    GLstage = new createjs.StageGL( "canvas" );
    GLstage.setClearColor('#000');
}

function fade(music){
    var vol = 0.5;
    function fade2(){
        vol = vol - 0.01;
        music.volume = vol;
        if(vol <= 0){
            music.stop();
            music.volume = 0.5;
            return;
        }
        window.setTimeout(function() {
            fade2();
        }, 10);
    }
    fade2();
}

function title3(){
    var stage = new createjs.Stage("canvas2");
    createjs.Ticker.addEventListener("tick", stage);
    createjs.Ticker.framerate = createjs.Ticker.RAF;
    title2(stage);
}


function title2(stage2){

    var stage = stage2;

    var bg = bmp("titlebg", 0, 0, 320);
    bg.alpha = 0;
    createjs.Tween.get(bg).to({alpha: 1}, 600);
    stage.addChild(bg);
    var logo = bmp("logo", 27, 32, 266);
    logo.alpha = 0;
    createjs.Tween.get(logo).wait(1000).to({alpha: 1}, 600);
    stage.addChild(logo);

    for(var i=0; i<4; i++){
        var itembox = rect("#00008b", 0, 0, 160, 54, 10, "#ffffff");
        itembox.x = 80;
        itembox.y = 203 + i * 75;
        itembox.scaleX = itembox.scaleY = 0;
        createjs.Tween.get(itembox).wait(i*100 + 1300).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
        stage.addChild(itembox);
    }

    checkmate.position = 22000;
    checkmate.play({loop: -1});

    text2(0, "初めから");
    text2(1, "続きから");
    text2(2, "ランキング");

    function text2(ii,msg) {
        var t = text(msg, 20, 160, 229 + ii * 75);
        t.scaleX = t.scaleY = 0;
        createjs.Tween.get(t).wait(ii*100 + 1400).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
        stage.addChild(t);
    }

    var t = text("操作説明", 20, 160, 229 + 3 * 75);
    t.scaleX = t.scaleY = 0;
    createjs.Tween.get(t).wait(3*100 + 1400).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(titletouch);
    stage.addChild(t);

    var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

    function titletouch(){
        document.addEventListener(tap, can2touch, false);
    }

    function can2touch(e) {
        if(tap == 'touchstart'){
          var touches = e.changedTouches[0];
        }else{
          var touches = e;
        }
        var rect = canvas.getBoundingClientRect();
        var x = ( touches.clientX - rect.left ) / rect.width * canvas.width;
        var y = ( touches.clientY - rect.top ) / rect.height * canvas.height;

        if(x>80 && x<240){
            if(y>202 && y<256){
                document.removeEventListener(tap, can2touch, false);
                clickbgm.stop();
                clickbgm.play();
                for(var i=1; i<stage.children.length; i++){
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 300);
                }
                createjs.Tween.get(stage.children[0]).to({alpha: 0}, 300).call(textbox);
                fade(checkmate);

            } else if (y>277 && y<330){
                document.removeEventListener(tap, can2touch, false);
                clickbgm.stop();
                clickbgm.play();
                for(var i=1; i<stage.children.length; i++){
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 300);
                }
                createjs.Tween.get(stage.children[0]).to({alpha: 0}, 300).call(textbox2);
                fade(checkmate);

            } else if (y>352 && y<405){
                document.removeEventListener(tap, can2touch, false);
                clickbgm.stop();
                clickbgm.play();
                for(var i=1; i<stage.children.length; i++){
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 300);
                }
                createjs.Tween.get(stage.children[0]).to({alpha: 0}, 300).call(ranking);
                fade(checkmate);

            } else if (y>427 && y<480){
                clickbgm.stop();
                clickbgm.play();
                location.href = './explanation.html';
            }

        }
    }

    function textbox(){
        document.body.insertAdjacentHTML('afterbegin','<div id="div2"><h2>&lt;新規登録&gt;</h2><br><h3>ユーザーネーム</h3><input type="text" id="name" maxlength="20"><br><h5>※ランキングに掲載されます</h5><h3>パスワード</h3><input type="text" id="word" maxlength="20"><br><h5>※次回からユーザーネームと<br>パスワードが必要になります</h5></div>');
        for(var i=0; i<2; i++){
            var itembox = rect("#00008b", 0, 0, 107, 54, 10, "#ffffff");
            itembox.x = 32 + i * 149;
            itembox.y = 448;
            itembox.scaleX = itembox.scaleY = 0;
            createjs.Tween.get(itembox).wait(i*100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(itembox);
        }
        var cover = rect("#000", 0, 0, 107, 54, 10);
        cover.x = 32 + 1 * 149;
        cover.y = 448;
        cover.alpha = 0.6;

        var t = text("戻る", 21, 85, 475);
        t.scaleX = t.scaleY = 0;
        createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
        stage.addChild(t);

        var t = text("次へ", 21, 235, 475);
        t.scaleX = t.scaleY = 0;
        createjs.Tween.get(t).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(comein);
        stage.addChild(t);

        var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

        function comein(){
            document.addEventListener(tap, cantouch, false);
        }

        var touchok = true;

        function cantouch(e) {
            if(!touchok) return;
            touchok = false;
            if(tap == 'touchstart'){
              var touches = e.changedTouches[0];
            }else{
              var touches = e;
            }
            var rect = canvas.getBoundingClientRect();
            var x = ( touches.clientX - rect.left ) / rect.width * canvas.width;
            var y = ( touches.clientY - rect.top ) / rect.height * canvas.height;

            if(x>32 && x<139 && y>448 && y<501){
                document.removeEventListener(tap, cantouch, false);
                clickbgm.stop();
                clickbgm.play();
                for(var i=0; i<stage.children.length - 1; i++){
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200);
                }
                createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200).call(title2, [stage]);
                var div2 = document.getElementById('div2');
                div2.parentNode.removeChild(div2);

            } else if (x>181 && x<288 && y>448 && y<501){
                clickbgm.stop();
                clickbgm.play();
                stage.addChild(cover);
                var newname = document.getElementById("name").value;
                if(newname.length == 0){
                    alert("ユーザーネームを入力してください");
                    stage.removeChild(cover);
                    touchok = true;
                    return;
                }
                if(newname.length > 20){
                    alert("ユーザーネームは20文字以下にしてください");
                    stage.removeChild(cover);
                    touchok = true;
                    return;
                }
                var password = document.getElementById("word").value;
                if(password.length == 0){
                    alert("パスワードを入力してください");
                    stage.removeChild(cover);
                    touchok = true;
                    return;
                }
                if(password.length > 20){
                    alert("パスワードは20文字以下にしてください");
                    stage.removeChild(cover);
                    touchok = true;
                    return;
                }

                var data = {name: newname, word: password};

                var request = new XMLHttpRequest();
                request.open("POST", "https://ikegamishinkai.shop/new.php", true);
                request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
                request.send(EncodeHTMLForm( data ));
                request.onreadystatechange = function(){
                    var READYSTATE_COMPLETED = 4;
                    var HTTP_STATUS_OK = 200;

                    if( this.readyState == READYSTATE_COMPLETED && this.status == HTTP_STATUS_OK ){
                        if(this.responseText == "err1"){
                            alert("ネットワークエラーが発生しました　もう一度試してください");
                            stage.removeChild(cover);
                            touchok = true;

                        } else if(this.responseText == "err2"){
                            alert("このユーザーネームは既に登録されています");
                            stage.removeChild(cover);
                            touchok = true;

                        } else if(this.responseText == "ok3"){
                            document.removeEventListener(tap, cantouch, false);
                            for(var i=0; i<stage.children.length; i++){
                                createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200);
                            }
                            var div2 = document.getElementById('div2');
                            div2.parentNode.removeChild(div2);

                            playerName = newname;
                            mypassword = password;
                            exp = 300;
                            pow = 100;
                            def = 100;
                            hp = exp - pow - def;
                            itemHp = 100;
                            itemPow = 100;
                            itemDef = 100;
                            nowwea = "";
                            wea = [];
                            item = [];
                            quenum = 1;
                            param = [0, 0, 0, 10000000, 0, 100000000];

                            var t = text("登録されました", 21, 160, 160);
                            t.scaleX = t.scaleY = 0;
                            createjs.Tween.get(t).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                            stage.addChild(t);
                            var t2 = text("クリックまたはタップでスタート", 19, 160, 266);
                            t2.scaleX = t2.scaleY = 0;
                            createjs.Tween.get(t2).wait(400).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(endnewacc);
                            stage.addChild(t2);

                        } else {
                            alert("ネットワークエラーが発生しました　もう一度試してください");
                            stage.removeChild(cover);
                            touchok = true;

                        }
                    }
                }
            } else {
                touchok = true;
            }
        }

        function endnewacc(){
            document.addEventListener(tap, endnewacc2, false);
        }
        function endnewacc2(){
            document.removeEventListener(tap, endnewacc2, false);

            for(var i=0; i<stage.children.length - 1; i++){
                createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200);
            }
            createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200).call(opening, [stage]);

        }
    }





    function textbox2(){
        document.body.insertAdjacentHTML('afterbegin','<div id="div2"><h2>&lt;ログイン&gt;</h2><br><h3>ユーザーネーム</h3><input type="text" id="name" maxlength="20"><br><br><h3>パスワード</h3><input type="text" id="word" maxlength="20"></div>');
        for(var i=0; i<2; i++){
            var itembox = rect("#00008b", 0, 0, 107, 54, 10, "#ffffff");
            itembox.x = 32 + i * 149;
            itembox.y = 448;
            itembox.scaleX = itembox.scaleY = 0;
            createjs.Tween.get(itembox).wait(i*100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(itembox);
        }
        var cover = rect("#000", 0, 0, 107, 54, 10);
        cover.x = 32 + 1 * 149;
        cover.y = 448;
        cover.alpha = 0.6;

        var t = text("戻る", 21, 85, 475);
        t.scaleX = t.scaleY = 0;
        createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
        stage.addChild(t);

        var t = text("次へ", 21, 235, 475);
        t.scaleX = t.scaleY = 0;
        createjs.Tween.get(t).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(comein);
        stage.addChild(t);

        if (window.matchMedia('(display-mode: standalone)').matches) {
            if (localStorage.getItem('name') != null) document.getElementById("name").value = localStorage.getItem('name');
            if (localStorage.getItem('word') != null) document.getElementById("word").value = localStorage.getItem('word');
        }

        var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

        function comein(){
            document.addEventListener(tap, cantouch, false);
        }

        var touchok = true;

        function cantouch(e) {
            if(!touchok) return;
            touchok = false;
            if(tap == 'touchstart'){
              var touches = e.changedTouches[0];
            }else{
              var touches = e;
            }
            var rect = canvas.getBoundingClientRect();
            var x = ( touches.clientX - rect.left ) / rect.width * canvas.width;
            var y = ( touches.clientY - rect.top ) / rect.height * canvas.height;

            if(x>32 && x<139 && y>448 && y<501){
                document.removeEventListener(tap, cantouch, false);
                clickbgm.stop();
                clickbgm.play();
                for(var i=0; i<stage.children.length - 1; i++){
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200);
                }
                createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200).call(title2, [stage]);
                var div2 = document.getElementById('div2');
                div2.parentNode.removeChild(div2);

            } else if (x>181 && x<288 && y>448 && y<501){
                clickbgm.stop();
                clickbgm.play();
                stage.addChild(cover);
                var newname = document.getElementById("name").value;
                if(newname.length == 0){
                    alert("ユーザーネームを入力してください");
                    stage.removeChild(cover);
                    touchok = true;
                    return;
                }
                if(newname.length > 20){
                    alert("ユーザーネームは20文字以下です");
                    stage.removeChild(cover);
                    touchok = true;
                    return;
                }
                var password = document.getElementById("word").value;
                if(password.length == 0){
                    alert("パスワードを入力してください");
                    stage.removeChild(cover);
                    touchok = true;
                    return;
                }
                if(password.length > 20){
                    alert("パスワードは20文字以下です");
                    stage.removeChild(cover);
                    touchok = true;
                    return;
                }


                var data = {name: newname, word: password};
                if (window.matchMedia('(display-mode: standalone)').matches) {
                    localStorage.setItem('name', newname);
                    localStorage.setItem('word', password);
                }

                var request = new XMLHttpRequest();
                request.open("POST", "https://ikegamishinkai.shop/get.php", true);
                request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
                request.send(EncodeHTMLForm( data ));
                request.onreadystatechange = function(){
                    var READYSTATE_COMPLETED = 4;
                    var HTTP_STATUS_OK = 200;
                
                    if( this.readyState == READYSTATE_COMPLETED && this.status == HTTP_STATUS_OK ){
                        if(this.responseText == "err1"){
                            alert("ネットワークエラーが発生しました　もう一度試してください");
                            stage.removeChild(cover);
                            touchok = true;

                        } else if(this.responseText == "err2"){
                            alert("ユーザーネームが見つかりません!");
                            stage.removeChild(cover);
                            touchok = true;

                        } else if(this.responseText == "err3"){
                            alert("パスワードが違います!");
                            stage.removeChild(cover);
                            touchok = true;

                        } else {
                            document.removeEventListener(tap, cantouch, false);

                            playerName = newname;
                            mypassword = password;
                            var res = this.responseText;
                            var resArr = res.split("@@");
                            exp = Number(resArr[0]);
                            pow = Number(resArr[1]);
                            def = Number(resArr[2]);
                            hp = exp - pow - def;
                            if(resArr[3] === ""){
                                nowwea = "";
                            }else{
                                nowwea = Number(resArr[3]);
                            }
                            var weast = resArr[4];
                            var itemst = resArr[5];
                            var paramst = resArr[8];
                            var weaarr = weast.split("Y");
                            var itemarr = itemst.split("Y");
                            var paramarr = paramst.split("Y");
                            if(weaarr[0] === ""){
                                wea = [];
                            }else{
                                wea = weaarr;
                            }
                            if(itemarr[0] === ""){
                                item = [];
                            }else{
                                item = itemarr;
                            }
                            param = paramarr;
                            param[3] = Number(param[3]);
                            param[5] = Number(param[5]);
                            quenum = resArr[6];
                            if(nowwea === ""){
                                itemHp = hp;
                                itemPow = pow;
                                itemDef = def;
                            }else{
                                weaList[wea[nowwea]].put(hp, pow, def);
                            }

                            for(var i=0; i<stage.children.length; i++){
                                createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200);
                            }
                            var div2 = document.getElementById('div2');
                            div2.parentNode.removeChild(div2);
                            createjs.Ticker.removeEventListener("tick", stage);
                            stage.removeAllChildren();
                            createjs.Tween.removeAllTweens();
                            stage.clear();
                            gamestart(resArr[7]);
                        }
                    }
                }
            } else {
                touchok = true;
            }
        }
    }





    function ranking(){
        for(var i=0; i<5; i++){
            var itembox = rect("#00008b", 0, 0, 300, 88, 10, "#ffffff");
            itembox.x = 10;
            itembox.y = 10 + i * 95;
            itembox.scaleX = itembox.scaleY = 0;
            createjs.Tween.get(itembox).wait(i*100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(itembox);
        }

        var itembox = rect("#00008b", 0, 0, 80, 30, 5, "#ffffff");
        itembox.x = 120;
        itembox.y = 490;
        itembox.scaleX = itembox.scaleY = 0;
        createjs.Tween.get(itembox).wait(600).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
        stage.addChild(itembox);

        var t = text("戻る", 15, 160, 505);
        t.scaleX = t.scaleY = 0;
        createjs.Tween.get(t).wait(700).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
        stage.addChild(t);

        var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

        function cantouch(e) {
            if(tap == 'touchstart'){
              var touches = e.changedTouches[0];
            }else{
              var touches = e;
            }
            var rect = canvas.getBoundingClientRect();
            var x = ( touches.clientX - rect.left ) / rect.width * canvas.width;
            var y = ( touches.clientY - rect.top ) / rect.height * canvas.height;

            if(x>120 && x<200 && y>490 && y<520){
                document.removeEventListener(tap, cantouch, false);
                clickbgm.stop();
                clickbgm.play();
                for(var i=0; i<stage.children.length - 1; i++){
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200);
                }
                createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200).call(title2, [stage]);
            }
        }

        for(var i=0; i<5; i++){
            var num = i + 1;
            var text2 = num + "位";
            var t = text(text2, 21, 32, 55 + i * 95);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(i * 100 + 100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);
        }

        var request = new XMLHttpRequest();
        request.open("GET", "https://ikegamishinkai.shop/rank.php", true);
        request.send();
        request.onload = function(){
            if (request.status == 200){
                var rankArr = this.responseText.split("##@@$&%#");
                rankArr.pop();
                for(var i=0; i<rankArr.length; i++){
                    var res = rankArr[i].split("@*@#$%@#");
                    if(res[0].length >= 16){
                        var t = text(res[0], 14, 180, 35 + i * 95);
                    }else{
                        var t = text(res[0], 19, 180, 35 + i * 95);
                    }
                    t.scaleX = t.scaleY = 0;
                    createjs.Tween.get(t).wait(i * 100 + 200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                    stage.addChild(t);

                    var t = text("経験値　" + res[1], 19, 180, 75 + i * 95);
                    t.scaleX = t.scaleY = 0;
                    createjs.Tween.get(t).wait(i * 100 + 200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                    stage.addChild(t);

                    document.addEventListener(tap, cantouch, false);
                }
            } else {
                alert("ネットワークエラーが発生しました　もう一度試してください");
                document.addEventListener(tap, cantouch, false);
            }
        }
    }
}

function opening(stage){
    stage.removeAllChildren();
    createjs.Tween.removeAllTweens();
    var img1 = bmp("opimg1", 10, 40, 300);
    var img2 = bmp("opimg2", 10, 40, 300);
    var img3 = bmp("opimg3", 10, 40, 300);
    //var img4 = bmp("logo", 0, 0, 100);
    
    talk("", "これは黶子＜ほくろ＞族と猫族の争いの中で強く生きた、黶子族、威ヶ神真改＜いけがみしんかい＞の英雄譚である、、、", 1, stage, next0);
    function next0() { talk("真改", "終焉ノ黶子＜デマイズモウル＞！！", 2, stage, next1);}
    function next1(){
        img1.alpha = 0;
        createjs.Tween.get(img1).to({alpha: 1}, 200);
        stage.addChild(img1);
        talk("", "真改が放った濃い闇の塊は、猫族の長、征山竹之内＜まさやまたけのうち＞を捕らえるのに十分な威力だった。", 2, stage, next2);
    }
    function next2() { talk("真改", "殺った、、", 2, stage, next3);}
    function next3() { talk("", "暫くして終焉ノ黶子＜デマイズモウル＞によって舞った土の煙幕が晴れると、真改はハッとした。", 2, stage, next4);}
    function next4(){
        createjs.Tween.get(img1).to({alpha: 0}, 200);
        talk("真改", "何故だ、確かに捕らえた筈だ", 2, stage, next5);
    }
    function next5() { talk("", "そこに、征山の姿はなかった。", 2, stage, next6);}
    function next6(){
        img2.alpha = 0;
        createjs.Tween.get(img2).to({alpha: 1}, 200);
        stage.addChild(img2);
        talk("", "次の瞬間、真改は背後に巨大な殺気を感じた。", 2, stage, next7);
    }
    function next7() { talk("征山", "checkmateだ、鼓膜破壊＜エアドラムブレイク＞！", 2, stage, next8);}
    function next8() { talk("", "真改が自分の死を悟ったその時、征山が放った緑光色の光が、何かに相殺されたように消えた。", 2, stage, next9);}
    function next9(){
        createjs.Tween.get(img2).to({alpha: 0}, 200);
        talk("征山", "何だ？", 2, stage, next10);
    }
    function next10() { talk("", "征山が辺りを見渡すと、そこには、真改の師匠である陰波桜龍＜かげなみおうりゅう＞の姿があった。", 2, stage, next11);}
    function next11(){
        img3.alpha = 0;
        createjs.Tween.get(img3).to({alpha: 1}, 200);
        stage.addChild(img3);
        talk("征山", "流石は黶子＜ほくろ＞族の長だ、俺の鼓膜破壊＜エアドラムブレイク＞を相殺するとは、この青二才とは格が違うようだな", 2, stage, next12);
    }
    function next12() { talk("", "征山と桜龍は同時に技を繰り出した。", 2, stage, next13);}
    function next13() { talk("", "桜龍の放った漆黒はいともたやすく、征山の放った緑色の光を飲み込んだ。", 2, stage, next14);}
    function next14() { talk("", "桜龍の漆黒は、征山をも飲み込んだ。", 2, stage, next15);}
    function next15(){
        createjs.Tween.get(img3).to({alpha: 0}, 200);
        talk("", "かに思われたが、先刻のようにそこに征山の姿がない。", 2, stage, next16);
    }
    function next16() { talk("", "真改に悪寒が走った。", 2, stage, next17);}
    function next17() { talk("真改", "背後＜うしろ＞です！師匠！", 2, stage, next18);}
    function next18() { talk("征山", "師弟揃って間抜けだな、あれは囮だ", 2, stage, next19);}
    function next19() { talk("", "次の瞬間、桜龍を緑色の光が包んだ。", 2, stage, next20);}
    function next20() { talk("", "桜龍は外界からの情報の一切を遮断されたような不思議な感覚に襲われ、その場に倒れた。", 2, stage, next21);}
    function next21(){
        //img4.alpha = 0;
        //createjs.Tween.get(img4).to({alpha: 1}, 200);
        //stage.addChild(img4);
        talk("真改", "師匠、師匠！", 2, stage, next22);
    }
    function next22() { talk("", "真改が駆け寄った。", 2, stage, next23);}
    function next23() { talk("征山", "無駄だ。俺は今、こいつの五感を奪った。こいつは植物状態だ", 2, stage, next24);}
    function next24() { talk("真改", "何故、、こんなことを、、、", 2, stage, next25);}
    function next25() { talk("征山", "はっはっはっ", 2, stage, next26);}
    function next26() { talk("", "征山は笑いながら去っていく。", 2, stage, next27);}
    function next27(){
        //createjs.Tween.get(img4).to({alpha: 0}, 200);
        talk("", "15年間、3歳の時から、本当の子のように育ててくれた桜龍は真改の全てだった。", 2, stage, next28);
    }
    function next28() { talk("", "真改は、植物状態と化した桜龍を抱え天を仰ぎ、歯を食いしばった。", 2, stage, next29);}
    function next29() { talk("", "真改は臥薪嘗胆を誓った。", 3, stage, next30);}
    var opcon = new createjs.Container();
    var opcon2 = true;
    function next30(){     
        opcon.alpha = 0;
        createjs.Tween.get(opcon).wait(1000).call(next303).to({alpha: 1}, 600).wait(10000).to({alpha: 0}, 600).call(next304); 
        stage.addChild(opcon);     
        var logo2 = bmp("logo", 27, 200, 266);
        logo2.alpha = 0;
        createjs.Tween.get(logo2).wait(1000).call(next301).to({alpha: 1}, 600).wait(10000).call(next302).to({alpha: 0}, 600).wait(1000).call(next31);
        stage.addChild(logo2);

    }
    function next301(){
        checkmate.position = 74800;
        checkmate.play({loop: -1});
    }
    function next302(){
        fade(checkmate);
    }
    var opbg1 = bmp("opimg1", -100, 80, 500);
    var opbg2 = bmp("opimg2", -100, 80, 500);
    var opbg3 = bmp("opimg3", -100, 80, 500);
    var opbg = [opbg1, opbg2, opbg3];
    var opcount = 0;
    function next303(){
        opcount++;
        var opbgimg = opbg[opcount % 3];
        opcon.addChild(opbgimg);
        setTimeout(function(){
            opcon.removeChild(opbgimg);
            if(opcon2) next303();
        },100);
    }
    function next304(){
        opcon2 = false;
        stage.removeChild(opcon);
    }
    function next31() { talk("", "征山との戦いから四年の時が流れた。", 1, stage, next32);}
    function next32() { talk("", "猫族だけが固有で使える技、鼓膜破壊＜エアドラムブレイク＞を全身に受けた桜龍の体は、あれから一度も動いていない。", 2, stage, next33);}
    function next33() { talk("", "かろうじて息をしているだけだ。", 2, stage, next331);}
    function next331() { talk("", "しかし、鼓膜破壊＜エアドラムブレイク＞を受けた状態から回復する方法は、この世に存在しないと言われている。", 2, stage, next332);}
    function next332() { talk("", "真改にできることは何も無かった。", 2, stage, next34);}
    function next34() { talk("黶子族の少年", "真改様、大変です、猫族の奴らが攻撃してきましたっ！", 2, stage, next35);}
    function next35() { talk("真改", "またか", 2, stage, next36);}
    function next36() { talk("", "あの征山との戦いがあってから、たびたび猫族が攻撃してくるようになったのだ。", 2, stage, next37);}
    function next37() { talk("", "心配はいらない、すぐに倒してしまおう。", 3, stage, next38);}
    function next38() {  battle2("", enemyList[30], next39);}
    function next39() { talk("", "真改はふと、相手が腰に小さな瓶を提げているのに気づいた。", 1, stage, next40);}
    function next40() { talk("真改", "それは何だ", 2, stage, next41);}
    function next41() { talk("猫族の手下", "それは言えません", 2, stage, next42);}
    function next42() { talk("真改", "命だけは助けてやる、それは何だ", 2, stage, next43);}
    function next43() { talk("猫族の手下", "、、、", 2, stage, next44);}
    function next44() { talk("猫族の手下", "アッポンド、、、", 2, stage, next45);}
    function next45() { talk("真改", "アッポンド？", 2, stage, next46);}
    function next46() { talk("猫族の手下", "鼓膜破壊＜エアドラムブレイク＞で麻痺した体に有効な薬草です", 2, stage, next47);}
    function next47() { talk("真改", "！？", 2, stage, next48);}
    function next48() { talk("真改", "今何と言った？", 2, stage, next49);}
    function next49() { talk("猫族の手下", "鼓膜破壊＜エアドラムブレイク＞で麻痺した体に有効な薬草です", 2, stage, next50);}
    function next50() { talk("真改", "今それを使えば、桜龍は回復するのか？", 2, stage, next51);}
    function next51() { talk("猫族の手下", "そんな少量では効きません", 2, stage, next52);}
    function next52() { talk("真改", "どこでアッポンドを手に入れるのだ", 2, stage, next53);}
    function next53() { talk("猫族の手下", "アーラキ沼の奥地に自生しております", 2, stage, next54);}
    function next54() { talk("真改", "アーラキ沼と言えば、猫族の支配地域", 2, stage, next55);}
    function next55() { talk("真改", "今すぐに出発の準備をしよう", 2, stage, next56);}
    function next56() { talk("", "とは言え、桜龍の代わりにリーダーをしている真改がいなくなれば、黶子族は危なくなる", 2, stage, next57);}
    function next57() { talk("", "まずは代わりに黶子族の面倒を見てくれる人を探そう", 2, stage, next58);}
    function next58() { talk("", "ちなみに真改には、小後富也＜こあととみや＞という弟弟子がいるぞ！", 3, stage, next59);}
    function next59() {
        createjs.Ticker.removeEventListener("tick", stage);
        stage.clear();
        fieldstart(map1, [-2, -5]);
    }

    
}



