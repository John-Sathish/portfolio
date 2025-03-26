import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfilePic from "./components/ProfilePic";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          User data
        </div>
        <div className = "hidden md:block">
          <ProfilePic />
        </div>
      </div>
      
    </>
  );
}

export default App;
