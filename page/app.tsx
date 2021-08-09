import * as React from "react";

const App: React.FC = () => {
    const [resolution] = React.useState(window.devicePixelRatio);

    React.useEffect(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.lineTo(100, 100);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(20, 30);
        ctx.lineTo(20, 100);
        ctx.closePath();
        ctx.stroke();
    }, []);
    return (
        <>
            <canvas
                id="canvas"
                width={window.innerWidth * resolution}
                height={window.innerHeight * resolution}
                style={{
                    width: window.innerWidth + "px",
                    height: window.innerHeight + "px",
                }}
            ></canvas>
        </>
    );
};

export default App;
