"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Users, Mic } from "lucide-react";
import { trainings } from "@/lib/data";

export default function TrainingPage() {
  return (
    <>
      <section className="section" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
          >
            <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>
              Training & Speaking
            </span>
            <h1 style={{ marginBottom: "1.5rem" }}>
              Sharing <span className="gradient-text">Knowledge</span>
            </h1>
            <p style={{ fontSize: "1.125rem" }}>
              Beyond projects, I share expertise through training and speaking.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
              { icon: Mic, value: "4", label: "Training Sessions", color: "var(--color-primary)" },
              { icon: Users, value: "100+", label: "Students Trained", color: "var(--color-accent)" },
              { icon: GraduationCap, value: "1", label: "Partner Institution", color: "var(--color-accent-alt)" },
            ].map((stat) => (
              <motion.div key={stat.label} className="card" style={{ textAlign: "center", padding: "2rem" }}>
                <stat.icon size={32} style={{ color: stat.color, marginBottom: "1rem" }} />
                <div style={{ fontSize: "2rem", fontWeight: 700 }}>{stat.value}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <h2 style={{ marginBottom: "2rem" }}>Training Sessions</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.5rem" }}>
            {trainings.map((training) => (
              <motion.div key={training.id} className="card" whileHover={{ y: -4 }}>
                <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>
                  <Calendar size={12} /> {training.date}
                </span>
                <h3 style={{ marginBottom: "0.5rem" }}>{training.title}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                  <MapPin size={16} style={{ color: "var(--color-accent)" }} />
                  <span style={{ color: "var(--color-primary)" }}>{training.institution}</span>
                </div>
                <p>{training.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
