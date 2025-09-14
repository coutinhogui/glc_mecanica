export function Logo({ className }: { className?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className={`inline-flex flex-col items-center justify-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 200 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-auto text-primary"
      >
        <path d="M5 50 C 10 40, 25 35, 40 40 L 150 40 C 160 30, 175 30, 190 45 L 195 50" />
        <path d="M40 40 L 60 20 L 140 20 L 150 40" />
        <path d="M60 20 L 70 40" />
        <path d="M130 20 L 140 40" />
        
        <circle cx="65" cy="50" r="10" />
        <circle cx="135" cy="50" r="10" />
        
        <path d="M10 60 L 0 60" />
        <path d="M190 60 L 200 60" />
        <path d="M15 55 L 0 55" />
        <path d="M185 55 L 200 55" />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-foreground font-headline">GLC MECÂNICA</span>
    </div>
  );
}
