import { useEffect, useState, useRef } from 'react'
import profilePic from './assets/anmol.jpg'
import './App.css'

function App() {
  const [showIntro, setShowIntro] = useState(true)
  const [showNavbar, setShowNavbar] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  const lastScrollY = useRef(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    window.history.replaceState(null, '', '/')

    const timer = setTimeout(() => {
      setShowIntro(false)
      setTimeout(() => window.scrollTo(0, 0), 50)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        setShowNavbar(false)
      } else {
        setShowNavbar(true)
      }

      lastScrollY.current = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {showIntro && (
        <div className="intro-screen">
          <div className="cloud-intro">
            <div className="big-cloud">☁️</div>
            <h1>Hello 👋</h1>
            <p>Welcome to</p>
            <h2>Anmol's Cloud Engineer Portfolio</h2>
            <span>Loading Portfolio...</span>
          </div>
        </div>
      )}

      <main className="portfolio">
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        <section className="intro-card">
          <div className="avatar">☁️</div>
          <p className="hello">Welcome to my Cloud Engineering Journey 🚀</p>
        </section>

        <nav className={`navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>
          <div className="nav-links">
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certificates</a>
           {/*} <a href="#achievements">Achievements</a>*/}
            <a href="#resume">Resume</a>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-text">
            <p className="tag">AWS • Docker • Linux • Cloud Computing</p>
            <h1>Anmol Kumar</h1>

            <h2 className="gradient-title">
            Aspiring Cloud Engineer
            </h2>

            <p className="about">
              Aspiring Cloud Engineer focused on AWS, Linux, Docker and DevOps.
              Currently pursuing B.Tech in Computer Science at Maharishi
              University of Information Technology, Noida. Passionate about
              building scalable cloud infrastructure and continuously learning
              modern cloud technologies.
            </p>

            <div className="buttons">
              <a href="mailto:01singhsahab19@gmail.com" className="primary">
                Email
              </a>

              <a
                href="https://github.com/Anmolkumarr"
                target="_blank"
                rel="noreferrer"
                className="secondary"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anmol-kumar19/"
                target="_blank"
                rel="noreferrer"
                className="secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="photo-card">
            <span className="orbit-icon orbit-aws">AWS</span>
            <span className="orbit-icon orbit-docker">DOCKER</span>
            <span className="orbit-icon orbit-linux">LINUX</span>
            <span className="orbit-icon orbit-gear">⚙️</span>

            <div className="gradient-ring"></div>

            <img
              src={profilePic}
              alt="Anmol Kumar"
              className="profile-photo"
            />
          </div>
        </section>

        <section className="section">
          <h2>Quick Stats</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>4+</h3>
              <p>Technical Certifications</p>
            </div>
            <div className="project-card">
              <h3>50+</h3>
              <p>Linux Commands Practiced</p>
            </div>
            <div className="project-card">
              <h3>10+</h3>
              <p>Cloud Concepts Learned</p>
            </div>
            <div className="project-card">
              <h3>4+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </section>

        <section className="section" id="education">
          <h2>Education</h2>
          <div className="card">
            <h3>B.Tech Computer Science & Engineering</h3>
            <p>Maharishi University of Information Technology (MUIT), Noida</p>
            <p>Currently completing 4th Semester</p>
            <p>Entering 3rd Year from August 2026</p>
          </div>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <div className="skills">
            <span>Linux</span>
            <span>AWS</span>
            <span>Docker</span>
            <span>Cloud Networking</span>
            <span>Git & GitHub</span>
            <span>Python</span>
            <span>Java</span>
            <span>C</span>
            <span>RDBMS</span>
            <span>MySQL</span>
            <span>HTML</span>
            <span>Bootstrap</span>
            <span>CI/CD</span>
            <span>Kubernetes</span>
            <span>Terraform</span>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="project-grid">
           <div className="project-card">
  <h3>Dockerized Portfolio Website</h3>
  <p>
    Containerized my personal portfolio website using Docker and Nginx.
    Built a multi-stage Docker image and deployed the React/Vite application
    inside a Docker container.
  </p>
  <span>Docker • Nginx • React • Vite</span>

  <a
    href="https://github.com/Anmolkumarr/anmol-portfolio"
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    View Source →
  </a>
</div>

            <div className="project-card">
              <h3>Personal Portfolio Website</h3>
              <p>
                Built a modern cloud engineer portfolio using React and Vite
                with responsive design, premium UI and resume download option.
              </p>
              <span>React • Vite • CSS</span>
            </div>

            <div className="project-card">
              <h3>AWS Foundation Labs</h3>
              <p>
                Practiced IAM, EC2, EBS, S3, RDS, CloudWatch, VPC, Route53,
                Load Balancer and Auto Scaling concepts.
              </p>
              <span>AWS Cloud</span>
            </div>

            <div className="project-card">
              <h3>Linux Practice Lab</h3>
              <p>
                Worked with Linux commands, file permissions, user management,
                networking commands and shell navigation.
              </p>
              <span>Linux • Shell</span>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Cloud Engineering Roadmap</h2>
          <div className="roadmap">
            <p>✅ Computer Fundamentals</p>
            <p>✅ Cloud Fundamentals</p>
            <p>✅ Linux Foundation</p>
            <p>✅ Cloud Networking</p>
            <p>✅ AWS Foundation</p>
            <p>✅ Docker Theory & Practical</p>
            <p>🔄 Git & GitHub</p>
            <p>⏳ CI/CD</p>
            <p>⏳ Kubernetes</p>
            <p>⏳ Terraform</p>
          </div>
        </section>

        <section className="section" id="certifications">
          <h2>Technical Certifications</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Java Training</h3>
              <p>
                Successfully completed Java Training under the Spoken Tutorial
                Project, IIT Bombay.
              </p>
              <span>Java</span>
              <a href="/java-certificate.png" target="_blank" className="project-link">
                View Certificate →
              </a>
            </div>

            <div className="project-card">
              <h3>Python Training</h3>
              <p>
                Successfully completed Python 3.4.3 Training under EduPyramids
                and IIT Bombay.
              </p>
              <span>Python</span>
              <a href="/python-certificate.png" target="_blank" className="project-link">
                View Certificate →
              </a>
            </div>

            <div className="project-card">
              <h3>HTML Training</h3>
              <p>
                Successfully completed HTML Training under EduPyramids and IIT
                Bombay.
              </p>
              <span>HTML</span>
              <a href="/HTML-certificate.png" target="_blank" className="project-link">
                View Certificate →
              </a>
            </div>

            <div className="project-card">
              <h3>Bootstrap Training</h3>
              <p>
                Successfully completed Bootstrap Training under EduPyramids and
                IIT Bombay.
              </p>
              <span>Bootstrap</span>
              <a href="/bootstrap-certificate.png" target="_blank" className="project-link">
                View Certificate →
              </a>
            </div>
          </div>
        </section>

      {/*}  <section className="section" id="achievements">
          <h2>Achievements</h2>
          <div className="project-grid">
            
            <div className="project-card">
              <h3>Hands-on Docker Practice</h3>
              <p>
                Built and ran Docker containers, worked with Docker volumes,
                Nginx, port mapping, Dockerfile and Docker Compose.
              </p>
              <span>Docker • DevOps</span>
            </div>

            <div className="project-card">
              <h3>Cloud Learning Journey</h3>
              <p>
                Completed strong foundations in computer fundamentals, Linux,
                cloud networking, AWS foundation and Docker practicals.
              </p>
              <span>Cloud • AWS • Linux</span>
            </div>
          </div>
        </section>  */}
 
        <section className="section resume-section" id="resume">
          <h2>Want to know more about me?</h2>
          <p>
            Download my resume to explore my education, projects,
            certifications and technical skills in detail.
          </p>
          <a href="/Anmol_Resume.pdf" download className="resume-btn">
            ⬇ Download Resume
          </a>
        </section>

        <footer className="footer">
          <h3>Anmol Kumar</h3>
          <p>Aspiring Cloud Engineer</p>

          <div className="footer-links">
            <a href="mailto:01singhsahab19@gmail.com">Email</a>
            <a
              href="https://github.com/Anmolkumarr"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anmol-kumar19/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <p className="copyright">
            © 2026 Anmol Kumar. Built with React, Vite, Docker & Nginx.
          </p>
        </footer>
      </main>
    </>
  )
}

export default App