"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { solutions } from "./solutions-data";
import styles from "./sol.module.css";

const AUTO_PLAY_TIME = 5000;

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sineWavePath =
    "M 0 100 C 150 0, 150 200, 300 100 C 450 0, 450 200, 600 100 C 750 0, 750 200, 900 100 C 1050 0, 1050 200, 1200 100 C 1350 0, 1350 200, 1500 100";

  const total = solutions.length;

  const getIndex = (index: number) => {
    return (index + total) % total;
  };

  const previousIndex =
    getIndex(activeIndex - 1);

  const nextIndex =
    getIndex(activeIndex + 1);

  const previousSolution =
    solutions[previousIndex];

  const activeSolution =
    solutions[activeIndex];

  const nextSolution =
    solutions[nextIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((current) =>
        getIndex(current + 1)
      );
    }, AUTO_PLAY_TIME);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex(previousIndex);
  };

  const showNext = () => {
    setActiveIndex(nextIndex);
  };

  return (
    <section
      id="solutions"
      className={styles.section}
    >

      {/* BACKGROUND WAVES */}

      <div
        className={styles.waves}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1500 200"
          preserveAspectRatio="none"
          className={styles.waveOne}
        >
          <path
            d={sineWavePath}
            fill="none"
          />
        </svg>

        <svg
          viewBox="0 0 1500 200"
          preserveAspectRatio="none"
          className={styles.waveTwo}
        >
          <path
            d={sineWavePath}
            fill="none"
          />
        </svg>

        <svg
          viewBox="0 0 1500 200"
          preserveAspectRatio="none"
          className={styles.waveThree}
        >
          <path
            d={sineWavePath}
            fill="none"
          />
        </svg>
      </div>


      <div className={styles.container}>

        {/* SECTION HEADER */}

        <div className={styles.headingArea}>
          <p className={styles.eyebrow}>
            OUR SOLUTIONS
          </p>

          <h2 className={styles.heading}>
            Digital systems.
            <span>
              Built around your needs.
            </span>
          </h2>

          <p className={styles.intro}>
            From digital experiences to business
            automation, we build practical systems
            around the way your business works.
          </p>
        </div>


        {/* CAROUSEL */}

        <div className={styles.carousel}>

          {/* PREVIOUS */}

          <motion.button
            type="button"
            className={`${styles.sideCard} ${styles.prevCard}`}
            style={
              {
                "--card-accent":
                  previousSolution.accent,
              } as React.CSSProperties
            }
            onClick={showPrevious}
            aria-label={`View ${previousSolution.title}`}
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 0.72,
              x: 0,
            }}
            whileHover={{
              opacity: 1,
              scale: 0.98,
              x: -6,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              duration: 0.45,
              ease: [
                0.22,
                0.5,
                0.36,
                0.5,
              ],
            }}
          >
            <SolutionCard
              solution={previousSolution}
              position="previous"
            />
          </motion.button>


          {/* ACTIVE CENTER */}

          <div className={styles.centerViewport}>
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={activeSolution.id}
                className={styles.mainCard}
                style={
                  {
                    "--card-accent":
                      activeSolution.accent,
                  } as React.CSSProperties
                }
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: -15,
                }}
                transition={{
                  duration: 0.5,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >
                <SolutionCard
                  solution={activeSolution}
                  position="current"
                />
              </motion.div>
            </AnimatePresence>
          </div>


          {/* NEXT */}

          <motion.button
            type="button"
            className={`${styles.sideCard} ${styles.nextCard}`}
            style={
              {
                "--card-accent":
                  nextSolution.accent,
              } as React.CSSProperties
            }
            onClick={showNext}
            aria-label={`View ${nextSolution.title}`}
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 0.72,
              x: 0,
            }}
            whileHover={{
              opacity: 1,
              scale: 0.98,
              x: 6,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              duration: 0.45,
              ease: [
                0.22,
                0.5,
                0.36,
                0.5,
              ],
            }}
          >
            <SolutionCard
              solution={nextSolution}
              position="next"
            />
          </motion.button>
        </div>


        <p className={styles.autoHint}>
          Automatically exploring solutions
        </p>


        {/* PAGE CTA */}

        <div className={styles.sectionCta}>
          <a
            href="/solutions"
            className={styles.ctaLink}
          >
            <span>
              EXPLORE ALL SOLUTIONS
            </span>

            <span
              className={styles.ctaArrow}
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}


function SolutionCard({
  solution,
  position,
}: {
  solution: (typeof solutions)[number];
  position:
    | "previous"
    | "current"
    | "next";
}) {
  const isCurrent =
    position === "current";

  return (
    <div
      className={
        isCurrent
          ? styles.cardInner
          : styles.sideInner
      }
    >

      {/* TOP */}

      <div className={styles.cardTop}>
        <span
          className={styles.cardNumber}
        >
          0{solution.id}
        </span>

        <span
          className={styles.cardType}
        >
          SOLUTION
        </span>
      </div>


      {/* CONTENT */}

      <div className={styles.cardBody}>
        <h3>
          {solution.title}
        </h3>

        <p>
          {solution.statement}
        </p>
      </div>


      {/* DETAILS */}

      <div className={styles.details}>
        {solution.details.map(
          (detail, index) => (
            <div
              key={detail}
              className={styles.detail}
            >
              <span>
                0{index + 1}
              </span>

              <p>
                {detail}
              </p>
            </div>
          )
        )}
      </div>


      {/* FOOTER */}

      <div className={styles.cardBottom}>
        <span
          className={styles.accentDot}
        />

        <span>
          {position === "current"
            ? "CURRENT SOLUTION"
            : position === "previous"
            ? "PREVIOUS"
            : "NEXT"}
        </span>
      </div>

    </div>
  );
}