let folderPath = "images/dice";
let pictureExt = ".png";

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .getElementById("img1")
  .setAttribute("src", folderPath + randomNumber1 + pictureExt);
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .getElementById("img2")
  .setAttribute("src", folderPath + randomNumber2 + pictureExt);
console.log(randomNumber2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
