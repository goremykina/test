const personalMovies = {
    count: 0,
    movies : {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovies.count = +prompt('Сколько фильмов вы уже посмотрели', '');

        while (personalMovies.count  === ' ' || personalMovies.count  == null || isNaN(personalMovies.count )) {
            personalMovies.count  = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов').trim();
            const rate = prompt('На сколько го оцените?');

            if (film !== null  && rate !== null && film.length < 50 && film !== '' && rate !== "") {
                personalMovies.movies[film] =  rate;
                console.log('ok')
            } else {
                i--
                console.log('error')
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovies.count < 10) {
            console.log('Как-то мало фильмов смотришь)')
        } else  if (personalMovies.count > 10 && personalMovies.count < 30) {
            console.log('Гуд')
        } else if (personalMovies.count > 30) {
            console.log('ОООО, not bad ^_^')
        } else {
            console.log('Sorry, error')
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovies)
        }
    },
    toggleVisibleMyDB: function () {
        return personalMovies.privat = !personalMovies.privat
    },
    writeYouGenres : function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase();
            if (genre === '' || genre === null) {
                i--
            } else {
                personalMovies.genres.push((genre))
            }
        }

        personalMovies.genres.forEach((item, index) => {
            console.log(`Любимый жанр ${index + 1} это ${item}`)
        })
    }
};