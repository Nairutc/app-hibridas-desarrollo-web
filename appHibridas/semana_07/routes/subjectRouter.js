import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import subjectController from '../controllers/SubjectController.js';

const controller = subjectController;

const router = express.Router();

router.get('/',      authMiddleware, controller.getAll);
router.get('/:id',   authMiddleware, controller.getById);
router.post('/',     authMiddleware, controller.create);
router.put('/:id',   authMiddleware, controller.update);
router.delete('/:id',authMiddleware, controller.delete);

export default router;

