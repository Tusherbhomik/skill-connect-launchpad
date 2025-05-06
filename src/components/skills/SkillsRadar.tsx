
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Frontend',
    A: 85,
    fullMark: 100,
  },
  {
    subject: 'Backend',
    A: 55,
    fullMark: 100,
  },
  {
    subject: 'UI/UX',
    A: 75,
    fullMark: 100,
  },
  {
    subject: 'Databases',
    A: 60,
    fullMark: 100,
  },
  {
    subject: 'DevOps',
    A: 40,
    fullMark: 100,
  },
  {
    subject: 'Testing',
    A: 65,
    fullMark: 100,
  },
];

const SkillsRadar: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid strokeDasharray="3 3" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Skills"
          dataKey="A"
          stroke="#14b8a6"
          fill="#14b8a6"
          fillOpacity={0.5}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillsRadar;
