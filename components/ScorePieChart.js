
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const ScorePieChart = ({ scores }) => {
  const getScoreDistribution = () => {
    const distribution = { low: 0, medium: 0, high: 0 };
    Object.values(scores).forEach(score => {
      if (score === 1) distribution.low++;
      else if (score === 2) distribution.medium++;
      else if (score === 3) distribution.high++;
    });
    return [
      { name: 'Low', value: distribution.low },
      { name: 'Medium', value: distribution.medium },
      { name: 'High', value: distribution.high },
    ];
  };

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

  return (
    <PieChart width={400} height={400}>
      <Pie data={getScoreDistribution()} cx={200} cy={200} labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
        {getScoreDistribution().map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ScorePieChart;
