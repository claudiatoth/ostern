/* ============================================================
   OSTERN AUF DEUTSCH - test_final.js
   Claudia Toth - claudiatoth.github.io
   Test Final: 15 întrebări, punctaj, rezolvări, înapoi la lecție
   ============================================================ */

const testData = [
    // ── VOCABULAR (5 întrebări)
    {
        type: 'select',
        category: '🐣 Vocabular',
        question: 'Ce înseamnă "der Osterhase"?',
        options: ['oul de Paști', 'iepurașul de Paști', 'mielul de Paști', 'focul de Paști'],
        answer: 1,
        points: 1
    },
    {
        type: 'select',
        category: '🐣 Vocabular',
        question: 'Care este pluralul lui "das Osterei"?',
        options: ['die Ostereis', 'die Ostereier', 'die Ostereien', 'die Osterein'],
        answer: 1,
        points: 1
    },
    {
        type: 'select',
        category: '🐣 Vocabular',
        question: 'Ce înseamnă "die Fastenzeit"?',
        options: ['Osterzeit', 'Postul Mare', 'Vinerea Mare', 'Duminica Floriilor'],
        answer: 1,
        points: 1
    },
    {
        type: 'select',
        category: '🐣 Vocabular',
        question: 'Verbul "schmücken" înseamnă:',
        options: ['a se ruga', 'a posti', 'a decora', 'a ascunde'],
        answer: 2,
        points: 1
    },
    {
        type: 'select',
        category: '🐣 Vocabular',
        question: 'Ce înseamnă adjectivul "gesegnet"?',
        options: ['colorat', 'vesel', 'festiv', 'binecuvântat'],
        answer: 3,
        points: 1
    },

    // ── SALUTĂRI LITURGICE (3 întrebări)
    {
        type: 'select',
        category: '✝ Salutări liturgice',
        question: '"Christus ist auferstanden!" înseamnă:',
        options: ['Paște fericit!', 'Hristos a înviat!', 'Adevărat a înviat!', 'Paște binecuvântat!'],
        answer: 1,
        points: 2
    },
    {
        type: 'select',
        category: '✝ Salutări liturgice',
        question: 'Care este răspunsul la "Christus ist auferstanden!"?',
        options: ['Frohe Ostern!', 'Gesegnete Ostern!', 'Wahrhaftig ist er auferstanden!', 'Alles Gute!'],
        answer: 2,
        points: 2
    },
    {
        type: 'text',
        category: '✝ Salutări liturgice',
        question: 'Scrie salutul liturgic de Paști în germană (răspunsul, nu salutul):',
        answer: 'wahrhaftig ist er auferstanden',
        answerDisplay: 'Wahrhaftig ist er auferstanden!',
        points: 2
    },

    // ── GRAMATICĂ (4 întrebări)
    {
        type: 'select',
        category: '📐 Gramatică',
        question: 'Care este articolul corect? ___ Osterhase bringt Schokolade.',
        options: ['das', 'die', 'der', 'dem'],
        answer: 2,
        points: 1
    },
    {
        type: 'select',
        category: '📐 Gramatică',
        question: 'Akkusativ: Ich kaufe ___ Osterkorb. (der Osterkorb)',
        options: ['der', 'die', 'das', 'den'],
        answer: 3,
        points: 1
    },
    {
        type: 'select',
        category: '📐 Gramatică',
        question: 'Care este genul lui "die Auferstehung"?',
        options: ['masculin', 'feminin', 'neutru', 'plural'],
        answer: 1,
        points: 1
    },
    {
        type: 'select',
        category: '📐 Gramatică',
        question: 'Completează: Die Kinder ___ Ostereier im Garten.',
        options: ['sucht', 'suchen', 'suchst', 'suchet'],
        answer: 1,
        points: 1
    },

    // ── CULTURĂ (3 întrebări)
    {
        type: 'select',
        category: '🌍 Cultură',
        question: 'Care zile sunt Feiertag (zile libere) în Germania la Paști?',
        options: [
            'Ostersonntag și Ostermontag',
            'Karfreitag și Ostermontag',
            'Karsamstag și Ostersonntag',
            'Palmsonntag și Karfreitag'
        ],
        answer: 1,
        points: 1
    },
    {
        type: 'select',
        category: '🌍 Cultură',
        question: 'Ostern cade întotdeauna:',
        options: [
            'Pe 25 martie',
            'Pe 1 aprilie',
            'În prima duminică după prima lună plină de primăvară',
            'Pe 25 decembrie'
        ],
        answer: 2,
        points: 1
    },
    {
        type: 'select',
        category: '🌍 Cultură',
        question: 'Ce aduce Osterhase copiilor?',
        options: [
            'Cadouri de Crăciun',
            'Ouă vopsite și dulciuri',
            'Flori de primăvară',
            'Lumânări de Paști'
        ],
        answer: 1,
        points: 1
    }
];

const TOTAL_POINTS = testData.reduce((s, q) => s + q.points, 0);

// ── RENDER TEST ───────────────────────────────────────────────────────────
function renderTest() {
    const container = document.getElementById('test-content');
    if (!container) return;

    let currentCategory = '';
    let html = '';

    testData.forEach((q, i) => {
        // Separator de categorie
        if (q.category !== currentCategory) {
            currentCategory = q.category;
            html += `<div class="test-category">${q.category}</div>`;
        }

        const pointsLabel = q.points > 1
            ? `<span class="test-points">${q.points} puncte</span>`
            : `<span class="test-points">1 punct</span>`;

        if (q.type === 'select') {
            const choices = q.options.map((opt, j) =>
                `<label class="test-choice">
                    <input type="radio" name="test-q${i}" value="${j}"> ${opt}
                </label>`).join('');
            html += `
            <div class="test-item" id="test-item-${i}">
                <div class="test-question">
                    <span class="test-qnum">${i + 1}</span>
                    ${q.question} ${pointsLabel}
                </div>
                <div class="test-choices">${choices}</div>
                <div class="test-feedback" id="test-f${i}"></div>
            </div>`;
        } else {
            html += `
            <div class="test-item" id="test-item-${i}">
                <div class="test-question">
                    <span class="test-qnum">${i + 1}</span>
                    ${q.question} ${pointsLabel}
                </div>
                <input type="text" id="test-q${i}" class="test-input" placeholder="Scrie răspunsul...">
                <div class="test-feedback" id="test-f${i}"></div>
            </div>`;
        }
    });

    container.innerHTML = html;
}

// ── SUBMIT TEST ───────────────────────────────────────────────────────────
function submitTest() {
    let totalEarned = 0;
    const results = [];

    testData.forEach((q, i) => {
        let isCorrect = false;

        if (q.type === 'select') {
            const sel = document.querySelector(`input[name="test-q${i}"]:checked`);
            isCorrect = sel && parseInt(sel.value) === q.answer;
        } else {
            const inp = document.getElementById(`test-q${i}`);
            const val = inp ? inp.value.trim().toLowerCase().replace(/[!.,?]/g,'') : '';
            isCorrect = val === q.answer.toLowerCase().replace(/[!.,?]/g,'');
        }

        if (isCorrect) totalEarned += q.points;

        const fb = document.getElementById(`test-f${i}`);
        const item = document.getElementById(`test-item-${i}`);

        const correctText = q.type === 'select'
            ? q.options[q.answer]
            : (q.answerDisplay || q.answer);

        if (fb) {
            fb.className = isCorrect ? 'test-feedback correct' : 'test-feedback wrong';
            fb.textContent = isCorrect
                ? `✓ Corect! (+${q.points} ${q.points > 1 ? 'puncte' : 'punct'})`
                : `✗ Greșit. Răspuns corect: ${correctText}`;
        }
        if (item) item.classList.add(isCorrect ? 'item-correct' : 'item-wrong');

        results.push({ correct: isCorrect, points: isCorrect ? q.points : 0 });
    });

    showTestScore(totalEarned, TOTAL_POINTS);

    // Dezactivează toate inputurile
    document.querySelectorAll('#test-content input').forEach(el => el.disabled = true);
    document.getElementById('test-submit-btn').style.display = 'none';
    document.getElementById('test-reset-btn').style.display = 'inline-block';
}

// ── SCOR TEST ─────────────────────────────────────────────────────────────
function showTestScore(earned, total) {
    const pct = Math.round((earned / total) * 100);
    let grade, color, emoji;

    if (pct >= 90)      { grade = 'Sehr gut! Excelent!';   color = '#065f46'; emoji = '🏆'; }
    else if (pct >= 70) { grade = 'Gut! Bine!';             color = '#059669'; emoji = '⭐'; }
    else if (pct >= 50) { grade = 'Befriedigend. Satisfăcător.'; color = '#d97706'; emoji = '👍'; }
    else                { grade = 'Wiederhole die Theorie! Repetă lecția!'; color = '#b91c1c'; emoji = '📖'; }

    const scoreEl = document.getElementById('test-score');
    scoreEl.style.display = 'block';
    scoreEl.innerHTML = `
        <div class="test-score-emoji">${emoji}</div>
        <div class="test-score-main">${earned} / ${total} puncte</div>
        <div class="test-score-pct">${pct}%</div>
        <div class="test-score-grade" style="color:${color}">${grade}</div>
        <div class="test-score-breakdown">
            ${buildScoreBreakdown(earned, total, pct)}
        </div>
        <div class="test-score-actions">
            <button class="btn-back-lesson" onclick="goBackToLesson()">← Înapoi la lecție</button>
            <button class="btn-test-retry" onclick="resetTest()">↻ Încearcă din nou</button>
        </div>
    `;
    scoreEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function buildScoreBreakdown(earned, total, pct) {
    const filled = Math.round(pct / 10);
    const bar = '█'.repeat(filled) + '░'.repeat(10 - filled);
    return `<span style="font-family:monospace; font-size:1.1rem; color:#10b981;">${bar}</span> ${pct}%`;
}

// ── RESET TEST ────────────────────────────────────────────────────────────
function resetTest() {
    // Reactivează inputuri
    document.querySelectorAll('#test-content input').forEach(el => el.disabled = false);

    // Șterge feedback
    testData.forEach((_, i) => {
        const fb   = document.getElementById(`test-f${i}`);
        const item = document.getElementById(`test-item-${i}`);
        if (fb)   { fb.className = 'test-feedback'; fb.textContent = ''; }
        if (item) { item.classList.remove('item-correct', 'item-wrong'); }

        if (testData[i].type === 'select') {
            document.querySelectorAll(`input[name="test-q${i}"]`).forEach(r => r.checked = false);
        } else {
            const inp = document.getElementById(`test-q${i}`);
            if (inp) inp.value = '';
        }
    });

    // Ascunde scor
    const scoreEl = document.getElementById('test-score');
    if (scoreEl) scoreEl.style.display = 'none';

    // Afișează butonul Submit
    const sb = document.getElementById('test-submit-btn');
    const rb = document.getElementById('test-reset-btn');
    if (sb) sb.style.display = 'inline-block';
    if (rb) rb.style.display = 'none';

    window.scrollTo({ top: document.getElementById('test-final').offsetTop - 120, behavior: 'smooth' });
}

// ── ÎNAPOI LA LECȚIE ─────────────────────────────────────────────────────
function goBackToLesson() {
    // Deschide secțiunea Teorie și scroll la top
    openSection(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderTest);
