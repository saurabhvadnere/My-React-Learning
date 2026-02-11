import "../styles/Portfolio.css";

function App() {
  return (
    <section className="portfolio-container">

      <div className="portfolio-header">
        <h1>My Portfolio</h1>
        <p>Explore my work and professional journey</p>
      </div>

      <div className="profile-links">

        <div className="profile-card">
          <h2>GitHub</h2>
          <p>View my projects, backend APIs, and code repositories.</p>
          <a 
            href="https://github.com/saurabhvadnere" 
            target="_blank" 
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            Visit GitHub
          </a>
        </div>

        <div className="profile-card">
          <h2>LinkedIn</h2>
          <p>Connect with me and explore my professional background.</p>
          <a 
            href="https://www.linkedin.com/in/saurabh-vadnere/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            Visit LinkedIn
          </a>
        </div>

      </div>

    </section>
  );
}

export default App;
