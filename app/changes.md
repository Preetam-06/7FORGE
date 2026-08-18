# 7Forge Website --- Frontend Development Plan

## 1. Project Goal

Build a professional, modern, trustworthy 7Forge company website that
presents:

-   What 7Forge solves
-   Solutions/services provided
-   Technology capabilities
-   Previous work/showcase
-   Company information
-   Pricing
-   Contact/inquiry process

### Current priority

**Frontend only.**

No backend, database, SMTP, authentication, API integration, or
deployment work at this stage.

The contact form should work visually and provide frontend
validation/success states, but actual email/database functionality will
be integrated later.

------------------------------------------------------------------------

# 2. Final Website Structure

The website will have **6 main pages**:

``` text
/
├── /about
├── /solutions
├── /work
├── /pricing
└── /contact
```

### Main Navigation

``` text
7FORGE

About
Solutions
Work
Pricing
Contact

Let's Talk →
```

### Navigation destinations

  Navigation   Route
  ------------ --------------
  Logo         `/`
  About        `/about`
  Solutions    `/solutions`
  Work         `/work`
  Pricing      `/pricing`
  Contact      `/contact`
  Let's Talk   `/contact`

Technology remains an important section on the homepage and does not
need to be a primary navbar item.

------------------------------------------------------------------------

# 3. Existing Frontend Structure

Current relevant structure:

``` text
components/
└── home/
    ├── About/
    ├── Contact/
    ├── Footer/
    ├── Hero/
    ├── SelectedWork/
    ├── Solutions/
    ├── Technology/
    └── WhatWeSolve/

components/
└── layout/
    ├── favicon.png
    ├── Footer.tsx
    └── Navbar.tsx
```

## Important rule

Do not unnecessarily rebuild existing components.

Reuse the existing design system, animations, typography, spacing,
visual language, and component patterns.

The objective is to improve the information architecture without
destroying the existing visual identity.

------------------------------------------------------------------------

# 4. PHASE 1 --- Modify the Home Page

## Objective

The homepage should be the main conversion and introduction page, not a
complete copy of every other page.

It should provide previews and direct visitors toward dedicated pages.

## Final homepage structure

``` text
HOME
│
├── Navbar
├── Hero
├── What We Solve
├── Solutions Preview
├── Technology
├── Selected Work Preview
├── About Preview
├── CTA
└── Footer
```

------------------------------------------------------------------------

# 5. Home --- Hero

## Purpose

Immediately communicate:

1.  What 7Forge is
2.  What 7Forge builds
3.  Why the visitor should continue

The Hero should not contain too much information.

### Primary CTA

``` text
Explore Solutions →
```

Destination:

``` text
/solutions
```

### Secondary CTA

``` text
Start a Project →
```

Destination:

``` text
/contact
```

------------------------------------------------------------------------

# 6. Home --- What We Solve

Existing component:

``` text
components/home/WhatWeSolve/
```

## Purpose

Explain the problems, not simply list technologies.

Possible problem categories:

-   Manual business processes
-   Disconnected systems
-   Inefficient workflows
-   Difficulty turning ideas into usable products
-   Data that is difficult to manage or use
-   Software that does not fit the actual workflow
-   Repetitive operational work

The section should communicate:

> We start with the problem and then determine the appropriate
> technology.

### CTA

``` text
Explore Our Solutions →
```

Destination:

``` text
/solutions
```

------------------------------------------------------------------------

# 7. Home --- Solutions Preview

Existing component:

``` text
components/home/Solutions/
```

## Purpose

Give visitors a concise overview of what 7Forge provides.

Possible categories:

``` text
01 — Web Development
02 — Backend & APIs
03 — Automation
04 — AI / ML
05 — Custom Digital Systems
```

Do not put the entire Solutions page here.

The homepage should provide a preview.

### CTA

``` text
Explore All Solutions →
```

Destination:

``` text
/solutions
```

------------------------------------------------------------------------

# 8. Home --- Technology

Existing component:

``` text
components/home/Technology/
```

## Keep this section on the homepage.

Do not create a Technology page at this stage.

## Purpose

Technology is supporting evidence for the services.

The visitor journey should be:

``` text
Problem
↓
Solution
↓
Technology
```

not simply a technology list.

Only display technologies that 7Forge genuinely intends to work with.

------------------------------------------------------------------------

# 9. Home --- Selected Work Preview

Existing component:

``` text
components/home/SelectedWork/
```

## Purpose

Show a small number of strong projects.

Recommended:

``` text
2–4 selected projects
```

Each project should eventually communicate:

``` text
Project
Problem
Solution
Technology
Result
```

### CTA

``` text
View All Work →
```

Destination:

``` text
/work
```

If there are currently few real projects, do not fabricate case studies.

Clearly label concept, student, internal, or experimental projects where
appropriate.

------------------------------------------------------------------------

# 10. Home --- About Preview

Existing component:

``` text
components/home/About/
```

## Purpose

Give a concise introduction to 7Forge.

Example positioning:

> 7Forge builds digital systems around real problems, combining software
> engineering, automation, and emerging technologies to create practical
> solutions.

Keep this section short.

### CTA

``` text
Discover 7Forge →
```

Destination:

``` text
/about
```

The complete company story belongs on the About page.

------------------------------------------------------------------------

# 11. Home --- Contact Removal

The existing:

``` text
components/home/Contact/
```

should not remain as a full contact form on the homepage.

The contact functionality moves to:

``` text
/contact
```

The existing Contact component can be reused on that page instead of
being deleted.

The homepage should use a CTA instead.

Example:

``` text
Have something worth building?

Let's engineer it.

[ Start a Project → ]
```

Destination:

``` text
/contact
```

This prevents the homepage from becoming unnecessarily long.

------------------------------------------------------------------------

# 12. Home --- Final CTA

The final homepage CTA should be a strong conversion section.

Example:

``` text
Have something worth building?

Tell us what you're trying to build,
improve, automate, or solve.

[ Start a Project → ]
```

Destination:

``` text
/contact
```

------------------------------------------------------------------------

# 13. Home --- Footer

Use the global footer.

The footer should provide navigation to all major pages.

``` text
7FORGE

About
Solutions
Work
Pricing
Contact

Web Development
Backend & APIs
Automation
AI / ML
Custom Digital Systems

contact.7forge@gmail.com
```

------------------------------------------------------------------------

# 14. PHASE 2 --- About Page

Route:

``` text
/about
```

## Purpose

Explain who 7Forge is and what the company stands for.

## Suggested structure

``` text
About
│
├── Hero
├── Who We Are
├── What We Believe
├── How We Work
├── Engineering Principles
├── Why 7Forge
└── CTA
```

## Content themes

### Who We Are

Explain 7Forge as a digital engineering/software solutions company.

### What We Believe

Potential principles:

-   Solve the actual problem
-   Build practical systems
-   Prefer clarity over unnecessary complexity
-   Use technology intentionally
-   Design for maintainability
-   Focus on measurable outcomes

### How We Work

``` text
Understand
↓
Design
↓
Build
↓
Test
↓
Deliver
↓
Improve
```

### CTA

``` text
Have a project in mind?

[ Let's Talk → ]
```

Destination:

``` text
/contact
```

------------------------------------------------------------------------

# 15. PHASE 3 --- Solutions Page

Route:

``` text
/solutions
```

This is one of the most important pages.

## Purpose

Clearly explain what 7Forge actually provides.

## Structure

``` text
Solutions
│
├── Hero
├── Web Development
├── Backend & APIs
├── Automation
├── AI / ML
├── Custom Digital Systems
├── Technology Approach
└── CTA
```

## Solution 01 --- Web Development

Potential offerings:

-   Business websites
-   Web applications
-   Dashboards
-   Client portals
-   Custom web platforms

Focus on outcomes rather than simply listing frameworks.

## Solution 02 --- Backend & APIs

Potential offerings:

-   REST APIs
-   Database-backed applications
-   Authentication systems
-   Backend architecture
-   Third-party integrations
-   Data processing

## Solution 03 --- Automation

Potential offerings:

-   Repetitive workflow automation
-   Internal tools
-   Data processing
-   Notifications
-   API-based automation
-   Business process automation

## Solution 04 --- AI / ML

Only describe capabilities that 7Forge genuinely intends to provide.

Potential categories:

-   AI-powered applications
-   Machine learning systems
-   Intelligent automation
-   Data analysis
-   Computer vision
-   AI integrations

Avoid exaggerated AI claims.

## Solution 05 --- Custom Digital Systems

For projects that do not fit neatly into a predefined service.

Positioning:

> If the problem doesn't fit an existing category, we design the system
> around the requirement.

------------------------------------------------------------------------

# 16. PHASE 4 --- Work / Showcase Page

Route:

``` text
/work
```

## Purpose

Demonstrate actual capability through projects and case studies.

## Structure

``` text
Work
│
├── Hero
├── Featured Projects
├── Project Grid
├── Case Studies
└── CTA
```

Each project should eventually include:

``` text
Project Name
Category
Problem
Solution
Technology
Outcome
```

The story should be:

``` text
Problem
↓
Engineering approach
↓
Solution
↓
Outcome
```

Avoid presenting projects only as technology lists.

------------------------------------------------------------------------

# 17. PHASE 5 --- Pricing Page

Route:

``` text
/pricing
```

## Purpose

Give prospective clients a reasonable understanding of pricing without
pretending custom software has perfectly fixed costs.

## Recommended structure

``` text
Pricing
│
├── Hero
├── Starting Points
├── Service Categories
├── What's Included
├── What Affects Pricing
├── Engagement Process
└── CTA
```

Potential pricing categories:

``` text
Web Development
Backend & APIs
Automation
AI / ML
Custom Systems
```

Use:

``` text
Starting from ₹XX
```

rather than rigid promises unless pricing is genuinely fixed.

Do not invent pricing numbers until actual costs, scope, time, and
margins are established.

------------------------------------------------------------------------

# 18. PHASE 6 --- Contact Page

Route:

``` text
/contact
```

## Purpose

Convert an interested visitor into a project inquiry.

## Structure

``` text
Contact
│
├── Hero
├── Contact Information
├── Project Inquiry Form
└── Response Expectations
```

## Form

Recommended fields:

``` text
Name *
Email *
Company
Service *
Budget
Message *
```

Service options:

``` text
Web Development
Backend / API
Automation
AI / ML
Custom System
Other
```

Budget options:

``` text
Under ₹25K
₹25K – ₹50K
₹50K – ₹1L
₹1L+
Not sure yet
Prefer not to say
```

### Frontend phase behavior

``` text
Form
↓
Validation
↓
Local success state
```

No API yet.

------------------------------------------------------------------------

# 19. Navbar

Modify:

``` text
components/layout/Navbar.tsx
```

Final navigation:

``` text
7FORGE

About
Solutions
Work
Pricing
Contact

Let's Talk →
```

Links:

``` text
About       → /about
Solutions   → /solutions
Work        → /work
Pricing     → /pricing
Contact     → /contact
Let's Talk  → /contact
```

Technology is not required in the primary navbar.

------------------------------------------------------------------------

# 20. Footer

Modify the active global Footer.

Navigation:

``` text
Home
About
Solutions
Work
Pricing
Contact
```

Services:

``` text
Web Development
Backend & APIs
Automation
AI / ML
Custom Digital Systems
```

Contact:

``` text
contact.7forge@gmail.com
```

------------------------------------------------------------------------

# 21. Required Routes

Create:

``` text
app/
├── page.tsx
│
├── about/
│   └── page.tsx
│
├── solutions/
│   └── page.tsx
│
├── work/
│   └── page.tsx
│
├── pricing/
│   └── page.tsx
│
└── contact/
    └── page.tsx
```

Initially, each dedicated page can contain placeholder content.

The routes must work before the pages are fully designed.

------------------------------------------------------------------------

# 22. Frontend Components

Current components remain:

``` text
components/home/
├── About/
├── Contact/
├── Footer/
├── Hero/
├── SelectedWork/
├── Solutions/
├── Technology/
└── WhatWeSolve/
```

Create dedicated page components only when a page becomes substantial.

Possible future structure:

``` text
components/
├── about/
├── solutions/
├── work/
├── pricing/
└── contact/
```

Do not duplicate existing components unnecessarily.

------------------------------------------------------------------------

# 23. Frontend-Only Rule

During this phase:

## Do

-   Build pages
-   Build navigation
-   Build responsive UI
-   Build animations
-   Build frontend validation
-   Build loading states
-   Build success states
-   Build error states
-   Build reusable components
-   Make all routes work
-   Maintain visual consistency

## Do not

-   FastAPI
-   PostgreSQL
-   SQLAlchemy
-   SMTP
-   Gmail integration
-   Database
-   Authentication
-   Admin dashboard
-   API integration
-   Production deployment

------------------------------------------------------------------------

# 24. Later Backend Integration

Once the frontend is finalized:

``` text
Contact Form
      ↓
FastAPI
      ↓
Validation
      ↓
PostgreSQL
      ↓
SMTP / Email Provider
      ↓
contact.7forge@gmail.com
```

The database will eventually retain:

``` text
id
name
email
company
service
budget
message
status
email_sent
auto_reply_sent
created_at
```

This is deliberately postponed until the frontend is stable.

------------------------------------------------------------------------

# 25. Development Order

Follow this order:

``` text
STEP 01
Modify Homepage
        ↓
STEP 02
Modify Navbar
        ↓
STEP 03
Modify Footer
        ↓
STEP 04
Create /about
        ↓
STEP 05
Create /solutions
        ↓
STEP 06
Create /work
        ↓
STEP 07
Create /pricing
        ↓
STEP 08
Create /contact
        ↓
STEP 09
Connect all navigation
        ↓
STEP 10
Responsive testing
        ↓
STEP 11
Visual consistency pass
        ↓
STEP 12
Frontend complete
        ↓
STEP 13
Backend integration
```

------------------------------------------------------------------------

# 26. Final Information Architecture

``` text
                         7FORGE
                           │
                           ▼
                         HOME
                           │
       ┌───────────────────┼───────────────────┐
       │                   │                   │
       ▼                   ▼                   ▼
   PROBLEMS            SOLUTIONS            WORK
       │                   │                   │
       │                   ▼                   ▼
       │              TECHNOLOGY          SHOWCASE
       │
       ▼
     ABOUT
       │
       └───────────────────┐
                           ▼
                         CTA
                           │
                           ▼
                        CONTACT
                           │
                           ▼
                    PROJECT INQUIRY


                    PRICING
                       │
                       ▼
                    CONTACT
```

## Final page list

1.  Home
2.  About
3.  Solutions
4.  Work / Showcase
5.  Pricing
6.  Contact

## Final homepage sections

1.  Navbar
2.  Hero
3.  What We Solve
4.  Solutions Preview
5.  Technology
6.  Selected Work Preview
7.  About Preview
8.  CTA
9.  Footer

**Frontend phase ends when all six routes work, navigation is connected,
the landing page is revised, and the pages are responsive and visually
consistent. Backend integration begins only afterward.**
