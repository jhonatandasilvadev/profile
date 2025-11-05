import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, MessageCircle, Mail, Send } from 'lucide-react'

/**
 * Contact Section Component
 * Features contact form with validation and social media links
 * All external links open in new tabs for better UX
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres'
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! 🎉\n(Este é um demo - implemente seu próprio backend)')
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/jhonatandasilvadev',
      color: 'hover:text-purple-400',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/jhonatan-da-silva-984958379/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/ojohn_ds/',
      color: 'hover:text-pink-400',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/554797826388',
      color: 'hover:text-green-400',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-dark-card/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/80 mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? 'ring-2 ring-red-500' : 'focus:ring-purple-500'
                  }`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white/80 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'ring-2 ring-red-500' : 'focus:ring-purple-500'
                  }`}
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message ? 'ring-2 ring-red-500' : 'focus:ring-purple-500'
                  }`}
                  placeholder="Your message..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-slate-50 rounded-xl text-slate-900 font-semibold hover:bg-white hover:shadow-lg hover:shadow-white/20 transition-all flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                aria-label="Enviar mensagem"
              >
                <Send size={20} className="text-slate-900" aria-hidden="true" />
                {isSubmitting ? 'Enviando...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Connect
            </h3>
            <p className="text-white/70 mb-8">
              Feel free to reach out on any of these platforms — I'm always open to talk about new projects and opportunities.
            </p>

            {/* Email */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="mailto:jhonatandasilva.dev@gmail.com"
              className="flex items-center gap-3 px-6 py-4 glass-effect rounded-xl mb-6 hover:bg-white/10 transition-all group"
              aria-label="Enviar email para jhonatandasilva.dev@gmail.com"
            >
              <Mail size={24} className="text-white group-hover:text-purple-400 transition-colors" aria-hidden="true" />
              <span className="text-white/80 group-hover:text-white transition-colors">
                jhonatandasilva.dev@gmail.com
              </span>
            </motion.a>

            {/* Social Icons */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 glass-effect rounded-xl hover:bg-white/10 transition-all group"
                    aria-label={`Visitar meu perfil no ${social.name}`}
                  >
                    <Icon size={28} className={`text-white ${social.color} transition-colors`} aria-hidden="true" />
                    <span className="text-white/80 group-hover:text-white transition-colors font-medium">
                      {social.name}
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

