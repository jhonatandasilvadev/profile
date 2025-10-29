# 🚀 INSTRUÇÕES PARA DEPLOY NO GITHUB PAGES

## ⚠️ IMPORTANTE: Salvar a Foto de Perfil

**Primeiro passo:** Você precisa salvar manualmente sua foto de perfil!

1. Pegue a imagem que você enviou
2. Salve ela na pasta: `profile/public/`
3. Renomeie para: **`profile-photo.jpg`**

---

## 📦 Passo a Passo Completo

### 1️⃣ Salvar a Foto
```
Copie sua foto para:
C:\Users\EXATAPC\Desktop\profile\profile\public\profile-photo.jpg
```

### 2️⃣ Instalar gh-pages
Abra o terminal na pasta `profile` e execute:
```bash
npm install -D gh-pages
```

### 3️⃣ Inicializar Git
```bash
git init
git add .
git commit -m "Initial commit: Portfolio completo"
```

### 4️⃣ Conectar ao GitHub
```bash
git remote add origin https://github.com/jhonatandasilvadev/profile.git
git branch -M main
```

### 5️⃣ Fazer Push
```bash
git push -u origin main
```

### 6️⃣ Configurar GitHub Pages

1. Acesse: https://github.com/jhonatandasilvadev/profile
2. Vá em **Settings** → **Pages**
3. Em **Source**, selecione: **GitHub Actions**
4. Aguarde o deploy (2-3 minutos)

### 7️⃣ Acessar o Site
Seu site estará em:
```
https://jhonatandasilvadev.github.io/profile/
```

---

## 🔧 Comandos Resumidos

```bash
# 1. Salve a foto em public/profile-photo.jpg primeiro!

# 2. Instalar gh-pages
npm install -D gh-pages

# 3. Git setup
git init
git add .
git commit -m "Initial commit: Portfolio completo"
git remote add origin https://github.com/jhonatandasilvadev/profile.git
git branch -M main
git push -u origin main
```

---

## ✅ Checklist

- [ ] Foto salva em `public/profile-photo.jpg`
- [ ] gh-pages instalado (`npm install -D gh-pages`)
- [ ] Git inicializado (`git init`)
- [ ] Arquivos commitados
- [ ] Push feito para GitHub
- [ ] GitHub Pages configurado (Settings → Pages → GitHub Actions)
- [ ] Site funcionando em: https://jhonatandasilvadev.github.io/profile/

---

## 🔄 Deploy Automático

Depois do primeiro push, qualquer alteração que você fizer:

1. Edite os arquivos
2. Commit:
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

3. GitHub Actions fará o deploy automaticamente! ✨

---

## 📝 Notas Importantes

- **Base Path:** Já configurado como `/profile/`
- **Workflow:** Já criado em `.github/workflows/deploy.yml`
- **Foto:** Precisa ser salva manualmente em `public/profile-photo.jpg`
- **Branch:** Use `main` (não `master`)

---

## ❓ Problemas Comuns

### Foto não aparece?
Verifique se está em: `profile/public/profile-photo.jpg`

### Site dá 404?
Verifique se GitHub Pages está configurado para **GitHub Actions**

### Deploy falhou?
Veja os logs em: Actions → Deploy to GitHub Pages

---

## 🎉 Pronto!

Após seguir todos os passos, seu portfólio estará online em:

**https://jhonatandasilvadev.github.io/profile/**

---

*Última atualização: 2025*

