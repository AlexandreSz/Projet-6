function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
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