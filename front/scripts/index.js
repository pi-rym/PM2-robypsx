// console.log(tempData);
// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const moviesContainer = document.getElementById("movies-recomendadas").querySelector(".row");

    // Iterar sobre el array tempData
    //tempData.forEach(movie => {
    function renderMovies(movies) { //renderizar movies
        movies.forEach( movie => { 
        // Crear elementos HTML dinámicamente
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = movie.poster;
        img.alt = movie.title;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.textContent = movie.title;

        const ul = document.createElement("ul");
        ul.classList.add("list-group", "list-group-flush");

        const yearLi = createListItem("Año", movie.year);
        const directorLi = createListItem("Director", movie.director);
        const durationLi = createListItem("Duración", movie.duration);
        const genreLi = createListItem("Género", movie.genre.join(", "));
        const rateLi = createListItem("Puntuación", movie.rate);

        // Adjuntar elementos creados al DOM
        ul.append(yearLi, directorLi, durationLi, genreLi, rateLi);
        cardBody.append(title, ul);
        card.append(img, cardBody);
        col.appendChild(card);
        moviesContainer.appendChild(col);
    });
    }

    // Función auxiliar para crear elementos de lista
    function createListItem(label, value) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `${label}: <span class="badge bg-secondary">${value}</span>`;
        return li;
    }

    // Peticion
    $.ajax({
        url: "https://students-api.2.us-1.fl0.io/movies",
        dataType: "json",
        success: function (data) {
          renderMovies(data);
        },
        error: function (error) {
          console.error("Error fetching movies:", error);
          $("#error-message").removeClass("d-none");
        }
      });
});
