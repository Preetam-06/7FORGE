import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {work} from "@/components/home/SelectedWork/work";

export default function WorkPage() {
  return (
    <div className="site-shell">
      <Navbar />

      <main className="page">

        {/* HERO */}
        
        {/* PROJECTS */}
        <section className="page-section">
          <div className="page-container">

            <div className="page-section-heading">
              <p className="page-section-label">
                SHOWCASE
              </p>
              <h2 className="page-section-title">
                Selected projects. <span>Clear problems. Practical solutions.</span>
              </h2>
              <p className="page-section-text">
                The examples currently shown are concepts.
                As completed client and production work
                becomes available, this section can evolve
                into detailed case studies.
              </p>
            </div>

            <div className="work-grid-page">
              {/* FIXED: Changed parameter name from 'work' to 'project' */}
              {work.map((project) => (
                <article
                  key={project.id}
                  className="work-card-page"
                >
                
                  <div className="work-visual-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={540}
                      height={540}
                    />
                  </div>

                  <div className="work-meta">
                    <span>
                      {project.category}
                    </span>
                    <span className="work-meta-line" />
                    <span>
                      {project.type}
                    </span>
                  </div>

                  <h3>
                    {project.title}
                  </h3>
                  <p>
                    {project.description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* CASE STUDY FORMAT */}
        <section className="page-section">
          <div className="page-container">
            <div className="page-section-heading">
              <p className="page-section-label">
                HOW WE PRESENT WORK
              </p>
              <h2 className="page-section-title">
                Problem. <span>Approach. Outcome.</span>
              </h2>
              <p className="page-section-text">
                Future case studies should explain what
                problem existed, what was built, why the
                technical approach was chosen, and what
                changed as a result.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <div className="page-container">
            <h2>
              Have a project that <span>belongs here?</span>
            </h2>
            <p>
              Tell us what you are trying to build.
            </p>
            <Link
              href="/contact"
              className="page-button"
            >
              Start a Project
              <span aria-hidden="true"> → </span>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}