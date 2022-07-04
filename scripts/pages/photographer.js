import { lightbox } from '../utils/ligthbox.js';
import { manageLikes } from '../utils/likes.js';
import { select } from '../utils/select.js';
import { tri } from '../utils/tri.js';



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

function displayData(photographers, medias) {
    //Récupération de la chaine de requête dans l'url
    const queryString_url_id = window.location.search;
    //Extraction de l'id
    const urlsearchParams = new URLSearchParams(queryString_url_id);
    const _id = urlsearchParams.get("id");
    const filteredPhotographers = photographers.filter(obj => obj.id == _id);
    const filteredMedia = medias.filter(obj => obj.photographerId == _id);
    const info2 = document.querySelector(".infos__price");
    const photoModal = document.querySelector(".head-modal");
    const photographersSection = document.querySelector(".photograph-header");
    const mediaSection = document.querySelector(".gallerry");

    // tri du media par popularité car c'est l'option de base
    filteredMedia.sort((a, b) => (a.likes - b.likes));
    filteredMedia.reverse();

    const selectTri = document.getElementById('tri-select');

    filteredPhotographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM1 = photographerModel.getUserCardDOM1();
        photographersSection.appendChild(userCardDOM1);
        const userCardDOM2 = photographerModel.getUserCardDOM2();
        photographersSection.appendChild(userCardDOM2);
        const userCardDOM4 = photographerModel.getUserCardDOM4();
        photoModal.appendChild(userCardDOM4);
        const userCardDOM6 = photographerModel.getUserCardDOM6();
        photoModal.appendChild(userCardDOM6);
        const userCardDOM5 = photographerModel.getUserCardDOM5();
        info2.appendChild(userCardDOM5);
        filteredMedia.forEach((medias) => {
            const mediaModel = mediaFactory(medias);
            const userCardDOM3 = mediaModel.getUserCardDOM3();
            mediaSection.append(userCardDOM3);
        });
        selectTri.addEventListener('change', manageSort);

        function manageSort(event) {
            tri(event, filteredMedia);
            mediaSection.innerHTML = '';
            filteredMedia.forEach((medias) => {
                const mediaModel = mediaFactory(medias);
                const userCardDOM3 = mediaModel.getUserCardDOM3();
                mediaSection.append(userCardDOM3);
            });
            lightbox();
            manageLikes();
        }
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    displayData(photographers, media);
    lightbox();
    manageLikes();
    select();

};

init();