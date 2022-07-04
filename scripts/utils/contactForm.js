function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    document.getElementById('prenom').focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    document.getElementById('open-modal').focus();
}
window.addEventListener("keydown", checkKeyPress, false); //on initialise l'écoute du clavier
function checkKeyPress(key) {
    if (key.keyCode == "27") {
        closeModal();
    }
}

//récupération des données formulaire 
let btnSpendForm = document.querySelector("#modal-bouton");
btnSpendForm.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("Prénom", document.querySelector("#prenom").value);
    localStorage.setItem("Nom", document.querySelector("#nom").value);
    localStorage.setItem("Mail", document.querySelector("#mail").value);
    localStorage.setItem("Message", document.querySelector("#message").value);
    console.log(document.querySelector("#prenom").value);
    console.log(document.querySelector("#nom").value);
    console.log(document.querySelector("#mail").value);
    console.log(document.querySelector("#message").value);
    closeModal()
})