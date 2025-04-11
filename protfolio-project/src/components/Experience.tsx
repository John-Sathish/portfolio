import Strings from "../shared/Strings";

const experienceData = [
  {
    title: "Customer Advisor – Boots",
    location: "Nottingham",
    date: "June 2024–present",
    description: [
      "Assisted 50+ customers daily with product queries",
      "Worked in a fast-paced retail environment",
      "Handled sales and handled filling of low stocks",
    ],
  },
  {
    title: "Hackathon - Medtech UoN",
    location: "Nottingham",
    date: "March 2025",
    description: [
      "Collaborated with a team at a MedTech hackathon to develop a symptom diagnosis chatbot and a medical language translator proof-of-concept.",
      "Designed solutions aimed at improving doctor-patient communication and diagnostic efficiency.",
      "Presented the functional prototype to a panel of doctors, professors, and small business owners, receiving valuable feedback",
      
    ],
  },
  {
    title: "Spotify Albums - BJSS",
    location: "Nottingham",
    date: "September 2023 - May 2024",
    description: [
      "I lead a team of 8 people, organising and managing sprint plans and retrospectives to provide project deliverables on time.",
      "I made use of scrum approach with 2-week sprint cycles to make steady progress",
      "Full stack developer utilizing React and the Spotify API to develop a tournament bracket-style game between albums on Spotify.",
      "I served as a main source of communication between the client (BJSS) and us throughout the project",
    ],
  },

  {
    title: "Software Engineering Virtual Experience – HP",
    location: "Remote",
    date: "June 2023 – August 2023",
    description: [
      "Wrote a proposal for a RESTful web service to manage a list of employees",
      "Built a web server application in Spring Boot that can accept and respond to HTTP requests and support uploading JSON data.",
      "Developed and ran unit tests to assess my Spring Boot application’s performance.",
    ],
  },

];

function Experience() {
  return (
    <section id = "experience">
      <div className="px-12 mt-12">
        <div className="flex items-center">
          <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
          <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
          <h2 className="text-[24px] font-bold">{Strings.EXPERIENCES}</h2>
          <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
          <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        </div>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 p-5 rounded-xl shadow-md cursor-pointer "
            >
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-sm text-slate-400">
                {exp.location} — {exp.date}
              </p>
              <ul className="mt-2 list-disc ml-5 text-sm text-slate-300 ">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
