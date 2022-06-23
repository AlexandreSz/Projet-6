export function tri(event, filteredMedia) {

    if (event.currentTarget.value == 'populaire') {
        filteredMedia.sort((a, b) => (a.likes - b.likes));
        filteredMedia.reverse();
    }

    if (event.currentTarget.value === 'date') {
        filteredMedia.sort((a, b) => {
            if (a.date < b.date) {
                return -1;
            }
            if (a.date > b.date) {
                return 1;
            }
            return 0;
        });
    }
    if (event.currentTarget.value === 'titre') {
        filteredMedia.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
    }
}