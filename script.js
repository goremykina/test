const options = {
    name: 'test',
    weight: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    }
}

let counter = 0;
for (let key in options) {
    // if(typeof(options[key]) === 'object') {
    //     for (let i in options[key]) {
    //         console.log(`Св-во ${i} имеет значение ${options[key][i]}`)
    //     }
    // } else {
    //     console.log(`Св-во ${key} имеет значение ${options[key]}`)
    //     counter++
    // }
    counter++
}

console.log(counter)