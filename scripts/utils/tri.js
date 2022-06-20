export function tri(event, links) {

    if (event.currentTarget.value === 'popularity') {
        links.sort((a, b) => (a.likes - b.likes));
        links.reverse();
    }

    if (event.currentTarget.value === 'date') {
        links.sort((a, b) => {
            if (a.date < b.date) {
                return -1;
            }
            if (a.date > b.date) {
                return 1;
            }
            return 0;
        });
    }
}