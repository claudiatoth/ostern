/* ============================================================
   OSTERN AUF DEUTSCH - exercises.js
   Claudia Toth - claudiatoth.github.io
   Fiecare exercițiu are butoane proprii Verifică + Resetează
   ============================================================ */

const ex1Data = {
    wordBank: ['Osterhase', 'Karfreitag', 'Auferstehung', 'Ostereier', 'Osterkorb', 'feiern', 'Osterfeuer'],
    questions: [
        { sentence: 'Am ___ ist Jesus Christus gestorben.',             answer: 'Karfreitag' },
        { sentence: 'Die ___ Jesu Christi feiern wir am Ostersonntag.', answer: 'Auferstehung' },
        { sentence: 'Die Kinder suchen die bunten ___ im Garten.',      answer: 'Ostereier' },
        { sentence: 'Der ___ bringt den Kindern Schokolade.',           answer: 'Osterhase' },
        { sentence: 'In diesem ___ sind Eier und Süßigkeiten.',         answer: 'Osterkorb' },
        { sentence: 'Wir ___ Ostern zusammen mit der Familie.',         answer: 'feiern' },
        { sentence: 'Am Ostersamstag entzündet man ein ___ .',          answer: 'Osterfeuer' }
    ]
};

function renderEx1() {
    const container = document.getElementById('main-section-1');
    if (!container) return;
    const options = ex1Data.wordBank.map(w => `<option value="${w}">${w}</option>`).join('');
    let html = `<div class="exercise-instruction">Alege cuvântul corect din lista de mai jos pentru fiecare propoziție.</div>
        <div class="word-bank">🗂️ <strong>Cuvinte:</strong> ${ex1Data.wordBank.join(' • ')}</div>`;
    ex1Data.questions.forEach((q, i) => {
        const parts = q.sentence.split('___');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group">
            <label>${parts[0]}<select id="ex1-q${i}"><option value="">– alege –</option>${options}</select>${parts[1]}</label>
            <div class="feedback" id="ex1-f${i}"></div></div></div>`;
    });
    html += buildExButtons(1);
    html += buildRezolvari(1, ex1Data.questions.map((q, i) => `${i+1}. ${q.answer}`));
    container.innerHTML = html;
}

function checkEx1(showScore = true) {
    let correct = 0;
    ex1Data.questions.forEach((q, i) => {
        const sel = document.getElementById(`ex1-q${i}`);
        const fb  = document.getElementById(`ex1-f${i}`);
        if (!sel || !fb) return;
        if (sel.value === q.answer) { fb.className = 'feedback correct'; fb.textContent = '✓ Corect!'; correct++; }
        else { fb.className = 'feedback wrong'; fb.textContent = sel.value ? `✗ Greșit. Corect: ${q.answer}` : `✗ Fără răspuns. Corect: ${q.answer}`; }
    });
    if (showScore) showExScore(1, correct, ex1Data.questions.length);
    return { correct, total: ex1Data.questions.length };
}

function resetEx1() {
    ex1Data.questions.forEach((_, i) => {
        const s = document.getElementById(`ex1-q${i}`); const f = document.getElementById(`ex1-f${i}`);
        if (s) s.value = ''; if (f) f.className = 'feedback';
    });
    hideExScore(1);
    const r = document.getElementById('rezolvari-1'); if (r) r.classList.remove('show');
}

// ── EX 2 ─────────────────────────────────────────────────────────────────
const ex2Data = [
    { text: 'Ostern ist immer am 25. März.',                               answer: 'F', explanation: 'Ostern hat kein festes Datum.' },
    { text: 'Der Karfreitag ist ein gesetzlicher Feiertag in Deutschland.', answer: 'R', explanation: 'Richtig! Karfreitag ist frei.' },
    { text: 'Der Osterhase bringt den Kindern Süßigkeiten.',               answer: 'R', explanation: 'Richtig! Schokolade und Eier.' },
    { text: 'Die Fastenzeit endet am Ostersonntag.',                       answer: 'R', explanation: 'Richtig! Ostern beendet die Fastenzeit.' },
    { text: 'In Deutschland feiern alle Menschen Ostern nur religiös.',    answer: 'F', explanation: 'Falsch! Viele feiern es auch kulturell.' }
];

function renderEx2() {
    const container = document.getElementById('main-section-2');
    if (!container) return;
    let html = `<div class="exercise-instruction">Marchează <strong>R</strong>ichtig (adevărat) sau <strong>F</strong>alsch (fals).</div>`;
    ex2Data.forEach((q, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group">
            <label>${q.text}</label>
            <div class="radio-group">
                <label><input type="radio" name="ex2-q${i}" value="R"> ✅ Richtig</label>
                <label><input type="radio" name="ex2-q${i}" value="F"> ❌ Falsch</label>
            </div>
            <div class="feedback" id="ex2-f${i}"></div></div></div>`;
    });
    html += buildExButtons(2);
    html += buildRezolvari(2, ex2Data.map((q, i) => `${i+1}. ${q.answer} – ${q.explanation}`));
    container.innerHTML = html;
}

function checkEx2(showScore = true) {
    let correct = 0;
    ex2Data.forEach((q, i) => {
        const sel = document.querySelector(`input[name="ex2-q${i}"]:checked`);
        const fb  = document.getElementById(`ex2-f${i}`);
        if (!fb) return;
        if (!sel) { fb.className = 'feedback wrong'; fb.textContent = `✗ Fără răspuns. Corect: ${q.answer}`; return; }
        if (sel.value === q.answer) { fb.className = 'feedback correct'; fb.textContent = `✓ Corect! ${q.explanation}`; correct++; }
        else { fb.className = 'feedback wrong'; fb.textContent = `✗ Greșit. Corect: ${q.answer} – ${q.explanation}`; }
    });
    if (showScore) showExScore(2, correct, ex2Data.length);
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    ex2Data.forEach((_, i) => {
        document.querySelectorAll(`input[name="ex2-q${i}"]`).forEach(r => r.checked = false);
        const f = document.getElementById(`ex2-f${i}`); if (f) f.className = 'feedback';
    });
    hideExScore(2);
    const r = document.getElementById('rezolvari-2'); if (r) r.classList.remove('show');
}

// ── EX 3 ─────────────────────────────────────────────────────────────────
const ex3Data = [
    { ro: 'Paște fericit!',       de: 'Frohe Ostern',                   alt: ['ein frohes osterfest'] },
    { ro: 'Paște binecuvântat!',  de: 'Gesegnete Ostern',               alt: [] },
    { ro: 'Hristos a înviat!',    de: 'Christus ist auferstanden',       alt: [] },
    { ro: 'Adevărat a înviat!',   de: 'Wahrhaftig ist er auferstanden',  alt: [] },
    { ro: 'Abia aștept Paștele.', de: 'Ich freue mich auf Ostern',      alt: [] }
];

function renderEx3() {
    const container = document.getElementById('main-section-3');
    if (!container) return;
    let html = `<div class="exercise-instruction">Traduce în germană. Verificarea nu ține cont de majuscule sau punctuație.</div>`;
    ex3Data.forEach((q, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group">
            <label>${q.ro}</label>
            <input type="text" id="ex3-q${i}" placeholder="Scrie în germană...">
            <div class="feedback" id="ex3-f${i}"></div></div></div>`;
    });
    html += buildExButtons(3);
    html += buildRezolvari(3, ex3Data.map((q, i) => `${i+1}. ${q.de}!`));
    container.innerHTML = html;
}

function checkEx3(showScore = true) {
    let correct = 0;
    ex3Data.forEach((q, i) => {
        const input = document.getElementById(`ex3-q${i}`);
        const fb    = document.getElementById(`ex3-f${i}`);
        if (!input || !fb) return;
        const val  = input.value.trim().toLowerCase().replace(/[!.,?]/g,'');
        const exp  = q.de.toLowerCase().replace(/[!.,?]/g,'');
        const alts = q.alt.map(a => a.toLowerCase().replace(/[!.,?]/g,''));
        if (val === exp || alts.includes(val)) { fb.className = 'feedback correct'; fb.textContent = '✓ Corect!'; correct++; }
        else if (!val) { fb.className = 'feedback wrong'; fb.textContent = `✗ Lipsă. Răspuns: ${q.de}!`; }
        else { fb.className = 'feedback wrong'; fb.textContent = `✗ Greșit. Răspuns: ${q.de}!`; }
    });
    if (showScore) showExScore(3, correct, ex3Data.length);
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    ex3Data.forEach((_, i) => {
        const inp = document.getElementById(`ex3-q${i}`); const f = document.getElementById(`ex3-f${i}`);
        if (inp) inp.value = ''; if (f) f.className = 'feedback';
    });
    hideExScore(3);
    const r = document.getElementById('rezolvari-3'); if (r) r.classList.remove('show');
}

// ── EX 4 ─────────────────────────────────────────────────────────────────
const ex4Data = [
    { question: 'Cum se spune "iepurașul de Paști" în germană?',
      options: ['der Osterkorb','der Osterhase','das Osterlamm','die Osterkerze'], answer: 1 },
    { question: 'Ce înseamnă verbul "feiern"?',
      options: ['a posti','a dărui','a sărbători','a ascunde'], answer: 2 },
    { question: 'Care este răspunsul la "Christus ist auferstanden!"?',
      options: ['Frohe Ostern!','Gesegnete Ostern!','Wahrhaftig ist er auferstanden!','Danke schön!'], answer: 2 },
    { question: 'Ce înseamnă adjectivul "bunt"?',
      options: ['festiv','tradițional','religios','colorat'], answer: 3 },
    { question: 'Care zi este Feiertag în Germania?',
      options: ['Palmsonntag','Ostermittwoch','Karfreitag','Aschermittwoch'], answer: 2 }
];

function renderEx4() {
    const container = document.getElementById('main-section-4');
    if (!container) return;
    let html = `<div class="exercise-instruction">Alege varianta corectă pentru fiecare întrebare.</div>`;
    ex4Data.forEach((q, i) => {
        const choices = q.options.map((opt, j) =>
            `<label><input type="radio" name="ex4-q${i}" value="${j}"> ${opt}</label>`).join('');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group">
            <label>${q.question}</label>
            <div class="choices">${choices}</div>
            <div class="feedback" id="ex4-f${i}"></div></div></div>`;
    });
    html += buildExButtons(4);
    html += buildRezolvari(4, ex4Data.map((q, i) => `${i+1}. ${q.options[q.answer]}`));
    container.innerHTML = html;
}

function checkEx4(showScore = true) {
    let correct = 0;
    ex4Data.forEach((q, i) => {
        const sel = document.querySelector(`input[name="ex4-q${i}"]:checked`);
        const fb  = document.getElementById(`ex4-f${i}`);
        if (!fb) return;
        if (!sel) { fb.className = 'feedback wrong'; fb.textContent = `✗ Fără răspuns. Corect: ${q.options[q.answer]}`; return; }
        if (parseInt(sel.value) === q.answer) { fb.className = 'feedback correct'; fb.textContent = '✓ Corect!'; correct++; }
        else { fb.className = 'feedback wrong'; fb.textContent = `✗ Greșit. Corect: ${q.options[q.answer]}`; }
    });
    if (showScore) showExScore(4, correct, ex4Data.length);
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    ex4Data.forEach((_, i) => {
        document.querySelectorAll(`input[name="ex4-q${i}"]`).forEach(r => r.checked = false);
        const f = document.getElementById(`ex4-f${i}`); if (f) f.className = 'feedback';
    });
    hideExScore(4);
    const r = document.getElementById('rezolvari-4'); if (r) r.classList.remove('show');
}

// ── EX 5 ─────────────────────────────────────────────────────────────────
const ex5Data = {
    wordBank: ['Ostern','Oma','wunderschön','Ihnen','Garten'],
    questions: [
        { before: 'Lehrerin: Was macht ihr zu',      after: '?',               answer: 'Ostern' },
        { before: 'Schüler: Wir fahren zu',           after: ' und färben Eier.', answer: 'Oma' },
        { before: 'Lehrerin: Das klingt',             after: '! Frohe Ostern!', answer: 'wunderschön' },
        { before: 'Schüler: Danke,',                  after: ' auch!',          answer: 'Ihnen' },
        { before: 'Schüler: Wir verstecken Eier im', after: '.',               answer: 'Garten' }
    ]
};

function renderEx5() {
    const container = document.getElementById('main-section-5');
    if (!container) return;
    const options = ex5Data.wordBank.map(w => `<option value="${w}">${w}</option>`).join('');
    let html = `<div class="exercise-instruction">Completează dialogul cu cuvintele corecte.</div>
        <div class="word-bank">🗂️ <strong>Cuvinte:</strong> ${ex5Data.wordBank.join(' • ')}</div>`;
    ex5Data.questions.forEach((q, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group">
            <label style="font-style:italic;">${q.before}
                <select id="ex5-q${i}" style="margin:0 6px;"><option value="">…</option>${options}</select>${q.after}
            </label>
            <div class="feedback" id="ex5-f${i}"></div></div></div>`;
    });
    html += buildExButtons(5);
    html += buildRezolvari(5, ex5Data.questions.map((q, i) => `${i+1}. ${q.answer}`));
    container.innerHTML = html;
}

function checkEx5(showScore = true) {
    let correct = 0;
    ex5Data.questions.forEach((q, i) => {
        const sel = document.getElementById(`ex5-q${i}`); const fb = document.getElementById(`ex5-f${i}`);
        if (!sel || !fb) return;
        if (sel.value === q.answer) { fb.className = 'feedback correct'; fb.textContent = '✓ Corect!'; correct++; }
        else { fb.className = 'feedback wrong'; fb.textContent = sel.value ? `✗ Greșit. Corect: ${q.answer}` : `✗ Fără răspuns. Corect: ${q.answer}`; }
    });
    if (showScore) showExScore(5, correct, ex5Data.questions.length);
    return { correct, total: ex5Data.questions.length };
}

function resetEx5() {
    ex5Data.questions.forEach((_, i) => {
        const s = document.getElementById(`ex5-q${i}`); const f = document.getElementById(`ex5-f${i}`);
        if (s) s.value = ''; if (f) f.className = 'feedback';
    });
    hideExScore(5);
    const r = document.getElementById('rezolvari-5'); if (r) r.classList.remove('show');
}

// ── HELPERS ───────────────────────────────────────────────────────────────
function buildExButtons(n) {
    return `<div class="ex-btn-row">
        <button class="btn-ex-check" onclick="checkEx${n}()">✓ Verifică</button>
        <button class="btn-ex-reset" onclick="resetEx${n}()">↻ Resetează</button>
    </div>
    <div class="ex-score" id="ex-score-${n}"></div>`;
}

function showExScore(n, correct, total) {
    const el = document.getElementById(`ex-score-${n}`);
    if (!el) return;
    const pct = Math.round((correct / total) * 100);
    const emoji = pct === 100 ? '🏆' : pct >= 60 ? '👍' : '📖';
    el.className = 'ex-score show';
    el.innerHTML = `${emoji} <strong>${correct} / ${total}</strong> corect (${pct}%)`;
}

function hideExScore(n) {
    const el = document.getElementById(`ex-score-${n}`);
    if (el) el.className = 'ex-score';
}

function buildRezolvari(n, lines) {
    return `<button class="rezolvari-toggle" onclick="toggleRezolvari(${n})">📋 Vezi rezolvările</button>
    <div class="rezolvari-content" id="rezolvari-${n}">${lines.join('<br>')}</div>`;
}

function toggleRezolvari(n) {
    const el = document.getElementById(`rezolvari-${n}`);
    if (el) el.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    renderEx1(); renderEx2(); renderEx3(); renderEx4(); renderEx5();
});
