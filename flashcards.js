// ============================================
// FLASHCARDS — Ostern auf Deutsch (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · 32 carduri
// Substantive cu Sg + Pl (regula 26 mai) · Audio Hedda pre-generat
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== 15 SUBSTANTIVE OSTERN cu Sg + Pl =====
    { de: "das Osterei · die Ostereier", ro: "oul · ouăle de Paști (neutru +er)", audio: "audio/cards/01-osterei.wav" },
    { de: "der Osterhase · die Osterhasen", ro: "iepurașul · iepurașii de Paști (n-Deklination)", audio: "audio/cards/02-osterhase.wav" },
    { de: "das Osterlamm · die Osterlämmer", ro: "mielul · mieii de Paști (neutru +Umlaut +er)", audio: "audio/cards/03-osterlamm.wav" },
    { de: "der Osterkorb · die Osterkörbe", ro: "coșul · coșurile de Paști (masculin +Umlaut +e)", audio: "audio/cards/04-osterkorb.wav" },
    { de: "die Osterkerze · die Osterkerzen", ro: "lumânarea · lumânările de Paști (feminin +n)", audio: "audio/cards/05-osterkerze.wav" },
    { de: "das Osterfeuer · die Osterfeuer", ro: "focul · focurile de Paști (neutru invariabil)", audio: "audio/cards/06-osterfeuer.wav" },
    { de: "das Osternest · die Osternester", ro: "cuibul · cuiburile de Paști (neutru +er)", audio: "audio/cards/07-osternest.wav" },
    { de: "das Osterfest · die Osterfeste", ro: "sărbătoarea · sărbătorile de Paști (neutru +e)", audio: "audio/cards/08-osterfest.wav" },
    { de: "der Palmsonntag · die Palmsonntage", ro: "Duminica Floriilor · Duminicile Floriilor (rar, peste ani) — zi unică în calendar", audio: "audio/cards/09-palmsonntag.wav" },
    { de: "der Karfreitag · die Karfreitage", ro: "Vinerea Mare · Vinerile Mari (rar, peste ani) — zi liberă în Germania", audio: "audio/cards/10-karfreitag.wav" },
    { de: "der Karsamstag · die Karsamstage", ro: "Sâmbăta Mare · Sâmbetele Mari (rar, peste ani) — seara: Osterfeuer", audio: "audio/cards/11-karsamstag.wav" },
    { de: "der Ostersonntag · die Ostersonntage", ro: "Duminica Paștelui · Duminicile Paștelui (rar, peste ani) — Învierea", audio: "audio/cards/12-ostersonntag.wav" },
    { de: "der Ostermontag · die Ostermontage", ro: "Lunea de Paști · Lunile de Paști (rar, peste ani) — zi liberă", audio: "audio/cards/13-ostermontag.wav" },
    { de: "die Auferstehung · die Auferstehungen", ro: "Învierea (creștină) · învierile (rar, termen religios general) — feminin -ung", audio: "audio/cards/14-auferstehung.wav" },
    { de: "die Fastenzeit · die Fastenzeiten", ro: "Postul · Posturile Mari (feminin +en)", audio: "audio/cards/15-fastenzeit.wav" },

    // ===== 10 VERBE OSTERN =====
    { de: "feiern", ro: "a sărbători · regulat · haben (Perfekt: hat gefeiert)", audio: "audio/cards/16-feiern.wav" },
    { de: "verstecken", ro: "a ascunde · regulat · haben (Perfekt: hat versteckt)", audio: "audio/cards/17-verstecken.wav" },
    { de: "suchen", ro: "a căuta · regulat · haben (Perfekt: hat gesucht)", audio: "audio/cards/18-suchen.wav" },
    { de: "bemalen", ro: "a vopsi / a picta · regulat · haben (Perfekt: hat bemalt)", audio: "audio/cards/19-bemalen.wav" },
    { de: "färben", ro: "a colora · regulat · haben (Perfekt: hat gefärbt)", audio: "audio/cards/20-faerben.wav" },
    { de: "auferstehen", ro: "a învia · separabil TARE · sein (Perfekt: ist auferstanden)", audio: "audio/cards/21-auferstehen.wav" },
    { de: "beten", ro: "a se ruga · regulat T-stem · haben (Perfekt: hat gebetet)", audio: "audio/cards/22-beten.wav" },
    { de: "fasten", ro: "a posti · regulat T-stem · haben (Perfekt: hat gefastet)", audio: "audio/cards/23-fasten.wav" },
    { de: "schmücken", ro: "a decora / a împodobi · regulat · haben (Perfekt: hat geschmückt)", audio: "audio/cards/24-schmuecken.wav" },
    { de: "schenken", ro: "a dărui · regulat · haben (Perfekt: hat geschenkt)", audio: "audio/cards/25-schenken.wav" },

    // ===== 5 ADJECTIVE DE SĂRBĂTOARE =====
    { de: "bunt", ro: "colorat · bunte Eier (ouă colorate)", audio: "audio/cards/26-bunt.wav" },
    { de: "festlich", ro: "festiv, de sărbătoare · festliches Essen", audio: "audio/cards/27-festlich.wav" },
    { de: "gesegnet", ro: "binecuvântat · gesegnete Ostern", audio: "audio/cards/28-gesegnet.wav" },

    // ===== 4 EXPRESII LITURGICE + URĂRI =====
    { de: "Christus ist auferstanden!", ro: "Hristos a înviat! · salut liturgic creștin tradițional", audio: "audio/cards/29-christus-auferstanden.wav" },
    { de: "Wahrhaftig ist er auferstanden!", ro: "Adevărat a înviat! · răspunsul la salutul liturgic", audio: "audio/cards/30-wahrhaftig.wav" },
    { de: "Frohe Ostern!", ro: "Paște fericit! · urarea universală, neutră", audio: "audio/cards/31-frohe-ostern.wav" },
    { de: "Gesegnete Ostern!", ro: "Paște binecuvântat! · urarea religioasă, tradițională", audio: "audio/cards/32-gesegnete-ostern.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 32 carduri Ostern</strong> — 15 substantive (cu Sg + Pl), 10 verbe (cu Perfekt), 3 adjective, 4 expresii liturgice + urări.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda. Folosește săgețile pentru navigare.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    if (card.audio) {
        currentAudio = new Audio(card.audio);
        currentAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
