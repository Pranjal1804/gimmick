import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './HackerPage.css';

const HackerPage = () => {
    const history = useHistory();
    const [matrixText, setMatrixText] = useState('');

    useEffect(() => {
        // Generate matrix-like background text
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        let matrix = '';
        for (let i = 0; i < 1000; i++) {
            matrix += characters.charAt(Math.floor(Math.random() * characters.length));
            if (i % 50 === 0) matrix += '\n';
        }
        setMatrixText(matrix);
    }, []);

    const goBack = () => {
        history.push('/');
    };

    return (
        <div className="hacker-container">
            <div className="matrix-bg">{matrixText}</div>
            <div className="hacker-content">
                <h1 className="hacker-title glitch">Your details Have been Captured</h1>
                <div className="skull"></div>
                <p className="hacker-message">
                    <span className="glitch">YOU HAVE BEEN HACKED!</span>
                </p>
                <p className="hacker-message">
                    But thanks for the review
                </p>
                <div className="terminal-line"> Capturing IP...</div>
                <div className="terminal-line"> Validation browser and versions...</div>
                <div className="terminal-line"> Data Captured!</div>
                <button className="back-button" onClick={goBack}>
                    [ESC] Back to Reality
                </button>
            </div>
        </div>
    );
};

export default HackerPage;