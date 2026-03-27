"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Pulse AI",
    category: "Healthcare AI",
    desc: "Advanced healthcare collaborator platform.",
    tags: ["Next.js", "FastAPI", "Mistral"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Medical Bot",
    category: "RAG Assistant",
    desc: "Intelligent assistant for medical queries using RAG.",
    tags: ["LlamaIndex", "Python", "VectorDB"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "OrderBot Restaurant",
    category: "E-commerce Bot",
    desc: "Customer service agent for menu ordering.",
    tags: ["Langchain", "OpenAI", "React"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("projects.title")}</h2>
          <div className="h-1 w-24 bg-accent-orange mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-dark-surface rounded-3xl overflow-hidden border border-white/5 hover:border-accent-orange/30 transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-accent-cyan text-xs font-mono font-bold uppercase mb-1">{p.category}</p>
                    <h3 className="text-2xl font-bold">{p.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/5 rounded-full hover:bg-accent-orange transition-colors"><Github className="w-5 h-5" /></button>
                    <button className="p-2 bg-white/5 rounded-full hover:bg-accent-cyan transition-colors"><ExternalLink className="w-5 h-5" /></button>
                  </div>
                </div>
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-md text-[10px] font-mono text-foreground/50 border border-white/10 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
