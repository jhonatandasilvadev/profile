import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-white"
        >
          &lt;Jhonatan /&gt;
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Mobile menu - simplified for now */}
        <div className="md:hidden flex items-center gap-4">
          {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white/80 hover:text-white transition-colors text-sm"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}

export default Header

