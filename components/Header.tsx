import Link from 'next/link';
import { SITE_NAME_EN } from '@/lib/constants';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-rice-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wider text-ink-dark">
          {SITE_NAME_EN}
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/services" className="text-ink hover:text-crimson transition-colors hidden sm:block">Services</Link>
          <Link href="/about" className="text-ink hover:text-crimson transition-colors hidden sm:block">About</Link>
          <Link href="/journal" className="text-ink hover:text-crimson transition-colors hidden sm:block">Journal</Link>
          <Link 
            href="/contact" 
            className="bg-ink-dark text-white px-4 py-2 rounded-full hover:bg-soy transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
