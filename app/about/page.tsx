"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Calendar } from "lucide-react";
import { profile, skillCategories } from "@/lib/data";

export default function AboutPage() {
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
              About Me
            </motion.span>
            <h1 style={{ marginBottom: "1.5rem" }}>
              Creative Mind Behind{" "}
              <span className="gradient-text">Visual Stories</span>
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
              {profile.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Details */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left Column - Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: "2rem" }}>Personal Details</h2>
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "0.75rem",
                      backgroundColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Mail size={24} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                      Email
                    </p>
                    <a
                      href={`mailto:${profile.email}`}
                      style={{ fontWeight: 500, color: "var(--color-text-primary)" }}
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "0.75rem",
                      backgroundColor: "color-mix(in srgb, var(--color-accent) 15%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapPin size={24} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                      Location
                    </p>
                    <p style={{ fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "0.75rem",
                      backgroundColor: "color-mix(in srgb, var(--color-accent-alt) 15%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <GraduationCap size={24} style={{ color: "var(--color-accent-alt)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                      Education
                    </p>
                    <p style={{ fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>
                      {profile.education.degree}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", margin: 0 }}>
                      {profile.education.institution}
                    </p>
                  </div>
                </div>

                <div
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "0.75rem",
                      backgroundColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Calendar size={24} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
                      Expected Graduation
                    </p>
                    <p style={{ fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>
                      {profile.education.graduationYear}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ marginBottom: "2rem" }}>My Philosophy</h2>
              
              <div
                className="card"
                style={{
                  padding: "2rem",
                  background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%)",
                }}
              >
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  I believe in the power of visual storytelling to captivate audiences and create 
                  memorable experiences. My approach combines creative vision with technical 
                  precision to deliver productions that exceed expectations.
                </p>
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  Whether it&apos;s directing a live esports broadcast, crafting motion graphics, 
                  or designing impactful visuals, I bring the same level of passion and 
                  attention to detail to every project.
                </p>
                <p
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.8,
                  }}
                >
                  My goal is to push creative boundaries while ensuring seamless execution, 
                  transforming ideas into compelling visual narratives that resonate with 
                  audiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2>Core Competencies</h2>
            <p style={{ maxWidth: 500, margin: "1rem auto 0" }}>
              The skills and qualities that define my professional approach
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 style={{ marginBottom: "1.5rem", color: "var(--color-primary)" }}>
                  {category.name}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontSize: "0.9375rem",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "var(--color-accent)",
                        }}
                      />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
