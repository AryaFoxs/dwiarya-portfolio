"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/lib/data";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <section className="section" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}
          >
            <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>Contact</span>
            <h1 style={{ marginBottom: "1.5rem" }}>
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p style={{ fontSize: "1.125rem" }}>
              Have a project in mind? Let&apos;s discuss how we can work together.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 style={{ marginBottom: "2rem" }}>Contact Information</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
                <a href={`mailto:${profile.email}`} className="card" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "0.75rem", backgroundColor: "color-mix(in srgb, var(--color-primary) 15%, transparent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Mail size={24} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>Email</p>
                    <p style={{ fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>{profile.email}</p>
                  </div>
                </a>

                <div className="card" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "0.75rem", backgroundColor: "color-mix(in srgb, var(--color-accent) 15%, transparent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <MapPin size={24} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>Location</p>
                    <p style={{ fontWeight: 500, color: "var(--color-text-primary)", margin: 0 }}>{profile.location}</p>
                  </div>
                </div>
              </div>

              <h3 style={{ marginBottom: "1rem" }}>Connect on Social</h3>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ width: 48, height: 48, borderRadius: "0.75rem", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-secondary)" }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="card" style={{ padding: "2rem" }}>
                <h2 style={{ marginBottom: "1.5rem" }}>Send a Message</h2>
                
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "2rem" }}>
                    <CheckCircle size={64} style={{ color: "var(--color-accent)", marginBottom: "1rem" }} />
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-secondary" style={{ marginTop: "1rem" }}>
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-surface-elevated)", color: "var(--color-text-primary)", fontSize: "1rem" }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>Email</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-surface-elevated)", color: "var(--color-text-primary)", fontSize: "1rem" }}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>Subject</label>
                      <input
                        type="text"
                        required
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-surface-elevated)", color: "var(--color-text-primary)", fontSize: "1rem" }}
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.5rem", color: "var(--color-text-primary)" }}>Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--color-border)", backgroundColor: "var(--color-surface-elevated)", color: "var(--color-text-primary)", fontSize: "1rem", resize: "vertical" }}
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-primary"
                      style={{ marginTop: "0.5rem", opacity: isSubmitting ? 0.7 : 1 }}
                    >
                      {isSubmitting ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={18} /> Send Message</>}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
