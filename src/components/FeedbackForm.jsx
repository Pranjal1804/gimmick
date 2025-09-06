import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ScoreBar from './ScoreBar';
import './FeedbackForm.css';

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [registration, setRegistration] = useState('');
    const [score, setScore] = useState(5);
    const [feedback, setFeedback] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add a slight delay for better user experience
        setTimeout(() => {
            history.push('/hacker');
        }, 300);
    };

    return (
        <div className="feedback-form-container">
            <div className="floating-elements">
                <div className="floating-circle"></div>
                <div className="floating-circle"></div>
                <div className="floating-circle"></div>
            </div>
            
            <h1>Session Feedback</h1>
            
            <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input 
                        className="form-input"
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your full name"
                        required 
                    />
                    <span className="form-icon">👤</span>
                </div>

                <div className="form-group">
                    <label>Registration Number</label>
                    <input 
                        className="form-input"
                        type="text" 
                        value={registration} 
                        onChange={(e) => setRegistration(e.target.value)} 
                        placeholder="Enter your registration number"
                        required 
                    />
                    <span className="form-icon">🎓</span>
                </div>

                <div className="form-group">
                    <label>How would you rate this session?</label>
                    <div className="score-section">
                        <ScoreBar score={score} setScore={setScore} />
                    </div>
                </div>

                <div className="form-group">
                    <label>Share your thoughts about the session</label>
                    <textarea 
                        className="form-textarea"
                        value={feedback} 
                        onChange={(e) => setFeedback(e.target.value)} 
                        placeholder="Tell us what you liked, what could be improved, or any suggestions..."
                        required 
                    />
                    <span className="form-icon">💭</span>
                </div>

                <button type="submit" className="submit-button">
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;