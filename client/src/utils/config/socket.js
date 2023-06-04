import io from 'socket.io-client';

const socket = io('http://localhost:3001', {
    extraHeaders: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}` // Replace `token` with your actual JWT
    }
});

export default socket;