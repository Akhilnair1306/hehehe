import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Lock, Calendar } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import LoveLetter from '@/components/LoveLetter';
import SpotifyEmbed from '@/components/SpotifyEmbed';
import { Button } from '@/components/ui/button';
import { 
  VALENTINE_WEEK, 
  LOVE_LETTER, 
  isDayUnlocked, 
  getDaysUntilUnlock 
} from '@/config/valentineWeek';

const DayPage = () => {
  const { dayNumber } = useParams<{ dayNumber: string }>();
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  
  const dayIndex = parseInt(dayNumber || "1") - 1;
  const day = VALENTINE_WEEK[dayIndex];
  
  useEffect(() => {
    if (!day) {
      navigate('/yes');
      return;
    }
    
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, [day, navigate]);

  if (!day) return null;

  const isUnlocked = isDayUnlocked(day.date);
  const daysUntil = getDaysUntilUnlock(day.date);
  const isValentinesDay = day.day === 8;
  
  const prevDay = dayIndex > 0 ? VALENTINE_WEEK[dayIndex - 1] : null;
  const nextDay = dayIndex < VALENTINE_WEEK.length - 1 ? VALENTINE_WEEK[dayIndex + 1] : null;
  
  const canGoPrev = prevDay && isDayUnlocked(prevDay.date);
  const canGoNext = nextDay && isDayUnlocked(nextDay.date);

  // If day is locked, show locked state
  if (!isUnlocked) {
    return (
      <div className="min-h-screen romantic-gradient-bg flex items-center justify-center px-6">
        <FloatingHearts />
        
        <div className="relative z-10 text-center max-w-md">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-secondary/50 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-16 h-16 text-primary/60" />
            </div>
            
            <h1 
              className="text-4xl md:text-5xl text-primary mb-4"
              style={{ fontFamily: 'var(--font-romantic)' }}
            >
              {day.name}
            </h1>
            
            <p className="text-6xl mb-4">{day.emoji}</p>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">
                  {new Date(day.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              <p className="text-xl text-foreground/80 mb-4">
                Come back in <span className="text-primary font-bold">{daysUntil}</span> {daysUntil === 1 ? 'day' : 'days'}! 💕
              </p>
              
              <p className="text-muted-foreground italic">
                Something special is waiting for you...
              </p>
            </div>
          </div>
          
          <Link to="/yes">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Overview
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen romantic-gradient-bg py-8 px-6 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/yes"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Valentine Week
          </Link>
          
          <div className="mb-4">
            <span className="text-6xl md:text-7xl animate-pulse-heart inline-block">{day.emoji}</span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl text-primary mb-2"
            style={{ fontFamily: 'var(--font-romantic)' }}
          >
            {day.name}
          </h1>
          
          <p className="text-lg text-muted-foreground">
            {new Date(day.date).toLocaleDateString('en-US', { 
              weekday: 'long',
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          
          <p 
            className="text-2xl md:text-3xl text-primary/80 mt-4"
            style={{ fontFamily: 'var(--font-romantic)' }}
          >
            {day.theme}
          </p>
        </div>

        {/* GIF */}
        <div className={`mb-10 transition-all duration-700 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={day.gifUrl} 
              alt={`${day.name} GIF`}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Message or Love Letter */}
        <div className={`mb-10 transition-all duration-700 delay-400 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {isValentinesDay ? (
            <LoveLetter 
              content={LOVE_LETTER}
              signature="Forever Yours ❤️"
            />
          ) : (
            <div className="letter-paper max-w-2xl mx-auto">
              <div 
                className="text-foreground/90 text-lg md:text-xl leading-relaxed whitespace-pre-line text-center"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {day.message}
              </div>
            </div>
          )}
        </div>

        {/* Spotify */}
        <div className={`mb-12 transition-all duration-700 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <SpotifyEmbed 
            trackId={day.spotifyTrackId}
            startTime={day.spotifyStartTime}
          />
        </div>

        {/* Navigation */}
        <div className={`flex justify-between items-center transition-all duration-700 delay-600 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {canGoPrev ? (
            <Link to={`/day/${day.day - 1}`}>
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                {prevDay.name}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          
          {canGoNext ? (
            <Link to={`/day/${day.day + 1}`}>
              <Button variant="outline" className="gap-2">
                {nextDay.name}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Footer */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center gap-4 text-3xl">
            <span className="floating-heart">💖</span>
            <span className="floating-heart" style={{ animationDelay: '0.5s' }}>💕</span>
            <span className="floating-heart" style={{ animationDelay: '1s' }}>💗</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayPage;
