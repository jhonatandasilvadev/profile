# 🚀 Guia de Deploy

## Deploy no GitHub Pages

### Opção 1: Deploy Manual

1. **Atualize o `vite.config.js`**:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/', // Importante!
})
```

2. **Build o projeto**:
```bash
npm run build
```

3. **Deploy**:
```bash
# Instale gh-pages
npm install -D gh-pages

# Adicione no package.json:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Execute o deploy
npm run deploy
```

4. **Configure o GitHub Pages**:
- Vá em Settings → Pages
- Source: `gh-pages` branch
- Aguarde alguns minutos

### Opção 2: GitHub Actions (Automático)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Deploy no Vercel (Recomendado) ⚡

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu GitHub
3. Importe o repositório
4. Vercel detecta Vite automaticamente
5. Click em "Deploy"
6. Pronto! 🎉

**Vantagens:**
- Deploy automático a cada push
- HTTPS grátis
- Performance otimizada
- Domínio customizado fácil

## Deploy no Netlify

1. Acesse [netlify.com](https://netlify.com)
2. "New site from Git"
3. Conecte o repositório
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy! 🚀

## Deploy no Render

1. Acesse [render.com](https://render.com)
2. "New Static Site"
3. Conecte o repositório
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy! ✨

## Configurações importantes

### Para GitHub Pages
```javascript
// vite.config.js
base: '/repo-name/'
```

### Para outros (Vercel, Netlify, Render)
```javascript
// vite.config.js
base: '/'
```

## Domínio Customizado

### Vercel/Netlify
1. Vá em Domain Settings
2. Adicione seu domínio
3. Configure DNS conforme instruções

### GitHub Pages
1. Crie arquivo `public/CNAME`:
```
seudominio.com
```

2. Configure DNS:
```
A Record: 185.199.108.153
A Record: 185.199.109.153
A Record: 185.199.110.153
A Record: 185.199.111.153
```

## 🎯 Recomendação

**Use Vercel** para a melhor experiência:
- ⚡ Deploy instantâneo
- 🔄 Auto-deploy no git push
- 🌐 CDN global
- 📊 Analytics
- 🆓 Totalmente gratuito

---

Qualquer dúvida, consulte a [documentação do Vite](https://vitejs.dev/guide/static-deploy.html)

