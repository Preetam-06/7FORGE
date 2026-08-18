import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/home/Contact/Contact";

export default function ContactPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="page">

        {/* =========================================
            CONTACT HERO
        ========================================= */}

        <section className="page-hero">
          <div className="page-container">

            <div className="contact-page-intro">

              <p className="page-eyebrow">
                CONTACT 7FORGE
              </p>

              <h1>
                Have a problem
                <span>worth solving?</span>
              </h1>

              <p>
                Tell us what you&apos;re trying to build,
                improve, automate, or fix. You don&apos;t
                need a complete technical specification
                to start the conversation.
              </p>

              <a
                href="mailto:contact.7forge@gmail.com"
                className="contact-email"
              >
                contact.7forge@gmail.com
              </a>

            </div>

          </div>
        </section>


        {/* =========================================
            CONTACT FORM
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">
              <p className="page-section-label">
                START A CONVERSATION
              </p>

              <h2 className="page-section-title">
                Tell us what you&apos;re
                <span>building.</span>
              </h2>

              <p className="page-section-text">
                Share as much or as little detail as you
                currently have. We can understand the
                requirements before deciding the technical
                direction.
              </p>
            </div>

            {/* Existing Contact Form */}

            <Contact />

          </div>
        </section>


        {/* =========================================
            CONTACT INFORMATION
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="about-grid">

              <div className="about-statement">
                <strong>
                  Prefer email?
                </strong>

                <p>
                  You can also contact us directly and
                  describe your requirement.
                </p>

                <a
                  href="mailto:contact.7forge@gmail.com"
                  className="contact-email"
                >
                  contact.7forge@gmail.com
                </a>
              </div>

              <div className="about-statement">
                <strong>
                  What should you include?
                </strong>

                <p>
                  A short description of the problem,
                  what you want to build, your expected
                  timeline, and any relevant requirements
                  are enough to start.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="page-cta">
          <div className="page-container">

            <h2>
              Let&apos;s turn the
              <span>idea into a system.</span>
            </h2>

            <p>
              Start with the problem. We&apos;ll work out
              the technical direction together.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}