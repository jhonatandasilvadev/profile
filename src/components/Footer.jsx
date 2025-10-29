import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6 text-center"
      >
        <p className="text-white/60">
          © 2025 • Jhonatan da Silva — Built with care and passion{' '}
          <span className="text-purple-500">💜</span>
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer

