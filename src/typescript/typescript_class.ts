class Greeter {

  private readonly greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return this.greeting;
  }
}

export {Greeter}