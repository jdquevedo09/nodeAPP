const { Router } = require('express');
const tasks = Router();
const isAuth = require('../helpers/isAuthenticated')

const { home, getTasks, createTask, deleteTask, getTask, editTask } = require('../controllers/tasksControllers');



tasks.get('/', home);

tasks.get('/tasks',isAuth , getTasks);

tasks.get('/tasks/:id',isAuth, getTask);

tasks.post('/tasks',isAuth , createTask);

tasks.delete('/tasks/:id',isAuth , deleteTask);

tasks.put('/tasks/:id',isAuth , editTask)


module.exports = tasks;