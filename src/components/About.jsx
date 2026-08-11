import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket } from "lucide-react";

const POINTS = [
  {
    icon: Code2,
    title: "Clean, structured code",
    body: "I write components that are easy to read, extend, and hand off — no shortcuts that come back to bite you later.",
  },
  {
    icon: Rocket,
    title: "3 shipped applications",
    body: "In one focused year, I've built and deployed 3 full-scale React applications — real products, real users, real backends.",
  },
  {
    icon: Sparkles,
    title: "Full ecosystem, not just React",
    body: "Routing, forms & validation, real-time data, auth flows, animation — I build the whole front-end, not just components.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-accent-2 mb-3"
        >
          {"// 01_about"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        >
          I turn ideas into fast, reliable{" "}
          <span className="text-gradient">React applications</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg mt-6 max-w-2xl leading-relaxed"
        >
          I'm a front-end developer who specializes in React. Over the past
          year I've built three complete, production-style applications from
          the ground up — each with real authentication, real APIs, and real
          design systems — and I bring that same care to every project I
          take on.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors"
            >
              <point.icon className="text-accent-2" size={24} />
              <h3 className="font-display text-lg font-semibold mt-4">
                {point.title}
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
