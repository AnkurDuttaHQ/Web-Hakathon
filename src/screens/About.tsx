import { motion } from "framer-motion";
import { GraduationCap, Milestone, Code2 } from "lucide-react";
import { GlassCard, SectionHeader } from "../components/UI";
import { PORTFOLIO_DATA } from "../constants";

export function AboutScreen() {
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

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-32 px-6 pt-12 space-y-12"
    >
      <SectionHeader title="About Me" subtitle="My Academic Journey" />

      {/* Intro */}
      <motion.div variants={item}>
        <GlassCard className="p-6 space-y-4">
          <div className="flex items-center gap-4 text-primary">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-display font-semibold">Vision & Goal</h3>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {PORTFOLIO_DATA.profile.bio}
          </p>
        </GlassCard>
      </motion.div>

      {/* Education */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="w-5 h-5 text-secondary" />
          <h3 className="text-xl font-display font-bold">Education</h3>
        </div>
        {PORTFOLIO_DATA.about.education.map((edu, idx) => (
          <motion.div key={idx} variants={item}>
             <GlassCard className="p-5 border-l-2 border-l-secondary relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <GraduationCap className="w-24 h-24" />
                </div>
                <p className="text-xs font-mono text-secondary mb-1">{edu.period}</p>
                <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.description}</p>
             </GlassCard>
          </motion.div>
        ))}
      </section>

      {/* Timeline Journey */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 mb-4">
          <Milestone className="w-5 h-5 text-accent" />
          <h3 className="text-xl font-display font-bold">The Journey</h3>
        </div>

        <div className="relative pl-6 space-y-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-30" />
          
          {PORTFOLIO_DATA.about.journey.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="relative"
            >
              <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-black border-2 border-primary z-10" />
              <div className="space-y-1">
                <span className="text-xs font-display font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{step.year}</span>
                <h4 className="text-base font-bold text-white pt-1">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
