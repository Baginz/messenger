import React from "react";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";
import Header from "./components/Header";

import { AppContext, IContext } from "./context";
import { getTheme, setTheme } from "./helpers/theme";
import { IServerMessage } from "./types";

import "./styles/App.css";


const App = () => {
    const [message, addMessage] = React.useState<IServerMessage | null>(null);
    const [theme, toggleTheme] = React.useState<IContext["theme"]>(getTheme());
  
    React.useEffect(() => {
      setTheme(theme);
    }, [theme]);
  
    return (
      <AppContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <div className="container">
          <Header />
          <Dialog newMessage={message} />
          <Sender onAddMessage={addMessage} />
        </div>
      </AppContext.Provider>
    );
  };
  
  export default App;
  