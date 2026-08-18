import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const principles = [
  {
    number: "01",
    title: "Problem First",
    text: "We understand the actual requirement before deciding which technology belongs in the solution.",
  },
  {
    number: "02",
    title: "Practical Engineering",
    text: "We focus on systems that can be built, maintained, understood, and used in the real world.",
  },
  {
    number: "03",
    title: "Built to Evolve",
    text: "Solutions should have room to improve as requirements, users, and businesses change.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the problem, users, requirements, constraints, and desired outcome.",
  },
  {
    number: "02",
    title: "Design",
    text: "Turn the requirements into a clear experience and technical direction.",
  },
  {
    number: "03",
    title: "Build",
    text: "Engineer the solution using technologies that fit the actual problem.",
  },
  {
    number: "04",
    title: "Refine",
    text: "Test, improve, and resolve issues before the solution is delivered.",
  },
  {
    number: "05",
    title: "Deliver",
    text: "Deliver a usable foundation that can continue to evolve.",
  },
];

const founders = [
  {
    name: "FOUNDER NAME",
    role: "Founder & Developer",
    image: "",
    placeholder: "F",
  },
  {
    name: "CO-FOUNDER NAME",
    role: "Co-Founder",
    image: "",
    placeholder: "C",
  },
];

export default function AboutPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="page-hero">
          <div className="page-container">

            <p className="page-eyebrow">
              ABOUT 7FORGE
            </p>

            <h1 className="page-title">
              We build around
              <span>real problems.</span>
            </h1>

            <p className="page-intro">
              7Forge is a digital engineering studio focused
              on building practical software solutions for
              real business problems.
            </p>

          </div>
        </section>


        {/* =========================================
            WHO WE ARE
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">

              <p className="page-section-label">
                WHO WE ARE
              </p>

              <h2 className="page-section-title">
                Engineering with
                <span>purpose.</span>
              </h2>

            </div>


            <div className="about-grid">

              <div className="about-copy">

                <p>
                  7Forge combines software engineering,
                  design, automation, and emerging
                  technologies to turn ideas and business
                  requirements into usable digital systems.
                </p>

                <p>
                  We do not start with a technology stack
                  and look for a reason to use it. We start
                  by understanding the problem and then
                  determine what should actually be built.
                </p>

              </div>


              <div className="about-statement">

                <strong>
                  Technology is the tool.
                  The problem is the starting point.
                </strong>

                <p>
                  Our approach is intentionally practical:
                  understand the requirement, choose an
                  appropriate technical direction, build,
                  test, and improve.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* =========================================
            FOUNDERS
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">

              <p className="page-section-label">
                THE PEOPLE BEHIND 7FORGE
              </p>

              <h2 className="page-section-title">
                Built by
                <span>builders.</span>
              </h2>

            </div>


            <div className="founders-row">

              {founders.map((person) => (
                <article
                  key={person.name}
                  className="founder-card"
                >

                  <div className="founder-photo">

                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                      />
                    ) : (
                      <span className="founder-placeholder">
                        {person.placeholder}
                      </span>
                    )}

                  </div>


                  <div className="founder-info">

                    <span className="founder-role">
                      {person.role}
                    </span>

                    <h3 className="founder-name">
                      {person.name}
                    </h3>

                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================
            PRINCIPLES
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">

              <p className="page-section-label">
                WHAT WE BELIEVE
              </p>

              <h2 className="page-section-title">
                Simple principles.
                <span>Serious execution.</span>
              </h2>

            </div>


            <div className="principles-grid">

              {principles.map((item) => (
                <article
                  key={item.number}
                  className="principle-card"
                >

                  <span className="principle-number">
                    {item.number}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================
            PROCESS
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">

              <p className="page-section-label">
                HOW WE WORK
              </p>

              <h2 className="page-section-title">
                A clear process.
                <span>No unnecessary complexity.</span>
              </h2>

            </div>


            <div className="process-grid">

              {process.map((step) => (
                <article
                  key={step.number}
                  className="process-card"
                >

                  <span className="process-number">
                    {step.number}
                  </span>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================
            CTA
        ========================================= */}

        <section className="page-cta">
          <div className="page-container">

            <h2>
              Have something worth
              <span>building?</span>
            </h2>

            <p>
              Tell us what you are trying to build,
              improve, automate, or solve.
            </p>

            <Link
              href="/contact"
              className="page-button"
            >
              Start a Project

              <span aria-hidden="true">
                →
              </span>
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}