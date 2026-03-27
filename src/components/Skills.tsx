"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Brain, Settings, Code, Terminal } from "lucide-react";

const skillCategories = [
  {
    key: "ai",
    icon: <Brain className="w-6 h-6" />,
    color: "text-accent-cyan",
    skills: ["LLM Fine-Tuning", "RAG Architecture", "AI Agents", "Prompt Engineering", "OpenCV"],
  },
  {
    key: "robotics",
    icon: <Settings className="w-6 h-6" />,
    color: "text-accent-orange",
    skills: ["3D Modeling", "SolidWorks", "Robotics Simulation", "FEA Analysis"],
  },
  {
    key: "programming",
    icon: <Code className="w-6 h-6" />,
    color: "text-accent-cyan",
    skills: ["Python", "C", "Bash", "JavaScript"],
  },
  {
    key: "tools",
    icon: <Terminal className="w-6 h-6" />,
    color: "text-accent-orange",
    skills: ["Langchain", "HuggingFace", "ChromaDB", "PyTorch", "TensorFlow"],
  },
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("skills.title")}</h2>
          <div className="h-1 w-24 bg-accent-orange mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-surface p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-all group"
            >
              <div className={`${cat.color} mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{t(`skills.${cat.key}`)}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-foreground/70 font-mono text-xs">
                    <div className="w-1.5 h-1.5 bg-accent-orange rounded-full" />
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
