import express from 'express';
import CareerController from "../controllers/CareerController.js";
import authMidlleware from "../middlewares/authMiddleware.js";
import roleMiddleware from '../middlewares/roleMiddleware.js';

const controller = new CareerController();

const router = express.Router();

router.get('/',        controller.getAll);
router.get('/:cid', authMidlleware,   controller.getById);
router.get('/:careerId/subjects', authMidlleware, roleMiddleware,   controller.getSubjectByCareer);
router.post('/',      controller.create);
router.put('/:careerId',    authMidlleware, roleMiddleware,     controller.update);
router.delete('/:careerId', authMidlleware, roleMiddleware,  controller.delete);

export default router;