const express = require('express');

const checklistDependentRoute = express.Router();
const simpleRouter = express.Router();

const Checklist = require('../models/checklist');
const Task = require('../models/task');
const checklist = require('../models/checklist');

checklistDependentRoute.get('/:id/tasks/new', async(req, res) => {
    try {
        let task = Task();
        res.status(200).render('tasks/new', { checklistId: req.params.id, task: task})
    } catch (error) {
        res.status(422).render('pages/error', { errors: 'Error when loading the form'})
    }
});

simpleRouter.delete('/:id', async(req, res) => {
    try {
        let task = await Task.findByIdAndDelete(req.params.id);
        let checklist = await Checklist.findById(task.checklist);
        let taskToRemove = checklist.tasks.indexOf(task._id);
        checklist.tasks.slice(taskToRemove, 1);
        checklist.save()
        res.redirect(`/checklists/${checklist._id}`);
    } catch (error) {
        res.status(422).render('pages/error', { errors: 'Error when remove the task'})
    }
})

checklistDependentRoute.post('/:id/tasks', async (req, res) => {
    let { name } = req.body.task;
    let task = new Task({ name, checklist: req.params.id });

    try {
        console.log("Task data:", task);  // Log the task data before saving

        // Try to save the new task
        await task.save();

        // Find the associated checklist
        let checklist = await Checklist.findById(req.params.id);

        // Check if the tasks field exists, otherwise initialize it as an empty array
        if (!checklist.tasks) {
            checklist.tasks = [];
        }

        // Add the new task to the checklist's task array
        checklist.tasks.push(task);

        // Save the updated checklist
        await checklist.save();

        // Redirect to the updated checklist page
        res.redirect(`/checklists/${req.params.id}`);
    } catch (error) {
        // Log the error for debugging
        console.error("Error saving task:", error);
        console.error("Validation errors:", error.errors);

        // Capture specific errors from the task model, if any
        let errors = error.errors;

        // Render the task creation page with the captured errors
        res.status(422).render('tasks/new', { task: { ...task, errors }, checklistId: req.params.id });
    }
});

simpleRouter.put('/:id', async(req, res) => {
    let task = await Task.findById(req.params.id);
    try {
        task.set(req.body.task);
        await task.save();
        res.status(200).json({ task });
    } catch (error) {
        let errors = error.errors;
        res.status(422).json({ task: {...errors}})
    }
});

module.exports = { 
    checklistDependent: checklistDependentRoute,
    simple: simpleRouter 
}