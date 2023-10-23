import React from "react";
import "./Skills.css"
import "./Frontend"
import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Skills() {
    return (
        <section className="skills section" id="skills">
             <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical Level</span>
        <div className="skills__container container grid">
            <Frontend/>
        <Backend/>
        </div>
        
        </section>
    )
}