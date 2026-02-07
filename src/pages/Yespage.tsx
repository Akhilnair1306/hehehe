import { useEffect, useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import DayCard from '@/components/DayCard';
import { VALENTINE_WEEK } from '@/config/valentineWeek';
import { Progress } from '@/components/ui/progress';

const YesPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Calculate progress
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const unlockedDays = VALENTINE_WEEK.filter(day => {
    const dayDate = new Date(day.date);
    dayDate.setHours(0, 0, 0, 0);
    return today >= dayDate;
  }).length;
  
  const progressPercent = (unlockedDays / VALENTINE_WEEK.length) * 100;

  return (
    <div className="min-h-screen romantic-gradient-bg py-12 px-6 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <span className="text-6xl md:text-8xl animate-pulse-heart inline-block">🎉</span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl text-primary mb-4"
            style={{ fontFamily: 'var(--font-romantic)' }}
          >
            I knew you would say Yes!! I mean why would someone reject me!! 😮‍💨😮‍💨
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Welcome to our Valentine's Week journey! 💕
          </p>
          
          {/* Progress bar */}
          <div className="max-w-md mx-auto mb-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Your journey</span>
              <span>{unlockedDays} of {VALENTINE_WEEK.length} days unlocked</span>
            </div>
            <Progress value={progressPercent} className="h-3" />
          </div>
          
          <p className="text-muted-foreground text-sm italic">
            A new surprise unlocks each day! ✨
          </p>
        </div>

        {/* Days Grid */}
        <div className={`transition-all duration-700 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALENTINE_WEEK.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <p 
            className="text-2xl md:text-3xl text-primary"
            style={{ fontFamily: 'var(--font-romantic)' }}
          >
            Each day brings us closer to our special day 💘
          </p>
          <div className="mt-6 flex justify-center gap-4 text-4xl">
            <span className="floating-heart">💖</span>
            <span className="floating-heart" style={{ animationDelay: '0.5s' }}>💕</span>
            <span className="floating-heart" style={{ animationDelay: '1s' }}>💗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YesPage;
