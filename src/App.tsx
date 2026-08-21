import { useEffect, useState } from 'react'

const APP_URL = 'https://app.fitforestapp.com'

type IconName = 'bolt' | 'chart' | 'calendar' | 'food' | 'shield' | 'user' | 'target' | 'play' | 'arrow' | 'home' | 'activity' | 'heart'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />,
    chart: <><path d="M4 19V5" /><path d="m4 15 5-5 4 3 7-8" /><path d="M20 5h-4" /></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="3" /><path d="M16 2v4M8 2v4M3 9h18" /><path d="M8 14h3" /></>,
    food: <><path d="M7 3v7M4 3v7a3 3 0 0 0 6 0V3M7 13v8" /><path d="M17 3v18M17 3c3 1 4 4 4 7h-4" /></>,
    shield: <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />,
    user: <><circle cx="12" cy="8" r="3" /><path d="M5 21c.7-4 2.8-6 7-6s6.3 2 7 6" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m17.5 6.5 3-3M19 3.5h1.5V5" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" fill="currentColor" stroke="none" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    home: <><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10Z" /><path d="M9 21v-6h6v6" /></>,
    activity: <><path d="M4 19V5" /><path d="M4 15h4V9h4v7h4V6h4" /></>,
    heart: <path d="M20.8 8.8c0 5.5-8.8 10.4-8.8 10.4S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>
}

const features = [
  ['bolt', 'Fərdiləşdirilmiş məşq', 'Məqsədinə və səviyyənə uyğun proqramla daha inamlı hərəkət et.'],
  ['chart', 'Məşq izləmə', 'Setləri, təkrarları və nəticələrini bir yerdə qeyd et.'],
  ['food', 'Qidalanma planı', 'Gündəlik rasionunu və yeməklərini daha rahat idarə et.'],
  ['target', 'Çəki və proqres', 'Dəyişimini zamanla gör, növbəti addımını daha aydın seç.'],
  ['calendar', 'Həftəlik plan', 'Həftəni əvvəlcədən qur, məşq üçün vaxtını qoru.'],
  ['user', 'Trainer və tələbə', 'Trainerlərlə plan paylaşımı və izləmə üçün rahat sistem.'],
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top" aria-label="FitForest ana səhifə"><img src="/fitforest-text-logo-white.png" alt="FitForest" /></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Əsas menyu">
        <a href="#features" onClick={closeMenu}>İmkanlar</a><a href="#how" onClick={closeMenu}>Necə işləyir?</a><a href="#trust" onClick={closeMenu}>Etibar</a>
        <a className="button button-small button-outline" href={APP_URL}>Tətbiqə daxil ol <Icon name="arrow" /></a>
      </nav>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menyunu aç" aria-expanded={menuOpen}><span /><span /><span /></button>
    </header>

    <main id="top">
      <section className="hero section-grid">
        <div className="hero-copy" data-reveal="left"><p className="eyebrow"><span className="eyebrow-dot" /> Daha məqsədli yaşa</p><h1>Öz ritmini qur.<br /><em>Gücünü izlə.</em></h1><p className="hero-text">FitForest məşqini, qidalanmanı və gündəlik proqresini bir yerdə daha planlı idarə etməyə kömək edən fitness tətbiqidir.</p><div className="hero-actions"><a className="button" href={APP_URL}>İndi başla <Icon name="arrow" /></a><a className="text-link" href="#how"><span className="play-circle"><Icon name="play" /></span> Necə işləyir?</a></div><div className="hero-note"><span className="avatar-stack"><i /><i /><i /></span><span>Planlı addımlar. Ölçülə bilən nəticələr.</span></div></div>
        <div className="phone-stage" data-reveal="phone" aria-label="FitForest tətbiqinin mobil görünüşü"><div className="glow glow-one" /><div className="glow glow-two" /><div className="phone"><div className="phone-notch" /><div className="phone-screen"><div className="phone-top"><span>09:41</span><span>•••</span></div><div className="phone-greeting">SALAM, ELMİR! <span>✦</span><small>Bu gün üçün planın hazırdır</small></div><div className="streak-card"><div><small>Həftəlik seriya</small><strong>1 GÜN ARDICIL</strong><div className="week-dots"><span>B.E</span><span>Ç.A</span><span>Ç</span><span>Ç.A</span><span className="today">C</span><span>Ş</span><span>B</span></div></div><b className="streak-flame">🔥</b></div><div className="progress-card"><div><small>Həftəlik proqres</small><strong>15%</strong><span>Bu həftə əldə edirsən</span></div><div className="ring">15%</div></div><div className="phone-label">Bugünkü məşq <span>•••</span></div><div className="workout-mini"><div className="mini-icon"><Icon name="play" /></div><div><small>KARDİO · BAŞLANĞIC</small><strong>KARDİO DAYANIQLILIQ</strong><span>35 dəq · 300 kkal · 4 hərəkət</span></div></div><div className="phone-label">Gündəlik rasion <span>•••</span></div><div className="nutrition-mini"><div className="bars"><i /><i /><i /><i /></div><div><strong>1,285 <small>/ 2,901 kkal</small></strong><small>Günlük hədəfin</small></div><div className="nutrition-line" /></div><div className="phone-nav"><span className="active"><Icon name="home" /><small>ANA SƏHİFƏ</small></span><span><Icon name="activity" /><small>İZLƏMƏ</small></span><span><Icon name="bolt" /><small>MƏŞQLƏR</small></span><span><Icon name="heart" /><small>QİDALANMA</small></span></div></div></div></div>
      </section>

      <section className="statement section" data-reveal><div className="section-kicker">FITFOREST İLƏ</div><h2>Daha planlı məşq.<br /><span>Daha düzgün qidalanma.</span><br />Daha ölçülə bilən proqres.</h2><p>Kiçik addımları davamlı vərdişlərə çevirmək üçün sadə, aydın və sənin tempinə uyğun bir yol.</p></section>

      <section className="problem section section-grid" data-reveal><div><p className="eyebrow">Sənə tanışdır?</p><h2>Başlamaq asandır.<br /><em>Davam etmək üçün sistem lazımdır.</em></h2></div><div className="problem-list"><div className="problem-row"><b>01</b><div><strong>Plan qarışıqlığı</strong><p>Bu gün nə etməli olduğunu düşünmək üçün enerjini itirmə.</p></div><span>×</span></div><div className="problem-row"><b>02</b><div><strong>Nəticəni görə bilməmək</strong><p>İrəliləyişin qeydə alınmayanda motivasiya da zəifləyir.</p></div><span>×</span></div><div className="solution-row"><div className="mini-mark">✦</div><div><strong>FitForest ilə həll</strong><p>Planın, qeydlərin və proqresin bir baxışda səninlədir.</p></div><span>✓</span></div></div></section>

      <section className="features section" id="features" data-reveal><div className="section-intro"><div><p className="eyebrow">Sənin gündəlik yol yoldaşın</p><h2>Bir tətbiqdə<br /><em>hər şey daha aydın.</em></h2></div><p>Məqsədindən asılı olmayaraq, ardıcıl qalmağı asanlaşdıran alətlər.</p></div><div className="feature-grid">{features.map(([icon, title, text], index) => <article className={index === 0 ? 'feature-card feature-card-featured' : 'feature-card'} key={title} data-reveal="card" style={{ ['--delay' as string]: `${index * 70}ms` }}><div className="feature-icon"><Icon name={icon} /></div><span className="feature-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href={APP_URL} aria-label={`${title} haqqında tətbiqə keç`}>Kəşf et <Icon name="arrow" /></a></article>)}</div></section>

      <section className="how section" id="how" data-reveal><div className="section-intro"><div><p className="eyebrow">Sadə dörd addım</p><h2>Hərəkətə keçmək<br /><em>belə görünür.</em></h2></div></div><div className="steps"><div className="step"><span>01</span><div className="step-icon"><Icon name="user" /></div><h3>Qeydiyyatdan keç</h3><p>Hesabını yarat və öz yolunu başlat.</p></div><div className="step"><span>02</span><div className="step-icon"><Icon name="target" /></div><h3>Məqsədini müəyyən et</h3><p>Nəyə çatmaq istədiyini seç.</p></div><div className="step"><span>03</span><div className="step-icon"><Icon name="calendar" /></div><h3>Proqramını izlə</h3><p>Həftəni planla və məşqlərini tamamla.</p></div><div className="step"><span>04</span><div className="step-icon"><Icon name="chart" /></div><h3>Proqresini ölç</h3><p>Nəticələrini izləyərək davam et.</p></div></div></section>

      <section className="trust section section-grid" id="trust" data-reveal><div className="trust-badge"><div className="large-shield"><Icon name="shield" /></div><span>Güvənlə<br />davam et</span></div><div><p className="eyebrow">Sənin məlumatların, sənin nəzarətində</p><h2>Məşqinə fokuslan.<br /><em>Qalanını biz qoruyaq.</em></h2><p className="trust-text">FitForest hesab məlumatlarını qorumağa və təhlükəsiz autentifikasiya axını təqdim etməyə fokuslanır. Məxfilik və təhlükəsizlik bizim üçün məhsulun əsas hissəsidir.</p><div className="trust-points"><span><Icon name="shield" /> Təhlükəsiz hesab sistemi</span><span><Icon name="target" /> Aydın və məsuliyyətli yanaşma</span></div></div></section>

      <section className="final-cta section" data-reveal><div className="cta-orbit orbit-one" /><div className="cta-orbit orbit-two" /><p className="eyebrow">Bu gün başla</p><h2>Öz dəyişiminə<br /><em>yer aç.</em></h2><p>Birinci addım kiçik ola bilər. Əsas odur ki, sənə aid olsun.</p><a className="button button-light" href={APP_URL}>Tətbiqə daxil ol <Icon name="arrow" /></a></section>
    </main>
    <footer className="footer"><div className="footer-main"><a className="brand" href="#top"><img src="/fitforest-text-logo-white.png" alt="FitForest" /></a><p>Gündəlik gücün üçün daha aydın yol.</p><a className="footer-cta" href={APP_URL}>PWA-ya keçid <Icon name="arrow" /></a></div><div className="footer-bottom"><span>© 2026 FitForest</span><div><a href="#trust">Məxfilik siyasəti</a><a href="#trust">İstifadə şərtləri</a><a href="mailto:hello@fitforestapp.com">hello@fitforestapp.com</a></div></div></footer>
  </div>
}

export default App
