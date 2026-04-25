import resume from './assets/docs/Diego_Estrada.pdf';
import download from './assets/download.svg';
import './App.css';

function Header(){
    return(
        <header>
            <div className="navbar">
            <div className="logo">ESTRADA_DEV</div>
            <div className="nav-links">
                <p>RESUME</p>
                <a href={resume} download>
                <img
                    src={download}
                    alt="download"
                />
                </a>
            </div>
            </div>
        </header>
    )
}

export default Header