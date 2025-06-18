import { useState, useEffect } from 'react';

export const StarBG = () => {
    const [stars, setStars] = useState([]);
    const [metiors, setMeteors] = useState([]);

    useEffect(() => {
        genStars();
        genMetiors();
        window.addEventListener('resize', () => {
            genStars();
        });

        return () => {
            window.removeEventListener('resize', genStars);
        }
    }, []);

    const genStars = () => {
        const starCount = Math.floor(window.innerWidth * window.innerHeight / 12500);

        const newStars = [];

        for( let i = 0; i < starCount; i++ ){
            newStars.push({
                id: i,
                size: Math.random() *3 +1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const genMetiors = () => {
        const metiorCount = 4;

        const newMetiorss = [];

        for( let i = 0; i < metiorCount; i++ ){
            newMetiorss.push({
                id: i,
                size: Math.random() *2 +1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMetiorss);
    }

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointe-events-none">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    opacity: star.opacity,
                    animationDuration: `${star.animationDuration}s`
                }} />
            ))}
            {metiors.map((metior) => (
                <div key={metior.id} className="meteor animate-meteor" style={{
                    width: `${metior.size*20}px`,
                    height: `${metior.size}px`,
                    left: `${metior.x}%`,
                    top: `${metior.y}%`,
                    animationDelay: metior.delay,
                    animationDuration: `${metior.animationDuration}s`
                }} />
            ))}
        </div>
    )
}