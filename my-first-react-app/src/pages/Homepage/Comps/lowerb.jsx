import React, { useState, useEffect } from 'react';
import './bodytwo.css';
import labelsImage from '../assets/train_batch1.jpg';
import resultsImage from '../assets/lipss.png';
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
            <div className="bodyTwo-header">Training our own AI model.</div>
            <nav className="bodyTwo-navbar">
                <div className={`bodyTwo-nav-item ${currentSection === 1 ? 'active' : ''}`}>Datatsets</div>
                <div className={`bodyTwo-nav-item ${currentSection === 2 ? 'active' : ''}`}>Frames</div>
                <div className={`bodyTwo-nav-item ${currentSection === 3 ? 'active' : ''}`}>Clusters</div>
            </nav>
            <div className="bodyTwo-content">
                <div className="bodyTwo-text-container">
                    <section className="bodyTwo-text-section" id="example1">
                        <h2>⁰¹ Datatsets</h2>
                        <p>During the training of our soccer analysis system using AI/ML, we utilized a dataset from Roboflow consisting
                           of approximately 750 pre-labeled images. We employed these images to pretrain our model, comparing pixels to
                           refine its accuracy. The training process was conducted using Jupyter Notebook, ultimately resulting in the
                           development of both the best-performing and final trained models.</p>
                    </section>
                    <section className="bodyTwo-text-section" id="example2">
                        <h2>⁰² Frame alignments.</h2>
                        <p>In this image, we are extracting frames from a video to analyze. By subtracting the mean and standard deviation,
                            we effectively isolate specific regions of interest. In this case, we are highlighting the lips, which are marked 
                            in yellow for clear visualization.</p>
                    </section>
                    <section className="bodyTwo-text-section" id="example3">
                        <h2>⁰³ Clustering Images.</h2>
                        <p>
                        Clustering images is a crucial technique in AI/ML. In this picture, I am clustering the players' upper bodies to focus
                        on their jersey colors. This approach simplifies differentiating between the two teams and enhances the clarity and fluidity
                        of the final visualizations.</p>
                    </section>
                </div>
                <div className="bodyTwo-image-container">
                    <img key={currentSection} src={images[currentSection - 1]} alt={`Example ${currentSection}`} />
                </div>
            </div>
        </div>
    );
}
