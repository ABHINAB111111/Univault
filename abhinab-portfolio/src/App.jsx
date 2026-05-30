import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import { ArrowUpRight, Cog, Zap, Activity } from 'lucide-react';
import Cursor from './components/Cursor';
import { Gears, Piston } from './components/MechanicalElements';
import './index.css';

import userPhoto from './assets/images/user_photo.png';
import manufacturingImg from './assets/images/manufacturing.png';

const SKILLS = [
  'AutoCAD 2D/3D', 'Manufacturing', 'Thermodynamics', 'Fluid Mechanics',
  'Materials Science', 'Engineering Mechanics', 'DCA', 'Technical Writing'
];

const FadeUp = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleHero = useTransform(scrollYProgress, [0, 0.2], [1, 0.94]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="app-root">
      <Cursor />
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* ── Navigation ── */}
      <nav className="nav">
        <div className="nav-logo">ABHINAB BORAH</div>
        <div className="nav-links">
          <a href="#about"    className="nav-link">About</a>
          <a href="#research" className="nav-link">Research</a>
          <a href="#contact"  className="nav-link">Contact</a>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <section className="s s-hero" style={{ background: '#050505' }}>
        <Gears />

        {/* Name marquee */}
        <div className="marquee" style={{ marginBottom: '5rem' }}>
          <div className="marquee-inner">
            {[...Array(8)].map((_, i) => <span key={i}>ABHINAB BORAH&nbsp;&nbsp;</span>)}
          </div>
        </div>

        <motion.div className="g2" style={{ scale: scaleHero, position: 'relative', zIndex: 1 }}>
          <div style={{ paddingRight: '2vw' }}>
            <FadeUp>
              <div className="tag tag-red">MECHANICAL ENGINEER</div>
              <h1 className="hero-h1">
                CORE<br />
                <span className="hero-red glitch" data-text="ENGINEERING">ENGINEERING</span><br />
                EXCELLENCE.
              </h1>
            </FadeUp>
            <FadeUp delay={0.12}>
              <p style={{ marginTop: '2.5rem', opacity: 0.5, fontSize: '1.1rem', maxWidth: '460px', lineHeight: 1.75 }}>
                Undergraduate student at Dibrugarh University. Specialising in thermal sciences,
                manufacturing systems, and sustainable materials research.
              </p>
            </FadeUp>

            {/* CTA row */}
            <FadeUp delay={0.22}>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2.8rem', flexWrap: 'wrap' }}>
                <motion.a
                  href="#contact"
                  className="interactive"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.9rem 2rem', border: '1px solid var(--green)',
                    color: 'var(--green)', fontFamily: 'var(--mono)', fontSize: '0.7rem',
                    letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ background: 'rgba(0,255,136,0.08)', scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONNECT <ArrowUpRight size={14} />
                </motion.a>
                <motion.a
                  href="https://lnkd.in/g_2exd2u"
                  target="_blank" rel="noreferrer"
                  className="interactive"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.9rem 2rem', border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--mono)', fontSize: '0.7rem',
                    letterSpacing: '3px', textTransform: 'uppercase', textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff', scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  RESEARCH ↗
                </motion.a>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="photo-box">
              <div className="scanline" />
              <div className="photo-bw" style={{ backgroundImage: `url(${userPhoto})` }} />
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 3 }}>
                <p className="sub-lbl" style={{ opacity: 1, color: 'var(--green)', marginBottom: '0.3rem' }}>ID: ME-2025-DUIET</p>
                <p style={{ fontFamily: 'var(--heading)', fontWeight: 800, fontSize: '1rem' }}>ABHINAB BORAH</p>
              </div>
              {/* Status dot */}
              <div style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 3,
                display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: 'var(--green)',
                  boxShadow: '0 0 8px var(--green)',
                  animation: 'pulse 2s infinite',
                }} />
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', color: 'var(--green)', letterSpacing: '2px' }}>ACTIVE</span>
              </div>
            </div>
          </FadeUp>
        </motion.div>

        {/* Stats bar */}
        <div className="counter-grid" style={{ marginTop: '10vh', position: 'relative', zIndex: 1 }}>
          {[
            { label: 'RESEARCH PAPER', val: '01' },
            { label: 'CAD PROJECTS',   val: '12+' },
            { label: 'ENG. GRADE',     val: 'CORE' },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="counter-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              <div className="sub-lbl" style={{ marginBottom: '0.8rem' }}>{s.label}</div>
              <div className="counter-num">{s.val}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="s-divider" />

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" className="s" style={{ background: '#070707' }}>
        <Piston />
        <FadeUp>
          <div className="tag tag-grn">PROFESSIONAL DOSSIER</div>
          <h2 style={{
            fontFamily: 'Outfit', fontSize: 'clamp(2.5rem, 5vw, 6rem)',
            fontWeight: 900, textTransform: 'uppercase', margin: '2rem 0',
            position: 'relative', zIndex: 1, lineHeight: 0.9, letterSpacing: '-0.02em'
          }}>
            BEYOND THE<br /><span style={{ color: 'var(--red)' }}>CONVENTIONAL.</span>
          </h2>
        </FadeUp>

        <div className="g2" style={{ marginTop: '4rem', position: 'relative', zIndex: 1 }}>
          <FadeUp delay={0.1}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.85, opacity: 0.72, marginBottom: '2rem' }}>
              Currently pursuing a B.Tech in Mechanical Engineering at the Dibrugarh University Institute of
              Engineering and Technology (DUIET). Building a solid foundation in engineering mechanics,
              manufacturing processes, and thermal sciences.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, opacity: 0.42, marginBottom: '3rem' }}>
              Actively exploring tools and concepts relevant to modern mechanical engineering. My long-term
              goal is to grow into a competent mechanical engineer contributing to large-scale industrial projects.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
              {SKILLS.map((s, i) => (
                <motion.span
                  key={i} className="pill"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ borderColor: 'var(--green)', color: 'var(--green)' }}
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </FadeUp>

          <div>
            {[
              { icon: Zap,      color: 'var(--red)',   title: 'Thermal Sciences',   desc: 'Thermodynamics, heat transfer, and fluid mechanics fundamentals for real-world applications.' },
              { icon: Cog,      color: 'var(--green)', title: 'Manufacturing',       desc: 'Optimised industrial production processes, materials selection, and quality control.' },
              { icon: Activity, color: 'var(--blue)',  title: 'Mechanics',           desc: 'Statics, dynamics, and applied mechanical systems including CAD modelling.' },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.12}>
                <motion.div
                  className="v-item"
                  style={{ borderLeftColor: 'rgba(255,255,255,0.08)', marginBottom: '0.5rem' }}
                  whileHover={{ borderLeftColor: item.color }}
                >
                  <item.icon size={16} color={item.color} />
                  <h3 style={{ fontFamily: 'Outfit', fontSize: '1.4rem', margin: '1rem 0 0.5rem', fontWeight: 800 }}>{item.title}</h3>
                  <p style={{ opacity: 0.45, fontSize: '0.88rem', lineHeight: 1.7 }}>{item.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <div className="s-divider" />

      {/* ══════════ RESEARCH ══════════ */}
      <section id="research" className="s" style={{ background: '#050505' }}>
        <div className="marquee" style={{ marginBottom: '6rem', transform: 'rotate(-1deg)', background: 'var(--red)', border: 'none' }}>
          <div className="marquee-inner">
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: 'black', WebkitTextStroke: 'none', fontSize: '3.5vw' }}>
                SUSTAINABLE MATERIALS • WASTE PLASTICS • PEER-REVIEWED •&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        <FadeUp>
          <div className="tag tag-red">SCHOLARLY WORK · NOV 2025</div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <motion.div className="card card-red interactive" whileHover={{ scale: 1.005 }} style={{ marginTop: '3rem' }}>
            <div className="g2" style={{ gap: '4vw', alignItems: 'start' }}>
              <div>
                <p className="sub-lbl" style={{ color: 'var(--red)', marginBottom: '0.5rem' }}>
                  Asian Review of Civil Engineering · Vol. 14, No. 2
                </p>
                <h3 className="pub-title">
                  Mechanical Performance and Engineering Applications of Waste Plastic–Derived Materials: A Structured Review
                </h3>
                <p style={{ lineHeight: 1.85, opacity: 0.6, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
                  Synthesises literature on the mechanical behaviour and engineering applications of waste plastic–derived
                  materials. Highlights research trends and suggests future directions for sustainable engineering.
                </p>
                <div className="g3" style={{ gap: '1rem' }}>
                  {[
                    { label: 'METHOD', val: 'Literature Review' },
                    { label: 'FOCUS',  val: 'Sustainability' },
                    { label: 'JOURNAL',val: 'Peer-Reviewed' },
                  ].map((x, i) => (
                    <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,62,62,0.04)', borderLeft: '2px solid rgba(255,62,62,0.4)' }}>
                      <div className="sub-lbl" style={{ marginBottom: '0.4rem' }}>{x.label}</div>
                      <div style={{ fontFamily: 'Space Grotesk', fontSize: '0.85rem', fontWeight: 600 }}>{x.val}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <motion.a
                  href="https://lnkd.in/g_2exd2u"
                  target="_blank" rel="noreferrer"
                  className="interactive"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '110px', height: '110px',
                    border: '1px solid var(--red)', borderRadius: '50%', color: 'var(--red)',
                    textDecoration: 'none', alignSelf: 'flex-end',
                  }}
                  whileHover={{ background: 'var(--red)', color: 'black', scale: 1.06 }}
                >
                  <ArrowUpRight size={38} strokeWidth={1.5} />
                </motion.a>
                <img
                  src={manufacturingImg}
                  style={{ width: '100%', height: '230px', objectFit: 'cover', opacity: 0.55, filter: 'grayscale(75%)' }}
                  alt="Research visual"
                />
              </div>
            </div>
          </motion.div>
        </FadeUp>
      </section>

      <div className="s-divider" />

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" className="s" style={{ background: '#050505', minHeight: '85vh' }}>
        <div className="marquee" style={{ background: 'var(--green)', marginBottom: '6rem', transform: 'rotate(1deg)', border: 'none' }}>
          <div className="marquee-inner">
            {[...Array(6)].map((_, i) => (
              <span key={i} style={{ color: 'black', fontSize: '3.5vw' }}>
                STAY IN MOTION • OPEN TO OPPORTUNITIES •&nbsp;&nbsp;
              </span>
            ))}
          </div>
        </div>

        <FadeUp>
          <div className="tag tag-grn">GET IN TOUCH</div>
          <h2
            className="glitch" data-text="LET'S CONNECT."
            style={{
              fontFamily: 'Outfit', fontSize: 'clamp(3rem, 7vw, 8rem)',
              fontWeight: 900, textTransform: 'uppercase',
              marginTop: '1.5rem', lineHeight: 0.88, letterSpacing: '-0.03em'
            }}
          >
            LET'S CONNECT.
          </h2>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4vw', marginTop: '5rem', alignItems: 'start' }}>
          <FadeUp delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'EMAIL',    href: 'mailto:abhinabborah@gmail.com' },
                { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/abhinab-borah-017bb937a/' },
              ].map(({ label, href }) => (
                <motion.a
                  key={label}
                  className="clink interactive"
                  href={href}
                  target="_blank" rel="noreferrer"
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{label}</span>
                  <span className="arrow">↗</span>
                </motion.a>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="contact-card">
                <div className="sub-lbl" style={{ marginBottom: '0.8rem' }}>📍 LOCATION</div>
                <p style={{ fontFamily: 'Outfit', fontSize: '1.8rem', fontWeight: 800 }}>Dibrugarh, Assam</p>
              </div>
              <div className="contact-card" style={{ borderColor: 'rgba(0,255,136,0.25)', background: 'rgba(0,255,136,0.03)' }}>
                <div className="sub-lbl" style={{ marginBottom: '0.6rem', color: 'var(--green)' }}>◉ STATUS</div>
                <p style={{ fontFamily: 'Outfit', fontSize: '1.1rem', fontWeight: 700, color: 'var(--green)' }}>Open to Internships</p>
              </div>
              <div className="contact-card">
                <div className="sub-lbl" style={{ marginBottom: '0.6rem' }}>🎓 INSTITUTION</div>
                <p style={{ fontFamily: 'Outfit', fontSize: '0.9rem', fontWeight: 600, opacity: 0.7 }}>DUIET — Dibrugarh University</p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '8rem', paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          opacity: 0.3, fontSize: '0.65rem', fontFamily: 'var(--mono)', letterSpacing: '3px'
        }}>
          <span>ABHINAB BORAH © 2025</span>
          <span>MECHANICAL ENGINEER · DUIET</span>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--green); }
          50%       { opacity: 0.4; box-shadow: 0 0 4px var(--green); }
        }
      `}</style>
    </div>
  );
};

export default App;
