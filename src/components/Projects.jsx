import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Box } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "AI Product Recommendation Chatbot",
      description: "Integrated Claude AI with n8n workflow for real-time electronics price comparison and budget-aware recommendations.",
      tags: ["Claude AI", "n8n", "Node.js", "Webhooks"],
      link: "#",
      github: "#"
    },
    {
      title: "Public Area People Counter",
      description: "Real-time people counting system using YOLO object detection and DeepSORT tracking for uniquely identifying individuals.",
      tags: ["Python", "YOLOv8", "DeepSORT", "OpenCV"],
      link: "#",
      github: "#"
    },
    {
      title: "Bitcoin Price Predictor",
      description: "Machine learning model developed during internship to analyze and predict cryptocurrency price trends.",
      tags: ["Machine Learning", "Python", "Data Analysis"],
      link: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects">
      <div className="container">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full glass border-accent/20 mb-4 text-xs font-semibold text-accent uppercase tracking-widest">
            Portfolio
          </div>
          <h2 className="section-title">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-1 overflow-hidden group hover:border-accent/30 transition-all flex flex-col"
            >
              <div className="aspect-video bg-white/5 rounded-t-[calc(1rem-4px)] flex items-center justify-center relative overflow-hidden">
                <Box size={48} className="text-white/10 group-hover:text-accent/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-3">
                    <a href={project.github} className="p-2 rounded-lg glass hover:bg-accent/20 transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="p-2 rounded-lg glass hover:bg-accent/20 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
