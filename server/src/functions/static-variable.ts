// Source: https://basarat.gitbooks.io/typescript/docs/tips/statefulFunctions.html
// Since JavaScript (or TypeScript) doesn't have function statics
// you can achieve the same thing using various abstractions that
//wrap over a local variable e.g. using a class:
const {called} = new class {
    count = 0
    called = () => {
        this.count++
        console.log(`Called : ${this.count}`)
    }
}

called() // Called : 1
called() // Called : 2