import Link from 'next/link';
import Section from '@/components/Section';
import CTA from '@/components/CTA';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-rice-50 py-24 md:py-40">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-rice-200 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-ink-dark leading-[1.2] mb-8">
              ごはんがすすむ感動を、<br />事業と文化に変える。
            </h1>
            <p className="text-lg md:text-xl text-ink leading-relaxed mb-12">
              オンザライスは、「ごはんがすすむ」体験を調査・設計・社会実装することで、食品・地域・食文化の新しい価値をつくる共創型事業体です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-crimson text-white text-center font-bold py-4 px-8 rounded-full hover:bg-soy transition-colors">
                相談する →
              </Link>
              <Link href="/services" className="bg-white text-ink-dark text-center font-bold py-4 px-8 rounded-full border border-rice-200 hover:bg-rice-100 transition-colors">
                サービスを見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <Section bg="white" subtitle="PROBLEM" title="米を食べる理由は、自然には増えない。">
        <div className="max-w-3xl mb-16">
          <p className="text-lg leading-relaxed mb-10">
            日本の米をめぐる課題は、供給側だけでは解けません。生産・流通・価格・技術の改善と同時に、生活者が日々の食卓で「ごはんを食べたい」と感じる理由をつくる必要があります。
          </p>
          <div className="bg-rice-100 p-8 rounded-2xl border-l-4 border-crimson">
            <h3 className="text-xl font-bold mb-4">需要側の文化を設計する。</h3>
            <p className="leading-relaxed">
              これまで米や農業の課題は、主に生産・流通・価格・技術の問題として語られてきました。しかし、生活者が日常の中で「ごはんを食べたい」と感じる体験や文脈は、十分に設計されてきませんでした。
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Concept */}
      <Section bg="rice" subtitle="CONCEPT" title="食の感動を観察し、翻訳し、社会に実装する。">
        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed">
            オンザライスは、生活者の感情、食卓の行動、地域の文脈を観察し、企業・自治体・生産者が活用できる知見に翻訳します。そして、商品、事業、地域施策、共創プロジェクトとして社会に実装します。
          </p>
        </div>
      </Section>

      {/* 4. What We Do */}
      <Section bg="white" subtitle="WHAT WE DO" title="アプローチ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            label="Research"
            title="食卓・生活者・地域文化を調査する"
            description="生活者インサイト、食卓行動、米・日本食文化、地域食文化を調査し、意思決定に使える知見へ整理します。"
          />
          <ServiceCard 
            label="Design"
            title="商品・事業・体験価値を設計する"
            description="調査で得たインサイトを、商品コンセプト、ブランド、売場、メニュー、地域施策、共創プロジェクトへ接続します。"
          />
          <ServiceCard 
            label="Implement"
            title="企業・自治体・地域と社会実装する"
            description="食品企業、自治体、地域事業者、生産者と連携し、企画を実証・発信・事業化まで前進させます。"
          />
        </div>
      </Section>

      {/* 5. Services Preview */}
      <Section bg="rice" subtitle="SERVICES" title="提供サービス">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">リサーチ＆インサイト</h3>
            <p className="text-sm opacity-80">食卓のリアルを、意思決定に使えるインサイトへ。</p>
          </div>
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">事業開発・共創支援</h3>
            <p className="text-sm opacity-80">調査で終わらせず、商品・事業・地域施策へ。</p>
          </div>
          <div className="bg-white p-8 rounded-2xl">
            <h3 className="font-bold text-lg mb-2">共創セッション / ワークショップ</h3>
            <p className="text-sm opacity-80">半日から、食文化を事業テーマに変える。</p>
          </div>
        </div>
        <div className="text-center">
          <Link href="/services" className="inline-block border-2 border-ink-dark text-ink-dark font-bold py-3 px-8 rounded-full hover:bg-ink-dark hover:text-white transition-colors">
            サービス詳細を見る →
          </Link>
        </div>
      </Section>

      {/* 6. For Whom */}
      <Section bg="white" subtitle="FOR WHOM" title="このような方々と共創します">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="自治体・地域の方へ"
            description="地域食文化を、観光・関係人口・産業振興へ。"
          />
          <ServiceCard 
            title="食品・流通・外食の方へ"
            description="商品が選ばれる理由を、食卓体験から設計する。"
          />
          <ServiceCard 
            title="生産者・地域事業者の方へ"
            description="つくる人と食べる人のあいだに、新しい接点をつくる。"
          />
        </div>
      </Section>

      {/* 7. Why Us */}
      <Section bg="rice" subtitle="WHY US" title="感情設計と、現場実装をひとつの法人に。">
        <div className="max-w-3xl mb-10">
          <p className="text-lg leading-relaxed">
            オンザライスは、ブランド・PR・事業成長・共創に強いMeaning Architectと、農業現場・行政・データ・プロダクトに強いField Architectの共同代表体制で運営されています。
          </p>
        </div>
        <Link href="/about" className="font-bold text-crimson hover:text-soy transition-colors flex items-center gap-2">
          私たちについて <span className="text-xl">→</span>
        </Link>
      </Section>

      {/* 8. Journal Preview */}
      <Section bg="white" subtitle="INSIGHTS" title="Research / Journal">
        <div className="max-w-3xl mb-10">
          <p className="leading-relaxed">
            食卓の感動を、観察する。記録する。考える。オンザライスでは、米・食文化・地域・生活者インサイトに関する考察を発信していきます。
          </p>
        </div>
        <Link href="/journal" className="font-bold text-crimson hover:text-soy transition-colors flex items-center gap-2">
          Journalを見る <span className="text-xl">→</span>
        </Link>
      </Section>

      {/* 9. Final CTA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <CTA 
            title="食文化・米・地域・商品開発に関するご相談はこちら。"
            text="リサーチ、事業開発、共創プロジェクト、講演・取材など、お気軽にご相談ください。"
            buttonText="お問い合わせへ →"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}
