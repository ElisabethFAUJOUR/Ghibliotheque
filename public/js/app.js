const app = {
    init() {
        app.searchMovies()
    },

    searchMovies() {
        const searchInput = document.querySelector('.search-bar__input');
        const moviesElement = document.querySelectorAll('.movie__element');
        const noResultsMessage = document.querySelector('.no-results-message');

        searchInput.addEventListener('input', () => {
            const searchText = searchInput.value.toLowerCase();
            let resultFound = false; // To keep track of whether any results were found

            moviesElement.forEach(movieElement => {
                const movieTitle = movieElement.querySelector('.movie__title').textContent.toLowerCase();
                const movieDate = movieElement.querySelector('.movie__date').textContent.toLowerCase();

                if (movieTitle.includes(searchText) || movieDate.includes(searchText)) {
                    movieElement.style.display = 'block';
                    resultFound = true;
                } else {
                    movieElement.style.display = 'none';
                }
            });

            if (resultFound) {
                noResultsMessage.style.display = 'none';
            } else {
                noResultsMessage.style.display = 'block';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', app.init);

