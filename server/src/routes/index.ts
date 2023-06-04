import express from "express";

import auth from "../app/auth/route/auth.route";

import user from "../app/user/route/user.route";

import chat from "../app/chat/route/chat.route";

import i18n from "../config/i18n";

const app = express.Router();

app.get("/v1/ping", function (req, res, next) {
	res.send(i18n.__("welcome_msg"));
});

const path = "/v1";

app.use(path + "/auth", auth);

app.use(path + "/user", user);

app.use(path + "/room", chat)

export = app;
