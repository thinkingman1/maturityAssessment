import React, { useState } from 'react';
import ScorePieChart from './ScorePieChart';

const ResultCard = ({ scores, questions }) => {
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const calculateTotalScore = () => Object.values(scores).reduce((sum, score) => sum + score, 0);

  const getMaturityLevel = (totalScore) => {
    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 60) return 'Intermediate';
    return 'Basic';
  };

  const totalScore = calculateTotalScore();
  const maturityLevel = getMaturityLevel(totalScore);
  const maxScore = questions.length * 3;

  const handleFetchRecommendation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/getRecommendation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ scores, questions }),
      });
      const data = await response.json();
      setRecommendation(data.recommendation);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
      setRecommendation("Sorry, we couldn't generate a recommendation at this time.");
    }
    setIsLoading(false);
  };

  const renderStructuredRecommendation = () => {
    if (!recommendation) return null;

    const sections = recommendation.split('\n\n');
    return sections.map((section, index) => {
      const [title, ...content] = section.split('\n');
      return (
        <div key={index} className="mb-4">
          <h4 className="font-semibold mb-2">{title}</h4>
          <ul className="list-disc pl-5">
            {content.map((item, i) => (
              <li key={i}>{item.replace(/^\d+\.\s/, '').replace(/^-\s/, '')}</li>
            ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="mt-8 bg-white shadow-lg p-6 rounded-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Results</h2>
      </div>
      <div>
        <p className="mb-2 text-lg">Total Score: {totalScore} / {maxScore}</p>
        <p className="mb-4 text-xl font-semibold">Maturity Level: {maturityLevel}</p>
        <h3 className="text-lg font-semibold mb-2">Score Distribution</h3>
        <div className="mt-2 mb-4">
          <ScorePieChart scores={scores} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            onClick={handleFetchRecommendation}
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }} 
            disabled={isLoading}
          >
            {isLoading ? 'Fetching...' : 'Fetch Recommendation'}
          </button>
        </div>
        {recommendation && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h4 className="font-semibold mb-2">Recommendation:</h4>
            {renderStructuredRecommendation()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultCard;
