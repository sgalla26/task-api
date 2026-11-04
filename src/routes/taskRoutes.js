import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateCompleted } from '../middleware/validateTask.js';

const router = express.Router();

router.get('/', validateCompleted, taskController.getTasks);
router.post('/', validateTask, taskController.createTask);

export default router;
