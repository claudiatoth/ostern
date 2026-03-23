/* ============================================================
   OSTERN AUF DEUTSCH - main.js
   Claudia Toth - claudiatoth.github.io
   Funcții principale: toggle, checkAll, resetAll
   ============================================================ */

// ── TOGGLE SECȚIUNI PRINCIPALE ────────────────────────────────────────────
function toggleMainSection(i) {
    const content = document.getElementById('main-section-' + i);
    const arrows  = document.querySelectorAll('.arrow');
    if (!content) return;
    content.classList.toggle('active');
    if (arrows[i]) arrows[i].classList.toggle('rotated');
}

// ── TOGGLE SUB-SECȚIUNI ───────────────────────────────────────────────────
function toggleSubSection(i) {
    const content = document.getElementById('sub-section-' + i);
    const arrow   = document.getElementById('sub-arrow-' + i);
    if (!content) return;
    content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

// ── DESCHIDE SECȚIUNE DIN NAVBAR ─────────────────────────────────────────
function openSection(index) {
    const contents = document.querySelectorAll('.section-content');
    const arrows   = document.querySelectorAll('.arrow');
    if (contents[index] && !contents[index].classList.contains('active')) {
        contents[index].classList.add('active');
        if (arrows[index]) arrows[index].classList.add('rotated');
    }
}

// ── VERIFICĂ TOATE EXERCIȚIILE ────────────────────────────────────────────
function checkAllExercises() {
    // Deschide toate secțiunile de exerciții
    for (let i = 1; i <= 5; i++) openSection(i);

    const r1 = checkEx1();
    const r2 = checkEx2();
    const r3 = checkEx3();
    const r4 = checkEx4();
    const r5 = checkEx5();

    const totalCorrect   = r1.correct + r2.correct + r3.correct + r4.correct + r5.correct;
    const totalQuestions = r1.total   + r2.total   + r3.total   + r4.total   + r5.total;
    const percentage     = Math.round((totalCorrect / totalQuestions) * 100);

    let emoji, message;
    if (percentage === 100) {
        emoji = '🏆'; message = 'Ausgezeichnet! Perfectt!';
    } else if (percentage >= 80) {
        emoji = '⭐'; message = 'Sehr gut! Foarte bine!';
    } else if (percentage >= 60) {
        emoji = '👍'; message = 'Gut! Bine! Continuă!';
    } else {
        emoji = '📖'; message = 'Wiederhole die Theorie! Repetă teoria!';
    }

    const scoreDiv = document.getElementById('score');
    scoreDiv.className = 'score show';
    scoreDiv.innerHTML = `
        <div style="font-size:2rem; margin-bottom:8px;">${emoji}</div>
        <div>Scorul tău: <strong>${totalCorrect} / ${totalQuestions}</strong> (${percentage}%)</div>
        <div style="margin-top:6px; font-size:1rem; color:#059669;">${message}</div>
        <div style="margin-top:10px; font-size:0.85rem; color:#6b7280;">
            Ex.1: ${r1.correct}/${r1.total} &nbsp;|&nbsp;
            Ex.2: ${r2.correct}/${r2.total} &nbsp;|&nbsp;
            Ex.3: ${r3.correct}/${r3.total} &nbsp;|&nbsp;
            Ex.4: ${r4.correct}/${r4.total} &nbsp;|&nbsp;
            Ex.5: ${r5.correct}/${r5.total}
        </div>
    `;

    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ── RESETEAZĂ TOT ─────────────────────────────────────────────────────────
function resetAll() {
    // Exercițiu 1 – selecturi
    for (let i = 0; i < 7; i++) {
        const s = document.getElementById(`ex1-q${i}`);
        const f = document.getElementById(`ex1-f${i}`);
        if (s) s.value = '';
        if (f) f.className = 'feedback';
    }

    // Exercițiu 2 – radio R/F
    for (let i = 0; i < 5; i++) {
        document.querySelectorAll(`input[name="ex2-q${i}"]`).forEach(r => r.checked = false);
        const f = document.getElementById(`ex2-f${i}`);
        if (f) f.className = 'feedback';
    }

    // Exercițiu 3 – text input
    for (let i = 0; i < 5; i++) {
        const inp = document.getElementById(`ex3-q${i}`);
        const f   = document.getElementById(`ex3-f${i}`);
        if (inp) inp.value = '';
        if (f)   f.className = 'feedback';
    }

    // Exercițiu 4 – radio multiple choice
    for (let i = 0; i < 5; i++) {
        document.querySelectorAll(`input[name="ex4-q${i}"]`).forEach(r => r.checked = false);
        const f = document.getElementById(`ex4-f${i}`);
        if (f) f.className = 'feedback';
    }

    // Exercițiu 5 – selecturi dialog
    for (let i = 0; i < 5; i++) {
        const s = document.getElementById(`ex5-q${i}`);
        const f = document.getElementById(`ex5-f${i}`);
        if (s) s.value = '';
        if (f) f.className = 'feedback';
    }

    // Scor
    const sc = document.getElementById('score');
    if (sc) sc.className = 'score';

    // Rezolvări – închide toate
    for (let i = 1; i <= 5; i++) {
        const r = document.getElementById(`rezolvari-${i}`);
        if (r) r.classList.remove('show');
    }

    // Flashcards
    if (typeof currentCardIndex !== 'undefined') {
        currentCardIndex = 0;
        updateFlashcard();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── KEYBOARD NAVIGATION FLASHCARDS ───────────────────────────────────────
document.addEventListener('keydown', (e) => {
    const fc = document.getElementById('flashcard');
    if (!fc) return;
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft')  prevCard();
    if (e.key === ' ')          { e.preventDefault(); flipCard(); }
});
