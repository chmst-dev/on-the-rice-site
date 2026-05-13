import Link from 'next/link';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-rice-100 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">{SITE_NAME}</h2>
          <p className="text-sm mb-2 opacity-80">東京都 / 埼玉県加須市</p>
          <p className="text-sm opacity-80">{SITE_TAGLINE}</p>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-sm opacity-80">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition-colors mt-4">Privacy Policy</Link>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-12 text-xs opacity-50 text-center md:text-left">
        &copy; {new Date().getFullYear()} {SITE_NAME}
      </div>
    </footer>
  );
}
