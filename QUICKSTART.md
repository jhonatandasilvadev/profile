# 🚀 Guia de Início Rápido

## Instalação e Execução

### 1. Instalar dependências
```bash
cd profile
npm install
```

### 2. Iniciar servidor de desenvolvimento
```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

### 3. Build para produção
```bash
npm run build
```

Os arquivos compilados estarão na pasta `dist/`

## ✨ O que foi criado

### Estrutura completa do site:
- ✅ **Header** - Navegação sticky com blur effect
- ✅ **Hero Section** - Foto, nome, descrição e ícones de tecnologias
- ✅ **Projects** - 2 projetos principais com links funcionais
- ✅ **Skills** - Grid de habilidades com ícones brancos
- ✅ **About** - Seção sobre o desenvolvedor
- ✅ **Contact** - Formulário de contato + links sociais
- ✅ **Footer** - Rodapé minimalista

### Tecnologias:
- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎬 Framer Motion
- 🎯 Lucide React (ícones)

### Recursos:
- 🌙 Dark mode elegante (estilo Vercel)
- 📱 Totalmente responsivo
- ✨ Animações suaves
- 🎯 Smooth scroll entre seções
- 🔍 SEO otimizado
- ⚡ Performance otimizada

## 🎨 Personalização Rápida

### Trocar foto do perfil
Edite `src/sections/Hero.jsx` linha ~47:
```javascript
src="SUA_URL_AQUI"
```

### Adicionar mais projetos
Edite `src/sections/Projects.jsx` e adicione objetos ao array `projects`

### Mudar cores
Edite `tailwind.config.js` na seção `colors`

### Alterar informações de contato
Edite `src/sections/Contact.jsx` com seus links

## 🌐 Deploy

### GitHub Pages
```bash
npm run build
# Deploy a pasta dist/ no GitHub Pages
```

### Vercel (Recomendado)
1. Conecte seu repositório no Vercel
2. Deploy automático! ✨

## 💡 Dicas

- Todos os ícones são brancos conforme especificado
- O site está 100% em inglês
- Smooth scroll já está configurado
- Hover effects em todos os botões e cards
- Animações aparecem ao fazer scroll

---

**Pronto para impressionar! 🚀**


