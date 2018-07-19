// 
// References:
// https://www.youtube.com/watch?v=-vR3a11Wzt0
// 

// Old way
let voxel = {x: 3.6, y: 7.4, z: 4.56};
let xv = voxel.x;
let yv = voxel.y;
let zv = voxel.z;

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
// q, r take 1st and 2nd value from the array
const [q, r] = [1, 2, 3, 4]