import { motion } from "framer-motion";
import { Trophy, Calendar, Briefcase, Award, Star, CheckCircle2 } from "lucide-react";
import { GlassCard, SectionHeader } from "../components/UI";
import { PORTFOLIO_DATA } from "../constants";

export function ExperienceScreen() {
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
      <SectionHeader title="Experience & Awards" subtitle="My Professional & Competitive Milestones" />

      {/* 1. Internship & Industry Experience */}
      <section className="space-y-8">
        <h3 className="text-xl font-display font-medium text-white flex items-center gap-2 border-b border-white/5 pb-2">
          <Briefcase className="w-5 h-5 text-primary" /> Work Experience
        </h3>
        
        <div className="relative pl-6 space-y-8">
          {/* Vertical timeline line */}
          <div className="absolute left-1.5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-30" />
          
          {PORTFOLIO_DATA.experiences?.map((exp, idx) => (
            <motion.div key={idx} variants={item} className="relative">
              {/* Timeline outer dot */}
              <div className="absolute -left-[28px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-primary flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>

              <GlassCard className="p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Briefcase className="w-20 h-20 text-white" />
                </div>
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-4">
                  <div>
                    <h4 className="font-bold text-lg text-white leading-tight">{exp.role}</h4>
                    <p className="text-primary text-sm font-medium mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/40 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs text-white/65 flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary/70 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Achievements & Ideathon Milestones */}
      <section className="space-y-8">
        <h3 className="text-xl font-display font-medium text-white flex items-center gap-2 border-b border-white/5 pb-2">
          <Trophy className="w-5 h-5 text-secondary" /> Achievements & Hackathons
        </h3>
        
        <div className="grid grid-cols-1 gap-5">
          {PORTFOLIO_DATA.achievements.map((item_ach, idx) => (
            <motion.div key={idx} variants={item}>
              <GlassCard className="relative p-6 flex gap-5 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-primary" />
                
                <div className="p-3 bg-white/5 rounded-2xl h-fit border border-white/5">
                  {item_ach.type === 'Event' ? (
                    <Trophy className="w-6 h-6 text-yellow-500" />
                  ) : (
                    <Star className="w-6 h-6 text-secondary" />
                  )}
                </div>

                <div className="space-y-1 flex-1">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-bold text-base leading-snug text-white">{item_ach.title}</h4>
                    <span className="text-[10px] font-mono text-white/40 font-bold bg-white/5 px-2 py-0.5 rounded border border-white/5 whitespace-nowrap">
                      {item_ach.date}
                    </span>
                  </div>
                  <p className="text-primary text-xs font-medium">{item_ach.org}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[8px] uppercase font-bold tracking-widest text-white/50">
                      {item_ach.type}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Professional Certifications */}
      <section className="space-y-8">
        <h3 className="text-xl font-display font-medium text-white flex items-center gap-2 border-b border-white/5 pb-2">
          <Award className="w-5 h-5 text-accent" /> Professional Certifications
        </h3>
        
        <div className="grid grid-cols-1 gap-5">
          {PORTFOLIO_DATA.certifications?.map((cert, idx) => (
            <motion.div key={idx} variants={item}>
              <GlassCard className="relative p-6 flex gap-5 overflow-hidden border-white/10 bg-gradient-to-r from-white/[0.01] to-white/[0.03]">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                <div className="p-3 bg-white/5 rounded-2xl h-fit border border-white/5">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-base text-white">{cert.title}</h4>
                    <span className="text-[10px] font-mono text-white/40 font-bold">{cert.date}</span>
                  </div>
                  <p className="text-primary text-xs font-medium">{cert.org}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[8px] uppercase font-bold tracking-widest text-white/50">
                      {cert.type}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Future Aspirations Card */}
      <motion.div variants={item}>
        <GlassCard className="bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-8 border-primary/10 text-center space-y-4">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-2 border border-white/10">
             <Trophy className="w-8 h-8 text-primary animate-bounce" />
          </div>
          <h3 className="text-2xl font-display font-bold">GSoC Contribution Goals</h3>
          <p className="text-gray-400 text-sm max-w-[320px] mx-auto leading-relaxed">
            Targeting open-source contributions inside international AI development packages and web ecosystems.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold font-display">Target</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">2027</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-bold font-display text-primary font-bold">OSS</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Contribution</span>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
