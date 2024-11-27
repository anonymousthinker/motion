const LENGTH = 1000;
const BREADTH = 200;

function delay(value) {
  for (let index = 0; index < value; index++) { }
}

function stringIndex(xPos, yPos) {
  return (yPos * BREADTH) + xPos;
}

function makeBackgroundContents(index) {
  if (index === ORIGIN) {
    return '.';
  }

  if (!(index % LENGTH)) {
    return '\n';
  }

  return ' ';
}

function makeBackground() {
  let background = '';

  for (let index = 1; index <= LENGTH * BREADTH; index++) {
    background += makeBackgroundContents(index);
  }

  return background;
}

function updateBackgroundContents(background, x, y, index) {
  if (index === y - (ORIGIN - x) && background[index] !== '\n') {
    return '@';
  }

  return background[index];
}

function updateBackground(background, x, y) {
  let updatedBg = '';

  for (let index = 0; index < background.length; index++) {
    updatedBg += updateBackgroundContents(background, x, y, index);
  }

  return updatedBg;
}

let ORIGIN = stringIndex(BREADTH / 4, LENGTH / 4);

function main() {
  const radius = -20;
  let angle = 0;
  let background = makeBackground();
  let index = 0;
  let yCoordinate = 0

  while (index < 60) {
    while (yCoordinate !== ORIGIN) {
      console.clear();
      angle += index % 2 ? -(Math.PI / 90) : Math.PI / 90;

      const xCoordinate = Math.round((Math.cos(angle)) * 2 * radius) + ORIGIN;
      yCoordinate = Math.round((Math.sin(angle)) * radius) * LENGTH + ORIGIN;

      background = updateBackground(background, xCoordinate, yCoordinate);
      console.log(background);
      delay(30000000);
    }

    index += 1;
    ORIGIN -= 4 * radius;
    angle = 0;
  }
}

main();
