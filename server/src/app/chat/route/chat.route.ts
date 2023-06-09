import express from 'express'
import { validator } from '../../../helpers/_validator.helper';

// Import Middleware

const app = express.Router();

import passportAuth from '../../../middleware/passportAuth';
import chatSchema from '../validation/chat.validation';
import authorization from '../../../middleware/authorization';
import chatController from '../controller/chat.controller';

app.post("/",
    passportAuth.authenticateJwt,
    authorization.isAuthenticated,
    validator(chatSchema.createRoom), 
    chatController.createRoom
);

app.get("/",
    passportAuth.authenticateJwt,
    authorization.isAuthenticated,
    chatController.listRooms
);

app.get("/:room_uuid/chats",
    passportAuth.authenticateJwt,
    authorization.isAuthenticated,
    validator(chatSchema.getRoom), 
    chatController.listChats
);

app.get("/:room_uuid",
    passportAuth.authenticateJwt,
    authorization.isAuthenticated,
    validator(chatSchema.getRoom), 
    chatController.getRoomDetails
);

app.put("/:room_uuid",
    passportAuth.authenticateJwt,
    authorization.isAuthenticated,
    validator(chatSchema.getRoom),
    validator(chatSchema.createRoom), 
    chatController.updateRoom
);

export = app;