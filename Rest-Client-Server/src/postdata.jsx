import React from "react";
import axios from "axios";
function PostRestData() {
  //   window.preventDefault();
  const deletemsg = () => {
    axios.delete("http://localhost:5000/delete");
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
          ></textarea>
        </div>

        <button class="btn btn-danger m-5" onClick={deletemsg}>
          Clear Message
        </button>
      </form>
    </div>
  );
}

export default PostRestData;
