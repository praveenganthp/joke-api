// script.js
document.addEventListener("DOMContentLoaded", function () {
  const jokeContainer = document.getElementById("joke-container");

  const apiUrl = "https://v2.jokeapi.dev/joke/any?type=single&amount=5";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayJokes(data);
      console.log(data);
    })
    .catch((error) => console.log("error: ", error));

  function displayJokes(jokeData) {
    jokeContainer.innerHTML = ""; // Clear previous content

    jokeData.jokes.forEach((joke) => {
      const jokeCard = document.createElement("div");
      jokeCard.classList.add("joke-card");

      jokeCard.innerHTML = `
               <span>category : ${joke.category}</span> <p>joke : ${joke.joke}</p>
            `;

      jokeContainer.appendChild(jokeCard);
    });
  }
});
