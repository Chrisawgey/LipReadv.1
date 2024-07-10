import { useEffect, useState } from 'react';
import './Showcase.css';

export default function Showcase() {
    useEffect(() => {
        const button1 = document.getElementById('1button');
        const button2 = document.getElementById('2button');
        const button3 = document.getElementById('3button');
        const tabContent1 = document.querySelector('.tab-content-1');
        const tabContent2 = document.querySelector('.tab-content-2');
        const tabContent3 = document.querySelector('.tab-content-3');

        button1.addEventListener('click', () => {
            tabContent1.style.display = 'block';
            tabContent2.style.display = 'none';
            tabContent3.style.display = 'none';
        });

        button2.addEventListener('click', () => {
            tabContent1.style.display = 'none';
            tabContent2.style.display = 'block';
            tabContent3.style.display = 'none';
        });

        button3.addEventListener('click', () => {
            tabContent1.style.display = 'none';
            tabContent2.style.display = 'none';
            tabContent3.style.display = 'block';
        });

        return () => {
            button1.removeEventListener('click', () => {});
            button2.removeEventListener('click', () => {});
            button3.removeEventListener('click', () => {});
        };
    }, []);

    return (
        <div className="container-2">
            <div className="description">
                <h1>Heading</h1>
                <p className="paragraph-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                </p>
            </div>
            <div className="tabs">
                <div className="tabs-menu">
                    <button id="1button" className="tab-menu-button">
                        Classifies images into sets
                    </button>
                    <button id="2button" className="tab-menu-button">
                        Detects location and class of objects
                    </button>
                    <button id="3button" className="tab-menu-button"></button>
                </div>
                <div className="tabs-content">
                    <div className="feature-window">
                        <div className="feature-number-1">Feature</div>
                        <div className="feature-number-2">Feature</div>
                        <div className="feature-number-3">Feature</div>
                    </div>
                    <div className="tab-content-1"></div>
                    <div className="tab-content-2"></div>
                    <div className="tab-content-3"></div>
                </div>
            </div>
            <div className="features-wrapper">
                <div className="feature-div">
                    <h5>500k models trained per day</h5>
                    <p>Python Package</p>
                </div>
                <div className="feature-div">
                    <h5>Heading</h5>
                    <p>Python Package</p>
                </div>
                <div className="feature-div">
                    <h5>Heading</h5>
                    <p>Python Package</p>
                </div>
                <div className="feature-div">
                    <h5>Heading</h5>
                    <p>Python Package</p>
                </div>
            </div>
            <div className="learn-button-wrapper">
                <button className="learn-button"> Learn More </button>
            </div>
        </div>
    );
}
