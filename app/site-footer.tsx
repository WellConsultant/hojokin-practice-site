export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <nav className="footer-nav" aria-label="フッターナビゲーション">
          <a href="/">トップ</a>
          <a href="https://fp-1.info/hojokin/#core-offer">無料コンテンツ</a>
          <a href="/#blog">ブログ</a>
          <a href="https://fp-1.info/hojokin/#seminar-archive">勉強会</a>
          <a href="https://fp-1.info/hojokin/#about">プロフィール</a>
          <a href="https://hojokin.well-c.biz/" target="_blank" rel="noreferrer">補助金フィード</a>
          <a href="/#contact">お問い合わせ</a>
        </nav>
        <div className="footer-legal">
          <a href="https://fp-1.info/hojokin/privacy/" target="_blank" rel="noreferrer">プライバシーポリシー</a>
          <a href="https://fp-1.info/hojokin/tokusho/" target="_blank" rel="noreferrer">特定商取引法に基づく表記</a>
        </div>
        <p>© 2026 Well Consultant. All rights reserved.</p>
      </div>
    </footer>
  )
}
