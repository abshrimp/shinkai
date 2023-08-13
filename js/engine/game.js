'use strict'

/**
 * ゲームづくりの基本となるクラス
 */
class Game {

	constructor() {
		this.canvas = document.getElementById( 'canvas' );
		this.scenes = [];
		this.currentScene;
		this.stopOn = false;
		this.aiOn = false;
		this.count = 0;
		this.stage = GLstage;
		this.startup = true;
		this.eva;

		//ゲームに使用するキーと、そのキーが押されているかどうかを入れるための連想配列
		//例 { up: false, down: false }
		this.input = {};
		//登録されたキーに割り当てられたプロパティ名と、キー名を、関連づけるための連想配列
		//例 { up: "ArrowUp", down: "ArrowDown" }
		this._keys = {};

		this.keybind( 'up', 'ArrowUp' );
		this.keybind( 'down', 'ArrowDown' );
		this.keybind( 'right', 'ArrowRight' );
		this.keybind( 'left', 'ArrowLeft' );
		this.keybind( 'space', ' ' );

	}

	start() {
		//現在のシーン（currentScene）になにも入っていないときは、scenes[0]を代入
		this.currentScene = this.scenes[0];
		setEventListener(this);
		this._mainLoop();
	}

	_mainLoop() {
		if (!this.stopOn) {
			this.stage.removeAllChildren();

			this.currentScene.update();

			for ( let i=0; i<this.currentScene.objs.length; i++ ) {
				this.currentScene.objs[i].update( this.stage, this.canvas );
			}
			
			this.stage.update();

			if(this.startup) this.stopOn = true;
			if(this.aiOn) this.stopOn = true;
		}

		requestAnimationFrame( this._mainLoop.bind( this ) );
	}

	add( scene ) {
		//引数がSceneのとき、this.scenesの末尾にsceneを追加
		if ( scene instanceof Scene ) this.scenes.push( scene );
		//引数がSceneでなければ、コンソールにエラーを表示
		else console.error( 'Gameに追加できるのはSceneだけだよ！' );
	}

	keybind( name, key ) {
		//キーの名前と、キーコードを関連づける
		this._keys[name] = key;
		//キーが押されているかどうかを入れておく変数に、まずはfalseを代入しておく
		this.input[name] = false;
	}

}
