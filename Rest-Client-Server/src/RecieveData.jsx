import React from "react";
import axios from "axios";
import "./useful.css";

const RecieveData = () => {
  const [chats, setChats] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:5000/getmsgs").then((res) => {
      setChats(res.data.data);
      console.log(res.data.data);
    });
  };
  const data = chats.map((i, index) => {
    return <div className="chat">{i.msg}</div>;
  });
  console.log(chats);
  return (
    <div class="main">
      <div>
        {" "}
        <p class="h1 ">Example of Rest API</p>
      </div>
      <div class="p-5 data">{data}</div>
    </div>
  );
};

export default RecieveData;
