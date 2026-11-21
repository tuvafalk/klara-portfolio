import {
  ArrowUpRight,
  Download,
  Mail,
  Play,
  Star,
} from 'lucide-react'
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

export default function Portfolio() {
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
            Hårt arbetande, kreativ och träffsäker. Från storslagna musikalscener
            och komedi till färgstarka karaktärsroller.
          </p>
          <div className="actions">
            <a className="primary" href="#media"><Play size={18} fill="currentColor" /> Se showreel</a>
            <a className="secondary" href="#cv"><Download size={18} /> Ladda ner CV</a>
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
          <h2>Energi, närvaro och precision på scen</h2>
          <p>
            Driven, mångsidig och alltid med hjärtat på scenen. Klara rör sig
            sömlöst mellan komedi, storslagna karaktärer och musikalisk precision.
          </p>
          <p>
            Oavsett vad hon gestaltar kastar hon sig in 100% och levererar
            alltid med energi och värme.
          </p>
          <dl>
            <div><dt>Röstläge</dt><dd> - </dd></div>
            <div><dt>Baserad i</dt><dd>Stockholm</dd></div>
          </dl>
        </div>
      </section>

      <section className="media" id="media">
        <h2>Rörligt material</h2>

        <div className="soundcloud-grid">
          <div className="soundcloud-player">
            <iframe
              title="Klara Thuresson – When the Clouds are Crying"
              width="100%"
              height="180"
              scrolling="no"
              frameBorder="0"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A822834217&color=%23ed9ca8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
            <div className="soundcloud-credit">
              <a href="https://soundcloud.com/klara-thuresson" title="Klara Thuresson" target="_blank" rel="noopener noreferrer">
                Klara Thuresson
              </a>
              <span> · </span>
              <a href="https://soundcloud.com/klara-thuresson/when-the-clouds-are-crying" title="When the Clouds are Crying" target="_blank" rel="noopener noreferrer">
                When the Clouds are Crying
              </a>
            </div>
          </div>

          <a
            className="youtube-player youtube-placeholder"
            href="https://youtu.be/Qw-1IIWYjfM?t=2183"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Öppna gymnasie-musikalen på YouTube från 36:23"
          >
            <span className="youtube-thumbnail" role="img" aria-label="Förhandsbild från gymnasie-musikalen">
              <img
                src="https://img.youtube.com/vi/Qw-1IIWYjfM/hqdefault.jpg"
                alt=""
              />
              <span className="youtube-play"><Play size={24} fill="currentColor" /></span>
              <span className="youtube-time">36:23</span>
            </span>
            <span className="youtube-credit">
              <small>Gymnasiet · musikal</small>
              <span>
                Öppna på YouTube <ArrowUpRight size={14} />
              </span>
            </span>
          </a>
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="section-label">Visuell portfolio</p>
            <h2>Bildgalleri</h2>
          </div>
          <span>{portraits.length} uttryck</span>
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
        <div className="cv-placeholder" aria-label="CV kommer snart">
          <div className="cv-placeholder-stripes" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p className="section-label">CV & meriter</p>
          <h2>Kommer snart</h2>
          <p>Utbildning, roller och meriter fylls på här.</p>
        </div>

        {/*
        <div className="cv-heading">
          <div>
            <p className="section-label">Meriter</p>
            <h2>Utbildning & erfarenhet</h2>
          </div>
          <a href="#download-cv"><Download size={14} /> Ladda ner PDF-CV</a>
        </div>
        <div className="timeline">
          <div>
            <p className="section-label">Utvalda roller / scen</p>
            <article><time>2025</time><h3>Queen of Hearts</h3><p>Ensemble / karaktär · Alice i Underlandet</p></article>
            <article><time>2024</time><h3>[Musikal / showproduktion]</h3><p>Teater / arena · [Rollnamn]</p></article>
          </div>
          <div>
            <p className="section-label">Utbildning</p>
            <article><time>2021–2024</time><h3>[Musikalartistprogrammet]</h3><p>[Skola] · Stockholm / Göteborg</p></article>
          </div>
        </div>
        */}
      </section>

      <section className="contact" id="contact">
        <p className="section-label">Hör av dig</p>
        <h2>Letar du efter din nästa artist?</h2>
        <p>Bokningar, auditions, samarbeten eller frågor — hör av dig direkt.</p>
        <div className="contact-actions">
          <a href="mailto:klara.p.thuresson@gmail.com"><Mail size={18} /> klara.p.thuresson@gmail.com</a>
          <a href="https://www.instagram.com/singing_klara?dmpr=OXQ4dnQ0d2J2c28w" target="_blank" rel="noopener noreferrer">
            @singing_klara <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
      <section className="gallery">
        <footer className="footer">
          © {new Date().getFullYear()} Klara · Alla rättigheter förbehållna
        </footer>
      </section>

    </main>
  )
}