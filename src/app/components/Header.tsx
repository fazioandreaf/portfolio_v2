import Link from 'next/link';
import Navigation from './Navigation';
import HeaderControls from './HeaderControls';

export default function Header() {
  return (
    <header className="fixed top-0 w-screen z-[100] bg-background md:bg-background/98 backdrop-blur-md border-b border-divider shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <Link href="/" className="text-lg sm:text-xl font-bold text-primary hover:text-primary-dark transition-colors duration-300">
              Andrea Fazio
            </Link>
          </div>

          {/* Desktop Navigation - Server Rendered */}
          <Navigation />

          {/* Desktop Controls - Client Rendered */}
          <HeaderControls />
        </div>
      </div>
    </header>
  );
}
