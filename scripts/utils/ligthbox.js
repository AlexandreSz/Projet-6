export function lightbox() {


    const modale = document.querySelector('#Lmodal');
    const close = document.querySelector('.close');
    // const links = document.querySelectorAll('.gallerry a');
    const links = Array.from(document.querySelectorAll('.gallerry a'))
    console.log(links)
    const titles = Array.from(document.querySelectorAll('.info titres'))
    console.log(titles)
    const types = Array.from(document.querySelectorAll('.gallerry a[data-type]'))
    console.log(types)

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
                img.setAttribute('data-type', 'img');
                img.setAttribute('alt', titre);
                img.setAttribute('aria-label', titre);
                let title = document.createElement('span');
                title.setAttribute("class", "titre");
                title.setAttribute("id", "title-media");
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
                vid.setAttribute('data-type', 'video/mp4');
                vid.setAttribute('alt', titre);
                vid.setAttribute('aria-label', titre);
                let title = document.createElement('span');
                title.setAttribute("class", "titre");
                title.setAttribute("id", "title-media");
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
            console.log(imageBox.dataset.type)
            const titleBox = document.getElementById('title-media');
            console.log(titleBox)

            let prev = document.getElementById('prev');
            let next = document.getElementById('next');
            let index = links.indexOf(link);

            console.log(index)





            next.addEventListener('click', function() {
                index += 1;
                if (types[index] === 'img') {

                    content.appendChild(document.createElement('img'))
                    content.removeChild(content.lastChild);
                } else {
                    content.appendChild(document.createElement('video'))
                    content.removeChild(content.lastChild);


                }
                if (index < links.length) {
                    console.log(index < links.length);
                    imageBox.setAttribute('src', links[index]);
                    imageBox.setAttribute('alt', titles[index].innerHTML);
                    imageBox.setAttribute('aria-label', titles[index].innerHTML);
                    titleBox.innerHTML = titles[index].innerHTML
                    console.log(imageBox.dataset.type)


                } else {
                    index = 0;
                    imageBox.setAttribute('src', links[index]);
                    imageBox.setAttribute('alt', titles[index].innerHTML);
                    imageBox.setAttribute('aria-label', titles[index].innerHTML);
                    titleBox.innerHTML = titles[index].innerHTML

                }
            })




            prev.addEventListener('click', function() {
                index -= 1;
                if (index >= 0) {
                    imageBox.setAttribute('src', links[index]);
                    imageBox.setAttribute('alt', titles[index].innerHTML);
                    imageBox.setAttribute('aria-label', titles[index].innerHTML);
                    titleBox.innerHTML = titles[index].innerHTML

                } else {
                    index = links.length - 1;
                    imageBox.setAttribute('src', links[index]);
                    imageBox.setAttribute('alt', titles[index].innerHTML);
                    imageBox.setAttribute('aria-label', titles[index].innerHTML);
                    titleBox.innerHTML = titles[index].innerHTML

                }
            })



            //fleches clavier
            window.addEventListener("keydown", checkKeyPress, false); //on initialise l'écoute du clavier
            function checkKeyPress(key) {
                if (key.keyCode == "37") { //si fleche de gauche

                    index -= 1;
                    if (index >= 0) {
                        imageBox.setAttribute('src', links[index]);
                        imageBox.setAttribute('alt', titles[index].innerHTML);
                        imageBox.setAttribute('aria-label', titles[index].innerHTML);
                        titleBox.innerHTML = titles[index].innerHTML

                    } else {
                        index = links.length - 1;
                        imageBox.setAttribute('src', links[index]);
                        imageBox.setAttribute('alt', titles[index].innerHTML);
                        imageBox.setAttribute('aria-label', titles[index].innerHTML);
                        titleBox.innerHTML = titles[index].innerHTML

                    }

                } else if (key.keyCode == "39") { //idem droite

                    index += 1;

                    if (index < links.length) {
                        console.log(index < links.length);
                        imageBox.setAttribute('src', links[index]);
                        imageBox.setAttribute('alt', titles[index].innerHTML);
                        imageBox.setAttribute('aria-label', titles[index].innerHTML);
                        titleBox.innerHTML = titles[index].innerHTML
                        console.log(imageBox.dataset.type)


                    } else {
                        index = 0;
                        imageBox.setAttribute('src', links[index]);
                        imageBox.setAttribute('alt', titles[index].innerHTML);
                        imageBox.setAttribute('aria-label', titles[index].innerHTML);
                        titleBox.innerHTML = titles[index].innerHTML

                    }

                } else if (key.keyCode == "27") {
                    modale.classList.remove("show")
                }
            }

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