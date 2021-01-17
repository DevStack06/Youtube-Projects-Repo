import PostRestData from "./postdata";
import React from "react";
import { Route, Switch } from "react-router-dom";
import RecievData from "./RecieveData";
import RestPost from "./restPost";
import Pooling from "./pooling";
import SocketMsg from "./socketio";
import SocketPost from "./socketPost";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/delete" exact component={PostRestData} />
        <Route path="/pooling" exact component={Pooling} />
        <Route path="/restmsg" exact component={RecievData} />
        <Route path="/post" exact component={RestPost} />
        <Route path="/" exact component={RestPost} />
        <Route path="/socketPost" component={SocketPost} />
        <Route path="/socket" exact component={SocketMsg} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
