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



















// document.addEventListener("DOMContentLoaded", function() {
//     let loginBtn = document.querySelector(".login");

//     loginBtn.addEventListener("click", function(event) {
//         event.preventDefault();

//         document.body.innerHTML = `
//             <header>
//                 <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
//                 <nav>
//                     <ul>
//                         <li>projets</li>
//                         <li>contact</li>
//                         <li id="login">login</li>
//                         <li><img src="./assets/icons/instagram.png" alt="Instagram" /></li>
//                     </ul>
//                 </nav> 
//             </header>

//             <main>
//                 <div class="formContainer"> 
//                     <form id="form">
//                         <h2>Log In</h2>
//                         <label for="email">E-mail</label>
//                         <input type="email" id="email" placeholder="email" required>
//                         <label for="password">Mot de passe</label>
//                         <input type="password" id="password" placeholder="mot de passe" required>
//                         <button type="submit">Se connecter</button>
//                     </form>
//                 </div>
//             </main>

//             <footer>
//                 <nav>
//                     <ul>
//                         <li>Mentions Légales</li>
//                     </ul>
//                 </nav>
//             </footer>`;

//         // Variable pour le formulaire
//         const form = document.getElementById('form');

//         form.addEventListener('submit', function(event) {
//             event.preventDefault();

//             // Ajout de l'écouteur d'événements pour le formulaire après avoir modifié le DOM
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

//             // Effectuer requête POST pour se connecter
//             async function requestPost() {
//                 const response = await fetch("http://localhost:5678/api/users/login", {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         email: email,
//                         password: password
//                     })
//                 });

//                 const data = await response.json();
               
//             }

//             requestPost();
//         });
//     });
// });




// const email = document.querySelector("email")
// const mdp = document.querySelector("mdp")
// let loginBtn = document.getElementById("login");


    

    // async function gettingForm() {
        // const response = await fetch("http://localhost:5678/api/users/login");
        // const data = await response.text();

        // let formContainer = document.querySelector(".formContainer");
        // formContainer.innerHTML = data;
        // document.addEventListener("DOMContentLoaded", function() {

//     document.addEventListener("DOMContentLoaded", function() {

//     loginBtn.addEventListener("click", event => {
//             document.body.innerHTML = `
//             <header>
//             <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
//             <nav>
//               <ul>
//                 <li>projets</li>
//                 <li>contact</li>
//                 <li id="login">login</li>
//                 <li><img src="./assets/icons/instagram.png" alt="Instagram" /></li>
//               </ul>
//             </nav> 
//             </header>
        
//             <main>
//               <div class="formContainer"> 
//                 <form class="form">
//                   <h2>Log In</h2>
//                   <input name="email" type="email" placeholder="email">
//                   <input name="password" type="password" placeholder="mot de passe">
//                   <button type="submit">Se connecter</button>
//                 </form>
//               </div>
//             </main>
        
//             <footer>
//               <nav>
//                 <ul>
//                   <li>Mentions Légales</li>
//                 </ul>
//               </nav>
//             </footer>`;
        
//     });
//         event.preventDefault();
//         gettingForm();
//     });




// const form = document.querySelector('.form')
// form.addEventListener('submit', event => {
//     event.preventDefault();

//     const FormData = new FormData(form);

//     fetch();

// });


// document.addEventListener("DOMContentLoaded", function() {
//     let loginBtn = document.querySelector(".login");

//     loginBtn.addEventListener("click", function(event) {
//         event.preventDefault();

//         document.body.innerHTML = `
//             <header>
//                 <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
//                 <nav>
//                     <ul>
//                         <li>projets</li>
//                         <li>contact</li>
//                         <li id="login">login</li>
//                         <li><img src="./assets/icons/instagram.png" alt="Instagram" /></li>
//                     </ul>
//                 </nav> 
//             </header>

//             <main>
//                 <div class="formContainer"> 
//                     <form id="form">
//                         <h2>Log In</h2>
//                         <label for="email">E-mail</label>
//                         <input  type="email"  id="email" placeholder="email" required>
//                         <label for="password">Mot de passe</label>
//                         <input type="password" id="password"  placeholder="mot de passe" required>
//                         <button type="submit">Se connecter</button>
//                     </form>
//                 </div>
//             </main>

//             <footer>
//                 <nav>
//                     <ul>
//                         <li>Mentions Légales</li>
//                     </ul>
//                 </nav>
//             </footer>`;
    
//         Variable pour le formulaire

//         const form = document.getElementById('form');

//         form.addEventListener('submit', function(event){
            
//             event.preventDefault()
//         });
//         Ajout de l'écouteur d'événements pour le formulaire après avoir modifié le DOM
       
//         const email = document.getElementById('email');
//         const password= document.getElementById('password');
//         form.addEventListener('submit', async function(event) {
//             event.preventDefault();
//         Récupérer les information entrées dans le formulaire
//             const emailWritten= email.value;
//             const passwordWritten = password.value;

//             let connection = {
//                 identification: emailWritten,
//                 passwordValue: passwordWritten,
//             };
//             console.log(connection);
//         Effectuer requête POST pour se connecter
//         const response = await 
//         fetch("http://localhost:5678/api/users/login", {
//                         method: 'POST',
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body:JSON.stringify({ 
//                             "email": "string",
//                             "password": "string"
//                         })
//                         .then(function(response){
//                              return response
//                         })
//                         .then(function(data){
//                             console.log(data)
//                         })
                        
                        
//                     });



// const connectionIdentifier = JSON.stringify(connection);
//             try {
//                 const response = await fetch("http://localhost:5678/api/users/login", {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: connectionIdentifier
//                 });
        
//              } catch (error) {
//                     console.error("Erreur lors de la requête fetch :", error);
//                 }
        
   // }); });
 //})

/*1.Gerer l'envoie du form*/

/*2.Récupérer les valeyrs des champs du formulaire*/

/*3. Effectuer la requête POST pour se connecter*/

/*4. stocker le token dans le session storage*/

/*5. message erreur si failed connection*/


document.addEventListener("DOMContentLoaded", function() {
    let loginBtn = document.querySelector(".login");

    loginBtn.addEventListener("click", function(event) {
        event.preventDefault();

        document.body.innerHTML = `
            <header>
                <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
                <nav>
                    <ul>
                        <li>projets</li>
                        <li>contact</li>
                        <li id="login">login</li>
                        <li><img src="./assets/icons/instagram.png" alt="Instagram" /></li>
                    </ul>
                </nav> 
            </header>

            <main>
                <div class="formContainer"> 
                    <form id="form">
                        <h2>Log In</h2>
                        <label for="email">E-mail</label>
                        <input type="email" id="email" placeholder="email" required>
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" placeholder="mot de passe" required>
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
            </main>

            <footer>
                <nav>
                    <ul>
                        <li>Mentions Légales</li>
                    </ul>
                </nav>
            </footer>`;

       
            // Ajout de l'écouteur d'événements pour le formulaire après avoir modifié le DOM
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Afficher les informations d'identification dans la console
            console.log("Email:", email);
            console.log("Mot de passe:", password);

            // Variable pour le formulaire
                    const form = document.getElementById('form');

                    form.addEventListener('submit', function(event) {
                        event.preventDefault();
                        
            // Effectuer la requête POST pour se connecter
            async function requestPost() {
                try {
                    const response = await fetch("http://localhost:5678/api/users/login", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                    });
                    console.log(response);
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error("Erreur lors de la requête fetch :", error);
                }
            }


            requestPost();
        });
    });
});















// document.addEventListener("DOMContentLoaded", function() {
//     let loginBtn = document.querySelector(".login");

//     loginBtn.addEventListener("click", function(event) {
//         event.preventDefault();

//         document.body.innerHTML = `
//             <header>
//                 <h1>Sophie Bluel <span>Architecte d'intérieur</span></h1>
//                 <nav>
//                     <ul>
//                         <li>projets</li>
//                         <li>contact</li>
//                         <li id="login">login</li>
//                         <li><img src="./assets/icons/instagram.png" alt="Instagram" /></li>
//                     </ul>
//                 </nav> 
//             </header>

//             <main>
//                 <div class="formContainer"> 
//                     <form id="form">
//                         <h2>Log In</h2>
//                         <label for="email">E-mail</label>
//                         <input type="email" id="email" placeholder="email" required>
//                         <label for="password">Mot de passe</label>
//                         <input type="password" id="password" placeholder="mot de passe" required>
//                         <button type="submit">Se connecter</button>
//                     </form>
//                 </div>
//             </main>

//             <footer>
//                 <nav>
//                     <ul>
//                         <li>Mentions Légales</li>
//                     </ul>
//                 </nav>
//             </footer>`;

//         // Variable pour le formulaire
//         const form = document.getElementById('form');

//         form.addEventListener('submit', function(event) {
//             event.preventDefault();

//             // Ajout de l'écouteur d'événements pour le formulaire après avoir modifié le DOM
//             const email = document.getElementById('email').value;
//             const password = document.getElementById('password').value;

//             // Effectuer requête POST pour se connecter
//             async function requestPost() {
//                 const response = await fetch("http://localhost:5678/api/users/login", {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         email: email,
//                         password: password
//                     })
//                 });

//                 const data = await response.json();
               
//             }

//             requestPost();
//         });
//     });
// });

