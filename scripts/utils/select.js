export function select() {
    // On récupère le select
    const selectElt = document.querySelector("select");
    // On récupère la 1ère DIV "custom-select"
    const selectDiv = document.querySelector(".tri");
    // On crée le nouveau select
    const newSelect = document.createElement("div");
    // On lui ajoute la classe "new-select"
    newSelect.classList.add("new-select");
    newSelect.setAttribute("alt", "Select")
        // On lui donne le contenu de l'option actuellement choisie dans le select
    newSelect.innerHTML = selectElt.options[selectElt.selectedIndex].innerHTML;
    // On crée l'élément dans le DOM
    selectDiv.appendChild(newSelect);
    // On crée le menu déroulant
    const newMenu = document.createElement("div");
    newMenu.classList.add("select-items", "select-hide");
    // On va boucler sur toutes les options dans le select et les copier dans la div
    for (let option of selectElt.options) {
        // On crée une div pour cette option
        const newOption = document.createElement("div");
        newOption.setAttribute("alt", option.innerHTML);
        newOption.setAttribute("aria-label", option.innerHTML);
        // On copie le contenu de l'option
        newOption.innerHTML = option.innerHTML;
        // On ajoute un écouteur d'évènements "clic" sur l'option
        newOption.addEventListener("click", function() {
            // On boucle sur chacune des options du select original
            for (let option of selectElt.options) {
                if (option.innerHTML === this.innerHTML) {
                    // On active la bonne option dans le select
                    selectElt.selectedIndex = option.index;
                    // on declanche l'event pour le listener
                    selectElt.dispatchEvent(new Event('change'))
                        // On change le texte de notre "newSelect"
                    newSelect.innerHTML = this.innerHTML;
                }
            }
            // On "simule" un clic sur newSelect
            newSelect.click();
        });
        // On ajoute l'option dans le "newMenu"
        newMenu.appendChild(newOption);
        newMenu.setAttribute('alt', 'menu');
    }
    // On affiche le menu
    selectDiv.appendChild(newMenu);
    // On ajoute l'écouteur d'évènements click sur newSelect
    newSelect.addEventListener("click", function(e) {
        // On empêche la propagation du clic
        e.stopPropagation();
        // On retire le "select-hide" de notre menu
        this.nextSibling.classList.toggle("select-hide");
        // On ajoute la classe active à newSelect (changer la flèche)
        this.classList.toggle("active");
    })
}