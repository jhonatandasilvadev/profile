import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      name: 'Training App',
      description:
        'A fitness tracking app built to record workouts, manage exercises, and track progression. Includes load history, custom exercises, and local storage support.',
      tags: ['React', 'JavaScript', 'HTML', 'CSS'],
      liveUrl: 'https://jhonatansilvadev.github.io/training-app',
      repoUrl: 'https://github.com/jhonatansilvadev/training-app',
    },
    {
      name: 'Site Exatasis',
      description:
        'A modern and responsive institutional website for Exatasis, focused on clarity, accessibility, and user experience. Features smooth navigation and performance optimization.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
      liveUrl: 'https://jhonatansilvadev.github.io/site-exatasis',
      repoUrl: 'https://github.com/jhonatansilvadev/site-exatasis',
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.name}
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  <ExternalLink size={18} className="text-white" />
                  Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg text-white font-medium hover:bg-white/10 transition-all"
                >
                  <Github size={18} className="text-white" />
                  Repository
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

