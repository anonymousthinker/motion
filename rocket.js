const LENGTH = 40;
const WIDTH = 20;

function delay(range) {
  for (let index = 0; index < range; index++);
}

function generateRandom(from, to) {
  return from + Math.floor((Math.random()) * (to - from));
}

function createSpace() {
  let string = '';
  
  for (let index = 0; index < LENGTH * WIDTH; index++) {
    string += index % 80 === 0 ? '\n' : ' ';
  }

  return string;
}

function updateSpace(string) {
  let updatedString = '';
  
  for (let index = 0; index < string.length; index++) {
    if (index % 80 === 0) {
      updatedString += '\n';
      continue;
    }

    if (index === generateRandom(index - 30, index + 30) && string[index] !== '+') {
      updatedString += '+';
      continue;
    }

    updatedString += string[index];
  }

  return updatedString;
}

function motion() {
  let string = createSpace();

  for (let index = 0; index < 260; index++) {
    console.clear();
    string = updateSpace(string);
    console.log(string);
    delay(200000000);
  }
}

motion();
