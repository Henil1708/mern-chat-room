// Import Config

// Import Libraries
import express from 'express'

// Import Helpers
import { validator } from '../../../helpers/_validator.helper';

// Import Middleware

// Import Controllers
import userController from '../controller/user.controller';
import passportAuth from '../../../middleware/passportAuth';
import authorization from '../../../middleware/authorization';

const app = express.Router();

app.get("/me",
    passportAuth.authenticateJwt,
    authorization.isAuthenticated,
    userController.getUser
);

export = app;