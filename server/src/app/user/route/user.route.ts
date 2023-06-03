// Import Config

// Import Libraries
import express from 'express'

// Import Helpers
import { validator } from '../../../helpers/_validator.helper';

// Import Middleware

// Import Controllers
import userController from '../controller/user.controller';

const app = express.Router();

app.get("/me",
    userController.getUser
);

export = app;