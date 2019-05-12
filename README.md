# sad-2019-SoSe-team-6-WebApp

Sagar Patil 11010891
Rajkiran Gurunathan 11011876

Description:
The project helps users access the books and read online. Books are protected based on authentication. Users have to login first to view the content of the books. The pdf of the books are readable for the users after the click the cover page of the book they want to read.
Application is designed using React for front end, Node JS for backend and MongoDB for database.

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
