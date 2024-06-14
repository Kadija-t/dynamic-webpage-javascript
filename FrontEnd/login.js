
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Récupérer les informations du formulaire
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Afficher les informations d'identification dans la console
    console.log("Email:", email);
    console.log("Mot de passe:", password);

    try {
      if (email.trim() === "" || password.trim() === "") {
        alert("Merci de remplir tous les champs");
        return;
      }
      /* : Vérification de la validité de 'adresse email entrée avec alert si elle n'est pas valide*/
      if (!isValidEmail(email)) {
        alert("Merci d'entrer un email valide");
        return;
      }

      fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error();
          } else {
            return response.json();
          }
        })
        .then((data) => {
          localStorage.setItem("token", data.token);
          window.location.href = "index.html";
        })
        .catch(() => {
          const error = document.createElement("p");
          error.classList.add("error");
          error.textContent = "Erreur lors de la connexion";
          form.appendChild(error);
        });

      /*Si l'email ou le mot de passe ne sont pas correct alerte pour prévenir l'utilisateur*/
    } catch (error) {
      console.log(error);
    }

  });

  /*Fonction avec regex pour vérifier la validité du format email entré*/

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
