import express from 'express';
import UserController from "../controllers/userController.js";
import authMidlleware from "../middlewares/authMiddleware.js";
import roleMiddleware from '../middlewares/roleMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';




const router = express.Router();

const controller = new UserController();
;

router.get('/',    authMidlleware, roleMiddleware,    controller.getAll);
router.get('/:id', authMidlleware, roleMiddleware,    controller.getById);
router.post('/',   authMidlleware, roleMiddleware,      controller.create);
router.put('/:id', authMidlleware, roleMiddleware,    controller.update);
router.delete('/:id', authMidlleware, roleMiddleware, controller.delete);
router.post('/profileimage',authMidlleware,  upload.single('profileImage'), controller.uploadProfileImage);


export default router;