import { io } from "socket.io-client";

const socket = io("https://uniqbd-nextjs-3.onrender.com/", {
  withCredentials: true,
  transports: ["websocket"],
});

export default socket;