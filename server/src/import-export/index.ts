// Import all
import * as callable from './callable'

// Import specific function
import { sayHelloWithArgs } from './callable'

let rval: string = callable.sayHello()
console.log(rval)

console.log(sayHelloWithArgs("Amitabh"))