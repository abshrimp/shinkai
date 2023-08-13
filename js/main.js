'use strict'

        var canvas = document.createElement( 'canvas' );
        canvas.id = 'canvas';
        canvas.className = 'canvas';
        canvas.width = 320;
        canvas.height = 533;
        canvas.style.zIndex = 1;
        canvas.style.pointerEvents = "auto";
		document.body.appendChild( canvas );

        var canvas2 = document.createElement( 'canvas' );
        canvas2.id = 'canvas2';
        canvas2.className = 'canvas2';
        canvas2.width = 320;
        canvas2.height = 533;
        canvas2.style.zIndex = 2;
        canvas2.style.pointerEvents = "none";
		document.body.appendChild( canvas2 );
        
		const _resizeEvent = () => {
			const _ratio = Math.min( innerWidth / canvas.width, innerHeight / canvas.height );
			canvas.style.width = canvas.width*_ratio + 'px';
			canvas.style.height = canvas.height*_ratio + 'px';
			canvas2.style.width = canvas.width*_ratio + 'px';
			canvas2.style.height = canvas.height*_ratio + 'px';
		}
		addEventListener( 'resize', _resizeEvent, { passive: true } );
		_resizeEvent();


        function setEventListener(game) {
            //なにかキーが押されたとき
            addEventListener( 'keydown', {game: game, handleEvent:_keyEvent}, { passive: false } );
            //キーがはなされたとき
            addEventListener( 'keyup', {game: game, handleEvent:_keyEvent}, { passive: false } );
            //タッチされたとき
            game.canvas.addEventListener( 'touchstart', {game: game, handleEvent:_touchEvent}, { passive: false } );
            //指が動かされたとき
            game.canvas.addEventListener( 'touchmove', {game: game, handleEvent:_touchEvent}, { passive: false } );
            //指がはなされたとき
            game.canvas.addEventListener( 'touchend', {game: game, handleEvent:_touchEvent}, { passive: false } );
        }
        function _keyEvent (e) {
            //e.preventDefault();
            for ( let key in this.game._keys ) {
                switch ( e.type ) {
                    case 'keydown' :
                        if ( e.key === this.game._keys[key] ) this.game.input[key] = true;
                        break;
                    case 'keyup' :
                        if ( e.key === this.game._keys[key] ) this.game.input[key] = false;
                        break;
                }
            }
        }
        function _touchEvent (e) {
            const _touches = e.changedTouches[0];
            const _rect = _touches.target.getBoundingClientRect();
            const _fingerPosition = {
                x: ( _touches.clientX - _rect.left ) / _rect.width * this.game.canvas.width,
                y: ( _touches.clientY - _rect.top ) / _rect.height * this.game.canvas.height
            };
            const _eventType = e.type;
            this.game.currentScene.assignTouchevent( _eventType, _fingerPosition );
        }





           

        var playerName;
        var mypassword;
        var exp;
        var pow;
        var def;
        var hp;
        var itemHp;
        var itemPow;
        var itemDef;
        var nowwea;
        var wea;
        var item;
        var quenum;
        var param;


        var mapList = [map1, map2, map3, map4, map5, map6, map7, map8, map9, map10];
        var bgnumber = 7;
        var graphics;
        var GLstage;


        function gamestart(pos){
            if(param[1] == 1){
                var fieldmap = map11;
            }else if(quenum == 11){
                var fieldmap = map2;
                var posArr = pos.split("Y");
                fieldstart(fieldmap, posArr, [1176, 1159]);
                return;
            }else{
                var fieldmap = mapList[quenum - 1];
            }
            var posArr = pos.split("Y");
            fieldstart(fieldmap, posArr);
        }

        function fieldstart(fieldmap, posArr, ouryu){
            fieldbgm.stop();
            var saveX = posArr[0];
            var saveY = posArr[1];
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;
            var bg2 = new createjs.Shape();
            bg2.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 1));
            bg2.graphics.drawRect(0, 0, 320, 533);
            bg2.alpha = 0;
            if(ouryu === void 0){
                createjs.Tween.get(bg2).to({alpha: 1}, 400).call(field,[fieldmap, saveX, saveY]).wait(500).to({alpha: 0}, 400).call(startremove);
            }else{
                if(ouryu[0] == 1181){
                    createjs.Tween.get(bg2).to({alpha: 1}, 400).call(field,[fieldmap, saveX, saveY, ouryu[0], ouryu[1]]).wait(500).to({alpha: 0}, 400).call(startremove2);
                }else{
                    createjs.Tween.get(bg2).to({alpha: 1}, 400).call(field,[fieldmap, saveX, saveY, ouryu[0], ouryu[1]]).wait(500).to({alpha: 0}, 400).call(startremove);
                }
            }
            stage.addChild(bg2);

            function startremove(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.removeAllChildren();
                createjs.Tween.removeAllTweens();
                stage.clear();
                fieldbgm.play({loop: -1});
                questmsg();
            }

            function startremove2(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.removeAllChildren();
                createjs.Tween.removeAllTweens();
                stage.clear();
                createjs.Ticker.removeEventListener("tick", queststage);
                queststage.removeAllChildren();
                createjs.Tween.removeAllTweens();
                queststage.clear();
            }
        }

        var queststage = new createjs.Stage("canvas2");

        function questmsg(){
            createjs.Ticker.removeEventListener("tick", queststage);
            queststage.removeAllChildren();
            createjs.Tween.removeAllTweens();
            queststage.clear();
            createjs.Ticker.addEventListener("tick", queststage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            var quest = rect("#000", -10, 5, 310, 30, 0, "#fff", 1);
            quest.scaleX = 0;
            quest.alpha = 0.8;
            createjs.Tween.get(quest).to({scaleX: 1}, 400);
            queststage.addChild(quest);

            if(param[1] == 1){
                var msg = "Quest" + quenum + "　アーラキ沼へ向かえ";
            }else if(quenum == 11){
                var msg = "Quest" + quenum + "　征山に話しかけろ";
            }else{
                var msg = "Quest" + quenum + "　" + mapList[quenum - 1].msg;
            }
            var font = "15px 'Reggae One', cursive";
            var t = new createjs.Text(msg, font, "White");
            t.textAlign = "start";
            t.textBaseline = "middle";
            t.x = 5;
            t.y = 20;
            t.alpha = 0;
            createjs.Tween.get(t).wait(400).to({alpha: 1}, 400);
            queststage.addChild(t);
        }




        function talk(name, msg, type, stage2, next, next2, select1, select2){
            var stage = stage2;
            var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

            var texts = new createjs.Container();

            if(type == 1){
                var msgbox = rect("#000", 0, 0, 300, 181, 10, "#ffffff");
                msgbox.x = 11;
                    msgbox.y = 342;
                msgbox.scaleX = msgbox.scaleY = 0;
                msgbox.alpha = 0.85;
                createjs.Tween.get(msgbox).to({scaleX: 1, scaleY: 1}, 200);
                stage.addChild(msgbox);

                var namebox = rect("#000", 0, 0, 128, 32, 5, "#ffffff");
                namebox.x = 21;
                namebox.y = 325;
                namebox.scaleX = namebox.scaleY = 0;
                createjs.Tween.get(namebox).to({scaleX: 1, scaleY: 1}, 200).call(hyouji);
                stage.addChild(namebox);

                stage.addChild(texts);
            }else{
                stage.addChild(texts);
                hyouji();
            }

            function hyouji(){
                var t = text(name, 16, 85, 341, true);
                texts.addChild(t);

                for (var i = 0; i < msg.length; i++) {
                    var t = text(msg.charAt(i), 16, 39 + ( i % 16 ) * 16, 389 + Math.floor(i / 16) * 24, true);
                    t.visible = false; 
                    texts.addChild(t);
                }
                var t = text("▼", 10, 39 + ( 79 % 16 ) * 16, 389 + Math.floor(79 / 16) * 24, true);
                t.visible = false; 
                texts.addChild(t);

                var msgcou = 0;

                talkingbgm.play({loop: -1});
                hyouji2();

                function hyouji2(){
                    if(msgcou > msg.length){
                        talkingbgm.stop();
                        if(select1 !== void 0){
                            select();
                        }else{
                            document.addEventListener(tap, cantouch, false);
                        }
                        return;
                    }
                    setTimeout( () => {
                        texts.children[msgcou + 1].visible = true;
                        msgcou++;
                        hyouji2();
                    }, 25 );
                }
            }

            var box1;
            var box2;
            var t7;
            var t8;

            function select(){
                box1 = rect("#00008b", 0, 0, 213, 54, 10, "#ffffff");
                box1.x = 53;
                box1.y = 65;
                box1.scaleX = box1.scaleY = 0;
                createjs.Tween.get(box1).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage.addChild(box1);
    
                t7 = text(select1, 21, 160, 92);
                t7.scaleX = t7.scaleY = 0;
                createjs.Tween.get(t7).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage.addChild(t7);
    
                box2 = rect("#00008b", 0, 0, 213, 54, 10, "#ffffff");
                box2.x = 53;
                box2.y = 143;
                box2.scaleX = box2.scaleY = 0;
                createjs.Tween.get(box2).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage.addChild(box2);
    
                t8 = text(select2, 21, 160, 170);
                t8.scaleX = t8.scaleY = 0;
                createjs.Tween.get(t8).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage.addChild(t8);

                document.addEventListener(tap, can2touch, false);
            }

            var touchok = true;
 
            function can2touch(e) {
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

                if(x>53 && x<267 && y>65 && y<120){
                    document.removeEventListener(tap, can2touch);
                    clickbgm.stop();
                    clickbgm.play();
                    stage.removeChild(texts);
                    stage.removeChild(box1);
                    stage.removeChild(box2);
                    stage.removeChild(t7);
                    stage.removeChild(t8);
                    next();

                } else if(x>53 && x<267 && y>143 && y<196){
                    document.removeEventListener(tap, can2touch);
                    clickbgm.stop();
                    clickbgm.play();
                    stage.removeChild(texts);
                    stage.removeChild(box1);
                    stage.removeChild(box2);
                    stage.removeChild(t7);
                    stage.removeChild(t8);
                    next2();

                }else{
                    touchok = true;
                }
            }

            function cantouch(e) {
                document.removeEventListener(tap, cantouch);
                stage.removeChild(texts);
                if(type == 3) {
                    createjs.Tween.get(stage.children[0]).to({scaleX: 0, scaleY: 0}, 200);
                    createjs.Tween.get(stage.children[1]).to({scaleX: 0, scaleY: 0}, 200).call(talkingend);
                    return;
                }
                next();
            }

            function talkingend(){
                stage.removeAllChildren();
                createjs.Tween.removeAllTweens();
                next();
            }

        }






		function itemGet (game) {
            clickbgm.stop();
            clickbgm.play();
            //武器かアイテムか
            if(Math.random()>0.2){
                var itemindex = Math.floor( Math.random() *　itemList.length );
                var getitem = itemList[itemindex];
                var isItem = true;
            }else{
                var itemindex = Math.floor( Math.random() *　weaList.length );
                var getitem = weaList[itemindex];
                var isItem = false;
            }

            var stage2 = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage2);
            createjs.Ticker.framerate = createjs.Ticker.RAF;
          
            var b = rect("#000", 0, 0, 320, 533);
            b.alpha = 0;
            b.visible = true;
            createjs.Tween.get(b).to({alpha: 0.8}, 200).call(comein);
            stage2.addChild(b);
          
            var t = text(getitem.name, 26, 160, 43);
            t.scaleX = t.scaleY = 0;

            var t3 = text("を手に入れた", 26, 160, 85);
            t3.scaleX = t3.scaleY = 0;
          
            var charabox = rect("#dcdcdc", 0, 0, 213, 213, 10, "#ffffff");
            charabox.x = 53;
            charabox.y = 160;
            charabox.scaleX = charabox.scaleY = 0;
          
            var itemsize = 32;
            var itemRowLength = 20;

            var itemx = (getitem.num % itemRowLength) * itemsize;
            var itemy = Math.floor(getitem.num / itemRowLength) * itemsize;
          
            var iimg = new createjs.Bitmap(loadQueue.getResult("item"));
            iimg.sourceRect = {
                x: itemx,
                y: itemy + 1,
                width : itemsize,
                height: itemsize - 1
            }
            iimg.x = 64;
            iimg.y = 171;
            iimg.scaleX = iimg.scaleY = 0;
          
            var ok = rect("#00008b", 0, 0, 107, 59, 10, "#ffffff");
            ok.x = 107;
            ok.y = 427;
            ok.scaleX = ok.scaleY = 0;
          
            var t2 = text("OK", 26, 160, 457);
            t2.scaleX = t2.scaleY = 0;

            function comein(){
                createjs.Tween.get(t).to({scaleX: 1, scaleY: 1}, 600, createjs.Ease.bounceOut );
                stage2.addChild(t);
                createjs.Tween.get(t3).to({scaleX: 1, scaleY: 1}, 600, createjs.Ease.bounceOut );
                stage2.addChild(t3);
                createjs.Tween.get(charabox).to({scaleX: 1, scaleY: 1}, 600, createjs.Ease.bounceOut );
                stage2.addChild(charabox);
                createjs.Tween.get(iimg).to({scaleX: 180 / itemsize , scaleY: 180 / itemsize}, 600, createjs.Ease.bounceOut );
                stage2.addChild(iimg);
                createjs.Tween.get(ok).wait(300).to({scaleX: 1, scaleY: 1}, 200);
                stage2.addChild(ok);
                createjs.Tween.get(t2).wait(400).to({scaleX: 1, scaleY: 1}, 200).call(comeinend);
                stage2.addChild(t2);
            }

            var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

            var touchok = false;
            var select = false;

            function comeinend(){
                document.addEventListener(tap, can2touch, false);
                touchok = true;
            }


            function can2touch(e) {
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
            
                if(select){
                    selectitem(x, y);
                    return;
                }

                if(x>80 && x<240 && y>427 && y<480){
                    clickbgm.stop();
                    clickbgm.play();
                    var checklen = (isItem)? item.length : wea.length;
                    if(checklen >= 10){
                        for(var i=1; i<stage2.children.length - 1; i++){
                            createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 200);
                        }
                        createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 200).call(cantgetitem);
                    }else{
                        if(isItem){
                            item.push(itemindex);
                        }else{
                            wea.push(itemindex);
                        }
                        for(var i=0; i<stage2.children.length - 1; i++){
                            createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 400);
                        }
                        createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 400).call(itemend);
                        document.removeEventListener(tap, can2touch);
                    }
                } else {
                    touchok = true;
                }
            }

            function itemend(){
                createjs.Ticker.removeEventListener("tick", stage2);
                stage2.removeAllChildren();
                createjs.Tween.removeAllTweens();
                stage2.clear();
                game.stopOn = false;
            }
            
            function cantgetitem(){
                var which = (isItem)? "アイテム" : "武器";
                var t4 = text("持っている" + which + "が", 21, 160, 75);
                t4.scaleX = t4.scaleY = 0;
                createjs.Tween.get(t4).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut );
                stage2.addChild(t4);
                
                var t6 = text("いっぱいです", 21, 160, 117);
                t6.scaleX = t6.scaleY = 0;
                createjs.Tween.get(t6).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut );
                stage2.addChild(t6);

                var t5 = text("選択してください", 21, 160, 160);
                t5.scaleX = t5.scaleY = 0;
                createjs.Tween.get(t5).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut );
                stage2.addChild(t5);

                var box1 = rect("#00008b", 0, 0, 213, 54, 10, "#ffffff");
                box1.x = 53;
                box1.y = 245;
                box1.scaleX = box1.scaleY = 0;
                createjs.Tween.get(box1).wait(300).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage2.addChild(box1);

                var t7 = text("拾うのをやめる", 21, 160, 272);
                t7.scaleX = t7.scaleY = 0;
                createjs.Tween.get(t7).wait(400).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage2.addChild(t7);

                var box2 = rect("#00008b", 0, 0, 213, 54, 10, "#ffffff");
                box2.x = 53;
                box2.y = 363;
                box2.scaleX = box2.scaleY = 0;
                createjs.Tween.get(box2).wait(400).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage2.addChild(box2);

                var t8 = text("何かを捨てる", 21, 160, 390);
                t8.scaleX = t8.scaleY = 0;
                createjs.Tween.get(t8).wait(500).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(selectok);
                stage2.addChild(t8);
            }

            function selectok(){
                select = true;
                touchok = true;
            }

            function selectitem(x, y){
                if(x>53 && x<267 && y>245 && y<300){
                    document.removeEventListener(tap, can2touch);
                    clickbgm.stop();
                    clickbgm.play();
                    for(var i=0; i<stage2.children.length-1; i++){
                        createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 400);
                    }
                    createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 400).call(itemend);

                } else if(x>53 && x<267 && y>363 && y<416){
                    document.removeEventListener(tap, can2touch);
                    clickbgm.stop();
                    clickbgm.play();
                    if(isItem){
                        for(var i=1; i<stage2.children.length-1; i++){
                            createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 200);
                        }
                        createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 200).call(itemwindow, [4, game, stage2, itemindex]);
                    } else {
                        for(var i=1; i<stage2.children.length-1; i++){
                            createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 200);
                        }
                        createjs.Tween.get(stage2.children[i]).to({alpha: 0}, 200).call(itemwindow, [3, game, stage2, itemindex]);
                    }

                }else{
                    touchok = true;
                }
            }

		}













		//ポーズシーン
		function pauseScene (game, hero) {
            var stage = new createjs.Stage("canvas2");
            createjs.Ticker.addEventListener("tick", stage);
            createjs.Ticker.framerate = createjs.Ticker.RAF;

            var b = rect("#000", 0, 0, 320, 533);
            b.alpha = 0;
            b.visible = true;
            createjs.Tween.get(b).to({alpha: 0.8}, 200).call(pause);
            stage.addChild(b);

            function pause(){
                var t = text(playerName, 22, 70, 50);
                t.scaleX = t.scaleY = 0;
                createjs.Tween.get(t).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage.addChild(t);

                var t = text("Lv. "+Math.floor((3 + Math.sqrt(9 + 24 * (exp - 300))) / 6), 22, 220, 50);
                t.scaleX = t.scaleY = 0;
                createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage.addChild(t);

                for(var i=0; i<5; i++){
                    var itembox = rect("#00008b", 0, 0, 160, 53, 10, "#ffffff");
                    itembox.x = 80;
                    itembox.y = 107 + i * 75;
                    itembox.scaleX = itembox.scaleY = 0;
                    createjs.Tween.get(itembox).wait(i*100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                    stage.addChild(itembox);
                }
                text2(0, "ステータス");
                text2(1, "武器");
                text2(2, "アイテム");
                text2(3, "セーブ");
                
                function text2(ii,msg) {
                    var t = text(msg, 20, 160, 133 + ii * 75);
                    t.scaleX = t.scaleY = 0;
                    createjs.Tween.get(t).wait(100 + ii*100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                    stage.addChild(t);
                }
                    var t = text("閉じる", 20, 160, 133 + 4 * 75);
                    t.scaleX = t.scaleY = 0;
                    createjs.Tween.get(t).wait(100 + 4*100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(comeend);
                    stage.addChild(t);
            }

            var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

            function comeend(){
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
                    if(y>107 && y<160){
                        document.removeEventListener(tap, can2touch, false);
                        clickbgm.stop();
                        clickbgm.play();
                        for(var i=1; i<stage.children.length-1; i++){
                            createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                        }
                        createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100).call(statuswindow,[game, stage]);

                    }else if(y>181 && y<235){
                        document.removeEventListener(tap, can2touch, false);
                        clickbgm.stop();
                        clickbgm.play();
                        for(var i=1; i<stage.children.length-1; i++){
                            createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                        }
                        createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100).call(itemwindow,[1, game, stage]);

                    }else if(y>256 && y<309){
                        document.removeEventListener(tap, can2touch, false);
                        clickbgm.stop();
                        clickbgm.play();
                        for(var i=1; i<stage.children.length-1; i++){
                            createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                        }
                        createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100).call(itemwindow,[2, game, stage]);

                    }else if(y>331 && y<384){
                        document.removeEventListener(tap, can2touch, false);
                        clickbgm.stop();
                        clickbgm.play();
                        for(var i=1; i<stage.children.length-1; i++){
                            createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                        }
                        createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100).call(datasave,[game, hero, stage]);

                    }else if(y>405 && y<459){
                        document.removeEventListener(tap, can2touch, false);
                        clickbgm.stop();
                        clickbgm.play();
                        for(var i=0; i<stage.children.length-1; i++){
                            createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                        }
                        createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100).call(enditem);
                    }
                }
            }

            function enditem(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.removeAllChildren();
                createjs.Tween.removeAllTweens();
                stage.clear();
                game.stopOn = false;
            }
		}







        //pattern
        //1 武器　一覧
        //2 アイテム　一覧
        //3 武器　捨て
        //4 アイテム　捨て
        //5 アイテム使用

        function itemwindow(pattern, game, stage2, itemindex) {
            
            if(pattern == 5){
                var b = new createjs.Shape();
                b.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 0, 1));
                b.graphics.drawRect(0, 0, 320, 533);
                b.alpha = 0.8;
                stage2.addChild(b);
            }

            var stage = new createjs.Container();
            stage2.addChild(stage);

            if(pattern == 1 || pattern == 3){
                var t = text("武器", 22, 50, 30);
            }else{
                var t = text("アイテム", 22, 70, 30);
            }
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);

            for(var i=0; i<10; i++){
                if((pattern == 1 || pattern == 3 )&& i === nowwea){
                    var itembox = rect("#ff69b4", 0, 0, 48, 48, 10, "#ffffff");
                } else {
                    var itembox = rect("#000", 0, 0, 48, 48, 10, "#ffffff");
                }
                itembox.x = 16 + (i % 5) * 60;
                itembox.y = 64 + Math.floor(i / 5) * 64
                itembox.scaleX = itembox.scaleY = 0;
                createjs.Tween.get(itembox).wait(i*100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage.addChild(itembox);
            }

            var msgbox = rect("#000", 0, 0, 300, 181, 10, "#ffffff");
            msgbox.x = 11;
            msgbox.y = 224;
            msgbox.alpha = 0;
            createjs.Tween.get(msgbox).to({alpha: 1}, 200);
            stage.addChild(msgbox);

            var namebox = rect("#000", 0, 0, 160, 32, 6, "#ffffff");
            namebox.x = 11;
            namebox.y = 187;
            namebox.alpha = 0;
            createjs.Tween.get(namebox).to({alpha: 1}, 200);
            stage.addChild(namebox);

            var bcover = rect("#000", 0, 0, 160, 53, 10);
            bcover.x = 162;
            bcover.y = 427;
            bcover.scaleX = bcover.scaleY = 0;
            bcover.alpha = 0.5;

            button();

            if(pattern == 1 || pattern == 3){
                var list = weaList;
                var mine = wea;
            } else {
                var list = itemList;
                var mine = item;
            }

            var itemsize = 32;
            var itemRowLength = 20;

            for(var i=0; i < mine.length; i++){
                var target = list[mine[i]];

                var itemx = (target.num % itemRowLength) * itemsize;
                var itemy = Math.floor(target.num / itemRowLength) * itemsize;
              
                var iimg = new createjs.Bitmap(loadQueue.getResult("item"));
                iimg.sourceRect = {
                    x: itemx,
                    y: itemy + 1,
                    width : itemsize,
                    height: itemsize - 1
                }
                iimg.x = 22 + (i % 5) * 60;
                iimg.y = 70 + Math.floor(i / 5) * 64;
                iimg.scaleX = iimg.scaleY = 0;
                if(i == mine.length - 1){
                    createjs.Tween.get(iimg).wait(i*100 + 100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(comeend);
                }else{
                    createjs.Tween.get(iimg).wait(i*100 + 100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                }
                stage.addChild(iimg);
            }

            var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';

            function comeend(){
                document.addEventListener(tap, can2touch, false);
            }

            var touchok = true;

            var texts = [];

            var tb;
            var tbisHazusu = false;
            var suterenai = false;

            function enditemwindow(){
                document.removeEventListener(tap, can2touch, false);
                for(var i=0; i<stage.children.length - 1; i++){
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                }
                createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100).call(enditemwindow2);
                if(pattern == 5){
                    createjs.Tween.get(b).to({alpha: 0}, 100);
                }
            }

            function enditemwindow2(){
                if(pattern == 5){
                    stage2.removeChild(b);
                    game();
                }else{
                    createjs.Ticker.removeEventListener("tick", stage2);
                    stage2.removeAllChildren();
                    createjs.Tween.removeAllTweens();
                    stage2.clear();
                    game.stopOn = false;
                }
            }

            var targetItemnum = 10;

            function can2touch(e) {
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
            
                for(var iii=0; iii<texts.length; iii++){
                    stage.removeChild(texts[iii]);
                }
                texts = [];

                if(pattern != 2){
                    bcover.scaleX = bcover.scaleY = 1;
                    bcover.alpha = 0.5;
                    stage.addChild(bcover);
                }

                
                if(y>427 && y<480){
                    if(pattern == 2){
                        if(x>80 && x<240){
                            clickbgm.stop();
                            clickbgm.play();
                            enditemwindow();
                            return;
                        }
                    } else if(x>13 && x<157){
                        clickbgm.stop();
                        clickbgm.play();
                        enditemwindow();
                        return;
                    } else if(x>162 && x<306){
                        clickbgm.stop();
                        clickbgm.play();
                        if(targetItemnum < 10){
                            if(pattern == 1){
                                if(tbisHazusu){
                                    itemHp = hp;
                                    itemPow = pow;
                                    itemDef = def;
                                    nowwea = "";
                                    enditemwindow();
                                    return;
                                } else {
                                    if(!suterenai){
                                        weaList[wea[targetItemnum]].put(hp, pow, def);
                                        nowwea = targetItemnum;
                                        enditemwindow();
                                        return;
                                    }
                                }
                            } else if(pattern == 3){
                                if(targetItemnum < nowwea) nowwea--;
                                wea.splice(targetItemnum, 1);
                                wea.push(itemindex);
                                enditemwindow();
                                return;

                            } else if(pattern == 4){
                                item.splice(targetItemnum, 1);
                                item.push(itemindex);
                                enditemwindow();
                                return;

                            } else if(pattern == 5){
                                itemList[item[targetItemnum]].use();
                                item.splice(targetItemnum, 1);
                                enditemwindow();
                                return;
                            }
                        }
                    }
                }

                targetItemnum = 10;
                suterenai = false;


                for(var i=0; i<mine.length; i++){
                    if((pattern == 1 || pattern == 3 )&& i === nowwea){
                        stage.children[i + 1].graphics._fill.style = "#ff69b4";
                    } else {
                        stage.children[i + 1].graphics._fill.style = "#000";
                    }
                    if(x>16 + (i % 5) * 60 && x<64 + (i % 5) * 60 && y>70 + Math.floor(i / 5) * 64 && y<118 + Math.floor(i / 5) * 64){
                        clickbgm.stop();
                        clickbgm.play();
                        targetItemnum = i;
                        if(pattern == 1){
                            stage.removeChild(bcover);
                            if(i === nowwea){
                                if(!tbisHazusu){
                                    stage.removeChild(tb);
                                    tb = text("はずす", 24, 235, 453);
                                    tb.scaleX = tb.scaleY = 0;
                                    createjs.Tween.get(tb).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                                    stage.addChild(tb);
                                    tbisHazusu = true;
                                }
                            } else {
                                if(tbisHazusu){
                                    stage.removeChild(tb);
                                    tb = text("着ける", 24, 235, 453);
                                    tb.scaleX = tb.scaleY = 0;
                                    createjs.Tween.get(tb).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                                    stage.addChild(tb);
                                    tbisHazusu = false;
                                }
                            }
                        } else if (pattern == 3){
                            if(i === nowwea){
                                suterenai = true;
                            } else {
                                stage.removeChild(bcover);
                                suterenai = false;
                            }
                        } else {
                            stage.removeChild(bcover);
                        }
                        createjs.Tween.get(stage.children[i + 1]).to({scaleX: 0.8, scaleY: 0.8}, 100).to({scaleX: 1, scaleY: 1}, 300, createjs.Ease.bounceOut);
                        stage.children[i + 1].graphics._fill.style = "#ffff00";

                        var t = text(list[mine[i]].name, 16, 91, 203, true);
                        t.scaleX = t.scaleY = 0;
                        t.alpha = 1;
                        createjs.Tween.get(t).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                        stage.addChild(t);
                        texts.push(t);

                        for(var ii=0; ii<list[mine[i]].eff.length; ii++){
                            var t2 = text(list[mine[i]].eff[ii], 20, 160, 256 + ii * 28, true);
                            t2.scaleX = t2.scaleY = 0;
                            createjs.Tween.get(t2).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                            stage.addChild(t2);
                            texts.push(t2);
                        }
 
                    }
                }
                touchok = true;
            }

            function button () {
                if (pattern == 2){
                    var itembox = rect("#00008b", 0, 0, 160, 54, 10, "#ffffff");
                    itembox.x = 80;
                    itembox.y = 427;
                    itembox.scaleX = itembox.scaleY = 0;
                    createjs.Tween.get(itembox).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                    stage.addChild(itembox);

                    var t = text("閉じる", 24, 160, 453);
                    t.scaleX = t.scaleY = 0;
                    createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                    stage.addChild(t);
                } else {
                    for(var i=0; i<2; i++){
                        var itembox = rect("#00008b", 0, 0, 144, 53, 10,"#ffffff");
                        itembox.x = 13 + i * 149;
                        itembox.y = 427;
                        itembox.scaleX = itembox.scaleY = 0;
                        createjs.Tween.get(itembox).wait(i*100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                        stage.addChild(itembox);
                    }
                    if(pattern == 3 || pattern == 4){
                        var t = text("拾うのをやめる", 19, 85, 453);
                        t.scaleX = t.scaleY = 0;
                        createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                        stage.addChild(t);

                        var t = text("捨てる", 24, 235, 453);
                        t.scaleX = t.scaleY = 0;
                        createjs.Tween.get(t).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                        stage.addChild(t);

                    } else if(pattern == 1){
                        var t = text("閉じる", 24, 85, 453);
                        t.scaleX = t.scaleY = 0;
                        createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                        stage.addChild(t);

                        tb = text("着ける", 24, 235, 453);
                        tb.scaleX = tb.scaleY = 0;
                        createjs.Tween.get(tb).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                        stage.addChild(tb);

                    } else if(pattern == 5){
                        var t = text("閉じる", 24, 85, 453);
                        t.scaleX = t.scaleY = 0;
                        createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                        stage.addChild(t);

                        var t = text("使う", 24, 235, 453);
                        t.scaleX = t.scaleY = 0;
                        createjs.Tween.get(t).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                        stage.addChild(t);
                    }   
                }
                if(pattern != 2){
                    createjs.Tween.get(bcover).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                    stage.addChild(bcover);
                }
            }
            if(mine.length == 0) comeend();
        }





        function statuswindow(game, stage2){
            var stage = stage2;

            var t = text("Lv.　"+Math.floor((3 + Math.sqrt(9 + 24 * (exp - 300))) / 6), 22, 160, 30);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);
            var t = text("経験値　"+exp, 22, 160, 60);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);
            var t = text("HP　"+itemHp, 22, 160, 90);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);
            var t = text("攻撃力　"+itemPow, 22, 160, 120);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(300).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);
            var t = text("防御力　"+itemDef, 22, 160, 150);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(400).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);

            for(var i=2; i<5; i++){
                var itembox = rect("#00008b", 0, 0, 300, 88, 10, "#ffffff");
                itembox.x = 10;
                itembox.y = 10 + i * 95;
                itembox.scaleX = itembox.scaleY = 0;
                createjs.Tween.get(itembox).wait(i*100 + 300).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                stage.addChild(itembox);
            }

            var t = text("通常攻撃", 22, 160, 35 + 2 * 95);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(600).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);
    
            var t = text("蹴り　　威力　" + Math.round(itemPow / 20), 22, 160, 75 + 2 * 95);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(650).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);

            var t = text("特殊攻撃", 22, 160, 35 + 3 * 95);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(700).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);
    
            var t = text("腰粉砕　　威力　" + Math.round(itemPow / 5), 22, 160, 75 + 3 * 95);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(750).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);

            var t = text("必殺技", 22, 160, 35 + 4 * 95);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(800).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);
    
            var t = text("終焉ノ黶子　　威力　" + Math.round(itemPow / 3), 22, 160, 75 + 4 * 95);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(850).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(t);

            var itembox = rect("#00008b", 0, 0, 80, 30, 5, "#ffffff");
            itembox.x = 120;
            itembox.y = 490;
            itembox.scaleX = itembox.scaleY = 0;
            createjs.Tween.get(itembox).wait(900).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
            stage.addChild(itembox);
    
            var t = text("閉じる", 15, 160, 505);
            t.scaleX = t.scaleY = 0;
            createjs.Tween.get(t).wait(1000).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(tstart);
            stage.addChild(t);

            function tstart(){
                document.addEventListener(tap, cantouch, false);
            }

            var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
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

                if(x>120 && x<200 && y>490 && y<520){
                    document.removeEventListener(tap, cantouch, false);
                    clickbgm.stop();
                    clickbgm.play();
                    for(var i=0; i<stage.children.length - 1; i++){
                        createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200);
                    }
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 200).call(tstart2);
                }else{
                    touchok = true;
                }
            }

            function tstart2(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.removeAllChildren();
                createjs.Tween.removeAllTweens();
                stage.clear();
                game.stopOn = false;
                
            }
        }








        function datasave(game, hero, stage2){
            var stage = stage2

            var tx = text("セーブしています", 24, 160, 170);
            stage.addChild(tx);

            var weast = "";
            if(wea.length == 0){
                weast = "";
            } else {
                for(var i = 0; i<wea.length-1; i++){
                    weast = weast + wea[i] + "Y";
                }
                weast = weast + wea[i];
            }

            var itemst = "";
            if(item.length == 0){
                itemst = "";
            } else {
                for(var i = 0; i<item.length-1; i++){
                    itemst = itemst + item[i] + "Y";
                }
                itemst = itemst + item[i];
            }

            var paramst = "";
            for(var i = 0; i<param.length-1; i++){
                paramst = paramst + param[i] + "Y";
            }
            paramst = paramst + param[i];

            var herox = (hero[0] + 16) / 32;
            var heroy = (hero[1] + 16) / 32;
            var pos = herox + "Y" + heroy;


            var data = {name: playerName,
                        word: mypassword,
                        exp: exp,
                        pow: pow,
                        def: def,
                        nowwea: nowwea,
                        wea: weast,
                        item: itemst,
                        que: quenum,
                        pos: pos,
                        param: paramst
            };

            function savedatasend(){
                var request = new XMLHttpRequest();
                request.open("POST", "https://ikegamishinkai.shop/save.php", true);
                request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
                request.send(EncodeHTMLForm( data ));
                request.onreadystatechange = function(){
                    var READYSTATE_COMPLETED = 4;
                    var HTTP_STATUS_OK = 200;
                
                    if( this.readyState == READYSTATE_COMPLETED && this.status == HTTP_STATUS_OK ){
                        stage.removeChild(tx);
    
                        if(this.responseText == "err1"){
                            alert("ネットワークエラーが発生しました　もう一度試してください");
                            for(var i=0; i<stage.children.length; i++){
                                createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                            }
                            game.stopOn = false;
    
                        } else if(this.responseText == "err2"){
                                alert("エラーが発生しました　もう一度試してください");
                                for(var i=0; i<stage.children.length; i++){
                                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                                }
                                game.stopOn = false;
        
                        } else if(this.responseText == "ok3"){
    
                            var t = text("セーブしました", 24, 160, 130);
                            t.scaleX = t.scaleY = 0;
                            createjs.Tween.get(t).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                            stage.addChild(t);
    
                            var t = text("タイトルに戻りますか？", 24, 160, 170);
                            t.scaleX = t.scaleY = 0;
                            createjs.Tween.get(t).wait(100).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                            stage.addChild(t);
    
                            for(var i=0; i<2; i++){
                                var itembox = rect("#00008b", 0, 0, 107, 54, 10, "#ffffff");
                                itembox.x = 32 + i * 149;
                                itembox.y = 358;
                                itembox.scaleX = itembox.scaleY = 0;
                                createjs.Tween.get(itembox).wait(i*100 + 200).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                                stage.addChild(itembox);
                            }
                    
                            var t = text("No", 21, 85, 385);
                            t.scaleX = t.scaleY = 0;
                            createjs.Tween.get(t).wait(300).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut);
                            stage.addChild(t);
                    
                            var t = text("Yes", 21, 235, 385);
                            t.scaleX = t.scaleY = 0;
                            createjs.Tween.get(t).wait(400).to({scaleX: 1, scaleY: 1}, 400, createjs.Ease.bounceOut).call(comeend);
                            stage.addChild(t);
                            
                        }
                    }
                }
            }
            savedatasend();

            var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
            var touchok = true;

            function can2touch(e) {
                if(!touchok) return;
                touchok = false;
                if(tap == 'touchstart'){
                  var touches = e.changedTouches[0];
                }else{
                  var touches = e;
                }
                var rect2 = canvas.getBoundingClientRect();
                var x = ( touches.clientX - rect2.left ) / rect2.width * canvas.width;
                var y = ( touches.clientY - rect2.top ) / rect2.height * canvas.height;

                if(x>32 && x<139 && y>358 && y<412){
                    document.removeEventListener(tap, can2touch, false);
                    clickbgm.stop();
                    clickbgm.play();
                    for(var i=0; i<stage.children.length - 1; i++){
                        createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100);
                    }
                    createjs.Tween.get(stage.children[i]).to({alpha: 0}, 100).call(endsave);

                }else if(x>181 && x<288 && y>358 && y<412){
                    clickbgm.stop();
                    clickbgm.play();
                    fade(fieldbgm);
                    GLstage.removeAllChildren();
                    GLstage.update();
                    var b = rect("#000", 0, 0, 320, 533);
                    b.alpha = 0;
                    createjs.Tween.get(b).to({alpha: 1}, 400).call(endsave2).call(title3);
                    stage.addChild(b);
                }else{
                    touchok = true;
                }
            }

            function comeend(){
                document.addEventListener(tap, can2touch, false);
            }

            function endsave(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.removeAllChildren();
                createjs.Tween.removeAllTweens();
                stage.clear();
                game.stopOn = false;
            }

            function endsave2(){
                createjs.Ticker.removeEventListener("tick", stage);
                stage.removeAllChildren();
                createjs.Tween.removeAllTweens();
                stage.clear();
                game = null;
            }

        }