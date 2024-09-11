import React from 'react';
import ScorePieChart from './ScorePieChart';

const ResultCard = ({ scores, questions }) => {
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

  return (
    <div className="mt-8 bg-white shadow-lg p-6 rounded-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Results</h2>
      </div>
      <div>
        <p className="mb-2 text-lg">Total Score: {totalScore} / {maxScore}</p>
        <p className="mb-4 text-xl font-semibold">Maturity Level: {maturityLevel}</p>
        <h3 className="text-lg font-semibold mb-2">Score Distribution</h3>
        <div className="mt-2">
          <ScorePieChart scores={scores} />
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
