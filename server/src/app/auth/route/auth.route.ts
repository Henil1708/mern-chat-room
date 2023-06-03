import express from 'express'
import { validator } from '../../../helpers/_validator.helper';

// Import Middleware

const app = express.Router();

import AuthController from '../controller/auth.controller';
import authSchema from "../validation/auth.validation";

app.post("/sign_up",
    validator(authSchema.signUp), 
    AuthController.signUp
);

app.post("/sign_in", 
    validator(authSchema.signIn),
    AuthController.signIn
);

export = app;