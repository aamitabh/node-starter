import * as colors from 'colors'
import * as chalk from 'chalk'

// --------------------------------------------------------
// Default and Optional parameters and return types
// --------------------------------------------------------
function getPerson({ req = "John", res = "Doe" }: { req?: string, res?: string }): { first: string; last: string } {
  return { first: req, last: res }
}

console.log(`\ngetPerson{{}} = ${JSON.stringify(getPerson({}), undefined, 2)}`)
console.log(`\ngetPerson({res: "Arora"}) = ${JSON.stringify(getPerson({ res: "Arora" }), undefined, 2)}`)
console.log(`\ngetPerson({req: "Amitabh", res: "Arora"}) = ${JSON.stringify(getPerson({ req: "Amitabh", res: "Arora" }), undefined, 2)}`)

// --------------------------------------------------------
// Pass object types "httpReqRes" and "user"
// --------------------------------------------------------
type httpReqRes = { req?: string; res?: string }
type user = { first?: string; last?: string }
  // types defined with option fields

function getTypedPerson(rr: httpReqRes = {req: "John", res: "Doe"}): user {
  return { first: rr.req, last: rr.res }
}

let hrr: httpReqRes = {req: "John", res: "Doe"}
console.log(`\ngetTypedPerson({}) = ${JSON.stringify(getTypedPerson({}), undefined, 2)}`)
console.log(`\ngetTypedPerson({res: "Arora"}) = ${JSON.stringify(getTypedPerson({ res: "Arora" }), undefined, 2)}`)
console.log(`\ngetTypedPerson({req: "Amitabh", res: "Arora"}) = ${JSON.stringify(getTypedPerson({ req: "Amitabh", res: "Arora" }), undefined, 2)}`)
