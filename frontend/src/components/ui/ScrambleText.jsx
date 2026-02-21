import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*";

export default function ScrambleText({ phrases, interval = 2600, className = "" }) {
    const [text, setText] = useState(phrases[0] || "");
    const phraseIndex = useRef(0);

    useEffect(() => {
        if (!phrases?.length) return undefined;

        let timer;
        let rafId;

        const animatePhrase = (fromText, toText) => {
            const start = performance.now();
            const duration = 750;

            const frame = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const revealCount = Math.floor(progress * toText.length);

                const scrambled = toText
                    .split("")
                    .map((char, idx) => {
                        if (char === " ") return " ";
                        if (idx < revealCount) return char;
                        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                    })
                    .join("");

                setText(scrambled);

                if (progress < 1) {
                    rafId = requestAnimationFrame(frame);
                } else {
                    setText(toText);
                }
            };

            rafId = requestAnimationFrame(frame);
        };

        const cycle = () => {
            const currentText = phrases[phraseIndex.current];
            phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
            const nextText = phrases[phraseIndex.current];
            animatePhrase(currentText, nextText);
        };

        timer = setInterval(cycle, interval);

        return () => {
            clearInterval(timer);
            cancelAnimationFrame(rafId);
        };
    }, [phrases, interval]);

    return (
        <span
            className={className}
            style={{
                fontFamily: "monospace",
                fontVariantNumeric: "tabular-nums",
                display: "inline-block",
                minWidth: "100%",
            }}
        >
            {text}
        </span>
    );
}
