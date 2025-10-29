import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Server, Database, GitBranch, Github, Container, Box, Figma, Layers, Smartphone } from 'lucide-react'

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      icon: Code2,
      description: 'Semantic markup and structure',
    },
    {
      name: 'CSS3',
      icon: Palette,
      description: 'Modern styling and animations',
    },
    {
      name: 'JavaScript',
      icon: Code2,
      description: 'ES6+ and modern features',
    },
    {
      name: 'React',
      icon: Layers,
      description: 'Component-based development',
    },
    {
      name: 'Tailwind CSS',
      icon: Palette,
      description: 'Utility-first CSS framework',
    },
    {
      name: 'Node.js',
      icon: Server,
      description: 'Server-side JavaScript',
    },
    {
      name: 'Git',
      icon: GitBranch,
      description: 'Version control system',
    },
    {
      name: 'GitHub',
      icon: Github,
      description: 'Code hosting and collaboration',
    },
    {
      name: 'Docker',
      icon: Container,
      description: 'Containerization platform',
    },
    {
      name: 'MySQL',
      icon: Database,
      description: 'Relational database management',
    },
    {
      name: 'Figma',
      icon: Figma,
      description: 'UI/UX design tool',
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-dark-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="glass-effect rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-xl hover:shadow-purple-500/20 transition-all group cursor-pointer"
                title={skill.description}
              >
                <Icon size={48} className="text-white group-hover:text-purple-400 transition-colors" />
                <span className="text-white font-semibold text-center">
                  {skill.name}
                </span>
                <span className="text-white/50 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.description}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills

