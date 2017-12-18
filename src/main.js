import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/Boot';
import SplashState from './states/Splash';
import GameState from './states/Game';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    const docElement = document.documentElement;
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth;
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight;
    let isDesktop = process.env.NODE_ENV === 'desktop';

    super(width, height, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');

    let sendMessageToRenderer = () => {
      let ipcRenderer = false;
      let isDesktop = process.env.NODE_ENV === 'desktop';

      if (isDesktop) {
        ipcRenderer = require('electron').ipcRenderer;
      }

      if (ipcRenderer) {
        // send to main process
        ipcRenderer.sendSync('synchronous-message', 'this is the content of my electron message');
      } else {
        alert('Not available in the \'web\' environment');
      }
    };

    if (!isDesktop) {
      sendMessageToRenderer();
    }
  }
}

window.game = new Game();