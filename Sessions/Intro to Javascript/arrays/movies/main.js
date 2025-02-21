const genreList = document.querySelector('#genreList');
const movies = document.querySelector('.movies');
const main = document.querySelector('#main')

let currentGenre = 0;

for (let i = 0; i < allMovies.length; i++) {
    genreList.innerHTML += `
    <option value="${i}">${allMovies[i].genre}</option>
    `;
}
loadMovies(currentGenre); //default list
showMovie(0);
function loadMovies(m) {
    currentGenre = m;
    let myMovies = allMovies[m].movies;
    movies.innerHTML = '';
    for (let i = 0; i < myMovies.length; i++) {
        movies.innerHTML += `
            <li onclick="showMovie(${i})">
                <div><img src="img/${myMovies[i].thumb}" alt=""></div>
                <h3>${myMovies[i].title}</h3>
                <div class="datetime">
                    <p>${myMovies[i].date}</p>
                    <p>Length: ${myMovies[i].length} min</p>
                </div>
            </li>
        `;
    }
}

genreList.addEventListener('change', function (obj) {
    loadMovies(obj.target.value);
}); 

function showMovie(e) {
    let oneMovie = allMovies[currentGenre].movies[e];
    main.innerHTML = '';
    main.innerHTML += `
        <div>
            <p>${oneMovie.date}</p>
            <p>${oneMovie.length}</p>
        </div>
        <h1>${oneMovie.title}</h1>
        ${oneMovie.trailer}
        <p>${oneMovie.desc}</p>
        <h4>${oneMovie.actors}</h4>
    `;
}


