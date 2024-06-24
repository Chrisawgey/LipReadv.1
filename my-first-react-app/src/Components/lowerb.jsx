import React, { useState, useEffect } from 'react';
import './bodytwo.css';
import labelsImage from '../assets/labels.jpg';
import resultsImage from '../assets/results.png';
import clusteringImage from '../assets/clustering image into two clusters using kmeans.png';

export default function BodyTwo() {
    const [currentSection, setCurrentSection] = useState(1);
    const images = [labelsImage, resultsImage, clusteringImage];

    useEffect(() => {
        const section = document.getElementById('bodyTwo');
        const handleScroll = () => {
            const sectionTop = section.offsetTop;
            const scrollY = window.scrollY;
            const sectionHeight = window.innerHeight * 0.5; // 50vh in pixels

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight * 4) {
                const currentSectionIndex = Math.floor((scrollY - sectionTop) / sectionHeight) + 1;
                setCurrentSection(currentSectionIndex);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="bodyTwo" className="bodyTwo">
            <div className="bodyTwo-header">Placeholder this is an example</div>
            <nav className="bodyTwo-navbar">
                <div className={`bodyTwo-nav-item ${currentSection === 1 ? 'active' : ''}`}>Example</div>
                <div className={`bodyTwo-nav-item ${currentSection === 2 ? 'active' : ''}`}>Example</div>
                <div className={`bodyTwo-nav-item ${currentSection === 3 ? 'active' : ''}`}>Example</div>
            </nav>
            <div className="bodyTwo-content">
                <div className="bodyTwo-text-container">
                    <section className="bodyTwo-text-section" id="example1">
                        <h2>Example 1</h2>
                        <p>Your text for example 1 goes here.</p>
                    </section>
                    <section className="bodyTwo-text-section" id="example2">
                        <h2>Example 2</h2>
                        <p>Your text for example 2 goes here.</p>
                    </section>
                    <section className="bodyTwo-text-section" id="example3">
                        <h2>Example 3</h2>
                        <p>Your text for example 3 goes here.</p>
                    </section>
                </div>
                <div className="bodyTwo-image-container">
                    <img src={images[currentSection - 1]} alt={`Example ${currentSection}`} />
                </div>
            </div>
        </div>
    );
}
