class Animal {
  constructor(name, legCount, speak) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speak;
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`;
  }
  // static functions of a class are not associated to a object but are linked to class itself.
  // they are called using Animal.walks();
  static walks() {
    console.log("every animal walks");
  }
}

const dog = new Animal("dog", 4, "bark");
console.log(dog);
console.log(dog.describe());
