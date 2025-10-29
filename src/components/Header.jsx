import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * Header Component
 * Sticky navigation header with smooth scroll functionality
 * Responsive design with optimized mobile menu
 */
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const menuItems = ['Projects', 'Skills', 'About', 'Contact']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between" aria-label="Navegação principal">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-white cursor-default select-none"
          aria-label="Logo"
        >
          &lt;Jhonatan /&gt;
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8" role="navigation">
          {menuItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white/80 hover:text-white transition-colors font-medium"
              aria-label={`Ir para ${item}`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Mobile Navigation - Horizontal Scroll */}
        <div className="md:hidden flex items-center gap-3 overflow-x-auto scrollbar-hide" role="navigation">
          {menuItems.map((item) => (
            <motion.button
              key={item}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-white/80 hover:text-white transition-colors text-xs font-medium whitespace-nowrap px-2"
              aria-label={`Ir para ${item}`}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}

export default Header


