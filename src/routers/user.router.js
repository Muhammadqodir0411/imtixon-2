import { Router } from 'express'
import userController from '../controllers/user.controller.js'
import checkToken from '../middlewares/check-token.js';
import validate from '../middlewares/validate.js';
import { read } from '../utils/model.js';

const router = Router()

router.get('/users',  userController.GET);
router.post('/login', validate, userController.LOGIN);
router.post('/register', validate, userController.REGISTER);

router.get('/videos', (req,res)=>{
    const videos = read("videos")
    res.send(videos)
})

export default router;