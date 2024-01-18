const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

const personalMovies = {
    count: numberOfFilms,
    movies : {},
    actors: {},
    genres: [],
    privat: false
};

const film = prompt('Один из последних просмотренных фильмов');
const rate = prompt('На сколько го оцените?');
const anotherfilm = prompt('Один из последних просмотренных фильмов');
const anotherrate = prompt('На сколько го оцените?');

personalMovies.movies[anotherfilm] =  rate;
personalMovies.movies[film] =  anotherrate;
console.log(personalMovies)


