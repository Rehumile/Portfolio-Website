import React from "react";

export default function Frontend() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Technical Skills</h3>

            <div className="skills__box">
                <div className="skills__group">
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">HTML & CSS</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                </div>

                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Git/Version Control</h3>
                    <span className="skills__level">Proficient</span>
                    </div>
                </div>

           
                </div>
                <div className="skills__group">
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">React JS</h3>
                    <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Microsoft Office</h3>
                    <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__level">Beginner</span>
                    </div>
                </div>

           
                </div>
            </div>
        </div>
    )
}