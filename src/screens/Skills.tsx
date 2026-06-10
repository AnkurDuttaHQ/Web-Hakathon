import { motion } from "framer-motion";
import { Layout, Server, Languages, Brain, Settings } from "lucide-react";
import { GlassCard, SectionHeader, ProgressBar, cn } from "../components/UI";
import { PORTFOLIO_DATA } from "../constants";

export function SkillsScreen() {
  const categories = [
    { id: 'frontend', title: 'Frontend', icon: Layout, data: PORTFOLIO_DATA.skills.frontend, color: 'bg-primary' },
    { id: 'backend', title: 'Backend', icon: Server, data: PORTFOLIO_DATA.skills.backend, color: 'bg-secondary' },
    { id: 'languages', title: 'Languages', icon: Languages, data: PORTFOLIO_DATA.skills.languages, color: 'bg-accent' },
    { id: 'ai', title: 'AI & ML', icon: Brain, data: PORTFOLIO_DATA.skills.ai_ml, color: 'bg-pink-500' },
    { id: 'tools', title: 'Tools & Design', icon: Settings, data: PORTFOLIO_DATA.skills.tools, color: 'bg-orange-500' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      <SectionHeader title="My Expertise" subtitle="Skills & Tech Stack" />

      {categories.map((cat) => (
        <section key={cat.id} className="space-y-6">
          <motion.div variants={item} className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg bg-opacity-20", cat.color.replace('bg-', 'bg-'))}>
              <cat.icon className={cn("w-5 h-5", cat.color.replace('bg-', 'text-'))} />
            </div>
            <h3 className="text-xl font-display font-bold">{cat.title}</h3>
          </motion.div>

          <motion.div variants={item}>
            <GlassCard className="p-6 space-y-6">
              {cat.data.map((skill) => (
                <ProgressBar 
                  key={skill.name} 
                  label={skill.name} 
                  value={skill.level} 
                  colorClass={cat.color}
                />
              ))}
            </GlassCard>
          </motion.div>
        </section>
      ))}

      {/* Learning Status */}
      <motion.div variants={item} className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 text-center space-y-2">
        <p className="text-gray-400 text-sm italic font-medium">
          "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
        </p>
        <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold">Currently Mastering: GenAI & Cloud Computing</p>
      </motion.div>
    </motion.div>
  );
}
