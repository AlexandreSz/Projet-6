function mediaFactory(data) {
    const { image, video, title, likes, id } = data;

    const picture = `assets/photographers/${image}`;
    const _video = `assets/photographers/${video}`;
    const titre = `assets/photographers/${title}`;
    const coeur = `assets/photographers/${likes}`;



    function getUserCardDOM3() {
        const div = document.createElement("div");
        div.setAttribute("class", "photo");

        const lien = document.createElement("a");
        const span = document.createElement("span");
        span.setAttribute("class", "info");
        const titres = document.createElement("titres");
        titres.textContent = title;
        const i = document.createElement("i");
        i.setAttribute("class", "fa-regular fa-heart");
        i.setAttribute("id", "coeur");
        const like = document.createElement("like");
        like.setAttribute("class", "like");
        const nbLike = document.createElement("nbLike");
        nbLike.setAttribute("class", "nbLike");
        nbLike.setAttribute("id", "nbLike");
        nbLike.setAttribute("data-like", likes);
        nbLike.textContent = likes;


        if (video) {
            const video = document.createElement("video");
            video.setAttribute("src", _video);
            lien.setAttribute("href", _video);
            lien.setAttribute("data-id", id);
            lien.setAttribute("data-title", title);
            video.setAttribute("data-type", "video/mp4");
            video.setAttribute("controls", "true");
            video.setAttribute("class", "media");
            div.appendChild(lien)
            lien.appendChild(video)
            div.appendChild(span);
            span.appendChild(titres);
            span.appendChild(like);
            like.appendChild(nbLike);
            like.appendChild(i);

        } else {

            const img = document.createElement("img");
            img.setAttribute("src", picture);
            img.setAttribute("class", "media");
            lien.setAttribute("href", picture);
            lien.setAttribute("data-id", id);
            lien.setAttribute("data-title", title)
            lien.setAttribute("data-type", 'img')

            div.appendChild(lien)
            lien.appendChild(img);
            div.appendChild(span);
            span.appendChild(titres);
            span.appendChild(like);
            like.appendChild(nbLike);
            like.appendChild(i);
        }


        return (div);

    }






    return { titre, coeur, _video, picture, getUserCardDOM3 }
}