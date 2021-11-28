//for prompts and file saving
const inquirer = require("inquirer");
const fs = require("fs");
//for generating web page
const generatePage = require("./src/generatePage");
//variables for exported classes from employee files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//array of team members that is updated with new team members
const teamMembers = [];

function init() {
  //function for creating manager of team
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            } else {
              return "Please enter a valid name";
            }
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the manager's Id?",
          validate: (answer) => {
            const validNum = answer.match(/^\d+$/);
            if (validNum) {
              return true;
            } else {
              return "Enter a valid Id";
            }
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the manager's email?",
          validate: (answer) => {
            const validEmail = answer.match(/\S+@\S+\.\S+/);
            if (validEmail) {
              return true;
            } else {
              return "Enter a valid email address";
            }
          },
        },
        {
          type: "input",
          name: "managerOfficeNum",
          message: "What is the manager's office number?",
          validate: (answer) => {
            const validNum = answer.match(/^\d+$/);
            if (validNum) {
              return true;
            } else {
              return "Please enter a valid office number";
            }
          },
        },
      ])
      .then((answers) => {
        const newManager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNum
        );
        //adds manager to teamMembers array
        teamMembers.push(newManager);
        //calls function for adding more team members after creating manager
        createTeam();
      });
  }

  //function for adding additional team members
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamChoice",
          message: "Which type of team member would you like to add?",
          choices: ["Engineer", "Intern", "Create team"],
        },
      ])
      .then((userChoice) => {
        //calls function for creating engineer if user selects Engineer
        //calls function for creating intern if user selects Intern
        //calls buildTeam function if user selects Create team
        switch (userChoice.teamChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Something went wrong");
        }
      });
  }

  //function for adding an engineer
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "what is the engineer's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            } else {
              return "Please enter a valid name";
            }
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "what is the engineer's Id?",
          validate: (answer) => {
            const validNum = answer.match(/^\d+$/);
            if (validNum) {
              return true;
            } else {
              return "Enter a valid Id";
            }
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
          validate: (answer) => {
            const validEmail = answer.match(/\S+@\S+\.\S+/);
            if (validEmail) {
              return true;
            } else {
              return "Enter a valid email address";
            }
          },
        },
        {
          type: "input",
          name: "engineerGitHub",
          message: "what is the engineer's github?",
          validate: (answer) => {
            if (answer != "") {
              return true;
            } else {
              return "Enter a valid GitHub profile";
            }
          },
        },
      ])
      .then((answers) => {
        const newEngineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGitHub
        );
        teamMembers.push(newEngineer);
        createTeam();
      });
  }

  //function for adding an intern
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            } else {
              return "Please enter a valid name";
            }
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's Id?",
          validate: (answer) => {
            const validNum = answer.match(/^\d+$/);
            if (validNum) {
              return true;
            } else {
              return "Enter a valid Id";
            }
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email?",
          validate: (answer) => {
            const validEmail = answer.match(/\S+@\S+\.\S+/);
            if (validEmail) {
              return true;
            } else {
              return "Enter a valid email address";
            }
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the intern's school?",
          validate: (answer) => {
            if (answer != "") {
              return true;
            } else {
              return "Enter a valid school name";
            }
          },
        },
      ])
      .then((answers) => {
        const newIntern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(newIntern);
        createTeam();
      });
  }

  //writes to file
  function writeToFile(fileName,data){
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
    });
  }
  //creates webpage
  function buildTeam() {
    console.log("Creating team");
    writeToFile("./dist/teamPage.html",generatePage(teamMembers));
  }
  //manager prompts
  createManager();
}

//starts app
init();
