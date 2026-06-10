import { motion } from "framer-motion";
import { Github, Star, GitFork, Book, Activity, TrendingUp } from "lucide-react";
import { GlassCard, SectionHeader, ProgressBar, cn } from "../components/UI";
import { PORTFOLIO_DATA } from "../constants";

export function GitHubScreen() {
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

  const ghStats = [
    { label: "Repositories", value: "24", icon: Book },
    { label: "Stars Received", value: "12", icon: Star },
    { label: "Forks", value: "5", icon: GitFork },
    { label: "Contributions", value: "450+", icon: Activity },
  ];

  const languages = [
    { name: "JavaScript", value: 45, color: "bg-yellow-400" },
    { name: "TypeScript", value: 25, color: "bg-blue-500" },
    { name: "Python", value: 15, color: "bg-blue-400" },
    { name: "HTML/CSS", value: 10, color: "bg-orange-500" },
    { name: "Other", value: 5, color: "bg-gray-500" },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-32 px-6 pt-12 space-y-12"
    >
      <SectionHeader title="Analytics" subtitle="GitHub Status & Activity" />

      {/* GitHub Profile Card */}
      <motion.div variants={item}>
        <GlassCard className="relative overflow-hidden p-6 bg-gradient-to-br from-gray-900 to-black border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 p-1">
              <img src="https://github.com/AnkurDuttaHQ.png" alt="Ankur" className="w-full h-full rounded-xl" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold">@AnkurDuttaHQ</h3>
              <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                <Activity className="w-3 h-3" /> 
                <span>Full Stack & AI Architect</span>
              </div>
            </div>
            <a 
              href={PORTFOLIO_DATA.profile.github} 
              target="_blank" 
              rel="noreferrer"
              className="ml-auto p-2 glass rounded-xl text-primary"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ghStats.map((stat, i) => (
              <div key={i} className="space-y-1 p-3 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-500">
                   <stat.icon className="w-3 h-3" />
                   <span className="text-[10px] uppercase font-bold tracking-widest">{stat.label}</span>
                </div>
                <p className="text-lg font-display font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Contribution Preview (Simulated) */}
      <section className="space-y-4">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-gray-500 ml-1 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" /> Contribution Streak
        </h3>
        <GlassCard className="p-4 flex flex-col gap-1">
           <div className="grid grid-cols-7 gap-1 h-32">
             {Array.from({ length: 49 }).map((_, i) => {
               const opacity = [0.05, 0.1, 0.2, 0.4, 0.6, 0.8][Math.floor(Math.random() * 6)];
               return (
                 <motion.div
                   key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.01 }}
                   className="rounded-sm bg-primary"
                   style={{ opacity }}
                 />
               );
             })}
           </div>
           <div className="flex justify-between items-center mt-2 text-[10px] text-gray-600 uppercase font-bold tracking-tighter">
              <span>Less</span>
              <div className="flex gap-1">
                {[0.1, 0.2, 0.4, 0.6, 0.8].map(o => <div key={o} className="w-2 h-2 rounded-sm bg-primary" style={{opacity: o}} />)}
              </div>
              <span>More</span>
           </div>
        </GlassCard>
      </section>

      {/* Language Stack */}
      <section className="space-y-4">
        <h3 className="text-sm font-display font-bold uppercase tracking-widest text-gray-500 ml-1">Language Utilization</h3>
        <GlassCard className="p-6 space-y-5">
           {languages.map((lang) => (
             <ProgressBar 
                key={lang.name} 
                label={lang.name} 
                value={lang.value} 
                colorClass={lang.color} 
             />
           ))}
        </GlassCard>
      </section>
      
      <motion.div variants={item} className="flex justify-center">
        <a 
          href={PORTFOLIO_DATA.profile.github} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary transition-colors"
        >
          View Full Graph on GitHub <TrendingUp className="w-3 h-3" />
        </a>
      </motion.div>
    </motion.div>
  );
}
