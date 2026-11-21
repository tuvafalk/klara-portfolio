import '../App.css'

const tracks = [
  { number: '01', title: 'Velvet Skin', year: '2026', type: 'Single' },
  { number: '02', title: 'After the Fire', year: '2025', type: 'EP' },
  { number: '03', title: 'Honey, I’m Home', year: '2025', type: 'Single' },
]

const shows = [
  { date: '12 SEP', city: 'Berlin', venue: 'Lido' },
  { date: '18 SEP', city: 'Hamburg', venue: 'Nochtwache' },
  { date: '04 OCT', city: 'Copenhagen', venue: 'Rust' },
]

export default function V1() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Klara home">
          Klara
          <span className="brand-dot" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#music">Music</a>
          <a href="#shows">Shows</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span /> Independent artist · Berlin</div>
        <h1>
          <span>Singing</span>
          <span>my way</span>
          <em>out loud.</em>
        </h1>

        <div className="portrait" role="img" aria-label="Portrait placeholder">
          <div className="portrait-sun" />
          <div className="portrait-head">
            <div className="portrait-hair" />
            <div className="portrait-face">
              <div className="portrait-eye left" />
              <div className="portrait-eye right" />
              <div className="portrait-mouth" />
            </div>
          </div>
          <div className="portrait-neck" />
          <div className="portrait-body" />
          <span className="scribble scribble-one">♪</span>
          <span className="scribble scribble-two">✦</span>
        </div>

        <a className="play-link" href="#music">
          <span className="play-icon">▶</span>
          Listen now
        </a>
      </section>

      <section className="manifesto" aria-label="Artist statement">
        <p className="eyebrow">About the artist</p>
        <p className="manifesto-copy">
          Soul, pop and a little
          <strong> beautiful trouble.</strong>
        </p>
        <p className="manifesto-small">
          Klara makes fearless songs for soft hearts—intimate stories wrapped
          in glitter, grit and a voice that refuses to whisper.
        </p>
      </section>

      <section className="music" id="music">
        <div className="section-heading">
          <p className="eyebrow">Latest release</p>
          <h2>Turn it up.</h2>
        </div>

        <div className="featured">
          <div className="featured-art">
            <div className="record">K</div>
            <span>2026</span>
          </div>
          <div className="featured-info">
            <p>New single</p>
            <h3>Velvet Skin</h3>
            <a href="#" aria-label="Stream Velvet Skin">Stream now ↗</a>
          </div>
        </div>

        <div className="track-list">
          {tracks.map((track) => (
            <a className="track" href="#" key={track.number}>
              <span className="track-number">{track.number}</span>
              <span className="track-name">
                <strong>{track.title}</strong>
                <small>{track.type} · {track.year}</small>
              </span>
              <span className="track-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="shows" id="shows">
        <div className="section-heading">
          <p className="eyebrow">Come say hello</p>
          <h2>On the road.</h2>
        </div>
        <div className="show-list">
          {shows.map((show) => (
            <article className="show" key={`${show.date}-${show.city}`}>
              <time>{show.date}</time>
              <div><h3>{show.city}</h3><p>{show.venue}</p></div>
              <a href="#" aria-label={`Tickets for ${show.city}`}>Tickets ↗</a>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>Let’s make some noise.</p>
        <a className="email-link" href="mailto:hello@klara-music.com">hello@klara-music.com</a>
        <div className="socials">
          <a href="#">Instagram</a><a href="#">TikTok</a><a href="#">Spotify</a>
        </div>
        <small>© 2026 KLARA</small>
      </footer>
    </main>
  )
}
