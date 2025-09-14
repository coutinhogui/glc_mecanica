import { Logo } from '@/components/logo';

export default function Header() {
  return (
    <header className="py-6 px-4 md:px-8 bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-center">
        <Logo className="h-16" />
      </div>
    </header>
  );
}
