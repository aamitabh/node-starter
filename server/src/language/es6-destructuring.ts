// 
// References:
// https://www.youtube.com/watch?v=-vR3a11Wzt0
// 

// Old way
let voxel = {x: 3.6, y: 7.4, z: 4.56};
// let xv = voxel.x;
// let yv = voxel.y;
// let zv = voxel.z;

// New way: Assign variables from objects
let {x, y, z} = voxel
let {x: a, y: b, z: c} = voxel // Rename the variables

// Assign variables from Nested objects
const line = {
  start: {x: 0, y: 0},
  end: {x: 5, y: 9}
}
  // start on left is assigned from line.start
  // start.x and start.y are then mapped to startX, startY respectively
const {start: {x: startX, y: startY}} = line

// Assign variables from arrays
// q, r take 1st and 3nd value from the array
const [q,, r] = [1, 2, 3, 4]

// Rest operator
// tail should be [3, 4]
const [q2, r2, ...tail] = [1, 2, 3, 4, 5]

// Pass objects as function parameters
// See functions/passing-objects.ts

// Practical example
// const {json: jsonMiddleware} = require('body-parser')
// const {username, password} = req.body
//
// [line1, line2, line3, , line5] = file.split('\n')

// When you destructure on properties that are not defined, you get undefined
var { missing } = {};
console.log(missing); // should return undefined