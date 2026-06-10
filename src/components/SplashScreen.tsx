import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 2000),
      setTimeout(onComplete, 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: stage >= 1 ? 1 : 0.5, opacity: stage >= 1 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse-slow" />
        <div className="relative glass p-6 rounded-3xl border-primary/30 neo-glow">
          <Cpu className="w-16 h-16 text-primary" />
        </div>
      </motion.div>

      <div className="space-y-2 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: stage >= 2 ? 0 : 20, opacity: stage >= 2 ? 1 : 0 }}
          className="text-4xl font-display font-bold tracking-tighter"
        >
          Ankur <span className="text-secondary">Dutta</span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: stage >= 2 ? 0 : 10, opacity: stage >= 2 ? 0.6 : 0 }}
          className="text-sm font-medium tracking-[0.2em] text-gray-400 uppercase"
        >
          Full Stack Developer & AI Enthusiast
        </motion.p>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-12 w-48 h-1 bg-gray-900 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </div>
  );
}
