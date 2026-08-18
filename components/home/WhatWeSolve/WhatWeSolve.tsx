"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { problems } from "./problem";
import styles from "./WhatWeSolve.module.css";

const AUTO_PLAY_TIME = 7000;

export default function WhatWeSolve() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((current) => {
        return (current + 1) % problems.length;
      });
    }, AUTO_PLAY_TIME);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  const activeProblem = problems[activeIndex];

  return (
    <section
      id="solve"
      className={styles.section}
    >
      <div className={styles.container}>

        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className={styles.headingArea}>
          <p className={styles.eyebrow}>
            WHAT WE SOLVE
          </p>

          <h2 className={styles.heading}>
            Your business has problems.
            <span>
              We build around them.
            </span>
          </h2>

          <p className={styles.intro}>
            From repetitive workflows to disconnected
            systems, we identify where digital solutions
            can create meaningful improvement.
          </p>
        </div>


        {/* =========================================
            MAIN PROBLEM CONTENT
        ========================================= */}

        <div className={styles.problemLayout}>

          {/* LEFT — PROBLEM CARD */}

          <div className={styles.cardViewport}>
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={activeProblem.id}
                className={styles.problemCard}

                initial={{
                  opacity: 0,
                  x: -80,
                  rotate: -2,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                }}

                exit={{
                  opacity: 0,
                  x: 80,
                  rotate: 2,
                }}

                transition={{
                  duration: 0.5,
                  ease: [
                    0.2,
                    0.5,
                    0.3,
                    0.5,
                  ],
                }}
              >
                <span className={styles.number}>
                  {activeProblem.id}
                </span>

                <div className={styles.cardContent}>
                  <p className={styles.cardLabel}>
                    THE PROBLEM
                  </p>

                  <h3>
                    {activeProblem.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


          {/* RIGHT — DETAILS */}

          <div className={styles.detailViewport}>
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.div
                key={activeProblem.id}
                className={styles.detail}

                initial={{
                  opacity: 0,
                  x: 50,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                }}

                exit={{
                  opacity: 0,
                  x: -50,
                }}

                transition={{
                  duration: 0.5,
                  delay: 0.08,
                  ease: [
                    0.2,
                    0.5,
                    0.3,
                    0.5,
                  ],
                }}
              >
                <p className={styles.detailLabel}>
                  WHY IT MATTERS
                </p>

                <h3>
                  {activeProblem.headline}
                </h3>

                <p>
                  {activeProblem.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CONTROLS */}

            <div className={styles.controls}>
              {problems.map(
                (problem, index) => {
                  const isActive =
                    index === activeIndex;

                  return (
                    <button
                      key={problem.id}
                      type="button"
                      className={
                        isActive
                          ? styles.controlActive
                          : styles.control
                      }
                      onClick={() =>
                        setActiveIndex(index)
                      }
                      aria-label={`Show ${problem.title}`}
                      aria-current={
                        isActive
                          ? "true"
                          : undefined
                      }
                    >
                      <span>
                        {problem.id}
                      </span>

                      <span
                        className={
                          isActive
                            ? styles.controlProgress
                            : styles.controlLine
                        }
                      />
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>


        

      </div>
    </section>
  );
}