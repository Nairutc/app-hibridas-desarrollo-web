import userRouter from './userRouter.js';
import subjectRouter from './subjectRouter.js';
import careerRouter from './careerRouter.js';
import authRouter from './authRouter.js';
import commissionRouter from './commissionRouter.js';
import enrrollmentRouter from './enrrollmentRouter.js';



const routerAPI = ( app ) => {
    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter)
    app.use('/api/subjects', subjectRouter);
    app.use('/api/careers', careerRouter);
    app.use('/api/commission', commissionRouter);
    app.use('/api/enrrollments', enrrollmentRouter);
}

export default routerAPI;