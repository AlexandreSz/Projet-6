export function lightbox() {


    const modale = document.querySelector('#Lmodal');
    const close = document.querySelector('.close');
    // const links = document.querySelectorAll('.gallerry a');
    const links = Array.from(document.querySelectorAll('.gallerry a'))
    console.log(links)
    const titles = Array.from(document.querySelectorAll('.info titres'))
    console.log(titles)


    // On ajoute l'écouteur click sur les liens
    for (let link of links) {
        link.addEventListener("click", function(e) {

            // On désactive le comportement des liens
            e.preventDefault();
            //on ajoute l'image du lien cliqué dans la modale
            const content = modale.querySelector(".content-modal");
            // console.log(content)
            content.src = this.href;
            let type = this.dataset.type;
            let titre = this.dataset.title;

            // console.log(ext);
            // console.log(ext == 'g')
            // console.log(content.src);
            if (type == "img") {
                let img = document.createElement('img');
                img.src = content.src;
                img.setAttribute('id', 'lightbox-media');
                img.setAttribute('data-type', type);
                let title = document.createElement('span');
                title.setAttribute("class", "titre");
                title.setAttribute("id", "title-media");
                title.setAttribute("data-title", titre);
                title.innerHTML = titre;

                while (content.firstChild) {
                    content.removeChild(content.lastChild);
                }
                content.appendChild(img);
                content.appendChild(title);
            } else {
                let vid = document.createElement('video');
                vid.src = content.src;
                vid.type = "video/mp4";
                vid.controls = true;
                vid.setAttribute('id', 'lightbox-media');
                vid.setAttribute('data-type', type);
                let title = document.createElement('span');
                title.setAttribute("class", "titre");
                title.setAttribute("id", "title-media");
                title.setAttribute("data-title", titre);
                title.innerHTML = titre;
                while (content.firstChild) {
                    content.removeChild(content.lastChild);
                }
                content.appendChild(vid);
                content.appendChild(title);
            }

            // ************
            // slide ******
            // ************
            const imageBox = document.getElementById('lightbox-media');
            const titleBox = document.getElementById('title-media');
            console.log(titleBox.dataset.title)
            let prev = document.getElementById('prev');
            let next = document.getElementById('next');
            let index = links.indexOf(link);

            console.log(index)









            next.addEventListener('click', function() {
                index += 1;

                if (index < links.length) {
                    console.log(index < links.length);
                    imageBox.setAttribute('src', links[index]);
                    titleBox.innerHTML = titles[index].innerHTML


                } else {
                    index = 0;

                    imageBox.setAttribute('src', links[index]);
                    titleBox.innerHTML = titles[index].innerHTML

                }
            })


            prev.addEventListener('click', function() {
                index -= 1;
                if (index >= 0) {
                    imageBox.setAttribute('src', links[index])
                    titleBox.innerHTML = titles[index].innerHTML

                } else {
                    index = links.length - 1;
                    imageBox.setAttribute('src', links[index])
                    titleBox.innerHTML = titles[index].innerHTML

                }
            })

            //test affichage modale
            modale.classList.add("show");

            // On active le bouton close
            close.addEventListener("click", function() {
                modale.classList.remove("show");

            });

            // // On ferme au clic sur la modale
            // modale.addEventListener("click", function() {
            //     modale.classList.remove("show");
            // });

        });

    }


}