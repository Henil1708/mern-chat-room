import express from 'express'
import { validator } from '../../../helpers/_validator.helper';

// Import Middleware

const app = express.Router();

import AuthController from '../controller/auth.controller';
import authSchema from "../validation/auth.validation";
import passportAuth from '../../../middleware/passportAuth';

app.post("/signup",
    validator(authSchema.signUp), 
    AuthController.signUp
);

app.post("/signin", 
    validator(authSchema.signIn),
    passportAuth.loginUser,
    AuthController.signIn
);

export = app;