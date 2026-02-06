// YOUR CODE HERE
//Part One 
const color1 = document.querySelector("#blue");
const color2= document.querySelector("#green");
const color3 = document.querySelector("#pink");
const color4 = document.querySelector("#black");
const Radiobox = document.querySelector("#radio-output");

const choseblue = () => {
  Radiobox.textContent = 'You picked blue 💙';
}
const chosegreen = () => {
  Radiobox.textContent =  `You picked green 💚`;
}
const chosepink = () => {
  Radiobox.textContent = `You picked pink 💕`;
}
const choseblack = () => {
  Radiobox.textContent = `You picked black 🖤`;
}
color1.addEventListener("click", choseblue);
color2.addEventListener("click", chosegreen);
color3.addEventListener("click", chosepink);
color4.addEventListener("click", choseblack);
// getRandomInt() - gets a random number between 1 and 100
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.
//Part two
