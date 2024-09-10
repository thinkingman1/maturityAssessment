
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { questions } from '@/data/questions';
import QuestionCard from './QuestionCard';
import ResultCard from './ResultCard';
import ProgressBar from './ProgressBar';

const AccessManagementMaturityModel = () => {
  const [scores, setScores] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setProgress(Math.min(scrollPercentage, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScoreChange = (categoryIndex, questionIndex, score) => {
    setScores(prevScores => ({
      ...prevScores,
      [`${categoryIndex}-${questionIndex}`]: score,
    }));
    setError('');
  };

  const calculateTotalScore = () => Object.values(scores).reduce((sum, score) => sum + score, 0);

  const getMaturityLevel = (totalScore) => {
    const maxScore = questions.reduce((sum, category) => sum + category.questions.length * 3, 0);
    const percentage = (totalScore / maxScore) * 100;
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 60) return 'Intermediate';
    return 'Basic';
  };

  const handleSubmit = () => {
    const totalQuestions = questions.reduce((sum, category) => sum + category.questions.length, 0);
    if (Object.keys(scores).length === totalQuestions) {
      setShowResults(true);
      setError('');
    } else {
      setError('Please answer all questions before submitting.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
      <ProgressBar progress={progress} />
      <h1 className="text-3xl font-bold mb-6 text-indigo-800">Access Management Maturity Model</h1>
      {questions.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">{category.category}</h2>
          {category.questions.map((q, questionIndex) => (
            <QuestionCard
              key={questionIndex}
              categoryIndex={categoryIndex}
              questionIndex={questionIndex}
              question={q}
              handleScoreChange={handleScoreChange}
            />
          ))}
        </div>
      ))}
      <Button onClick={handleSubmit} className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
        Calculate Maturity Score
      </Button>
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {showResults && <ResultCard scores={scores} questions={questions} />}
    </div>
  );
};

export default AccessManagementMaturityModel;
