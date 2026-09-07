import express from 'express';
import subjectController from '../controllers/SubjectController.js';

const controller = subjectController;

const router = express.Router();

router.get('/',       controller.getAll);
router.get('/:id',    controller.getById);
router.post('/',      controller.create);
router.put('/:id',    controller.update);
router.delete('/:id', controller.delete);

export default router;

