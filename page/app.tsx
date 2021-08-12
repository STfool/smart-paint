import React, { useState } from "react";
import useBoard from "./hooks/useBoard";

const App: React.FC = () => {
    const [resolution] = useState(window.devicePixelRatio);
    const [width, height] = useBoard();
    return (
        <>
            <canvas
                width={width * resolution}
                height={height * resolution}
                style={{ width: width + "px", height: height + "px" }}
            ></canvas>
        </>
    );
};

export default App;
