class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getInfo() {
    return [this.name, this.age, this.salary];
  }
}
// const p1 = new Employee("A", 18, 180000);
// console.log(p1);
class Developer extends Employee {
  constructor(name, age, salary, programmingLanguage) {
    super(name, age, salary);
    this.programmingLanguage = programmingLanguage;
  }

  getInfo() {
    return [this.name, this.age, this.salary, this.programmingLanguage];
  }
}
const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");
// console.log(dev1.programmingLanguage);
// console.log(dev2.programmingLanguage);

class Manager extends Employee {
  constructor(name, age, salary, employee) {
    super(name, age, salary);
    this.employee = [];
  }

  addEmployee(employee) {
    this.employee.push(employee);
    return this.employee;
  }
  getInfo() {
    // return [this.name, this.age, this.salary];
    return `${this.name} - Tuổi: ${this.age} - Lương: ${this.salary}
    - ${dev1.name}, Ngôn ngữ: ${dev1.programmingLanguage} 
    - ${dev2.name}, Ngôn ngữ: ${dev2.programmingLanguage} `;
  }
}
const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);
// console.log(show);
// console.log(manager.getInfo());
console.log(manager.getInfo());
