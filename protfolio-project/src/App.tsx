import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfilePic from "./components/ProfilePic";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experience from "./components/Experience";
function App() {
  return (
    <div className="w-screen ">
      <Header />
      <Sidebar/>
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 p-5 mt-[90px]">
          <Introduction/>
          <About/>
          <Experience/>
        </div>
        <div className = "hidden md:block">
          <ProfilePic />
        </div>
      </div>

      
    </div>
  )
}

export default App;
