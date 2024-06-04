// 1. enlever decoration login - logout
// 2. enlever les filtres + mettre incone avec le modifier à coté de Mes Projets
// 3. ajouter la bannière noire
// 4. creer et affichier modale
// 5. affciher les works dans la modale
// 6. oprtion supprimer un work 
// 7. option editer un work

// 1. enlever decoration login - logout

OK

// 2. enlever les filtres + mettre incone avec le modifier à coté de Mes Projets

OK 

// 3. ajouter la bannière noire

OK

// 4. creer et afficher modale


OK 

//  6. oprtion supprimer un work 

OK

// 7. option editer un work

Mise en place modale => design et inputs a travailler






<!-- <!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Sophie Bluel - Architecte d'intérieur</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Work+Sans&display=swap"
      rel="stylesheet"
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <meta name="description" content="" />
    <link rel="stylesheet" href="./assets/style.css" />
  </head>
  <body>
    <section id="banner">
    <div class="black-banner">
        <i class="fa-solid fa-pen-to-square"></i>
        <span class="mode-edition"> Mode édition</span>
      </div>
    </section>
    <header>
      <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
      <nav>
        <ul>
          <li>projets</li>
          <li>contact</li>
          <li id="login"><a href="login.html" >login</a></li>
          <li id="logout"><a href="">logout</a></li>
          <li><img src="./assets/icons/instagram.png" alt="Instagram" /></li>
        </ul>
      </nav>
    </header>
</div>
<div id="connection"><p></p></div>
    <main>
      <section id="introduction">
        <figure>
          <img src="./assets/images/sophie-bluel.png" alt="" />
        </figure>
        <article>
          <h2>Designer d'espace</h2>
          <p>
            Je raconte votre histoire, je valorise vos idées. Je vous accompagne
            de la conception à la livraison finale du chantier.
          </p>
          <p>
            Chaque projet sera étudié en commun, de façon à mettre en valeur les
            volumes, les matières et les couleurs dans le respect de l’esprit
            des lieux et le choix adapté des matériaux. Le suivi du chantier
            sera assuré dans le souci du détail, le respect du planning et du
            budget.
          </p>
          <p>
            En cas de besoin, une équipe pluridisciplinaire peut-être constituée
            : architecte DPLG, décorateur(trice)
          </p>
        </article>
      </section>
      <section id="portfolio">
        <h2>Mes Projets
          <i id="icone-modifier" class="fa-solid fa-pen-to-square"></i>
          <button  id="btn-modifier"> modifier</button>
          <div class="modal" id="modal">
            <div class="modal-content">
            <div id="close-modal" ><i class="fa-solid fa-xmark"></i></div>
            <h3>Galerie photo</h3>
            <div id="modal-gallery">
          <div class="categories-picture"></div>
          <div id="gallery"></div>
          </div>
          <hr />
          <button id="btn-add">Ajouter une photo</button>
          <div id="hidden-form" style="display: none;">
            <div id="modal-form" class="modal">
              <div class="content-form">
                <div id="close-form"><i class="fa-solid fa-xmark"></i></div>
                <form id="form-modal" action="">
                  <div id="form-preview">
                    <h3>Aperçu de l'image</h3>
                    <img id="preview-image" src="https://bit.ly/3ubuq5o" alt="Aperçu de l'image">
                  </div>
                  <label for="image">Image</label>
                  <input class="image" name="image" type="file" required>
                  <label for="title">Titre</label>
                  <input id="title" name="title" type="text" required>
                  <label for="category">Catégorie</label>
                  <select id="category" name="category" required>
                    <option value="Objets">Objets</option>
                    <option value="Appartements">Appartements</option>
                    <option value="Hôtels & Restaurants">Hôtels & Restaurants</option>
                  </select>
                  <button type="submit">Envoyer</button>
                </form>
              </div>
            </div>
          </div>
        </h2>
        <div id="categories-picture"></div>
        <div class="gallery"></div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Vous avez un projet ? Discutons-en !</p>
        <form action="#" method="post">
          <label for="name">Nom</label>
          <input type="text" name="name" id="name" />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
          <label for="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      </section>
    </main>
    <footer>
      <nav>
        <ul>
          <li>Mentions Légales</li>
        </ul>
      </nav>
    </footer>
    <script defer src="works.js"></script>
  </body>
</html> -->


js 

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

// fonction permettant d'ouvrir la modal

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
    hiddenForm.style.display = "none";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  openAddBtn.addEventListener("click", () => {
    // Clear the content of the modal
    const modalContent = document.querySelector("#modal .content");
    if (modalContent) {
      modalContent.innerHTML = "";
    }

    // Display the hidden form inside the modal
    hiddenForm.style.display = "block";
    modal.innerHTML = "";
    modal.appendChild(hiddenForm);

    // Show the modal
    hiddenForm.querySelector('.modal').style.display = "block";
  });

  closeAddModal.addEventListener("click", () => {
    hiddenForm.style.display = "none";
    hiddenForm.querySelector('.modal').style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == addModal) {
      hiddenForm.style.display = "none";
      hiddenForm.querySelector('.modal').style.display = "none";
    }
  });
}

openModal();
;


// function openModal() {
//   const openBtn = document.getElementById("btn-modifier");
//   const closeModal = document.getElementById("close-modal");
//   const modal = document.getElementById("modal");

//   const openAddBtn = document.getElementById("btn-add");
//   const closeAddModal = document.getElementById("close-form");
//   const addModal = document.getElementById("modal-form");

//   openBtn.addEventListener("click", () => {
//     modal.style.display = "block";
//     addModal.style.display = "none";
//   });
//   closeModal.addEventListener("click", () => {
//     modal.style.display = "none";
//   });

//   openAddBtn.addEventListener("click", () => {
//     addModal.style.display = "block";
//   });

//   closeAddModal.addEventListener("click", () => {
//     addModal.style.display = "none";
//   });

//   window.addEventListener("click", (event) => {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     } else if (event.target == addModal) {
//       addModal.style.display = "none";
//     }
//   });
// }

// openModal();

/*afficher les works dans la modale*/

async function displayWorksModal(data) {
  //const response = await fetch("http://localhost:5678/api/works");
  //const data = await response.json();
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
            // figure.remove();
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

document.addEventListener("DOMContentLoaded", () => {
  const addImgBtn = document.getElementById("btn-add");
  const formModalContainer = document.getElementById("form-modal");
  const hiddenForm = document.getElementById("hidden-form");

  addImgBtn.addEventListener("click", () => {
      // Clone hidden form 
      const clonedForm = hiddenForm.cloneNode(true);
      // Display cloned form in the modal container
      formModalContainer.innerHTML = ""; // Clear previous content
      formModalContainer.appendChild(clonedForm);
      formModalContainer.style.display = "block";
  });
});
