# music-app-frontend:


### Back-end site:
[here](https://young-fjord-19893.herokuapp.com/) -- Note: This is is where the api and database are hosted. There is no UI.

### Deployed front-end:
[here](https://github.com/Mattgoldman93/music-app-frontend)-- This is the  user-facing component of the app.

### User stories:

+ As a user with a large physical collection of music, I would like to organize my library.

+ As a user who would like to access all of the music I own, I would like an app that lets me see my music from anywhere.

+ As a user who values privacy, I would like my collection to be secured and require a login to view

### About

The code in this repo handles the client-facing side of an app designed to assist users in organizing their respective music collections. It employs sign-up sign-in, sign-out and change-password forms. Additionally, the site also allows for all CRUD actions of an albums entity. Both are connected to the back-end API, the repo for which can be found at - [Back End](https://github.com/Mattgoldman93/music-app-backend)

My planning involved first wireframing the front end and then planning out its execution. I first created user authorization forms and then my Get request to display the records and used handlebars to render the info in the document. I then created forms for update, create, and delete.

#### Wireframe: [Wireframe](f-e-wireframe.jpg)

On the front-end, I used HTML, SCSS, Bootstrap, Handlebars and Grunt.

In future versions, I would like to solve the following problems on the front end.

- List updates to albums dynamically
- Make show albums and clear one button
- dry up code in ui.js
- display records more graphically
