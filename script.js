// const options = {
//     name: 'test',
//     weight: 1024,
//     height: 1024,
//     color: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test')
//     }
// }
//
// options.makeTest()
//
// const {border, bg} = options.color;
//
// console.log(border, bg)

// console.log(Object.keys(options).length)

// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Св-во ${i} имеет значение ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Св-во ${key} имеет значение ${options[key]}`)
//         counter++
//     }
//     counter++
// }
//
// console.log(counter)

// const q = {
//     one: 1,
//     two: 2
// }
//
// const newObj = {...q}
// newObj.tre = 3;
//
// console.log(newObj)
// console.log(q)

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan
//         const {languages} = plan.skills
//         return `Мне ${age} лет и я владею языками : ${(languages).toString().toUpperCase()}`
//     }
// };
//
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))

// function showProgrammingLangs(plan) {
//     let res = ``
//
//     if (!plan.skills.programmingLangs) {
//         return ""
//     } else {
//         for (let lang in plan.skills.programmingLangs) {
//             res += `Язык ${lang} изучен на ${plan.skills.programmingLangs[lang]} `
//         }
//     }
//
//     return res
// }
//
// console.log(showProgrammingLangs(personalPlanPeter))

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
//
// function standardizeStrings(arr) {
//     arr.map((item) => {
//         console.log(item.toLowerCase())
//     })
// }
//
// standardizeStrings(favoriteCities)
//
// const someString = 'This is some strange string';
//
// function reverse(str) {
//     let res = ''
//
//     if (typeof(str) !== 'string') {
//         return "Ошибка!"
//     } else {
//         for (let i = str.length;  i--;) {
//             res += str[i]
//         }
//     }
//     return res
// }
//
// console.log(reverse(someString))

// function availableCurr(arr, missingCurr) {
//     let res = [];
//     if (arr.length === 0) {
//         return 'Нет доступных валют'
//     } else {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] !== missingCurr) {
//                 res.push(arr[i])
//             }
//         }
//     }
//
//     return `Доступные валюты: /n ${res.join('\n')}`
//}


// function createCounter() {
//     let counter = 0;
//
//     const myFunctuon = function () {
//         return counter++
//     }
//
//     return myFunctuon
// }
//
// const incremetn = createCounter();
// const c1 = incremetn();
// const c2 = incremetn();
// const c3 = incremetn();
//
// console.log(c1, c2, c3);


// function sum (a) {
//
//     return function (b) {
//         return a + b
//     }
// }
//
// console.log(sum(3)(6))

/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//     return function (item) {
//         return item >= a && item <= b;
//     };
// }

// function inArray(arr) {
//     return function (item) {
//         for (let i of arr) {
//             if (item === i) {
//                 return true;
//             }
//         }
//
//         return false;
//     };
// }

// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

// arr.filter(inArray([1, 2, 10])); // 1,2
//
// const result = arr.filter((item) => {
//     return [1, 2, 10].includes(item);
// });
//
// const result = arr.filter();
//
// const filter = function(item) {
//     return [1, 2, 10].includes(item);
// }
// const result = arr.filter(filter);
//
// console.log(result);
//
// function f(f2) {
//     return () => f2();
// }
//
// f(() => console.log(1))();
// f(() => console.log(2))();
//
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// users.sort(byField('name'));
// users.sort(byField('age'));
//
// function byField () {
//
// }

// console.log(typeof('1'[0]))


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    console.log(data)
    copy.waitors = [{name: 'Mike', age: 32}]
    return copy;
}

console.log(transferWaitors(restorantData))