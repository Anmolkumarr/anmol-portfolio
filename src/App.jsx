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
            <p className="tag">AWS • Docker • Linux • GitHub Actions • CI/CD</p>
            <h1>Anmol Kumar</h1>

            <h2 className="gradient-title">
            Cloud Engineer | DevOps Enthusiast | AWS Learner
            </h2>

            <p className="about">
              <p className="about">
            I am an aspiring Cloud Engineer building hands-on skills in AWS, Linux,
            Docker, GitHub Actions and CI/CD. I have dockerized my portfolio using
            Docker and Nginx, automated image builds with GitHub Actions, and deployed
            it live on Vercel. Currently, I am focused on strengthening my cloud and
             DevOps project portfolio.
</p>
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
  <h2>Professional Summary</h2>

  <div className="card">
    <p>
      I am a Computer Science student and aspiring Cloud Engineer with hands-on
      experience in Linux, AWS, Docker, GitHub Actions and CI/CD. I enjoy
      building cloud-native solutions, automating workflows and continuously
      improving my DevOps skillset through practical projects.
    </p>

    <br />

    <p>
      My goal is to become a Cloud & DevOps Engineer capable of designing,
      deploying and managing scalable infrastructure using modern cloud
      technologies.
    </p>
  </div>
</section>

        <section className="section">
  <h2>Quick Stats</h2>
  <div className="project-grid">
    <div className="project-card stat-card">
      <h3>4+</h3>
      <p>Projects Built</p>
    </div>
    <div className="project-card stat-card">
      <h3>50+</h3>
      <p>Linux Commands Practiced</p>
    </div>
    <div className="project-card stat-card">
      <h3>20+</h3>
      <p>AWS Services Learned</p>
    </div>
    <div className="project-card stat-card">
      <h3>1</h3>
      <p>CI/CD Pipeline Built</p>
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

  <div className="project-grid">

    <div className="project-card">
      <h3>☁️ Cloud Computing</h3>
      <p>
        AWS Fundamentals, IAM, EC2, EBS, S3, RDS, VPC,
        Route 53, CloudWatch, Load Balancer, Auto Scaling.
      </p>
    </div>

    <div className="project-card">
      <h3>⚙️ DevOps</h3>
      <p>
        Docker, Git, GitHub, GitHub Actions,
        CI/CD Pipelines, Docker Hub, Nginx.
      </p>
    </div>

    <div className="project-card">
      <h3>🐧 Linux</h3>
      <p>
        Linux Administration, File Permissions,
        User Management, Networking Commands,
        Shell Navigation.
      </p>
    </div>

    <div className="project-card">
      <h3>💻 Programming</h3>
      <p>
        Java, Python, C, MySQL,
        HTML, Bootstrap.
      </p>
    </div>

  </div>
</section>
     <section className="section" id="projects">
  <h2>Projects</h2>

  <div className="project-grid">

    <div className="project-card">
      <h3>🚀 Dockerized Portfolio with CI/CD</h3>

      <p>
        Built and containerized my personal portfolio using React, Docker and
        Nginx. Implemented GitHub Actions to automatically build Docker images
        and push them to Docker Hub whenever code is pushed to GitHub.
      </p>

      <span>React • Docker • Nginx • GitHub Actions • CI/CD</span>

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
      <h3>🌐 Cloud Engineer Portfolio</h3>

      <p>
        Designed and deployed a responsive cloud engineering portfolio
        showcasing projects, certifications, technical skills and learning
        roadmap. Hosted live on Vercel with a modern user interface and
        optimized performance.
      </p>

      <span>React • Vite • CSS • Vercel</span>

      <a
        href="https://anmol-portfolio-phi.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        Live Demo →
      </a>
    </div>

    <div className="project-card">
      <h3>☁️ AWS Hands-On Lab Environment</h3>

      <p>
        Practiced real-world AWS services including IAM, EC2, EBS, S3, RDS,
        CloudWatch, VPC, Route 53, Load Balancers and Auto Scaling through
        hands-on labs and cloud architecture exercises.
      </p>

      <span>AWS • Networking • Cloud Infrastructure</span>
    </div>

    <div className="project-card">
      <h3>🐧 Linux Administration Lab</h3>

      <p>
        Built a structured Linux practice environment covering file management,
        permissions, user administration, shell navigation and networking
        commands commonly used in cloud environments.
      </p>

      <span>Linux • Bash • System Administration</span>
    </div>

  </div>
</section>  

<section className="section">
  <h2>Current Focus</h2>

  <div className="project-grid">

    <div className="project-card">
      <h3>✅ Completed</h3>

      <p>
        Linux Foundation<br />
        Cloud Networking<br />
        AWS Foundation<br />
        Docker<br />
        Git & GitHub<br />
        GitHub Actions CI/CD
      </p>
    </div>

    <div className="project-card">
      <h3>🔄 In Progress</h3>

      <p>
        Terraform<br />
        Infrastructure as Code<br />
        AWS Project Building
      </p>
    </div>

    <div className="project-card">
      <h3>🎯 Upcoming</h3>

      <p>
        Kubernetes<br />
        Advanced AWS Projects<br />
        DevOps Automation
      </p>
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
            <p>✅ Git & GitHub</p>
            <p>✅ CI/CD</p>
            <p>🔄 Kubernetes</p>
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
          <p><p>Cloud Engineer | DevOps Enthusiast | AWS Learner</p></p>

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
           <p className="copyright">
  © 2026 Anmol Kumar. Built with React, Docker, GitHub Actions & Cloud Passion ☁️
</p>
          </p>
        </footer>
      </main>
    </>
  )
}

export default App