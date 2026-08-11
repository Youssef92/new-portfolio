import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const CV_PATH = "/Youssef_Hassan_CV.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 h-16">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-text shrink-0"
        >
          Youssef<span className="text-accent">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-6 font-mono text-sm text-muted">
          {LINKS.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-text transition-colors whitespace-nowrap"
              >
                <span className="text-accent">0{i + 1}.</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CV_PATH}
            download
            aria-label="Download CV"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text hover:border-accent/60 transition-colors"
          >
            <Download size={15} />
            <span className="hidden md:inline">CV</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full border border-accent/40 px-4 py-2 text-sm font-mono text-accent-2 hover:bg-accent/10 transition-colors"
          >
            Let's talk
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-text"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="lg:hidden bg-surface border-t border-border"
        >
          <ul className="flex flex-col px-6 py-4 gap-4 font-mono text-sm text-muted">
            {LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-text transition-colors"
                >
                  <span className="text-accent">0{i + 1}.</span> {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 pt-2 border-t border-border">
              <a
                href={CV_PATH}
                download
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 text-text"
              >
                <Download size={15} />
                Download CV
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-accent-2"
              >
                Let's talk →
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
