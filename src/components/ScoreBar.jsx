import React from 'react';

const ScoreBar = ({ score, setScore }) => {
    const getScoreColor = (score) => {
        if (score <= 3) return '#ff4757';
        if (score <= 6) return '#ffa502';
        if (score <= 8) return '#2ed573';
        return '#5352ed';
    };

    const getScoreEmoji = (score) => {
        if (score <= 2) return '😞';
        if (score <= 4) return '😐';
        if (score <= 6) return '🙂';
        if (score <= 8) return '😊';
        return '🤩';
    };

    const getScoreText = (score) => {
        if (score <= 2) return 'Poor';
        if (score <= 4) return 'Fair';
        if (score <= 6) return 'Good';
        if (score <= 8) return 'Great';
        return 'Excellent';
    };

    return (
        <div style={{ margin: '20px 0' }}>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px', 
                marginBottom: '15px' 
            }}>
                <span style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '500', 
                    color: '#718096',
                    minWidth: '20px' 
                }}>0</span>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={score}
                    onChange={(e) => setScore(parseInt(e.target.value))}
                    style={{
                        flex: 1,
                        height: '8px',
                        borderRadius: '10px',
                        background: `linear-gradient(to right, ${getScoreColor(score)} 0%, ${getScoreColor(score)} ${score * 10}%, #e2e8f0 ${score * 10}%, #e2e8f0 100%)`,
                        outline: 'none',
                        cursor: 'pointer',
                        appearance: 'none',
                        WebkitAppearance: 'none'
                    }}
                />
                <span style={{ 
                    fontSize: '0.9rem', 
                    fontWeight: '500', 
                    color: '#718096',
                    minWidth: '25px' 
                }}>10</span>
            </div>
            
            <div style={{ 
                textAlign: 'center', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '12px 20px',
                borderRadius: '12px',
                border: `2px solid ${getScoreColor(score)}20`
            }}>
                <span style={{ fontSize: '1.5rem' }}>
                    {getScoreEmoji(score)}
                </span>
                <div>
                    <div style={{ 
                        fontSize: '1.4rem', 
                        fontWeight: '700', 
                        color: getScoreColor(score)
                    }}>
                        {score}/10
                    </div>
                    <div style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '500', 
                        color: '#4a5568',
                        marginTop: '2px'
                    }}>
                        {getScoreText(score)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoreBar;