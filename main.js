// get all countries url https://restcountries.com/v3.1/all

//html elements
const countryContainer = document.querySelector("#countryContainer");
const correctAnswersContainer = document.querySelector("#score b");
const livesContainer = document.querySelector("#lives");
const countryNameElement = document.querySelector("#countryName");

//initial variables
let correctAnswers = 0;
let lives = 3;
let gameTimeout; // Variable to store the timeout ID
let allCountries = [];

//Fetch and handle data
async function fetchAndHandleData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log(data);

    // Save all countries so we can reuse them later
    allCountries = data;

    // Call function to get random countries
    const countries = getRandomCountries(data);

    // Call function to render countries
    renderCountries(countries);
  } catch (error) {
    document.querySelector(".container").innerHTML = `
     <div class="bg-danger text-center py-4 mt-5">
        <h2 >Error fetching data</h2>
        <p class="mb-0">${error.message}</p>
        </div>
        `;
  }
}

// Function to get random countries
function getRandomCountries(data) {
  return [...data].sort(() => Math.random() - 0.5).slice(0, 3);
}

// Functions to render countries
function renderCountries(countries) {
  countryContainer.innerHTML = "";

  // choose one correct answer
  const correctCountry =
    countries[Math.floor(Math.random() * countries.length)];
  countryNameElement.textContent = `Which flag belongs to ${correctCountry.name.common}?`;

  countries.forEach((country) => {
    const card = document.createElement("div");
    card.className = "col-md-4 text-center";
    card.innerHTML = `
    <div class="card shadow p-3 mb-3 rounded" data-name="${country.name.common}">
    <img src="${country.flags.svg}" class="card-img-top" style="height: 150px; object-fit: contain;">
    </div>
    `;
    countryContainer.appendChild(card);

    const cardDiv = card.querySelector(".card");
    cardDiv.addEventListener("click", () => {
      gameLogic(cardDiv, country.name.common === correctCountry.name.common);
    });
  });
}

// Function to handle game logic
function gameLogic(cardElement, isCorrect) {
  // Game logic to handle correct answers and lives
  // Update correctAnswers and livesContainer accordingly
  if (isCorrect) {
    cardElement.classList.add("bg-success");
    correctAnswers++;
    correctAnswersContainer.textContent = correctAnswers;
  } else {
    cardElement.classList.add("bg-danger");
    lives--;
    updateLives();
  }

  console.log("Correct answers:", correctAnswers, "Lives left:", lives);

  // Delay next round
  clearTimeout(gameTimeout);
  gameTimeout = setTimeout(() => {
    if (lives <= 0) {
      alert("Game over");
      resetGame();
    } else {
      const countries = getRandomCountries(allCountries);
      renderCountries(countries);
    }
  }, 1000);
}

// Helper function to update hearts (lives UI)
function updateLives() {
  const heartIcons = livesContainer.querySelectorAll("i");
  heartIcons.forEach((icon, index) => {
    icon.className =
      index < lives ? "fas fa-heart fa-3x" : "far fa-heart fa-3x";
  });
}

// Helper function to reset game
function resetGame() {
  correctAnswers = 0;
  lives = 3;
  correctAnswersContainer.textContent = correctAnswers;
  updateLives();
  const countries = getRandomCountries(allCountries);
  renderCountries(countries);
}

// Fetch function on load
fetchAndHandleData();
