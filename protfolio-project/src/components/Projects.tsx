import Strings from "../shared/Strings";

const projects = [
  {
    title: "Spotify Album Tournament",
    description:
      "Fun bracket-style game where users vote on their favorite albums. Built with React and Spotify API.",
    tech: ["React", "Spotify API", "CSS"],
    image: "https://via.placeholder.com/400x200", // Replace with real image
    github: "https://github.com/John-Sathish/SpotifyBracket",
    demo: "https://spotify-tournament.netlify.app",
  },
  {
    title: "Heart Disease Predictor",
    description:
      "ML-powered app to predict heart disease risk from user input. Trained with scikit-learn.",
    tech: ["Python", "scikit-learn", "Flask"],
    image: "https://via.placeholder.com/400x200",
    github: "https://github.com/yourusername/heart-predictor",
    demo: null,
  },
  {
    title: "Movie Management Website",
    description:
      "Full-stack web app to search, save, and manage movies using a custom backend.",
    tech: ["Java", "Spring Boot", "MySQL"],
    image: "https://via.placeholder.com/400x200",
    github: "https://github.com/yourusername/movie-site",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id = "projects">
      <div className="px-12 mt-12">
        <div className="flex items-center">
          <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
          <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
          <h2 className="text-[24px] font-bold">{Strings.PROJECTS}</h2>
          <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
          <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        </div>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mt-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-600 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
