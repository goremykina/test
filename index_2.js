
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

// function fib2(number) {
//     if (typeof(number) !== 'number' || number === 0) {
//         return '';
//     }
//
//     if (number === 1)
//         return '0';
//
//     let result = '0 1';
//     if (number === 2)
//         return result;
//
//     let penultimate = 0;
//     let last = 1;
//
//     for (let i = 2; i < number; ++i) {
//         const current = penultimate + last;
//         result += ` ${current}`;
//
//         penultimate = last;
//         last = current;
//     }
//
//     return result;
// }
//
// function fib(number) {
//     if (typeof(number) !== 'number' || number === 0) {
//         return '';
//     }
//
//     const arr = [0, 1];
//     if (number < 3) {
//         return arr.slice(0, number).join(' ');
//     }
//
//     for (let i = 2; i < number; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//
//     return arr.join(' ');
// }
//
// console.log(fib2(7))
//
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }
//
// function isBudgetEnough(data) {
//     const square = data.shops.reduce((acc, shop) => acc + shop.width * shop.length, 0)
//     const volume = square * data.height
//     const allCost = volume * data.moneyPer1m3;
//     const res = data.budget - allCost
//
//     return res > 0 ? 'Бюджета достаточно' : 'Бюджета недостаточно';
// }
//
// console.log(isBudgetEnough(shoppingMallData))

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const result = [];
    const lastElIndex = Math.floor(arr.length / 3) * 3;

    // for (let i = 0; i < lastElIndex; ++i) {
    //     const groupIndex = Math.floor(i / 3);
    //     const group = result[groupIndex] ??= [];
    //
    //     group.push(arr[i]);
    // }

    for (let i = 0; i < lastElIndex;) {
        const row = [];

        do  {
            row.push(arr[i])
            i++
        } while (row.length < 3)

        result.push(row);
    }

    const remainingStudents = arr.slice(lastElIndex);
    result.push(`Оставшиеся сутденты: ${remainingStudents.length ? remainingStudents.join(', ') : '-'}` )

    // let remainingStudents = `Оставшиеся студенты: `
    //
    // if (arr.length > 9) {
    //     for (let i = lastEl; i < arr.length; i++) {
    //         remainingStudents += arr[i]
    //         console.log(arr[i], remainingStudents)
    //     }
    // } else {
    //     remainingStudents += '-';
    // }
    //
    // result.push(remainingStudents)
    return result
}

console.log(sortStudentsByGroups(students))