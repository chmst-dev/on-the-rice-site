import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  bg?: 'white' | 'rice';
}

export default function Section({ title, subtitle, children, className = "", bg = 'white' }: SectionProps) {
  const bgClass = bg === 'rice' ? 'bg-rice-100' : 'bg-white';
  
  return (
    <section className={`py-20 md:py-32 ${bgClass} ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {subtitle && <span className="block text-crimson font-bold text-sm tracking-widest mb-3">{subtitle}</span>}
            {title && <h2 className="text-3xl md:text-4xl font-bold text-ink-dark leading-tight">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
