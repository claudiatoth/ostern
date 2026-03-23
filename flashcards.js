/* ============================================================
   OSTERN AUF DEUTSCH - flashcards.js
   Claudia Toth - claudiatoth.github.io
   20 flashcards cu Text-to-Speech automat (browser)
   Conform MASTER: FLASHCARDS = Text-to-Speech (nu MP3)
   ============================================================ */

const flashcardsData = [
    { de: 'das Osterei',                ro: 'oul de Paști',              tip: 'neutru – das' },
    { de: 'der Osterhase',              ro: 'iepurașul de Paști',        tip: 'masculin – der' },
    { de: 'die Osterkerze',             ro: 'lumânarea de Paști',        tip: 'feminin – die' },
    { de: 'der Osterkorb',              ro: 'coșul de Paști',            tip: 'masculin – der' },
    { de: 'das Osterlamm',              ro: 'mielul de Paști',           tip: 'neutru – das' },
    { de: 'der Palmsonntag',            ro: 'Duminica Floriilor',        tip: 'masculin – der' },
    { de: 'der Karfreitag',             ro: 'Vinerea Mare',              tip: 'masculin – der' },
    { de: 'der Ostersonntag',           ro: 'Duminica Paștelui',         tip: 'masculin – der' },
    { de: 'der Ostermontag',            ro: 'Lunea de Paști',            tip: 'masculin – der' },
    { de: 'die Auferstehung',           ro: 'învierea',                  tip: 'feminin – die' },
    { de: 'das Osterfeuer',             ro: 'focul de Paști',            tip: 'neutru – das' },
    { de: 'feiern',                     ro: 'a sărbători',               tip: 'verb regulat' },
    { de: 'Eier bemalen',               ro: 'a vopsi ouă',               tip: 'verb + Akkusativ' },
    { de: 'verstecken',                 ro: 'a ascunde',                 tip: 'verb regulat' },
    { de: 'auferstehen',                ro: 'a învia',                   tip: 'verb separabil' },
    { de: 'bunt',                       ro: 'colorat',                   tip: 'adjectiv' },
    { de: 'festlich',                   ro: 'festiv, de sărbătoare',     tip: 'adjectiv' },
    { de: 'gesegnet',                   ro: 'binecuvântat',              tip: 'adjectiv / participiu' },
    { de: 'Christus ist auferstanden!', ro: 'Hristos a înviat!',         tip: '✝ Salut liturgic' },
    { de: 'Wahrhaftig ist er auferstanden!', ro: 'Adevărat a înviat!',  tip: '✝ Răspuns liturgic' }
];

let currentCardIndex = 0;

function renderFlashcards() {
    const container = document.getElementById('main-section-6');
    if (!container) return;

    container.innerHTML = `
        <p style="text-align:center; color:#6b7280; font-size:0.88rem; margin-bottom:16px;">
            👆 Click pe card pentru a întoarce • 🔊 pentru pronunție germană automată
        </p>
        <div class="flashcard-container">
            <div class="flashcard" id="flashcard" onclick="flipCard()">
                <div class="flashcard-inner" id="flashcard-inner">
                    <div class="flashcard-front">
                        <span class="card-label">🇩🇪 Deutsch</span>
                        <span class="card-word" id="card-de"></span>
                        <span class="flashcard-hint" id="card-tip"></span>
                    </div>
                    <div class="flashcard-back">
                        <span class="card-label">🇷🇴 Română</span>
                        <span class="card-word" id="card-ro"></span>
                    </div>
                </div>
            </div>

            <div class="flashcard-controls">
                <button onclick="prevCard()">← Înapoi</button>
                <span class="flashcard-counter" id="card-counter">1 / ${flashcardsData.length}</span>
                <button onclick="nextCard()">Înainte →</button>
            </div>

            <div class="flashcard-controls" style="margin-top:4px;">
                <button class="audio-fc-btn" onclick="playCardAudio(event)">🔊 Pronunță</button>
                <button onclick="shuffleCards()" style="background:#f0fdf4; color:#059669; border:2px solid #10b981;">🔀 Amestecă</button>
                <button onclick="resetCards()" style="background:#f0fdf4; color:#6b7280; border:2px solid #d1d5db;">↩ Resetează</button>
            </div>
        </div>
    `;

    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    if (!card) return;
    document.getElementById('card-de').textContent  = card.de;
    document.getElementById('card-ro').textContent  = card.ro;
    document.getElementById('card-tip').textContent = card.tip;
    document.getElementById('card-counter').textContent = `${currentCardIndex + 1} / ${flashcardsData.length}`;

    // Dezactivează flip la schimbarea cardului
    const fc = document.getElementById('flashcard');
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

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(card.de);
        utterance.lang = 'de-DE';
        utterance.rate = 0.82;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    }
}

function shuffleCards() {
    for (let i = flashcardsData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [flashcardsData[i], flashcardsData[j]] = [flashcardsData[j], flashcardsData[i]];
    }
    currentCardIndex = 0;
    updateFlashcard();
}

function resetCards() {
    currentCardIndex = 0;
    updateFlashcard();
}

document.addEventListener('DOMContentLoaded', renderFlashcards);
