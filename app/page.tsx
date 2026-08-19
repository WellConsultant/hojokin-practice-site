import ContactEmbed from "./contact-embed"
import BlogSidebar from "./blog-sidebar"
import SiteFooter from "./site-footer"
import { articles, githubPhoto } from "@/lib/articles"
import { siteDescription, siteName } from "@/lib/seo"
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Database,
  FileCheck2,
  FileQuestion,
  Files,
  Landmark,
  MessageSquareWarning,
  ReceiptText,
  Scale,
  SearchCheck,
  ShieldCheck,
} from "lucide-react"

export const metadata = {
  title: siteName,
  description: siteDescription,
  alternates: { canonical: "/" },
}

const supportPlans = [
  {
    no: "01",
    title: "補助金申請実務サポート",
    price: "10万円〜",
    icon: SearchCheck,
    lead: "申請する補助金を決め、採択審査へ出すまで",
    items: [
      "自社が対象になる制度・申請枠・要件の確認",
      "会社・顧客・商品・市場・競合の情報収集",
      "問題・課題・解決策を含む事業計画の作成支援",
      "対象経費・見積・添付資料・電子申請の確認",
    ],
  },
  {
    no: "02",
    title: "補助金交付申請サポート",
    price: "10万円〜",
    icon: FileCheck2,
    lead: "採択後、交付決定を受けて発注できるまで",
    items: [
      "採択通知・交付申請案内・提出期限の確認",
      "見積依頼書・見積書・相見積・内訳の確認",
      "対象経費と対象外経費、発注条件の確認",
      "差し戻しへの回答と追加資料の作成支援",
    ],
  },
  {
    no: "03",
    title: "補助金実績報告サポート",
    price: "10万円〜",
    icon: ClipboardCheck,
    lead: "事業実施後、確定審査と入金を受けるまで",
    items: [
      "見積・発注・契約・納品・請求・支払の確認",
      "振込記録・通帳・写真・成果物の確認",
      "実績報告書と不足資料の作成支援",
      "差し戻し・確定通知・精算払請求の確認",
    ],
  },
]

const worries = [
  { text: "どの補助金を選び、何を強みとして申請すればよいか分からない", icon: FileQuestion },
  { text: "採択審査へ出す事業計画と添付資料を作る時間がない", icon: Files },
  { text: "採択されたが、交付申請で何を出せばよいか分からない", icon: MessageSquareWarning },
  { text: "交付決定前に発注してよいのか、業者から確認されている", icon: CalendarDays },
  { text: "請求書、振込記録、写真など実績報告の証拠が揃っていない", icon: ReceiptText },
  { text: "事務局から差し戻され、期限までに入金へ進めるか不安", icon: Landmark },
]

const practiceStages = [
  {
    no: "01",
    title: "採択審査",
    icon: SearchCheck,
    lead: "申請書を書く前に、自社が対象か、何を審査されるかを調べます。",
    feature: "会社・補助金・対象事業を確認してから、申請する制度を選びます。",
    value: "自社に合う制度か判断でき、申請書に何を書けばよいか分かります。",
    items: [
      "公募要領の目的、対象者、申請要件、締切を読む",
      "創業経緯、強み、顧客、商品、決算書を集める",
      "市場、競合、顧客の困りごとと自社の解決策を調べる",
      "なぜ自社が、なぜ今、この事業を行うのかを書く",
      "対象経費、投資前後の変化、実行できる根拠を示す",
      "様式、加点資料、添付書類、電子申請を確認する",
    ],
  },
  {
    no: "02",
    title: "交付申請",
    icon: BookOpenCheck,
    lead: "採択後、事務局の許可を受けて事業を始めるための手続きです。",
    feature: "採択通知と交付申請の案内を読み、見積・発注条件を確認します。",
    value: "交付決定前の発注や、内訳不足による差し戻しを防ぎ、事業を始めやすくします。",
    items: [
      "採択通知と交付申請の案内、提出期限を確認する",
      "見積依頼日、見積日、有効期限、宛名を確認する",
      "一式、諸経費、諸費用を分けて内訳を出してもらう",
      "相見積、相場、対象外経費、目的外使用の有無を確認する",
      "建物費は平面図と既存事業・補助事業の区分を示す",
      "差し戻しの質問ごとに、回答と資料を提出する",
    ],
  },
  {
    no: "03",
    title: "実績報告・入金",
    icon: ClipboardCheck,
    lead: "実施した事業と支払いを証明し、補助金額の確定と入金を受けます。",
    feature: "事業実施前から、日付・支払・写真・成果物の残し方を確認します。",
    value: "実績報告で慌てて証拠を集める負担を減らし、確定・入金まで進めやすくします。",
    items: [
      "事業完了日、支払完了日、実績報告期限を確認する",
      "見積、発注、契約、納品、請求、支払の日付を確認する",
      "振込記録、通帳、カード明細、引落記録を用意する",
      "実施前・実施中・実施後の写真と成果物を用意する",
      "計画、金額、業者、内容の変更と承認状況を確認する",
      "差し戻し、確定通知、精算払請求、入金を確認する",
    ],
  },
]

const flow = [
  ["01", "お問い合わせ", "制度名、現在の状況、提出期限を分かる範囲で送ってください。"],
  ["02", "資料を確認", "通知、事務局メール、申請データ、見積書などを確認します。"],
  ["03", "支援内容と見積り", "阿久津が行う作業、依頼者が行う作業、料金をお伝えします。"],
  ["04", "ご契約・着手", "契約後、必要資料と提出までの日程を決めて作業を始めます。"],
  ["05", "書類作成・提出準備", "書類を作り、証拠を確認し、不足資料をお伝えします。"],
  ["06", "提出後の対応", "受付、差し戻し、交付決定、確定通知、入金を確認します。"],
]

export default function Home() {
  return (
    <main className="home-page">
      <header className="site-header home-header">
        <a href="/" className="brand" aria-label="補助金実務家 阿久津和宏 トップへ">
          <span className="brand-mark">補</span>
          <span className="brand-copy"><b>補助金実務家・行政書士</b><small>阿久津和宏｜認定経営革新等支援機関</small></span>
        </a>
        <nav aria-label="主要ナビゲーション">
          <a href="#practice">実務内容</a>
          <a href="#adoption">採択支援</a>
          <a href="#difference">支援の違い</a>
          <a href="#price">料金</a>
          <a href="#blog">ブログ</a>
          <a className="header-cta" href="#contact">相談する</a>
        </nav>
      </header>

      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <p className="hero-statement">採択、交付申請、入金まで。<br /><strong>全部やって初めて補助金です。</strong></p>
            <h1>補助金実務家行政書士<br />阿久津 和宏</h1>
            <p className="hero-credential">認定経営革新等支援機関</p>
            <p className="home-hero-lead">申請する補助金の選定、採択審査へ出す事業計画、採択後の見積・発注、実績報告の証拠まで、私たちが対応します。</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">補助金の状況を相談する</a>
              <a className="button button-ghost" href="#price">支援内容と料金を見る</a>
            </div>
          </div>
          <div className="hero-route" aria-label="補助金獲得までの工程">
            <ol>
              <li><b>01</b><div><strong>採択審査</strong><small>事業計画・添付資料</small></div></li>
              <li><b>02</b><div><strong>交付申請</strong><small>見積・発注条件</small></div></li>
              <li><b>03</b><div><strong>実績報告</strong><small>証拠・支払・写真</small></div></li>
              <li><b>04</b><div><strong>確定・入金</strong><small>確定通知・精算払請求</small></div></li>
            </ol>
          </div>
        </div>
      </section>

      <div className="home-content-shell">
      <div className="home-main-column">
      <section className="results-strip" aria-label="補助金申請支援の実績">
        <div><span>補助金申請を支援した事業者</span><strong>700<small>者以上</small></strong></div>
        <div><span>当社が支援した補助金申請の採択率</span><strong>8<small>割以上</small></strong></div>
        <div><span>当社が支援した補助金の入金率</span><strong>100<small>%</small></strong></div>
        <p>※2026年8月時点の本人確認済み実績。制度・公募回・申請条件によって結果は異なり、採択・交付決定・入金を保証するものではありません。</p>
      </section>

      <section id="problems" className="home-problems section-pad">
        <div className="home-section-title light-title">
          <h2>こんな悩みはありませんか？</h2>
          <p>申請前にも、採択後にも、期限と提出書類があります。どこか一つで止まると、その後の手続きへ進めません。</p>
        </div>
        <div className="problem-grid">
          {worries.map(({ text, icon: Icon }) => <div key={text}><span><Icon /></span><p>{text}</p></div>)}
        </div>
        <a className="section-cta light-cta" href="#contact">今の状況を相談する <ArrowRight /></a>
      </section>

      <section className="home-principle section-pad">
        <div className="principle-visual">
          <img src="/subsidy-process.jpg" alt="申請、採択、交付申請、実績報告、入金までの補助金実務" />
        </div>
        <div className="principle-copy">
          <h2>補助金申請から入金までの流れ</h2>
          <p>採択されるためには、補助金の目的を読み、自社がなぜこの事業を行うのか、投資によって何が変わるのかを説明する必要があります。採択後は、交付決定前に発注しないこと、見積から支払までの日付をそろえること、写真や振込記録を残すことが必要です。</p>
          <p>その土台になるのが、次の3つです。</p>
          <div className="three-principles">
            <div><b>01</b><strong>自分の会社をよく知る</strong><small>創業経緯、決算書、強み、顧客、商品、市場、競合</small></div>
            <div><b>02</b><strong>補助金をよく知る</strong><small>制度の目的、対象者、公募要領、FAQ、審査項目</small></div>
            <div><b>03</b><strong>対象事業をよく知る</strong><small>なぜ自社が、なぜ今、何を行い、何が変わるか</small></div>
          </div>
          <a className="webinar-card" href="https://lp2.well-c.biz/p/d7ed4f33-f24b-4e41-83c7-c9bdb3774dde/draft-13bca1dc-3077-4d26-8f95-b762e7c31717-step-msljillj-c34b.html" target="_blank" rel="noreferrer">
            <img src="/webinar-visual.svg" alt="採択、交付申請、実績報告、入金の工程図" />
            <span>補助金獲得の極意</span><strong>ウェビナー参加はこちら</strong><small>講演の内容を動画で確認する <ArrowRight /></small>
          </a>
        </div>
      </section>

      <section id="adoption" className="adoption-work section-pad">
        <div className="home-section-title">
          <h2>採択から入金までの実務</h2>
          <p>公募要領に合う事業を選び、その事業を実行できる会社だと伝え、数字と資料で裏付けます。採択審査で確認される内容を、実際の作業に分けて説明します。</p>
        </div>
        <div className="adoption-visual"><img src="/adoption-practice-visual.svg" alt="採択審査から入金までの実務工程" /></div>
        <div className="adoption-grid">
          <article><span>01</span><Building2 /><h3>そもそも対象かを調べる</h3><p>欲しい設備から補助金を探すのではなく、制度が誰のどのような取組を支援するものかを確認します。会社規模、業種、所在地、過去の申請、実施時期、対象経費を一つずつ照合します。</p></article>
          <article><span>02</span><BookOpenCheck /><h3>補助金の目的を読む</h3><p>公募要領の最初に書かれている制度目的を読み、審査項目、参考資料、FAQ、採択事例まで確認します。自社の計画が制度の目的と違う場合は、書き方ではなく事業そのものを見直します。</p></article>
          <article><span>03</span><Database /><h3>会社の事実を集める</h3><p>創業した理由、これまでの事業、顧客、商品、強み、弱み、決算書、現在の売上構成を集めます。担当者の記憶だけに頼らず、録音、ウェブサイト、社内資料、財務資料を使います。</p></article>
          <article><span>04</span><Scale /><h3>問題・課題・解決策をつなぐ</h3><p>会社が抱える問題、その原因となる課題、補助事業による解決策を分けます。「設備を買いたい」で終わらせず、導入後に誰へ何を提供し、売上や生産性がどう変わるかまで示します。</p></article>
          <article><span>05</span><ReceiptText /><h3>対象経費を説明する</h3><p>設備やサービスの仕様、数量、価格、利用目的、選んだ理由を確認します。汎用品や既存事業との共用、相場より高い見積、内容が分からない「一式」は、採択後も確認されます。</p></article>
          <article><span>06</span><FileCheck2 /><h3>添付資料と数字を合わせる</h3><p>事業計画、経費明細、見積書、決算書、加点資料、電子申請の数字と会社名を合わせます。文章が良くても、必須資料の不足や数値の食い違いがあれば審査へ正しく伝わりません。</p></article>
        </div>
      </section>

      <section id="practice" className="home-practice section-pad">
        <div className="home-section-title">
          <h2>私たちが選ばれる理由</h2>
          <p>採択審査では、会社のこと、補助金の目的、対象事業の内容を確認し、なぜこの会社がこの事業を行うのかを事業計画にします。会社の沿革、顧客、商品、強み、財務、現在の課題を事実と数字で確かめ、審査項目に沿って伝えるため、申請書に何を書けばよいかが分かります。対象経費の必要性、事業を実行する体制、導入後に顧客へ届ける価値までつながるため、審査する側が確認したい内容を読み取って準備できます。公募要領の目的と会社の計画を照合し、事業を行う理由、実行できる根拠、投資によって変わる数字を確認します。計画の根拠を資料で示し、質問を受けたときにも説明できるようにします。採択後は、交付申請で見積や発注条件を確認し、実績報告では支払・写真・成果物をそろえて入金まで進めます。</p>
          <p>採択審査、交付申請、実績報告の各工程で、次に用意する資料、確認する数字、提出期限を具体的に示します。行政書士として書類と手続きを確認し、認定経営革新等支援機関として会社と事業の内容を確認します。依頼者には、誰が、いつまでに、何を準備するかを伝え、見積書、発注書、契約書、請求書、振込記録、写真、成果物を工程ごとに確認していただきます。採択審査で伝えた計画と、交付申請・実績報告で提出する証拠がつながるため、途中で何を出せばよいか分からなくなる負担を減らせます。事務局からの質問や差し戻しがあったときも、計画書、経費明細、証拠資料を照らし合わせて、回答する内容と追加資料を確認します。これが、補助金実務家が選ばれる理由です。</p>
        </div>
        <div className="practice-stage-grid">
          {practiceStages.map(({ no, title, icon: Icon, lead, feature, value, items }) => (
            <article className="practice-stage" key={no}>
              <div className="practice-stage-head"><div className="reason-icon"><Icon /></div><span>{no}</span></div>
              <h3>{title}</h3>
              <p>{lead}</p>
              <div className="practice-value"><b>特徴</b><span>{feature}</span><b>お客様にとっての価値</b><span>{value}</span></div>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="company-data-section section-pad">
        <div className="company-data-intro">
          <h2><span>採択から入金の確率を上げながら効率を上げる方法</span><span>「ブレイン」</span></h2>
          <p>補助金の申請では、会社の沿革、商品、顧客、強み、財務、今回の事業を聞きます。これを申請ごとに最初から聞き直すと、経営者も支援者も時間を失います。</p>
          <p>採択後に何をすればよいか分からず止まる、同じ会社説明を申請のたびに繰り返す、実績報告で証拠が足りず入金を待つ。そうした負担を減らし、採択から入金まで事業を前へ進めるために、会社情報を残します。補助金は、採択されれば終わりではありません。</p>
          <p>採択審査で使うのは、きれいな文章だけではありません。自社の沿革、業種、顧客、商品、強み、弱み、財務、現在の事業、なぜこの補助金を使うのか、なぜ今この事業を行うのか。聞き取りや調査で集めた、会社にしかない情報が事業計画の土台になります。この情報は他社が真似できない、あなたの会社だけの情報です。</p>
          <p>この会社情報を残しておけば、申請のたびに同じことを最初から聞き直す必要がありません。採択審査では事業を行う理由と実行できる根拠に、交付申請では対象経費の必要性や発注条件に、実績報告では実施・支払い・写真・成果物の証拠に使います。会社の情報を一度きりの申請書で終わらせず、採択から入金まで使うための「ブレイン」です。</p>
        </div>
        <div className="company-data-map">
          <div className="data-center"><Database /><strong>会社の情報</strong><small>事実・数字・資料</small></div>
          <div><b>会社</b><span>創業経緯、沿革、組織、許認可、決算書</span></div>
          <div><b>顧客</b><span>誰が買うか、何に困るか、なぜ選ぶか</span></div>
          <div><b>商品</b><span>機能、価値、価格、販売方法、実績</span></div>
          <div><b>市場・競合</b><span>市場規模、変化、競合との違い、根拠資料</span></div>
          <div><b>対象事業</b><span>なぜ今行うか、投資内容、実施体制、収支計画</span></div>
          <div><b>証拠</b><span>見積、契約、支払、写真、成果物、事務局回答</span></div>
        </div>
        <div className="reuse-row">
          <div><span>採択審査</span><p>会社の強みや顧客、今回の事業が必要な理由、実行できる根拠を事業計画で説明します。</p></div>
          <ArrowRight />
          <div><span>交付申請</span><p>対象経費の必要性、仕様、価格、発注条件を確認し、補助事業でどう使うかを示します。</p></div>
          <ArrowRight />
          <div><span>実績報告</span><p>申請した事業を実施し、支払いまで完了した事実を、請求書・振込記録・写真などで証明します。</p></div>
        </div>
      </section>

      <section className="expert-section section-pad">
        <div className="expert-photo"><img src={githubPhoto} alt="補助金実務家・行政書士 阿久津和宏" /></div>
        <div className="expert-copy">
          <h2>補助金実務家に相談するメリット</h2>
          <p className="expert-name">阿久津 和宏</p>
          <p className="expert-role">認定経営革新等支援機関／Well Consultant合同会社 代表</p>
          <p>初めて支援した案件では、事業計画書の作成に約100時間を使い、採択後には約30回の差し戻しを経験しました。書類作成だけに集中すると、採択後に何を確認されるか、どの証拠が必要になるかを見落とします。この経験から、申請書、採択後の手続き、入金までを補助金実務として扱います。</p>
          <p>その結果、採択審査では自社の強みと事業の必要性を伝えやすくなり、交付申請では発注前に確認すべきことが分かり、実績報告では必要な証拠を後から慌てて探さずに済みます。採択、交付申請、事業の実施、実績報告、確定審査、入金まで進んで、初めて事業に使える補助金になります。</p>
          <p>行政書士として書類と手続きを確認し、認定経営革新等支援機関として会社と事業の内容を確認する。どの工程で何を用意すればよいかを依頼者と共有し、採択だけで終わらせず、入金まで進めることが相談するメリットです。</p>
          <div className="expert-points">
            <div><BadgeCheck /><b>行政書士</b><small>行政へ提出する書類と手続きを支援</small></div>
            <div><ShieldCheck /><b>認定支援機関</b><small>事業計画と経営の両面を確認</small></div>
            <div><Database /><b>会社情報を残す</b><small>決算書、聞き取り、顧客・市場・競合の情報を再利用</small></div>
          </div>
        </div>
      </section>

      <section id="price" className="home-pricing section-pad">
        <div className="home-section-title">
          <h2>料金・サービスメニュー</h2>
          <p>申請前、採択後、実績報告のどこからでもご相談ください。資料と期限を確認して見積ります。</p>
        </div>
        <div className="price-grid">
          {supportPlans.map((plan) => {
            const Icon = plan.icon
            return (
              <article id={`plan-${plan.no}`} key={plan.title}>
                <div className="plan-icon"><Icon /></div>
                <p className="plan-stage">{plan.lead}</p>
                <h3>{plan.title}</h3>
                <div className="price"><strong>{plan.price}</strong></div>
                <h4>支援する内容</h4>
                <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <a href="#contact">この支援について相談する</a>
              </article>
            )
          })}
        </div>
        <div className="price-notes">
          <b>料金について</b>
          <p>制度、公募回、経費項目数、期限、資料の不足、差し戻しの状況によって料金は変わります。消費税、成功報酬、追加対応、外部費用の有無は、支援開始前の見積書でお伝えします。</p>
        </div>
      </section>

      <section id="flow" className="support-flow section-pad">
        <div className="home-section-title light-title">
          <h2>補助金申請から入金までの実務ならお任せください</h2>
          <p>制度名、現在の状況、提出期限を、分かる範囲でお知らせください。</p>
        </div>
        <div className="flow-grid">
          {flow.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="home-faq section-pad">
        <div className="home-section-title">
          <h2>よくある質問</h2>
        </div>
        <div className="faq-list">
          <details open><summary>まだ申請する補助金が決まっていません。相談できますか？</summary><p>相談できます。会社規模、業種、所在地、行いたい事業、購入予定のもの、実施時期を確認し、候補となる制度と対象になる可能性を調べます。補助金は公募期間があるため、希望する支出だけでなく、事業の目的と時期を確認します。</p></details>
          <details><summary>採択された後からでも依頼できますか？</summary><p>交付申請、交付決定後の事業実施、実績報告の途中からでも相談できます。採択通知、申請時のデータ、事務局から届いた案内、見積書、現在の期限をお送りください。すでに発注や支払いをした場合は、その日付と方法も確認します。</p></details>
          <details><summary>事務局から差し戻しが来ています。対応できますか？</summary><p>指摘内容、提出済みの書類、再提出期限を確認します。質問ごとに回答と添付資料を対応させ、意味が分からない指摘は推測で書類を作らず、何を確認したいのか事務局へ問い合わせます。</p></details>
          <details><summary>電子申請を全部代わりに操作してもらえますか？</summary><p>申請者本人が行う必要のある操作と、行政書士が支援できる書類作成を分けてご案内します。提出画面の入力内容や添付資料は事前に確認し、本人が提出できるように支援します。</p></details>
          <details><summary>必要な資料がまだ揃っていません。問い合わせてよいですか？</summary><p>問題ありません。最初に必要なのは、制度名、現在の工程、事務局からの連絡、提出期限です。その内容を見て、最初に確認する資料をお伝えします。</p></details>
          <details><summary>採択や入金は保証されますか？</summary><p>採択、交付決定、補助金額、入金を保証することはできません。制度要件と審査内容を確認し、不備を減らし、会社と事業の事実が伝わる申請を作ること、採択後の手続きを期限内に行うことを支援します。</p></details>
        </div>
      </section>

      <section id="blog" className="articles-section section-pad">
        <div className="home-section-title">
          <h2>補助金獲得の極意ブログ</h2>
          <p>記事をクリックすると本文へ移動します。右側の一覧から全記事へ移動できます。</p>
        </div>
        <div className="blog-index-layout">
          <div className="blog-index-main">
            <div className="article-list home-article-list">
              {articles.slice(0, 8).map((article, index) => (
                <a className={`article-row${index < 3 ? " has-image" : ""}`} href={`/articles/${article.slug}`} key={article.slug}>
                  {index < 3 && <img src={["/article-process-v2.jpg", "/article-grant-v2.jpg", "/article-report-v2.jpg"][index]} alt="補助金実務の記事イメージ" />}
                  <div className="article-card-body">
                    <div className="article-card-meta"><span>{article.category}</span><b>{String(article.number).padStart(2, "0")}</b></div>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <strong>記事を読む <ArrowRight /></strong>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      </div>
      <section className="top-blog-sidebar" aria-label="補助金獲得の極意ブログ サイドバー">
        <BlogSidebar contactHref="#contact" showProfile={false} showAllArticles />
      </section>
      </div>

      <section id="contact" className="contact-band">
        <h2>補助金申請・交付申請・実績報告で<br />お悩みなら、ご相談ください。</h2>
        <p className="contact-lead">制度名、現在の状況、提出期限を分かる範囲でお知らせください。Traingoのお問い合わせフォームが開きます。</p>
        <div className="contact-form-shell"><ContactEmbed /></div>
      </section>

      <SiteFooter />
    </main>
  )
}
