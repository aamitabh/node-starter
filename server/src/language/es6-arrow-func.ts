// Old way
// var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
// var messages = ids.map(function (value) {
//   return "ID is " + value // explicit return
// })

// New way.
// Return is implicit
// parenthesis around fir single parameters
var ids = ['5632953c4e345e145fdf2df8','563295464e345e145fdf2df9']
var messages = ids.map(value => `ID is ${value}`) // implicit return
