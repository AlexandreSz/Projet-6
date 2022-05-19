// function displayModalGallery() {
//     const modale = document.getElementById("light-modal");
//     modale.style.display = "block";
// }

// function closeModalGallery() {
//     const modale = document.getElementById("light-modal");
//     modale.style.display = "none";
// }




// function affichage(id) {
//     const media = document.querySelector(".ligthbox-modal .content-modal ");
//     console.log(media)
//     media.src = document.getElementById(id).src;
//     console.log(media.src)


//     displayModalGallery();
// }

window.onload = () => {
    const modale = document.querySelector('#ligth-modal');
    const close = document.querySelector('.close');
    const links = document.querySelectorAll('.gallerry a');
    console.log(links)

    // On ajoute l'écouteur click sur les liens
    for (let link of links) {
        link.addEventListener("click", function(e) {
            // On désactive le comportement des liens
            e.preventDefault();
            // On ajoute l'image du lien cliqué dans la modale
            const image = modale.querySelector(".content-modal img");
            image.src = this.href;

            // On affiche la modale
            modale.classList.add("show");

        });
    }


}