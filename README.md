# Jhonatan da Silva - Portfolio

A modern and elegant personal portfolio website for a software developer. Built with React, Vite, Tailwind CSS, and Framer Motion.

🌐 **Live Demo:** https://jhonatandasilvadev.github.io/profile/

📸 **Antes do deploy:** Salve sua foto em `public/profile-photo.jpg` (veja `COMO-SALVAR-FOTO.md`)

## 🚀 Features

- **Dark Mode Only** - Minimalist and elegant aesthetic
- **Fully Responsive** - Optimized for desktop, tablet, and mobile
- **Smooth Animations** - Powered by Framer Motion
- **Modern UI/UX** - Clean design with rounded corners and soft shadows
- **SEO Optimized** - Meta tags for better search engine visibility
- **Smooth Scroll** - Seamless navigation between sections

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd profile
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx      # Navigation header with sticky behavior
│   └── Footer.jsx      # Simple footer component
├── sections/
│   ├── Hero.jsx        # Hero section with introduction
│   ├── Projects.jsx    # Showcase of projects
│   ├── Skills.jsx      # Skills grid with icons
│   ├── About.jsx       # About section
│   └── Contact.jsx     # Contact form and social links
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Update Personal Information

Edit the content in each section component:
- `src/sections/Hero.jsx` - Name, title, and tagline
- `src/sections/Projects.jsx` - Project details and links
- `src/sections/Skills.jsx` - Skills and technologies
- `src/sections/About.jsx` - About text
- `src/sections/Contact.jsx` - Social media links and email

### Change Colors

Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  dark: {
    bg: '#0a0a0a',
    card: '#111111',
    border: '#1f1f1f',
  }
}
```

### Update Profile Photo

Replace the placeholder image URL in `src/sections/Hero.jsx`:
```javascript
<img
  src="your-image-url-here.jpg"
  alt="Jhonatan da Silva"
  className="w-full h-full object-cover"
/>
```

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.js` to include base path:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```

2. Build and deploy:
```bash
npm run build
```

3. Deploy the `dist` folder to GitHub Pages

### Vercel / Netlify

Simply connect your repository and these platforms will auto-detect the Vite configuration.

## 📱 Contact

- **Email**: jhonatandasilva.dev@gmail.com
- **GitHub**: [@jhonatandasilvadev](https://github.com/jhonatandasilvadev)
- **LinkedIn**: [Jhonatan da Silva](https://www.linkedin.com/in/jhonatan-da-silva-984958379/)
- **Instagram**: [@ojohn_ds](https://www.instagram.com/ojohn_ds/)
- **WhatsApp**: [+55 47 97826388](https://wa.me/554797826388)

## 📝 License

This project is open source and available for personal use.

---

Built with care and passion 💜

