--Display female passengers who survived and are older than 30:
SELECT *
FROM tested
WHERE Sex = 'female' AND Survived = 1 AND Age > 30;


--Find the average age of men who didn't survive:
SELECT AVG(Age) AS average_age
FROM tested
WHERE Sex = 'male' AND Survived = 0;


--Display information for passengers who spent between $20 and $50 on their tickets and got on the ship at port 'C':
SELECT *
FROM tested
WHERE Fare BETWEEN 20 AND 50 AND Embarked = 'C';


--Find the total number of survivors in the first class:
SELECT COUNT(*) AS total_survivors_first_class
FROM tested
WHERE Survived = 1 AND Pclass = 1;


--Show the information of passengers who boarded from Cherbourg (port 'C') and spent more than $75 on their tickets:
SELECT *
FROM tested
WHERE Embarked = 'C' AND Fare > 75;