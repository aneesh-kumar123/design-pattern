//factory design for name honda
class Honda {
  static newHonda(typeofvehicle) {
    //make like switch case that if match call another class with that value
    switch (typeofvehicle) {
      case 'bike':
        return Bike.newBike()
        break;
      case 'car':
        return Car.newCar()
        break;
      case 'truck':
        return Truck.newTruck()
        break;
      case 'scooter':
        return Scooter.newScooter()
        break;
      default:
        return 'no match'


    }

  }

}

class Bike
{
  constructor() {
    this.name = 'bike'
  }
  static newBike() {
    return new Bike()
  }
 
}
class Car
{
  constructor() {
    this.name = 'car'
  }
  static newCar() {
    return new Car()
  }
}

class Truck
{
  constructor() {
    this.name = 'truck'
  }
  static newTruck() {
    return new Truck()
  }
}

class Scooter
{
  constructor() {
    this.name = 'scooter'
  }
  static newScooter() {
    return new Scooter()
  }
}


const bike = Honda.newHonda('bike');
console.log(bike.name);  

const car = Honda.newHonda('car');
console.log(car.name);  

const truck = Honda.newHonda('truck');
console.log(truck.name);  

const scooter = Honda.newHonda('scooter');
console.log(scooter.name); 

const unknown = Honda.newHonda('plane');
console.log(unknown); 
