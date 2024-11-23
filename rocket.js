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

function updateSpace() {
  const string = createSpace();
  let updatedString = '';
  
  for (let index = 0; index < string.length; index++) {
    if (index === generateRandom(index - 80, index + 80)) {
      updatedString += '*';
      continue;
    }

    updatedString += index % 80 === 0 ? '\n' : string[index];
  }

  return updatedString;
}

function motion() {
  for (let index = 0; index < 80; index++) {
    console.clear();
    console.log(updateSpace());
    delay(400000000);
  }
}

motion();