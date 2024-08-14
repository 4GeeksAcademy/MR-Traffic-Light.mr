import React, { useState } from "react";



const TrafficLight = () => {
    const [state, setState] = useState("green");
    const [extraLight, setExtraLight] = useState(false);

    const handleNext = () => {
        setState(prevState => {
            if (prevState === "green") return "yellow";
            if (prevState === "yellow") return "red";
            if (prevState === "red") return extraLight ? "purple" : "green";
            return "green";
        });
    };

    const handleExtraLight = () => {
        setExtraLight(prev => !prev);
    };

    return (
        <div className="traffic-light-container">
            <div className="traffic-light">
                <div className={`light ${state === "red" ? "red" : ""}`}></div>
                <div className={`light ${state === "yellow" ? "yellow" : ""}`}></div>
                <div className={`light ${state === "green" ? "green" : ""}`}></div>
                {extraLight && <div className="light purple"></div>}
            </div>
            <div className="button-container">
                <button type="button" className="btn btn-primary me-2" onClick={handleNext}>
                    Siguiente luz
                </button>
                <button type="button" className="btn btn-purple" onClick={handleExtraLight}>
                    Agregar/Quitar Luz Morada
                </button>
            </div>
        </div>
    );
};

export default TrafficLight;
