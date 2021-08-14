// import axios from 'axios';
// const axiTest = () => {
//   axios.get('http://localhost:4000').then((res) => console.log(res));
//   // .catch((err) => console.log(err));
// };
// export default axiTest;

import io from 'socket.io-client';

const socket = io('http://localhost:4000');
// console.log(socket);
// socket.emit('ticker');
socket.emit('start');
export default socket;
