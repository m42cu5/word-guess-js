function handleOnload() {
  let word = getRandomWord();
  console.log("word: " + word);
  getClue(word);
}

function getRandomWord() {
  let words = ["apple", "banana", "orange"];
  let word = words[getRandomInteger(0, 2)];
  document.getElementById("word").innerHTML = word;
  return word;
}

function getClue(word) {
  var clue = "_".repeat(word.length);
  document.getElementById("clue").innerHTML = clue;
}

function guessWord() {
  let guessCount = document.getElementById("guessCount").innerHTML;
  guessCount++;
  document.getElementById("guessCount").innerHTML = guessCount;
  let guess = document.getElementById("input").value;
  let word = document.getElementById("word").innerHTML;
  if (guess == word) {
    alert(
      `Correct! The word was "${word}". You guessed the word in ${guessCount} guess(es).`
    );
  } else {
    if (guess.length == 1) {
      let clue = document.getElementById("clue").innerHTML;
      let clueArray = clue.split("");

      let index = 0;
      let wrongChar = true;
      do {
        index = word.indexOf(guess, index);
        if (index != -1) {
          clueArray[index] = guess;
          index++;
          wrongChar = false;
        } else {
          if (wrongChar == true) {
            let wrongCharList = document.getElementById("wrongCharList")
              .innerHTML;
            if (wrongCharList.indexOf(guess) == -1) {
              wrongCharList = `${wrongCharList} ${guess}`;
              document.getElementById(
                "wrongCharList"
              ).innerHTML = wrongCharList;
            }
          }
        }
      } while (index != -1);
      clue = clueArray.join("");
      document.getElementById("clue").innerHTML = clue;
      if (clue == word) {
        alert(
          `Correct! The word was "${word}". You guessed the word in ${guessCount} guess(es).`
        );
      }
    }
    document.getElementById("input").value = "";
  }
  document.getElementById(
    "text"
  ).innerHTML = `Guess (#${guessCount}) the word:`;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
