import { useState } from "react";
import "./App.css";
import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
    <UserContextProvider>
      
    </UserContextProvider>
      <h1>Theme Changer</h1>
    </>
  );
}

export default App;
