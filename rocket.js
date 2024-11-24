const LENGTH = 40;
const WIDTH = 20;

function repeat(string, length) {
  let repeatedString = '';

  for (let index = 0; index < length; index++) {
    repeatedString += string;
  }

  return repeatedString;
}

function generateRandom(from, to) {
  return from + Math.floor((Math.random()) * (to - from));
}

function thrusterMovement() {
  return generateRandom(0, 2) === 0 ? '<=======[~ ~ ~\n' : '<=======[~~\n';
}

function rocket() {
  const spaceBeforeRocket = repeat(' ', LENGTH);
  const rocketBody = repeat(' ', LENGTH - 4) + thrusterMovement();

  return spaceBeforeRocket + '/|\n' + rocketBody + spaceBeforeRocket + '\\|'; 
}

function delay(range) {
  for (let index = 0; index < range; index++);
}

function createSpace() {
  const string = repeat(' ', LENGTH * WIDTH);
  return string;
}

function updateSpaceContents(string, index) {
  if (string[index] === '-') {
    return ' ';
  }

  if (string[index - 1] === '-') {
    return '-';
  }

  return string[index];
}

function updateSpace(string) {
  let updatedString = '';
  
  for (let index = 0; index < string.length; index++) {
    if (index % 80 === 0) {
      updatedString += '\n';
      continue;
    }

    if (index === generateRandom(0, 5 * LENGTH * WIDTH)) {
      updatedString += '-';
      continue;
    }
    
    updatedString += updateSpaceContents(string, index);
  }

  return updatedString;
}

function motion() {
  let string = createSpace();

  for (let index = 0; index < 2600; index++) {
    console.clear();
    string = updateSpace(string);
    console.log(string);
    console.log(rocket());
    console.log(string);

    delay(80000000);
  }
}

motion();
