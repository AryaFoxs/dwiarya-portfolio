"use client";

import { motion } from "framer-motion";
import {
  Palette,
  Monitor,
  Users,
  Video,
  Wand2,
  Mic,
  FileText,
} from "lucide-react";
import { skillCategories, toolCategories } from "@/lib/data";

const categoryIcons = {
  "Creative Production": Palette,
  "Technical Skills": Monitor,
  "Soft Skills": Users,
};

const toolIcons = {
  "Video & Motion": Video,
  "Graphics & Visual": Wand2,
  "Live Streaming": Mic,
  Productivity: FileText,
};

export default function SkillsPage() {
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
              Skills
            </motion.span>
            <h1 style={{ marginBottom: "1.5rem" }}>
              Skills & <span className="gradient-text">Expertise</span>
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
              A combination of creative abilities, technical proficiency, and 
              interpersonal skills honed through years of professional experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            Core Competencies
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {skillCategories.map((category, index) => {
              const Icon =
                categoryIcons[category.name as keyof typeof categoryIcons] ||
                Palette;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                  style={{ padding: "2rem" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "2rem",
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "1rem",
                        background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={28} style={{ color: "white" }} />
                    </div>
                    <h3 style={{ margin: 0 }}>{category.name}</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                    }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "0.5rem",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.9375rem",
                              fontWeight: 500,
                              color: "var(--color-text-primary)",
                            }}
                          >
                            {skill.name}
                          </span>
                          <span
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: 600,
                              color: "var(--color-primary)",
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          style={{
                            height: 8,
                            borderRadius: 4,
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
                              borderRadius: 4,
                              background: `linear-gradient(90deg, var(--color-primary), var(--color-accent))`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Software */}
      <section
        className="section"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "3rem", textAlign: "center" }}
          >
            Tools & Platforms
          </motion.h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {toolCategories.map((category, index) => {
              const Icon =
                toolIcons[category.name as keyof typeof toolIcons] || Monitor;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <Icon
                      size={24}
                      style={{ color: "var(--color-primary)" }}
                    />
                    <h3 style={{ margin: 0, fontSize: "1.125rem" }}>
                      {category.name}
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    {category.tools.map((tool, toolIndex) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: toolIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          padding: "0.5rem 1rem",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          borderRadius: "0.5rem",
                          backgroundColor: "var(--color-surface-elevated)",
                          color: "var(--color-text-primary)",
                          border: "1px solid var(--color-border)",
                          transition: "all 0.2s ease",
                          cursor: "default",
                        }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Skills */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              padding: "3rem",
              borderRadius: "1.5rem",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <h2 style={{ marginBottom: "1.5rem" }}>
              Always <span className="gradient-text">Learning</span>
            </h2>
            <p
              style={{
                maxWidth: 600,
                margin: "0 auto",
                fontSize: "1.125rem",
                lineHeight: 1.8,
              }}
            >
              The creative industry is constantly evolving, and I&apos;m committed
              to staying at the forefront. Currently exploring AI-enhanced
              workflows, advanced color grading, and emerging broadcast
              technologies.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
