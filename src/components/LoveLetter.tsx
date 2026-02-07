interface LoveLetterProps {
  content: string;
  signature?: string;
}

const LoveLetter = ({ content, signature = "With all my love ❤️" }: LoveLetterProps) => {
  return (
    <div className="letter-paper max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <span className="text-4xl">💌</span>
      </div>
      
      <div 
        className="text-foreground/90 text-lg md:text-xl leading-relaxed whitespace-pre-line"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {content}
      </div>
      
      <div 
        className="mt-8 text-right text-2xl md:text-3xl text-primary"
        style={{ fontFamily: 'var(--font-romantic)' }}
      >
        {signature}
      </div>
    </div>
  );
};

export default LoveLetter;
