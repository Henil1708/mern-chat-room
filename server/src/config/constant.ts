import dotenv from 'dotenv';
dotenv.config()


export default {
    "app": {
        PORT: process.env.PORT,
        SOCKET_PORT : process.env.SOCKET_PORT,
        ENVIRONMENT: process.env.NODE_ENV,
        DB_NAME: process.env.DB_NAME,
        DB_HOST: process.env.DB_HOST,
        DB_USERNAME:process.env.DB_USERNAME,
        DB_PASSWORD:process.env.DB_PASSWORD,
        DB_PORT: process.env.DB_PORT,
        DB_CHARSET:process.env.DB_CHARSET,
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
        PER_PAGE: 10,
        AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    },  
    "schema": {
        USERS: "users",
        CHAT: "chat"
    },
    "tables": {
		USER:'user',
        USER_SOCKET:'user_socket',
        ROOMS: 'rooms',
        ROOM_MEMBERS: "room_members",
        ROOM_CHATS: "room_chats"
    }
};
