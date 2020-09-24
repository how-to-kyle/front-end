# front-end

Product Vision: https://docs.google.com/document/d/1OPD0t8uckw0gu-Nil6gnDdEJvxeSlDRstgETkdvbfr4/edit#heading=h.i2wt0ydbbia9

## Making a Quality Read Me Documentation:

Content:
https://medium.com/@meakaakka/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3

Formatting:
https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax


## Build Week 4: How-to

Product Information: [https://www.notion.so/How-To-8ae8a3d736994a69a7379d3334868a8c](https://www.notion.so/How-To-8ae8a3d736994a69a7379d3334868a8c)

Role Descriptions: [https://www.notion.so/0200d2f8b46345c48c1418fa1c33652c?v=995e7fc27b73425bbe0f8741a6ba2c15](https://www.notion.so/0200d2f8b46345c48c1418fa1c33652c?v=995e7fc27b73425bbe0f8741a6ba2c15)

Github: [https://github.com/how-to-kyle](https://github.com/how-to-kyle)

"Trello": [https://trello.com/b/CdJ0Kzol/how-to-2](https://trello.com/b/CdJ0Kzol/how-to-2)

Rubric: [https://www.notion.so/Build-Week-Rubrics-c0783f6d9b7e435f9ce47e8cd2d0ee3b](https://www.notion.so/Build-Week-Rubrics-c0783f6d9b7e435f9ce47e8cd2d0ee3b)

Schedule: [https://www.notion.so/6e719d512134435f8a89ca2862f8d3e7?v=6c8d3bd7bbcb44539f8659fc96caa906](https://www.notion.so/6e719d512134435f8a89ca2862f8d3e7?v=6c8d3bd7bbcb44539f8659fc96caa906)

Product Vision: https://docs.google.com/document/d/1OPD0t8uckw0gu-Nil6gnDdEJvxeSlDRstgETkdvbfr4/edit#heading=h.i2wt0ydbbia9

## Objectives Front End 2:

General Project MVP:
  1. An on-boarding process for a new general `user` (a user that will consume the service)
    1. Unit 1?

  2. On-boarding `process` for `user` who wants to generate content (ex: organize how-to tutorials)
    2. Unit 2?

  3. On-boarding process to register:
      1. Login Component
        1. withAuth 
        2. Protected Route

        /api/register/ (POST) : adds a new user (validated, and can't already exist)
          : Takes {email : " ", password: " " (min 8 chars)}

        /api/login/ (POST) : returns a token if user is found and login is valid

  3. Ability to easily create / setup a `how-to guide`
    1. VIEW (R):
      1. Get request for how-to cards (initially just dummy data)
      2. UI for cards

      * /api/posts/ (GET) : returns all posts
    
    2. CREATE (C):
      1. Component to make new post 
      2. Post request add posts to the array

      * /api/posts/ (POST) : allows you to send over a post object in request body
          : Takes {title: "", user_post_id: 1}

  4. Ability to easily edit / delete an a `how-to guide`
    1. EDIT/DELETE (U)+(D):
      1. Component to edit/delete (re-use base create component)
      2. Get request the specific how-to quote
      3. Add edit and delete button
      4. Post request to update data with edited how-to

      * /api/posts/:id (PUT*) : updates a given post
      * /api/posts/:id (DELETE*) : deletes a given post

  5. Ability to easily view / search / find / filter `how-to guides`
    1. GET request w/filter (see plant project)

  6. Stretch:
    1. Add to favorites ( See HTTP Movies Project: "SavedList")

React Application:
  MVP:
  - [x] React app deployed
  - [x] Landing page incorporated in app
    - https://inspiring-lumiere-e68350.netlify.app/
  Stretch: 
  - [x] Continuous deployment is set up in a manner that is conducive to a team project environment
    - https://front-end-j9lun1m0k.vercel.app/
  - [x] Project is organized well on GitHub.
  - [x] Extra considerations were made to help all team members understand how to contribute easily to the project no matter their role (Include instructions in ReadMe)

HTTP/AJAX: 
  MVP:
  - [x] CRUD operations drive the application. 
  - [x] Each participating student individually created pages that complete all CRUD operations. 
  - [x] Token authentication is handled correctly.
  Stretch: 
  - [x] Pages making HTTP requests do so in a logical manner that is cohesive with the app's state management system. 
  - [x] Student showed great care and insight when handling token authentication. 
  - [x] Student used a modular system for all requests (e.g. useFetch custom hook)

State Management:
  MVP:
  - [x] Student has implemented a state management system that makes sense for the project.
  - [x] It is organized well and implemented correctly.
  - [x] State is not lost as user goes through the application.
  Stretch:
  - [x] Student showed the ability to manage state in a very coherent system at all levels of the app - global state management, component tree state management, and individual component management. 
  - [x] The system is easy to understand and use. 
  - [x] Student may have also designed it in such a way that it is reusable for a lot of the state management needs of the app.

Team Work:
  MVP:
  - [x] Student's work demonstrates that all MVP features were built
  - [x] Team member was collaborative, able to work in a team environment
  Stretch:
  - [x] Student's work demonstrates that all MVP features were built and the student went above and beyond the project.
  - [x] Pair programmed with the Web UI and Back end Architect


Back End Explained:

Note: Routes with * are protected and require a token

/api/users/ (GET*) : returns all users
/api/register/ (POST) : adds a new user (validated, and can't already exist)
    : Takes {email : " ", password: " " (min 8 chars)}
/api/login/ (POST) : returns a token if user is found and login is valid

...

/api/posts/ (GET) : returns all posts
/api/posts/ (POST) : allows you to send over a post object in request body
    : Takes {title: "", user_post_id: 1}
/api/posts/:id (PUT*) : updates a given post
/api/posts/:id (DELETE*) : deletes a given post
/api/posts/:id (GET) : returns a single post