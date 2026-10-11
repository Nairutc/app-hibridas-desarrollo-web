import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';
import subjectController from '../controllers/SubjectController.js';


const controller = subjectController;

const router = express.Router();

router.get('/',      authMiddleware, controller.getAll);
router.get('/:id',   authMiddleware, controller.getById);
router.post('/',     authMiddleware, roleMiddleware, controller.create);
router.put('/:id',   authMiddleware, roleMiddleware, controller.update);
router.delete('/:id',authMiddleware, roleMiddleware, controller.delete);

export default router;

