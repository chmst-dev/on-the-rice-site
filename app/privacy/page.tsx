import { Metadata } from 'next';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <Section title="Privacy Policy" className="max-w-4xl">
      <div className="prose prose-stone max-w-none opacity-90 text-sm leading-relaxed space-y-8">
        <p>
          一般社団法人オンザライス（以下「当法人」）は、本Webサイトおよび事業運営において取得する個人情報の取り扱いについて、以下の通りプライバシーポリシーを定めます。
        </p>

        <div>
          <h3 className="font-bold text-lg mb-2">1. 個人情報の取得</h3>
          <p>当法人は、お問い合わせや事業に関するご相談等に際して、氏名、メールアドレス、所属組織等の個人情報を適正に取得します。なお、お問い合わせ受付には外部サービス（Googleフォーム）を利用しています。</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">2. 利用目的</h3>
          <p>取得した個人情報は、以下の目的で利用いたします。</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>お問い合わせに対する回答・連絡のため</li>
            <li>当法人の事業・サービスに関するご案内のため</li>
            <li>事業開発や共創プロジェクトの検討・推進のため</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">3. 第三者提供</h3>
          <p>当法人は、法令に定める場合を除き、事前の同意を得ることなく個人情報を第三者に提供いたしません。</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">4. 外部サービスの利用</h3>
          <p>当法人のお問い合わせフォームはGoogle LLCが提供する「Googleフォーム」を利用しています。入力されたデータはGoogle社のプライバシーポリシーに基づいて管理されます。</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">5. 安全管理</h3>
          <p>当法人は、個人情報の漏洩、紛失、改ざん等を防止するため、必要かつ適切な安全管理措置を講じます。</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">6. お問い合わせ</h3>
          <p>個人情報の取り扱いに関するお問い合わせは、本サイトのContact（お問い合わせフォーム）よりご連絡ください。</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">7. 改定</h3>
          <p>当法人は、必要に応じて本プライバシーポリシーを改定することがあります。改定した場合は、本ページにてお知らせいたします。</p>
        </div>

        <div className="pt-8 border-t border-rice-200 mt-12">
          <p>制定日：2026年</p>
          <p>一般社団法人オンザライス</p>
        </div>
      </div>
    </Section>
  );
}
