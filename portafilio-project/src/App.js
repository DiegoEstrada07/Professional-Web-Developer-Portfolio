import './App.css';
import img from './assets/img.png';



function App() {
  const gitUrl= "https://github.com/DiegoEstrada07";
  return (
    <div className="App">
      <header>
        <div className="navbar">
          <div className="logo">ESTRADA_DEV</div>
          <div className="nav-links">
            <a>Look at my complete resume</a>
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
            </div>

            <div className="hero-right">
              <div className="image-card">
                <img
                  src={img}
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
              <span className="years">xxxx — xxxx</span>
              <h2 className="title">Help me start my new story</h2>
              <h3 className="company">I want to learn from you</h3>

              <ul className="list">
                <li>
                  I’m still just a rookie, but even w
                  ith that, I’m prepared for any work i
                  n web development, and I hope you can 
                  help me in this new career
                </li>
                <li>
                  Check my GitHub
                </li>
              </ul>
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
          <p>©ᓚᘏᗢ.</p>
        </div>

        <div className="footer-right">
          <a href={gitUrl}>
            GITHUB
          </a>
          <a href={gitUrl}>
            LINKEDIN
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
