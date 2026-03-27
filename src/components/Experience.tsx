"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const experience = [
  {
    year: "2024 - Present",
    title: "AI & Mechanical Engineer",
    company: "Freelance / Projects",
    desc: "Specializing in RAG architectures and autonomous agent development for industrial optimization.",
  },
  {
    year: "2022 - 2023",
    title: "Mechanical Design Specialist",
    company: "Engineering Firm",
    desc: "Worked on advanced 3D modeling and structural analysis for complex mechanical systems.",
  },
  {
    year: "2020 - 2022",
    title: "Robotics Research Assistant",
    company: "University Lab",
    desc: "Focused on sensor fusion and navigation algorithms for autonomous mobile robots.",
  },
];

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-24 bg-accent-cyan mx-auto" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-accent-cyan/20 -translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent-orange rounded-full -translate-x-1/2 border-4 border-dark-bg z-10" />

                <div className="w-full md:w-1/2 pl-8 md:pl-0">
                  <div className={`p-6 bg-dark-surface rounded-2xl border border-white/5 hover:border-accent-orange/30 transition-all ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <span className="text-accent-cyan font-mono text-xs font-bold">{exp.year}</span>
                    <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                    <p className="text-foreground/50 text-sm mb-2">{exp.company}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
