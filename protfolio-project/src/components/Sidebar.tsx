import { IoLogoGithub,IoLogoLinkedin,
    } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
function SideBar() {
  return (
    <div
    className="w-[90px] border-r-[1px] dark:bg-slate-800
    h-screen fixed flex flex-col justify-around items-center mt-[90px]"
    >
        <h2 className='-rotate-90 tracking-widest'>HOMEPAGE</h2>
        <div className="flex flex-col gap-7 mb-8 text-[20px]">
        <a href="https://github.com/John-Sathish" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub className=" text-white cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a>
        <a href="mailto:johnsathish2004@gmail.com" target="_blank" rel="noopener noreferrer">
          <IoIosMail className="text-white cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a>
        <a href="https://www.linkedin.com/in/john-sathish-b93764250/" target="_blank" rel="noopener noreferrer">
          <IoLogoLinkedin className="text-white cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a>
        
      </div>
    </div>
  )
}

export default SideBar