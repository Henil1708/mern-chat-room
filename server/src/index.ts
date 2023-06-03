import app from "./app";
import socketLib from "./library/socketlib";
import config from "./config/constant";
import * as http from "http";
import { Server } from 'socket.io';

	
process.on("uncaughtException", (error) => {
	console.log("uncauthException occured");
	console.log(error);
});

let httpServer  = http.createServer(app);

const io = new Server(httpServer,{
	cors:{
		origin: '*',
		methods: ["GET", "POST"]
	}
});


httpServer.listen(config.app.PORT, () => {
	console.log(`Server listening at ${config.app.PORT}`);
	socketLib.initConnection();
});

export default io;