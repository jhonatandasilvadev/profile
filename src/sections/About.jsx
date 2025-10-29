import React from 'react'
import { motion } from 'framer-motion'
import { Code, Cpu, Gamepad2, TrendingUp } from 'lucide-react'

/**
 * About Section Component
 * Displays personal information and interests
 * Features animated cards with icons
 */
const About = () => {
  const highlights = [
    { icon: Code, text: 'Clean Code' },
    { icon: Cpu, text: 'Hardware' },
    { icon: Gamepad2, text: 'Gaming' },
    { icon: TrendingUp, text: 'Performance' },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <p className="text-lg text-white/80 leading-relaxed mb-8">
            Junior software developer passionate about creating clean, accessible, and high-performance digital experiences.
            <br /><br />
            Currently pursuing higher education in technology and learning development the right way — building real projects, understanding fundamentals, and constantly improving my craft.
            <br /><br />
            My background blends hands-on tech work — from computer assembly and testing to full-stack web development.
            <br /><br />
            I love exploring how design, code, and performance come together to make ideas real.
            <br />
            This portfolio is where I share the projects that shaped my skills and reflect the way I think, build, and grow.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <Icon size={32} className="text-purple-400" />
                  <span className="text-white/80 text-sm font-medium">
                    {item.text}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

