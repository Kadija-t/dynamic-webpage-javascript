// DATA SET 
// ASYNC 
// Créer des blocs html avec les backstick `` 

async function getFilters() {
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    const data = await response.json();

    const filters = document.getElementById("categories-picture");

    const allButton = createFilterButton("0", "Tous");
    filters.appendChild(allButton);

    data.forEach((item) => {
      const button = createFilterButton(item.id, item.name);
      filters.appendChild(button);
    });

    filters.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
        setActiveButton(event.target);
        const categoryId = Number(event.target.value);
        getWorks(categoryId);
      }
    });
  } catch (error) {
    console.error("Impossible de récupérer les filtres :", error);
  }
}

function setActiveButton(button) {
  document.querySelectorAll(".filter-option").forEach((b) => b.classList.remove("active"));
  button.classList.add("active");
}

function createFilterButton(value, text) {
  const button = document.createElement("button");
  button.className = "filter-option";
  button.value = value;
  button.textContent = text;
  return button;
}

async function getWorks(categoryId = 0) {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    const data = await response.json();
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";
    const filterData = data.filter((work) => work.categoryId === Number(categoryId) || categoryId === 0);

    const figures = filterData.map(({ id, imageUrl, title }) => {
      const figure = document.createElement("figure");
      
      //<figure data-id="3"></figure> 
      figure.dataset.id = id;

      const img = document.createElement("img");
      img.src = imageUrl;
      img.alt = title;

      const figcaption = document.createElement("figcaption");
      figcaption.textContent = title;

      figure.appendChild(img);
      figure.appendChild(figcaption);

      return figure;
    });

    figures.forEach((figure) => gallery.appendChild(figure));
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getFilters().then(() => {
    const allButton = document.querySelector('.filter-option[value="0"]');
    if (allButton) {
      allButton.classList.add("active");
    }
    getWorks(0).then(() => console.log("Travaux chargés."));
  });
});

