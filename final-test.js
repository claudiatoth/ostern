// ============================================
// TEST FINAL — Ostern auf Deutsch (refactor mai 2026)
// Claudia Toth · 15 întrebări mixte
// 4 vocabular + plural · 4 articol der/die/das · 4 verbe/expresii · 3 traducere
// ============================================

function normalizeTestAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim()
        .trim();
}

const finalTestData = [
    // ===== 4 VOCABULAR + PLURAL =====
    { type: 'translate', category: '🥚 Plural', question: 'Care este pluralul lui das Osterei?', ro: 'das Osterei → ?', accept: ['die ostereier', 'ostereier'], correct: 'die Ostereier', explanation: 'Neutru +er — das Osterei → die Ostereier (ca das Buch → die Bücher).' },
    { type: 'translate', category: '🐰 Plural', question: 'Care este pluralul lui der Osterhase?', ro: 'der Osterhase → ?', accept: ['die osterhasen', 'osterhasen'], correct: 'die Osterhasen', explanation: 'der Osterhase face plural cu +n (n-Deklination, tipic masculini terminați în -e).' },
    { type: 'translate', category: '🐑 Plural', question: 'Care este pluralul lui das Osterlamm?', ro: 'das Osterlamm → ?', accept: ['die osterlaemmer', 'die osterlämmer', 'osterlaemmer', 'osterlämmer'], correct: 'die Osterlämmer', explanation: 'Neutru cu Umlaut + er — das Lamm → die Lämmer (ca das Haus → die Häuser).' },
    { type: 'translate', category: '✝ Vocabular', question: 'Cum se spune „învierea" în germană (cu articol)?', ro: 'învierea → ?', accept: ['die auferstehung'], correct: 'die Auferstehung', explanation: 'Feminin -ung. Pluralul: die Auferstehungen (+en).' },

    // ===== 4 ARTICOL der/die/das =====
    { type: 'multiple', category: '🎯 Articol', question: 'Care e articolul corect pentru Osterkerze?', options: ['der', 'die', 'das'], correct: 'die', explanation: 'die Osterkerze (lumânarea) — feminin, plural die Osterkerzen.' },
    { type: 'multiple', category: '🎯 Articol', question: 'Care e articolul corect pentru Karfreitag?', options: ['der', 'die', 'das'], correct: 'der', explanation: 'der Karfreitag — zilele săptămânii sunt MEREU masculine (recap: der Montag, der Dienstag).' },
    { type: 'multiple', category: '🎯 Articol', question: 'Care e articolul corect pentru Osterfeuer?', options: ['der', 'die', 'das'], correct: 'das', explanation: 'das Osterfeuer (focul de Paști) — neutru. Pluralul identic: die Osterfeuer (invariabil, terminație -er).' },
    { type: 'multiple', category: '🎯 Articol', question: 'Care e articolul corect pentru Auferstehung?', options: ['der', 'die', 'das'], correct: 'die', explanation: 'Toate substantivele cu sufix -ung sunt feminine în germană (die Auferstehung, die Bewegung, die Zeitung).' },

    // ===== 4 VERBE / EXPRESII =====
    { type: 'multiple', category: '🔁 Verb', question: 'Care e răspunsul corect la „Christus ist auferstanden!"?', options: ['Frohe Ostern!', 'Gesegnete Ostern!', 'Wahrhaftig ist er auferstanden!', 'Danke schön!'], correct: 'Wahrhaftig ist er auferstanden!', explanation: 'Salutul liturgic tradițional cu răspunsul său. *Adevărat a înviat!*' },
    { type: 'multiple', category: '🔁 Verb', question: 'Ce înseamnă „verstecken"?', options: ['a căuta', 'a ascunde', 'a vopsi', 'a sărbători'], correct: 'a ascunde', explanation: 'verstecken = a ascunde. Acțiunea iepurașului: *Der Osterhase versteckt die Ostereier.*' },
    { type: 'multiple', category: '🔁 Verb', question: 'Cu ce auxiliar se conjugă „auferstehen" la Perfekt?', options: ['haben', 'sein', 'werden', 'mögen'], correct: 'sein', explanation: 'auferstehen e verb de schimbare de stare → Perfekt cu SEIN. *Christus IST auferstanden.* (NU hat auferstanden!)' },
    { type: 'luckentext', category: '🔁 Verb', question: 'Completează cu verbul corect (Präsens):', sentence: 'Die Kinder ____ die Ostereier im Garten.', translation: 'Copiii caută ouăle de Paști în grădină.', accept: ['suchen'], correct: 'suchen', explanation: 'suchen = a căuta. Persoana wir/sie/Sie + ihr/ei → forma de bază -en: sie suchen.' },

    // ===== 3 TRADUCERE =====
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți în germană:', ro: 'Paște fericit!', accept: ['frohe ostern', 'frohe ostern!'], correct: 'Frohe Ostern!', explanation: 'Urarea universală, neutră — folosită în orice context (familie, prieteni, formal).' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți în germană:', ro: 'Sărbătorim Paștele cu familia.', accept: ['wir feiern ostern mit der familie', 'wir feiern ostern mit der familie.'], correct: 'Wir feiern Ostern mit der Familie.', explanation: 'feiern = a sărbători. „mit der Familie" = Dativ feminin (die → der).' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți în germană:', ro: 'Iepurașul ascunde ouăle.', accept: ['der osterhase versteckt die ostereier', 'der osterhase versteckt die ostereier.'], correct: 'Der Osterhase versteckt die Ostereier.', explanation: 'der Osterhase (subiect, Nom) + versteckt (verb) + die Ostereier (obiect direct, Akk = identic cu Nom la plural).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const c = document.getElementById('final-test-container');
    if (!c) return;
    c.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>15 întrebări mixte</strong> despre vocabularul Ostern — plural, articole, verbe, urări liturgice.</p>
            <ul class="test-info-list">
                <li>📋 <strong>Format:</strong> o întrebare pe pagină</li>
                <li>✅ <strong>Verificare:</strong> feedback instant</li>
                <li>🎓 <strong>Prag promovare:</strong> 70%</li>
                <li>⏱️ <strong>Timp estimat:</strong> 8-12 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers = {};
    showQuestion(0);
}

function showQuestion(idx) {
    const q = finalTestData[idx];
    if (!q) return;
    const container = document.getElementById('question-container');
    const progressText = document.getElementById('progress-text');
    const progressCategory = document.getElementById('progress-category');
    const progressFill = document.getElementById('progress-fill');
    if (progressText) progressText.textContent = `Întrebarea ${idx + 1} / ${finalTestData.length}`;
    if (progressCategory) progressCategory.textContent = q.category;
    if (progressFill) progressFill.style.width = `${((idx + 1) / finalTestData.length) * 100}%`;
    let inputHTML = '';
    if (q.type === 'multiple') {
        inputHTML = '<div class="test-options">';
        q.options.forEach((opt, i) => {
            const checked = userAnswers[idx] === opt ? 'checked' : '';
            inputHTML += `<label class="test-option"><input type="radio" name="test-q${idx}" value="${opt}" ${checked}><span>${opt}</span></label>`;
        });
        inputHTML += '</div>';
    } else if (q.type === 'luckentext') {
        const sentence = q.sentence.replace('____', `<input type="text" id="test-input" value="${userAnswers[idx] || ''}" placeholder="completează" style="width:160px; margin:0 6px;">`);
        inputHTML = `<p style="font-size:1.1rem; margin-bottom:8px;">${sentence}</p><p style="color:#6b7280; font-style:italic;">🇷🇴 ${q.translation}</p>`;
    } else {
        const ro = q.ro ? `<p style="margin-bottom:8px;">🇷🇴 ${q.ro}</p>` : '';
        inputHTML = `${ro}<input type="text" id="test-input" value="${userAnswers[idx] || ''}" placeholder="răspunsul tău..." style="width:100%; padding:10px; font-size:1rem;">`;
    }
    container.innerHTML = `<div class="test-question"><h4>${q.question}</h4>${inputHTML}</div>`;
    const fb = document.getElementById('test-feedback');
    if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    const prevBtn = document.getElementById('test-prev-btn');
    const nextBtn = document.getElementById('test-next-btn');
    if (prevBtn) prevBtn.style.display = idx === 0 ? 'none' : 'inline-block';
    if (nextBtn) nextBtn.textContent = idx === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const radio = document.querySelector(`input[name="test-q${currentQuestionIndex}"]:checked`);
        userAnswer = radio ? radio.value : '';
    } else {
        const inp = document.getElementById('test-input');
        userAnswer = inp ? inp.value : '';
    }
    userAnswers[currentQuestionIndex] = userAnswer;
    const fb = document.getElementById('test-feedback');
    if (!userAnswer) {
        fb.className = 'feedback incorrect';
        fb.innerHTML = '⚠️ Te rog să dai un răspuns.';
        return;
    }
    let ok = false;
    if (q.type === 'multiple') {
        ok = userAnswer === q.correct;
    } else {
        const u = normalizeTestAnswer(userAnswer);
        ok = q.accept.some(a => normalizeTestAnswer(a) === u);
    }
    fb.className = ok ? 'feedback correct' : 'feedback incorrect';
    fb.innerHTML = ok
        ? `✓ Corect! <em>${q.explanation}</em>`
        : `✗ Greșit. Răspuns corect: <strong>${q.correct}</strong>. <em>${q.explanation}</em>`;
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
        return;
    }
    saveCurrentAnswer();
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

function prevQuestion() {
    if (currentQuestionIndex === 0) return;
    saveCurrentAnswer();
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
}

function saveCurrentAnswer() {
    const q = finalTestData[currentQuestionIndex];
    if (q.type === 'multiple') {
        const radio = document.querySelector(`input[name="test-q${currentQuestionIndex}"]:checked`);
        if (radio) userAnswers[currentQuestionIndex] = radio.value;
    } else {
        const inp = document.getElementById('test-input');
        if (inp) userAnswers[currentQuestionIndex] = inp.value;
    }
}

function finishTest() {
    saveCurrentAnswer();
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => {
        const userAnswer = userAnswers[i] || '';
        let isCorrect = false;
        if (q.type === 'multiple') isCorrect = userAnswer === q.correct;
        else {
            const u = normalizeTestAnswer(userAnswer);
            isCorrect = q.accept.some(a => normalizeTestAnswer(a) === u);
        }
        if (isCorrect) correct++;
    });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    document.getElementById('test-wizard').style.display = 'none';
    const r = document.getElementById('test-results');
    r.style.display = 'block';

    // Construiește lista de greșeli cu răspuns corect + explicație
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => {
        const userAnswer = userAnswers[i] || '';
        let isCorrect = false;
        if (q.type === 'multiple') isCorrect = userAnswer === q.correct;
        else {
            const u = normalizeTestAnswer(userAnswer);
            isCorrect = q.accept.some(a => normalizeTestAnswer(a) === u);
        }
        if (!isCorrect) {
            mistakes.push({ idx: i + 1, q, userAnswer });
        }
    });

    if (mistakes.length > 0) {
        mistakesHTML = '<div style="margin-top:30px; padding:20px; background:#fef2f2; border:2px solid #fca5a5; border-radius:12px;">' +
            '<h4 style="color:#991b1b; margin-bottom:12px;">📝 Greșelile tale — recapitulare cu răspunsuri corecte</h4>';
        mistakes.forEach(m => {
            const userShow = m.userAnswer ? `<em>„${m.userAnswer}"</em>` : '<em>(fără răspuns)</em>';
            mistakesHTML += '<div style="background:#fff; padding:12px 14px; margin-bottom:10px; border-left:4px solid #dc2626; border-radius:6px;">' +
                `<div style="font-weight:bold; color:#065f46; margin-bottom:6px;">Întrebarea ${m.idx} <span style="color:#6b7280; font-weight:normal; font-size:0.85rem;">· ${m.q.category}</span></div>` +
                `<div style="margin-bottom:6px; color:#374151;">${m.q.question}` +
                (m.q.sentence ? ` <em style="color:#6b7280;">${m.q.sentence}</em>` : '') +
                (m.q.ro && !m.q.sentence ? ` <em style="color:#6b7280;">🇷🇴 ${m.q.ro}</em>` : '') +
                '</div>' +
                `<div style="color:#dc2626; font-size:0.92rem;">❌ Răspunsul tău: ${userShow}</div>` +
                `<div style="color:#047857; font-size:0.92rem; margin-top:4px;">✓ Răspuns corect: <strong>${m.q.correct}</strong></div>` +
                `<div style="color:#6b7280; font-size:0.88rem; font-style:italic; margin-top:6px; padding-top:6px; border-top:1px dashed #e5e7eb;">💡 ${m.q.explanation}</div>` +
                '</div>';
        });
        mistakesHTML += '</div>';
    } else {
        mistakesHTML = '<div style="margin-top:24px; padding:16px; background:#ecfdf5; border:2px solid #10B981; border-radius:12px; text-align:center;">' +
            '<p style="color:#065f46; font-weight:bold;">🏆 Toate răspunsurile corecte — fără greșeli!</p></div>';
    }

    r.innerHTML = `
        <h3 style="color:#065f46; text-align:center;">${passed ? '🏆 Felicitări — Test trecut!' : '📖 Mai exersează puțin'}</h3>
        <div style="text-align:center; font-size:2rem; font-weight:bold; color:${passed ? '#047857' : '#dc2626'}; margin:20px 0;">${correct} / ${total} <span style="font-size:1.2rem;">(${pct}%)</span></div>
        <p style="text-align:center; color:#6b7280;">${passed ? 'Cunoști bine vocabularul Ostern!' : 'Recitește teoria și încearcă din nou.'}</p>
        ${mistakesHTML}
        <div style="text-align:center; margin-top:20px;">
            <button class="btn btn-check" onclick="resetTest()">↻ Reia testul</button>
        </div>
    `;
}

function resetTest() {
    currentQuestionIndex = 0;
    userAnswers = {};
    testCompleted = false;
    document.getElementById('test-results').style.display = 'none';
    document.getElementById('test-intro').style.display = 'block';
}

buildFinalTest();
