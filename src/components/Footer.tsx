"use client";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-accent-orange rounded-sm rotate-45 flex items-center justify-center">
              <span className="text-white font-bold -rotate-45 text-[10px]">B</span>
            </div>
            <span className="font-mono font-bold tracking-tighter text-lg">K.BEN</span>
          </div>
          <p className="text-sm text-foreground/40 font-mono">
            Merging Mechanics & Intelligence.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} DOH Kodzo Ben. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-mono text-foreground/40">
            <a href="#" className="hover:text-accent-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
