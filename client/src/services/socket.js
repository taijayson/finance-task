import io from 'socket.io-client';

const socket = io('http://localhost:4000');

socket.emit('start');
export default socket;
