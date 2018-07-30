import * as colors from 'colors'
import * as chalk from 'chalk'

// --------------------------------------------------------
// Default and Optional parameters and return types
// --------------------------------------------------------
console.log('// ----------------------------------------')
console.log('// Default and Optional parameters and return types')
console.log('// ----------------------------------------')
function getPerson({ req = "John", res = "Doe" }: { req?: string, res?: string }): { first: string; last: string } {
  return { first: req, last: res }
}

console.log(`\ngetPerson{{}} = ${JSON.stringify(getPerson({}), undefined, 2)}`)
console.log(`\ngetPerson({res: "Arora"}) = ${JSON.stringify(getPerson({ res: "Arora" }), undefined, 2)}`)
console.log(`\ngetPerson({req: "Amitabh", res: "Arora"}) = ${JSON.stringify(getPerson({ req: "Amitabh", res: "Arora" }), undefined, 2)}`)

// --------------------------------------------------------
// Pass object types "httpReqRes" and "user"
// --------------------------------------------------------
console.log('\n\n// ----------------------------------------')
console.log('// Pass object types "httpReqRes" and "user"')
console.log('// ----------------------------------------')

// Define types with option fields
type httpReqRes = { req?: string; res?: string }
type user = { first?: string; last?: string }

function getTypedPerson({ req = 'John', res = 'Doe' }: httpReqRes): user {
  return { first: req, last: res }
}
console.log(`\n({}) = ${JSON.stringify(getTypedPerson({}), undefined, 2)}`)
console.log(`\n({res: "Arora"}) = ${JSON.stringify(getTypedPerson({ res: "Arora" }), undefined, 2)}`)
console.log(`\n({req: "Amitabh", res: "Arora"}) = ${JSON.stringify(getTypedPerson({ req: "Amitabh", res: "Arora" }), undefined, 2)}`)

// function getTypedPerson1(rr: httpReqRes = { req: "John", res: "Doe" }): user {
//   return { first: rr.req, last: rr.res }
// }
// console.log(`\n({}) = ${JSON.stringify(getTypedPerson1({}), undefined, 2)}`)
// console.log(`\n({res: "Arora"}) = ${JSON.stringify(getTypedPerson1({ res: "Arora" }), undefined, 2)}`)
// console.log(`\n({req: "Amitabh", res: "Arora"}) = ${JSON.stringify(getTypedPerson1({ req: "Amitabh", res: "Arora" }), undefined, 2)}`)

