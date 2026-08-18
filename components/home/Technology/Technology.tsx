"use client";

import { motion } from "framer-motion";

import { technology } from "./technology-data";
import styles from "./technology.module.css";

export default function Technology() {
  return (
    <section
      id="technology"
      className={styles.section}
    >
      <div className={styles.container}>

        {/* =====================================
            HEADER
        ===================================== */}

        <div className={styles.header}>

          <div className={styles.headingArea}>

            <p className={styles.eyebrow}>
              TECHNOLOGY
            </p>

            <h2 className={styles.heading}>
              Technologies we
              <span>
                work with.
              </span>
            </h2>

          </div>


          <p className={styles.intro}>
            We choose the technology according
            to the problem, requirements, and
            scale of each solution.
          </p>

        </div>


        {/* =====================================
            TECHNOLOGY GRID
        ===================================== */}

        <div className={styles.techGrid}>

          {technology.map((tech) => {

            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.id}
                className={styles.techItem}

                whileHover={{
                  scale: 1.04,
                }}

                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >

                {/* =================================
                    ICON
                ================================= */}

                <div
                  className={
                    styles.iconWrapper
                  }
                >
                  <Icon
                    className={styles.icon}
                    aria-hidden="true"
                  />
                </div>


                {/* =================================
                    NAME
                ================================= */}

                <div
                  className={
                    styles.techContent
                  }
                >

                  <span
                    className={
                      styles.techName
                    }
                  >
                    {tech.name}
                  </span>

                  <span
                    className={
                      styles.techCategory
                    }
                  >
                    {tech.category}
                  </span>

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* =====================================
            BOTTOM LINE
        ===================================== */}

        <div className={styles.bottomLine}>

          <span>
            THE RIGHT TOOL FOR THE RIGHT PROBLEM
          </span>

          <span
            className={styles.bottomAccent}
          />

        </div>

      </div>
    </section>
  );
}
