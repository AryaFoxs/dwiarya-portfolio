"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Heart } from "lucide-react";
import { profile, navLinks } from "@/lib/data";

const socialIcons = {
  Mail: Mail,
  Linkedin: Linkedin,
  Instagram: Instagram,
};

const socialLinks = [
  { name: "Email", href: `mailto:${profile.email}`, icon: "Mail" },
  { name: "LinkedIn", href: "#", icon: "Linkedin" },
  { name: "Instagram", href: "#", icon: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <div className="container">
        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            padding: "4rem 0",
          }}
        >
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--color-text-primary)",
                textDecoration: "none",
              }}
            >
              Arya<span style={{ color: "var(--color-primary)" }}>Wiguna</span>
            </Link>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
                maxWidth: 280,
              }}
            >
              Creative Producer & Show Director specializing in esports events,
              live streaming, and visual storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
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
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-text-secondary)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Get in Touch
            </h4>
            <a
              href={`mailto:${profile.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "var(--color-primary)",
                textDecoration: "none",
              }}
            >
              <Mail size={16} />
              {profile.email}
            </a>

            {/* Social Icons */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginTop: "1.5rem",
              }}
            >
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 40,
                      height: 40,
                      borderRadius: "0.5rem",
                      backgroundColor: "var(--color-surface-elevated)",
                      color: "var(--color-text-secondary)",
                      transition: "all 0.2s ease",
                    }}
                    aria-label={link.name}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "1.5rem 0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--color-text-muted)",
              margin: 0,
            }}
          >
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              fontSize: "0.875rem",
              color: "var(--color-text-muted)",
              margin: 0,
            }}
          >
            Made with <Heart size={14} style={{ color: "var(--color-accent-alt)" }} /> in Bali
          </p>
        </div>
      </div>
    </footer>
  );
}
