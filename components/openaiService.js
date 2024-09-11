import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Note: This is not recommended for production
});

export async function getRecommendation(scores, questions) {
  const prompt = generatePrompt(scores, questions);
  
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error fetching recommendation:', error);
    return "Sorry, we couldn't generate a recommendation at this time.";
  }
}

function generatePrompt(scores, questions) {
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  return `Based on a maturity model assessment for access management, the organization scored ${totalScore} out of a possible ${maxScore} points (${percentage.toFixed(2)}%). 
  Please provide a brief recommendation for improving their access management practices. Focus on the most critical areas for improvement.`;
}