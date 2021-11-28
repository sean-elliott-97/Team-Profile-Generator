const Employee = require("../lib/Employee.js");
const testEmployee=new Employee('sean',1,'sean@gmail.com');

//testing Employee constructor
test('checks that Employee constructor works', ()=>{
expect(testEmployee.name).toBe('sean');
expect(testEmployee.id).toBe(1);
expect(testEmployee.email).toBe('sean@gmail.com');

});

//testing getName method
test('checks if the getName() method works',()=>{
    expect(testEmployee.getName()).toBe('sean');
});

//testing getName method
test('checks if the getID() method works',()=>{
    expect(testEmployee.getID()).toBe(1);
});

//testing getEmail method
test('checks if the getEmail() method works',()=>{
    expect(testEmployee.getEmail()).toBe('sean@gmail.com');
});

//testing getRole method
test('checks if the getRole() method works',()=>{
    expect(testEmployee.getRole()).toBe('Employee');
});
