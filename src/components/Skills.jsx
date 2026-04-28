import React from 'react'
import { motion } from 'framer-motion'
import { Code, Terminal, Layers, Shield, Wrench } from 'lucide-react'

const Skills = () => {
  const skillGroups = [
    {
      name: "Backend & Development",
      icon: <Terminal size={20} />,
      skills: ["Python", "Java", "Node.js", "n8n Automation", "MySQL"]
    },
    {
      name: "Front-End & UI/UX",
      icon: <Layers size={20} />,
      skills: ["HTML5", "CSS3", "React", "Vanilla CSS", "Responsive Design"]
    },
    {
      name: "AI & Machine Learning",
      icon: <Code size={20} />,
      skills: ["LLMs", "Claude AI", "YOLOv8", "DeepSORT", "Data Analysis"]
    },
    {
      name: "Security & Tools",
      icon: <Shield size={20} />,
      skills: ["Cybersecurity", "Android Dev", "Vite", "Docker", "Git"]
    }
  ]

  return (
    <section id="skills">
      <div className="container">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full glass border-accent/20 mb-4 text-xs font-semibold text-accent uppercase tracking-widest">
            Expertise
          </div>
          <h2 className="section-title">Technical Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 group hover:border-accent/30 transition-all"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              <h3 className="text-lg font-bold mb-6">{group.name}</h3>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 text-text-secondary text-xs font-medium hover:bg-accent/10 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
