const Intern = require("../lib/Intern");
const testIntern = new Intern("stuart", 4, "stuart@gmail.com", "stuart school");

//testing Intern constructor
test("checks that Intern constructor works", () => {
  expect(testIntern.name).toBe("stuart");
  expect(testIntern.id).toBe(4);
  expect(testIntern.email).toBe("stuart@gmail.com");
  expect(testIntern.school).toBe("stuart school");
});

//testing if intern methods work
test("checks that Intern extended getName() method from Employee", () => {
  expect(testIntern.getName()).toBe("stuart");
});
test("checks that Intern extended getID() method from Employee", () => {
  expect(testIntern.getID()).toBe(4);
});
test("checks that Intern extended getEmail() method from Employee", () => {
  expect(testIntern.getEmail()).toBe("stuart@gmail.com");
});

//tests the getRole() method
test("checks that getRole() method works", () => {
  expect(testIntern.getRole()).toBe("Intern");
});
//tests the getSchool() method
test("checks that getSchool() method works", () => {
  expect(testIntern.getSchool()).toBe("stuart school");
});
