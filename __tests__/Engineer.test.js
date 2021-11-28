const Engineer = require("../lib/Engineer.js");
const testEngineer = new Engineer(
  "richard",
  3,
  "richard@gmail.com",
  "richard-github"
);

//testing Engineer constructor
test("checks that Manager constructor works", () => {
  expect(testEngineer.name).toBe("richard");
  expect(testEngineer.id).toBe(3);
  expect(testEngineer.email).toBe("richard@gmail.com");
  expect(testEngineer.github).toBe("richard-github");
});

//testing if engineer methods work
test("checks that Engineer extended getName() method from Employee", () => {
  expect(testEngineer.getName()).toBe("richard");
});
test("checks that Engineer extended getID() method from Employee", () => {
  expect(testEngineer.getID()).toBe(3);
});
test("checks that Engineer extended getEmail() method from Employee", () => {
  expect(testEngineer.getEmail()).toBe("richard@gmail.com");
});

//tests the getRole() method
test("checks that getRole() method works", () => {
  expect(testEngineer.getRole()).toBe("Engineer");
});

//tests the getGitHub method
test("checks that Engineer extended getName method from Employee", () => {
  expect(testEngineer.getGitHub()).toBe("richard-github");
});
