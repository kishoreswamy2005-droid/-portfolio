import React from 'react'
import { Mail, Linkedin, Github, ExternalLink, Heart } from 'lucide-react'

const Contact = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-white/5">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Build Something</h2>
            <p className="text-text-secondary text-lg mb-8 max-w-md">
              Open to Software Engineering, Backend, and AI Developer opportunities, 
              as well as thoughtful collaborations on open-source projects.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:kishoreswamy2005@gmail.com" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted font-bold uppercase tracking-wider">Email</p>
                  <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
                    kishoreswamy2005@gmail.com
                  </p>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-4 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <Linkedin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted font-bold uppercase tracking-wider">LinkedIn</p>
                  <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
                    linkedin.com/in/kishore-k
                  </p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="glass p-10 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
              <ExternalLink size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Interested in my work?</h3>
            <p className="text-text-secondary mb-8">
              Download my full resume for a detailed view of my expertise and academic background.
            </p>
            <a href="/resume.pdf" className="btn-primary" target="_blank">
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-bold text-white text-sm">
              K
            </div>
            <span className="font-bold text-lg">Kishore K</span>
          </div>
          
          <p className="text-text-muted text-sm flex items-center gap-2">
            © 2026 Kishore K · Built with <Heart size={14} className="text-red-500 fill-current" /> using React
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-text-muted hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
