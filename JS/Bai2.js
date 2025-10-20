class Car {
  move() {
    return "Xe hơi đang chạy...";
  }
}
class Bicycle {
  move() {
    return "Xe đạp đang chạy...";
  }
}

function start(vehicle) {
  if (typeof vehicle.move === "function") {
    console.log(vehicle.move());
  } else {
    console.log("Không thể di chuyển!");
  }
}
const car = new Car();
// console.log(typeof car.move);
const bike = new Bicycle();
start(car);
start(bike);
start({});
