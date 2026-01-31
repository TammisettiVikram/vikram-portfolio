import { useEffect, useRef } from "react";

import python from "../../assets/skills/python.svg";
import pytorch from "../../assets/skills/pytorch.svg";
import tensorflow from "../../assets/skills/tensorflow.svg";
import SQLAlchemy from "../../assets/skills/sqlalchemy.svg";
import flask from "../../assets/skills/flask.svg";
import django from "../../assets/skills/django.svg";
import react from "../../assets/skills/react.svg";
import postgres from "../../assets/skills/postgresql.svg";
import docker from "../../assets/skills/docker.svg";
import github from "../../assets/skills/github.svg";

const skills = [
    python,
    pytorch,
    tensorflow,
    SQLAlchemy,
    flask,
    django,
    react,
    postgres,
    docker,
    github,
];

export default function SkillsMarquee() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // width of ONE sequence
        const totalWidth = track.scrollWidth / 2;
        track.style.setProperty("--scroll-width", `${totalWidth}px`);
    }, []);

    return (
        <div className="skills-marquee">
            <div ref={trackRef} className="skills-track">
                {[...skills, ...skills].map((logo, i) => (
                    <div key={i} className="skill-box">
                        <img src={logo} alt="skill" className="skill-logo" />
                    </div>
                ))}
            </div>
        </div>

    );
}
