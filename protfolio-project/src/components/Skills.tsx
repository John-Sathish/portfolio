import Strings from "../shared/Strings";

const skills = {
  "Programming Languages": [
    "Java",
    "C",
    "Python",
    "PHP",
    "SQL",
    "Spring Boot",
    "REST API",
  ],
  "Tools & Technologies": [
    "Windows",
    "Linux (Ubuntu)",
    "MySQL",
    "IntelliJ",
    "VS Code",
    "Eclipse",
    "Git",
    "Jira",
  ],
};

function Skills() {
  return (
    <section id = "skills">
      <div className="px-12 mt-12">
        <div className="flex items-center">
          <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
          <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
          <h2 className="text-[24px] font-bold">{Strings.SKILLS}</h2>
          <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
          <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        </div>
        <br></br>
        <div className="space-y-10">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-700 text-slate-100 px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
