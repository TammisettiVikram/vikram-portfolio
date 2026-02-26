import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function CursorGlow() {
    const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

    useEffect(() => {
        const updatePosition = (e) => {
            const target = e.target;
            const interactive = target?.closest?.(
                "a,button,input,textarea,select,[data-cursor='interactive']"
            );
            setCursor({ x: e.clientX, y: e.clientY, active: Boolean(interactive) });
        };

        window.addEventListener("mousemove", updatePosition, { passive: true });
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return createPortal(
        <>
            <div
                className={`cursor-core ${cursor.active ? "is-active" : ""}`}
                style={{
                    transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
                }}
            />
            <div
                className={`cursor-glow ${cursor.active ? "is-active" : ""}`}
                style={{
                    transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
                }}
            />
        </>,
        document.body
    );
}
