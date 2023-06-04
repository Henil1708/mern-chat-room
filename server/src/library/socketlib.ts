//  Import Config
import io from '../index'

// Import Services
import socketService from '../app/socket/services/socket.service'
import passport from 'passport';
import userRepo from '../app/user/repo/user.repo';
import socketRepo from '../app/socket/repo/socket.repo';
import chatController from '../app/chat/controller/chat.controller';

//  Import Repo


class SocketLib {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: created socket init function and register all the events
    🗓 @created: 03/06/2023
    ============================*/
    async initConnection() {


        io.use( (socket:any, next)=> {
            
            try {

                passport.authenticate('jwt', { session: false },async (error:any, user:any) => {

                    if (user) {

                        const userSockets = await socketRepo.getSocketId(user.uuid);

                        if(userSockets.length > 0){

                            await socketRepo.updateSocketId(user.uuid, {socket_id: socket.id})

                        }else {

                            const socketDetails = {
                                user_uuid: user.uuid,
                                socket_id: socket.id
                            }

                            await socketRepo.saveSocketData(socketDetails);

                        }

                    }else{
                        next(new Error('un_authorized'));
                    }
                })(socket.request, {}, next);
                next()
            } catch (error) {
                
                socket.to(socket.id).emit('logout')

            }

        })

        io.on("connection", async (socket: any) => {

            io.to(socket.id).emit('ping','socket is connected');

            socket.on('pong', ()=> {

                console.log("pong received");

            })

            socket.on('join_room', ({room_uuid}:any)=> {
                
                socket.join(room_uuid);

            })

            socket.on('message', async (data:any)=> {
                
                const container:any = {
                    input: {
                        body: {...data, socket_id: socket.id},
                    },
                    derived: {},
                    output: {
                        result: {}
                    }
                };

                await chatController.addMessage(container) 

            });

        });



    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: emit events  
    🗓 @created: 03/06/2023
    ============================*/
    async sendEvent(socketId:any,eventName:string,data:any) {

        try {

            io.to(socketId).emit(
                eventName,
                data
            );

        } catch (error) {


        }

    }

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: broadcast event to every one 
    🗓 @created: 03/06/2023
    ============================*/
    async broadcastEventToAll(eventName:string,data:any) {

        try {
            
            io.emit(
                eventName,
                data
            );
        
        } catch (error) {

        }

    }

}

export default new SocketLib()