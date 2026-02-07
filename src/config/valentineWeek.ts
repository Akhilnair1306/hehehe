export interface ValentineDay {
  day: number;
  date: string; // Format: "2025-02-07"
  name: string;
  emoji: string;
  theme: string;
  message: string;
  spotifyTrackId: string;
  spotifyStartTime?: number;
  gifUrl: string;
  color: string; // Tailwind color class
}

export const VALENTINE_WEEK: ValentineDay[] = [
  {
    day: 1,
    date: "2026-02-07",
    name: "Rose Day",
    emoji: "🌹",
    theme: "A rose for my beautiful love",
    message: `Happy Rose Day Baby, Sorry for late wish, I hope you like this small effort. All the flowers roses in this whole world but I have never seen anything beautiful like you.🌹`,
    spotifyTrackId: "66dO6jaZOKYdV6sXAPkBmI", // Replace with your song
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJxNzBtdWY1ZGp0Y3E0bXU4dGZxbGJ0Z3V5N3R0eGlhbWJyamRjaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif",
    color: "rose",
  },
  {
    day: 2,
    date: "2026-02-08",
    name: "Propose Day",
    emoji: "💍",
    theme: "You already said yes!",
    message: `Remember when you clicked that 'Yes' button? That was the moment my heart skipped a beat!

Every day I want to propose the same thing - let's keep choosing each other, over and over again.

You're not just my valentine, you're my forever person. 💕`,
    spotifyTrackId: "3t3cbbcI1ktC6SjyO4NyR9", // Replace with your song
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnJhY2JhcnZkbGV0Nzd6dWRlMTRsbXE2MmR0N290ZnhkNmVneTh3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlGEX1ZORa0aIvu/giphy.gif",
    color: "pink",
  },
  {
    day: 3,
    date: "2026-02-09",
    name: "Chocolate Day",
    emoji: "🍫",
    theme: "Sweet like you",
    message: `Life with you is sweeter than the finest chocolate.

You know what's better than chocolate? Sharing chocolate with you while we binge-watch our favorite shows!

You're my favorite flavor of happiness. 🍫💝`,
    spotifyTrackId: "6UelLqGlWMcVH1E5c4H7lY", // Replace with your song
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWF0OWV1cGcweGJtY2N1b2p2ZHZiZ2YyY3B4YnVvb2xsYmd1cmxjbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiTnMhJTwNHChdTZS/giphy.gif",
    color: "amber",
  },
  {
    day: 4,
    date: "2026-02-10",
    name: "Teddy Day",
    emoji: "🧸",
    theme: "Hugs and cuddles",
    message: `If I could be a teddy bear, I'd want to be YOUR teddy bear.

There's nothing better than cuddling up with you. You're my favorite person to hug.

Consider this virtual teddy as a promise - I'll always be here to hold you. 🧸💕`,
    spotifyTrackId: "0VjIjW4GlUZAMYd2vXMi3b", // Replace with your song
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXN5dHh5MzQ4Y29rMXBtdGMwa3NkZHdxbGMzc203bW9uaGU5Zm4xMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oriO0OEd9QIDdllqo/giphy.gif",
    color: "orange",
  },
  {
    day: 5,
    date: "2026-02-11",
    name: "Promise Day",
    emoji: "🤞",
    theme: "My promises to you",
    message: `I promise to always be there for you, in good times and bad.

I promise to make you laugh when you're sad, hold your hand when you're scared, and love you unconditionally.

These aren't just words - they're the foundation of our forever. 💫`,
    spotifyTrackId: "7qiZfU4dY1lWllzX7mPBI3", // Replace with your song
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjFsaDQ1OTM2Y2YwNzJ2OGw4dHg0ZHNiMHAyZ3pwMGY4Y294OXozYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/M90mJvfWfd5mbUuULX/giphy.gif",
    color: "purple",
  },
  {
    day: 6,
    date: "2026-02-12",
    name: "Hug Day",
    emoji: "🤗",
    theme: "Wrapped in love",
    message: `A hug from you is my favorite place to be.

In your arms, I feel like I'm home. Every worry fades away, and everything feels right.

Here's a virtual hug until I can give you a real one! 🤗💕`,
    spotifyTrackId: "1zi7xx7UVEFkmKfv06H8x0", // Replace with your song
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWZ5dHl3NXc1bHUxMGU3YnJmMnVkZWF3cHNwdXJuM2Q1dGFuaGpmdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lXiRoPt9Rkzt7yLYY/giphy.gif",
    color: "teal",
  },
  {
    day: 7,
    date: "2026-02-13",
    name: "Kiss Day",
    emoji: "💋",
    theme: "Sealed with a kiss",
    message: `Every kiss from you feels like the first time.

Your kisses are my favorite kind of magic - they make everything better.

Sending you a thousand virtual kisses until I can give you real ones! 💋✨`,
    spotifyTrackId: "0u2P5u6lvoDfwTYjAADbn4", // Replace with your song
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2JtdGFuNDVpMWRncW9kMmlsNGthdDEyY3drdG40dXY1ZW02bjR2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKoWXm3okO1kgHC/giphy.gif",
    color: "red",
  },
  {
    day: 8,
    date: "2026-02-14",
    name: "Valentine's Day",
    emoji: "💘",
    theme: "The day of love",
    message: "", // This will show the love letter instead
    spotifyTrackId: "4iV5W9uYEdYUVa79Axb7Rh", // Replace with your song
    spotifyStartTime: 60,
    gifUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWRmbWNkYzA4OWQ0bTZqMnl6aWMxZHNxdmRqcHZ5d21wdXU4dnAxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif",
    color: "rose",
  },
];

export const LOVE_LETTER = `My Dearest Love,

From the moment you walked into my life, everything changed. Your smile brightens my darkest days, and your laughter is my favorite sound in the world.

Every moment with you feels like a beautiful dream I never want to wake up from. You make me want to be a better person, and I'm so grateful for every second we share together.

This Valentine's Day, I want you to know just how much you mean to me. You are my best friend, my confidant, and the love of my life.

I can't wait to celebrate with you! 🌹`;

export function isDayUnlocked(date: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const dayDate = new Date(date);
  dayDate.setHours(0, 0, 0, 0);
  
  return today >= dayDate;
}

export function getDaysUntilUnlock(date: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const dayDate = new Date(date);
  dayDate.setHours(0, 0, 0, 0);
  
  const diffTime = dayDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return Math.max(0, diffDays);
}
