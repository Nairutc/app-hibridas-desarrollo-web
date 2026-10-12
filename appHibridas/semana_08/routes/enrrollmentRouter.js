import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';
import enrrollmentController from '../controllers/EnrrollmentController.js';

const controller = enrrollmentController;

const router = express.Router();

router.get('/', authMiddleware, controller.getAll);
router.get('/:id', authMiddleware, controller.getById);
router.post('/', authMiddleware,  controller.create);
router.put('/:id', authMiddleware,  controller.update);
router.delete('/:id', authMiddleware, controller.delete);

export default router;