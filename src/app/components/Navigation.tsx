import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link 
        href="/" 
        className="text-secondary-text hover:text-primary transition-colors duration-300"
      >
        Home
      </Link>
      <Link 
        href="/about" 
        className="text-secondary-text hover:text-primary transition-colors duration-300"
      >
        About
      </Link>
    </nav>
  );
}
