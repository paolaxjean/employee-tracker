use employees; 

INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Human Resources"),
       ("Marketing");

INSERT role (title, salary, department_id)
VALUES ("Lead Engineer", 100000, 2),
       ("Junior Engineer", 95000, 2),
       ("Finance Manager", 90000, 1),
       ("Accountant", 850000, 1),   
       ("HR Manager", 80000, 3),
       ("HR Specialist", 75000, 3),
       ("Lead Marketing", 70000, 4),
       ("Marketing Analyst", 65000, 4);    

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES   ("Kim", "Jane", 1, null),
         ("Karina", "Lopez", 2, 1),
         ("Kat", "Budd", 3, null),
         ("Michaela", "Gold", 4, 3),
         ("Paul", "Rud", 5, null),
         ("John", "Snow", 6, 5),
         ("Ayria", "Stark", 7, null),
         ("Danny", "Tar", 8, 2);