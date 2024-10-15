// components/CustomCursor.js
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div
            className="fixed pointer-events-none z-50"
            style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                width: '20px',
                height: '20px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
        />
        // <img
        //     src="/plus.png" // Path to your stethoscope icon (PNG)
        //     alt="Custom Cursor"
        //     className="fixed pointer-events-none z-50"
        //     style={{
        //         left: `${mousePosition.x}px`,
        //         top: `${mousePosition.y}px`,
        //         width: '30px',  // Adjust the width as needed
        //         height: '30px', // Adjust the height as needed
        //         transform: 'translate(-50%, -50%)',
        //         transition: 'transform 0.2s ease',
        //     }}
        // />
    );
};

export default CustomCursor;
