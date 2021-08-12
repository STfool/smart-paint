import React, { useEffect, useRef, useState } from "react";
import useBoard from "./hooks/useBoard";

const App: React.FC = () => {
    const [resolution] = useState(window.devicePixelRatio);
    const pointerDownRef = useRef(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [width, height] = useBoard();
    const canvasRef = useRef<HTMLCanvasElement>();

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
    }, [width, height]);

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
        const handlePointerDown = (e: PointerEvent) => {
            if (!pointerDownRef.current) {
                pointerDownRef.current = true;
            }
            setPosition({
                x: e.pageX,
                y: e.pageY,
            });
        };
        const handlePointerMove = (e: PointerEvent) => {
            if (!pointerDownRef.current) return;

            ctx.beginPath();
            ctx.moveTo(position.x * resolution, position.y * resolution);
            ctx.lineTo(e.pageX * resolution, e.pageY * resolution);
            ctx.closePath();
            ctx.stroke();
        };
        const handlePointerUp = () => {
            console.log(pointerDownRef.current);
            pointerDownRef.current = false;
        };
        window.addEventListener("pointerdown", handlePointerDown, false);
        window.addEventListener("pointermove", handlePointerMove, false);
        window.addEventListener("pointerup", handlePointerUp, false);

        return () => {
            window.removeEventListener("pointerdown", handlePointerDown, false);
            window.removeEventListener("pointermove", handlePointerMove, false);
            window.removeEventListener("pointerup", handlePointerUp, false);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                width={width * resolution}
                height={height * resolution}
                style={{ width: width + "px", height: height + "px", cursor: "crosshair" }}
            ></canvas>
        </>
    );
};

export default App;
