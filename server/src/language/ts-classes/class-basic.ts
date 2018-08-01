class Greeter {
  private static defaultGreeting = 'World'

  // Static declaration only available in Typescript
  greeting = Greeter.defaultGreeting;

  constructor(msg?: string) {
    if (msg) {
      this.greeting = msg
    }
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

console.log(new Greeter().greet());
console.log(new Greeter('Amitabh').greet());
