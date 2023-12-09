import { useState } from "react";
import "./Header.css"

export default function Header() {

    // window.addEventListener("scroll", function() {

    //     /* ---change background header--- */
    //     const header = document.querySelector(".header");
    //     // when the scroll is higher than 560 viewport height,
    //     // add the scroll-header class to the tag with the header tage
    //     if (this.scrollY >= 80) header.classList.add("scroll-header")
    //     else header.classList.remove("scroll-header")
    // })

    /* ---toggle menu--- */
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Rehumile Sekoto</a>

                <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualifications" className="nav__link">
                                <i className="uil uil-award nav__icon"></i>Qualifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-folder-open nav__icon"></i>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close"
                    onClick={() => setShowMenu(!showMenu)}>
                    </i>
                </div>
                <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
        </>
    )
}