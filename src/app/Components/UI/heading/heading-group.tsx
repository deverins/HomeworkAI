import React from 'react';

interface HeadingGroupProps {
  title: string;
  subtitle: string;
}

const HeadingGroup: React.FC<HeadingGroupProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

export default HeadingGroup;
