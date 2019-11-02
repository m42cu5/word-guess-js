function start() {
  let words = ["apple", "banana", "orange"];
  let word = words[getRandomInteger(0, 2)];
  document.getElementById("word").innerHTML = word;
  document.getElementById("start").remove();
  //document.getElementById("word").style.display = "none";
  alert("word: " + word);
  //return false;
}

function guess() {
  //let guess = document.getElementById("test").innerHTML;
  //this.event = event;
  //var guess = this.event.target.value;
  var guess = document.getElementById("test").value;
  alert("guess: " + guess);
  var word = document.getElementById("word").innerHTML;
  alert("word: " + word);
  //document.getElementById("guess").innerHTML = guess;
  //return false;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
