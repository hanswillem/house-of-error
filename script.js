const textElement = document.getElementById("house-of-error");
const originalText = "HOUSE OF ERROR";
const specialChars = "@#!&^%$*";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCharacterElements() {
  const characterElements = [];

  for (const character of originalText) {
    const span = document.createElement("span");
    span.textContent = character;
    characterElements.push(span);
    textElement.appendChild(span);
  }

  return characterElements;
}

function changeText(characterElements) {
  const indices = new Set();

  while (indices.size < 3) {
    const index = getRandomInt(0, characterElements.length - 1);
    if (characterElements[index].textContent !== " ") {
      indices.add(index);
    }
  }

  for (const index of indices) {
    const randomChar = specialChars[getRandomInt(0, specialChars.length - 1)];
    characterElements[index].textContent = randomChar;
    characterElements[index].style.color = "lime";
  }

  return indices;
}

function revertText(characterElements, changedIndices) {
  for (const index of changedIndices) {
    characterElements[index].textContent = originalText[index];
    characterElements[index].style.color = "white";
  }
}

function main() {
  const characterElements = createCharacterElements();
  let changedIndices = changeText(characterElements);

  setInterval(() => {
    revertText(characterElements, changedIndices);
    changedIndices = changeText(characterElements);
  }, 100);
}

main();
