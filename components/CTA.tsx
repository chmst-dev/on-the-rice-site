import Link from 'next/link';

interface CTAProps {
  title: string;
  text: string;
  buttonText: string;
  href: string;
}

export default function CTA({ title, text, buttonText, href }: CTAProps) {
  return (
    <div className="bg-rice-200 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-ink-dark mb-4">{title}</h2>
      <p className="text-ink mb-8 max-w-2xl mx-auto leading-relaxed">{text}</p>
      <Link 
        href={href} 
        className="inline-block bg-crimson text-white font-bold py-4 px-10 rounded-full hover:bg-soy transition-all shadow-md hover:shadow-lg"
      >
        {buttonText}
      </Link>
    </div>
  );
}
