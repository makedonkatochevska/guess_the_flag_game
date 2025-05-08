# Guess the Country Flag Game

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 📜 Exercise: Guess the Country Flag Game <br>
  - ⚙️ Technologies Used <br>
  - 🎮 Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>
---

## Project Description

The goal of this project is to build a simple country flag guessing game where users can guess the correct flag based on the country name. The game displays three random country flags, and the user has to click on the correct flag that matches a randomly chosen country name. The game includes:

- Randomly displaying 3 country flags.
- Choosing a random country name to be the correct answer.
- If the user clicks the correct flag:
  - The background color of the flag turns green.
  - The score is increased.
  - After a 1000ms delay, new flags are chosen.
- If the user clicks the wrong flag:
  - The background color of the flag turns red.
  - The user loses one life, and the last heart icon becomes outlined.
  - After a 1000ms delay, new flags are chosen.
- The game ends when the user runs out of lives.

## Instructions

1. The game initializes with 3 solid heart icons representing the lives and a score of 0.
2. The user needs to choose the correct flag by clicking on one of the 3 displayed flags.
3. When the correct flag is clicked, the card background turns green, and the score increases.
4. If the wrong flag is clicked, the card background turns red, and the user loses one life.
5. If the user runs out of lives, an alert saying “Game over” is displayed.
6. The game will continue to choose random country flags, with the possibility of repetition of countries.

---

## Technologies Used ⚙️

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)
- ![Font Awesome](https://img.shields.io/badge/Font_Awesome-5288D9?style=flat-square&logo=font-awesome&logoColor=white)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
- ![Flag API](https://img.shields.io/badge/Flag_API-007A5E?style=flat-square&logo=flag&logoColor=white)

---

## Demo 🎮

You can try out the game and see it in action by visiting the following link:

- [Play the Flag Guessing Game](https://guess-the-flag-makedonkatochevska.netlify.app/)

---

## Installation 🔨

To run these exercises locally, follow these steps:

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/makedonkatochevska/guess_the_flag_game.git
   ```
2. Open the exercise into the browser of choice.

---

## Usage 🚀

Once you have the project set up locally, follow these steps to interact with the game:

1. **Game Setup**:

   - Open the `index.html` file in your browser to load the game.
   - The game will display three random country flags. Out of those, one country will be the correct answer.

2. **How to Play**:

   - Click on one of the flags to guess the country name.
   - If you select the correct flag:
     - The background of the flag's card will turn **green**, indicating a correct answer.
     - You score one point, and after a 1000ms delay, the game will display a new set of 3 random flags.
   - If you click the wrong flag:
     - The background of the flag's card will turn **red**.
     - You lose one life (represented by a heart icon turning outlined).
     - After 1000ms, a new set of 3 random flags will be displayed.
     - If you lose all your lives, the game will alert "Game Over".

3. **Game Rules**:
   - The game starts with **3 lives** (represented by solid heart icons).
   - The **correct answers** score starts at 0.
   - If you guess all 3 flags correctly, you move to the next set of random flags.
   - If you lose all your lives, the game ends with the alert "Game Over".

---

## Credits 📝

This exercise was provided by **Brainster**.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or follow me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
