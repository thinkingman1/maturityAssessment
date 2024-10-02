import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { scores, questions } = req.body;

  if (!scores || !questions) {
    return res.status(400).json({ message: 'Missing required data' });
  }

  try {
    const prompt = generatePrompt(scores, questions);
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500,
    });

    const recommendation = response.choices[0].message.content.trim();
    res.status(200).json({ recommendation });
  } catch (error) {
    console.error('Error fetching recommendation:', error);
    res.status(500).json({ message: "Sorry, we couldn't generate a recommendation at this time." });
  }
}

function generatePrompt(scores, questions) {
  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 3;
  const percentage = (totalScore / maxScore) * 100;

  return `Based on a maturity model assessment for access management, the organization scored ${totalScore} out of a possible ${maxScore} points (${percentage.toFixed(2)}%). 

Please provide a structured recommendation for improving their access management practices. Focus on the most critical areas for improvement. Format your response as follows:

1. Overall Assessment: A brief 1-2 sentence summary of the organization's current maturity level.

2. Key Strengths: List 2-3 bullet points highlighting areas where the organization is likely performing well.

3. Priority Improvement Areas: List 3-4 bullet points of the most critical areas that need improvement, based on typical weaknesses for this maturity level.

4. Next Steps: Provide 3-5 concise, actionable steps the organization should take to improve their access management maturity.

Keep each section brief and to the point.

5. Last line in blue font: Connect Astranova labs for more information at info@astranovalabs.com or visit www.astranovalabs.com

`; 
}