import { useEffect, useState } from "react";
import "./Projects.css";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const GITHUB_USERNAME = "24CS078-TRUSHA";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const fetchRepos = () => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`GitHub API returned status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setRepos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchRepos();
  };

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="projects-page">
      <h2>Projects</h2>
      <p>My public repositories, pulled live from GitHub.</p>

      {!loading && !error && (
        <input
          type="text"
          className="search-input"
          placeholder="Search repositories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}

      {loading && <LoadingSpinner />}

      {!loading && error && (
        <ErrorMessage message={error} onRetry={handleRetry} />
      )}

      {!loading && !error && (
        <div className="project-grid">
          {filteredRepos.length === 0 ? (
            <p className="no-results">No repositories match your search.</p>
          ) : (
            filteredRepos.map((repo) => (
              <div className="project-card" key={repo.id}>
                <h3>{repo.name}</h3>
                <p className="repo-stars">⭐ {repo.stargazers_count}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default Projects;


/*import "./Projects.css";

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

export default Projects;*/