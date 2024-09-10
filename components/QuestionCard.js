
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

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
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={option.score.toString()} id={`q${categoryIndex}-${questionIndex}-option${optionIndex}`} />
              <Label htmlFor={`q${categoryIndex}-${questionIndex}-option${optionIndex}`} className="text-gray-700">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
