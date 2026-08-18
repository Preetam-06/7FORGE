"use client";

import { motion } from "framer-motion";

import styles from "./About.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={styles.section}
    >
      <div className={styles.container}>

        {/* TOP LABEL */}

        <div className={styles.topLine}>
          <span>
            ABOUT 7FORGE
          </span>

          <span
            className={styles.line}
            aria-hidden="true"
          />

          <span>
            WHO WE ARE
          </span>
        </div>


        {/* MAIN INTRO */}

        <div className={styles.companyIntro}>

          <motion.div
            className={styles.headingArea}

            initial={{
              opacity: 0,
              x: -30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
              amount: 0.3,
            }}

            transition={{
              duration: 0.6,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >

            <p className={styles.eyebrow}>
              DIGITAL ENGINEERING STUDIO
            </p>

            <h2 className={styles.heading}>
              We build around
              <span>
                real problems.
              </span>
            </h2>

          </motion.div>


          <motion.div
            className={styles.companyText}

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.3,
            }}

            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >

            <p>
              7Forge is a digital engineering
              studio focused on building practical
              software solutions for real business
              problems.
            </p>

            <p>
              We combine design, engineering,
              automation, and emerging technologies
              to turn ideas into usable digital
              products.
            </p>

          </motion.div>

        </div>


        {/* PRINCIPLES */}

        <div className={styles.principles}>

          <div className={styles.principle}>
            <span>01</span>

            <h3>
              Problem First
            </h3>

            <p>
              We understand the requirement
              before choosing the technology.
            </p>
          </div>


          <div className={styles.principle}>
            <span>02</span>

            <h3>
              Practical Engineering
            </h3>

            <p>
              We focus on solutions that can
              actually be built, maintained,
              and used.
            </p>
          </div>


          <div className={styles.principle}>
            <span>03</span>

            <h3>
              Built to Evolve
            </h3>

            <p>
              We design systems with future
              improvements and growth in mind.
            </p>
          </div>

        </div>


        {/* PAGE CTA */}

        <motion.div
          className={styles.aboutCta}

          initial={{
            opacity: 0,
            y: 15,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
        >

          <a
            href="/about"
            className={styles.ctaLink}
          >
            <span>
              DISCOVER 7FORGE
            </span>

            <span
              className={styles.ctaArrow}
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  );
}