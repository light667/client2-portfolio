"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Settings } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Industrial Patterns */}
      <div className="absolute inset-0 blueprint-bg -z-10 opacity-20" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent-orange/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-xs font-mono mb-6">
            <Bot className="w-4 h-4" />
            <span>MECHANICAL & AI ENGINEER</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            DOH KODZO <span className="text-accent-cyan">BEN</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-xl">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-orange text-white rounded-lg font-bold flex items-center gap-2 shadow-lg shadow-accent-orange/20 hover:bg-accent-orange/90 transition-all"
            >
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-accent-cyan/30 text-accent-cyan rounded-lg font-bold hover:bg-accent-cyan/10 transition-all"
            >
              {t("nav.contact")}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Animated Gear/Industrial Graphic Placeholder */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-[3px] border-dashed border-accent-cyan/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border-[2px] border-dotted border-accent-orange/30 rounded-full"
            />
            
            <div className="absolute inset-16 rounded-full overflow-hidden border-4 border-accent-cyan/50 p-2 grayscale hover:grayscale-0 transition-all duration-500 bg-dark-surface shadow-2xl shadow-accent-cyan/20">
              <img
                src="/photo.jpeg"
                alt="DOH Kodzo Ben"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/500?text=K.BEN";
                }}
              />
            </div>
            
            {/* Visual Callouts */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-10 -right-10 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-accent-orange/20 shadow-xl"
            >
              <Settings className="w-8 h-8 text-accent-orange animate-spin-slow" />
              <div className="mt-2">
                <p className="text-[10px] font-mono opacity-50 uppercase">Mechanical</p>
                <p className="text-xs font-bold font-mono">Precision</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute bottom-10 -left-10 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-accent-cyan/20 shadow-xl"
            >
              <Bot className="w-8 h-8 text-accent-cyan" />
              <div className="mt-2">
                <p className="text-[10px] font-mono opacity-50 uppercase">Intelligence</p>
                <p className="text-xs font-bold font-mono">Neural Net</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
