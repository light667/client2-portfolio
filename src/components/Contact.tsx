"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-orange/5 -skew-x-12 -z-10 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t("contact.title")}</h2>
            <p className="text-lg text-foreground/70 mb-12">
              Ready to collaborate on the next industrial-AI breakthrough? Reach out through any of these channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-foreground/50 uppercase">Email</p>
                  <p className="text-lg font-bold">bendoh2006@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-xl flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-foreground/50 uppercase">WhatsApp</p>
                  <p className="text-lg font-bold">+228 96 62 66 24</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-mono text-foreground/50 uppercase">Location</p>
                  <p className="text-lg font-bold">Lomé, Togo</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="p-3 bg-dark-surface rounded-lg border border-white/5 hover:border-accent-cyan transition-all text-foreground/70 hover:text-accent-cyan">
                <Github />
              </a>
              <a href="#" className="p-3 bg-dark-surface rounded-lg border border-white/5 hover:border-accent-cyan transition-all text-foreground/70 hover:text-accent-cyan">
                <Linkedin />
              </a>
              <a href="#" className="p-3 bg-dark-surface rounded-lg border border-white/5 hover:border-accent-cyan transition-all text-foreground/70 hover:text-accent-cyan">
                <Twitter />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-surface border border-white/5 p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-foreground/50 uppercase">Full Name</label>
                  <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-cyan transition-colors outline-none" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-foreground/50 uppercase">Email Address</label>
                  <input type="email" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-cyan transition-colors outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-foreground/50 uppercase">Subject</label>
                <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-cyan transition-colors outline-none" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-foreground/50 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:border-accent-cyan transition-colors outline-none resize-none" placeholder="How can we work together?"></textarea>
              </div>
              <button className="w-full py-4 bg-accent-orange text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent-orange/90 transition-all shadow-lg shadow-accent-orange/20">
                {t("contact.send")}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
