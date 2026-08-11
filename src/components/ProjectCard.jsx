import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Expand, Check } from "lucide-react";
import Lightbox from "./Lightbox";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const checkVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1], delay: 0.12 },
  },
};

export default function ProjectCard({ project, index }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 ${
        index !== 0 ? "border-t border-border" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative group ${reversed ? "lg:order-2" : ""}`}>
        <div
          className="absolute -inset-3 rounded-3xl opacity-20 blur-2xl transition-opacity group-hover:opacity-30 pointer-events-none"
          style={{ background: project.accent }}
        />
        <div
          onClick={() => setLightboxOpen(true)}
          className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40 cursor-zoom-in"
        >
          <img
            src={project.images[activeImage].src}
            alt={`${project.name} — ${project.images[activeImage].label}`}
            loading="lazy"
            decoding="async"
            className="w-full aspect-16/10 object-cover object-top transition-all duration-500"
          />
          <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center h-11 w-11 rounded-full bg-ink/70 border border-border/80 text-text">
              <Expand size={18} />
            </span>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          {project.images.map((img, i) => (
            <button
              key={img.label}
              onClick={() => setActiveImage(i)}
              className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                activeImage === i
                  ? "border-accent text-accent-2 bg-accent/10"
                  : "border-border text-muted hover:text-text"
              }`}
            >
              {img.label}
            </button>
          ))}
        </div>
      </div>

      {/* Copy */}
      <div className={reversed ? "lg:order-1" : ""}>
        <p className="font-mono text-sm text-muted mb-2">
          0{index + 1} —{" "}
          <span style={{ color: project.accent }}>{project.tagline}</span>
        </p>
        <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="text-muted mt-5 leading-relaxed">{project.description}</p>

        {project.features && (
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-6 space-y-2.5"
          >
            {project.features.map((feature) => (
              <motion.li
                key={feature}
                variants={itemVariants}
                className="flex items-start gap-2.5 text-[15px] text-muted"
              >
                <motion.span
                  variants={checkVariants}
                  className="mt-0.75 flex items-center justify-center h-4 w-4 rounded-full shrink-0"
                  style={{
                    backgroundColor: `${project.accent}26`,
                    color: project.accent,
                  }}
                >
                  <Check size={11} strokeWidth={3} />
                </motion.span>
                <span className="leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-surface-2 border border-border text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 font-semibold text-text hover:text-accent-2 transition-colors"
        >
          Visit live site
          <ArrowUpRight size={18} />
        </a>
      </div>

      <Lightbox
        open={lightboxOpen}
        images={project.images}
        index={activeImage}
        onIndexChange={setActiveImage}
        onClose={() => setLightboxOpen(false)}
      />
    </motion.div>
  );
}
