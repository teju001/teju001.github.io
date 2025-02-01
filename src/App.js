import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Dark Mode Toggle Button */}
      <button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="header">
        <div className="hero">
          <h1>Varun Teja Boorla</h1>
          <p>Aspiring DevOps Engineer | AI/ML Enthusiast</p>
          <a href="#about" className="cta-button">Learn More</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Master's in Computer Science with hands-on experience in CI/CD pipelines, cloud deployments, and automation. 
          Skilled in Jenkins, AWS, Docker, Python, JavaScript, and SQL. Enthusiastic about automating workflows and 
          optimizing system performance.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Task Genie</h3>
            <p>Developed a service booking web app with React.js, Jenkins CI/CD, and AWS EC2 deployment.</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Digit Recognizer</h3>
            <p>Built a CNN for handwritten digit classification with 98% accuracy.</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Stock Market Prediction</h3>
            <p>Created ML models to predict stock market trends and assist in financial decision-making.</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <h3>Heart Disease Classification</h3>
            <p>Developed an ML model to predict coronary heart disease risk.</p>
            <a href="#" className="project-link">View Project</a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <p>Python | JavaScript | SQL | React.js | Jenkins | AWS | Docker | TensorFlow | PyTorch</p>
      </section>

      {/* Blog Section (Optional) */}
      <section id="blog" className="blog">
        <h2>Blog</h2>
        <div className="blog-posts">
          <div className="blog-post">
            <h3>Understanding CI/CD Pipelines</h3>
            <p>A deep dive into the world of Continuous Integration and Continuous Deployment.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
          <div className="blog-post">
            <h3>Getting Started with Docker</h3>
            <p>Learn the basics of Docker and how to containerize your applications.</p>
            <a href="#" className="read-more">Read More</a>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume">
        <h2>Resume</h2>
        <a href="https://github.com/teju001/teju001.github.io/blob/main/varun_DevOps.pdf" download className="download-button">Download Resume</a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:varuntejaboorla@gmail.com" target="_blank" rel="noopener noreferrer">varuntejaboorla@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/teju001" target="_blank" rel="noopener noreferrer">github.com/teju001</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/varunteja-boorla/" target="_blank" rel="noopener noreferrer">linkedin.com/in/varunteja-boorla</a></p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Varun Teja Boorla. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/teju001" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/varunteja-boorla/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;