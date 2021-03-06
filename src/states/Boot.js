import Phaser from 'phaser';

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#EDEEC9';
  }

  preload() {
    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Arial', fill: '#dddddd', align: 'center' });
    text.anchor.setTo(0.5, 0.5);

    this.load.image('loaderBg', '../src/assets/images/loader-bg.png');
    this.load.image('loaderBar', '../src/assets/images/loader-bar.png');
  }

  render() {
    this.state.start('Splash');
  }
}