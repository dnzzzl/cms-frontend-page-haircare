import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode[];
  labels?: string[];
};

export default function TabView({ children, labels = [] }:Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (index: number) => () => {
        setActiveIndex(index);
  };

  // Assumes that labels array are not empty and count is more than zero (nullish coalescing)
  const labelsLength = labels?.length ?? 0;

  // Fill up if there are less labels than children
  if (labelsLength < children.length) {
    for (let i = labelsLength; i < children.length; i++){
      labels.push(`Tab ${i+1}`);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ul className="flex justify-center p-4 bg-gray-200 rounded-t border-b border-gray-300">
        {labels?.map((label, index) => (
          <li key={index} className='p-2'>
            <button 
              onClick={handleClick(index)}
              className={`transition-all duration-700 ease-in-out
                ${activeIndex === index ? 'bg-blue-500 text-white px-4 py-2 rounded' : 'bg-gray-200 text-gray-800 px-4 py-2 rounded'}
              `}>
              {label}
            </button>
          </li>
        ))}
      </ul>
      <div className="p-4">{children[activeIndex]}</div>
    </div>
  );
};