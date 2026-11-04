import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  let completed = req.query.completed;

  if (completed === 'true') {
    completed = true;
  } else if (completed === 'false') {
    completed = false;
  } else {
    completed = undefined;
  }

  const tasks = await taskService.getAllTasks(completed);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
