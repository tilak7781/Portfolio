const dynamicContent = document.getElementById("dynamic-text");

const phrases = [
  "am Software Engineer...",
  "love Frontend Development...",
  "love Backend Development...",
];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 75;

function PrintLetters(phrase) {
  if (letterIndex == phrase.length) {
    //clear letter which have been typed
    clearLetters();
  } else if (letterIndex < phrase.length) {
    dynamicContent.textContent += phrase.charAt(letterIndex);
    letterIndex += 1;
    setTimeout(function () {
      PrintLetters(phrase);
    }, typingSpeed);
  }
}

function clearLetters() {
  if (letterIndex == -1) {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    letterIndex = 0;
    PrintLetters(phrases[phraseIndex]);
  } else if (letterIndex > -1) {
    let updatedPhrase = "";
    for (let index = 0; index < letterIndex; index++) {
      updatedPhrase += phrases[phraseIndex].charAt(index);
    }
    dynamicContent.textContent = updatedPhrase;
    letterIndex -= 1;
    setTimeout(clearLetters, erasingSpeed);
  }
}

PrintLetters(phrases[phraseIndex]);

var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
