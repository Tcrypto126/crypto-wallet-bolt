import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  onClick,
  hoverable = false
}) => {
  const hoverClasses = hoverable 
    ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer' 
    : '';
  
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{children: React.ReactNode; className?: string}> = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`px-5 py-4 border-b border-gray-100 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<{children: React.ReactNode; className?: string}> = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`px-5 py-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<{children: React.ReactNode; className?: string}> = ({ 
  children,
  className = ''
}) => {
  return (
    <div className={`px-5 py-4 border-t border-gray-100 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

export default Card;