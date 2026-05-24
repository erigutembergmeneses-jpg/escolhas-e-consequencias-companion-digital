# 📘 Companion Digital: Escolhas e Consequências
Site interativo de pré-leitura e protocolos práticos para profissionais que decidem sob pressão.

## 🚀 Como Publicar (GitHub Pages)
1. Crie um repositório público no GitHub: `escolhas-e-consequencias-lab`
2. Faça upload dos 4 arquivos (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Vá em **Settings > Pages**
4. Em **Source**, selecione `Deploy from a branch` → `main` → `/ (root)`
5. Clique em **Save**. O site estará em: `https://seuusuario.github.io/escolhas-e-consequencias-lab/`

## 📱 Gerar QR Code para a Capa
1. Acesse: [QR Code Generator](https://www.qr-code-generator.com/) ou use a CLI: `qrencode -o qr.png "https://seuusuario.github.io/escolhas-e-consequencias-lab/"`
2. Baixe em formato **PNG/SVG**, fundo branco, mínimo 300x300px.
3. Posicione na **quarta capa** ou **orelha inferior direita** com a legenda:
   `📱 Escaneie para 10 frameworks, capítulo gratuito e checklist prático`
4. Teste com 3 celulares diferentes (iOS/Android, câmeras nativas) antes da impressão final.

## ✏️ Personalização Rápida
- **Trocar capítulo gratuito:** Edite a seção `<div id="chapter-reader">` no `index.html`
- **Alterar checklist:** Modifique a variável `checklistContent` no `script.js`
- **Cores/Tipografia:** Ajuste as variáveis CSS em `:root` no topo do `styles.css`
- **Links de venda:** Substitua `SEU-ASIN` no `index.html` pelo link da Amazon/Editora

## 📜 Licença
Conteúdo derivado da obra "Escolhas e Consequências". Uso educacional e promocional autorizado. 
Checklists e frameworks são ferramentas de engenharia cognitiva, não substituem assessoria jurídica, clínica ou financeira.
