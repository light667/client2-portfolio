"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Factory, Cpu, Layers, Database } from "lucide-react";

const services = [
  { key: "s1", icon: <Factory className="w-10 h-10" />, color: "border-accent-orange" },
  { key: "s2", icon: <Cpu className="w-10 h-10" />, color: "border-accent-cyan" },
  { key: "s3", icon: <Layers className="w-10 h-10" />, color: "border-accent-orange" },
  { key: "s4", icon: <Database className="w-10 h-10" />, color: "border-accent-cyan" },
];

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-dark-bg/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("services.title")}</h2>
            <div className="h-1 w-24 bg-accent-cyan" />
          </div>
          <p className="text-foreground/60 max-w-md font-mono text-sm uppercase tracking-wider">
            Soutien technique expert pour l&apos;industrie 4.0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-8 bg-dark-surface rounded-3xl border-l-[6px] ${s.color} hover:bg-white/5 transition-all group flex gap-6`}
            >
              <div className="shrink-0 text-foreground/40 group-hover:text-accent-cyan transition-colors">
                {s.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{t(`services.${s.key}.title`)}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {t(`services.${s.key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
