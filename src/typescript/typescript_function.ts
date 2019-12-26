class FuncStudy {

  constructor() {
    this.loop();
  }

  public myAdd :  (x:number, y:number) => number = function (x,y) {
    return x+y
  };

  public add(x:number, y:number) {return x+y};

  nameCall(firstName: string, lastName? : string) {
    return firstName + ' - ' + lastName;
  };

  loop() {
    let pets = new Set(["Cat", "Dog", "Hamster"]);

    for (let pet in pets) {
      console.log(pet); // "species"
    }

    pets.forEach((a) => console.log(a))

  }

}

export default FuncStudy