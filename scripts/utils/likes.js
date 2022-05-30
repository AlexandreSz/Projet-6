// Calcul et affichage du total des "Likes" // ________________________________________________________________

function manageLikes() {

    const pageLikesElement = document.querySelector('.infos__likes__number');

    const mediaLikesNumberElements = document.querySelectorAll('.nbLike');
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
}

export { manageLikes }