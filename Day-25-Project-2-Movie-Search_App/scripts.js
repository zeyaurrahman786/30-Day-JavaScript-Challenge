document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value;
  fetch(`https://www.omdbapi.com/?apikey=bd9cd2fc&s=${query}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value;
  fetch(`https://www.omdbapi.com/?apikey=bd9cd2fc&s=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const resultsContainer = document.getElementById("results-container");
      resultsContainer.innerHTML = "";
      if (data.Search) {
        data.Search.forEach((movie) => {
          const movieElement = document.createElement("div");
          movieElement.classList.add("movie");
          movieElement.innerHTML = `
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <h2>${movie.Title}</h2>
                        <p>${movie.Year}</p>
                    `;
          resultsContainer.appendChild(movieElement);
        });
      } else {
        resultsContainer.innerHTML = "<p>No results found</p>";
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});

document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value;
  fetch(`https://www.omdbapi.com/?apikey=bd9cd2fc&s=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const resultsContainer = document.getElementById("results-container");
      resultsContainer.innerHTML = "";
      if (data.Search) {
        data.Search.forEach((movie) => {
          const movieElement = document.createElement("div");
          movieElement.classList.add("movie");
          movieElement.innerHTML = `
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <h2>${movie.Title}</h2>
                        <p>${movie.Year}</p>
                        <button class="more-info" data-imdbid="${movie.imdbID}">More Info</button>
                    `;
          resultsContainer.appendChild(movieElement);
        });
        document.querySelectorAll(".more-info").forEach((button) => {
          button.addEventListener("click", (event) => {
            const imdbID = event.target.getAttribute("data-imdbid");
            fetch(`https://www.omdbapi.com/?apikey=bd9cd2fc&i=${imdbID}`)
              .then((response) => response.json())
              .then((movie) => {
                const modal = document.createElement("div");
                modal.classList.add("modal");
                modal.innerHTML = `
                                    <div class="modal-content">
                                        <span class="close-button">&times;</span>
                                        <h2>${movie.Title}</h2>
                                        <img src="${movie.Poster}" alt="${movie.Title}">
                                        <p><strong>Year:</strong> ${movie.Year}</p>
                                        <p><strong>Plot:</strong> ${movie.Plot}</p>
                                        <p><strong>Director:</strong> ${movie.Director}</p>
                                        <p><strong>Actors:</strong> ${movie.Actors}</p>
                                    </div>
                                `;
                document.body.appendChild(modal);
                modal
                  .querySelector(".close-button")
                  .addEventListener("click", () => {
                    modal.remove();
                  });
              })
              .catch((error) =>
                console.error("Error fetching movie details:", error)
              );
          });
        });
      } else {
        resultsContainer.innerHTML = "<p>No results found</p>";
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});
