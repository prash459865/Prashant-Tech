import React, { useEffect, useRef, useState } from 'react';
import './ImagesSlider.css';
import NavBar from '../NavBar/NavBar';

import image_1 from '../../assets/image_1.avif';
import image_2 from '../../assets/image_2.jpg';
import image_3 from '../../assets/image_3.avif';
import image_4 from '../../assets/image_4.avif';
import image_5 from '../../assets/image_5.avif';


const originalImages = [image_1, image_2, image_3, image_4, image_5];
const textPerSlide = [
    'Welcome to Prashant Tech',
    'Innovative Solutions Crafted for Your Business Growth',
    'Seamless User Experiences, Engineered with Passion',
    'Secure, Scalable, and Modern Web Applications',
    'Let’s Build the Future Together – Start Your Journey Now'
]

const ImagesSlider = () => {
    const [active,setactive] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const images = [...originalImages, originalImages[0]];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex === images.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 1000);

            setTimeout(() => {
                setIsTransitioning(true);
            }, 1100);
        }
    }, [currentIndex, images.length]);

    return (
        <div className={active?"slider-container-active":"slider-container"}>
            <div
                ref={sliderRef}
                className="slider-track"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? 'transform 1s ease-in-out' : 'none',
                }}
            >
                {images.map((img, i) => (
                    <img src={img} key={i} className="slide-image" />
                ))}
            </div>
            <div className="slider-overlay">
                <NavBar setactive={setactive} />
                {active && <h1 style={{alignSelf:"center",color:"white",borderBottom:"5px solid white"}}>{active}</h1>}
               { active === '' && <div key={currentIndex} className='text-above-slided-image'>
                    <h1 >{textPerSlide[currentIndex]}</h1>
                </div>}
            </div>
        </div>
    );
};

export default ImagesSlider;
