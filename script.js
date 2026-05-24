document.addEventListener('DOMContentLoaded', () => {
    // Expand/Collapse Framework Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const content = card.querySelector('.content');
            const isActive = content.classList.contains('active');
            
            // Close all others
            document.querySelectorAll('.content.active').forEach(el => el.classList.remove('active'));
            
            if (!isActive) {
                content.classList.add('active');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    // Toggle Chapter Reader
    const toggleBtn = document.getElementById('toggle-chapter');
    const chapter = document.getElementById('chapter-reader');
    
    toggleBtn.addEventListener('click', () => {
        const isHidden = chapter.classList.contains('hidden');
        chapter.classList.toggle('hidden');
        toggleBtn.textContent = isHidden ? 'Ocultar Capítulo' : 'Ler Capítulo 1 Completo';
        if (isHidden) {
            chapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // Download Checklist Simulation
    const downloadBtn = document.getElementById('download-btn');
    const checklistContent = `CHECKLIST DE FRICÇÃO (PDE)
Para decisões de alto impacto. Preencha ANTES de executar.

1. Tenho informação suficiente para o nível de risco?
2. Estou sob pressão de tempo, hierarquia ou fadiga? (Se sim: adie 2-24h)
3. Qual viés é mais provável? (Âncora? Confirmação? Status quo? Aversão à perda?)
4. Quem paga a conta se falhar? (Só eu? Outros? O sistema?)
5. Posso testar em microescala? (Validar com ≤10% do recurso/tempo antes de escalar?)

REGRAS DE OURO:
- Se afetar terceiros sem consentimento → pausa obrigatória.
- Se ROI < 30% → não aprovo.
- Se prazo < 15 dias → peço revisão cruzada.

REGISTRO DE SAÍDA:
Decisão: _________
Premissa: Eu assumo que _________ é verdade.
Gatilho de revisão: Reavaliar em __/__/__ se _________ acontecer.

Fonte: Escolhas e Consequências (Erigutemberg Meneses)
Licença: Uso educacional. Imprima e plastifique.`;

    downloadBtn.addEventListener('click', () => {
        const blob = new Blob([checklistContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Checklist_Fricção_PDE.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        downloadBtn.textContent = '✅ Download concluído';
        setTimeout(() => downloadBtn.textContent = 'Baixar Checklist (.txt)', 2000);
    });
});
