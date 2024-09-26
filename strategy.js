
class ProjectStructure {
  execute(a, b) {
    throw new Error("Method 'execute()' must be implemented.");
  }
}


class AneeshDoAddition extends ProjectStructure {
  execute(a, b) {
    return a + b;
  }
}


class AniketDoSubtraction extends ProjectStructure {
  execute(a, b) {
    return a - b;
  }
}

class AnjikyaDoMultiplication extends ProjectStructure {
  execute(a, b) {
    return a * b;
  }
}

class DeependraDoDivision extends ProjectStructure {
  execute(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
}


class Manager {
  setStrategy(operation) {
    this.operation = operation;
  }
  
  GiveAssignment(a, b) {
    return this.operation.execute(a, b);
  }
}


const manage = new Manager();

manage.setStrategy(new AneeshDoAddition());
console.log(manage.GiveAssignment(5, 3));  

manage.setStrategy(new AniketDoSubtraction());
console.log(manage.GiveAssignment(5, 3));  
