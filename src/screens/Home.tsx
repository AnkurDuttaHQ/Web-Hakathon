import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { GlassCard, Button, cn } from "../components/UI";
import { PORTFOLIO_DATA } from "../constants";
import { useTypewriter } from "../hooks/useTypewriter";
import { Link } from "react-router-dom";

export function HomeScreen() {
  const typedText = useTypewriter(PORTFOLIO_DATA.profile.typingRoles);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
      className="pb-32 px-6 pt-12 space-y-10"
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-12 py-12">
        <motion.div variants={item} className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            Available for freelance
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 variants={item} className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.85] text-white">
              Ankur <br />
              <span className="text-gradient">Dutta</span>
            </motion.h1>
            
            <motion.div variants={item} className="h-12 flex items-center justify-center">
              <p className="text-2xl font-mono text-white/40 tracking-tighter">
                {typedText}<span className="inline-block w-2 h-6 bg-primary ml-1 animate-pulse" />
              </p>
            </motion.div>
          </div>

          <motion.p variants={item} className="max-w-md mx-auto text-white/50 text-sm leading-relaxed font-medium">
            {PORTFOLIO_DATA.profile.bio}
          </motion.p>
        </motion.div>
      </section>

      {/* Action Grid */}
      <motion.div variants={item} className="grid grid-cols-2 gap-4">
        <Link to="/projects" className="w-full">
          <Button className="w-full h-14" variant="primary">
            View Projects
          </Button>
        </Link>
        <Button 
          className="w-full h-14" 
          variant="outline"
          onClick={() => window.open(PORTFOLIO_DATA.profile.resumeUrl, '_blank')}
        >
          Resume <FileText className="w-4 h-4" />
        </Button>
      </motion.div>

      {/* Stats Section */}
      <motion.div variants={item} className="grid grid-cols-3 gap-3">
        {PORTFOLIO_DATA.profile.stats.map((stat) => (
          <GlassCard key={stat.label} className="p-4 text-center border-white/5" hover={false}>
            <p className="text-xl font-display font-bold text-white">{stat.value}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.label}</p>
          </GlassCard>
        ))}
      </motion.div>

      {/* Social Section */}
      <section className="space-y-4">
        <motion.div variants={item} className="flex items-center gap-4 py-6 border-y border-white/5 overflow-x-auto no-scrollbar justify-center">
          {[
            { icon: Github, label: "GitHub", href: PORTFOLIO_DATA.profile.github, color: "hover:text-primary" },
            { icon: Linkedin, label: "LinkedIn", href: PORTFOLIO_DATA.profile.linkedin, color: "hover:text-secondary" },
            { icon: Mail, label: "Email", href: `mailto:${PORTFOLIO_DATA.profile.email}`, color: "hover:text-accent" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={cn("flex-shrink-0 flex flex-col items-center gap-2 text-white/40 transition-all hover:-translate-y-1", social.color)}
            >
              <GlassCard className="p-4 rounded-2xl bg-white/[0.02] pointer-events-none" hover={false}>
                <social.icon className="w-6 h-6" />
              </GlassCard>
              <span className="text-[9px] font-bold uppercase tracking-widest">{social.label}</span>
            </a>
          ))}
        </motion.div>
      </section>
      
      {/* Featured Quote */}
      <motion.div variants={item}>
        <GlassCard className="border-l-4 border-l-primary py-4 px-6 italic text-gray-400 text-sm leading-relaxed">
          "Building intelligent systems that bridge the gap between human imagination and digital reality."
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
