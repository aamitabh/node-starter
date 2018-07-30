// Old way
// var link = function (height, color, url) {
//     var height = height || 50
//     var color = color || 'red'
//     var url = url || 'http://azat.co'
//     ...
// }

// New way
const link = (height: number = 50, color: string = 'red', url: string = 'http://azat.co') => {
    return `${url}/height=${height};color=${color}`
}

console.log(link())
console.log(link(20, 'gold', 'http://abs.com'))
