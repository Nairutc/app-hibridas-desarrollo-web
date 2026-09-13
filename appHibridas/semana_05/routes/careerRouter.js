import express from 'express';
import CareerController from "../controllers/CareerController.js";

const controller = new CareerController();

const router = express.Router();

router.get('/',       controller.getAll);
router.get('/:subjectId/subjects',    controller.getSubjectByCareer);
router.post('/',      controller.create);
router.put('/:id',    controller.update);
router.delete('/:id', controller.delete);

export default router;