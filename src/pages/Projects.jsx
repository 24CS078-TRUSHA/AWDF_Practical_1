import "./Projects.css";

const projectList = [
  {
    id: 1,
    title: "Student Portfolio",
    description: "A React + Vite portfolio built with reusable components and props.",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A full-featured online store with product listings, cart, and checkout flow.",
  },
  {
    id: 3,
    title: "BloodLink",
    description: "A blood donation platform connecting donors with people in need in real time.",
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <h2>Projects</h2>
      <p>A few things I've been building and learning from.</p>

      <div className="project-grid">
        {projectList.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;