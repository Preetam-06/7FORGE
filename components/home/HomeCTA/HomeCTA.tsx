"use client";

import { motion } from "framer-motion";

import styles from "./HomeCTA.module.css";

export default function HomeCTA() {
  return (
    <section
      id="home-cta"
      className={styles.section}
      aria-labelledby="home-cta-heading"
    >
      <div className={styles.container}>

        <motion.div
          className={styles.content}

          initial={{
            opacity: 0,
            y: 30,
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
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >

          <p className={styles.eyebrow}>
            HAVE SOMETHING WORTH BUILDING?
          </p>

          <h2
            id="home-cta-heading"
            className={styles.heading}
          >
            Let&apos;s engineer
            <span>something useful.</span>
          </h2>

          <p className={styles.description}>
            Tell us what you&apos;re trying to build,
            improve, automate, or solve. We&apos;ll
            start with the problem and work from there.
          </p>

          <a
            href="/contact"
            className={styles.button}
          >
            Start a Project

            <span aria-hidden="true">
              →
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  );
}