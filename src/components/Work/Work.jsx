import React from "react";
import "./Work.css"
import Works from "./Works";

export default function Work() {
    return (
        <section className="work section" id='portfolio'>
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Most recent works</span>
         <Works/>
        </section>

       
    )
}