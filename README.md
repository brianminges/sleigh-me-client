![loginpage](https://user-images.githubusercontent.com/91277363/189794714-bd579e33-4c83-4740-9e15-12a9901fc02e.png)
# Sleigh Me: a Secret Santa app
An app to play Secret Santa with remote friends and family

## General information
This is my final capstone project after a yearlong software development bootcamp at Nashville Software School. The app allows a user to create a team of other users to play Secret Santa with. Once the team is assembled, the team owner can click a button to randomly assign partners to all group members. Users are alerted in app of who their parter is, and only that group member sees who their partner is. Users also have the opportunity to update a profile for gift preferences and their address, should the gift need to be mailed. Only the current user and his/her assigned partners are able to see that address. 

This project features full CRUD capabilities. The login and registration code were provided by NSS as authentication is not an objective of the class. Design is inspired by Material UI elements. 

## Technologies
+ React v.18.2
+ React Router Dom v.6.3
+ ES6
+ Python v.3.9
+ Django v.4.1
+ SQLite3
+ HTML5
+ CSS3
+ Figma
+ DB Diagram
+ Font Awesome

## Features
+ Full CRUD capabilities.
+ Login allows for multiple, distinct users and profiles.
+ Users can create, modify and delete their own teams and assign guidelines as well as date/time for gift deadlines.
+ Users can search other users' names and add them to their group.
+ Invited users can leave groups at any time.
+ All users have a unique profile with option to add an address that is visible only to them and their Secret Santa.
+ Group control buttons (shuffle, add, edit) appear only for group host. Once a shuffle is rendered, control buttons disappear for host, too.

## Demos
![login](https://user-images.githubusercontent.com/91277363/189794474-7bc16f44-3af4-4ff7-a0c8-90173c6a6525.gif)
![profile](https://user-images.githubusercontent.com/91277363/189796445-39682522-b5d9-47e2-a8ab-ec67d4142a06.gif)

## Selected pages and features
![dashboard](https://user-images.githubusercontent.com/91277363/189796430-f7b3b21b-6d43-4fc5-a5d2-1b7c8f2d65bc.png)
![form](https://user-images.githubusercontent.com/91277363/189796433-608ed3aa-3ccd-42ef-a18c-f238550f77f4.png)
![groupdetail](https://user-images.githubusercontent.com/91277363/189797114-4f28bbf3-cc24-47ff-b104-15e14d9ead79.png)
![aftershuffle](https://user-images.githubusercontent.com/91277363/189797115-46cc4233-be00-4d27-94c9-20530f971997.png)

## Wireframe
![wireframe](https://user-images.githubusercontent.com/91277363/189782942-276560d9-24f9-4641-8ac6-16023815a6f0.png)

## Setup
### Front end
1. Clone this repository.
2. `cd` into the directory it creates.
3. Run `npm install` and wait for all dependencies to be installed.

### Back end
4. Clone the [backend repository](https://github.com/brianminges/sleigh-me-server). 
5. Run `pyenv install 3.9.10` in the backend directory to install Python.
6. Run `python3 -m pip install pipenv` in the backend directory to install the virtual environment.
7. Run `pipenv install django autopep8 pylint djangorestframework django-cors-headers pylint-django` to install the necessary third-party packages.
8. From the backend directory, run `touch .env` to create a `.env` file on the same level as `manage.py`.
9. Run `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())`.
10. Copy the output.
11. Open the `.env` file and add `MY_SECRET_KEY=<paste output>` (without the angle brackets, and without any quotes).
12. Stop your virtual environment, `Ctrl + D`, and then restart it pipenv shell.

### Database
13. Run `python3 manage.py makemigrations sleighmeapi` from inside your virtual environment.
14. Run `python3 manage.py migrate`from inside your virtual enviroment. You should now have a db.sqlite3 file in the project folder. Make a connection to the database with SQLite Explorer to see the tables in the database.
15. Seed the database. Run `python3 manage.py loaddata users tokens states gift_preferences profiles members groups partners`

### Starting in browser
16. With the virtual environment running, run `python3 manage.py runserver` from the backend directory after the virtual environment has started.
17. Run `npm start` from the frontend directory to verify installation was successfule.

## Project status
Complete

## Acknowledgments 
Main image courtesy [Alexandra_Koch](https://pixabay.com/users/alexandra_koch-621802/) via [Pixabay](https://pixabay.com/)


 
