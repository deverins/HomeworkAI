import React from 'react';

interface HeadingGroupProps {
  title: string;
  subtitle: string;
}

const HeadingGroup: React.FC<HeadingGroupProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2 align-middle">{title}</h2>
      <p className="text-[#9E9D9D] text-sm font-normal align-middle">{subtitle}</p>
    </div>
  );
};

export default HeadingGroup;
