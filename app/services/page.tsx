import ContactEmbed from "../contact-embed"
import { githubPhoto } from "@/lib/articles"
import { siteUrl } from "@/lib/seo"
import SiteFooter from "../site-footer"

export const metadata = {
  title: "補助金申請・交付申請・実績報告サポート｜料金",
  description: "補助金実務家・行政書士 阿久津和宏の補助金申請、交付申請、実績報告サポート。各10万円から。認定経営革新等支援機関として採択後から入金まで支援します。",
  alternates: { canonical: "/services" },
}

const services = [
  {
    no: "01", title: "補助金申請実務サポート", price: "10万円〜", target: "制度選びや申請準備から相談したい方",
    scope: ["制度・公募回・対象要件の確認", "事業内容と対象経費の整理", "申請書類の作成と電子申請の支援"],
    finish: "申請者本人が内容を確認し、電子申請を完了した時点",
  },
  {
    no: "02", title: "補助金交付申請サポート", price: "10万円〜", target: "採択後の見積・交付申請で止まっている方",
    scope: ["採択通知・申請データ・期限の確認", "見積・経費区分・発注条件の整理", "交付申請書類、不備・変更手続の支援"],
    finish: "申請者本人が交付申請を提出し、次の指示を確認した時点",
  },
  {
    no: "03", title: "補助金実績報告サポート", price: "10万円〜", target: "証拠書類や実績報告のまとめ方に困っている方",
    scope: ["発注・納品・請求・支払資料の突合", "写真・成果物・事業実績の整理", "実績報告、不備対応、確定・請求の支援"],
    finish: "実績報告の提出後、確定・精算払請求へ進める状態",
  },
]

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org", "@type": "OfferCatalog", name: "補助金実務サポート",
    itemListElement: services.map((service) => ({ "@type": "Offer", name: service.title, price: "100000", priceCurrency: "JPY", url: `${siteUrl}/services` })),
  }
  return (
    <main>
      <header className="site-header article-header">
        <a href="/" className="brand"><span className="brand-mark">補</span><span className="brand-copy"><b>補助金実務家・行政書士</b><small>阿久津和宏｜認定経営革新等支援機関</small></span></a>
        <nav><a href="/">トップ</a><a href="/#blog">実務ブログ</a><a className="header-cta" href="#contact">相談する</a></nav>
      </header>

      <section className="service-hero">
        <div><p className="eyebrow">補助金申請・交付申請・実績報告</p><h1>必要な実務を、<br />必要な段階から支援します。</h1><p>採択前の申請準備から、採択後の交付申請、実績報告、確定・入金まで。現在地と期限を確認し、支援範囲を明確にして着手します。</p><a className="button button-primary" href="#contact">案件について相談する</a></div>
        <img src={githubPhoto} alt="補助金実務家・行政書士 阿久津和宏" />
      </section>

      <section className="results-strip service-results" aria-label="補助金申請支援の実績"><div><span>これまでに補助金申請を支援した事業者</span><strong>700<small>者以上</small></strong></div><div><span>当社が支援した補助金申請の採択率</span><strong>8<small>割以上</small></strong></div><div><span>支援先が採択された補助金の累計金額</span><strong><small>約</small>70<small>億円</small></strong></div><p>※2026年8月時点の本人確認済み実績です。制度・公募回・申請条件によって結果は異なり、採択・交付決定・入金を保証するものではありません。</p></section>

      <section className="service-details section-pad">
        <div className="center-heading"><h2>3つの補助金実務サポート</h2><p>申請前、採択後、事業完了後のどの段階からでも、必要な実務を選んで相談できます。</p></div>
        <div className="service-detail-grid">{services.map((service) => <article key={service.no}><span>{service.no}</span><p className="service-target">{service.target}</p><h2>{service.title}</h2><strong>{service.price}</strong><h3>支援内容</h3><ul>{service.scope.map((item) => <li key={item}>{item}</li>)}</ul><div className="completion"><b>支援完了の目安</b><p>{service.finish}</p></div><a href="#contact">この支援を相談する</a></article>)}</div>
        <div className="price-notes"><b>お見積りについて</b><p>制度、公募回、経費項目数、期限、資料の不足、過去の差し戻しによって作業量が変わります。正式な料金、消費税、成功報酬・追加対応・外部費用の有無は、契約前に見積書で明示します。</p></div>
      </section>

      <section className="roles section-pad"><div className="center-heading"><h2>支援するときの役割分担</h2><p>阿久津が手続きと必要資料を整理し、依頼者は事業内容の共有と最終確認・提出を行います。誰が何をするかを最初に明確にします。</p></div><div className="role-grid"><article><span>阿久津が行うこと</span><ul><li>制度・期限・提出物の整理</li><li>適法な範囲での書類作成・助言</li><li>不備の確認と次の対応の明確化</li></ul></article><article><span>依頼者にお願いすること</span><ul><li>事業内容と資料の正確な共有</li><li>作成内容と支出内容の最終確認</li><li>本人アカウントでの電子申請・提出</li></ul></article></div></section>

      <section className="support-flow section-pad"><div className="center-heading"><h2>相談から支援開始までの流れ</h2><p>最初に現在地と期限を確認し、必要資料、支援範囲、料金、役割分担に合意してから実務に着手します。</p></div><div className="flow-grid">{[["01","お問い合わせ","制度名、状況、期限を送信"],["02","資料確認","通知・申請データ・事務局連絡を確認"],["03","見積・契約","支援範囲、役割、完了条件を明示"],["04","実務着手","書類作成、証拠整理、不備対応"],["05","提出確認","依頼者が確認し本人として提出"],["06","次工程","受付、確定、請求までの動きを確認"]].map(([no,title,text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="contact" className="contact-band"><p>お問い合わせ</p><h2>補助金実務で止まっているなら、<br />現在の状況からお聞かせください。</h2><p className="contact-lead">資料が全部揃うまで待つ必要はありません。期限が迫っている場合は、その旨もご記入ください。</p><div className="contact-form-shell"><ContactEmbed /></div></section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </main>
  )
}
