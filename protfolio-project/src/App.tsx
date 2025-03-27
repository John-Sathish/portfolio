
import "./App.css";
import ProfilePic from "./components/ProfilePic";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experience from "./components/Experience";
import ProgressBar from "./components/ProgressBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
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
          <Projects/>
          <Skills/>
          <Contacts/>
          
        </div>
        
        <div>
          <ProgressBar/>
          <ProfilePic />
          
        </div>
      </div>

      
    </div>
  )
}

export default App;
