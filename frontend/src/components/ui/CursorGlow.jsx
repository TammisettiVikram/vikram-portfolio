import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function CursorGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return createPortal(
        <div
            style={{
                position: "fixed",
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 999999,
            }}
        >
            <div
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(59,130,246,0.45)",
                    filter: "blur(24px)",
                }}
            />
        </div>,
        document.body
    );
}
