import '../assets/styles/Projects.css';

const projects = [
  {
    title: "Snake Game",
    description: "A classic Snake game built with JavaScript, HTML5, and CSS3. The game includes features like increasing difficulty and a high score tracker.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    image: "public/images/snake-project.png",
    liveDemo: "https://snake-game-35w.pages.dev/",
    github: "https://github.com/yourusername/snake-game"
  },
  {
    title: "E-commerce Website",
    description: "A fully functional e-commerce website with features like product management, shopping cart, and secure payment gateway integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "path/to/e-commerce-image.jpg",
    liveDemo: "https://example.com/e-commerce",
    github: "https://github.com/yourusername/e-commerce"
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span className="technology" key={index}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo">Live Demo</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;