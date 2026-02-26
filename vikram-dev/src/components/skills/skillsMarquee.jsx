import { useEffect, useRef } from "react";

const skills = [
    "/skills/python.svg",
    "/skills/pytorch.svg",
    "/skills/tensorflow.svg",
    "/skills/sqlalchemy.svg",
    "/skills/flask.svg",
    "/skills/django.svg",
    "/skills/react.svg",
    "/skills/postgresql.svg",
    "/skills/docker.svg",
    "/skills/github.svg",
];

export default function SkillsMarquee() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const totalWidth = track.scrollWidth / 2;
        track.style.setProperty("--scroll-width", `${totalWidth}px`);
    }, []);

    return (
        <div className="skills-marquee">
            <div ref={trackRef} className="skills-track">
                {[...skills, ...skills].map((logo, i) => (
                    <div key={i} className="skill-box">
                        <img
                            src={logo}
                            alt="skill"
                            className="skill-logo"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
