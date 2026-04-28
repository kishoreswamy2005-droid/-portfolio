import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Phone, ArrowDownRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-accent/20 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-accent">Available for New Opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl mb-6 tracking-tight">
            Kishore K
          </h1>
          <h2 className="text-3xl md:text-4xl text-gradient mb-8">
            Software <span className="text-accent">Engineer</span>
          </h2>
          
          <p className="text-text-secondary text-lg mb-10 max-w-lg leading-relaxed">
            I build modern web applications, production AI workflows, and data-driven systems 
            that focus on reliability and exceptional user experience.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDownRight size={18} />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
          
          <div className="flex gap-12 pt-8 border-t border-white/5">
            <div>
              <h3 className="text-3xl font-bold">2+</h3>
              <p className="text-text-muted text-sm uppercase tracking-wider">Major Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-text-muted text-sm uppercase tracking-wider">Certifications</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">Chennai</h3>
              <p className="text-text-muted text-sm uppercase tracking-wider">Based In</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="glass p-8 relative z-10 overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  K
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Kishore K</h3>
                <div className="h-0.5 w-12 bg-accent mt-1"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-text-secondary group-hover:text-text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <Mail size={18} className="text-accent" />
                </div>
                <span className="text-sm">kishoreswamy2005@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-text-secondary group-hover:text-text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <Phone size={18} className="text-accent" />
                </div>
                <span className="text-sm">+91 6383499923</span>
              </div>
              <div className="flex items-center gap-4 text-text-secondary group-hover:text-text-primary transition-colors">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                  <MapPin size={18} className="text-accent" />
                </div>
                <span className="text-sm">Chennai, India</span>
              </div>
            </div>
            
            <div className="mt-8 flex gap-3">
              <a href="#" className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-accent/20 rounded-2xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
