import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

/**
 * Hero Section Component
 * Main landing section with profile photo, introduction, and CTA buttons
 * Features smooth animations and responsive design
 */
const Hero = () => {
  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Git', icon: '📦' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'Figma', icon: '🎯' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-20 blur-2xl" aria-hidden="true"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-white/10 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}profile-photo.png`}
                  alt="Jhonatan da Silva - Software Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  width="320"
                  height="320"
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Jhonatan Silva
            </h1>
            <p className="text-2xl md:text-3xl text-gradient font-semibold">
              Junior Software Developer
            </p>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Creating fast, clean interfaces built around great UX, real results, and solid best practices.
              <br />
              Learning the right way while pursuing higher education in technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                aria-label="Ver meus projetos"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
                aria-label="Entrar em contato"
              >
                Contact Me
              </motion.button>
            </div>

            {/* Skill Icons */}
            <div className="pt-8">
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full"
                    title={skill.name}
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm text-white/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

