import { useRef } from "react";

export default function useMagnetic(strength = 18) {
    const ref = useRef(null);

    const onMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        const maxOffset = 14;
        const offsetX = Math.max(Math.min(x / strength, maxOffset), -maxOffset);
        const offsetY = Math.max(Math.min(y / strength, maxOffset), -maxOffset);

        el.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    };

    const onMouseLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "translate3d(0px, 0px, 0)";
    };

    return { ref, onMouseMove, onMouseLeave };
}
