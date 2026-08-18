
import styles from "./Hero.module.css";

export default function Hero() {
  // A clean, pre-calculated mathematical sine wave path
  const sineWavePath = "M 0 100 C 150 0, 150 200, 300 100 C 450 0, 450 200, 600 100 C 750 0, 750 200, 900 100 C 1050 0, 1050 200, 1200 100 C 1350 0, 1350 200, 1500 100";

  return (
    <section id="home" className={styles.hero}>
      {/* Background glow */}
      <div className={styles.glow} aria-hidden="true" />

      {/* Decorative Sine Waves Container */}
      <div className={styles.waves} aria-hidden="true">
        <svg viewBox="0 0 1500 200" preserveAspectRatio="none" className={styles.waveOne}>
          <path d={sineWavePath} fill="none" />
        </svg>
        <svg viewBox="0 0 1500 200" preserveAspectRatio="none" className={styles.waveTwo}>
          <path d={sineWavePath} fill="none" />
        </svg>
        <svg viewBox="0 0 1500 200" preserveAspectRatio="none" className={styles.waveThree}>
          <path d={sineWavePath} fill="none" />
        </svg>
      </div>

      {/* Main hero content */}
      <div className={styles.container}>
        {/* LEFT — TEXT */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>DIGITAL ENGINEERING FOR</p>
          <h1 className={styles.heading}>
            <span className={styles.headingLine}>Problems</span>
            <span className={styles.headingAccent}>Worth Solving.</span>
          </h1>
          <p className={styles.description}>
            We identify real business problems and engineer practical digital solutions that move businesses forward.
          </p>
          <div className={styles.actions}>
            <a href="/contact" className={styles.primaryButton}>
              Start a Project
              <span aria-hidden="true">→</span>
            </a>
            <a href="#work" className={styles.secondaryButton}>See Our Work</a>
          </div>
        </div>

        {/* RIGHT — LOGO */}
        <div className={styles.logoArea}>
          <div className={styles.logoGlow} aria-hidden="true" />
          <img
            src="favicon.png"
            alt="7Forge"
            width={540}
            height={540}
            className={styles.logo}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#solve" className={styles.scrollIndicator} aria-label="Scroll to next section">
        <span aria-hidden="true">⌄</span>
      </a>
    </section>
  );
}