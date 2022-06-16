import { lightbox } from '../utils/ligthbox.js';
import { manageLikes } from '../utils/likes.js';
// import { tri } from '../utils/tri.js';



async function getPhotographers() {

    let url = '/data/photographers.json';
    console.log()
    try {
        let res = await fetch(url);
        return await res.json();

    } catch (error) {
        console.log(error);
    }

}



function displayData(photographers, media) {
    //Récupération de la chaine de requête dans l'url

    const queryString_url_id = window.location.search;
    // console.log(queryString_url_id);

    //Extraction de l'id

    const urlsearchParams = new URLSearchParams(queryString_url_id);
    // console.log(urlsearchParams);
    const _id = urlsearchParams.get("id");
    // console.log(_id);

    const filteredPhotographers = photographers.filter(obj => obj.id == _id);
    const filteredMedia = media.filter(obj => obj.photographerId == _id);
    // console.log(filteredPhotographers);
    const totalLikes = document.querySelector(".infos__likes__number");
    const info2 = document.querySelector(".infos__price");
    const photoModal = document.querySelector(".titre-modal");
    const photographersSection = document.querySelector(".photograph-header");
    const mediaSection = document.querySelector(".gallerry");
    filteredPhotographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM1 = photographerModel.getUserCardDOM1();
        photographersSection.appendChild(userCardDOM1);
        const userCardDOM2 = photographerModel.getUserCardDOM2();
        photographersSection.appendChild(userCardDOM2);
        const userCardDOM4 = photographerModel.getUserCardDOM4();
        photoModal.appendChild(userCardDOM4);
        const userCardDOM5 = photographerModel.getUserCardDOM5();
        info2.appendChild(userCardDOM5);

        filteredMedia.forEach((media) => {
            const mediaModel = mediaFactory(media);
            const userCardDOM3 = mediaModel.getUserCardDOM3();
            mediaSection.append(userCardDOM3);



        });
    });

};

async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    displayData(photographers, media);
    lightbox();
    manageLikes();



};

init();