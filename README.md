## Developer Notes
**2024/02/19**<br>

Hello Ryan here! This was my second time working with GraphQL and it was alot to learn. Will definantly revisit this project and make imporvments for learning/ experience purposes.<br>

Unfortunatly I wasn't able to implement the signup and login features, but I was able to implement all GraphQL API calls and store them into my mongoDB database! Here is an example of my generating a User & having their password censored for security purposes
<br>

**Create User**

![createUser Mutation using GraphQL](/screenshots/createUser.JPG)
<br>

**Display All Users**

![Get Request of all users in the database](./screenshots/getUsers.JPG)

<br>

I was also able to connect my mongoDb cluster and create models/schemas for the respective JSON data to be transfered into collections.
![mongoDB Database & collections](./screenshots/mongodb_database_collections.JPG)
![mongodb Users collection](./screenshots/mongodb_users_collection.JPG)

I was able to make a front-end component form page for login, signup and a dashboard that was able to display all users using the getUsers() function from my angular project (Assignment1)

![Angular Front-end login component](./screenshots/login-component.PNG)

![Angular Front-end sign-up component](./screenshots/signup-component.PNG)