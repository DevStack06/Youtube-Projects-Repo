import React from "react";
import "./useful.css";
import io from "socket.io-client";
const socket = io("http://localhost:5000/");
const RecieveData = () => {
  const [chats, setChats] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
    socket.on("receive", (msg, callback) => {
      console.log(`Lgdata --->> ${msg.msg}`);

      setChats(msg.msg);
    });
  };

  const data = chats.map((i, index) => {
    return <div className="chat">{i.msg}</div>;
  });
  console.log(chats);
  return <div class="main">{data}</div>;
};

export default RecieveData;
