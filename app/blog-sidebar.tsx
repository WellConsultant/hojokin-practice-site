import { articles, githubPhoto } from "@/lib/articles"

const recommended = [1, 10, 15, 26, 27, 30]
  .map((number) => articles.find((article) => article.number === number))
  .filter((article): article is (typeof articles)[number] => Boolean(article))

const pickImages: Record<number, string> = {
  1: "/subsidy-process.jpg",
  10: "/article-grant-v2.jpg",
  15: "/article-report-v2.jpg",
}

export default function BlogSidebar({
  contactHref = "#contact",
  showProfile = true,
  showAllArticles = false,
}: {
  contactHref?: string
  showProfile?: boolean
  showAllArticles?: boolean
}) {
  return (
    <aside className="blog-sidebar" aria-label="ブログの案内">
      {showProfile && <div className="sidebar-card sidebar-profile">
        <img className="sidebar-avatar" src={githubPhoto} alt="補助金実務家・行政書士 阿久津和宏" />
        <div><b>補助金実務家・行政書士　阿久津 和宏</b><span>認定経営革新等支援機関</span></div>
        <p>交付申請、実績報告、確定審査、入金までの実務を解説しています。</p>
        <a className="sidebar-contact" href={contactHref}>今すぐ相談する</a>
        <a className="sidebar-service" href="/services">支援内容・料金を見る</a>
      </div>}

      {!showProfile && <div className="sidebar-card sidebar-direct-contact">
        <span>申請・交付申請・実績報告</span>
        <h3>補助金実務でお困りならお問い合わせください</h3>
        <p>制度名、現在の状況、提出期限をお知らせください。</p>
        <a href={contactHref}>お問い合わせフォームへ</a>
      </div>}

      <nav className="sidebar-card sidebar-nav" aria-label="記事カテゴリー">
        <h3>記事を探す</h3>
        <a href="/#grant-application"><span>交付申請</span><b>→</b></a>
        <a href="/#performance-report"><span>実績報告</span><b>→</b></a>
        <a href="/#common-practice"><span>共通実務</span><b>→</b></a>
        <a href="/#process"><span>採択から入金までの流れ</span><b>→</b></a>
      </nav>

      <div className="sidebar-card sidebar-picks">
        <h3>まず読んでほしい記事</h3>
        {recommended.map((article) => (
          <a href={`/articles/${article.slug}`} key={article.slug}>
            {pickImages[article.number] && <img src={pickImages[article.number]} alt="補助金実務の記事イメージ" />}
            <span>{String(article.number).padStart(2, "0")}</span>
            <b>{article.title}</b>
          </a>
        ))}
      </div>

      {showAllArticles && <div className="sidebar-card sidebar-all-articles">
        <h3>実務記事一覧</h3>
        <p>全{articles.length}記事</p>
        <div>
          {articles.map((article) => (
            <a href={`/articles/${article.slug}`} key={article.slug}>
              <span>{String(article.number).padStart(2, "0")}</span>
              <b>{article.title}</b>
            </a>
          ))}
        </div>
      </div>}

      <div className="sidebar-card sidebar-optin">
        <span>無料プレゼント</span>
        <h3>補助金獲得<br />実務マニュアル</h3>
        <p>補助金の準備と申請実務をまとめた無料マニュアルです。</p>
        <a href="https://www.funnel-build.com/ht3" target="_blank" rel="noreferrer">無料で受け取る</a>
      </div>

      <div className="mobile-actions" aria-label="相談と無料資料">
        <a href="https://www.funnel-build.com/ht3" target="_blank" rel="noreferrer">無料資料</a>
        <a href={contactHref}>相談する</a>
      </div>
    </aside>
  )
}
