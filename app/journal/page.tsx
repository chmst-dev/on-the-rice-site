import { Metadata } from 'next';
import Section from '@/components/Section';
import { URL_NOTE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Journal',
};

export default function JournalPage() {
  return (
    <>
      <div className="bg-rice-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research / Journal</h1>
          <p className="text-lg max-w-2xl leading-relaxed text-crimson font-bold mb-4">
            食卓の感動を、観察する。記録する。考える。
          </p>
          <p className="text-md max-w-2xl leading-relaxed opacity-80">
            オンザライスでは、米・食文化・地域・生活者インサイトに関する考察を発信していきます。初期はnoteを中心に、調査レポート、食卓インサイト、地域文化の観察記録などを公開していく予定です。
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ArticlePlaceholder title="なぜ「ごはんがすすむ」は文化資産なのか" />
          <ArticlePlaceholder title="米消費減少の本当の問題はどこにあるか" />
          <ArticlePlaceholder title="食卓インサイトとは何か" />
        </div>
        <div className="text-center">
          <a 
            href={URL_NOTE} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-ink-dark font-bold py-4 px-10 rounded-full border-2 border-ink-dark hover:bg-ink-dark hover:text-white transition-all"
          >
            noteで記事を読む ↗
          </a>
        </div>
      </Section>
    </>
  );
}

function ArticlePlaceholder({ title }: { title: string }) {
  return (
    <div className="bg-rice-50 border border-rice-200 rounded-2xl overflow-hidden group cursor-default">
      <div className="h-48 bg-rice-200 flex items-center justify-center">
        <span className="text-xs font-bold tracking-widest text-ink-light uppercase bg-white/50 px-3 py-1 rounded-full">Coming soon</span>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg leading-snug">{title}</h3>
      </div>
    </div>
  );
}
