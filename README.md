<h1 align="center" style="font-weight: bold;">TODO-List ✅</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript" alt="Javascript Badge"/>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJs"/>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.Js"/>
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="Mongo DB"/>
  <img src="https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white" alt="Bulma Badge"/>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge"/>
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge"/>
  <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" alt="nodemon"/>
</p>

<p align="center">
 <a href="#about">About</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#started">App Routes</a>
</p>

https://github.com/user-attachments/assets/b54391c2-be14-4770-a18d-1e0e41dbb34f

<h2 id="started">📌 About</h2>

The Backend Frontend ToDoList is an application for managing tasks and checklists. Users can create, update, and organize tasks within multiple checklists, enhancing productivity with a simple and intuitive interface.


<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally

<h3>Prerequisites</h3>

Before running this backend application, make sure you have the following installed on your computer:

- **Node.js**: Ensure that Node.js is installed, as it's required to run the application. You can download it from [Node.js official website](https://nodejs.org/).
- **MongoDB**: The application uses MongoDB to store data. You can either install MongoDB locally by following the instructions on the [MongoDB official website](https://www.mongodb.com/try/download/community).

<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/jimmyhayashi/to-do-list.git
```

<h3>Starting</h3>

How to start your project

```bash
cd to-do-list
npm run dev
``````

<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.

<h4>Checklist Routes</h4>​

| route                  | description                                          
|------------------------|-----------------------------------------------------
| <kbd>GET /checklists</kbd>         | Retrieve all checklists
| <kbd>GET /checklists/new</kbd>     | Display form to create a new checklist
| <kbd>GET /checklists/:id/edit</kbd>| Display form to edit a checklist
| <kbd>POST /checklists</kbd>        | Create a new checklist
| <kbd>GET /checklists/:id</kbd>     | Retrieve a specific checklist by ID
| <kbd>PUT /checklists/:id</kbd>     | Update an existing checklist by ID
| <kbd>DELETE /checklists/:id</kbd>  | Delete a checklist by ID

<h4>Tasks Routes</h4>​

| route                                     | description                                          
|-------------------------------------------|-----------------------------------------------------
| <kbd>GET /checklists/:id/tasks/new</kbd>  | Display form to create a new task for a checklist
| <kbd>POST /checklists/:id/tasks</kbd>     | Create a new task under a specific checklist
| <kbd>DELETE /tasks/:id</kbd>              | Delete a specific task by its ID
| <kbd>PUT /tasks/:id</kbd>                 | Update an existing task by its ID
