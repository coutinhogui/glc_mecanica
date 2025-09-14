export function Logo({ className }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col items-center justify-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto text-primary"
      >
        <path d="M21.931 8.643A4.004 4.004 0 0018.5 7h-13a4.004 4.004 0 00-3.431 1.643L.652 11.47a1 1 0 00-.152.493V16a1 1 0 001 1h1a1 1 0 001-1v-1h16v1a1 1 0 001 1h1a1 1 0 001-1v-4.037a1 1 0 00-.152-.493l-1.417-2.827zM6.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-foreground font-headline">GLC MECÂNICA</span>
    </div>
  );
}
