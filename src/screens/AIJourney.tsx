import { motion } from "framer-motion";
import { Brain, Cpu, Cloud, Award, Sparkles, Code, CheckCircle2, Circle } from "lucide-react";
import { GlassCard, SectionHeader } from "../components/UI";
import { PORTFOLIO_DATA } from "../constants";

export function AIJourneyScreen() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const icons: Record<string, any> = {
    code: <Code className="w-5 h-5" />,
    brain: <Brain className="w-5 h-5" />,
    cpu: <Cpu className="w-5 h-5" />,
    cloud: <Cloud className="w-5 h-5" />,
    award: <Award className="w-5 h-5" />
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-32 px-6 pt-12 space-y-12"
    >
      <SectionHeader title="Evolution" subtitle="From MERN to AI/ML" />

      {/* Featured AI Hero */}
      <motion.div variants={item}>
        <GlassCard className="relative overflow-hidden p-8 border-primary/30">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="w-32 h-32 text-primary animate-pulse" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
            AI/ML <span className="text-primary underline decoration-primary/50 underline-offset-8">Roadmap</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Bridging the gap between traditional web architectures and intelligent autonomous systems. My journey is focused on creating data-driven experiences that learn and adapt.
          </p>
          <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest">
            <div className="flex h-2 w-2 rounded-full bg-primary" />
            Learning Mode Active
          </div>
        </GlassCard>
      </motion.div>

      {/* Roadmap List */}
      <section className="space-y-6">
        {PORTFOLIO_DATA.ai_journey.map((step, idx) => (
          <motion.div key={idx} variants={item}>
             <GlassCard className="flex items-center gap-6 p-5">
                <div className={`p-4 rounded-2xl ${
                  step.status === 'Completed' 
                    ? 'bg-primary/20 text-primary' 
                    : ['Ongoing', 'Active', 'Learning'].includes(step.status)
                    ? 'bg-primary/10 text-white border border-primary/30 neo-glow' 
                    : 'bg-white/5 text-gray-500'
                }`}>
                   {icons[step.icon]}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-white tracking-tight">{step.title}</h4>
                    {step.status === 'Completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    ) : ['Ongoing', 'Active', 'Learning'].includes(step.status) ? (
                      <div className="relative w-3 h-3 flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </div>
                    ) : (
                      <Circle className="w-4 h-4 text-gray-700" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <p className={`text-[10px] font-mono uppercase tracking-widest ${
                      step.status === 'Completed' 
                        ? 'text-primary/80' 
                        : ['Ongoing', 'Active', 'Learning'].includes(step.status)
                        ? 'text-primary font-bold'
                        : 'text-gray-500'
                    }`}>
                      {step.status}
                    </p>
                    {['Ongoing', 'Active', 'Learning'].includes(step.status) && (
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-primary animate-ping" />
                        <div className="w-1 h-1 rounded-full bg-primary animate-ping delay-75" />
                        <div className="w-1 h-1 rounded-full bg-primary animate-ping delay-150" />
                      </div>
                    )}
                  </div>
                </div>
             </GlassCard>
          </motion.div>
        ))}
      </section>

      {/* Future Vision */}
      <motion.div variants={item} className="space-y-4">
        <h3 className="text-lg font-display font-bold px-1">2026/27 Aspirations</h3>
        <GlassCard className="p-0 border-dashed border-white/20 bg-transparent">
          <div className="p-6">
            <ul className="space-y-4">
              {[
                "Contribute to Open Source AI via GSoC",
                "Build end-to-end LLM powered applications",
                "Deploy distributed ML models on Edge Devices",
                "Integrate Agentic Workflows into MERN stacks"
              ].map((goal, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
