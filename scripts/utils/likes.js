// Calcul et affichage du total des "Likes" // ________________________________________________________________

function manageLikes() {

    const pageLikesElement = document.querySelector('.infos__likes__number');
    const mediaHeartsElements = document.querySelector('#coeur');
    const mediaLikesNumberElements = document.querySelectorAll('.nbLike');


    // like and dislike
    let clicked = false;

    mediaHeartsElements.addEventListener("click", () => {

    })


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
    const manageMediaLikes = () => {
        mediaHeartsElements.forEach((mediaHeart) => {
            mediaHeart.addEventListener('click', incrementLikes);

        });
    };
    return { manageMediaLikes };
}

export { manageLikes }