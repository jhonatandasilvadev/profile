import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, MessageCircle, Mail, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission
    // For now, we'll just show an alert
    alert('Message sent! (This is a demo - implement your own backend)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  required
                  className="w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Your name"
                />
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
                  required
                  className="w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="your@email.com"
                />
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
                  required
                  rows="5"
                  className="w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} className="text-white" />
                Send Message
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
            >
              <Mail size={24} className="text-white group-hover:text-purple-400 transition-colors" />
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
                  >
                    <Icon size={28} className={`text-white ${social.color} transition-colors`} />
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

