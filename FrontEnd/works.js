// DATA SET
// ASYNC
// Créer des blocs html avec les backstick ``

const logout = document.querySelector("#logout");
const login = document.querySelector("#login");
const token = localStorage.getItem("token");

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
  document
    .querySelectorAll(".filter-option")
    .forEach((b) => b.classList.remove("active"));
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
    const filterData = data.filter(
      (work) => work.categoryId === Number(categoryId) || categoryId === 0
    );

      const figures = filterData.map(({ id, imageUrl, title }) => {
      const figure = document.createElement("figure");

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

async function editMode() {
  const token = localStorage.getItem("token");
  const connection = document.getElementById("connection");
  if (token) {
    connection.style.display = "block";
    login.style.display = "none";
    logout.style.display = "block";
  }else{
    login.style.display = "block";
    logout.style.display = "none";
    connection.style.display = "none";
  }
}


logout.addEventListener("click", () => {
  localStorage.removeItem("token");
  if(token){
    logout.style.display = "none";
  }
})

editMode();

async function hideFilters() {
  const filtersToHide = document.getElementById("categories-picture");
  const banner = document.getElementById("banner");
  const token = localStorage.getItem("token");
  const updateBtn = document.getElementById("btn-modifier");
  const updateIcon = document.getElementById("icone-modifier");
  if (token) {
    filtersToHide.style.display = "none";
    updateBtn.style.display = "block";
    updateIcon.style.display = "block";
    banner.style.display = "block";
  }else{
    filtersToHide.style.display = "block";
    updateBtn.style.display = "none";
    updateIcon.style.display = "none";
    banner.style.display = "none";
  }
}

hideFilters();

// fonction permettant d'ouvrir la modal

function openModal() {
  const openBtn = document.getElementById("btn-modifier");
  const closeModal = document.getElementById("close-modal");
  const modal = document.getElementById("modal");

  openBtn.addEventListener("click", () => {
      modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      
  });

  window.addEventListener("click", (event) => {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });
}

openModal();

/*afficher les works dans la modale*/

async function displayWorksModal() {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();
  const galleryModal = document.getElementById("gallery");

  data.forEach((work) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      const deleteIcon = document.createElement("i");

      deleteIcon.classList.add("fa-solid", "fa-trash-can", "delete-icon")

      img.src = work.imageUrl;
      // Suppression des works selectionnés

      deleteIcon.addEventListener("click", async () => {
      if(confirm('Etes-vous sûr de vouloir supprimer cette photo?')){

      try {
        const response = await fetch(`http://localhost:5678/api/works/${work.id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.ok) {
          figure.remove();
        } else {
          throw new Error("La suppression de l'élément a échoué");
        }
      } catch (error) {
        console.error("Erreur lors de la suppression de l'élément :", error.message);
        alert("Une erreur est survenue lors de la suppression.");
      }
    }
  });

      figure.appendChild(img);
      figure.appendChild(deleteIcon);
      figure.appendChild(figcaption);
      galleryModal.appendChild(figure);
  });
}

displayWorksModal();
