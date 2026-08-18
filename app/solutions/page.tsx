import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const solutions = [
  {
    number: "01",
    title: "Digital Experiences",
    description:
      "Modern websites and digital interfaces built around business goals, clarity, and user experience.",
    details: [
      "Business websites",
      "Landing pages",
      "Interactive interfaces",
      "Customer experiences",
    ],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom web applications designed around the way your business actually operates.",
    details: [
      "Dashboards",
      "Customer portals",
      "Booking systems",
      "Internal applications",
    ],
  },
  {
    number: "03",
    title: "Business Systems",
    description:
      "Digital systems that organize information, workflows, and everyday operations.",
    details: [
      "Management systems",
      "Internal tools",
      "Business databases",
      "API-driven systems",
    ],
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Reduce repetitive work by connecting business processes and automating routine actions.",
    details: [
      "Email automation",
      "Lead workflows",
      "Scheduled reports",
      "Process automation",
    ],
  },
  {
    number: "05",
    title: "Custom Solutions",
    description:
      "Purpose-built digital tools for requirements that do not fit standard software.",
    details: [
      "Custom business tools",
      "System integrations",
      "Specialized portals",
      "Business software",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="page">

        {/* HERO */}

        <section className="page-hero">
          <div className="page-container">

            <p className="page-eyebrow">
              OUR SOLUTIONS
            </p>

            <h1 className="page-title">
              Digital systems.
              <span>Built around your needs.</span>
            </h1>

            <p className="page-intro">
              We build practical digital solutions around
              the way businesses actually work — from
              websites and applications to automation and
              custom systems.
            </p>

          </div>
        </section>


        {/* SOLUTIONS */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">
              <p className="page-section-label">
                WHAT WE PROVIDE
              </p>

              <h2 className="page-section-title">
                Choose the problem.
                <span>We engineer the solution.</span>
              </h2>

              <p className="page-section-text">
                These categories describe the kinds of
                systems we can build. Actual scope,
                architecture, and technology depend on
                the requirements of the project.
              </p>
            </div>

            <div className="solution-list">

              {solutions.map((solution) => (
                <article
                  key={solution.number}
                  className="solution-page-card"
                >

                  <div>
                    <span className="solution-page-number">
                      {solution.number}
                    </span>
                  </div>

                  <div>
                    <h3>
                      {solution.title}
                    </h3>
                  </div>

                  <div>
                    <p>
                      {solution.description}
                    </p>

                    <ul className="solution-details">
                      {solution.details.map((detail) => (
                        <li key={detail}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* APPROACH */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">
              <p className="page-section-label">
                OUR APPROACH
              </p>

              <h2 className="page-section-title">
                Technology follows
                <span>the requirement.</span>
              </h2>

              <p className="page-section-text">
                The right stack depends on the problem,
                scale, users, constraints, and future
                requirements. We select technologies
                accordingly rather than forcing every
                project into the same architecture.
              </p>
            </div>

          </div>
        </section>


        {/* CTA */}

        <section className="page-cta">
          <div className="page-container">

            <h2>
              Not sure which solution
              <span>you need?</span>
            </h2>

            <p>
              Describe the problem in simple terms.
              The technical direction can come later.
            </p>

            <Link
              href="/contact"
              className="page-button"
            >
              Discuss Your Project
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