"use strict";

console.log("it works!");

const newPacMan = new Pacman();

const container = document.querySelector(".container");

container.appendChild(newPacMan.mount());

const TILE_SIZE = 85;

let xpos = 0;

document.addEventListener("keydown", (event) => {
  console.log(event);

  if (event.code === "ArrowRight") {
    //xpos++;
    newPacMan.moveRight();

    //movement(xpos);
  } else if (event.code === "ArrowLeft") {
    newPacMan.moveLeft();
  }
});
