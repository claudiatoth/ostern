// ============================================
// PDF BUILDER — Ostern auf Deutsch (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · Material suplimentar tematic
// Sursă unică: theory.js + exercises.js + flashcards.js + verbs.js
// SCOATE Test Final · Cast grid 50×50px obligatoriu
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        root.innerHTML = buildCast() + buildTheory() + buildExercises() + buildFlashcards() + buildVerbs();
    }

    function buildCast() {
        return '<div class="cast-banner">' +
            '<h4>👋 Personajele „Annettes Deutschkurs"</h4>' +
            '<div class="cast-grid">' +
                '<div class="cast-card"><img src="images/annette.png" alt="Annette"><div class="name">Annette</div><div class="detail">Lehrerin · prezintă vocabularul</div></div>' +
                '<div class="cast-card"><img src="images/andreea.png" alt="Andreea"><div class="name">Andreea</div><div class="detail">Studentă · sărbătorește la bunica</div></div>' +
                '<div class="cast-card"><img src="images/mihai.png" alt="Mihai"><div class="name">Mihai</div><div class="detail">Bucătar · pregătește Osterlamm</div></div>' +
                '<div class="cast-card"><img src="images/florian.png" alt="Florian"><div class="name">Florian</div><div class="detail">Doctor · pe gardă de Karfreitag</div></div>' +
                '<div class="cast-card"><img src="images/carolina.png" alt="Carolina"><div class="name">Carolina</div><div class="detail">Fotografă · adună familia</div></div>' +
                '<div class="cast-card"><img src="images/acar.png" alt="Acar"><div class="name">Acar</div><div class="detail">Maistru · zi liberă cu copiii</div></div>' +
            '</div></div>';
    }

    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        // ANCHOR PRECIS pe </span></div> (NU /<\/div>\s*<\/div>/ — regex lacom!)
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[\s\S]*?<\/button>/g, '');
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g,
            '<h2 class="sub-chapter">$1</h2>');
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        t = t.replace(/<div class="andreea-note">\s*<img[^>]*>\s*<div class="andreea-note-content">\s*<div class="speaker">([^<]+)<\/div>\s*<div class="text">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g,
            '<div class="theory-box warn-box"><h4>💚 $1</h4><p>$2</p></div>');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fef3c7[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#ecfdf5[^"]*"[^>]*>/g, '<div class="theory-box" style="border-left-color:#10b981;">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#f0fdf4[^"]*"[^>]*>/g, '<div class="theory-box" style="border-left-color:#10b981;">');
        return '<h1 class="chapter">📘 1. Teorie — vocabular Ostern cu Singular + Plural</h1>' + t;
    }

    function buildExercises() {
        let html = '<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>';

        // Ex 1: completează cu cuvântul potrivit
        html += '<div class="ex-block"><h3>Übung 1 — Completează cu cuvântul potrivit (7 propoziții)</h3>' +
            '<div class="instruction">Pentru fiecare spațiu, completează cuvântul corect din vocabularul Ostern.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>';
        if (typeof ex1Data !== 'undefined') {
            ex1Data.forEach((item, i) => {
                const filled = item.sentence.replace('____', '<strong style="color:#047857">' + item.correct + '</strong>');
                html += '<div class="ex-item"><span class="ex-num">' + (i+1) + '</span><div class="ex-body">' +
                    '<div class="ex-q">' + filled + '</div>' +
                    '<div class="ex-explanation">🇷🇴 ' + item.hint + '</div>' +
                    '</div></div>';
            });
        }
        html += '</div>';

        // Ex 2: Richtig oder Falsch
        html += '<div class="ex-block"><h3>Übung 2 — Richtig oder Falsch? (6 propoziții culturale)</h3>' +
            '<div class="instruction">Scrie R (Richtig = adevărat) sau F (Falsch = fals) pentru fiecare afirmație.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>' +
            '<table><thead><tr><th style="width:60%">Propoziție</th><th>R/F</th><th>Explicație</th></tr></thead><tbody>';
        if (typeof ex2Data !== 'undefined') {
            ex2Data.forEach(item => {
                const cleanExp = item.exp.replace(/<[^>]+>/g, '');
                html += '<tr><td>' + item.text + '</td><td class="verb">' + item.correct + '</td><td><em style="color:#6b7280; font-size:9pt;">' + cleanExp + '</em></td></tr>';
            });
        }
        html += '</tbody></table></div>';

        // Ex 3: Traducere RO → DE
        html += '<div class="ex-block"><h3>Übung 3 — Traducere RO → DE (7 urări și expresii)</h3>' +
            '<div class="instruction">Scrie fiecare urare / expresie în germană.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>';
        if (typeof ex3Data !== 'undefined') {
            ex3Data.forEach((it, i) => {
                html += '<div class="ex-item"><span class="ex-num">' + (i+1) + '</span><div class="ex-body">' +
                    '<div class="ex-q">🇷🇴 ' + it.ro + '</div>' +
                    '<div class="ex-a">' + it.correct + '</div>' +
                    '</div></div>';
            });
        }
        html += '</div>';

        // Ex 4: SORT der/die/das
        html += '<div class="ex-block"><h3>Übung 4 — Sortează după gen (der/die/das) — 15 substantive Ostern</h3>' +
            '<div class="instruction">Pentru fiecare substantiv Ostern, articolul corect.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>' +
            '<table><thead><tr><th>Substantiv</th><th>Articol</th></tr></thead><tbody>';
        if (typeof ex4Words !== 'undefined' && typeof ex4Solution !== 'undefined') {
            ex4Words.forEach(w => {
                html += '<tr><td>' + w + '</td><td class="verb">' + ex4Solution[w] + ' ' + w + '</td></tr>';
            });
        }
        html += '</tbody></table></div>';

        // Ex 5: Dialog completion
        html += '<div class="ex-block"><h3>Übung 5 — Completează dialogul (Annette ↔ Andreea)</h3>' +
            '<div class="instruction">5 spații lipsă în dialogul Annette-Andreea înainte de vacanța de Paști.</div>' +
            '<div class="rezolvare-banner">✓ Rezolvare</div>';
        if (typeof ex5Data !== 'undefined') {
            ex5Data.forEach((it, i) => {
                html += '<div class="ex-item"><span class="ex-num">' + (i+1) + '</span><div class="ex-body">' +
                    '<div class="ex-q"><em>' + it.before + '<strong style="color:#047857">' + it.correct + '</strong>' + it.after + '</em></div>' +
                    '<div class="ex-explanation">🇷🇴 ' + it.hint + '</div>' +
                    '</div></div>';
            });
        }
        html += '</div>';

        return html;
    }

    function buildFlashcards() {
        const n = typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0;
        let html = '<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>' +
            '<p style="margin-bottom:14px">Cele <strong>' + n + ' de carduri</strong> ale lecției — 15 substantive cu Sg + Pl, 10 verbe (cu Perfekt), 3 adjective, 4 expresii liturgice + urări.</p>' +
            '<div class="flashcards-grid">';
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += '<div class="fc-row"><span class="de">' + card.de + '</span><span class="ro">— ' + card.ro + '</span></div>';
            });
        }
        html += '</div>';
        return html;
    }

    function buildVerbs() {
        let html = '<h1 class="chapter new-section">🔁 4. Verb-Konjugation — 4 verbe-cheie ale Paștelui</h1>' +
            '<div class="theory-box warn-box">' +
            '<p><strong>📌 Verbele Paștelui:</strong> feiern (a sărbători) · verstecken (a ascunde — Osterhase) · suchen (a căuta — copiii) · auferstehen (a învia — salut liturgic). Toate PONS-verified. Präteritum = imperfect; Perfekt = perfect compus.</p>' +
            '</div>';

        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                let typeBadge;
                if (v.typ.indexOf('auxiliar') >= 0) {
                    typeBadge = '<span class="badge" style="background:#7c3aed;">AUXILIAR (neregulat)</span>';
                } else if (v.typ.indexOf('tare') >= 0) {
                    typeBadge = '<span class="badge strong">TARE (neregulat)</span>';
                } else {
                    typeBadge = '<span class="badge weak">REGULAT</span>';
                }
                const auxBadge = v.aux === 'sein'
                    ? '<span class="badge sein">Perfekt + sein</span>'
                    : '<span class="badge haben">Perfekt + haben</span>';

                html += '<div class="verb-card"><div class="vh">' +
                    '<span class="name">' + (idx + 1) + '. ' + v.inf + '</span>' +
                    '<span class="ro">— ' + v.ro + '</span>' +
                    typeBadge + auxBadge + '</div>' +
                    '<h5>Präsens (prezent)</h5>' +
                    '<table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>';
                v.praes.forEach(row => {
                    html += '<tr><td><strong>' + row[0] + '</strong></td><td class="verb">' + row[1] + '</td><td class="ro-text">' + row[2] + '</td></tr>';
                });
                html += '</tbody></table>' +
                    '<h5>Präteritum (imperfect / timp scris)</h5>' +
                    '<table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>';
                v.praet.forEach(row => {
                    html += '<tr><td><strong>' + row[0] + '</strong></td><td class="verb">' + row[1] + '</td><td class="ro-text">' + row[2] + '</td></tr>';
                });
                html += '</tbody></table>' +
                    '<h5>Perfekt (perfect compus / timp vorbit)</h5>' +
                    '<div class="perfekt-box">' +
                    '<div class="de">' + v.aux + ' + ' + v.part + ' · exemplu: ' + v.perf[2][0] + ' <strong>' + v.perf[2][1] + '</strong></div>' +
                    '<div class="ro">' + v.perf[2][2] + '</div></div>';
                if (v.note) html += '<div class="note"><strong>📌 </strong>' + v.note + '</div>';
                if (v.same) html += '<div class="note" style="border-left-color:#047857;color:#065f46;"><strong>📎 Același tipar regulat:</strong> ' + v.same + '</div>';
                html += '</div>';
            });
        }

        return html;
    }
})();
