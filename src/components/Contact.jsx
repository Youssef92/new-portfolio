import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight, Check, Copy } from "lucide-react";

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.5h4.5V23h-4.5V8.5zM8.25 8.5h4.32v1.98h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.9c0-1.65-.03-3.78-2.3-3.78-2.31 0-2.66 1.8-2.66 3.66V23h-4.5V8.5z" />
  </svg>
);

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.14c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.94.1-.73.4-1.24.72-1.52-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.58.23 2.75.11 3.04.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z" />
  </svg>
);

const EMAIL = "youssef.h.dev@gmail.com";
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const CHANNELS = [
  {
    label: "Email",
    value: EMAIL,
    href: GMAIL_COMPOSE_URL,
    icon: Mail,
    external: true,
    copyable: true,
  },
  {
    label: "WhatsApp",
    value: "+20 155 380 3590",
    href: "https://wa.me/201553803590",
    icon: MessageCircle,
    external: true,
    copyable: false,
  },
  {
    label: "LinkedIn",
    value: "youssef-hassan92",
    href: "https://www.linkedin.com/in/youssef-hassan92/",
    icon: LinkedInIcon,
    external: true,
    copyable: false,
  },
  {
    label: "GitHub",
    value: "Youssef92",
    href: "https://github.com/Youssef92",
    icon: GitHubIcon,
    external: true,
    copyable: false,
  },
];

export default function Contact() {
  const [copiedLabel, setCopiedLabel] = useState(null);

  const handleCopyableClick = (e, channel) => {
    // Copy the value too, as a convenience — the link itself opens
    // Gmail compose in a new tab, which works without any local mail app.
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(channel.value).catch(() => {});
    }
    setCopiedLabel(channel.label);
    window.setTimeout(() => {
      setCopiedLabel((current) => (current === channel.label ? null : current));
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-noise overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-accent-2 mb-3"
        >
          {"// 06_contact"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-semibold max-w-2xl mx-auto leading-tight"
        >
          Got a project in mind?{" "}
          <span className="text-gradient">Let's build it.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-muted text-lg mt-5 max-w-xl mx-auto"
        >
          I'm currently available for freelance work. Reach out through
          whichever channel works best for you.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-4 mt-14 max-w-2xl mx-auto">
          {CHANNELS.map((c, i) => {
            const isCopied = copiedLabel === c.label;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                onClick={c.copyable ? (e) => handleCopyableClick(e, c) : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 sm:px-6 py-5 text-left hover:border-accent/40 transition-colors min-w-0"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-surface-2 text-accent-2 shrink-0">
                    <c.icon className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-muted">
                      {isCopied ? "Copied to clipboard!" : c.label}
                    </p>
                    <p
                      className="text-text font-medium truncate"
                      dir="ltr"
                      title={c.value}
                    >
                      {c.value}
                    </p>
                  </div>
                </div>
                {c.copyable ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopyableClick(e, c);
                    }}
                    aria-label={`Copy ${c.label}`}
                    className="shrink-0 p-1 -m-1 rounded-md hover:bg-surface-2 transition-colors"
                  >
                    {isCopied ? (
                      <Check size={18} className="text-accent-2" />
                    ) : (
                      <Copy
                        size={16}
                        className="text-muted group-hover:text-accent-2 transition-colors"
                      />
                    )}
                  </button>
                ) : (
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-accent-2 transition-colors shrink-0"
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        <p className="font-mono text-xs text-muted mt-6">
          Tapping Email opens Gmail with my address ready to go — and copies
          it to your clipboard too.
        </p>
      </div>
    </section>
  );
}
