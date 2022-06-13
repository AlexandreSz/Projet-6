function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;


    function getUserCardDOM1() {

        const div = document.createElement("div");
        div.setAttribute("class", "photo")
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        div.appendChild(img);

        return (div);
    }

    function getUserCardDOM2() {

        const div = document.createElement("div");
        div.setAttribute("class", "info")
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = city + "," + " " + country;
        const tag = document.createElement('tag');
        tag.textContent = tagline;
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(tag);

        return (div);

    }

    function getUserCardDOM4() {

        const div = document.createElement("div");
        div.setAttribute("class", "titre")
        const nom = document.createElement("nom");
        nom.textContent = name;

        div.appendChild(nom);

        return (div);
    }

    function getUserCardDOM5() {

        const div = document.createElement("div");
        div.setAttribute("class", "prix")
        const prix = document.createElement("prix");
        prix.textContent = price + "€" + "/" + "jour";

        div.appendChild(prix);

        return (div);
    }

    return { name, picture, getUserCardDOM1, getUserCardDOM2, getUserCardDOM4, getUserCardDOM5 }
}