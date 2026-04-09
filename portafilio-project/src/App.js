import './App.css';
import personal_image from './assets/personal-img.png';
import gitImg from './assets/github-svg-logo.svg';
import resume from './assets/docs/Diego_Estrada.pdf';
import download from './assets/download.svg';
import html from './assets/logos/html5-logo.svg';
import css from './assets/logos/css3-logo.svg';
import java from './assets/logos/js-logo.svg';
import react from './assets/logos/react-logo.svg'

function App() {
  const gitUrl= "https://github.com/DiegoEstrada07";
  const linkedinUrl="https://www.linkedin.com/in/diego-estrada-914ba53a5/?skipRedirect=true";
  return (
    <div className="App">
      <header>
        <div className="navbar">
          <div className="logo">ESTRADA_DEV</div>
          <div className="nav-links">
            <a href={resume} download>
              <img
                  src={download}
                  alt="download"
                />
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-container">
            
            <div className="hero-left">
              <span className="badge">AVAILABLE FOR HIRE</span>
              <h1>
                Hello, I’m <br />
                <span className="highlight">Diego Estrada.</span>
              </h1>
              <p>
                Building modern web experiences with <strong>code</strong> and{" "}
                <strong>passion</strong>. 
              </p>
              <div className='habilities'>
                <img
                  src={html}
                  alt="html"
                />
                <gap className='gap'/>
                <img
                  src={css}
                  alt="css"
                />
                <gap className='gap'/>
                <img
                  src={java}
                  alt="java"
                />
                <gap className='gap'/>
                <img
                  src={react}
                  alt="react"
                />
              </div>
            </div>

            <div className="hero-right">
              <div className="image-card">
                <img
                  src={personal_image}
                  alt="profile"
                />
              </div>
              <div className="message">
                <h2>EXITED FOR</h2>
                <span>A NEW BEGINNEN</span>
              </div>
            </div>
          </div>
        </section>
        <div className='gradiant_space'>
        </div>
        <section className="summary">
          <p className='summary_title'>Summary</p>
          <div className='summary_content'>
            <p>
              International student studying web development in Vancouver searching for 
              new oportunities. Motivated and detail oriented professional with 6 months of experience in technical services. 
              Experienced in equipment maintenance and computer troubleshooting. 
              Strong interpersonal and problem solving skills, with a demonstrated ability 
              to adapt to dynamic environments and provide excellent service. 
            </p>
          </div>
        </section>
        <section className='experience'>
          <p>My_Experience</p>
          <div className='my_experience'>
            <div className='experience_zone'>
              <span className="years">2024 — 2025</span>
              <h2 className="title">IT assistant</h2>
              <h3 className="company">Centro de estudios científicos y tecnológicos No 5</h3>

              <ul className="list">
                <li>
                  My labor was to support the school it system by
                  providing maintenance to the computers cables and internet 
                  systems.
                </li>
                <li>
                  Knowledge in computer sience and wireless conections.
                </li>
                <li>
                  Knowledge in computer hardware for their maintenance.
                </li>
              </ul>
            </div>    
          </div>
        </section>
        <section className='my_projects'>
          <p className='projects_title'>My_Projects</p>
          <div className='git-card'>
              <div className='git-content'>
                <a href={gitUrl}>
                  <p>Go and look my github</p>
                  <img
                    src={gitImg}
                    alt="github_logo"
                  />
                </a>
              </div>
          </div>
        </section>
        <section className='studies'>
          <p>My_Studies</p>
          <div className="timeline">
            <div className="container left">
              <div className="card">
                <span className="date">2022 — 2025</span>
                <h2>Computer technician</h2>
                <h4>Centro de estudios científicos y tecnológicos No 5</h4>
                <ul>
                  <li>Three years of study at one of the best specialized high schools in Mexico.</li>
                </ul>
              </div>
            </div>
            {/*
            <div className="container right">
              <div className="card">
                <span className="date">2025 — 2026</span>
                <h2>Software Engineer II</h2>
                <h4>Stellar Global Networks</h4>
                <ul>
                  <li>Developed APIs with Python/FastAPI.</li>
                  <li>Improved database performance by 30%.</li>
                  <li>Increased test coverage to 92%.</li>
                </ul>
              </div>
            </div>
            */}
          </div>
        </section>
        <div className='main-footer-gradiant'> 
        </div>
      </main>
      <footer className="footer">
        <div className="footer-left">
          <h2>ESTRADA_DEV</h2>
          <p>diego.estrada1705@gmail.com</p>
          <p>©ᓚᘏᗢ.</p>
        </div>

        <div className="footer-right">
          <a href={gitUrl}>
            GITHUB
          </a>
          <a href={linkedinUrl}>
            LINKEDIN
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
