import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Cpu, Github, Mail, Trophy } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "./UI";

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: User, path: "/about", label: "About" },
    { icon: Code, path: "/skills", label: "Skills" },
    { icon: Briefcase, path: "/projects", label: "Work" },
    { icon: Trophy, path: "/experience", label: "Achievements" },
    { icon: Cpu, path: "/ai", label: "AI" },
    { icon: Github, path: "/github", label: "Stats" },
    { icon: Mail, path: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:max-w-2xl">
      <nav className="glass-dark rounded-full px-3 md:px-6 py-3 flex items-center justify-between shadow-2xl border border-white/5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative group p-2 md:p-3 flex flex-col items-center"
            >
              <item.icon 
                className={cn(
                  "w-4 h-4 md:w-5 md:h-5 transition-all duration-300 relative z-10",
                  isActive ? "text-primary scale-110" : "text-white/40 group-hover:text-white"
                )} 
              />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[8px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 hidden md:block">
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
