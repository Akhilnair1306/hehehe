import { Link } from 'react-router-dom';
import { Lock, Check } from 'lucide-react';
// import { ValentineDay, isDayUnlocked, getDaysUntilUnlock } from '@/config/valentineWeek';
import { cn } from '@/lib/utils';
import { getDaysUntilUnlock, isDayUnlocked, type ValentineDay } from '@/config/valentineWeek';

interface DayCardProps {
  day: ValentineDay;
}

const DayCard = ({ day }: DayCardProps) => {
  const isUnlocked = isDayUnlocked(day.date);
  const daysUntil = getDaysUntilUnlock(day.date);
  
  const cardContent = (
    <div 
      className={cn(
        "relative group rounded-2xl p-6 transition-all duration-300 overflow-hidden",
        isUnlocked 
          ? "bg-card hover:shadow-xl hover:scale-[1.02] cursor-pointer" 
          : "bg-muted/50 cursor-not-allowed"
      )}
    >
      {/* Background decoration */}
      <div className={cn(
        "absolute inset-0 opacity-10 transition-opacity",
        isUnlocked && "group-hover:opacity-20"
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
      </div>
      
      {/* Lock/Check indicator */}
      <div className={cn(
        "absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center",
        isUnlocked ? "bg-primary/10" : "bg-muted-foreground/10"
      )}>
        {isUnlocked ? (
          <Check className="w-4 h-4 text-primary" />
        ) : (
          <Lock className="w-4 h-4 text-muted-foreground" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Day number badge */}
        <div className={cn(
          "inline-block px-3 py-1 rounded-full text-sm font-medium mb-3",
          isUnlocked ? "bg-primary/10 text-primary" : "bg-muted-foreground/10 text-muted-foreground"
        )}>
          Day {day.day}
        </div>

        {/* Emoji */}
        <div className={cn(
          "text-5xl mb-3 transition-transform",
          isUnlocked && "group-hover:scale-110",
          !isUnlocked && "opacity-50 grayscale"
        )}>
          {day.emoji}
        </div>

        {/* Day name */}
        <h3 
          className={cn(
            "text-2xl mb-1",
            isUnlocked ? "text-primary" : "text-muted-foreground"
          )}
          style={{ fontFamily: 'var(--font-romantic)' }}
        >
          {day.name}
        </h3>

        {/* Date */}
        <p className="text-sm text-muted-foreground mb-2">
          {new Date(day.date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          })}
        </p>

        {/* Status */}
        {!isUnlocked && (
          <p className="text-sm text-muted-foreground italic">
            {daysUntil === 1 ? 'Tomorrow!' : `${daysUntil} days to go`}
          </p>
        )}
        
        {isUnlocked && (
          <p 
            className="text-sm text-primary/70 mt-2"
            style={{ fontFamily: 'var(--font-romantic)' }}
          >
            {day.theme}
          </p>
        )}
      </div>
    </div>
  );

  if (isUnlocked) {
    return (
      <Link to={`/day/${day.day}`} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default DayCard;
