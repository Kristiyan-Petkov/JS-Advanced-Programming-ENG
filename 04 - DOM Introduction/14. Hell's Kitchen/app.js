function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let textract = document.querySelector("#inputs > textarea").value;
      let regexp = /(?<=").*(?=")/g
      let regexpResult = textract.match(regexp)[0];
      let arr = regexpResult.split('","');
      let restaurants = {};
      for (let restaurant of arr) {
         let [restaurantName, employees] = restaurant.split(' - ');
         let employeesArr = employees.split(', ')
         let employeesObj = {};
         for (let employee of employeesArr) {
            let [name, salary] = employee.split(' ');
            employeesObj[name] = salary
         }
         if (Object.keys(restaurants).includes(restaurantName)) {
            let employeesToAdd = Object.entries(employeesObj)
            for (let emplToAdd of employeesToAdd) {
               let emplName = emplToAdd[0];
               let emplSalary = Number(emplToAdd[1]);
               restaurants[restaurantName].employeesList[emplName] = emplSalary;
            }
         } else {
            let restaurantObj = {
               name: restaurantName,
               employeesList: employeesObj,
               averageSalary() {
                  let salaries = Object.values(this.employeesList).map(Number);
                  let employeesNum = salaries.length;
                  let salariesSum = salaries.reduce((a, b) => a + b);
                  let averageWage = salariesSum / employeesNum;
                  return averageWage;
               },
               bestSalary() {
                  let salaries = Object.values(this.employeesList).map(Number).sort((a, b) => b - a);
                  return salaries[0];
               }
            }
            restaurants[restaurantName] = restaurantObj;
         }
      }
      let bestRestaurantAverageSalary = Number.MIN_SAFE_INTEGER;
      let bestRestaurantName = ' ';
      let bestSalary = Number.MIN_SAFE_INTEGER;
      let bestTeam = ' ';
      let finalRestaurantsList = Object.entries(restaurants);
      for (let element of finalRestaurantsList) {
         let currentAverage = element[1].averageSalary();
         if (currentAverage > bestRestaurantAverageSalary) {
            bestRestaurantName = element[0];
            bestRestaurantAverageSalary = currentAverage;
            let sortingEmployees = [];
            for (let person in element[1].employeesList) {
               sortingEmployees.push([person, element[1].employeesList[person]]);
            }
            let employeesFinalList = sortingEmployees.sort((a, b) => b[1] - a[1]);
            bestTeam = employeesFinalList;
            bestSalary = Number (employeesFinalList[0][1]);
         }
      }
      let resultLine1 = `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantAverageSalary.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;
      let resultLine2 = `Name: ${bestTeam.join(' Name: ').split(',').join(' With Salary: ')}`;
      let output1 = document.querySelector("#bestRestaurant > p");
      output1.innerHTML = resultLine1;
      let output2 = document.querySelector("#workers > p");
      output2.innerHTML = resultLine2;
   }
}