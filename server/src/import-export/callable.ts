// 
// Export a function with a primitive return type
// 
export function sayHello(): string {
  return "Saying Hello!"
}

// 
// Export a function with a primitive arguments
// 
export function sayHelloWithArgs(message: string): string {
  return `Hello! ${message}`
}