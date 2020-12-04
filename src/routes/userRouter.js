const { Router } = require('express');

const userRouter = Router();

const { createUser, loginUser, signupUser, getUser , logoutUser } = require('../controllers/userControllers');



userRouter.get('/signup', signupUser);

userRouter.get('/login', loginUser);

userRouter.post('/users/signup', createUser);

userRouter.post('/users/login', getUser);

userRouter.get('/logout', logoutUser);

module.exports = userRouter;