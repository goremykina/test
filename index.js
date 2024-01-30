// let numberOfFilms;
//
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
//
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
//     }
// }
//
// // start();
//
//
// const personalMovies = {
//     count: numberOfFilms,
//     movies : {},
//     actors: {},
//     genres: [],
//     privat: false
// };
//
// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const film = prompt('Один из последних просмотренных фильмов').trim();
//         const rate = prompt('На сколько го оцените?');
//
//         if (film !== null  && rate !== null && film.length < 50 && film !== '' && rate !== "") {
//             personalMovies.movies[film] =  rate;
//             console.log('ok')
//         } else {
//             i--
//             console.log('error')
//         }
//     }
// }
//
// // rememberMyFilms();
//
// function detectPersonalLevel() {
//     if (personalMovies.count < 10) {
//         console.log('Как-то мало фильмов смотришь)')
//     } else  if (personalMovies.count > 10 && personalMovies.count < 30) {
//         console.log('Гуд')
//     } else if (personalMovies.count > 30) {
//         console.log('ОООО, not bad ^_^')
//     } else {
//         console.log('Sorry, error')
//     }
// }
//
// // detectPersonalLevel();
//
// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovies)
//     }
// }
//
// showMyDB(personalMovies.privat);
//
//
//
// function writeYouGenres() {
//     for (let i = 1; i <= 3; i++) {
//         personalMovies.genres.push((+prompt(`Ваш любимый жанр под номером ${i}`)))
//     }
// }
//
// writeYouGenres();


// function calculateVolumeAndArea(number) {
//     if (!Number.isInteger(number) || number <= 0) {
//         return 'Произошла ошибка'
//     } else {
//         return (`Объем куба: ${Math.pow(number, 3)}, площадь всей поверхности: ${Math.pow(number, 2) * 6}` )
//     }
// }

// console.log(calculateVolumeAndArea(5))

// function getCoupeNumber(number) {
//     if (!Number.isInteger(number) || number < 0) {
//         return 'Ошибка. Проверьте правильность введенного номера места'
//     } else if (number === 0  || number > 36) {
//         return 'Таких мест в вагоне не существует'
//     } else {
//         return Math.ceil(number / 4)
//     }
// }
//
// console.log(getCoupeNumber(33))

// function pluralyze(base, number) {
//     const twoLastDigits = number % 100;
//     if (twoLastDigits >= 11 && twoLastDigits <= 14)
//         return base + 'ов';
//
//     const lastDigit = number % 10;
//     if (lastDigit === 1)
//         return base;
//
//     if (lastDigit >= 2 && lastDigit <= 4)
//         return base + 'а';
//
//     return base + 'ов';
// }
//
// function getTimeFromMinutes(numbersOfMin) {
//     if (!Number.isInteger(numbersOfMin) || numbersOfMin < 0) {
//         return 'Ошибка, проверьте данные'
//     } else {
//         const hours = Math.floor(numbersOfMin / 60);
//         const min = numbersOfMin - hours * 60;
//
//         const hourUnit = pluralyze('час', hours);
//         return `Это ${hours} ${hourUnit} и ${min} минут`;
//     }
// }
//
// console.log(getTimeFromMinutes(800))
//
// function findMaxNumber(num1, num2, num3, num4) {
//     let max = 0;
//     let arr = []
//     arr.push(num1, num2, num3, num4)
//     if (arr.length < 4) {
//         return 0
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             if (typeof(arr[i]) !== 'number') {
//                 return  0
//             } else if (arr[i] > max) {
//                 max = arr[i]
//             }
//         }
//     }
//
//     return max
// }
//
// console.log(findMaxNumber(2,4,6, 89))

function fib2(number) {
    if (typeof(number) !== 'number' || number === 0) {
        return '';
    }

    if (number === 1)
        return '0';

    let result = '0 1';
    if (number === 2)
        return result;

    let penultimate = 0;
    let last = 1;

    for (let i = 2; i < number; ++i) {
        const current = penultimate + last;
        result += ` ${current}`;

        penultimate = last;
        last = current;
    }

    return result;
}

function fib(number) {
    if (typeof(number) !== 'number' || number === 0) {
        return '';
    }

    const arr = [0, 1];
    if (number < 3) {
        return arr.slice(0, number).join(' ');
    }

    for (let i = 2; i < number; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }

    return arr.join(' ');
}

console.log(fib2(7))