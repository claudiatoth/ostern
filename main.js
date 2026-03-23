/* ============================================================
   OSTERN AUF DEUTSCH - main.js
   Claudia Toth - claudiatoth.github.io
   Toggle, checkAll global, resetAll global
   ============================================================ */

function toggleMainSection(i) {
    const content = document.getElementById('main-section-' + i);
    const arrows  = document.querySelectorAll('.arrow');
    if (!content) return;
    content.classList.toggle('active');
    if (arrows[i]) arrows[i].classList.toggle('rotated');
}

function toggleSubSection(i) {
    const content = document.getElementById('sub-section-' + i);
    const arrow   = document.getElementById('sub-arrow-' + i);
    if (!content) return;
    content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

function openSection(index) {
    const contents = document.querySelectorAll('.section-content');
    const arrows   = document.querySelectorAll('.arrow');
    if (contents[index] && !contents[index].classList.contains('active')) {
        contents[index].classList.add('active');
        if (arrows[index]) arrows[index].classList.add('rotated');
    }
}

// Verifică TOATE exercițiile dintr-o dată (buton global opțional)
function checkAllExercises() {
    for (let i = 1; i <= 5; i++) openSection(i);
    const r1 = checkEx1(false);
    const r2 = checkEx2(false);
    const r3 = checkEx3(false);
    const r4 = checkEx4(false);
    const r5 = checkEx5(false);
    [1,2,3,4,5].forEach((n, i) => {
        const results = [r1,r2,r3,r4,r5][i];
        showExScore(n, results.correct, results.total);
    });
}

// Resetează TOATE exercițiile (buton global opțional)
function resetAll() {
    resetEx1(); resetEx2(); resetEx3(); resetEx4(); resetEx5();
    if (typeof currentCardIndex !== 'undefined') { currentCardIndex = 0; updateFlashcard(); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Keyboard flashcards
document.addEventListener('keydown', (e) => {
    const fc = document.getElementById('flashcard');
    if (!fc) return;
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft')  prevCard();
    if (e.key === ' ')          { e.preventDefault(); flipCard(); }
});
