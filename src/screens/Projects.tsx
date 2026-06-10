import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { GlassCard, SectionHeader, Button } from "../components/UI";
import { PORTFOLIO_DATA } from "../constants";

export function ProjectsScreen() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="pb-32 px-6 pt-12 space-y-12"
    >
      <SectionHeader title="Showcase" subtitle="Selected Projects" />

      <div className="space-y-10">
        {PORTFOLIO_DATA.projects.map((project) => (
          <motion.div key={project.id} variants={item}>
            <GlassCard className="p-0 overflow-hidden group">
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.features.slice(0, 2).map((feat) => (
                    <span key={feat} className="px-2 py-1 glass rounded-lg text-[10px] uppercase font-bold tracking-wider text-white">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:bg-white/10 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.features.map((feat) => (
                    <span key={feat} className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                      <Layers className="w-3 h-3 text-primary" /> {feat}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  <Button 
                    variant="outline" 
                    className="h-10 text-xs py-0"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-3 h-3" /> GitHub
                  </Button>
                  <Button 
                    variant="primary" 
                    className="h-10 text-xs py-0"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3" /> Live Demo
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
      
      {/* Empty State / Coming Soon */}
      <motion.div variants={item} className="text-center py-10 opacity-40">
        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center mx-auto mb-4 border border-white/5">
          <Layers className="w-6 h-6" />
        </div>
        <p className="text-sm font-mono uppercase tracking-widest">More Projects Initializing...</p>
      </motion.div>
    </motion.div>
  );
}
