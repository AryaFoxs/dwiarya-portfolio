"use client";

import { motion } from "framer-motion";
import { Briefcase, FolderOpen, Calendar, ChevronRight } from "lucide-react";
import { experiences, projects } from "@/lib/data";

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="section"
        style={{
          backgroundColor: "var(--color-surface)",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              maxWidth: 800,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="badge badge-primary"
              style={{ marginBottom: "1rem" }}
            >
              Experience
            </motion.span>
            <h1 style={{ marginBottom: "1.5rem" }}>
              Professional <span className="gradient-text">Journey</span>
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
              From freelance designer to creative producer, my career has been 
              shaped by a passion for visual storytelling and live production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <Briefcase size={32} style={{ color: "var(--color-primary)" }} />
            <h2 style={{ margin: 0 }}>Work Experience</h2>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Timeline Line */}
            <div
              style={{
                position: "absolute",
                left: 20,
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: "var(--color-border)",
              }}
              className="timeline-line"
            />

            {/* Experience Items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: "flex",
                    gap: "2rem",
                    position: "relative",
                  }}
                >
                  {/* Timeline Dot */}
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      backgroundColor: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                      boxShadow: "0 0 0 4px var(--color-background)",
                    }}
                  >
                    <Briefcase size={20} style={{ color: "white" }} />
                  </div>

                  {/* Content */}
                  <div
                    className="card"
                    style={{ flex: 1 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <span className="badge badge-accent">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                    </div>

                    <h3 style={{ marginBottom: "0.5rem" }}>{exp.title}</h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "var(--color-primary)",
                        marginBottom: "1rem",
                      }}
                    >
                      {exp.company}
                    </p>

                    <p style={{ marginBottom: "1.5rem" }}>{exp.description}</p>

                    {/* Responsibilities */}
                    <div style={{ marginBottom: "1.5rem" }}>
                      <h4
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "var(--color-text-primary)",
                          marginBottom: "0.75rem",
                        }}
                      >
                        Key Responsibilities:
                      </h4>
                      <ul
                        style={{
                          listStyle: "none",
                          padding: 0,
                          margin: 0,
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        {exp.responsibilities.map((resp) => (
                          <li
                            key={resp}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.5rem",
                              fontSize: "0.875rem",
                              color: "var(--color-text-secondary)",
                            }}
                          >
                            <ChevronRight
                              size={16}
                              style={{
                                color: "var(--color-accent)",
                                flexShrink: 0,
                                marginTop: 2,
                              }}
                            />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {exp.tools.map((tool) => (
                        <span key={tool} className="badge">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <FolderOpen size={32} style={{ color: "var(--color-accent)" }} />
            <h2 style={{ margin: 0 }}>Major Projects</h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{
                  background: "linear-gradient(135deg, var(--color-surface-elevated) 0%, var(--color-surface) 100%)",
                }}
              >
                <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>
                  {project.category}
                </span>
                <h3 style={{ marginBottom: "0.5rem" }}>{project.title}</h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--color-accent)",
                    marginBottom: "1rem",
                  }}
                >
                  {project.role}
                </p>
                <p style={{ marginBottom: "1.5rem" }}>{project.description}</p>

                {/* Highlights */}
                <div>
                  <h4
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-primary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Highlights:
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="badge badge-accent">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @media (max-width: 768px) {
          .timeline-line {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
