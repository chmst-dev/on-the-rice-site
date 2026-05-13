import { Metadata } from 'next';
import Section from '@/components/Section';
import { URL_GOOGLE_FORM } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <div className="bg-rice-50 min-h-screen">
      <Section title="Contact">
        <div className="max-w-2xl">
          <p className="text-xl font-bold mb-4">食文化・米・地域・商品開発に関するご相談を受け付けています。</p>
          <p className="mb-10 opacity-80 leading-relaxed">
            リサーチ、事業開発、共創プロジェクト、講演・取材など、お気軽にご相談ください。
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-sm mb-10 border border-rice-200">
            <h3 className="font-bold mb-4 border-b pb-2">相談できる内容</h3>
            <ul className="list-disc pl-5 space-y-2 opacity-80 mb-8">
              <li>リサーチ・調査の相談</li>
              <li>商品・ブランド開発の相談</li>
              <li>自治体・地域プロジェクトの相談</li>
              <li>共創プログラム・ワークショップの相談</li>
              <li>講演・セミナーの相談</li>
              <li>取材・メディア掲載の相談</li>
              <li>その他</li>
            </ul>

            <div className="text-center md:text-left">
              <a 
                href={URL_GOOGLE_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-crimson text-white font-bold py-4 px-8 rounded-full hover:bg-soy transition-colors"
              >
                お問い合わせフォームを開く ↗
              </a>
              <p className="text-xs opacity-60 mt-4">
                ※フォームは外部サービスであるGoogleフォームを利用しています。
              </p>
            </div>
          </div>

          <div className="text-sm opacity-70 bg-white p-6 rounded-xl border border-rice-200">
            <p className="font-bold mb-2">運営法人情報</p>
            <p>一般社団法人オンザライス</p>
            <p>共同代表理事：越智 恵梨奈 / 越智 聖人</p>
            <p className="mb-4">所在地：東京都 / 埼玉県加須市</p>
            <Link href="/privacy" className="underline hover:text-crimson">Privacy Policy</Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
