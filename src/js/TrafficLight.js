import React, { useState } from 'react';
import "../styles/index.css";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const handleClick = (selectedColor) => {
        setColor(selectedColor);
    };

    return (
        <div className="traffic-light-container"> {}
            <div 
                className={`light red ${color === 'red' ? 'shine' : ''}`} 
                onClick={() => handleClick('red')}
            ></div>
            <div 
                className={`light yellow ${color === 'yellow' ? 'shine' : ''}`} 
                onClick={() => handleClick('yellow')}
            ></div>
            <div 
                className={`light green ${color === 'green' ? 'shine' : ''}`} 
                onClick={() => handleClick('green')}
            ></div>
        </div>
    );
};

export default TrafficLight;