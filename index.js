const temperatures = [22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];


/* --------- Part 1 --------- */
/* --------- Task 1 --------- */
const tempGreater = (array) => {
    return array.filter(num => num >= 25);
}
// console.log(tempGreater(temperatures));


/* --------- Task 2 --------- */
const tempLess = (array) => {
    return array.filter(num => num < 25);
}
// console.log(tempLess(temperatures));


/* ------------------------------------------------------------ */


/* --------- Part 2 --------- */
/* --------- Task 3 --------- */
const tempFahrenheit = (array) => {
    return array.map(num => ((num * 9/5) + 32));
}
// console.log(tempFahrenheit(temperatures));


/* --------- Task 4 --------- */
const tempLale = (array) => {
    const newArray = array.map(num => {
        if (num >= 25){
            return 'Warm';
        }else if (num < 25 && num >=20){
            return 'Mild';
        }else if (num < 20){
            return 'Cool';
        }
    });
    return newArray;
}
// console.log(tempLale(temperatures));


/* ------------------------------------------------------------ */


/* --------- Part 3 --------- */
/* --------- Task 5 --------- */
const highestTemp = (array) => {
    const high = array.reduce((max, num) => {
        if (num > max)
            return max = num;
        else return max;
    }, array[0]);
    return high;
}
console.log(highestTemp(temperatures));


/* --------- Task 6 --------- */
const lowestTemp = (array) => {
    const high = array.reduce((max, num) => {
        if (num < max)
            return max = num;
        else return max;
    }, array[0]);
    return high;
}
console.log(lowestTemp(temperatures));