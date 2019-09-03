import React from "react";
import "./App.css";
import "./tweet_style.css";
import Tweet from "./tweet";
import "./fakeDatabase.json";

function App() {
  return (
    <React.Fragment>
      <Tweet />
      <Tweet />
    </React.Fragment>
  );
}

export default App;
