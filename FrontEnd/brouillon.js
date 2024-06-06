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






.modal-form {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
	display: none; 
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	font-size: medium;
	border: 1px solid transparent;
	box-shadow: 6px 6px 25px rgba(179, 178, 178, 0.5);
	padding: 40px 80px;
	width: 40%;
	max-width: 400px;
	height: auto;
  }
  

.content-form {
	background-color: #fefefe;
	margin: 15% auto;
	width:70%;
	height: 70%;
	max-width: 600px;
	max-height: 80%;
	padding: 40px 80px;
	border: 1px solid #888; 
  }


#form-preview {
	text-align: center;
	margin-bottom: 20px;
}

#preview-image {
	width: 100%;
	height: auto; 
	object-fit: cover; 
  }
  


  
  #form-modal img {
	width: 100%;
	height: 100%;
	object-fit: cover; 
  }


  #modal-form {
	position: fixed;
	top: 50%; 
	left: 50%; 
	transform: translate(-50%, -50%); 
	z-index: 2; 
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	font-size: medium;
	border: 1px solid transparent;
	box-shadow: 6px 6px 25px rgba(179, 178, 178, 0.5);
	padding: 40px 80px; 
	width: 40%; 
	max-width: 400px; 
	height: 400px; 
}



/* css </main>

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/** end reset css**/
body {
	margin:0px;
	padding: 0px;
	font-family: 'Work Sans' ;
	font-size: 14px;
}
header {
	display: flex;
	justify-content: space-between;
	margin: 50px 150px;
	
}
section {
	margin: 20px 0
}

main {
	margin: 50px 150px;
}

h1{
	display: flex;
	flex-direction: column;
	font-family: 'Syne';
	font-size: 22px;
	font-weight: 800;
	color: #B1663C
}

h1 > span {
	font-family: 'Work Sans';
	font-size:10px;
	letter-spacing: 0.1em;
;
}

h2 {
	font-family: 'Syne';
	font-weight: 700;
	font-size: 30px;
	color: #1D6154
}
nav ul {
	display: flex;
	align-items: center;
	list-style-type: none;

}
nav li {
	padding: 0 10px;
	font-size: 1.2em;
}

li:hover {
	color: #B1663C;
}
#introduction {
	display: flex;
	align-items: center;
}
#introduction figure {
	flex: 1
}
#introduction img {
	display: block;
	margin: auto;
	width: 80%;
}

#introduction article {
	flex: 1
}
#introduction h2 {
	margin-bottom: 1em;
}

#introduction p {
	margin-bottom: 0.5em;
}
#portfolio h2 {
	text-align: center;
	margin-bottom: 1em;
}

.gallery {
	width: 100%;
	display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px; 
	object-fit: cover;
}

.gallery img {
	width: 100%;
	height:100%;
	object-fit: cover;
	overflow: hidden;
}

.gallery figure {
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
	box-sizing: border-box;
	
}

#contact {
	width: 50%;
    margin: auto;
}
#contact > * {
	text-align: center;

}
#contact h2{
	margin-bottom: 20px;
}
#contact form {
	text-align: left;
	margin-top:30px;
	display: flex;
	flex-direction: column;
}

#contact input {
	height: 50px;
	font-size: 1.2em;
	border: none;
	box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
}
#contact label {
	margin: 2em 0 1em 0;
}
#contact textarea {
	border: none;
	box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
}

input[type="submit"]{
	font-family: 'Syne';
	font-weight: 700;
	color: white;
	background-color: #1D6154;
	margin : 2em auto ;
	width: 180px;
	text-align: center;
	border-radius: 60px ;
}

footer nav ul {
	display: flex;
	justify-content: flex-end;
	margin: 2em
}

.filter-option {
	background:white;
	color: rgb(29, 97, 84); 
	border:1px solid rgb(29, 97, 84);
	padding-right:15px;
	padding-left:15px;
	padding-bottom:8px;
	padding-top:8px;
	border-radius:50px ;
	margin-bottom: 20px;
	margin-right: 5px;
}

.active {
	background:rgb(29, 97, 84);
	color: white;
	padding:8px;
	padding-right:15px;
	padding-left:15px;
	padding-bottom:8px;
	padding-top:8px;
	border: 1px solid rgb(29, 97, 84);
	border-radius:20px ;
}
#categories-picture {
	margin-left: 200px;
}

.formContainer {
	display: flex;
	align-items: center;
}

#form {
	width: 30% ;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-left: 400px;
	font-weight: 300px;
	font-size: larger;
}

#h2-login {
	margin-left:120px;
	margin-bottom: 15px;
}

#form input {
	height: 50px;
	background-color: white;
	font-size: medium;
	border: 1px solid transparent;
	box-shadow: 6px 6px 25px rgba(179, 178, 178, 0.5);
	margin-bottom: 8px;
}

#form button{
	width: 60%;
	height: 50%;
	border-radius: 30px;
	background-color: rgb(29, 97, 84);
	border: 1px solid transparent;
	color: white;
	font-size: large;
	padding: 10px;
	margin-top: 20px;
	margin-left: 70px;
}

#email {
	margin-top: 10px;
	margin-bottom: 10px;
} 

#password {
	margin-top: 10px;
	margin-bottom: 10px;
}

.mdp-oublie {
	margin-left: 490px;
	margin-top: 20px;
	font-size: medium;
	text-decoration: underline;
}

footer{
	margin-top: 800px;
	margin-left: 920px;
}

.error{
	color:red;
	font-weight: 800;
	text-align: center;
	margin-top: 10px;
}

.d-none{
	display: none;
}

.d-block{
    display: block;
}

a {
	text-decoration: none;
	color: black;
}

h2 {
	display:flex;
	align-items: center;
	justify-content: center;
}

#icone-modifier {
	color: rgb(1, 4, 8);
	margin-left : 20px;
	font-size: 20px;
}

#btn-modifier {
	color: black;
	border: none;
	margin-left: 0px;
	background-color: white;
	font-size: 15px;
}

section #banner{
	width: 100%;
	max-width: 1920px;
	margin: 0px;
	padding: 0px;
}

#banner {
	margin: 0px;
	height: 100%;
	background-color: black;
	padding-bottom: 20px;
	padding-left: 700px; 
	justify-content: center;
	padding-top: 20px;
	color: aliceblue;
}

.mode-edition {
	color: white;
}

.modal {
	display: none;
	position: fixed; 
	z-index: 2; 
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto; 
	background-color: rgba(0,0,0,0.4); 	
}

.modal-content {
	position: relative;
	background-color: #fefefe;
	margin: 15% auto;
	width:40%;
	height: auto;
	max-width: 400px;
	max-height: 80%;
	padding: 50px 80px;
	border: 1px solid #888; 
}

#close-modal {
	position: absolute;
	top: 10px;
	right: 15px;
	cursor: pointer;
	color: black;
}

#gallery {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	margin-top: 30px;
}


h3 {
	color: black;
	font-size: 2em;
	margin-left: 100px;
	font-weight: normal;
	font-family:Arial, Helvetica, sans-serif;
}

#gallery figure {
	width: 18%;
	margin: 10px;
	text-align: center;
	position: relative;
	object-fit: cover;
	overflow: hidden;
	padding: 0px;
	box-sizing: border-box;
}

#gallery img {
	width:100%;
	height: 100%;
	object-fit: cover;
}

#gallery figcaption {
	color: black;
	font-size: 15px;
	font-weight:normal;
}

.delete-icon {
	position: absolute;
	top: 5px;
	right: 5px;
	color: white;
	cursor: pointer;
	background: black;
	padding: 5px;
	font-size: .4em;
}

button {
	background-color: rgb(29, 97, 84) ;
	border-radius: 20px;
	color: white;
	margin-left: 130px;
	margin-top: 10px;;
	border: 8px solid rgb(29, 97, 84);
}

/* code to work */

.modal-form {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	display: none; 
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	font-size: medium;
	border: 1px solid transparent;
	box-shadow: 6px 6px 25px rgba(179, 178, 178, 0.5);
	padding: 40px 80px;
	width: 40%;
	max-width: 400px;
	height: auto;
}

.content-form {
	background-color: #fefefe;
	margin: 15% auto;
	width:70%;
	height: 70%;
	max-width: 600px;
	max-height: 80%;
	padding: 40px 80px;
	border: 1px solid #888; 
}

#modal-form {
	position: fixed;
	width: 50%;
	height: 50%; 
	top: 60%; 
	left:50%;
	transform: translate(-50%, -50%); 
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	font-size: small;
	box-sizing: border-box;
	overflow:hidden
}

#content-form {
	background-color: #fefefe;
	margin: 0px auto;
	width:100%;
	padding: 40px;
	box-sizing: border-box;
	/* border: 1px solid #888;  */
}

#modal-form input,
#modal-form select {
	width: 100%;
	margin-bottom: 20px;
}

#modal-form label {
	width: 100%;
	margin-bottom: 10px;
}

#close-modal {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	color: black;
} 


/* #form-modal {
	margin: 0px;
	width: 100%;
	height: 100%;
}  */

/* #form-preview {
	width: 70px;
	height: 70px;
	text-align: center;
	margin-bottom: 20px;
} */

#form-preview h3 {
	font-size: small;
}

#preview-image {
	width: 100%;
	height: auto;
	object-fit: cover; 
}

/* #modal-form input {
	margin-bottom: 10px;
	width: 80%;
	height: 60px;
	padding: 0 10px;
} */



/* #form-modal .img {
	width: 100%;
	height: 100%;
	object-fit: cover; 
} */

#modal-form button {
	width: 100%;
}


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


/*afficher les works dans la modale*/

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


CSS

/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/** end reset css**/
body {
	margin:0px;
	padding: 0px;
	font-family: 'Work Sans' ;
	font-size: 14px;
}
header {
	display: flex;
	justify-content: space-between;
	margin: 50px 150px;
	
}
section {
	margin: 20px 0
}

main {
	margin: 50px 150px;
}

h1{
	display: flex;
	flex-direction: column;
	font-family: 'Syne';
	font-size: 22px;
	font-weight: 800;
	color: #B1663C
}

h1 > span {
	font-family: 'Work Sans';
	font-size:10px;
	letter-spacing: 0.1em;
;
}

h2 {
	font-family: 'Syne';
	font-weight: 700;
	font-size: 30px;
	color: #1D6154
}
nav ul {
	display: flex;
	align-items: center;
	list-style-type: none;

}
nav li {
	padding: 0 10px;
	font-size: 1.2em;
}

li:hover {
	color: #B1663C;
}
#introduction {
	display: flex;
	align-items: center;
}
#introduction figure {
	flex: 1
}
#introduction img {
	display: block;
	margin: auto;
	width: 80%;
}

#introduction article {
	flex: 1
}
#introduction h2 {
	margin-bottom: 1em;
}

#introduction p {
	margin-bottom: 0.5em;
}
#portfolio h2 {
	text-align: center;
	margin-bottom: 1em;
}

.gallery {
	width: 100%;
	display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px; 
	object-fit: cover;
}

.gallery img {
	width: 100%;
	height:100%;
	object-fit: cover;
	overflow: hidden;
}

.gallery figure {
	width: 100%;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
	box-sizing: border-box;
	
}

#contact {
	width: 50%;
    margin: auto;
}
#contact > * {
	text-align: center;

}
#contact h2{
	margin-bottom: 20px;
}
#contact form {
	text-align: left;
	margin-top:30px;
	display: flex;
	flex-direction: column;
}

#contact input {
	height: 50px;
	font-size: 1.2em;
	border: none;
	box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
}
#contact label {
	margin: 2em 0 1em 0;
}
#contact textarea {
	border: none;
	box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.09);
}

input[type="submit"]{
	font-family: 'Syne';
	font-weight: 700;
	color: white;
	background-color: #1D6154;
	margin : 2em auto ;
	width: 180px;
	text-align: center;
	border-radius: 60px ;
}

footer nav ul {
	display: flex;
	justify-content: flex-end;
	margin: 2em
}

.filter-option {
	background:white;
	color: rgb(29, 97, 84); 
	border:1px solid rgb(29, 97, 84);
	padding-right:15px;
	padding-left:15px;
	padding-bottom:8px;
	padding-top:8px;
	border-radius:50px ;
	margin-bottom: 20px;
	margin-right: 5px;
}

.active {
	background:rgb(29, 97, 84);
	color: white;
	padding:8px;
	padding-right:15px;
	padding-left:15px;
	padding-bottom:8px;
	padding-top:8px;
	border: 1px solid rgb(29, 97, 84);
	border-radius:20px ;
}
#categories-picture {
	margin-left: 200px;
}

.formContainer {
	display: flex;
	align-items: center;
}

#form {
	width: 30% ;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-left: 400px;
	font-weight: 300px;
	font-size: larger;
}

#h2-login {
	margin-left:120px;
	margin-bottom: 15px;
}

#form input {
	height: 50px;
	background-color: white;
	font-size: medium;
	border: 1px solid transparent;
	box-shadow: 6px 6px 25px rgba(179, 178, 178, 0.5);
	margin-bottom: 8px;
}

#form button{
	width: 60%;
	height: 50%;
	border-radius: 30px;
	background-color: rgb(29, 97, 84);
	border: 1px solid transparent;
	color: white;
	font-size: large;
	padding: 10px;
	margin-top: 20px;
	margin-left: 70px;
}

#email {
	margin-top: 10px;
	margin-bottom: 10px;
} 

#password {
	margin-top: 10px;
	margin-bottom: 10px;
}

.mdp-oublie {
	margin-left: 490px;
	margin-top: 20px;
	font-size: medium;
	text-decoration: underline;
}

footer{
	margin-top: 800px;
	margin-left: 920px;
}

.error{
	color:red;
	font-weight: 800;
	text-align: center;
	margin-top: 10px;
}

.d-none{
	display: none;
}

.d-block{
    display: block;
}

a {
	text-decoration: none;
	color: black;
}

h2 {
	display:flex;
	align-items: center;
	justify-content: center;
}

#icone-modifier {
	color: rgb(1, 4, 8);
	margin-left : 20px;
	font-size: 20px;
}

#btn-modifier {
	color: black;
	border: none;
	margin-left: 0px;
	background-color: white;
	font-size: 15px;
}

section #banner{
	width: 100%;
	max-width: 1920px;
	margin: 0px;
	padding: 0px;
}

#banner {
	margin: 0px;
	height: 100%;
	background-color: black;
	padding-bottom: 20px;
	padding-left: 700px; 
	justify-content: center;
	padding-top: 20px;
	color: aliceblue;
}

.mode-edition {
	color: white;
}

.modal {
	display: none;
	position: fixed; 
	z-index: 2; 
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto; 
	background-color: rgba(0,0,0,0.4); 	
}

.modal-content {
	position: relative;
	background-color: #fefefe;
	margin: 15% auto;
	width:40%;
	height: auto;
	max-width: 400px;
	max-height: 80%;
	padding: 50px 80px;
	border: 1px solid #888; 
}

#close-modal {
	position: absolute;
	top: 10px;
	right: 15px;
	cursor: pointer;
	color: black;
}

#gallery {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: start;
	margin-top: 30px;
}


h3 {
	color: black;
	font-size: 2em;
	margin-left: 100px;
	font-weight: normal;
	font-family:Arial, Helvetica, sans-serif;
}

#gallery figure {
	width: 18%;
	margin: 10px;
	text-align: center;
	position: relative;
	object-fit: cover;
	overflow: hidden;
	padding: 0px;
	box-sizing: border-box;
}

#gallery img {
	width:100%;
	height: 100%;
	object-fit: cover;
}

#gallery figcaption {
	color: black;
	font-size: 15px;
	font-weight:normal;
}

.delete-icon {
	position: absolute;
	top: 5px;
	right: 5px;
	color: white;
	cursor: pointer;
	background: black;
	padding: 5px;
	font-size: .4em;
}

button {
	background-color: rgb(29, 97, 84) ;
	border-radius: 20px;
	color: white;
	margin-left: 130px;
	margin-top: 10px;;
	border: 8px solid rgb(29, 97, 84);
}

/* code to work */

.modal-form {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	display: none; 
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	font-size: medium;
	border: 1px solid transparent;
	box-shadow: 6px 6px 25px rgba(179, 178, 178, 0.5);
	padding: 40px 80px;
	/* width: 40%;
	max-width: 400px;
	height: auto; */
	width: 50%; 
	max-width: 600px; 
	height: 50%; 
	max-height: 80%;
	box-sizing: border-box; 
	overflow: hidden; 

}

.content-form {
	background-color: #fefefe;
	/* margin: 15% auto; */
	width:100%;
	/* height: 70%;
	max-width: 600px;
	max-height: 80%; */
	padding: 40px 80px;
	/* border: 1px solid #888;  */
	box-sizing: border-box;
}

#modal-form {
	width: calc(40% - 20px);
	height: calc(80% - 20px);
	margin-bottom: 20px;
	/* position: fixed;
	width: 50%;
	height: 50%; 
	top: 60%; 
	left:50%;
	transform: translate(-50%, -50%); 
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	font-size: small;
	box-sizing: border-box;
	overflow:hidden */
}

#content-form {
	background-color: #fefefe;
	margin: 0px auto;
	width:100%;
	padding: 40px;
	box-sizing: border-box;
	/* border: 1px solid #888;  */
}

#modal-form input,
#modal-form select {
	width: 100%;
	margin-bottom: 20px;
}

#modal-form label {
	width: 100%;
	margin-bottom: 10px;
}

#close-modal {
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	color: black;
} 


#form-preview h3 {
	font-size: small;
}

#preview-image {
	width: 100%;
	height: auto;
	object-fit: cover; 
}

#modal-form button {
	width: 100%;
}

html  

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Sophie Bluel - Architecte d'intérieur</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Work+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <meta name="description" content="" />
    <link rel="stylesheet" href="./assets/style.css" />
  </head>
  <body>
    <section id="banner">
      <div class="black-banner">
        <i class="fa-solid fa-pen-to-square"></i>
        <span class="mode-edition">Mode édition</span>
      </div>
    </section>
    <header>
      <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
      <nav>
        <ul>
          <li>projets</li>
          <li>contact</li>
          <li id="login"><a href="login.html">login</a></li>
          <li id="logout"><a href="">logout</a></li>
          <li><img src="./assets/icons/instagram.png" alt="Instagram" /></li>
        </ul>
      </nav>
    </header>
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
          <button id="btn-modifier">modifier</button>
        </h2>
        <div class="modal" id="modal">
          <div class="modal-content">
            <div id="close-modal"><i class="fa-solid fa-xmark"></i></div>
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
                    <hr />
                    <button type="submit">Valider</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          <input type="email name="email" id="email" />
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
</html>

06/06

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Sophie Bluel - Architecte d'intérieur</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Work+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <meta name="description" content="" />
    <link rel="stylesheet" href="./assets/style.css" />
  </head>
  <body>
    <section id="banner">
      <div class="black-banner">
        <i class="fa-solid fa-pen-to-square"></i>
        <span class="mode-edition">Mode édition</span>
      </div>
    </section>
    <header>
      <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
      <nav>
        <ul>
          <li>projets</li>
          <li>contact</li>
          <li id="login"><a href="login.html">login</a></li>
          <li id="logout"><a href="">logout</a></li>
          <li><img src="./assets/icons/instagram.png" alt="Instagram" /></li>
        </ul>
      </nav>
    </header>
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
          <button id="btn-modifier">modifier</button>
        </h2>
        <div class="modal" id="modal">
          <div class="modal-content">
            <div id="close-modal"><i class="fa-solid fa-xmark"></i></div>
            <h3>Galerie photo</h3>
            <div id="modal-gallery">
              <div class="categories-picture"></div>
              <div id="gallery"></div>
            </div>
            <hr />
            <button id="btn-add">Ajouter une photo</button>
          </div>
        </div>
        <div id="hidden-form" style="display: none;">
          <div id="modal-form" class="modal">
            <div class="content-form">
              <div id="close-form"><i class="fa-solid fa-xmark"></i></div>
             <form id="form-modal" action="">
              <!--    <div class="image-form">
                  <img id="preview-image" src="https://bit.ly/3ubuq5o" alt="Aperçu de l'image">
                  <input type="file" id="file-input" accept="image/*" style="display: none;">
                  <label for="file-input" id="btn-add-photo">+ Ajouter une photo</label>
                  <p>JPG, PNG ; taille maximale : 4 Mo</p>
              </div> -->
              
                <div id="form-preview">
                  <h3>Aperçu de l'image</h3>
                  <div class="image-form">
                 <img id="preview-image" src="https://bit.ly/3ubuq5o" alt="Aperçu de l'image">
                  <label for="image" class="file-upload">
                    <span>Ajouter une image</span>
                    <input id="image" class="image" name="image" type="file" required>
                    <p>JPG, PNG ; taille maximale : 4 Mo</p>
                  </label>
                </div>
                </div>
                <label for="title">Titre</label>
                <input id="title" name="title" type="text" required>
                <label for="category">Catégorie</label>
                <select id="category" name="category" required>
                  <option value="">Choisir une catégorie</option> 
                  <option value="Objets">Objets</option>
                  <option value="Appartements">Appartements</option>
                  <option value="Hôtels & Restaurants">Hôtels & Restaurants</option>
                </select>
                <hr />
                <button type="submit">Valider</button>
              </form>
            </div>
          </div>
        </div>
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
          <input type="email name="email" id="email" />
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
</html>


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

    // Deleting delected works

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
          // clear tes inputs
          title.value = "";
          image.value = null;
          category.value = '';
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

  console.log(errorMessage)
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






css .modal-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: medium;
  border: 1px solid transparent;
  box-shadow: 6px 6px 25px rgba(179, 178, 178, 0.5);
  padding: 20px;
  width: 50%;
  max-width: 600px;
  height: 80%;
  max-height: 80%;
  box-sizing: border-box;
  overflow: hidden;
}

#form-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
#modal {
  display: none;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.content-form { 
width: 100%;
  height: 100%;
  margin: 0px;
  position: relative;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#modal-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: medium;
  border: 1px solid transparent;
  box-shadow: 6px 6px 25px rgba(179, 178, 178, 0.5);
  padding: 10px;
  width: 50%;
  max-width: 600px;
  height: 90%;
  max-height: 90%;
  box-sizing: border-box;
  overflow: hidden;
}

#form-modal h3 {
  font-size: medium;
}

#close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: black;
}

.preview-image {
  position: relative;
  width: 70%;
  height: 30%;
  margin: 10px 0;
  object-fit: cover;
  background-color:rgb(232, 241, 246);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon-img {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: aquamarine;
}

.file-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10px;
}

.file-upload button {
  background-color: gray;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

#modal-form input,
#modal-form select {
  width: 70%;
height: 5%;
  margin-bottom: 2px;
}

#modal-form button {
  width: 60%;
  align-self: center;
}





document.addEventListener("DOMContentLoaded", function() {
  const imageInput = document.querySelector(".image");
  const previewImage = document.getElementById("preview");
  const iconImg = document.getElementById("icon-image");
  const uploadButton = document.querySelector(".file-upload-button");
  const uploadInfo = document.querySelector(".file-upload p");
  
  
  imageInput.addEventListener("change", function() {
      const file = this.files[0];
      
      if (file) {
          const reader = new FileReader();
          
          reader.onload = (e) => {
              iconImg.style.display ="none";
              previewImage.style.display ="block";
              uploadButton.style.display = "none";
              uploadInfo.style.display = "none";
              previewImage.src = e.target.result;
          };
          
          reader.readAsDataURL(file);
      } else {
        iconImg.style.display ="block";
        previewImage.style.display ="none";
        uploadButton.style.display = "block";
        uploadInfo.style.display = "block";
      }
  });
});