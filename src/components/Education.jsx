import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-accent-2 mb-3"
        >
          {"// 02_education"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        >
          Fresh out of university, ready to build.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-accent/10 text-accent-2 shrink-0">
                <GraduationCap size={20} />
              </span>
              <span className="font-mono text-xs text-muted whitespace-nowrap">
                Graduated 2026
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold mt-4">
              B.Sc. in Computer Science
            </h3>
            <p className="text-muted text-sm mt-1">
              Faculty of Computers &amp; Information, Tanta University
            </p>
            <span className="inline-block mt-4 font-mono text-xs px-2.5 py-1 rounded-md bg-surface-2 border border-border text-accent-2">
              GPA 3.5 / 4.0
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex items-center justify-center h-11 w-11 rounded-xl bg-accent/10 text-accent-2 shrink-0">
                <Award size={20} />
              </span>
              <span className="font-mono text-xs text-muted whitespace-nowrap">
                1 month
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold mt-4">
              Front-End Web Development Training
            </h3>
            <p className="text-muted text-sm mt-1">
              ITI — Information Technology Institute
            </p>
            <p className="text-muted text-sm mt-4 leading-relaxed">
              Intensive hands-on training covering React fundamentals,
              component architecture, and modern front-end tooling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
