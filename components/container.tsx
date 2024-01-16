import { useState } from 'react';

export default function Container({ children, coverImage, gradient_opacity, inner_shadow }: {children: React.ReactNode, coverImage?: string, gradient_opacity?: number, inner_shadow?: boolean}) {
  const backgroundImage = coverImage ? `url(${coverImage})` : null;
  const [hovered, setHovered] = useState(false);
  let hasProps = coverImage || gradient_opacity || inner_shadow;

  return (
    <div 
      className={`container mx-auto px-5 rounded-lg relative overflow-hidden ${inner_shadow ? 'shadow-inner' : ''}`} 
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      
    >
      {hasProps && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent hover:transition-all duration-700 ease-in-out"
          style={{ 
            opacity: hovered ? (gradient_opacity ? gradient_opacity : 0) : 0,

          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      )}
      {children}
    </div>
  );
}