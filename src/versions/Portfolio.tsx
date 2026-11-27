import {
  ArrowUpRight,
  ChevronDown,
  Download,
  Mail,
  Play,
  Star,
} from 'lucide-react'
import { useState } from 'react'
import './Portfolio.css'

const portraits = [
  { src: '/pictures/IMG_20261120_155832.jpg', title: 'Porträtt' },
  { src: '/pictures/IMG_20261120_155832 (5).jpg', title: 'På scen' },
  { src: '/pictures/IMG_20261120_155832 (8).jpg', title: 'Dans' },
  { src: '/pictures/IMG_20261120_155832 (4).jpg', title: 'På scen' },
  { src: '/pictures/IMG_20261120_155832 (3).jpg', title: 'Dans' },
  { src: '/pictures/IMG_20261120_155832 (7).jpg', title: 'På scen' },
  { src: '/pictures/IMG_20261120_155832 (6).jpg', title: 'På scen' },
  { src: '/pictures/IMG_20261120_155832.png', title: 'Porträtt' },
]

const experienceCategories = [
  {
    title: 'Musikal',
    items: [
      { time: '2025', title: 'Hair', detail: 'Löftadalens folkhögskola' },
      { time: '2023', title: '”Fearless” ur Mean Girls the Musical', detail: 'Sommarkurs i musikal på Institute of the Arts Barcelona' },
      { time: '2021', title: 'Alice i Underlandet', detail: 'Östra Real Gymnasium · Spelade Hjärter dam' },
      { time: '2012–2014', title: 'En Midsommarnattsdröm', detail: 'Showstoppers i USA · Spelade Helena' },
      { time: '2012–2014', title: 'Snövit', detail: 'Showstoppers i USA · Spelade häxan' },
    ],
  },
  {
    title: 'Sång',
    items: [
      { time: '2025–pågående', title: 'Sångstudier', detail: 'Stockholms Musikalartistutbildning' },
      { time: '2024–2025', title: 'Sång och ensemble', detail: 'Löftadalens folkhögskola · Kör och frivillig acapellagrupp' },
      { time: '2014–2021', title: 'Sånglektioner', detail: 'Kulturskolan Stockholm · Privata sånglektioner i USA' },
      { time: 'Genom åren', title: 'Solo, kör och ensemble', detail: 'Solo-sång på uppvisningar · Kör i högstadiet, kyrkokör, gymnasiet och på Löftadalens folkhögskola · Sångare i ensemble i gymnasiet, högstadiet och på fest' },
    ],
  },
  {
    title: 'Teater',
    items: [
      { time: '2025–pågående', title: 'Stockholms Musikalartistutbildning', detail: 'Improvisation, scener, monologarbete, duettarbete, röstarbete' },
      { time: '2024–2025', title: 'Löftadalens folkhögskola', detail: 'Improvisation, monologarbete, karaktärsarbete, röstarbete, rörelsearbete' },
      { time: '2023', title: 'Katrinebergs folkhögskola', detail: 'Filmkurs i filmskådespeleri' },
      { time: '2014–2021', title: 'Kulturskolan Stockholm', detail: 'Improvisation, pjäser, karaktärsarbete, röstarbete, rörelsearbete' },
      { time: 'Pjäsproduktioner', title: 'Scenframträdanden', detail: 'Grease · Lejonkungen · Best in Show · Alice i Underlandet' },
    ],
  },
  {
    title: 'Dans',
    items: [
      { time: '2025–pågående', title: 'Stepp', detail: 'Löftadalens folkhögskola · Stockholms Musikalartistutbildning' },
      { time: '2024–pågående', title: 'Street', detail: 'Löftadalens folkhögskola · Stockholms Musikalartistutbildning · Andra strökurser' },
      { time: '2024–2025', title: 'Modern', detail: 'Löftadalens folkhögskola' },
      { time: '2021–2024', title: 'Jazz och balett', detail: 'Style Dance Studio i Lund' },
      { time: '2014–2021', title: 'Balett, jazz och modern', detail: 'Kulturskolan Stockholm · Dance Unlimited i USA' },
    ],
  },
  {
    title: 'Show och evenemang',
    items: [
      { time: 'Säsongsarbete', title: 'Showartist', detail: 'First Camp Orsa · Show Concept' },
      { time: 'Halloween', title: 'Mingelartist på Kolmården', detail: 'Olika karaktärer' },
      { time: 'Jul', title: 'Ballerina i julparad', detail: 'Mall of Scandinavia · Vis-productions' },
      { time: 'Genom åren', title: 'Dansuppvisningar', detail: 'Balett, jazz, modern, contemporary jazz och stepp' },
    ],
  },
  {
    title: 'Utbildning och andra erfarenheter',
    items: [
      { time: '2025–pågående', title: 'Stockholms Musikalartistutbildning', detail: 'Musikal, sång, teater och dans' },
      { time: '2024–2025', title: 'Musikallinjen', detail: 'Löftadalens folkhögskola' },
      { time: '2023', title: 'Sommarkurs i musikal', detail: 'Institute of the Arts Barcelona' },
      { time: 'Två år', title: 'Piano och grundläggande gitarr', detail: 'Pianolektioner, musikteori och gymnasiet har utvecklat min musikaliska förmåga och förståelse' },
      { time: '8 år', title: 'Fotboll', detail: 'Har utvecklat disciplin och teamwork' },
    ],
  },
] as const

export default function Portfolio() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})
  const [playVideo, setPlayVideo] = useState(false)

  const toggleCategory = (title: string) => {
    setExpandedCategories((current) => ({
      ...current,
      [title]: !current[title],
    }))
  }

  return (
    <main className="page">
      <header className="header">
        <a className="brand" href="#top" aria-label="Klara startsida">
          <span>Klara</span>
          <Star size={16} aria-hidden="true" />
        </a>
        <nav className="nav" aria-label="Huvudmeny">
          <a href="#about">Om</a>
          <a href="#media">Media</a>
          <a href="#gallery">Galleri</a>
          <a href="#cv">CV</a>
          <a href="#contact">Kontakt</a>
        </nav>
        <a className="book" href="#contact">Boka / Kontakt</a>
      </header>

      <section className="hero" id="top">
        <span className="doodle doodle-star" aria-hidden="true">✦</span>
        <span className="doodle doodle-ring" aria-hidden="true" />
        <span className="doodle doodle-note" aria-hidden="true">♪</span>
        <div className="hero-copy">
          <p className="tag"><Star size={16} /> Musikalartist • Stockholm</p>
          <h1>Klara <em>Thuresson</em></h1>
          <p className="lede">
            Närvaro, driv och helhjärtat engagemang.
          </p>
          <div className="actions">
            <a className="primary" href="#media"><Play size={18} fill="currentColor" /> Se showreel</a>
            <a className="secondary" href="/Klara%20CV%20-%20Portfolio.pdf" download="Klara-CV.pdf"><Download size={18} /> Ladda ner CV</a>
          </div>
        </div>
        <img
          className="hero-image"
          src="/pictures/IMG_20261120_155832.jpg"
          alt="Porträtt av Klara"
        />
      </section>

      <section className="about" id="about">
        <div className="about-image">
          <img src="/pictures/IMG_20261120_155832 (5).jpg" alt="Klara som karaktär" />
        </div>
        <div className="about-copy">
          <p className="section-label">Om Klara</p>
          <h2>
            <span>Det finns lägen för good enough,</span>
            <span><mark>och så finns det scenen</mark>.</span>
          </h2>
          <p> 
            Jag gillar när det bränner till. När man kastar sig ut, släpper allt annat och bara kör. På scenen handlar det om att äga rummet, hålla skärpan när det svänger och ge hundra procent – utan att krångla till det.
          </p>
          <br/>
          <p>
            Jag är den som alltid vill att alla runtomkring ska må bra, men när ridån går upp finns det ingen tvekan. Jag tar i, tar plats och gör jobbet.
          </p>
          <br/>
          <p>
            Enkel att jobba med, <mark>omöjlig att missa</mark>, och alltid med glimten i ögat.
          </p>
          <dl>
            <div><dt>Röstläge</dt><dd> - </dd></div>
            <div><dt>Baserad i</dt><dd>Stockholm</dd></div>
          </dl>
        </div>
      </section>

     <section className="media" id="media">
      <h2>Rörligt &amp; Ljud</h2>

      <div className="soundcloud-grid">
        {/* 1. YouTube – Spelar direkt på sidan från 36:23 (start=2183) */}
        <div className="youtube-player">
          {!playVideo ? (
            <button
              type="button"
              onClick={() => setPlayVideo(true)}
              className="youtube-placeholder"
              aria-label="Spela gymnasie-musikalen från 36:23"
            >
              <span className="youtube-thumbnail">
                <img
                  src="https://img.youtube.com/vi/Qw-1IIWYjfM/hqdefault.jpg"
                  alt="Förhandsbild från gymnasie-musikalen"
                />
                <span className="youtube-play">
                  <Play size={24} fill="currentColor" />
                </span>
                <span className="youtube-time">36:23</span>
              </span>
              <span className="youtube-credit">
                <small>Gymnasiet · Musikal</small>
                <span>Spela klipp (36:23)</span>
              </span>
            </button>
          ) : (
            <div className="youtube-embed-wrapper">
              <iframe
                width="100%"
                height="240"
                src={`https://www.youtube-nocookie.com/embed/Qw-1IIWYjfM?start=2183&autoplay=1&rel=0&origin=${encodeURIComponent(window.location.origin)}`}
                title="Klara Thuresson – Musikal"
                frameBorder="0"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="youtube-credit">
                <small>Gymnasiet · Musikal</small>
                <a
                  href="https://youtu.be/Qw-1IIWYjfM?t=2183"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Öppna på YouTube <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* 2. SoundCloud – Slimmad vågform utan kommentarer och stora omslag */}
        <div className="soundcloud-player">
          <iframe
            title="Klara Thuresson – When the Clouds are Crying"
            width="100%"
            height="120"
            scrolling="no"
            frameBorder="0"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/822834217&color=%23ed9ca8&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
          />
          <div className="soundcloud-credit">
            <a
              href="https://soundcloud.com/klara-thuresson"
              target="_blank"
              rel="noopener noreferrer"
            >
              Klara Thuresson
            </a>
            <span> · </span>
            <a
              href="https://soundcloud.com/klara-thuresson/when-the-clouds-are-crying"
              target="_blank"
              rel="noopener noreferrer"
            >
              When the Clouds are Crying
            </a>
          </div>
        </div>
      </div>
    </section>

      <section className="gallery" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="section-label">Visuell portfolio</p>
            <h2>Bildgalleri</h2>
          </div>
        </div>
        <div className="grid">
          {portraits.map((portrait, index) => (
            <figure
              key={portrait.src}
              className={'striped' in portrait && portrait.striped ? 'striped-portrait' : undefined}
            >
              <img src={portrait.src} alt={portrait.title} />
              <figcaption>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {portrait.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cv" id="cv">
        <div className="cv-heading">
          <div>
            <p className="section-label">Meriter</p>
            <h2>Utbildning & erfarenhet</h2>
          </div>
          <a href="/Klara%20CV%20-%20Portfolio.pdf" download="Klara-CV.pdf"><Download size={14} /> Ladda ner PDF-CV</a>
        </div>
        <div className="timeline">
          {experienceCategories.map((category) => {
            const isExpanded = Boolean(expandedCategories[category.title])
            const visibleItems = isExpanded ? category.items : category.items.slice(0, 3)

            return (
              <div key={category.title}>
                <p className="section-label">{category.title}</p>
                {visibleItems.map((item) => (
                  <article key={`${category.title}-${item.title}`}>
                    <time>{item.time}</time>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
                {category.items.length > 3 && (
                  <button
                    className="timeline-toggle"
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() => toggleCategory(category.title)}
                  >
                    {isExpanded ? 'Visa mindre' : 'Visa fler'}
                    <ChevronDown size={14} aria-hidden="true" />
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">Hör av dig</p>
        <h2>Vi borde ses i studion eller på scenen.</h2>
        <p>Hör av dig direkt så löser vi det.</p>
        <div className="contact-actions">
          <a href="mailto:klara.thuresson@yahoo.com"><Mail size={18} /> klara.thuresson@yahoo.com</a>
          <a href="https://www.instagram.com/singing_klara?dmpr=OXQ4dnQ0d2J2c28w" target="_blank" rel="noopener noreferrer">
            @singing_klara <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
      <section className="gallery">
        <footer className="footer">
          <span> © {new Date().getFullYear()} Klara </span>
          <a href="https://tuvafalk.se" target="_blank" rel="noreferrer">
            Site by Tuva Falk
          </a>
        </footer>
      </section>
    </main>
  )
}