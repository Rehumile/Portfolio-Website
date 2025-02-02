import { useState } from "react";
import "./Qualifications.css"

export default function Qualifications() {
     const [toggleState, setToggleState] = useState(1);

     const toggleTab = (index) => {
        setToggleState(index)
     }

    return (
        

        <section className="qualification section" id="qualifications">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}
                    >
                        
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2
                    ? "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                    "qualification__content qualification__content-active" 
                    : "qualification__content"} >
                                                <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Junior DevOps Engineer</h3>
                                <span className="qualification__subtitle">CherryOlive</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Dec 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Development</h3>
                                <span className="qualification__subtitle">CodeSpace Academy</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Feb 2023 - Aug 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Responsive Web Design</h3>
                                <span className="qualification__subtitle">FreeCodeCamp</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>   
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BSc Computer Science</h3>
                                <span className="qualification__subtitle">Eduvos</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Mar 2021 - Dec 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">Spain - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2018
                                </div>
                            </div>   
                        </div> */}

                        
                    </div>

                    <div className={toggleState === 2 ?
                    "qualification__content qualification__content-active" 
                    : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Freelance Transcriber</h3>
                                <span className="qualification__subtitle">Rev.com</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Census Data Collector</h3>
                                <span className="qualification__subtitle">Statistics SA</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Feb 2022 - Apr 2022
                                </div>
                            </div>   
                        </div>

                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Designer</h3>
                                <span className="qualification__subtitle">Figma - Spain</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}

                        

                        
                    </div>

                </div>
            </div>
        </section>
    )
}