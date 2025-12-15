"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled
          ? "color-mix(in srgb, var(--color-background) 80%, transparent)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--color-border)" : "none",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            textDecoration: "none",
          }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Arya<span style={{ color: "var(--color-primary)" }}>Wiguna</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      padding: "0.5rem 1rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: isActive
                        ? "var(--color-primary)"
                        : "var(--color-text-secondary)",
                      textDecoration: "none",
                      borderRadius: "0.5rem",
                      transition: "all 0.2s ease",
                      position: "relative",
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          backgroundColor: "var(--color-primary)",
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <ThemeToggle />
        </motion.div>

        {/* Mobile Menu Button */}
        <div
          className="mobile-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <ThemeToggle />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 40,
              height: 40,
              borderRadius: "0.5rem",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: "var(--color-background)",
              borderBottom: "1px solid var(--color-border)",
              overflow: "hidden",
            }}
          >
            <ul
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                padding: "1rem 1.5rem",
                listStyle: "none",
                margin: 0,
              }}
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      style={{
                        display: "block",
                        padding: "0.75rem 1rem",
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: isActive
                          ? "var(--color-primary)"
                          : "var(--color-text-secondary)",
                        textDecoration: "none",
                        borderRadius: "0.5rem",
                        backgroundColor: isActive
                          ? "var(--color-surface)"
                          : "transparent",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
