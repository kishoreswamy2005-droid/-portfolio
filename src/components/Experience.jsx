import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      company: "Freelance / Remote",
      period: "Jan 2024 - July 2024",
      description: [
        "Involved working remotely on a website for a corporation.",
        "Front-End Web Designer, contributed to creating visually appealing and intuitive websites.",
        "Worked with UI/UX and modern frameworks to enhance user experience."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Nirloba IT PVT LTD",
      period: "Jan 2026 - Feb 2026",
      description: [
        "Internship program focusing on Machine Learning applications.",
        "Demonstrated exemplary professional traits and effectively executed tasks.",
        "Project: Bitcoin Price Prediction using Machine Learning."
      ]
    },
    {
      title: "Technical Trainer",
      company: "Karyoun Innovations Pvt Ltd",
      period: "Ongoing",
      description: [
        "Offline & Online trainer at Infosys & AMET University.",
        "Explained complex concepts using practical examples and live demonstrations.",
        "Assisted learners by resolving doubts and providing hands-on guidance."
      ]
    }
  ]

  return (
    <section id="experience">
      <div className="container">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full glass border-accent/20 mb-4 text-xs font-semibold text-accent uppercase tracking-widest">
            Journey
          </div>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 border-4 border-bg-dark shadow-[0_0_15px_var(--accent)]"></div>
                
                <div className="w-full md:w-1/2">
                  <div className={`glass p-8 hover:border-accent/30 transition-all group ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                    }`}>
                      <span className="flex items-center gap-2 text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="p-2 rounded-lg glass">
                        <Briefcase size={16} className="text-accent" />
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{exp.title}</h3>
                    <p className="text-accent/80 font-medium mb-6">{exp.company}</p>
                    
                    <ul className={`space-y-3 text-text-secondary text-sm ${
                      index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''
                    }`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for the other side */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
