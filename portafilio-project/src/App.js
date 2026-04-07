import './App.css';
import img from './assets/img.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/about';
import Project from './components/proyects';



function App() {
  const gitUrl= "https://github.com/DiegoEstrada07";
  return (
    <div className="App">
      <header>
        <Router>
          <div className="navbar">
            <div className="logo">ESTRADA_DEV</div>
            <div className="nav-links">
              <Link to="/">About</Link>
              <Link to="/projects">Projects</Link>
            </div>
          </div>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
          </Routes>
        </Router>
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
        <section className='experience'>
          <h2>My_Experience</h2>
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
      </main>
      <div className='main-footer-gradiant'> 
      </div>
      <footer class="footer">
        <div class="footer-left">
          <h2>DIGITAL_ARCHIVE</h2>
          <p>© 2024 DIGITAL_ARCHIVE. ALL RIGHTS RESERVED.</p>
        </div>

        <div class="footer-right">
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
