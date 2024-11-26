const HEIGHT = 30;
const WIDTH = 30;
const ORIGIN = 405;

function delay(value) {
  for (let index = 0; index < value; index++) { }
}

function makeBackgroundContents(index) {
  if (index === ORIGIN) {
    return '.';
  }

  if (index % 30 === 0) {
    return '\n';
  }

  return ' ';
}

function makeBackground() {
  let background = '';

  for (let index = 1; index <= HEIGHT * WIDTH; index++) {
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

function main() {
  const radius = 5;
  let angle = 0;
  
  while (true) {
    let background = makeBackground();
    console.clear();
    const xCoordinate = Math.round((Math.cos(angle)) * 2 * radius) + ORIGIN;
    const yCoordinate = Math.round((Math.sin(angle)) * radius) * 30 + ORIGIN;
    angle = angle + Math.PI / 20;

    console.log(updateBackground(background, xCoordinate, yCoordinate));
    delay(50000000);
  }
}

main();