function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;


    function getUserCardDOM() {

        const article = document.createElement("article");
        const lien = document.createElement("a");
        lien.setAttribute("href", "./photographer.html?id=" + id)
        const img = document.createElement('img');
        img.setAttribute("src", picture);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + "," + " " + country;
        const tag = document.createElement('tag');
        tag.textContent = tagline;
        const prix = document.createElement('prix');
        prix.textContent = price + "€" + "/" + "jour";

        article.appendChild(lien)
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(tag);
        article.appendChild(prix);
        return (article);

    }

    return { name, picture, getUserCardDOM }
}