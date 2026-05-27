import { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-rice-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
          <p className="text-lg max-w-2xl leading-relaxed">
            オンザライスは、「ごはんがすすむ」体験を起点に、リサーチ、事業設計、共創実装までを一気通貫で支援します。
          </p>
        </div>
      </div>

      <Section title="リサーチ＆インサイト">
        <p className="text-xl font-bold text-crimson mb-8">食卓のリアルを、意思決定に使えるインサイトへ。</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold border-b pb-2 mb-4">提供内容</h4>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>生活者インタビュー</li>
              <li>定性・定量調査</li>
              <li>食卓・購買行動分析</li>
              <li>米・日本食文化調査</li>
              <li>地域食文化調査</li>
              <li>海外市場における日本食・米文化調査</li>
              <li>インサイトレポート作成</li>
              <li>エグゼクティブ向けインサイトセッション</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold border-b pb-2 mb-4">想定顧客</h4>
            <ul className="list-disc pl-5 space-y-2 opacity-80 mb-8">
              <li>食品メーカー / 調味料メーカー / 飲料メーカー</li>
              {/* ▼ 調理家電メーカーを追加 */}
              <li>調理家電メーカー</li>
              <li>流通・小売</li>
              <li>自治体 / JA・地域事業者</li>
              <li>研究機関</li>
            </ul>
            <div className="bg-rice-100 p-4 rounded-lg inline-block">
              <span className="text-sm font-bold opacity-70 block mb-1">価格目安</span>
              {/* ▼ 50万から80万へ変更 */}
              <span className="font-bold text-lg">個別見積 / 80万円〜</span>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="rice" title="事業開発・共創支援">
        <p className="text-xl font-bold text-crimson mb-8">調査で終わらせず、商品・事業・地域施策へつなげる。</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold border-b pb-2 mb-4">提供内容</h4>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>新規事業企画</li>
              <li>商品・ブランド開発</li>
              <li>地域共創プロジェクト設計</li>
              <li>官民連携支援</li>
              <li>PR・発信設計</li>
              <li>実証実験の設計・伴走</li>
              <li>事業成長支援</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold border-b pb-2 mb-4">想定顧客</h4>
            <ul className="list-disc pl-5 space-y-2 opacity-80 mb-8">
              <li>自治体 / 地域商社</li>
              <li>食品・飲料メーカー</li>
              <li>外食・中食</li>
              <li>観光・地域振興領域</li>
              <li>農業団体</li>
            </ul>
            <div className="bg-white p-4 rounded-lg inline-block">
              <span className="text-sm font-bold opacity-70 block mb-1">価格目安</span>
              <span className="font-bold text-lg">個別見積 / 200万円〜</span>
            </div>
          </div>
        </div>
      </Section>

     {/* ▼ 見出しを「対話プログラム」へ変更 */}
      <Section title="共創セッション・対話プログラム">
        <p className="text-xl font-bold text-crimson mb-8">まずは半日で、「ごはんがすすむ価値」を事業テーマに変える。</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold border-b pb-2 mb-4">提供内容</h4>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>食文化インサイトセッション</li>
              {/* ▼ ワークショップという言葉を対話やプログラムに寄せる */}
              <li>商品コンセプト共創プログラム</li>
              <li>地域資源の再編集セッション</li>
              <li>自治体・企業向け共創プログラム</li>
              <li>経営・事業開発向け壁打ち</li>
            </ul>
          </div>
          <div>
            <div className="bg-rice-100 p-4 rounded-lg inline-block mt-8">
              <span className="text-sm font-bold opacity-70 block mb-1">価格目安</span>
              {/* ▼ 30万から50万へ変更 */}
              <span className="font-bold text-lg">個別見積 / 50万円〜</span>
            </div>
          </div>
        </div>
      </Section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link href="/contact" className="inline-block bg-crimson text-white font-bold py-4 px-10 rounded-full hover:bg-soy transition-all shadow-md">
            まずは相談する →
          </Link>
        </div>
      </section>
    </>
  );
}
