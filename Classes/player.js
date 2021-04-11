export default class Player {
  constructor() {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.smiley = "";
    this.gravity = { x: 0, y: 0 };
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.velocity.x += this.acceleration.x;
    this.velocity.y += this.acceleration.y;
  }

  setSmiley(smiley) {
    this.smiley = smiley
  }

  view() {
    return {
      left: -player.position.x * 16 + window.innerWidth / 2 - 8,
      top: -player.position.y * 16 + window.innerHeight / 2 - 8
    }
  }
}
