console.log(tempData);
// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    const peliculasContainer = document.getElementById("peliculas-recomendadas").querySelector(".row");

    // Iterar sobre el array tempData
    tempData.forEach(pelicula => {
        // Crear elementos HTML dinámicamente
        const col = document.createElement("div");
        col.classList.add("col");

        const card = document.createElement("div");
        card.classList.add("card", "h-100");

        const img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = pelicula.poster;
        img.alt = pelicula.title;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h3");
        title.classList.add("card-title");
        title.textContent = pelicula.title;

        const ul = document.createElement("ul");
        ul.classList.add("list-group", "list-group-flush");

        const yearLi = createListItem("Año", pelicula.year);
        const directorLi = createListItem("Director", pelicula.director);
        const durationLi = createListItem("Duración", pelicula.duration);
        const genreLi = createListItem("Género", pelicula.genre.join(", "));
        const rateLi = createListItem("Puntuación", pelicula.rate);

        // Adjuntar elementos creados al DOM
        ul.append(yearLi, directorLi, durationLi, genreLi, rateLi);
        cardBody.append(title, ul);
        card.append(img, cardBody);
        col.appendChild(card);
        peliculasContainer.appendChild(col);
    });

    // Función auxiliar para crear elementos de lista
    function createListItem(label, value) {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `${label}: <span class="badge bg-secondary">${value}</span>`;
        return li;
    }
});
