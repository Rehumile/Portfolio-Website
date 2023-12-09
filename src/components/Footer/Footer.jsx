import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Sekoto</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" 
                        className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" 
                        className="footer__link">Portfolio</a>
                    </li>

                    <li>
                        <a href="#qualifications" 
                        className="footer__link">Qualification</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href='https://github.com/Rehumile' rel="noreferrer" 
                className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
            </a>

            <a href='https://www.linkedin.com/in/rehumilesekoto/' rel="noreferrer" 
            className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
            </a>

            <a href='mailto:sekotorehumile1@gmail.com' rel="noreferrer" 
            className="footer__social-link" target="_blank">
            <i className="uil uil-envelope"></i>
            </a>
                </div>

                <span className="footer__copy">&#169; Rehumile Sekoto.
                All rights reserved.</span>
            </div>
        </footer>
    )
}