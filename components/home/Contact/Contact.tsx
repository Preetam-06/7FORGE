"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company") || null,
      service: formData.get("project"),
      budget: null,
      message: formData.get("message"),
      website: formData.get("website") || null,
    };

    try {
      const response = await fetch(
        "/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        console.error("Backend error:", errorData);

        throw new Error(
          errorData.detail || "Failed to submit the form."
        );
      }

      setSubmitted(true);
      form.reset();

    } catch (error) {
      console.error("Contact submission failed:", error);

      setError(
        error instanceof Error
          ? error.message
          : "We couldn't submit your inquiry. Please try again."
      );

    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.contactLayout}>

          {/* LEFT INFORMATION */}

          <div className={styles.info}>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>
                WHAT WE CAN HELP WITH
              </span>

              <div className={styles.services}>
                <span>Web Applications</span>
                <span>Backend & APIs</span>
                <span>Automation</span>
                <span>AI / ML Solutions</span>
                <span>Digital Systems</span>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>
                STARTING POINT
              </span>

              <p className={styles.infoText}>
                You don't need a complete technical
                specification. Describe the problem
                in simple terms and we'll take it
                from there.
              </p>
            </div>

            <div className={styles.infoFooter}>
              <span>7FORGE</span>

              <span className={styles.smallLine} />

              <span>
                ENGINEERING DIGITAL SOLUTIONS
              </span>
            </div>

            <div className={styles.bottomLine}>
              <span>HAVE AN IDEA?</span>

              <span className={styles.bottomGoldLine} />

              <span>LET'S ENGINEER IT.</span>
            </div>

          </div>

          {/* FORM */}

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {submitted ? (

              /* SUCCESS */

              <motion.div
                className={styles.success}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
              >
                <span className={styles.successNumber}>
                  01
                </span>

                <h3>
                  Inquiry received.
                </h3>

                <p>
                  We've received your inquiry.
                  We'll review it and get back to you.
                </p>

                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                >
                  Send another inquiry
                </button>
              </motion.div>

            ) : (

              /* FORM FIELDS */

              <section id="contact-form" className={styles.formFields}>

                <div className={styles.formHeader}>
                  <span>
                    PROJECT INQUIRY
                  </span>

                  <span>
                    01 — 05
                  </span>
                </div>

                {/* NAME */}

                <div className={styles.field}>
                  <label htmlFor="name">
                    YOUR NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* EMAIL */}

                <div className={styles.field}>
                  <label htmlFor="email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* COMPANY */}

                <div className={styles.field}>
                  <label htmlFor="company">
                    COMPANY / ORGANIZATION
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Optional"
                  />
                </div>

                {/* PROJECT TYPE */}

                <div className={styles.field}>
                  <label htmlFor="project">
                    WHAT DO YOU NEED?
                  </label>

                  <select
                    id="project"
                    name="project"
                    defaultValue=""
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select an option
                    </option>

                    <option value="web">
                      Web Application
                    </option>

                    <option value="backend">
                      Backend / API
                    </option>

                    <option value="automation">
                      Automation
                    </option>

                    <option value="ai">
                      AI / ML
                    </option>

                    <option value="other">
                      Something else
                    </option>
                  </select>
                </div>

                {/* DESCRIPTION */}

                <div className={styles.field}>
                  <label htmlFor="message">
                    TELL US ABOUT IT
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe the problem, idea, or project..."
                    required
                  />
                </div>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                  }}
                />
                {/* ERROR */}

                {error && (
                  <p className={styles.error}>
                    {error}
                  </p>
                )}

                {/* SUBMIT */}

                <div className={styles.formBottom}>
                  <p>
                    We'll review your inquiry
                    and get back to you.
                  </p>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={submitting}
                  >
                    {submitting
                      ? "Sending..."
                      : "Send Inquiry"}

                    {!submitting && (
                      <span>→</span>
                    )}
                  </button>
                </div>

              </section>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}