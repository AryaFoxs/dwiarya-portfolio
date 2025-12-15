"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Monitor,
  Palette,
} from "lucide-react";
import { profile, experiences, skillCategories } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 72px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Animated Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "10%",
              right: "10%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              bottom: "20%",
              left: "5%",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, var(--color-accent-alt) 0%, transparent 70%)",
              filter: "blur(80px)",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Grid Pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              opacity: 0.3,
            }}
          />
        </div>

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              maxWidth: 700,
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                marginBottom: "1.5rem",
              }}
            >
              <Sparkles
                size={16}
                style={{ color: "var(--color-accent)" }}
              />
              <span
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                Available for new projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1
              style={{
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{profile.name.split(" ").slice(2).join(" ")}</span>
            </h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                fontWeight: 500,
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              {profile.title}
            </motion.p>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "var(--color-text-secondary)",
                marginBottom: "2rem",
                maxWidth: 560,
              }}
            >
              {profile.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                  style={{
                    fontSize: "1rem",
                    padding: "1rem 2rem",
                  }}
                >
                  <Play size={18} />
                  Lihat Portfolio
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-secondary"
                  style={{
                    fontSize: "1rem",
                    padding: "1rem 2rem",
                  }}
                >
                  Hubungi Saya
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 2, repeat: Infinity },
          }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--color-text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: 2,
              height: 40,
              background:
                "linear-gradient(to bottom, var(--color-primary), transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="section" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: Zap,
                value: "4+",
                label: "Years Experience",
                color: "var(--color-primary)",
              },
              {
                icon: Monitor,
                value: "50+",
                label: "Live Productions",
                color: "var(--color-accent)",
              },
              {
                icon: Palette,
                value: "100+",
                label: "Designs Created",
                color: "var(--color-accent-alt)",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                <stat.icon
                  size={32}
                  style={{
                    color: stat.color,
                    marginBottom: "1rem",
                  }}
                />
                <div
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Experience Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2>Featured Experience</h2>
            <p style={{ maxWidth: 500, margin: "1rem auto 0" }}>
              Highlights from my professional journey in creative production
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {experiences.slice(0, 3).map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  <span className="badge badge-primary">{exp.duration}</span>
                </div>
                <h3 style={{ marginBottom: "0.5rem" }}>{exp.title}</h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {exp.company}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    flex: 1,
                  }}
                >
                  {exp.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  {exp.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="badge">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            <Link href="/experience">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary"
              >
                View All Experience
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview Section */}
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
              A blend of creative vision and technical expertise
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
                <h3 style={{ marginBottom: "1.5rem" }}>{category.name}</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "0.5rem",
                          fontSize: "0.875rem",
                        }}
                      >
                        <span style={{ color: "var(--color-text-secondary)" }}>
                          {skill.name}
                        </span>
                        <span style={{ color: "var(--color-primary)" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: "var(--color-surface-elevated)",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          style={{
                            height: "100%",
                            borderRadius: 3,
                            background: `linear-gradient(90deg, var(--color-primary), var(--color-accent))`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            <Link href="/skills">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary"
              >
                See All Skills
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              borderRadius: "1.5rem",
              background:
                "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background Pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{ color: "white", marginBottom: "1rem" }}>
                Let&apos;s Create Something Amazing
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.9)",
                  maxWidth: 500,
                  margin: "0 auto 2rem",
                }}
              >
                Have a project in mind? I&apos;d love to bring your creative vision
                to life through stunning visuals and productions.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "1rem 2rem",
                    fontSize: "1rem",
                    fontWeight: 600,
                    backgroundColor: "white",
                    color: "var(--color-primary)",
                    border: "none",
                    borderRadius: "0.5rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  Get in Touch
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
