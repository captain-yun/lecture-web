const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies1(API_URL)

function getMovies1() {
    // console.log( fetch(API_URL) );
    fetch(API_URL).then(res => res.json()).then(data => console.log(data.results));

}














































function getMovies(url) {
    // your code
    // API_URL를 사용해 json 데이터 가져와서
    fetch(url)
    .then(res => res.json())
    .then(data => showMovies(data.results));    

    // console.log(data)
    // movie 정보 업데이트
    // showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        movieElem = document.createElement('div')
        movieElem.classList.add('movie')

        movieElem.innerHTML =
        `<img src="${IMG_PATH}${movie.poster_path}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class=${getColorByVoteAverage(movie.vote_average)}>${movie.vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${movie.overview}
        </div>`

        main.append(movieElem);
    })

}

function getColorByVoteAverage(voteAverage) {
    if ( voteAverage >= 7.5 ) {
        return 'green'
    } else if ( voteAverage >= 6 ) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    getMovies(`${SEARCH_API}${search.value}`)
    // Your code
    // SEARCH_API를 사용해 json 데이터 가져와서
    // search한 키워드에 매칭되는 영화정보 업데이트

});

// 추가기능: 평점 7.5점 이상이면 green / 6점 이상이면 orange / 그 이하는 red
