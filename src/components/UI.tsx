import { motion } from "framer-motion";
import React, { type ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  key?: React.Key;
}

export function GlassCard({ children, className, hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.01, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.2)" } : undefined}
      onClick={onClick}
      className={cn(
        "glass rounded-3xl p-6 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10 space-y-3">
      <motion.p 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] ml-1"
      >
        {subtitle || "Section"}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl font-display font-bold tracking-tighter leading-none"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={cn(i === 1 ? "text-gradient block mt-1" : "text-white")}>
            {word}{' '}
          </span>
        ))}
      </motion.h2>
    </div>
  );
}

export function ProgressBar({ label, value, colorClass }: { label: string; value: number; colorClass?: string; key?: React.Key }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center text-[10px] tracking-widest uppercase font-bold text-white/50">
        <span>{label}</span>
        <span className="font-mono text-primary">{value}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn("h-full bg-primary", colorClass)}
        />
      </div>
    </div>
  );
}

export function Button({ 
  children, 
  variant = 'primary', 
  className,
  onClick,
  disabled
}: { 
  children: ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const variants = {
    primary: "bg-primary text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-colors duration-500",
    secondary: "bg-white text-black font-bold uppercase text-[10px] tracking-[0.2em] neo-glow-purple",
    outline: "border border-white/10 text-white/40 hover:text-white hover:border-white/30 uppercase text-[10px] tracking-[0.2em] font-bold",
    ghost: "text-white/30 hover:text-white hover:bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em]"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
