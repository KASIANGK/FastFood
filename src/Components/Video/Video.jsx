import React, { useState, useEffect, useRef } from 'react';
import './Video.css';

const VideoB = () => {
    const videoRef = useRef(null); 
    const [displayText, setDisplayText] = useState(false); // État pour contrôler l'affichage du texte

    const vitesse = 1200;

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.preload = 'auto';
        }
    }, []);

    useEffect(() => {
        function avanceVideo() {
            const position = window.pageYOffset / vitesse;
            if (videoRef.current && videoRef.current.readyState >= 3) {
                videoRef.current.currentTime = position;
            }
            
            
            if (position >= 1 && position <= 3) {
                setDisplayText(true);
            } else {
                setDisplayText(false);
            }

            window.requestAnimationFrame(avanceVideo);
        }
        window.requestAnimationFrame(avanceVideo);
    }, []);

    return (
        <div className='videoComponent'>
            <video ref={videoRef} className="videoGun">
                <source src='../../public/design/mcdovideo-2.mp4' type="video/mp4" />
            </video>
            {displayText && (
                <div className="textOverlay">
                    <p></p>
                </div>
            )}
        </div>
    );
}

export default VideoB