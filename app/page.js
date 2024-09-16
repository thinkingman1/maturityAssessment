'use client';
import { useState, useEffect } from 'react';
import { questions } from '../components/questions';
import ResultCard from '../components/ResultCard';
import ProgressBar from '../components/ProgressBar';

export default function Home() {
  const [scores, setScores] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);

  const allQuestions = questions.flatMap(category => category.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const currentQuestion = allQuestions[currentQuestionIndex];

  useEffect(() => {
    const answeredQuestions = Object.keys(scores).length;
    const newProgress = (answeredQuestions / allQuestions.length) * 100;
    setProgress(newProgress);
  }, [scores, allQuestions.length]);

  const handleOptionSelect = (questionIndex, score) => {
    setScores(prevScores => ({
      ...prevScores,
      [questionIndex]: score
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <main style={{fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px'}}>
      <ProgressBar progress={progress} />
      <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', marginTop: '48px', textAlign: 'center'}}>Maturity Model Assessment</h1>
      
      {allQuestions.length > 0 ? (
        <form onSubmit={handleSubmit}>
          {allQuestions.map((q, questionIndex) => (
            <div key={questionIndex} style={{marginBottom: '32px'}}>
              <p style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '16px'}}>
                {questionIndex + 1}. {q.question}
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                {q.options.map((option, optionIndex) => (
                  <button 
                    key={optionIndex}
                    type="button"
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                      backgroundColor: scores[questionIndex] === option.score ? '#3B82F6' : '#F3F4F6',
                      color: scores[questionIndex] === option.score ? 'white' : 'black',
                    }}
                    onClick={() => handleOptionSelect(questionIndex, option.score)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button 
            type="submit" 
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          >
            Submit
          </button>
        </form>
      ) : (
        <p>No questions available.</p>
      )}

      {showResults && <ResultCard scores={scores} questions={allQuestions} />}
    </main>
  );
}
