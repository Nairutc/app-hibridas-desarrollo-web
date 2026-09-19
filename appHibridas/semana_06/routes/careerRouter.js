import express from 'express';
import CareerController from "../controllers/CareerController.js";

const controller = new CareerController();

const router = express.Router();

router.get('/',       controller.getAll);
router.get('/:cid',   controller.getById);
router.get('/:careerId/subjects',    controller.getSubjectByCareer);
router.post('/',      controller.create);
router.put('/:careerId',    controller.update);
router.delete('/:careerId', controller.delete);

export default router;