const LENGTH = 200;
const BREADTH = 100;

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
  if (index === y - (ORIGIN - x)) {
    return '.';
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

const ORIGIN = stringIndex(BREADTH / 2, LENGTH / 2);

function main() {
  const radius = 10;
  let angle = 0;
  
  while (true) {
    let background = makeBackground();
    console.clear();
    const xCoordinate = Math.round((Math.cos(angle)) * 2 * radius) + ORIGIN;
    const yCoordinate = Math.round((Math.sin(angle)) * radius) * LENGTH + ORIGIN;
    angle = angle + Math.PI / 180;

    console.log(updateBackground(background, xCoordinate, yCoordinate));
    delay(5000000);
  }
}

main();
