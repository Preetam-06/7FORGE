"use client";

import Link from "next/link";
import {
  SiGithub,
  SiInstagram,
  
} from "react-icons/si";
import { Mail } from "lucide-react";

import styles from "../home/Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* ================================
            MAIN FOOTER
        ================================= */}

        <div className={styles.mainFooter}>

          {/* ================================
              BRAND
          ================================= */}

          <div className={styles.brandColumn}>

            <Link
              href="/"
              className={styles.brand}
              aria-label="7Forge Home"
            >
              <img 
                src="/favicon.png"
                alt="7Forge"
                width={150}
                height={60}
                className={styles.logo}
              />
            </Link>

            <p className={styles.tagline}>
              Engineering digital solutions
              <br />
              that move businesses forward.
            </p>

            {/* SOCIAL LINKS */}

            <div className={styles.socials}>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
                aria-label="LinkedIn"
              >in</a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
                aria-label="GitHub"
              >
                <SiGithub />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
                aria-label="Instagram"
              >
                <SiInstagram />
              </a>

              <a
                href="mailto:contact.7forge@gmail.com"
                className={styles.social}
                aria-label="Email 7Forge"
              >
                <Mail />
              </a>

            </div>
          </div>


          {/* ================================
              SOLUTIONS
          ================================= */}

          <div className={styles.column}>

            <h3>
              SOLUTIONS
            </h3>

            <nav aria-label="Solutions">

              <Link href="/solutions">
                Web Development
                <span>›</span>
              </Link>

              <Link href="/solutions">
                Backend &amp; APIs
                <span>›</span>
              </Link>

              <Link href="/solutions">
                Automation
                <span>›</span>
              </Link>

              <Link href="/solutions">
                AI / ML
                <span>›</span>
              </Link>

              <Link href="/solutions">
                Custom Systems
                <span>›</span>
              </Link>

            </nav>

          </div>


          {/* ================================
              COMPANY
          ================================= */}

          <div className={styles.column}>

            <h3>
              COMPANY
            </h3>

            <nav aria-label="Company">

              <Link href="/">
                Home
                <span>›</span>
              </Link>

              <Link href="/about">
                About Us
                <span>›</span>
              </Link>

              <Link href="/work">
                Our Work
                <span>›</span>
              </Link>

              <Link href="/pricing">
                Pricing
                <span>›</span>
              </Link>

              <Link href="/contact">
                Contact Us
                <span>›</span>
              </Link>

            </nav>

          </div>


          {/* ================================
              EXPLORE
          ================================= */}

          <div className={styles.column}>

            <h3>
              EXPLORE
            </h3>

            <nav aria-label="Explore">

              <Link href="/#solve">
                What We Solve
                <span>›</span>
              </Link>

              <Link href="/#solutions">
                Solutions
                <span>›</span>
              </Link>

              <Link href="/#technology">
                Technology
                <span>›</span>
              </Link>

              <Link href="/#work">
                Selected Work
                <span>›</span>
              </Link>

              <Link href="/#about">
                About 7Forge
                <span>›</span>
              </Link>

              <Link href="/contact">
                Start a Project
                <span>›</span>
              </Link>

            </nav>

          </div>


          {/* ================================
              STAY IN TOUCH
          ================================= */}

          <div className={styles.newsletter}>

            <h3>
              STAY IN TOUCH
            </h3>

            <p>
              Subscribe to our newsletter
              for insights, updates and
              engineering ideas.
            </p>

            <form
              className={styles.subscribeForm}
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >

              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                aria-label="Email address"
                required
              />

              <button type="submit">
                Subscribe
              </button>

            </form>

            <div className={styles.subscribeNote}>

              <span className={styles.shield}>
                ◇
              </span>

              <span>
                No spam. Unsubscribe anytime.
              </span>

            </div>

          </div>

        </div>


        {/* ================================
            DIVIDER
        ================================= */}

        <div className={styles.divider} />


        {/* ================================
            BOTTOM FOOTER
        ================================= */}

        <div className={styles.bottomFooter}>

          <p>
            © {new Date().getFullYear()} 7Forge.
            All rights reserved.
          </p>

          <div className={styles.bottomRight}>

            <span>
              Built with intention.
            </span>

            <span className={styles.dot}>
              •
            </span>

            <span>
              Made for impact.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}