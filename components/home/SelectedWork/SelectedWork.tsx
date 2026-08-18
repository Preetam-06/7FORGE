"use client";

import { motion } from "framer-motion";

import { work } from "./work";
import styles from "./SelectedWork.module.css";

export default function SelectedWork() {
  return (
    <section
      id="work"
      className={styles.section}
    >
      <div className={styles.container}>

        {/* SECTION HEADER */}

        <div className={styles.headingArea}>

          <div className={styles.headingTop}>
            <p className={styles.eyebrow}>
              SELECTED WORK
            </p>
          </div>

          <h2 className={styles.heading}>
            Ideas brought
            <span>to life.</span>
          </h2>

          <p className={styles.intro}>
            A selection of concepts, digital
            experiences and systems we&apos;re
            exploring at 7Forge.
          </p>

        </div>


        {/* WORK GRID */}

        <div className={styles.workGrid}>

          {work.map(
            (project, index) => (

              <motion.article
                key={project.id}
                className={styles.project}

                initial={{
                  opacity: 0,
                  y: 35,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >

                {/* IMAGE */}

                <div
                  className={
                    styles.imageWrapper
                  }
                >

                  <div
                    className={
                      styles.projectImage
                    }
                    style={{
                      backgroundImage:
                        `url(${project.image})`,
                    }}
                  />

                  <div
                    className={
                      styles.imageOverlay
                    }
                  />

                  <div
                    className={
                      styles.imageNumber
                    }
                  >
                    {project.id}
                  </div>

                  <div
                    className={
                      styles.imageType
                    }
                  >
                    {project.type}
                  </div>

                </div>


                {/* PROJECT INFORMATION */}

                <div
                  className={
                    styles.projectInfo
                  }
                >

                  <div
                    className={
                      styles.projectMeta
                    }
                  >

                    <span>
                      {project.category}
                    </span>

                    <span
                      className={
                        styles.metaLine
                      }
                    />

                    <span>
                      {project.type}
                    </span>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p
                    className={
                      styles.description
                    }
                  >
                    {project.description}
                  </p>

                </div>

              </motion.article>
            )
          )}

        </div>


        {/* SHOWCASE CTA */}

        <div className={styles.bottomLine}>

          <a
            href="/work"
            className={styles.showcaseLink}
          >
            <span>
              EXPLORE THE FULL SHOWCASE
            </span>

            <span
              className={styles.bottomAccent}
              aria-hidden="true"
            />

            
          </a>

        </div>

      </div>
    </section>
  );
}