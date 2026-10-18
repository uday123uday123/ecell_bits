import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  animated = false,
  showText = true,
  className = '',
}) => {
  const dimensions = {
    sm: { width: 140, height: 44, iconSize: 36 },
    md: { width: 190, height: 56, iconSize: 48 },
    lg: { width: 240, height: 72, iconSize: 64 },
    xl: { width: 340, height: 100, iconSize: 96 },
  }[size];

  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      {/* Uploaded BITS Vizag E-Cell Logo Image */}
      <div className="relative group flex-shrink-0 flex items-center justify-center">


        <img
          src="/logo.jpg"
          alt="E-CELL BITS VIZAG Logo"
          style={{ 
            height: dimensions.iconSize * 1.5,
            width: 'auto',
            mixBlendMode: 'screen' 
          }}
          className="relative z-10 transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};
