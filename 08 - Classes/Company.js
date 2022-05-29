class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (name == '' || name == null || name == undefined) {
            throw new Error('Invalid input!');
        }
        if (salary == '' || salary == null || salary == undefined || salary < 0 || typeof salary == NaN || typeof salary != 'number') {
            throw new Error('Invalid input!');
        }
        if (position == '' || position == null || position == undefined) {
            throw new Error('Invalid input!');
        }
        if (department == '' || department == null || department == undefined) {
            throw new Error('Invalid input!');
        }
        if (this.departments[department] == undefined) {
            this.departments[department] = {};
        }
        this.departments[department][name] = {
            name: name,
            salary: salary,
            position: position,
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let departementSalaries = Object.entries(this.departments);
        let bestAvgSalary = 0;
        let bestDept;
        let bestDeptEmployees;
        for (let [key, value] of departementSalaries) {
            let totalSalaries = 0;
            let employeesNum = 0;
            if (bestDept == undefined) {
                bestDept = key;
                bestDept = value;
            }
            let employeesObjects = Object.values(value);
            for (let obj of employeesObjects) {
                totalSalaries += obj.salary;
                employeesNum++;
            }
            let currentDeptAvgSalary = totalSalaries / employeesNum;
            if (bestDept == undefined || currentDeptAvgSalary > bestAvgSalary) {
                bestDept = key;
                bestDeptEmployees = value;
                bestAvgSalary = currentDeptAvgSalary.toFixed(2);
            }
        }
        let finalStr = `Best Department is: ${bestDept}\nAverage salary: ${bestAvgSalary}`;
        let sortEmployees = Object.values(bestDeptEmployees)
            .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
        for (let person of sortEmployees){
            finalStr += `\n${person.name} ${person.salary} ${person.position}`;
        }
        return finalStr;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
// console.log(c.departments);
console.log(c.bestDepartment());