// 1 : Récupérer les informations du formulaire 
// 2 : Vérifier si l'email et ou le mot de passe ne sont pas vide
// 3 : Vérifier s => alert('Merci de remplir tous les champs')i l'email est bien un type email
// 4 : Envoyer le (REGEX) => alert('Merci d'entrer un email valide')s informations sur l'API en POST
 // soit id correct - API succès avec Token
 // soit 401 -> alerte mdp/email incorrect


 /*1: Récupérer les informations du formulaire */
 /*2:Email valide renvoie bien le token*/
 /*3: Si pas bon 401 en console*/

 
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

        const form = document.getElementById('form');

        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            // Récupérer les informations du formulaire
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Afficher les informations d'identification dans la console
            console.log("Email:", email);
            console.log("Mot de passe:", password);

/*ETAPES A FAIRE*/

/*
3.bis verifier si l'email et ou mdp est vide+ alerte
4 : si les champs email et ou mot de passe sont vide creer cette  => alert('Merci de remplir tous les champs')i l'email est bien un type email
5 : Envoyer le (REGEX) avec une autre alerte si l'email n'est pas de type email et quelle ne correspond pas a l'email en ma possession => alert('Merci d'entrer un email valide')
??// soit id correct - API succès avec Token
6: si information incorrecte  soit 401 -> alerte mdp/email incorrect*/



            // Effectuer la requête POST pour se connecter
            async function connectionPost(email, password) {
                const response = await fetch("http://localhost:5678/api/users/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                });

                const data = await response.json();
                console.log(data);
            }
connectionPost(email, password);

          
        }); 
    }); 
});




