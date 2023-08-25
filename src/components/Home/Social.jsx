import React from "react";

export default function Social() {
    return (
        <div className="home__social">
            <a href='https://github.com/Rehumile' rel="noreferrer" className="home__social-icon" target="_blank">
            <i className="uil uil-github"></i>
            </a>

            <a href='https://www.linkedin.com/in/rehumilesekoto/' rel="noreferrer" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
            </a>

            <a href='mailto:sekotorehumile1@gmail.com' rel="noreferrer" className="home__social-icon" target="_blank">
            <i className="uil uil-envelope"></i>
            </a>
        </div>
    )
}