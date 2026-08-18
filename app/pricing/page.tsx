import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const pricingOptions = [
  {
    label: "FOR STARTING OUT",
    title: "Website",
    price: "₹5,000+",
    description:
      "A focused digital presence for individuals, startups, and small businesses that need a professional website.",
    features: [
      "Responsive website",
      "Landing or business pages",
      "Contact / enquiry form",
      "Mobile optimization",
      "Basic SEO setup",
    ],
    note:
      "Final price depends on pages, design requirements, content, and integrations.",
  },
  {
    label: "FOR DIGITAL PRODUCTS",
    title: "Web Application",
    price: "₹12,000+",
    description:
      "Interactive web applications and business tools designed around specific workflows and functionality.",
    features: [
      "Interactive web application",
      "Custom user interface",
      "Forms and workflows",
      "Backend / API integration",
      "Database integration",
    ],
    note:
      "Final price depends on functionality, users, integrations, and technical complexity.",
    featured: true,
  },
  {
    label: "FOR COMPLEX REQUIREMENTS",
    title: "Custom Software",
    price: "₹30,000+",
    description:
      "Custom digital systems built around specific business requirements, workflows, and operational needs.",
    features: [
      "Custom software system",
      "Backend APIs",
      "Database architecture",
      "Authentication & user roles",
      "Custom business workflows",
    ],
    note:
      "Complexity, integrations, architecture, and project scope determine the final quote.",
  },
];

const additionalServices = [
  {
    number: "01",
    title: "Automation",
    text:
      "Automate repetitive business workflows, notifications, data processing, and API-based processes.",
  },
  {
    number: "02",
    title: "Cloud & Deployment",
    text:
      "Application deployment, environment configuration, hosting setup, and production delivery.",
  },
  {
    number: "03",
    title: "Maintenance",
    text:
      "Post-launch fixes, improvements, updates, monitoring, and ongoing technical support.",
  },
];

const pricingFactors = [
  {
    number: "01",
    title: "Scope",
    text:
      "The number of pages, features, workflows, integrations, and user requirements.",
  },
  {
    number: "02",
    title: "Complexity",
    text:
      "Backend logic, databases, APIs, authentication, integrations, and system architecture.",
  },
  {
    number: "03",
    title: "Design",
    text:
      "Custom UI/UX, branding, interactions, animations, content structure, and responsive requirements.",
  },
  {
    number: "04",
    title: "Timeline",
    text:
      "Project deadlines and accelerated delivery requirements can affect development effort.",
  },
];

const pricingProcess = [
  {
    number: "01",
    title: "Tell Us",
    text:
      "Describe what you want to build, improve, automate, or solve.",
  },
  {
    number: "02",
    title: "Understand",
    text:
      "We clarify the requirements, users, functionality, integrations, and constraints.",
  },
  {
    number: "03",
    title: "Scope",
    text:
      "We determine the appropriate solution, architecture, timeline, and development effort.",
  },
  {
    number: "04",
    title: "Quote",
    text:
      "You receive a project-specific estimate based on the agreed scope.",
  },
  {
    number: "05",
    title: "Build",
    text:
      "Once approved, development begins against the agreed scope.",
  },
];

export default function PricingPage() {
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
              PRICING
            </p>

            <h1 className="page-title">
              Clear starting points.
              <span>Built around the scope.</span>
            </h1>

            <p className="page-intro">
              Start with a service that matches your
              requirement. Every project is scoped
              individually so the final price reflects
              what actually needs to be built.
            </p>

          </div>
        </section>


        {/* =========================================
            MAIN PRICING
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">

              <p className="page-section-label">
                STARTING PRICES
              </p>

              <h2 className="page-section-title">
                Choose your
                <span>starting point.</span>
              </h2>

              <p className="page-section-text">
                Starting prices give you an initial
                reference point. The final quote depends
                on the actual project requirements.
              </p>

            </div>


            <div className="pricing-grid">

              {pricingOptions.map((option) => (
                <article
                  key={option.title}
                  className={`price-card ${
                    option.featured ? "featured" : ""
                  }`}
                >

                  <span className="price-label">
                    {option.label}
                  </span>

                  <h3>
                    {option.title}
                  </h3>

                  <div className="price-value">
                    {option.price}
                  </div>

                  <p>
                    {option.description}
                  </p>


                  <ul className="price-list">

                    {option.features.map((feature) => (
                      <li key={feature}>

                        <span aria-hidden="true">
                          +
                        </span>

                        {feature}

                      </li>
                    ))}

                  </ul>


                  <div className="price-note">
                    {option.note}
                  </div>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================
            ADDITIONAL SERVICES
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">

              <p className="page-section-label">
                ADDITIONAL SERVICES
              </p>

              <h2 className="page-section-title">
                Beyond the
                <span>core packages.</span>
              </h2>

              <p className="page-section-text">
                Some requirements are better handled as
                additional engineering services rather
                than being forced into a standard package.
              </p>

            </div>


            <div className="pricing-factors">

              {additionalServices.map((service) => (
                <article
                  key={service.number}
                  className="pricing-factor"
                >

                  <span>
                    {service.number}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================
            WHAT AFFECTS PRICE
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">

              <p className="page-section-label">
                WHAT AFFECTS COST
              </p>

              <h2 className="page-section-title">
                Why projects have
                <span>different prices.</span>
              </h2>

              <p className="page-section-text">
                Two projects can look similar but require
                very different amounts of engineering work.
              </p>

            </div>


            <div className="pricing-factors">

              {pricingFactors.map((factor) => (
                <article
                  key={factor.number}
                  className="pricing-factor"
                >

                  <span>
                    {factor.number}
                  </span>

                  <h3>
                    {factor.title}
                  </h3>

                  <p>
                    {factor.text}
                  </p>

                </article>
              ))}

            </div>

          </div>
        </section>


        {/* =========================================
            HOW PRICING WORKS
        ========================================= */}

        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">

              <p className="page-section-label">
                HOW IT WORKS
              </p>

              <h2 className="page-section-title">
                From requirement
                <span>to final quote.</span>
              </h2>

            </div>


            <div className="process-grid">

              {pricingProcess.map((step) => (
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
              Have a project
              <span>in mind?</span>
            </h2>

            <p>
              Tell us what you need. We will understand
              the requirement and determine the appropriate
              scope before giving you a final quote.
            </p>

            <Link
              href="/contact"
              className="page-button"
            >
              Get a Project Estimate

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