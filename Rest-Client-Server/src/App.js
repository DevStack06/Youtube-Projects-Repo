import PostRestData from "./postdata";
import React from "react";
import { Route, Switch } from "react-router-dom";
import RecievData from "./RecieveData";
function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/msg" component={PostRestData} />
        <Route path="/chat" exact component={RecievData} />
        <Route path="/" exact component={PostRestData} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
