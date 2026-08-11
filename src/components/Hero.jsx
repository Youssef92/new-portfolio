import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const CODE_LINES = [
  { indent: 0, tokens: [["const ", "kw"], ["developer", "var"], [" = {", "plain"]] },
  { indent: 1, tokens: [["name", "prop"], [": ", "plain"], ['"Youssef Hassan"', "str"], [",", "plain"]] },
  { indent: 1, tokens: [["role", "prop"], [": ", "plain"], ['"Front-End Developer"', "str"], [",", "plain"]] },
  { indent: 1, tokens: [["stack", "prop"], [": ", "plain"], ["[", "plain"], ['"React"', "str"], [", ", "plain"], ['"Vite"', "str"], [", ", "plain"], ['"Tailwind"', "str"], ["]", "plain"], [",", "plain"]] },
  { indent: 1, tokens: [["focus", "prop"], [": ", "plain"], ['"clean, efficient UI"', "str"], [",", "plain"]] },
  { indent: 1, tokens: [["available", "prop"], [": ", "plain"], ["true", "bool"], [",", "plain"]] },
  { indent: 0, tokens: [["};", "plain"]] },
];

const TOKEN_COLORS = {
  kw: "text-[#c586c0]",
  var: "text-[#4ec9b0]",
  prop: "text-[#9cdcfe]",
  str: "text-[#ce9178]",
  bool: "text-[#569cd6]",
  plain: "text-[#d4d4d4]",
};

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const line = CODE_LINES[visibleLines];
    const fullText = line.tokens.map((t) => t[0]).join("");

    if (visibleChars < fullText.length) {
      const timeout = setTimeout(() => setVisibleChars((c) => c + 1), 18);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((l) => l + 1);
        setVisibleChars(0);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [visibleChars, visibleLines]);

  const renderLine = (line, isCurrent, charsToShow) => {
    let consumed = 0;
    return line.tokens.map(([text, type], idx) => {
      const start = consumed;
      consumed += text.length;
      if (!isCurrent) {
        return (
          <span key={idx} className={TOKEN_COLORS[type]}>
            {text}
          </span>
        );
      }
      const visible = Math.max(0, Math.min(text.length, charsToShow - start));
      return (
        <span key={idx} className={TOKEN_COLORS[type]}>
          {text.slice(0, visible)}
        </span>
      );
    });
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-noise"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-coral/10 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-14 items-center w-full">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="min-w-0"
        >
          <p className="font-mono text-sm text-accent-2 mb-4">
            {"// hello, I'm"}
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
            Youssef Hassan
          </h1>
          <p className="font-display text-2xl md:text-3xl text-muted mt-3">
            Front-End Developer
          </p>
          <p className="text-muted mt-6 text-lg leading-relaxed max-w-md">
            Front-End Developer focused on building clean, efficient, and
            user-friendly React applications that bring your ideas to life.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-ink font-semibold px-6 py-3 hover:bg-accent-2 transition-colors"
            >
              View my work
              <ArrowUpRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-text hover:border-accent/60 transition-colors"
            >
              Hire me
            </a>
          </div>
        </motion.div>

        {/* Right: animated code card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative min-w-0"
        >
          <div className="rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-muted">
                developer.js
              </span>
            </div>
            <pre className="p-6 font-mono text-sm md:text-[15px] leading-7 overflow-x-auto whitespace-pre-wrap break-words min-h-[260px]">
              <code>
                {CODE_LINES.slice(0, visibleLines + 1).map((line, i) => {
                  const isCurrent = i === visibleLines;
                  const isDone = i < visibleLines;
                  return (
                    <div key={i} style={{ paddingInlineStart: `${line.indent * 1.5}rem` }}>
                      {renderLine(line, isCurrent, visibleChars)}
                      {isCurrent && (
                        <span className="inline-block w-[2px] h-[1em] bg-accent-2 align-middle ml-0.5 animate-pulse" />
                      )}
                      {!isCurrent && !isDone && null}
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent-2 transition-colors"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
