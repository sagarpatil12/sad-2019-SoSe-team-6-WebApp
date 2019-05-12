# sad-2019-SoSe-team-6-WebApp

Sagar Patil 11010891
Rajkiran Gurunathan 11011876

Description:
The project helps users access the books and read online. Books are protected based on authentication. Users have to login first to view the content of the books. The pdf of the books are readable for the users after the click the cover page of the book they want to read.
Application is designed using React for front end, Node JS for backend and MongoDB for database.

Excecution Steps:
1.Clone the repository
2.In client and api folder perform " npm install " if required in command prompt
3.Start the application using command "npm start" for both api and client
4.API is running on port 9000 and Clinet is running on port 3000
5.Register on website
6.Login
7.Open a book

API:

GET:
http://localhost:9000/book/:filename – content of the file

http://localhost:9000/bookimg – content of the image

POST:
http://localhost:9000/register – save users registration details into the database
http://localhost:9000/login – check the user is authorized and get the token

when users log in the token is set for one minute , after that the token will expire.

Middleware.js – verify the users based on Token before they access the api.

Secret key is stored in process.env.SECRET_KEY

//Changes after presentations:
1.Click event added for book
2.API is protected with authentication
3.Downlaod book from iframe toolbar

NOTE: we are using MongoDB ATLAS cloud database and we are intented to uuse for this project only (Do not manipulate).
