const options = {
    Airplane: "A vehicle designed for air travel",
    Ears: "Organs of hearing and balance in humans and other mammals",
    Piano: "A musical instrument with a keyboard",
    Angry: "Feeling or showing strong annoyance, displeasure, or rage",
    Elephant: "A large plant-eating mammal with a trunk and long curved ivory tusks",
    Pinch: "To grip something tightly between finger and thumb",
    Baby: "A very young child",
    Fish: "A limbless cold-blooded vertebrate animal with gills and fins",
    Reach: "To stretch out an arm in a specified direction to touch or grasp something",
    Ball: "A solid or hollow spherical or egg-shaped object that is kicked, thrown, or hit in a game",
    Flick: "To propel something with a sudden sharp movement",
    Remote: "A device used to control or operate a television or other electronic device from a distance",
    Baseball: "A ball game played between two teams of nine on a field with a diamond-shaped circuit of four bases",
    Football: "A form of team game played in North America with an oval ball on a field marked out as a gridiron",
    Roll: "To move or cause to move in a particular direction by turning over and over on an axis",
    Basketball: "A game played between two teams of five players in which goals are scored by throwing a ball through a netted hoop",
    Fork: "A utensil with two or more prongs, used for eating or serving food",
    Sad: "Feeling or showing sorrow; unhappy",
    Bounce: "To rebound off a surface, typically in a rhythmic manner",
    Giggle: "To laugh lightly in a nervous, affected, or silly manner",
    Wash: "An activity which involves the cleaning of any item",
};

const message = document.getElementById("message");
const hintRef = document.querySelector(".hint-ref");
const controls = document.querySelector(".controls-container");
const startBtn = document.getElementById("start");
const letterContainer = document.getElementById("letter-container");
const userInpSection = document.getElementById("user-input-section");
const resultText = document.getElementById("result");
const word = document.getElementById("word");
const words = Object.keys(options);

let randomWord = "",
  randomHint = "";
let winCount = 0,
  lossCount = 0;

const generateRandomValue = (array) => Math.floor(Math.random() * array.length);

const blocker = () => {
    let lettersButtons = document.querySelectorAll(".letters");
    for (let button of lettersButtons) {
        button.disabled = true;
    }
};

startBtn.addEventListener("click", () => {
    controls.classList.add("hide");
    init();
});

const stopGame = () => {
    controls.classList.remove("hide");
};

const generateWord = () => {
    letterContainer.classList.remove("hide");
    userInpSection.innerText = "";
    randomWord = words[generateRandomValue(words)];
    randomHint = options[randomWord];
    hintRef.innerHTML = `<div id="wordHint">
    <span>Hint:</span>${randomHint}</div>`;
    let displayItem = "";
    randomWord.split("").forEach((value) => {
        displayItem += '<span class="inputSpace">_</span>';
    });

    userInpSection.innerHTML = displayItem;
    userInpSection.innerHTML += `<div id='chanceCount'>Chances Left: ${lossCount}</div>`;
};

const init = () => {
    winCount = 0;
    lossCount = 5;
    randomWord = "";
    word.innerText = "";
    randomHint = "";
    message.innerText = "";
    userInpSection.innerHTML = "";
    letterContainer.classList.add("hide");
    letterContainer.innerHTML = "";
    generateWord();

    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);

        button.addEventListener("click", () => {
            message.innerText = `Correct Letter`;
            message.style.color = "#008000";
            let charArray = randomWord.toUpperCase().split("");
            let inputSpace = document.getElementsByClassName("inputSpace");

            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    if (char === button.innerText) {
                        button.classList.add("correct");

                        inputSpace[index].innerText = char;

                        winCount += 1;

                        if (winCount == charArray.length) {
                            resultText.innerHTML = "You won";
                            startBtn.innerText = "Restart";

                            blocker();
                        }
                    }
                });
            } else {
                button.classList.add("incorrect");
                lossCount -= 1;
                document.getElementById("chanceCount").innerText = `Chances Left: ${lossCount}`;
                message.innerText = `Incorrect Letter`;
                message.style.color = "#ff0000";
                if (lossCount == 0) {
                    word.innerHTML = `The word was: <span>${randomWord}</span>`;
                    resultText.innerHTML = "Game Over";
                    blocker();
                }
            }

            button.disabled = true;
        });

        letterContainer.appendChild(button);
    }
};

window.onload = () => {
    init();
};
