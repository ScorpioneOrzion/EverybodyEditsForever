export default class Player {
  /** @param {string} smiley */
  constructor(smiley) {
    this.position = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.acceleration = { x: 0, y: 0 };
    this.smiley = smiley;
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
}
