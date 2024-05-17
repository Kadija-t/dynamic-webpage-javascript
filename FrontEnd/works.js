
/*fonction permettant d'afficher les travaux*/

async function addWorks() {
    try {
  const response = await fetch("http://localhost:5678/api/works");
  console.log(response);
  return await response.json();

} catch(error) {
    console.error ("une erreur s'est produite", erro);
    return null;

 }
}
/*addWorks();*/


console.log('ok')