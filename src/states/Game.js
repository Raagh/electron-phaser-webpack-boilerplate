import Phaser from 'phaser';
import Mushroom from '../sprites/Mushroom';

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    const bannerText = 'Web - Desktop - Phaser';
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Arial',
      fill: '#77BFA3',
      smoothed: false
    });

    banner.padding.set(10, 16);
    banner.anchor.setTo(0.5);

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    });

    this.game.add.existing(this.mushroom);
  }

  render() {
    this.game.debug.spriteInfo(this.mushroom, 32, 32);
  }
}