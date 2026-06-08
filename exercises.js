// ============================================
// EXERCIȚII — Ostern auf Deutsch (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · 5 patterns variate
// normalizeAnswer robust (fold diacritice RO + separator flex)
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim()
        .trim();
}

// ============================================
// EX 1: Completează cu cuvântul potrivit (7 itemi)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Am ____ ist Jesus Christus gestorben.', accept: ['karfreitag'], correct: 'Karfreitag', hint: 'Vinerea Mare' },
    { id: 'b', sentence: 'Die ____ Jesu Christi feiern wir am Ostersonntag.', accept: ['auferstehung'], correct: 'Auferstehung', hint: 'învierea' },
    { id: 'c', sentence: 'Die Kinder suchen die bunten ____ im Garten.', accept: ['ostereier'], correct: 'Ostereier', hint: 'ouăle de Paști (plural)' },
    { id: 'd', sentence: 'Der ____ bringt den Kindern Schokolade.', accept: ['osterhase'], correct: 'Osterhase', hint: 'iepurașul de Paști' },
    { id: 'e', sentence: 'In diesem ____ sind Eier und Süßigkeiten.', accept: ['osterkorb'], correct: 'Osterkorb', hint: 'coșul de Paști' },
    { id: 'f', sentence: 'Wir ____ Ostern zusammen mit der Familie.', accept: ['feiern'], correct: 'feiern', hint: 'a sărbători' },
    { id: 'g', sentence: 'Am Ostersamstag entzünden viele Menschen ein ____ .', accept: ['osterfeuer'], correct: 'Osterfeuer', hint: 'focul de Paști' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Completează propozițiile.</strong><br>Folosește cuvintele potrivite din vocabularul Ostern. Hint-ul îți dă traducerea RO.</div>';
    ex1Data.forEach((item, i) => {
        const parts = item.sentence.split('____');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${parts[0]}<input type="text" id="ex1-${item.id}" placeholder="${item.hint}" style="width:200px; margin:0 4px;">${parts[1]}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex1-${item.id}`).value);
        const f = document.getElementById(`ex1-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct} (${item.hint})`;
        if (ok) correct++;
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: Richtig oder Falsch (6 itemi culturali)
// ============================================
const ex2Data = [
    { id: 'a', text: 'Ostern ist immer am 25. März.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Ostern NU are dată fixă — cade între 22 martie și 25 aprilie.' },
    { id: 'b', text: 'Der Karfreitag ist ein gesetzlicher Feiertag in Deutschland.', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Karfreitag este zi liberă oficială (Feiertag) în toată Germania.' },
    { id: 'c', text: 'Der Osterhase bringt den Kindern Süßigkeiten.', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Tradiția spune că Osterhase aduce și ascunde ouă vopsite + ciocolată.' },
    { id: 'd', text: 'Die Fastenzeit endet am Ostersonntag.', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Postul Mare durează 40 zile și se încheie la Învierea de duminică.' },
    { id: 'e', text: 'Pluralul lui das Osterei este die Osterei.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Pluralul corect este die Osterei<strong>er</strong> (+er, ca la das Buch → Bücher).' },
    { id: 'f', text: 'Pluralul lui der Osterhase este die Osterhasen.', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'der Osterhase face plural die Osterhasen (+n — n-Deklination).' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Richtig oder Falsch?</strong><br>Scrie <strong>R</strong> (Richtig = adevărat) sau <strong>F</strong> (Falsch = fals) pentru fiecare propoziție.</div>';
    ex2Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${item.text}</label><input type="text" id="ex2-${item.id}" placeholder="R sau F" style="width:80px;"></div><div class="feedback" id="ex2-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex2-${item.id}`).value);
        const f = document.getElementById(`ex2-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.innerHTML = ok ? `✓ ${item.correct} — ${item.exp}` : `Corect: ${item.correct} — ${item.exp}`;
        if (ok) correct++;
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: Traducere RO → DE — urări și expresii (7 itemi)
// ============================================
const ex3Data = [
    { id: 'a', ro: 'Paște fericit!', accept: ['frohe ostern', 'frohe ostern!'], correct: 'Frohe Ostern!' },
    { id: 'b', ro: 'Paște binecuvântat!', accept: ['gesegnete ostern', 'gesegnete ostern!'], correct: 'Gesegnete Ostern!' },
    { id: 'c', ro: 'Hristos a înviat!', accept: ['christus ist auferstanden', 'christus ist auferstanden!'], correct: 'Christus ist auferstanden!' },
    { id: 'd', ro: 'Adevărat a înviat!', accept: ['wahrhaftig ist er auferstanden', 'wahrhaftig ist er auferstanden!'], correct: 'Wahrhaftig ist er auferstanden!' },
    { id: 'e', ro: 'Abia aștept Paștele.', accept: ['ich freue mich auf ostern', 'ich freue mich auf ostern.'], correct: 'Ich freue mich auf Ostern.' },
    { id: 'f', ro: 'Toate cele bune de Paști!', accept: ['alles gute zu ostern', 'alles gute zu ostern!'], correct: 'Alles Gute zu Ostern!' },
    { id: 'g', ro: 'Vacanță de Paști frumoasă!', accept: ['schoene osterferien', 'schöne osterferien', 'schoene osterferien!', 'schöne osterferien!'], correct: 'Schöne Osterferien!' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Traducere RO → DE.</strong><br>Scrie urarea sau expresia în germană. Verificarea acceptă cu/fără diacritice (ae=ä, oe=ö, ue=ü, ss=ß).</div>';
    ex3Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>🇷🇴 ${item.ro}</label><input type="text" id="ex3-${item.id}" placeholder="în germană..." style="width:100%;"></div><div class="feedback" id="ex3-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex3-${item.id}`).value);
        const f = document.getElementById(`ex3-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct}`;
        if (ok) correct++;
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: SORT 3 coloane — der / die / das (15 substantive Ostern)
// ============================================
const ex4Words = [
    'Osterhase', 'Osterei', 'Osterkerze', 'Karfreitag', 'Osterlamm',
    'Auferstehung', 'Osterkorb', 'Osterfeuer', 'Fastenzeit', 'Osternest',
    'Palmsonntag', 'Osterzeit', 'Ostermontag', 'Osterfest', 'Ostersonntag'
];
const ex4Solution = {
    'Osterhase':'der', 'Osterei':'das', 'Osterkerze':'die', 'Karfreitag':'der', 'Osterlamm':'das',
    'Auferstehung':'die', 'Osterkorb':'der', 'Osterfeuer':'das', 'Fastenzeit':'die', 'Osternest':'das',
    'Palmsonntag':'der', 'Osterzeit':'die', 'Ostermontag':'der', 'Osterfest':'das', 'Ostersonntag':'der'
};

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Sortează după gen.</strong><br>Pentru fiecare substantiv Ostern, scrie articolul corect: <strong>der</strong>, <strong>die</strong> sau <strong>das</strong>.</div>';
    html += '<div class="ex4-grid">';
    ex4Words.forEach((w, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>____ <span class="nomen-highlight">${w}</span></label><input type="text" id="ex4-${i}" placeholder="der/die/das" style="width:90px;"></div><div class="feedback" id="ex4-f${i}"></div></div>`;
    });
    html += '</div>';
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Words.forEach((w, i) => {
        const u = normalizeAnswer(document.getElementById(`ex4-${i}`).value);
        const f = document.getElementById(`ex4-f${i}`);
        const expected = ex4Solution[w];
        const ok = u === expected;
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${expected} ${w}` : `Corect: ${expected} ${w}`;
        if (ok) correct++;
    });
    return { correct, total: ex4Words.length };
}

// ============================================
// EX 5: Dialog completion — Annette ↔ Andreea (5 spații)
// ============================================
const ex5Data = [
    { id: 'a', before: 'Annette: Was machst du zu ', after: '?', accept: ['ostern'], correct: 'Ostern', hint: 'sărbătoarea' },
    { id: 'b', before: 'Andreea: Ich fahre zu meiner ', after: ' und wir färben Eier zusammen.', accept: ['oma'], correct: 'Oma', hint: 'bunica' },
    { id: 'c', before: 'Annette: Das klingt ', after: '! Frohe Ostern!', accept: ['wunderschoen', 'wunderschön'], correct: 'wunderschön', hint: 'minunat' },
    { id: 'd', before: 'Andreea: Danke, ', after: ' auch! Frohe Ostern!', accept: ['ihnen'], correct: 'Ihnen', hint: 'dvs. (Dativ politicos)' },
    { id: 'e', before: 'Andreea: Wir verstecken Ostereier im ', after: '.', accept: ['garten'], correct: 'Garten', hint: 'grădină' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Completează dialogul.</strong><br>Annette și Andreea se salută înainte de vacanța de Paști. Completează cuvintele lipsă.</div>';
    ex5Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label style="font-style:italic;">${item.before}<input type="text" id="ex5-${item.id}" placeholder="${item.hint}" style="width:200px; margin:0 4px;">${item.after}</label></div><div class="feedback" id="ex5-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex5-${item.id}`).value);
        const f = document.getElementById(`ex5-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct}`;
        if (ok) correct++;
    });
    return { correct, total: ex5Data.length };
}

// ============================================
// Build all + check dispatcher
// ============================================
function checkExercise(n) {
    let result;
    if (n === 1) result = checkEx1();
    else if (n === 2) result = checkEx2();
    else if (n === 3) result = checkEx3();
    else if (n === 4) result = checkEx4();
    else if (n === 5) result = checkEx5();
    if (!result) return;
    const score = document.getElementById(`score-${n}`);
    if (score) {
        const pct = Math.round((result.correct / result.total) * 100);
        const emoji = pct === 100 ? '🏆' : pct >= 60 ? '👍' : '📖';
        score.className = 'score show';
        score.innerHTML = `${emoji} <strong>${result.correct} / ${result.total}</strong> corect (${pct}%)`;
    }
}

function resetExercise(n) {
    let data;
    if (n === 1) data = ex1Data;
    else if (n === 2) data = ex2Data;
    else if (n === 3) data = ex3Data;
    else if (n === 4) { ex4Words.forEach((_, i) => { const inp = document.getElementById(`ex4-${i}`); const fb = document.getElementById(`ex4-f${i}`); if (inp) inp.value=''; if (fb) { fb.className='feedback'; fb.textContent=''; } }); const s = document.getElementById('score-4'); if (s) { s.className='score'; s.innerHTML=''; } return; }
    else if (n === 5) data = ex5Data;
    if (!data) return;
    data.forEach(item => {
        const inp = document.getElementById(`ex${n}-${item.id}`);
        const fb = document.getElementById(`ex${n}-f${item.id}`);
        if (inp) inp.value = '';
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
    const s = document.getElementById(`score-${n}`);
    if (s) { s.className = 'score'; s.innerHTML = ''; }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
