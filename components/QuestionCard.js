import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const OptionButton = ({ option, isSelected, onClick }) => (
  <Button
    variant={isSelected ? "default" : "outline"}
    className={`w-full h-full p-4 flex items-center justify-center text-center ${
      isSelected ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {option.label}
  </Button>
);

const QuestionCard = ({ categoryIndex, questionIndex, question, handleScoreChange }) => {
  return (
    <Card className="mb-4 bg-white shadow-md">
      <CardHeader>
        <h3 className="text-lg font-semibold text-indigo-600">
          Question {categoryIndex + 1}.{questionIndex + 1}: {question.question}
        </h3>
      </CardHeader>
      <CardContent>
        <RadioGroup onValueChange={(value) => handleScoreChange(categoryIndex, questionIndex, parseInt(value))}>
          <div className="flex space-x-4">
            {question.options.map((option, idx) => (
              <div key={idx} className="flex-1">
                <RadioGroupItem
                  value={option.score.toString()}
                  id={`q${categoryIndex}-${questionIndex}-option${idx}`}
                  className="sr-only"
                />
                <Label
                  htmlFor={`q${categoryIndex}-${questionIndex}-option${idx}`}
                  className="flex items-center justify-center h-20 p-4 text-center border rounded-lg cursor-pointer hover:bg-gray-100"
                  style={{ width: '100px', height: '100px', border: '1px solid red' }}
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
