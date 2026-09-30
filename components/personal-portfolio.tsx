import { ArrowDown, ArrowUpRight, Brain, Code2, Layers3, Sparkles } from 'lucide-react'

const learningAreas = [
  {
    number: '01',
    icon: Brain,
    title: 'How people think',
    description:
      'Exploring cognitive science, memory, and the small details that shape how we experience the world.',
    tag: 'Psychology',
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Technology for people',
    description:
      'Learning how human-computer interaction can make digital spaces more intuitive and accessible.',
    tag: 'HCI + accessibility',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Ideas into code',
    description:
      'Building my computer science foundations and finding thoughtful ways to solve everyday problems.',
    tag: 'Computer science',
  },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Ryan Gisha Ndayishimiye, home">
        <span className="wordmark-mark">R</span>
        <span>Ryan Gisha Ndayishimiye</span>
      </a>
      <nav aria-label="Main navigation" className="site-nav">
        <a href="#about">About</a>
        <a href="#currently">Currently</a>
        <a className="nav-contact" href="#contact">
          Say hello <ArrowUpRight aria-hidden="true" size={15} />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> MACEWAN UNIVERSITY · EDMONTON, AB</p>
        <h1 id="hero-title">Curious about<br />people <span className="ampersand">&amp;</span> <em>possibility.</em></h1>
        <p className="hero-description">
          I'm Ryan — a student bringing psychology and computer science together to understand people and build things that work better for them.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#currently">A little about me <ArrowDown aria-hidden="true" size={16} /></a>
          <span className="hero-note">Psychology + Computer Science</span>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-orbit orbit-three" />
        <div className="art-core"><Sparkles size={33} strokeWidth={1.35} /></div>
        <span className="art-label label-top">people</span>
        <span className="art-label label-bottom">possibility</span>
        <span className="art-node node-one" />
        <span className="art-node node-two" />
        <span className="art-node node-three" />
        <div className="art-caption"><span>01 / 02</span><span>Two fields. One curious mind.</span></div>
      </div>
      <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><span className="bottomline-rule" /><span>01 — 03</span></div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-label"><span>01</span><span className="section-label-line" /><span>A BIT ABOUT ME</span></div>
      <div className="about-content">
        <h2 id="about-title">Different lenses.<br /><em>Connected ideas.</em></h2>
        <div className="about-text">
          <p>
            I'm pursuing a Bachelor's degree in Psychology and Computer Science at MacEwan University. I'm drawn to the questions that sit between the two: how people think, how they interact with technology, and how we can make those experiences more human.
          </p>
          <div className="interest-list" aria-label="Interests">
            <span>Cognitive science</span><span>Human-computer interaction</span><span>Accessible technology</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CurrentlySection() {
  return (
    <section className="currently-section" id="currently" aria-labelledby="currently-title">
      <div className="section-label"><span>02</span><span className="section-label-line" /><span>ON MY MIND LATELY</span></div>
      <div className="currently-heading">
        <div>
          <p className="eyebrow">ALWAYS A WORK IN PROGRESS</p>
          <h2 id="currently-title">Curious about <em>what's next.</em></h2>
        </div>
        <p className="currently-intro">A few things I'm exploring, building, and learning right now.</p>
      </div>
      <div className="learning-grid">
        {learningAreas.map(({ number, icon: Icon, title, description, tag }) => (
          <article className="learning-card" key={number}>
            <div className="card-topline"><span>{number}</span><Icon aria-hidden="true" size={21} strokeWidth={1.6} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="card-tag">{tag}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-label section-label-light"><span>03</span><span className="section-label-line" /><span>LET'S CONNECT</span></div>
      <div className="contact-content">
        <div>
          <p className="eyebrow contact-eyebrow">HAVE A QUESTION OR AN IDEA?</p>
          <h2 id="contact-title">I'd love to<br /><em>hear from you.</em></h2>
        </div>
        <div className="contact-cta">
          <p>Always happy to connect with curious people, fellow students, and anyone working at the intersection of people and technology.</p>
          <a className="email-link" href="mailto:gisharyan04@gmail.com">
            gisharyan04@gmail.com <ArrowUpRight aria-hidden="true" size={18} />
          </a>
          <a className="email-link phone-link" href="tel:+18254616185" aria-label="Call Ryan at 825-461-6185">
            825-461-6185 <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
      <footer className="site-footer"><a className="footer-mark" href="#home">RGN</a><span>Made with curiosity in Edmonton, Alberta.</span><a href="#home">Back to top ↑</a></footer>
    </section>
  )
}

export function PersonalPortfolio() {
  return (
    <main className="portfolio-shell">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <CurrentlySection />
      <ContactSection />
    </main>
  )
}

export default PersonalPortfolio
