const mysql = require('mysql2');
const express = require('express');
const inquirer = require('inquirer');
const db = require("./db");

const PORT = process.env.PORT || 3001;
const app = express();

const connecttion = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'department_db'
});
    connecttion.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    start();
    });

function start() {
    inquirer
        .prompt([
            {
                name: 'start',
                type: 'list',
                message: 'What would you like to do?',
                choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'QUIT'
                ]
            }
        ]).then (function(answer) {
        switch (answer.start) {
            case "View All Employees":
                view();
                break;
            case "Add Employee":
                add();
                break;
            case "Update Employee Role":
                updateEmployee();
                break;
            case "View All Roles":
                view();
                break;
            case "Add Roles":
                add();
                break;
            case "View All Departments":
                view();
                break;
            case "Add Department":
                add();
                break;
            case "Quit":
                console.log("Finished");
                Quit();            
        }

    });
}

function view(){
    inquirer
        .prompt([
            {
                type: "list",
                name: "view",
                message: "Select one to view:",
                choices: ["Employees", "Department", "Role"]
            }
        ]).then(function(answer){
            switch(answer.view){
                case "Employees":
                    viewAllEmployees();
                    break;
                case "Department":
                    viewAllDepartments();
                    break;
                case "Role":
                    viewAllRoles();
            }
        })
}

function viewAllEmployees() {
    const query = 'SELECT * FROM employee';
    db.query(query, function(err, answer) {
        if (err) throw err;
        console.table('All Employees:', answer); 
        start();
    })
  };

function viewAllDepartments() {
    const query = 'SELECT * FROM departments';
    db.query(query, function(err, answer) {
        if (err) throw err;
        console.table('All Departments:', answer); 
        start();
    })
  };

function viewAllRoles() {
    const query = 'SELECT * FROM roles';
    db.query(query, function(err, answer) {
        if (err) throw err;
        console.table('All Roles:', answer); 
        start();
    })
  };