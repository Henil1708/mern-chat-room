//  Import Config
import io from '../index'

// Import Services
import socketService from '../app/socket/services/socket.service'

//  Import Repo
import socketRepo from '../app/socket/repo/socket.repo';

class SocketLib {

    /*============================
    😎 @author: Henil Mehta
    🚩 @uses: created socket init function and register all the events
    🗓 @created: 03/06/2023
    ============================*/
    async initConnection() {

        io.on("connection", async (socket: any) => {
            
            //
            //  save the socket user 
            //
            await socketService(socket.id, socket.handshake.query.user_uuid);

            socket.to(socket.id).emit('ping','socket is connected');

            io.to(socket.id).emit('ping','socket is connected');

            socket.on('pong', ()=> {

                console.log("pong received");

            })

            //
            //  dissconnect user event
            //
            socket.on('disconnect', async () => {



            })

        });
    }

}

export default new SocketLib()