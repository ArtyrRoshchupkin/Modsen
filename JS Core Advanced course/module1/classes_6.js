class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    yearSalary() {
        return this.salary * 12
    }
}

class Manager extends Employee {
    constructor(name, salary, bonus) {
        super(name, salary)
        this.bonus = bonus
    }

    yearSalary() {
        return super.yearSalary() + this.bonus;
    }
}

const employee = new Employee('Micel', 200)

const manager = new Manager('Max', 300, 10)
const manager1 = new Manager('Sam', 270, 20)

console.log(manager.yearSalary(), manager1.yearSalary());