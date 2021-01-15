import PostRestData from "./postdata";
import React from "react";
import { Route, Switch } from "react-router-dom";
import RecievData from "./RecieveData";
import Pooling from "./pooling";
import SocketMsg from "./socketio";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/restmsg" component={PostRestData} />
        <Route path="/rest" exact component={RecievData} />
        <Route path="/" exact component={PostRestData} />
        <Route path="/socket" exact component={SocketMsg} />
        <Route path="/pooling" exact component={Pooling} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
