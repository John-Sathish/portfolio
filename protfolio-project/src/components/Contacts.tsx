import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <section id="contacts" className="bg-slate-900 text-white p-10 mt-3 ">
      <div className="max-w-3xl mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-slate-400 mb-8">
          I'm open to internship opportunities, collaborations, or just chatting tech. Drop me a message or email
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-3xl mb-8">
          <a
            href="mailto:johnsathish2004@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <IoIosMail />
          </a>
          <a
            href="https://github.com/John-Sathish"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/john-sathish-b93764250/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <IoLogoLinkedin />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:johnsathish2004@gmail.com"
            className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-500 transition text-sm"
          >
            Send Email
          </a>
        
        </div>
      </div>
    </section>
  );
}
