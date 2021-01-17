import React, { useState } from "react";
import axios from "axios";
function PostRestData() {
  //   window.preventDefault();

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

  const onChange = (e) => {
    // console.log(msg);
    setMsg(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div class="container p-4">
      <p class="h3 pb-5 text-primary"> Message Page</p>
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
      </form>
    </div>
  );
}

export default PostRestData;
