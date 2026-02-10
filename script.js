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
//Part Two
const numguessinginput = document.querySelector("#num-input");
const numguessingoutput = document.querySelector("#num-output");
const randomnum = Math.floor(Math.random() * 100) + 1;


const numguesser = () => {
    if (numguessinginput.value == randomnum){
        numguessingoutput.textContent = `${numguessinginput.value} was correct!`;
    } else {
        numguessingoutput.textContent = `${numguessinginput.value} was wrong.`;
    }
}


numguessinginput.addEventListener("change" , numguesser);
//Part 3

let continentscore = 0;
const continentinput = document.querySelector("#text-input");
const continentoutput = document.querySelector("#sr-continent-alert");
const continentchecker = () => {
    
    if (continentinput.value == "North America"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Europe"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Asia"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "South America"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Africa"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Australia"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else { if (continentinput.value == "Antarctica"){
        continentoutput.textContent = `${continentinput.value} is a continent!`
        continentscore += 1;
    } else {
        continentoutput.textContent = `${continentinput.value} isnt a continent.`
    }}}}}}}
    continentinput.value = "";


    if(continentscore === 7){
        continentinput.value = "correct!";
        continentinput.disabled = true;
        continentoutput.textContent = "";
    }
}

continentinput.addEventListener("change" , continentchecker);
// Part 4
 const form = document.getElementById('back_color');
        const colorInput = document.getElementById('color');

        
        form.addEventListener('submit', function(event) {
            
            event.preventDefault();

            const selectedColor = colorInput.value;
            document.body.style.backgroundColor = selectedColor;
        });
