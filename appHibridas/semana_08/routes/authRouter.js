import express from 'express';
import authController from '../controllers/AuthController.js';

const controller = new authController();

const router = express.Router();

router.post('/register',   controller.register);
router.post('/login',      controller.login);

export default router;