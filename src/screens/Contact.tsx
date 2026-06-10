import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, MapPin, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import confetti from "canvas-confetti";
import { GlassCard, SectionHeader, Button, cn } from "../components/UI";
import { PORTFOLIO_DATA } from "../constants";

export function ContactScreen() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          platform: window.innerWidth < 768 ? "Mobile App Preview" : "Website Portfolio"
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSent(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#a855f7', '#ffffff']
      });
      setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
      <SectionHeader title="Contact" subtitle="Let's build something together" />

      {/* Social Contacts */}
      <div className="grid grid-cols-1 gap-4">
        {[
          { icon: Mail, label: "Email", value: PORTFOLIO_DATA.profile.email, href: `mailto:${PORTFOLIO_DATA.profile.email}`, color: "text-red-400" },
          { icon: Linkedin, label: "LinkedIn", value: "ankur-dutta01", href: PORTFOLIO_DATA.profile.linkedin, color: "text-blue-400" },
          { icon: Github, label: "GitHub", value: "AnkurDuttaHQ", href: PORTFOLIO_DATA.profile.github, color: "text-gray-200" },
          { icon: MapPin, label: "Location", value: "Kolkata, India", color: "text-green-400" },
        ].map((social, i) => (
          <motion.div key={i} variants={item}>
            <GlassCard 
              className="flex items-center gap-4 p-4 group cursor-pointer relative"
              hover={true}
              onClick={() => {
                if (social.href) window.open(social.href, '_blank');
                if (social.label === "Email") handleCopy();
              }}
            >
              <div className={cn("p-3 rounded-2xl bg-white/5 transition-transform group-hover:scale-110", social.color)}>
                <social.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{social.label}</p>
                <p className="text-sm font-medium text-white">{social.value}</p>
              </div>
              {(social.label === "Email" || social.href) && (
                <div className="p-2 text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                  {social.label === "Email" && copied ? <Check className="w-4 h-4 text-green-500" /> : <ArrowRight className="w-4 h-4" />}
                </div>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.section variants={item} className="space-y-6">
        <h3 className="text-xl font-display font-bold flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" /> Send Message
        </h3>
        
        <GlassCard className="p-6">
           <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-sans"
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-sans"
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Inquiry / Feedback / Collaboration"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-sans"
                  value={formState.subject}
                  onChange={e => setFormState({...formState, subject: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-gray-500 ml-1">Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="How can I help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-sans resize-none"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                />
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-red-400 text-xs text-center font-medium"
                >
                  {error}
                </motion.p>
              )}

              <Button 
                variant="primary" 
                className="w-full h-14" 
                disabled={isSent || isLoading}
              >
                {isLoading ? (
                   <div className="flex items-center gap-2">
                     <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                     Sending...
                   </div>
                ) : isSent ? (
                   <>Message Sent! <Check className="w-5 h-5" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </Button>
           </form>
        </GlassCard>
      </motion.section>

      {/* Footer Info */}
      <motion.div variants={item} className="text-center space-y-2 py-8 opacity-40">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em]">Built with Passion & React 2026</p>
        <p className="text-[8px] uppercase tracking-widest">© Ankur Dutta. All Rights Reserved.</p>
      </motion.div>
    </motion.div>
  );
}
