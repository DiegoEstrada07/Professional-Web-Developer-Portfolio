

function Footer(){
  const linkedinUrl="https://www.linkedin.com/in/diego-estrada-webdev/";
  const gitUrl= "https://github.com/DiegoEstrada07";
  return(
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
    )
}

export default Footer;