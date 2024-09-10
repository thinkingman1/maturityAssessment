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
    <main className="container mx-auto p-4 font-sans relative">
      <ProgressBar progress={progress} />
      <h1 className="text-3xl font-bold mb-6 mt-12" style={{fontFamily: 'Arial, sans-serif'}}>Maturity Model Assessment</h1>
      
      {allQuestions.length > 0 ? (
        <form onSubmit={handleSubmit}>
          {allQuestions.map((q, questionIndex) => (
            <div key={questionIndex} className="mb-8">
              <p className="text-lg mb-4" style={{fontWeight: 700, fontFamily: 'Arial, sans-serif'}}>
                {questionIndex + 1}. {q.question}
              </p>
              <div className="space-y-2 ml-6">
                {q.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="flex items-start">
                    <input
                      type="radio"
                      id={`question-${questionIndex}-option-${optionIndex}`}
                      name={`question-${questionIndex}`}
                      value={option.score}
                      onChange={() => handleOptionSelect(questionIndex, option.score)}
                      className="mt-1 mr-3"
                    />
                    <label 
                      htmlFor={`question-${questionIndex}-option-${optionIndex}`}
                      className="cursor-pointer"
                      style={{fontFamily: 'Arial, sans-serif'}}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            style={{fontFamily: 'Arial, sans-serif'}}
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
