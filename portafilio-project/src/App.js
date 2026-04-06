import './App.css';
import img from './assets/img.png';

function App() {
  return (
    <div className="App">
      <header>

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
              <div className="experience">
                <h2>EXITED FOR</h2>
                <span>A NEW BEGINNEN</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>

        </div>
      </footer>
    </div>
  );
}

export default App;
