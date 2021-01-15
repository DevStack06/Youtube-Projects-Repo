import React, { useState } from "react";
import axios from "axios";
import io from "socket.io-client";
const socket = io("http://localhost:5000");
function PostRestData() {
  //   window.preventDefault();
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log(socket.connected); // true
    });
  });
  const [msg, setMsg] = useState("");
  const postmsg = (e) => {
    const instance = axios.create({
      baseURL: "http://localhost:5000/postmsg",
      headers: {
        "Access-Control-Allow-Origin": "*",

        "Content-Type": "application/json",
      },
    });
    instance
      .post("http://localhost:5000/postmsg", { msg: msg })
      .then((res) => {
        console.log("sent");
      })
      .catch((e) => {
        console.log(e);
      });
    setMsg("");
  };
  const deletemsg = () => {
    axios.delete("http://localhost:5000/delete");
  };
  const onChange = (e) => {
    // console.log(msg);
    setMsg(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const socketSend = () => {
    socket.emit("messageChange", { msg: msg });
  };
  return (
    <div class="container p-4">
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="mesage">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={onChange}
            value={msg}
          ></textarea>
        </div>
        <button class="btn btn-primary m-2" onClick={postmsg}>
          Chat Rest/Pooling
        </button>
        <button class="btn btn-warning m-5" onClick={socketSend}>
          Chat Websocket
        </button>
        <button class="btn btn-danger m-5" onClick={deletemsg}>
          Clear Message
        </button>
      </form>
    </div>
  );
}

export default PostRestData;
