import React, { useEffect, useRef, useState } from "react";
import useBoard from "./hooks/useBoard";

const App: React.FC = () => {
    const resolutionRef = useRef(window.devicePixelRatio);
    const pointerDownRef = useRef(false);
    const canvasRef = useRef<HTMLCanvasElement>();

    const [width, height] = useBoard();
    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
    }, [width, height]);

    const positionRef = useRef({ x: 0, y: 0 });
    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
        const handlePointerDown = (e: PointerEvent) => {
            if (!pointerDownRef.current) {
                pointerDownRef.current = true;
            }
            positionRef.current = {
                x: e.pageX,
                y: e.pageY,
            };
        };
        const handlePointerMove = (e: PointerEvent) => {
            if (!pointerDownRef.current) return;

            ctx.beginPath();
            ctx.moveTo(positionRef.current.x * resolutionRef.current, positionRef.current.y * resolutionRef.current);
            ctx.lineTo(e.pageX * resolutionRef.current, e.pageY * resolutionRef.current);
            ctx.closePath();
            ctx.stroke();

            positionRef.current = {
                x: e.pageX,
                y: e.pageY,
            };
        };
        const handlePointerUp = () => {
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
                width={width * resolutionRef.current}
                height={height * resolutionRef.current}
                style={{ width: width + "px", height: height + "px", cursor: "crosshair" }}
            ></canvas>
        </>
    );
};

export default App;
