const app = {
    init() {
        app.searchMovies()
    },

    searchMovies() {
        const searchInput = document.querySelector('.search-bar__input');
        const moviesElements = document.querySelectorAll('.movie__element');
        let noResultsMessage = document.querySelector('.no-results-message');

        searchInput.addEventListener('input', () => {
            const searchText = searchInput.value.toLowerCase();
            let resultFound = false;

            moviesElements.forEach(movieElement => {
                const movieTitle = movieElement.querySelector('.movie__title').textContent.toLowerCase();
                const movieDate = movieElement.querySelector('.movie__date').textContent.toLowerCase();

                if (movieTitle.includes(searchText) || movieDate.includes(searchText)) {
                    movieElement.style.display = 'flex';
                    resultFound = true;
                } else {
                    movieElement.style.display = 'none';
                }
            });

            if (resultFound) {
                if (noResultsMessage) {
                    noResultsMessage.classList.add('hidden');
                    noResultsMessage = '';
                }
            } else {
                if (!noResultsMessage) {
                    noResultsMessage = document.createElement('p');
                    noResultsMessage.textContent = 'No Result Found';
                    noResultsMessage.classList.add('no-results-message');
                    const movieContainer = document.querySelector('.movies__container');
                    movieContainer.appendChild(noResultsMessage);
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', app.init);

