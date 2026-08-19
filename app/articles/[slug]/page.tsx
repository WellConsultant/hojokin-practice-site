import { notFound } from "next/navigation"
import ContactEmbed from "../../contact-embed"
import BlogSidebar from "../../blog-sidebar"
import SiteFooter from "../../site-footer"
import { articles, getArticle, githubPhoto } from "@/lib/articles"
import { siteName, siteUrl } from "@/lib/seo"

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url: `/articles/${article.slug}`,
      siteName,
      title: article.title,
      description: article.summary,
      images: [{ url: "/og.png", width: 1731, height: 909, alt: article.title }],
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()
  const next = articles[article.number % articles.length]
  const articleUrl = `${siteUrl}/articles/${article.slug}`
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: article.title,
        description: article.summary,
        mainEntityOfPage: articleUrl,
        url: articleUrl,
        image: `${siteUrl}/og.png`,
        datePublished: "2026-08-11",
        dateModified: "2026-08-11",
        inLanguage: "ja",
        articleSection: article.category,
        author: { "@type": "Person", name: "阿久津和宏", url: siteUrl },
        publisher: { "@type": "Organization", name: "Well Consultant合同会社", logo: { "@type": "ImageObject", url: `${siteUrl}/akutsu-github.png` } },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "補助金獲得の極意", item: siteUrl },
          { "@type": "ListItem", position: 2, name: article.category, item: `${siteUrl}/#articles` },
          { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  }

  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c") }} />
      <header className="site-header article-header">
        <a href="/" className="brand"><span className="brand-mark">補</span><span className="brand-copy"><b>補助金実務家・行政書士</b><small>阿久津和宏｜認定経営革新等支援機関</small></span></a>
        <nav><a href="/#grant-application">交付申請</a><a href="/#performance-report">実績報告</a><a href="/#articles">実務ブログ</a><a className="header-cta" href="#contact">相談する</a></nav>
      </header>

      <article>
        <header className="article-hero">
          <div className="article-meta"><span>記事 {String(article.number).padStart(2, "0")}</span><i /><span>{article.category}</span></div>
          <h1>{article.title}</h1>
          <p>{article.summary}</p>
          <div className="article-author"><img src={githubPhoto} alt="阿久津和宏" /><div><b>阿久津 和宏</b><span>行政書士・認定経営革新等支援機関</span></div></div>
        </header>

        <div className="article-layout">
          <div className="article-content">
            <nav className="article-toc" aria-label="この記事の目次">
              <b>この記事の目次</b>
              <a href="#point">実務の要点</a>
              <a href="#risk">よくある失敗</a>
              <a href="#practice">実行手順</a>
              <a href="#evidence">証拠の残し方</a>
              <a href="#expert">専門家の視点</a>
              <a href="#consultation">相談前の準備</a>
            </nav>
            <p className="article-intro">補助金は、申請書が採択された時点で終わる仕事ではありません。交付申請で経費と手続を確定し、決められた期間内に事業を実施し、実績報告で取引と成果を証明して、ようやく補助金額が確定します。各制度・公募回で要件は異なりますが、実務の中心は「第三者が事実を追える状態を作ること」です。</p>

            <section id="point"><span className="section-number">01</span><h2>実務の要点</h2><p>{article.focus}</p><p>重要なのは、書類を後から整える発想をやめ、取引が始まる前に必要な証拠を決めることです。交付規程、補助事業の手引き、事務局FAQを確認し、曖昧な点は発注や支払の前に問い合わせます。申請者、支援者、取引先の間で認識が違う場合は、事務局の回答を共通ルールにします。</p></section>

            <section id="risk"><span className="section-number">02</span><h2>よくある失敗</h2><p>{article.risk}</p><p>補助金実務で厄介なのは、事後に修正できない事実が多いことです。発注日、契約日、納品日、請求日、支払日は、書き換えるものではありません。写真も、設置前や施工中にしか撮れないものがあります。『後でまとめればよい』という判断が、差し戻し、減額、対象外の原因になります。</p><div className="callout"><b>STOP BEFORE ACTION</b><p>発注・契約・変更・例外的な支払の前に、最新ルールと必要証憑を確認してください。</p></div></section>

            <section id="practice"><span className="section-number">03</span><h2>担当者が行う3つの手順</h2><ol>{article.practice.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, "0")}</b><span>{item}</span></li>)}</ol><p>手順には必ず主語と完了条件を置きます。たとえば「経理担当者が、支払予定日の5営業日前までに、申請者名義口座からの振込予約を行い、受付票を案件フォルダへ保存したら完了」と書きます。『確認する』『対応する』だけでは、誰が終わらせる仕事か分かりません。</p></section>

            <section id="evidence"><span className="section-number">04</span><h2>証拠の残し方</h2><p>{article.evidence}</p><p>案件フォルダは、採択通知、交付資料、見積、契約・発注、納品・検収、請求・支払、写真・成果物、事務局照会、提出控えの順に分けます。各ファイルには経費番号、日付、取引先、書類名を付けます。提出版を確定したら旧版と明確に分け、第三者が数分で該当資料を見つけられる索引を作ります。</p></section>

            <section id="expert"><span className="section-number">05</span><h2>実務家の視点</h2><p>{article.expert}</p><p>採択はゴールではありません。交付申請で「事業を始めてよい」という交付決定を受け、発注・契約・納品・支払をルールどおりに行い、実績報告と確定審査を終えて入金されて、初めて補助金になります。だから申請時点から、後で何を証明するのかを考えておく必要があります。</p><p>差し戻しは、落とすための嫌がらせと決めつけず、確定に必要な確認事項として一問一答で処理します。指示の意味や根拠が分からなければ推測で書類を増やさず、事務局へ「なぜ必要か」を確認します。回答と証拠を対応させ、期限内に早く返すことが入金への実務です。</p></section>

            <section id="consultation"><span className="section-number">06</span><h2>相談前に準備しておきたい資料</h2><p>専門家へ相談するときは、きれいに整理してから持ち込む必要はありません。制度名、公募回、申請者名、採択通知、交付申請の案内、現在の期限、事務局から届いた連絡を、分かる範囲で共有してください。見積書や契約書をすでに受け取っている場合は、加工せず原本のまま用意します。</p><p>資料が欠けているときは、「ないこと」を隠さず伝えることが重要です。いつ、誰が、どの取引先へ依頼し、何がまだ届いていないかが分かれば、再取得、事務局確認、代替資料の検討を早く始められます。メールやチャットの履歴にも取引の順番を示す情報が残っているため、削除せず保管してください。</p><p>相談の目的も一つに絞る必要はありません。「この経費は対象か」「発注してよいか」「差し戻しへどう答えるか」「期限までに実績報告できるか」など、迷っていることをそのまま箇条書きにします。阿久津は資料、期限、未確定事項を整理し、申請者、取引先、経理、支援者が次に行う仕事と完了条件を明確にします。</p></section>

            <div className="source-box"><b>この記事の基礎資料</b><p>補助金の制度・公募要領と、申請から入金までの実務で確認する内容をもとに編集しています。制度・公募回・事務局運用により必要書類や期限は異なります。</p></div>
          </div>
          <BlogSidebar />
        </div>
      </article>

      <a className="next-article" href={`/articles/${next.slug}`}><span>次の記事　{String(next.number).padStart(2, "0")}</span><b>{next.title}</b><i>→</i></a>
      <section id="contact" className="article-cta"><h2>補助金実務でお困りなら<br />お問い合わせください</h2><div className="contact-form-shell"><ContactEmbed /></div></section>
      <SiteFooter />
    </main>
  )
}
