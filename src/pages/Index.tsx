import { useNavigate } from 'react-router-dom';
import FloatingHearts from '@/components/FloatingHearts';
import EscapingButton from '@/components/EscapingButton';

const Index = () => {
  const navigate = useNavigate();

  const handleYes = () => {
    navigate('/yes');
  };

  return (
    <div className="min-h-screen romantic-gradient-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 text-center max-w-lg mx-auto">
        {/* Main heart icon */}
        <div className="mb-8 animate-pulse-heart">
          <span className="text-7xl md:text-8xl">💖</span>
        </div>

        {/* Question */}
        <h1 
          className="text-4xl md:text-6xl text-primary mb-4 animate-fade-in-up"
          style={{ fontFamily: 'var(--font-romantic)' }}
        >
          Will You Be My Valentine?
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl mb-12 animate-fade-in-up animation-delay-200">
          I have something special to ask you... 💕
        </p>

        {/* Buttons */}
        <div className="space-y-8 animate-fade-in-up animation-delay-400">
          {/* Yes button - always clickable */}
          <div>
            <button
              onClick={handleYes}
              className="btn-yes text-xl md:text-2xl"
            >
              Yes! 💖
            </button>
          </div>

          {/* No button - escapes cursor */}
          <EscapingButton>
            No 😢
          </EscapingButton>
        </div>

        {/* Playful hint */}
        <p className="mt-16 text-muted-foreground/60 text-sm italic animate-fade-in-up animation-delay-600">
          (The "No" button seems to be a bit shy... 🙈)
        </p>
      </div>
    </div>
  );
};

export default Index;
