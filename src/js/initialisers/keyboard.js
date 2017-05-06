import Player from '../services/player.js';

const KEYS = {
  SPACE: 32,
  RIGHT_ARROW: 39,
  LEFT_ARROW: 37
};

export default class Keyboard {
  static initialise() {
    this.addHandlers();
  }

  static addHandlers() {
    document.body.onkeyup = (event) => {
      if (event.target.localName == 'input') return;
      let keymap = {
        " ": Player.togglePlaying.bind(Player),
        ArrowRight: Player.next.bind(Player),
        ArrowLeft: Player.previous.bind(Player)
      };

      if (keymap[event.key] !== undefined) {
        keymap[event.key]();
        event.preventDefault();
      }
    };
  }
}