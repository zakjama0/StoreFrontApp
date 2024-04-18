import { useEffect, useState } from "react";
import scooter from "../images/scooter.png";
import gamingConsole from "../images/gaming_console.png";
import footballFans from "../images/football_fans.png";
import cup from "../images/hello_kitty_mug.png";

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [scooter, gamingConsole, footballFans, cup];
    const totalSlides = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide, totalSlides]);

    return (
        <div id="slideshow" style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    style={{
                        display: index === currentSlide ? 'block' : 'none',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                />
            ))}
        </div>
    );
};

export default Slideshow;