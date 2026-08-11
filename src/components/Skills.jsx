import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    label: "Core",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Vite"],
  },
  {
    label: "Ecosystem",
    skills: ["Tailwind CSS", "React Router", "React Hook Form", "Zod"],
  },
  {
    label: "Integrations",
    skills: ["Firebase", "SignalR (Realtime)", "Axios"],
  },
  {
    label: "Polish",
    skills: ["Framer Motion", "Lucide Icons", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-surface/40 border-y border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-accent-2 mb-3"
        >
          {"// 03_skills"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-semibold max-w-2xl leading-tight"
        >
          The toolkit behind every build.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-text/90 text-[15px] flex items-center gap-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
