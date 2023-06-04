import express, { NextFunction, Request, Response } from "express";
import * as bodyParser from "body-parser";
import router from "./routes/index";
import i18n from "./config/i18n";
import path from "path"
import socketlib from "./library/socketlib";

class App {
	public express;

	constructor() {
		this.express = express();
		this.defaults();
	}

	private defaults(): void {

		this.express
			.use((req: Request, res: Response, next: NextFunction) => {
				res.setHeader("Access-Control-Allow-Origin", "*");
				res.setHeader(
					"Access-Control-Allow-Methods",
					"GET, POST, OPTIONS, PUT, PATCH, DELETE"
					);
					res.setHeader(
						"Access-Control-Allow-Headers",
						"Origin,X-Requested-With,content-type,Authorization,authentication-token,Access-Token,Refresh-Token"
						);
						res.setHeader(
					"Access-Control-Expose-Headers",
					"Origin,X-Requested-With,content-type,Authorization,Access-Token,Refresh-Token"
					);
					next();
				})
			.use(bodyParser.urlencoded({ extended: true }))
			.use(bodyParser.json({}))
			.use(bodyParser.raw())
			.use(router)
			.use(i18n.init)
			
	}
}

export default new App().express;
