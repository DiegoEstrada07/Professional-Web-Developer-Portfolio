import personal_image from './assets/personal-img.png';
import gitImg from './assets/github-svg-logo.svg';
import html from './assets/logos/html5-logo.svg';
import css from './assets/logos/css3-logo.svg';
import java from './assets/logos/js-logo.svg';
import react from './assets/logos/react-logo.svg';

function Main(){
    const gitUrl= "https://github.com/DiegoEstrada07";
    return(
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
            <div className="container right">
              <div className="card">
                <span className="date">2025 — in progress</span>
                <h2>Web Developer Diploma</h2>
                <h4>Tamwood Careers</h4>
                <ul>
                  <li>Develop web´s Front End.</li>
                  <li>Develop webs´s Back End.</li>
                  <li>Learn and gain experience with React, Vue, and Django.</li>
                  <li>Learn Java Script and Python.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className='main-footer-gradiant'> 
        </div>
      </main>
    )
}

export default Main;