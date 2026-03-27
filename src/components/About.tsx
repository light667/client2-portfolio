"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Cpu, Zap, Target } from "lucide-react";

export function About() {
  const { t } = useTranslation();

  const values = [
    { icon: <Cpu className="w-6 h-6" />, title: "Precision", color: "text-accent-orange" },
    { icon: <Zap className="w-6 h-6" />, title: "Innovation", color: "text-accent-cyan" },
    { icon: <Target className="w-6 h-6" />, title: "Efficiency", color: "text-accent-orange" },
  ];

  return (
    <section id="about" className="py-24 bg-dark-bg/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-accent-orange/20 to-accent-cyan/20 rounded-2xl border border-white/10 p-1">
              <div className="w-full h-full bg-dark-bg rounded-2xl flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="bg-accent-orange/5 border border-accent-orange/20 rounded-xl flex flex-col items-center justify-center p-4">
                    <span className="text-4xl font-bold text-accent-orange">MECH</span>
                  </div>
                  <div className="bg-accent-cyan/5 border border-accent-cyan/20 rounded-xl flex flex-col items-center justify-center p-4">
                    <span className="text-4xl font-bold text-accent-cyan">AI</span>
                  </div>
                  <div className="col-span-2 bg-foreground/5 border border-foreground/10 rounded-xl flex items-center justify-center p-4">
                    <p className="font-mono text-sm text-center opacity-70">
                      SYNERGY // AUTOMATION // INTELLIGENCE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-accent-cyan opacity-50" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-accent-orange opacity-50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              {t("about.title")}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {t("about.content")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className={`${v.color} mb-2`}>{v.icon}</div>
                  <h4 className="font-bold font-mono text-sm uppercase tracking-wider">{v.title}</h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
