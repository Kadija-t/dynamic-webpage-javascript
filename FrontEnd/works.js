/*Declaration de variables*/

const gallery = document.querySelector(".gallery");

/*fonction permettant de récupérer les travaux du backend*/

async function addWorks() {
  const response = await fetch("http://localhost:5678/api/works");
  return await response.json();
}
addWorks();

/*fonction permettant d'afficher les travaux/works dans le DOM*/

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

async function addCategories() {
  const response = await fetch("http://localhost:5678/api/categories");
  return await response.json();
}
addCategories();

/*fonction permettant d'afficher les filtres catégories*/

async function displayCategories() {
    const arrayCategories= await addCategories ();
    console.log(arrayCategories);
}
displayCategories();