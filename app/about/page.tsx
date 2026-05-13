import { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-rice-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About On The Rice</h1>
          <p className="text-lg max-w-2xl leading-relaxed">
            オンザライスは、「ごはんがすすむ」体験を調査・設計・社会実装することで、日本の食文化を次世代へ再構築する共創型事業体です。
          </p>
        </div>
      </div>

      <Section title="Mission">
        <p className="text-2xl md:text-3xl font-bold text-ink-dark leading-relaxed">
          食の場に生まれる感動と衝動を、<br className="hidden md:block"/>社会を動かす文化に変える。
        </p>
      </Section>

      <Section bg="rice" title="Vision">
        <p className="text-lg leading-relaxed max-w-3xl">
          「ごはん」を軸に、生活者・企業・農家・飲食店・自治体がゆるやかにつながり、食体験を通じて価値が循環する社会をつくる。日本発の食文化の知見を国内外へ広げ、次世代へ繋ぎます。
        </p>
      </Section>

      <Section title="Values">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ValueCard 
            title="感動ファースト" 
            desc="論理より感動を先に置く。「おいしい」という衝動が起点であり、データはその裏付けである。" 
          />
          <ValueCard 
            title="現場視点" 
            desc="生産・流通・消費の接点を重視し、机上論で終わらせない。" 
          />
          <ValueCard 
            title="翻訳力" 
            desc="個人の感覚を、企業・自治体・市場が使える言葉に変える。" 
          />
          <ValueCard 
            title="共創" 
            desc="生活者・企業・自治体・農家・飲食店をつなぐハブとして、全員にとっての価値を最大化する。" 
          />
          <ValueCard 
            title="継続性" 
            desc="一過性の話題ではなく、続く仕組みをつくる。" 
          />
        </div>
      </Section>

      <Section bg="rice" title="Founders">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-1">越智 恵梨奈</h3>
            <p className="text-crimson font-bold text-sm mb-4">Co-Representative Director / Meaning Architect</p>
            <p className="text-sm leading-relaxed opacity-80">
              多様なステークホルダーが有機的につながり、新たな価値が生まれる「共創の仕組み」を社会に実装することをテーマに、事業・組織・場づくりに取り組む。リクルート・博報堂・デジタルガレージにて新規事業、ブランド戦略、事業成長を推進。独立後は大企業・自治体・スタートアップに対し、構想策定から黒字化・組織化・自走化まで一気通貫で伴走し、IPOを含む複数の事業成長を手がける。産官民共創の国際イベントでは立ち上げ時から毎年10万人超を動かす広報・発信を担った。MBA（経営学修士）ではイノベーション・エコシステム・プラットフォーム戦略を研究。オンザライスでは、事業戦略・ブランド・ナラティブ設計・対外発信・B2B企画を担当。
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold mb-1">越智 聖人</h3>
            <p className="text-crimson font-bold text-sm mb-4">Co-Representative Director / Field Architect</p>
            <p className="text-sm leading-relaxed opacity-80">
              農業現場、行政連携、データ・プロダクト設計を主導。リクルート、カカクコム、パーソル、GovTech領域で事業開発・プロダクト・行政DXに関わり、現在は農業現場にも入り込む。現場、制度、データ、事業をつなぎ、構想を社会実装へ落とし込む役割を担う。
            </p>
          </div>
        </div>
      </Section>

      <Section title="Organization">
        <div className="max-w-3xl overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <tbody>
              <Tr label="法人名" value="一般社団法人オンザライス" />
              <Tr label="英語表記" value="On The Rice" />
              <Tr label="設立" value="2026年" />
              <Tr label="所在地" value="東京都 / 埼玉県加須市" />
              <Tr label="共同代表理事" value="越智 恵梨奈 / 越智 聖人" />
              <Tr label="事業領域" value="食文化リサーチ、事業開発支援、地域共創、メディア・コミュニティ運営、商品・体験開発" />
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}

function ValueCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border border-rice-200 p-6 rounded-xl">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm opacity-80">{desc}</p>
    </div>
  );
}

function Tr({ label, value }: { label: string, value: string }) {
  return (
    <tr className="border-b border-rice-200">
      <th className="py-4 pr-6 font-bold w-1/3 align-top">{label}</th>
      <td className="py-4 opacity-90">{value}</td>
    </tr>
  );
}
