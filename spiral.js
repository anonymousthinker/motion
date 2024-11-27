const HEIGHT = 200;
const WIDTH = 200;

function delay(value) {
  for (let index = 0; index < value; index++) { }
}

function stringIndex(xPos, yPos) {
  return (yPos * WIDTH) + xPos;
}

function makeBackgroundContents(index) {
  if (index === ORIGIN) {
    return '.';
  }
  
  if (index % WIDTH === 0) {
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

function main() {
  let radius = 20;
  let angle = 0;
  let background = makeBackground();
  
  while (radius > 0) {
    console.clear();
    const xCoordinate = Math.round((Math.cos(angle)) * 2 * radius) + ORIGIN;
    const yCoordinate = Math.round((Math.sin(angle)) * radius) * HEIGHT + ORIGIN;
    angle = angle + Math.PI / 180;
    background = updateBackground(background, xCoordinate, yCoordinate);
    
    radius -= 0.01;
    
    console.log(background);
    delay(9000000);
  }
}

const ORIGIN = stringIndex(WIDTH / 2, HEIGHT / 2);

// console.log(ORIGIN);
main();