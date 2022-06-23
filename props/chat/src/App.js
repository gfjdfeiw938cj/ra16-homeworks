import React from "react";
import MessageHistory from "./components/MessageHistory";
import messages from "./db/data";

import "./App.css";
import "./main.css";

function App() {
  return (
    <>
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>  
    </div>
    </>
  );
}

export default App;
