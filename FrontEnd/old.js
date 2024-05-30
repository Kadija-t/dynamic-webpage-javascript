/*Declaration de variables*/
/*
const gallery = document.querySelector(".gallery");

/*fonction permettant de récupérer les travaux du backend*/
/*
async function addWorks() {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();

  data.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    img.src = work.imageUrl;
    figcaption.textContent = work.title;
    figure.classList.add(".gallery");
    gallery.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
  });
}


/*fonction permettant d'afficher les travaux/works dans le DOM*/
/*
async function displayWorks() {
  const arrayWorks = await addWorks ();
  arrayWorks.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    img.src = work.imageUrl;
    figcaption.textContent = work.title;
    figure.classList.add(".gallery");
    gallery.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
  });
}
displayWorks()

/*fonction permettant de recuperer les catégories du backend*/
/*
async function addCategories() {
  const response = await fetch("http://localhost:5678/api/categories");
  return await response.json();
}
addCategories();

/*fonction permettant d'afficher les filtres catégories*/
/*
async function displayCategories() {
    const arrayCategories= await addCategories ();
    console.log(arrayCategories);
}
displayCategories();
*/
/*
async function displayCategories(){
  console.log("test");
  const response = await fetch("http://localhost:5678/api/categories");
  const data = await response.json();


  const filters = document.getElementById('filters');
  const allButton = document.createFilterButton("0", "Tous");
  filters.appendChild(allButton);

  data.forEach((category) => {
    console.log(category.name);
    const button = document.createFilterButton(category.id, category.name);
    filters.appendChild(button)
    
  })

}


async function createFilterButton(value, text){
  const button = document.createElement('button');
  button.className ="filter-button";
  button.value = value;
  button.textContent = text;
  return button;
}

addWorks();
document.addEventListener("DOMContentLoaded", () => {

  displayCategories();
})

*/


const gallery = document.querySelector("#gallery");

async function getWorks(){

  try {
    const response = await fetch("http://localhost:5678/api/works");
    const data = await response.json();


    data.forEach((work) => {
      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = work.imageUrl;

      const figcaption = document.createElement("figcaption");
      figcaption.textContent = work.title;
    
       
      figure.appendChild(img);
      figure.appendChild(figcaption);
     
     figure.appendChild(gallery);
    });


  }
  catch(error){
    console.log(error);
  }
  
}

document.addEventListener("DOMContentLoaded", () => {

  getWorks()
})



const galleryModal = document.getElementById("gallery");

/*fonction permettant de récupérer les travaux du backend*/
/*
async function getWorksModal() {
  const response = await fetch("http://localhost:5678/api/works");
  const data = await response.json();

  data.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    img.src = work.imageUrl;
    figcaption.textContent = work.title;
    figure.classList.add("#gallery");
    galleryModal.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
  });
}


/*fonction permettant d'afficher les travaux/works dans le DOM*/
/*
async function displayWorksModal() {
  const arrayWorksModal = await getWorksModal ();
  arrayWorksModal.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    img.src = work.imageUrl;
    figcaption.textContent = work.title;
    figure.classList.add("#gallery");
    galleryModal.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
  });
}
getWorksModal();
displayWorksModal();
