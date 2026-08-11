import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Radio,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";

const SERVICES = [
  {
    icon: Code2,
    title: "React Web App Development",
    description:
      "Full front-end builds from scratch — page structure, routing, and a clean, maintainable component architecture.",
  },
  {
    icon: Sparkles,
    title: "Responsive UI & Animations",
    description:
      "Interfaces that hold up on any screen, with tasteful motion (Framer Motion) that adds polish without slowing things down.",
  },
  {
    icon: Radio,
    title: "API & Real-time Integration",
    description:
      "Connecting the front-end to real backends, plus live features like real-time notifications and chat (SignalR).",
  },
  {
    icon: ShieldCheck,
    title: "Forms, Validation & Auth Flows",
    description:
      "Reliable forms with real validation (React Hook Form + Zod), login/signup, and extra security like 2FA when needed.",
  },
  {
    icon: LayoutDashboard,
    title: "Multi-Role Dashboards",
    description:
      "Separate, protected dashboards per user type — admins, owners, clients — each seeing only what they should.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-surface/40 border-y border-border"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-accent-2 mb-3"
        >
          {"// 04_services"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        >
          What I can build for you.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
            >
              <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-accent/10 text-accent-2">
                <service.icon size={20} />
              </span>
              <h3 className="font-display text-lg font-semibold mt-4">
                {service.title}
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
