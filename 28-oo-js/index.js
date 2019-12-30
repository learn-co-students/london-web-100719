class Entity {
  constructor(startingPos, sprite) {
    this.x = startingPos.x;
    this.y = startingPos.y;
    this.sprite = sprite;
    console.log("entity has been created", sprite);
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }

  update() {
    this.x += 1;
  }
}

class Player extends Entity {
  constructor(startingPos, keys) {
    super(startingPos, "playerSprite");
    this.setUpKeyHandlers(keys);
    this.score = Math.random() * 100;
  }

  static highestScore(players) {
    return players.sort((p1, p2) => p2.score - p1.score)[0];
  }

  setUpKeyHandlers(keys) {
    keys.forEach(key => {
      window.addEventListener("keydown", e => {
        if (e.key === key) {
          this.x++;
        }
      });
    });
  }
}

class Enemy extends Entity {
  constructor(startingPos, speed) {
    super(startingPos, "enemySprite");
    this.speed = speed;
    this.constructor.all.push(this);
  }

  static all = [];

  moveTowardsPlayer() {
    this.x -= this.speed;
    this.y -= this.speed;
  }

  update() {
    this.moveTowardsPlayer();
  }
}

const p = new Player({ x: 100, y: 200 }, ["ArrowRight"]);
const p2 = new Player({ x: 200, y: 200 }, ["d"]);
const enemy = new Enemy({ x: 200, y: 200 }, 5);

setInterval(() => {
  p.update();
  p2.update();
  enemy.update();
}, 1000 / 60);
