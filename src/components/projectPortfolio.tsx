import React from "react";
import '../assets/styles/ProjectPortfolio.scss';

function ProjectPortfolio() {
    const projects = [
        {
            title: "HCL Design System",
            role: "Frontend Engineer",
            description: "Contributed to the development and scaling of the HCL Design System, a centralized enterprise-grade UI framework aimed at unifying visual language across dozens of internal and external digital products. The design system improved design consistency, reduced development overhead, and accelerated product delivery timelines for HCL and its clients.",
            contributions: [
                "Developed reusable components using Angular, Vanilla JavaScript, and TypeScript, with a focus on performance, accessibility (WCAG 2.1 compliance), and cross-browser support.",
                "Integrated design tokens, theme architecture, and responsive grids to support dark/light modes and regional branding needs.",
                "Powered multiple HCL products, including Employee Portals, IT Service Dashboards, Customer Self-Service Platforms, CMS Tools, and Admin Consoles.",
                "Created documentation via Storybook, integrated with Figma for seamless design-development handoff.",
                "Hosted on AWS using S3 (static assets), EC2 (CI/CD pipelines), and CloudFront (CDN caching)."
            ],
            impact: [
                "📉 Reduced UI-related bugs across platforms",
                "🚀 Accelerated onboarding for frontend teams",
                "🧹 Enabled scalable theming across verticals"
            ],
            techStack: "Angular, Vanilla JS, TypeScript, SCSS, Storybook, Figma, AWS (S3, EC2, CloudFront), GitHub Actions",
            link: "Learn more about HCL Design System"
        },
        {
            title: "Olive Gaea",
            role: "Full Stack Developer",
            description: "Worked on Olive Gaea's climate-tech platform to enable individuals and enterprises to track, reduce, and offset carbon emissions seamlessly.",
            contributions: [
                "Developed web applications such as Personal Carbon Footprint Dashboard and Business Impact Portal for Scope 1–3 emissions tracking.",
                "Built a Carbon Offset Marketplace integrated with Gold Standard and Verra-certified projects.",
                "Delivered real-time sustainability reporting via climate APIs and ESG dashboards for enterprise clients."
            ],
            impact: [
                "📈 Supported B2B/B2C adoption across Europe and MENA regions",
                "🌿 Enabled real-time sustainability reporting",
                "🚀 Simplified onboarding for climate-conscious organizations"
            ],
            techStack: "React, Node.js, MongoDB, REST APIs, AWS Lambda"
        },
        {
            title: "LOWES",
            role: "Software Engineer",
            description: "Enhanced frontend systems for Lowe's U.S. e-commerce platform to improve digital retail experiences across web and mobile.",
            contributions: [
                "Optimized product discovery features with personalized recommendations.",
                "Integrated real-time store inventory logic for pickup/shipping options.",
                "Enhanced checkout flows for better performance during high traffic events like Black Friday."
            ],
            impact: [
                "📈 Boosted conversion rates via personalization features",
                "🚀 Improved site resilience during holiday campaigns"
            ],
            techStack: "React, Redux, Node.js, GraphQL, Akamai CDN"
        },
        {
            title: "Blackboard Learn",
            role: "Frontend Developer",
            description: "Improved user-facing features on Blackboard Learn LMS used by K–12 and higher education institutions globally.",
            contributions: [
                "Developed Unified Student Dashboard showcasing coursework and grades.",
                "Built Instructor Analytics Panel visualizing student engagement metrics using charts.",
                "Upgraded accessibility features including keyboard navigation and ARIA labeling."
            ],
            impact: [
                "🔎 Enhanced educational outcomes through usability improvements",
                "💡 Achieved compliance with accessibility laws (WCAG standards)"
            ],
            techStack: "Angular, TypeScript, SCSS, D3.js"
        },
        {
            title: "JANUS",
            role: "Automation Engineer",
            description: "Designed Playwright-based automation pipelines for processing insurance authorization requests via EDI 278I/278R standards.",
            contributions: [
                "Implemented batch EDI processing to reduce server load.",
                "Enhanced reliability with auto-retry mechanisms and logging systems."
            ],
            impact: [
                "📊 Increased throughput while reducing infrastructure costs by ~30%"
            ],
            techStack: "Node.js, Playwright, MongoDB"
        },
        {
            title: "Bryte Smart Beds",
            role: "Backend Developer",
            description: "Developed backend systems for Bryte's AI-powered smart bed technology designed to optimize sleep through biometric sensing and real-time adjustments.",
            contributions: [
                "Built Sleep Intelligence Engine leveraging adaptive learning algorithms based on biometric feedback.",
                "Created FHIR-compliant health data APIs for clinical interoperability."
            ],
            impact: [
                "🌚 Delivered personalized sleep improvements",
                "🏨 Expanded healthcare integrations for wellness programs"
            ],
            techStack: "Python, FastAPI, PostgreSQL"
        },
        {
            title: "HCL Integration Platform (HIP) / IBM ITX",
            role: "Integration Specialist",
            description: "Developed data transformation flows using IBM ITX (WTX) for large-scale B2B/EDI processing in healthcare/finance industries.",
            contributions: [
                "Designed reusable EDI mappings (X12 standards like 837/835).",
                "Ensured HIPAA/PCI compliance for sensitive data flows."
            ],
            techStack: "IBM ITX, EDI X12, Healthcare/Financial Data Standards"
        },
        {
            title: "Estée Lauder Companies Websites",
            role: "Web Engineer",
            description: "Enhanced global brand websites like MAC Cosmetics and Clinique by improving user engagement and campaign velocity.",
            contributions: [
                "Developed microsites for holiday campaigns.",
                "Migrated CMS from legacy stack to Adobe Experience Manager (AEM)."
            ],
            techStack: "AEM, JavaScript, CSS, HTML"
        }
    ];

    return(
        <div className="portfolio-container" id="portfolio">
            <h1>Enterprise Projects</h1>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="portfolio-item" key={index}>
                        <div className="portfolio-header">
                            <h2>{project.title}</h2>
                            <span className="role">{project.role}</span>
                        </div>
                        
                        <p className="description">{project.description}</p>
                        
                        <div className="section">
                            <h3>Key Contributions:</h3>
                            <ul>
                                {project.contributions.map((contribution, i) => (
                                    <li key={i}>{contribution}</li>
                                ))}
                            </ul>
                        </div>
                        
                        {project.impact && (
                            <div className="section">
                                <h3>Impact:</h3>
                                <ul className="impact-list">
                                    {project.impact.map((impact, i) => (
                                        <li key={i}>{impact}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        <div className="section">
                            <h3>Tech Stack:</h3>
                            <p className="tech-stack">{project.techStack}</p>
                        </div>
                        
                        {project.link && (
                            <a href="#" className="portfolio-link">{project.link}</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectPortfolio;