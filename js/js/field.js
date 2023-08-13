'use strict'

function field ( fieldmap, saveX, saveY, ouryu1, ouryu2 ) {

		const game = new Game();

		var getitem;

		//メインシーン
		const mainScene = () => {

			const TILE_SIZE = 32;
			const WALKING_SPEED = 4;

			const scene = new Scene();

			var layer1 = [];
			var layer2 = [];
			for(var i=0; i<fieldmap.layerheight; i++){
				var arr1 = fieldmap.layer1.slice(i * fieldmap.layerwidth, (i + 1) * fieldmap.layerwidth);
				for(var ii=0; ii<arr1.length; ii++){
					arr1[ii] = arr1[ii] - 1;
				}
				layer1.push(arr1);

				var arr2 = fieldmap.layer2.slice(i * fieldmap.layerwidth, (i + 1) * fieldmap.layerwidth);
				for(var ii=0; ii<arr2.length; ii++){
					arr2[ii] = arr2[ii] - 1;
				}
				layer2.push(arr2);
			}

			if(ouryu1 !== void 0){
				layer1[24][24] = ouryu1;
				layer2[23][24] = ouryu2;
			}


			const tilemap = new Tilemap(loadQueue.getResult(fieldmap.id));
			tilemap.data = layer1;
			tilemap.data2 = layer2;
			//canvas左上とmap左上の距離
			tilemap.x = TILE_SIZE * saveX - TILE_SIZE/2;
			tilemap.y = TILE_SIZE * saveY - TILE_SIZE/2;
			tilemap.obstacles = fieldmap.ob;
			tilemap.human = fieldmap.peopletile;
			scene.add( tilemap );

			var itemCount = 0;

			for ( var i = 0; i < fieldmap.layerheight; i++ ) {
				for ( var ii = 0; ii < fieldmap.layerwidth; ii++ ) {
					if ( (tilemap.data[i][ii] == 187 || tilemap.data[i][ii] == 533) && layer2[i][ii] == -1 && Math.random() < 0.0023) {
						var item = new Tile( loadQueue.getResult("start") );
						item.x = TILE_SIZE * ii;
						item.y = TILE_SIZE * i;
						tilemap.add( item );
						itemCount ++;
					}
				} 
			}

			const hero = new CharacterTile( loadQueue.getResult("hero"), 32, true);
			hero.x = TILE_SIZE*5 - TILE_SIZE/2;
			hero.y = TILE_SIZE*8 - TILE_SIZE/2;
			//タイルマップの動きと同期させない
			hero.isSynchronize = false;
			tilemap.add( hero );

			game.eva = fieldmap.eva;

			setTimeout(function(){
				game.startup = false;
				game.stopOn = false;
			}, 900);

			//画面がタッチされた時の処理
			scene.ontouchstart = ( x, y ) => {
				if(game.stopOn) return;
				//画面中央がタッチされたか
				if( x >= hero.x && x <= hero.x + hero.width && y >= hero.y && y <= hero.y + hero.height ) {
					game.stopOn = true;
					clickbgm.pause();
					clickbgm.play();
					pauseScene(game, [tilemap.x, tilemap.y]);
				}else{
					scene._appry( x, y, TILE_SIZE, game.canvas.height );
				}
			}
			scene.ontouchmove = ( x, y ) => {
				if(game.stopOn) return;
				scene._appry( x, y, TILE_SIZE, game.canvas.height );
			}
			scene.ontouchend = ( x, y ) => {
				scene.arrow = {
					up: false,
					down: false,
					left: false,
					right: false
				};
			}

/*
			if( onAi ) {
				const ai2 = new CharacterTile( 'img/hero2.png', 32, true );
				ai2.x = TILE_SIZE*6 - TILE_SIZE/2;
				ai2.y = TILE_SIZE*7 - TILE_SIZE/2;
				ai2.isSynchronize = false;
				tilemap.add( ai2 );			
				const ai = new CharacterTile( 'img/hero.png', 32, true );
				ai.x = TILE_SIZE*6 - TILE_SIZE/2;
				ai.y = TILE_SIZE*7 - TILE_SIZE/2;
				ai.isSynchronize = false;
				tilemap.add( ai );
				var party = new Party( hero, ai2, ai );
			} else {*/
				var party = new Party( hero );
			
			party.speed = WALKING_SPEED;

			//キャラクターのアニメーションのための変数
			let toggleForAnimation = 0;
			//移動可能かどうかの変数
			let isMovable = true;
			//移動したか判定
			let isMoved = false;

			if(ouryu1 !== void 0){
				if(ouryu1 == 1181){
					game.aiOn = true;
					var stage = new createjs.Stage("canvas2");
					createjs.Ticker.addEventListener("tick", stage);
					createjs.Ticker.framerate = createjs.Ticker.RAF;

					talk("？？？", "、、、誰？", 1, stage, next);
					function next() { talk("真改", "目を覚ました、、、！", 2, stage, next21);}
					function next21() { talk("真改", "どうやらアッポンドは本当に効果があるみたいだ", 2, stage, next22);}
					function next22() { talk("？？？", "、、、誰なの？", 2, stage, next23);}
					function next23() { talk("真改", "ああ、俺の名は真改。君は？", 2, stage, next2);}
					function next2() { talk("？？？", "、、、私は哀＜あい＞", 2, stage, next3);}
					function next3() { talk("哀", "助けてくれてありがとう。でもどうやって、、、？", 2, stage, next4);}
					function next4() { talk("真改", "アッポンドを使ったんだ", 2, stage, next5);}
					function next5() { talk("哀", "、、、アッポンド！", 2, stage, next6);}
					function next6() { talk("真改", "知っているなら話が早い", 2, stage, next7);}
					function next7() { talk("真改", "実は大量のアッポンドを求めて、旅に出たんだ", 2, stage, next8);}
					function next8() { talk("哀", "私、、、", 2, stage, next9);}
					function next9() { talk("哀", "私知ってるわ、アーラキ沼よね？", 2, stage, next10);}
					function next10() { talk("真改", "アーラキ沼を知っているのか？", 2, stage, next11);}
					function next11() { talk("哀", "場所も分かるわ", 2, stage, next12);}
					function next12() { talk("真改", "なら、、、", 2, stage, next13);}
					function next13() { talk("真改", "ぜひ俺をアーラキ沼まで案内してくれないか？", 2, stage, next14);}
					function next14() { talk("哀", "、、、分かったわ", 3, stage, next15);}
					function next15(){
						createjs.Ticker.removeEventListener("tick", stage);
						stage.clear();
						param[1] = 1;
						fieldstart(map11, [-265, -3]);
					}
				}
			}

			//ループから常に呼び出される
			scene.onenterframe = () => {
				if( game.input.space ){
					game.input.space = false;
					game.stopOn = true;
					clickbgm.pause();
					clickbgm.play();
					pauseScene(game, [tilemap.x, tilemap.y]);
					return;
				}
				//タイルマップの位置がタイルのサイズで割り切れるとき
				if ( ( tilemap.x - TILE_SIZE/2 ) % TILE_SIZE === 0 && ( tilemap.y - TILE_SIZE/2 ) % TILE_SIZE === 0 ) {
					//タイルマップの移動速度に0を代入する
					tilemap.vx = tilemap.vy = 0;
					//パーティ全員の数だけ繰り返す
					for ( let i in party.member ) {
						//パーティ全員の移動速度を0にする
						party.member[i].vx = party.member[i].vy = 0;
						//パーティ全員の画像を切り替える
						party.member[i].animation = 1;
					}

					//アイテムと重なっているとき、イベントを発生させる
					for ( var i = 0; i < itemCount; i++ ) {
						if ( hero.isOverlapped( tilemap.tiles[i] ) ) {
							game.stopOn = true;
							itemGet(game);
							getitem = tilemap.tiles[i];
							tilemap.tiles.splice( i, 1 );
							itemCount --;
						}
					}

					//ランダムでバトル
					if ( !game.stopOn && isMoved && Math.random() < fieldmap.enc ) {
						game.stopOn = true;
						battle(game);
					}

					//移動可能なとき
					if ( isMovable && !game.stopOn) {
						//方向キー、もしくは画面がタッチされているときは、setMemberVelocityメソッドを呼び出し、タイルマップの移動速度と、shinkaiの向きに、それぞれの値を代入する
						if ( game.input.left || scene.arrow.left ) {
							party.setMemberVelocity( 'left' );
							tilemap.vx = WALKING_SPEED;
							hero.direction = 1;
						}
						else if ( game.input.right || scene.arrow.right ) {
							party.setMemberVelocity( 'right' );
							tilemap.vx = -1 * WALKING_SPEED;
							hero.direction = 2;
						}
						else if ( game.input.up || scene.arrow.up ) {
							party.setMemberVelocity( 'up' );
							tilemap.vy = WALKING_SPEED;
							hero.direction = 3;
						}
						else if ( game.input.down || scene.arrow.down ) {
							party.setMemberVelocity( 'down' );
							tilemap.vy = -1 * WALKING_SPEED;
							hero.direction = 0;
						}

						//移動後のマップ座標を求める
						const heroCoordinateAfterMoveX = hero.mapX - tilemap.vx/WALKING_SPEED;
						const heroCoordinateAfterMoveY = hero.mapY - tilemap.vy/WALKING_SPEED;
						//もし移動後のマップ座標に障害物があるとき
						if ( tilemap.hasObstacle( heroCoordinateAfterMoveX, heroCoordinateAfterMoveY ) ) {
							//移動量に0を代入する
							tilemap.vx = tilemap.vy = 0;
							//パーティ全員の移動速度に0を代入する
							for ( let i in party.member ) {
								party.member[i].vx = party.member[i].vy = 0;
							}
							var humancheck = tilemap.hasHuman( heroCoordinateAfterMoveX, heroCoordinateAfterMoveY );
							if ( humancheck !== -1 ) {
								game.stopOn = true;
								//どの人か
								for(var i=0; i<peopleList.length; i++){
									if(peopleList[i].num === humancheck){
										peopleList[i].com(game);
										break;
									}
								}
							}
						}

						//タイルマップが動いているとき、パーティメンバーの向きを変える
						if ( tilemap.vx !== 0 || tilemap.vy !== 0 ) party.setMemberDirection();
					}
					isMoved = false;
				}
				//タイルマップのXとY座標両方がタイルのサイズで割り切れるとき以外で、タイルの半分のサイズで割り切れるとき
				else if ( ( tilemap.x + TILE_SIZE/2 ) % ( TILE_SIZE/2 ) === 0 && ( tilemap.y + TILE_SIZE/2 ) % ( TILE_SIZE/2 ) === 0 ) {
					//0と1を交互に取得できる
					toggleForAnimation ^= 1;
					//パーティメンバーの数だけ繰り返す
					for ( let i in party.member ) {
						//toggleForAnimationの数値によって、パーティ全員の画像を切り替える
						if ( toggleForAnimation === 0 ) party.member[i].animation = 2;
						else party.member[i].animation = 0;
					}
					isMoved = true;
				} else isMoved = true;
			}

			return scene;

		}

		game.add( mainScene() );
		game.start();

};