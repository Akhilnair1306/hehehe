import { useState, useRef, useCallback } from 'react';

interface EscapingButtonProps {
  children: React.ReactNode;
}

const EscapingButton = ({ children }: EscapingButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const escapeFromCursor = useCallback(() => {
    if (!buttonRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = buttonRef.current.getBoundingClientRect();
    
    // Calculate maximum movement bounds
    const maxX = (container.width - button.width) / 2;
    const maxY = 150;

    // Random direction with bias away from center
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;

    // Ensure it stays within bounds
    const clampedX = Math.max(-maxX, Math.min(maxX, newX));
    const clampedY = Math.max(-maxY, Math.min(maxY, newY));

    setPosition({ x: clampedX, y: clampedY });
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full flex justify-center"
      style={{ minHeight: '200px' }}
    >
      <button
        ref={buttonRef}
        className="btn-no absolute"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.15s ease-out',
        }}
        onMouseEnter={escapeFromCursor}
        onTouchStart={escapeFromCursor}
        onClick={(e) => e.preventDefault()}
      >
        {children}
      </button>
    </div>
  );
};

export default EscapingButton;
