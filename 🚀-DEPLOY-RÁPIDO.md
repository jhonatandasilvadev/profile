# 🚀 DEPLOY RÁPIDO - 3 PASSOS

## ✅ Seu portfólio está 100% pronto!

Só falta fazer o deploy para ele ficar online.

---

## 📸 PASSO 1: Salvar sua Foto

1. Pegue a foto que você enviou (você de camisa preta)
2. Salve em: `profile/public/profile-photo.jpg`

**Caminho completo:**
```
C:\Users\EXATAPC\Desktop\profile\profile\public\profile-photo.jpg
```

⚠️ **IMPORTANTE:** O nome deve ser exatamente `profile-photo.jpg`

---

## 🤖 PASSO 2: Executar Script Automático

**Modo Fácil:**

1. Vá na pasta `profile`
2. Clique duas vezes em: **`git-setup.bat`**
3. Aguarde o processo terminar

O script vai:
- ✅ Instalar dependências necessárias
- ✅ Inicializar Git
- ✅ Fazer commit
- ✅ Conectar ao GitHub
- ✅ Fazer push

---

## ⚙️ PASSO 3: Configurar GitHub Pages

1. Acesse: https://github.com/jhonatandasilvadev/profile
2. Clique em **Settings** (engrenagem)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione: **GitHub Actions**
5. Aguarde 2-3 minutos

---

## 🎉 PRONTO!

Seu site estará online em:

**https://jhonatandasilvadev.github.io/profile/**

---

## 📝 Se Preferir Fazer Manualmente

Ao invés de usar o `git-setup.bat`, execute no terminal:

```bash
# 1. Instalar gh-pages
npm install -D gh-pages

# 2. Inicializar Git
git init
git add .
git commit -m "Initial commit: Portfolio completo"

# 3. Conectar e fazer push
git remote add origin https://github.com/jhonatandasilvadev/profile.git
git branch -M main
git push -u origin main
```

Depois configure GitHub Pages conforme Passo 3 acima.

---

## ⏱️ Tempo Estimado

- **Salvar foto:** 1 minuto
- **Executar script:** 2-3 minutos
- **Configurar Pages:** 1 minuto
- **Deploy automático:** 2-3 minutos

**Total: ~10 minutos** para o site estar no ar! 🚀

---

## 🔄 Atualizações Futuras

Depois do primeiro deploy, qualquer mudança:

```bash
git add .
git commit -m "Descrição da mudança"
git push
```

GitHub Actions faz o deploy automaticamente! ✨

---

## 🆘 Problemas?

- **Foto não aparece?** → Verifique se está em `public/profile-photo.jpg`
- **Script não funciona?** → Use os comandos manuais acima
- **404 no site?** → Verifique se configurou GitHub Actions no Passo 3
- **Deploy falhou?** → Veja logs em: Actions → Deploy to GitHub Pages

---

## 📚 Arquivos de Ajuda

- **COMO-SALVAR-FOTO.md** → Guia detalhado para salvar a foto
- **INSTRUÇÕES-DEPLOY.md** → Instruções completas de deploy
- **LEIA-ME.md** → Documentação geral do projeto

---

**Comece agora pelo PASSO 1!** 📸


