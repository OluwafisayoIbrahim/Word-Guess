## Word Guess Game

This is a simple web-based word guessing game that allows players to guess a randomly selected word based on a given hint. The game provides players with a limited number of chances to guess the word correctly. If they run out of chances, the game is over, and the correct word is revealed.

### Table of Contents

- [How to Play](#how-to-play)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)

### How to Play

1. Open the game in a web browser by opening the `index.html` file.
2. Click the "Start" button to begin the game.
3. You will be provided with a hint related to a word.
4. Use the letter buttons provided to guess the letters in the word.
5. If the guessed letter is correct, it will be filled in the blanks.
6. If the guessed letter is incorrect, you will lose a chance, and the incorrect letter will be displayed.
7. Continue guessing until you either guess the entire word correctly or run out of chances.
8. If you guess the word correctly, you win the game.
9. If you run out of chances, the game is over, and the correct word is revealed.

### Features

- Randomly selects words from a predefined list.
- Provides a hint for each word to help players guess correctly.
- Limits the number of chances a player has to guess the word.
- Informs the player about correct and incorrect guesses.
- Displays the result of the game (win or loss).
- Allows for easy customization of words and hints.

### Installation

To run the Word Guess game locally, follow these steps:

1. Clone this repository to your local machine or download the ZIP file.
2. Navigate to the game directory in your terminal.
3. Open the `index.html` file in a web browser.

### Usage

- Click the "Start" button to begin a new game.
- Guess letters by clicking on the letter buttons provided.
- Pay attention to the hint to make educated guesses.
- Try to guess the entire word before running out of chances.

### Customization

You can customize the game by modifying the `script.js` file. You can change the words and hints in the `options` object at the beginning of the script to create your own word list and hints. You can also adjust the number of chances or make changes to the styling by modifying the HTML and CSS files.

```javascript
const options = {
    // Add your own words and hints here
    Word: "Hint",
    // ...
};

