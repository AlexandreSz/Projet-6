// Calcul et affichage du total des "Likes" // ________________________________________________________________

function manageLikes() {


    const mediaHeartsElements = Array.from(document.querySelectorAll('#coeur'));

    const mediaLikesNumberElements = document.querySelectorAll('.nbLike');
    const pageLikesElement = document.querySelector('.infos__likes__number');


    // like and dislike
    for (let mediaHeart of mediaHeartsElements) {
        mediaHeart.addEventListener('click', function() {

            // Selects the number of likes corresponding to the heart
            likeDislike(mediaHeart, pageLikesElement);
        })
    }

    // incrément et décrément avec ENTER


    for (let mediaHeart of mediaHeartsElements) {
        mediaHeart.addEventListener('keydown', function(e) {
            if (e.keyCode == "13") {
                likeDislike(mediaHeart, pageLikesElement);

            }
        })

    }

    //-------------------------------------------------------------------------------------//

    /**
     * calcul de la somme des likes de la page
     * @returns { String }
     */
    const sumOfAllMediasLikes = () => {
        const listOfLikes = [];
        let sumOfLikes = 0;
        // création d'un taleau 
        mediaLikesNumberElements.forEach((like) => {
            listOfLikes.push(Number(like.textContent));
        });
        sumOfLikes = listOfLikes.reduce((a, b) => a + b, 0);

        return sumOfLikes;
    };

    // Display the sum of the likes on the bottom of the page
    pageLikesElement.textContent = sumOfAllMediasLikes();


    //----------------------------------------------------------------------------------//

}

export { manageLikes }

function likeDislike(mediaHeart, pageLikesElement) {
    const like1 = mediaHeart.parentElement.querySelector('.nbLike').innerHTML;

    const likes = mediaHeart.parentElement.querySelector('.nbLike');
    const currentLike = likes.getAttribute('data-like');

    // +1 ou -1 des likes
    if (like1 === currentLike) {
        likes.textContent = Number(likes.textContent) + 1;
        pageLikesElement.textContent++;
        mediaHeart.style.color = "red";

    } else if (like1 > currentLike) {
        likes.textContent = Number(likes.textContent) - 1;
        pageLikesElement.textContent--;
        mediaHeart.style.color = "#D3573C";
    }
}