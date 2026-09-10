type RotaryLogoProps = {
  className?: string;
};

export function RotaryLogo({ className = "" }: RotaryLogoProps) {
  return (
    <svg viewBox="0 0 120 120" aria-label="Rotary emblem" className={className} role="img">
      <circle cx="60" cy="60" r="24" fill="#0e4b9c" />
      <circle cx="60" cy="60" r="16" fill="#d7b26a" />
      <g fill="#0e4b9c">
        <rect x="56" y="4" width="8" height="18" rx="3" />
        <rect x="56" y="98" width="8" height="18" rx="3" />
        <rect x="4" y="56" width="18" height="8" rx="3" />
        <rect x="98" y="56" width="18" height="8" rx="3" />
        <rect x="19" y="19" width="10" height="8" rx="3" transform="rotate(-45 19 19)" />
        <rect x="91" y="19" width="10" height="8" rx="3" transform="rotate(45 91 19)" />
        <rect x="19" y="93" width="10" height="8" rx="3" transform="rotate(45 19 93)" />
        <rect x="91" y="93" width="10" height="8" rx="3" transform="rotate(-45 91 93)" />
      </g>
      <path d="M60 30c-3 0-5 3-5 6v10c0 3 2 5 5 5s5-2 5-5V36c0-3-2-6-5-6Zm0 39c-3 0-5 3-5 6v10c0 3 2 5 5 5s5-2 5-5V75c0-3-2-6-5-6Zm-39-1c0-3 3-5 6-5h10c3 0 5 2 5 5s-2 5-5 5H27c-3 0-6-2-6-5Zm39 0c0-3 3-5 6-5h10c3 0 5 2 5 5s-2 5-5 5H66c-3 0-6-2-6-5Zm15-23c-2-2-2-5 0-7l7-7c2-2 5-2 7 0s2 5 0 7l-7 7c-2 2-5 2-7 0Zm-2 0 7 7 7-7c2-2 5-2 7 0s2 5 0 7l-7 7c-2 2-5 2-7 0l-7-7c-2-2-2-5 0-7Zm-5 31c2-2 5-2 7 0l7 7c2 2 2 5 0 7s-5 2-7 0l-7-7c-2-2-2-5 0-7Zm33-2c2-2 5-2 7 0l7 7c2 2 2 5 0 7s-5 2-7 0l-7-7c-2-2-2-5 0-7Zm-35-18c0-5 4-9 9-9h6c5 0 9 4 9 9v6c0 5-4 9-9 9h-6c-5 0-9-4-9-9v-6Z" fill="#d7b26a" />
    </svg>
  );
}
