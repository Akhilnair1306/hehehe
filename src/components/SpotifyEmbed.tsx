interface SpotifyEmbedProps {
  trackId: string;
  startTime?: number; // in seconds
}

const SpotifyEmbed = ({ trackId, startTime = 0 }: SpotifyEmbedProps) => {
  // Note: Spotify embeds don't officially support start time, but we include it for reference
  const embedUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="text-center mb-4">
        <h3 
          className="text-2xl text-primary mb-2"
          style={{ fontFamily: 'var(--font-romantic)' }}
        >
          Our Song 🎵
        </h3>
        {/* <p className="text-muted-foreground text-sm">
          Press play and listen to this part...
        </p> */}
      </div>
      
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={embedUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      </div>
      
      {startTime > 0 && (
        <p className="text-center text-muted-foreground text-sm mt-3">
          Skip to {Math.floor(startTime / 60)}:{(startTime % 60).toString().padStart(2, '0')} for our favorite part 💕
        </p>
      )}
    </div>
  );
};

export default SpotifyEmbed;
