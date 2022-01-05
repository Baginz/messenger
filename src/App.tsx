import React from "react";
import Dialog from "./components/Dialog";
import Header from "./components/Header";
import "./styles/App.css";
import { IServerMessage } from "./types";

const App = () => {
  const [message, addMessage] = React.useState<IServerMessage | null>(null);


  return (
    <div className="container">
      <Header />
      <Dialog newMessage={message}/>
    </div>
  );
};

export default App;