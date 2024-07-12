import React, { useEffect, useRef } from 'react';
import videoTennis from '../Homepage/Comps/comp-assets/output_videotennis.mp4';
import videoSoccer from '../Homepage/Comps/comp-assets/output_videosoccer.mp4';
import test from '../Homepage/Comps/comp-assets/3trained.mp4';
import newVideo from '../Homepage/Comps/comp-assets/bbaf2n.mp4';
import video1 from '../Homepage/Comps/comp-assets/bbaf3s.mp4';
import video2 from '../Homepage/Comps/comp-assets/bbaf4p.mp4';
import video3 from '../Homepage/Comps/comp-assets/bbaf5a.mp4';
import video4 from '../Homepage/Comps/comp-assets/bbal6n.mp4';

export default function VideoModal({ handleVideoChange, closeModal }) {
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

    const handleClose = () => {
        modalRef.current.classList.add('fade-out');
        modalContentRef.current.classList.add('scale-down');
        setTimeout(() => {
            closeModal();
        }, 500); // Match the duration of the CSS animation
    };

    return (
        <div className="modal" ref={modalRef}>
            <div className="modal-content" ref={modalContentRef}>
                <h1 className="h1-choose-video">Choose a video.</h1>
                <span className="close" onClick={handleClose}>&times;</span>
                <div className="video-grid">
                    {[
                        { src: videoTennis, label: 'Tennis Video' },
                        { src: videoSoccer, label: 'Soccer Video' },
                        { src: test, label: 'Test Video' },
                        { src: newVideo, label: 'BBAF2N' },
                        { src: video1, label: 'BBAF3S' },
                        { src: video2, label: 'BBAF4P' },
                        { src: video3, label: 'BBAF5A' },
                        { src: video4, label: 'BBAL6N' }
                    ].map((video, index) => (
                        <div className="video-item" key={index} onClick={() => handleVideoChange(video.src)}>
                            <video>
                                <source src={video.src} type="video/mp4" />
                            </video>
                            <p>{video.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
