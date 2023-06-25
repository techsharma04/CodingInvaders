let employees = [{

  firstName: 'Steve',

  lastName: 'Rogers',

  age: 27,

  joinedDate: 'December 15, 2017'

}, {

  firstName: 'Tony',

  lastName: 'Stark',

  age: 25,

  joinedDate: 'January 15, 2019'

}, {

  firstName: 'Bruce',

  lastName: 'Banner',

  age: 30,

  joinedDate: 'February 15, 2011'

}];


  employees.push({firstName: 'Black', lastName: 'Widow', age: 27, joinedDate: 'December 25, 2018'});


  employees.unshift({firstName: 'Winter', lastName: 'Soldier', age: 27, joinedDate: 'October 15, 2007'});


 

console.log("Output 1:");
employees.forEach(function(employee) {
  console.log(`This is ${employee.firstName} ${employee.lastName}, aged ${employee.age} joined the company on ${employee.joinedDate}  `)
});


employees.forEach(function(employee) {
  employee.joinedDate = "December 13, 2021";
});


console.log(`\n Output 2`);
employees.forEach(function(employee) {
  console.log(`This is ${employee.firstName} ${employee.lastName}, aged ${employee.age} joined the company on ${employee.joinedDate}  `)
});
