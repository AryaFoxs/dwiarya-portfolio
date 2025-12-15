"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Play, X, ExternalLink, Filter } from "lucide-react";
import { portfolioItems, portfolioCategories } from "@/lib/data";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
              Portfolio
            </motion.span>
            <h1 style={{ marginBottom: "1.5rem" }}>
              Creative <span className="gradient-text">Works</span>
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
              Explore my collection of work spanning video production, motion graphics,
              graphic design, and live broadcast productions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "3rem",
              justifyContent: "center",
            }}
          >
            <Filter
              size={20}
              style={{ color: "var(--color-text-muted)" }}
            />
            {portfolioCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  borderRadius: "9999px",
                  border: "1px solid var(--color-border)",
                  backgroundColor:
                    activeCategory === category
                      ? "var(--color-primary)"
                      : "var(--color-surface)",
                  color:
                    activeCategory === category
                      ? "white"
                      : "var(--color-text-secondary)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    position: "relative",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    cursor: "pointer",
                  }}
                  onClick={() => setSelectedItem(item)}
                  whileHover={{ y: -8 }}
                >
                  {/* Thumbnail */}
                  <div
                    style={{
                      position: "relative",
                      aspectRatio: "16/9",
                      backgroundColor: "var(--color-surface-elevated)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Placeholder for thumbnail */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {item.category === "Video & Motion" ||
                      item.category === "Live Production" ? (
                        <Play size={40} />
                      ) : (
                        <Eye size={40} />
                      )}
                      <span style={{ fontSize: "0.75rem" }}>
                        {item.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(0,0,0,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          backgroundColor: "var(--color-primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Eye size={24} style={{ color: "white" }} />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.25rem" }}>
                    <span className="badge badge-primary" style={{ marginBottom: "0.75rem" }}>
                      {item.category}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {item.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: "center",
                padding: "4rem 2rem",
                color: "var(--color-text-muted)",
              }}
            >
              <p>No items found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              zIndex: 1000,
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: 800,
                maxHeight: "90vh",
                overflow: "auto",
                backgroundColor: "var(--color-background)",
                borderRadius: "1rem",
                position: "relative",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <X size={20} />
              </button>

              {/* Media Placeholder */}
              <div
                style={{
                  aspectRatio: "16/9",
                  backgroundColor: "var(--color-surface-elevated)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  <Play size={64} />
                  <span>Media Preview</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "2rem" }}>
                <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>
                  {selectedItem.category}
                </span>
                <h2 style={{ marginBottom: "1rem" }}>{selectedItem.title}</h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  {selectedItem.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {selectedItem.tags.map((tag) => (
                    <span key={tag} className="badge badge-accent">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <ExternalLink size={18} />
                  View Full Project
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
