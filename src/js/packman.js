class Pacman {
  constructor(position, mouth) {
    this.xpos = null;
    this.isOpen = true;
  }

  moveRight() {
    this.xpos++;
    this.movement(this.xpos);

    this.update();
  }

  moveLeft() {
    this.xpos--;
    this.movement(this.xpos);

    this.update();
  }

  movement(newPos) {
    this.element.style.left = newPos * TILE_SIZE + "px";

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.element.classList.add("pacboy-active-light-open");
      this.element.classList.remove("pacboy-active-light-closed");
    } else {
      this.element.classList.add("pacboy-active-light-closed");
      this.element.classList.remove("pacboy-active-light-open");
    }
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = "entity entity--pac pacboy-active-light";
  }

  mount() {
    this.render();
    this.update();
    return this.element;
  }

  update() {}
}
