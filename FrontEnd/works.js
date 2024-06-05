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
    const galleryModal = document.getElementById("gallery");

    gallery.innerHTML = "";
    galleryModal.innerHTML = "";

    displayWorksModal(data);
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
  } else {
    login.style.display = "block";
    logout.style.display = "none";
    connection.style.display = "none";
  }
}

logout.addEventListener("click", () => {
  localStorage.removeItem("token");
  if (token) {
    logout.style.display = "none";
  }
});

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
  } else {
    filtersToHide.style.display = "block";
    updateBtn.style.display = "none";
    updateIcon.style.display = "none";
    banner.style.display = "none";
  }
}

hideFilters();

// function enabling to open the modal and close it/ hidden form

function openModal() {
  const openBtn = document.getElementById("btn-modifier");
  const closeModal = document.getElementById("close-modal");
  const modal = document.getElementById("modal");

  const openAddBtn = document.getElementById("btn-add");
  const closeAddModal = document.getElementById("close-form");
  const addModal = document.getElementById("modal-form");
  const hiddenForm = document.getElementById("hidden-form");

  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  openAddBtn.addEventListener("click", () => {
    hiddenForm.style.display = "block";
    addModal.style.display = "block";
  });

  closeAddModal.addEventListener("click", () => {
    hiddenForm.style.display = "none";
    addModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    } else if (event.target === addModal) {
      hiddenForm.style.display = "none";
      addModal.style.display = "block";
    }
  });
}
openModal();


/*displaying works in the modal*/

async function displayWorksModal(data) {
  const galleryModal = document.getElementById("gallery");

  data.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    const deleteIcon = document.createElement("i");

    deleteIcon.classList.add("fa-solid", "fa-trash-can", "delete-icon");

    img.src = work.imageUrl;
    // Suppression des works selectionnés

    deleteIcon.addEventListener("click", async () => {
      if (confirm("Etes-vous sûr de vouloir supprimer cette photo?")) {
        try {
          const response = await fetch(
            `http://localhost:5678/api/works/${work.id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );

          if (response.ok) {
            getWorks();
          } else {
            throw new Error("La suppression de l'élément a échoué");
          }
        } catch (error) {
          console.error(
            "Erreur lors de la suppression de l'élément :",
            error.message
          );
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

const addModal = document.getElementById("modal-form");
const closeAddModal = document.getElementById("close-form");
const addBtn = document.getElementById("btn-add");
const galleryModal = document.getElementById("gallery");

const form = document.querySelector("#form-modal");

// Preview image before sending the form


document.addEventListener("DOMContentLoaded", function() {
  const imageInput = document.querySelector(".image");
  const previewImage = document.getElementById("preview-image");
  
  imageInput.addEventListener("change", function() {
      const file = this.files[0];
      
      if (file) {
          const reader = new FileReader();
          
          reader.onload = (e) => {
              previewImage.src = e.target.result;
          };
          
          reader.readAsDataURL(file);
      } else {
          previewImage.src = "#";
      }
  });
});

// category key-value

const categoryId = {
  "Objets": 1,
  "Appartements": 2,
  "Hôtels & Restaurants": 3
};

closeAddModal.addEventListener("click", () => {
    addModal.style.display = "none";
    galleryModal.style.display = "flex";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const image = document.querySelector(".image").files[0];
    const categoryValue = document.getElementById("category").value;
    const category = categoryId[categoryValue];

    if (!validateForm(title, image, categoryValue)) return;

    console.log("Form submitted with:", { title, image, category });
    

    addModal.style.display = "block";
    galleryModal.style.display = "none";


    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("category", category);

    fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Une erreur est survenue lors de l'ajout.");
            }
        })
        .then(() => {
            getWorks();
        })
        .catch((error) => {
            console.error("Erreur lors de l'ajout de l'élément :", error);
            alert("Une erreur est survenue lors de l'ajout.");
        });
});

// function to check and validate the form fields

function validateForm(title, image, categoryValue) {
  const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  let errorMessage = "";

  if (!title) {
      errorMessage += "Le titre est requis.";
  }

  if (!image) {
      errorMessage += "L'image est requise.";
  } else if (!validImageTypes.includes(image.type)) {
      errorMessage += "Le format de l'image doit être jpg, jpeg ou png.";
  }

  if (!categoryValue) {
      errorMessage += "La catégorie est requise.";
  }

  if (errorMessage) {
      alert(errorMessage);
      return false;
  }

  return true;
}

// Reset the form after submission

function resetForm() {
  const form = document.querySelector("#form-modal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
    document.querySelectorAll('input').forEach(input => input.value = '');
    document.getElementById('preview-image').src = "https://bit.ly/3ubuq5o" ; 
  });
}

resetForm();

// document.addEventListener("DOMContentLoaded", () => {
//   const addImgBtn = document.getElementById("btn-add");
//   const formModalContainer = document.getElementById("form-modal");
//   const hiddenForm = document.getElementById("hidden-form");

//   addImgBtn.addEventListener("click", () => {
//       // Clone hidden form 
//       const clonedForm = hiddenForm.cloneNode(true);
//       // Display cloned form in the modal container
//       formModalContainer.innerHTML = ""; // Clear previous content
//       formModalContainer.appendChild(clonedForm);
//       formModalContainer.style.display = "block";
//   });
// });
