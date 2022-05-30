export function lightbox() {


    const modale = document.querySelector('#Lmodal');
    const close = document.querySelector('.close');
    // const links = document.querySelectorAll('.gallerry a');
    const links = Array.from(document.querySelectorAll('.gallerry a'))
        // console.log(linksArray)

    // On ajoute l'écouteur click sur les liens
    for (let link of links) {
        link.addEventListener("click", function(e) {

            // On désactive le comportement des liens
            e.preventDefault();
            //on ajoute l'image du lien cliqué dans la modale
            const content = modale.querySelector(".content-modal");
            // console.log(content)
            content.src = this.href;
            let ext = content.src[content.src.length - 1].toLowerCase();
            // console.log(ext);
            // console.log(ext == 'g')
            // console.log(content.src);
            if (ext == "g") {
                let img = document.createElement('img');
                img.src = content.src;
                img.setAttribute('id', 'lightbox-media');
                while (content.firstChild) {
                    content.removeChild(content.lastChild);
                }
                content.appendChild(img)
            } else {
                let vid = document.createElement('video');
                vid.src = content.src;
                vid.type = "video/mp4";
                vid.controls = true;
                vid.setAttribute('id', 'lightbox-media');
                while (content.firstChild) {
                    content.removeChild(content.lastChild);
                }
                content.appendChild(vid)
            }

            // ************
            // slide ******
            // ************
            const imageBox = document.getElementById('lightbox-media');
            let prev = document.getElementById('prev');
            let next = document.getElementById('next');
            let index;




            next.addEventListener('click', function() {
                index += 1;
                if (index < links.length) {
                    console.log(index < links.length)
                    imageBox.setAttribute('src', links[index])
                } else {
                    index = 0;
                    imageBox.setAttribute('src', links[index])
                }
            })


            prev.addEventListener('click', function() {
                index -= 1;
                if (index >= 0) {
                    imageBox.setAttribute('src', links[index])
                } else {
                    index = links.length - 1;
                    imageBox.setAttribute('src', links[index])
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