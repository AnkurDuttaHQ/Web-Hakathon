import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SplashScreen } from "./components/SplashScreen";
import { useMousePosition } from "./hooks/useMousePosition";
import { Navbar } from "./components/Navbar";
import { Particles } from "./components/Particles";
import { HomeScreen } from "./screens/Home";
import { AboutScreen } from "./screens/About";
import { SkillsScreen } from "./screens/Skills";
import { ProjectsScreen } from "./screens/Projects";
import { ExperienceScreen } from "./screens/Experience";
import { AIJourneyScreen } from "./screens/AIJourney";
import { GitHubScreen } from "./screens/GitHub";
import { ContactScreen } from "./screens/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="min-h-screen py-10 md:py-20"
    >
      {children}
    </motion.div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.2, x: 5 }}
      className="p-3 glass rounded-xl text-white/50 hover:text-primary transition-colors border border-white/5"
    >
      {icon}
    </motion.a>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { x, y } = useMousePosition();

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white selection:bg-primary/30 cursor-none">
        <div className="noise-overlay" />
        
        {/* Custom Interactive Cursor */}
        <motion.div 
          className="fixed w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[100] hidden md:block"
          animate={{ x: x - 16, y: y - 16 }}
          transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
        />
        <motion.div 
          className="fixed w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[100] hidden md:block"
          animate={{ x: x - 3, y: y - 3 }}
          transition={{ type: "spring", damping: 35, stiffness: 400, mass: 0.1 }}
        />

        <Particles />
        <ScrollToTop />
        
        {/* Main Content Area */}
        <main className="relative z-10 mx-auto w-full md:max-w-[1200px] min-h-screen border-x border-white/5 shadow-2xl bg-black/60 backdrop-blur-[2px]">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><HomeScreen /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><AboutScreen /></PageWrapper>} />
              <Route path="/skills" element={<PageWrapper><SkillsScreen /></PageWrapper>} />
              <Route path="/projects" element={<PageWrapper><ProjectsScreen /></PageWrapper>} />
              <Route path="/experience" element={<PageWrapper><ExperienceScreen /></PageWrapper>} />
              <Route path="/ai" element={<PageWrapper><AIJourneyScreen /></PageWrapper>} />
              <Route path="/github" element={<PageWrapper><GitHubScreen /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><ContactScreen /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Floating social dock (Website Feature) */}
        <div className="hidden lg:flex fixed left-8 bottom-32 flex-col gap-4 z-50">
          <SocialLink href="https://github.com/AnkurDuttaHQ" icon={<Github className="w-5 h-5" />} />
          <SocialLink href="https://linkedin.com/in/ankur-dutta01" icon={<Linkedin className="w-5 h-5" />} />
          <div className="w-px h-24 bg-white/10 mx-auto mt-2" />
        </div>

        <Navbar />

        {/* Decorative elements */}
        <div className="fixed top-[10%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none animate-pulse-slow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
        
        {/* Subtle grid overlay */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />
      </div>
    </Router>
  );
}
