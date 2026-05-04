import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: EzaBlackHome,
})

const celebrities = [
  {
    name: 'Ranveer Singh',
    role: 'Bollywood Maverick',
    worn: 'Worn: Met Gala 2024',
    img: 'https://placehold.co/400x450/222/D4AF37?text=RANVEER+SINGH&font=montserrat',
  },
  {
    name: 'Virat Kohli',
    role: 'Cricket Legend',
    worn: 'Custom Tuxedo $28K',
    img: 'https://placehold.co/400x450/222/D4AF37?text=VIRAT+KOHLI&font=montserrat',
  },
  {
    name: 'Gigi Hadid',
    role: 'Top Model',
    worn: 'Runway Exclusive $15K',
    img: 'https://placehold.co/400x450/222/D4AF37?text=GIGI+HADID&font=montserrat',
  },
  {
    name: 'Zendaya',
    role: 'Hollywood Royalty',
    worn: 'Couture Gown $45K',
    img: 'https://placehold.co/400x450/222/D4AF37?text=ZENDAYA&font=montserrat',
  },
  {
    name: 'Hardik Pandya',
    role: 'Cricketer & Style Icon',
    worn: 'Black Label $22K',
    img: 'https://placehold.co/400x450/222/D4AF37?text=HARDIK+PANDYA&font=montserrat',
  },
  {
    name: 'Naomi Campbell',
    role: 'Supermodel',
    worn: 'Legacy Edition $39K',
    img: 'https://placehold.co/400x450/222/D4AF37?text=NAOMI+CAMPBELL&font=montserrat',
  },
]

const collection = [
  {
    name: 'Obsidian Peak Blazer',
    price: '$12,800',
    desc: '100% Vicuña wool, 24k gold buttons. Worn by Timothée Chalamet.',
    img: 'https://placehold.co/500x600/1a1a1a/D4AF37?text=MASTERPIECE+BLAZER&font=montserrat',
  },
  {
    name: 'Gilded Moto Jacket',
    price: '$19,500',
    desc: 'Italian lambskin, genuine gold leaf details. Naomi Campbell exclusive.',
    img: 'https://placehold.co/500x600/1a1a1a/D4AF37?text=GOLD+LEATHER+JACKET&font=montserrat',
  },
  {
    name: 'Midnight Empress Gown',
    price: '$28,700',
    desc: 'Hand-embroidered Swarovski crystals. Seen on Zendaya at Oscars.',
    img: 'https://placehold.co/500x600/1a1a1a/D4AF37?text=SILK+GOWN+CRYSTAL&font=montserrat',
  },
  {
    name: 'Royal Velvet Tuxedo',
    price: '$14,200',
    desc: "Virat Kohli's match-day favorite, midnight velvet + satin lapels.",
    img: 'https://placehold.co/500x600/1a1a1a/D4AF37?text=CRICKET+VELVET+SUIT&font=montserrat',
  },
]

function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div className={`toast${visible ? ' show' : ''}`}>{message}</div>
  )
}

function EzaBlackHome() {
  const [toast, setToast] = useState({ visible: false, message: '' })

  function showToast(message: string) {
    setToast({ visible: true, message })
    setTimeout(() => setToast({ visible: false, message: '' }), 3000)
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>EZABLACK<span>.</span></h1>
          <div style={{ fontSize: '0.7rem', letterSpacing: '2px', color: '#aaa' }}>BY SUMIT</div>
        </div>
        <ul className="nav-links">
          <li><a href="#atelier">ATELIER</a></li>
          <li><a href="#runway">RUNWAY</a></li>
          <li><a href="#collection">COLLECTION</a></li>
          <li><a href="#icons">ICONS</a></li>
        </ul>
        <div className="instagram-handle">
          <i className="fab fa-instagram" style={{ marginRight: 8, color: '#D4AF37' }}></i>
          @s_sumit_0s
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero" id="atelier">
          <div className="hero-content">
            <div className="hero-badge">✦ LIMITÉE EDITION ✦</div>
            <h2>
              Where <span className="gold">Dark Opulence</span><br />
              Meets Global Glamour
            </h2>
            <p>
              From Mumbai to Milan, EZABLACK dresses the world's most influential icons.
              Experience couture that redefines power and grace.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-gold"
                style={{ padding: '12px 30px', borderRadius: '40px' }}
                onClick={() => showToast('🛍 Inquiries open by appointment — DM @s_sumit_0s')}
              >
                SHOP NOW →
              </button>
              <button
                className="btn-outline-gold"
                style={{ padding: '12px 30px', borderRadius: '40px' }}
                onClick={() => {
                  document.getElementById('icons')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                CELEBRITY EDIT
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat"><h4>50+</h4><span>Global Icons</span></div>
              <div className="stat"><h4>$2M+</h4><span>Archival Looks</span></div>
              <div className="stat"><h4>12K</h4><span>Waitlist</span></div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://placehold.co/500x600/1a1a1a/D4AF37?text=EZABLACK+HAUTE&font=montserrat"
              alt="EZABLACK luxury fashion"
            />
          </div>
        </section>

        {/* Icons / Celebrities */}
        <section className="celeb-section" id="icons">
          <div className="section-head">
            <h3>✦ ICONS IN EZABLACK ✦</h3>
            <p>Celebrities · Cricketers · Supermodels · Global Trendsetters</p>
          </div>
          <div className="celeb-grid">
            {celebrities.map((celeb) => (
              <div className="celeb-card" key={celeb.name}>
                <div
                  className="celeb-img"
                  style={{ backgroundImage: `url('${celeb.img}')` }}
                />
                <div className="celeb-info">
                  <h4>{celeb.name}</h4>
                  <p>{celeb.role}</p>
                  <div className="price-tag">{celeb.worn}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collection */}
        <section className="collection" id="collection">
          <div className="section-head">
            <h3>THE BLACK SERIES — HAUTE COUTURE</h3>
            <p>Each piece handcrafted, worn by global elite. Ultra-limited units.</p>
          </div>
          <div className="product-row">
            {collection.map((item) => (
              <div className="product-card" key={item.name}>
                <div
                  className="product-img"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="product-details">
                  <div className="product-title">
                    <span>{item.name}</span>
                    <span className="product-price">{item.price}</span>
                  </div>
                  <div className="desc">{item.desc}</div>
                  <button
                    className="buy-btn"
                    onClick={() => showToast('📩 Inquiry sent — our atelier will contact you shortly')}
                  >
                    INQUIRE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Spotlight / Testimonial */}
        <section className="testimonial" id="runway">
          <div className="section-head">
            <h3>GLOBAL SPOTLIGHT</h3>
            <p>From Paris fashion week to Mumbai, EZABLACK defines international luxury</p>
          </div>
          <div className="quote">
            <i className="fas fa-quote-left gold" style={{ marginRight: 10 }}></i>
            EZABLACK isn't just clothing — it's a statement of rarity. I wore their
            diamond-embroidered coat to the World Cup afterparty, and the world stopped.
            <strong style={{ display: 'block', marginTop: 15 }}>
              — JAMES RODRIGUEZ (Colombian Football Icon)
            </strong>
          </div>
          <div className="tags">
            <span className="tag"><i className="fas fa-globe" style={{ marginRight: 6 }}></i>K-POP STAR JIMIN</span>
            <span className="tag"><i className="fas fa-crown" style={{ marginRight: 6 }}></i>BRITISH VOGUE</span>
            <span className="tag"><i className="fas fa-futbol" style={{ marginRight: 6 }}></i>MBAPPÉ CUSTOM KIT</span>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Own what the legends wear.</h2>
          <p>
            Private commissions, exclusive drops, and celebrity archival pieces — available
            only through direct consultation with Sumit.
          </p>
          <a
            href="https://www.instagram.com/s_sumit_0s/"
            target="_blank"
            rel="noopener noreferrer"
            className="ig-btn"
          >
            <i className="fab fa-instagram"></i>
            Follow @s_sumit_0s
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} EZABLACK by Sumit. All rights reserved. — Luxury Haute Couture.</p>
      </footer>

      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}
