/* ============================================================
   OSTERN AUF DEUTSCH - theory.js
   Claudia Toth - claudiatoth.github.io
   Teorie: 6 sub-secțiuni cu audio la fiecare
   Audio MP3 = înregistrat de profesor (se încarcă separat)
   ============================================================ */

const theoryContent = [

    // ── SUB-SECȚIUNEA 0: Kultureller Kontext
    {
        title: '🌷 1. Kultureller Kontext – Contextul cultural',
        audio: 'ostern-1-kontext.mp3',
        content: `
            <p style="margin-bottom:10px;">
                <strong>Ostern</strong> (Paștele) este cea mai importantă sărbătoare creștină în Germania,
                Austria și Elveția. Se celebrează primăvara și simbolizează învierea, reînnoirea și sfârșitul iernii.
            </p>
            <div class="theory-box">
                <p>📅 <strong>Data:</strong> Ostern nu are dată fixă – cade în prima duminică după prima lună plină de primăvară (între 22 martie și 25 aprilie).</p>
                <p>🏫 <strong>Zile libere:</strong> Karfreitag (Vinerea Mare) și Ostermontag (Lunea de Paști) sunt <em>gesetzliche Feiertage</em> (sărbători legale).</p>
                <p>🐰 <strong>Osterhase:</strong> Iepurașul de Paști aduce copiilor ouă vopsite și dulciuri ascunse în grădină.</p>
                <p>🕯️ <strong>Osterfeuer:</strong> Focuri de Paști aprinse sâmbătă seara în multe regiuni din Germania.</p>
                <p>🌿 <strong>Palmsonntag:</strong> Duminica Floriilor – o săptămână înainte de Paști, începutul Săptămânii Sfinte.</p>
                <p>🍫 <strong>Schoko-Eier:</strong> Ouă de ciocolată – cadourile preferate ale copiilor!</p>
            </div>
        `
    },

    // ── SUB-SECȚIUNEA 1: Liturgische Ostergrüße
    {
        title: '✝ 2. Liturgische Ostergrüße – Salutări liturgice pascale',
        audio: 'ostern-2-liturgisch.mp3',
        content: `
            <div class="liturgical-box">
                <span class="greeting-de">Christus ist auferstanden!</span>
                <span class="greeting-ro">Hristos a înviat!</span>
                <span class="response-label">— Răspuns / Antwort —</span>
                <span class="response-de">Wahrhaftig ist er auferstanden!</span>
                <span class="response-ro">Adevărat a înviat!</span>
                <div class="context-note">
                    <p>📖 <strong>Context:</strong> Acesta este salutul pascal tradițional creștin, folosit în
                    bisericile ortodoxe, catolice și protestante din spațiul german. Se rostește la Liturghia
                    de Înviere și în întâlnirile din perioada pascală (<em>Osterzeit</em>).</p>
                    <p style="margin-top:8px;">🗣️ <strong>Pronunție:</strong> [KRI-stus ist AUF-er-shtan-den] • [VAR-haf-tiH ist er AUF-er-shtan-den]</p>
                    <p style="margin-top:8px;">🌍 <strong>Variante internaționale:</strong><br>
                    • <em>Latină:</em> Christus resurrexit! — Vere resurrexit!<br>
                    • <em>Engleză:</em> Christ is risen! — He is risen indeed!<br>
                    • <em>Slavonă:</em> Hristos Voskrese! — Voistinu Voskrese!</p>
                </div>
            </div>
        `
    },

    // ── SUB-SECȚIUNEA 2: Grundvokabular
    {
        title: '📚 3. Grundvokabular – Vocabular de bază',
        audio: 'ostern-3-vokabular.mp3',
        content: `
            <p style="margin-bottom:12px; font-size:0.9rem; color:#6b7280;">
                ⚠️ Atenție la genul substantivelor! <strong>der</strong> (m) • <strong>die</strong> (f) • <strong>das</strong> (n)
            </p>
            <table class="vocab-table">
                <thead>
                    <tr><th>Deutsch</th><th>Română / Context</th></tr>
                </thead>
                <tbody>
                    <tr><td class="de-word">das Osterei / die Ostereier</td><td>oul de Paști / ouăle de Paști</td></tr>
                    <tr><td class="de-word">der Osterhase</td><td>iepurașul de Paști</td></tr>
                    <tr><td class="de-word">das Osterlamm</td><td>mielul de Paști</td></tr>
                    <tr><td class="de-word">der Osterkorb</td><td>coșul de Paști</td></tr>
                    <tr><td class="de-word">die Osterkerze</td><td>lumânarea de Paști</td></tr>
                    <tr><td class="de-word">das Osterfeuer</td><td>focul de Paști</td></tr>
                    <tr><td class="de-word">das Osternest</td><td>cuibul de Paști (cu ouă ascunse)</td></tr>
                    <tr><td class="de-word">der Palmsonntag</td><td>Duminica Floriilor</td></tr>
                    <tr><td class="de-word">der Karfreitag</td><td>Vinerea Mare</td></tr>
                    <tr><td class="de-word">der Karsamstag</td><td>Sâmbăta Mare</td></tr>
                    <tr><td class="de-word">der Ostersonntag</td><td>Duminica Paștelui</td></tr>
                    <tr><td class="de-word">der Ostermontag</td><td>Lunea de Paști</td></tr>
                    <tr><td class="de-word">die Auferstehung</td><td>învierea</td></tr>
                    <tr><td class="de-word">die Fastenzeit</td><td>Postul Mare</td></tr>
                    <tr><td class="de-word">die Osterzeit</td><td>perioada Paștelui</td></tr>
                </tbody>
            </table>
        `
    },

    // ── SUB-SECȚIUNEA 3: Verben & Adjektive
    {
        title: '🔤 4. Verben & Adjektive – Verbe și adjective',
        audio: 'ostern-4-verben.mp3',
        content: `
            <table class="vocab-table" style="margin-bottom:16px;">
                <thead>
                    <tr><th>Infinitiv</th><th>Traducere / Context</th></tr>
                </thead>
                <tbody>
                    <tr><td class="de-word">Eier bemalen / färben</td><td>a vopsi ouă</td></tr>
                    <tr><td class="de-word">Eier verstecken</td><td>a ascunde ouă</td></tr>
                    <tr><td class="de-word">Eier suchen</td><td>a căuta ouă</td></tr>
                    <tr><td class="de-word">feiern</td><td>a sărbători</td></tr>
                    <tr><td class="de-word">auferstehen</td><td>a învia</td></tr>
                    <tr><td class="de-word">beten</td><td>a se ruga</td></tr>
                    <tr><td class="de-word">fasten</td><td>a posti</td></tr>
                    <tr><td class="de-word">schenken</td><td>a dărui</td></tr>
                    <tr><td class="de-word">schmücken</td><td>a decora, a împodobi</td></tr>
                    <tr><td class="de-word">gratulieren</td><td>a felicita</td></tr>
                </tbody>
            </table>

            <table class="vocab-table">
                <thead>
                    <tr><th>Adjektiv</th><th>Traducere</th></tr>
                </thead>
                <tbody>
                    <tr><td class="de-word">bunt / farbenfroh</td><td>colorat / plin de culoare</td></tr>
                    <tr><td class="de-word">festlich</td><td>festiv, de sărbătoare</td></tr>
                    <tr><td class="de-word">fröhlich</td><td>vesel, bucuros</td></tr>
                    <tr><td class="de-word">feierlich</td><td>solemn, ceremonios</td></tr>
                    <tr><td class="de-word">herzlich</td><td>cordial, călduroș</td></tr>
                    <tr><td class="de-word">gesegnet</td><td>binecuvântat</td></tr>
                    <tr><td class="de-word">traditionell</td><td>tradițional</td></tr>
                    <tr><td class="de-word">religiös</td><td>religios</td></tr>
                </tbody>
            </table>
        `
    },

    // ── SUB-SECȚIUNEA 4: Redewendungen & Wünsche
    {
        title: '💬 5. Redewendungen & Wünsche – Expresii și urări',
        audio: 'ostern-5-redewendungen.mp3',
        content: `
            <table class="vocab-table" style="margin-bottom:18px;">
                <thead>
                    <tr><th>Deutsch</th><th>Română</th><th>Observație</th></tr>
                </thead>
                <tbody>
                    <tr><td class="de-word">Frohe Ostern!</td><td>Paște fericit!</td><td>Urare clasică, universală</td></tr>
                    <tr><td class="de-word">Gesegnete Ostern!</td><td>Paște binecuvântat!</td><td>Religios, tradițional</td></tr>
                    <tr><td class="de-word">Ein frohes Osterfest!</td><td>Un Paște fericit!</td><td>Formal, festiv</td></tr>
                    <tr><td class="de-word">Frohe Osterzeit!</td><td>Perioadă de Paști fericită!</td><td>Pentru întregul sezon</td></tr>
                    <tr><td class="de-word">Schöne Osterferien!</td><td>Vacanță de Paști frumoasă!</td><td>Pentru copii / elevi</td></tr>
                    <tr><td class="de-word">Alles Gute zu Ostern!</td><td>Toate cele bune de Paști!</td><td>Prietenos, casual</td></tr>
                    <tr><td class="de-word">Ich wünsche dir frohe Ostern!</td><td>Îți doresc Paște fericit!</td><td>Formulare completă</td></tr>
                </tbody>
            </table>

            <div class="dialog-box">
                <div class="dialog-title">🗣️ Dialog 1 – La școală / In der Schule</div>
                <p class="dialog-line"><span class="speaker">Lehrerin:</span> Was macht ihr zu Ostern?</p>
                <p class="dialog-line"><span class="speaker-b">Schüler:</span> Wir fahren zu Oma und färben Eier zusammen.</p>
                <p class="dialog-line"><span class="speaker">Lehrerin:</span> Das klingt wunderschön! Frohe Ostern!</p>
                <p class="dialog-line"><span class="speaker-b">Schüler:</span> Danke, Ihnen auch! Frohe Ostern!</p>
            </div>

            <div class="dialog-box" style="margin-top:10px;">
                <div class="dialog-title">🗣️ Dialog 2 – Pe stradă / Auf der Straße</div>
                <p class="dialog-line"><span class="speaker">Frau Müller:</span> Guten Morgen! Frohe Ostern!</p>
                <p class="dialog-line"><span class="speaker-b">Herr Schmidt:</span> Danke, gleichfalls! Haben Sie schöne Pläne?</p>
                <p class="dialog-line"><span class="speaker">Frau Müller:</span> Ja, die ganze Familie kommt zusammen. Es wird ein Fest!</p>
                <p class="dialog-line"><span class="speaker-b">Herr Schmidt:</span> Wie schön! Genießen Sie das Wochenende!</p>
            </div>

            <div class="theory-box" style="margin-top:14px;">
                <p>→ <em>Ich freue mich auf Ostern.</em> – Abia aștept Paștele.</p>
                <p>→ <em>Wir feiern Ostern bei meinen Eltern.</em> – Sărbătorim Paștele la părinții mei.</p>
                <p>→ <em>Die Kinder suchen Ostereier im Garten.</em> – Copiii caută ouăle în grădină.</p>
                <p>→ <em>Ich habe meiner Oma eine Osterkarte geschrieben.</em> – I-am scris bunicii o felicitare.</p>
                <p>→ <em>Am Karfreitag essen viele keine Fleisch.</em> – De Vinerea Mare mulți nu mănâncă carne.</p>
            </div>
        `
    },

    // ── SUB-SECȚIUNEA 5: Grammatik im Kontext
    {
        title: '📐 6. Grammatik im Kontext – Gramatică',
        audio: 'ostern-6-grammatik.mp3',
        content: `
            <p style="font-weight:600; color:#065f46; margin-bottom:10px;">Artikel bei Osterwörtern – Articolele substantivelor</p>
            <table class="vocab-table" style="margin-bottom:18px;">
                <thead>
                    <tr><th>der (masculin)</th><th>die (feminin)</th><th>das (neutru)</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>der Osterhase<br>der Osterkorb<br>der Karfreitag<br>der Palmsonntag</td>
                        <td>die Osterkerze<br>die Auferstehung<br>die Fastenzeit<br>die Osterzeit</td>
                        <td>das Osterei<br>das Osterlamm<br>das Osterfeuer<br>das Osternest</td>
                    </tr>
                </tbody>
            </table>

            <p style="font-weight:600; color:#065f46; margin-bottom:10px;">Akkusativ mit Osterwörtern – Acuzativul</p>
            <div class="theory-box">
                <p>→ Ich verstecke <strong>den</strong> Osterhasen. <em>(mask. → den)</em></p>
                <p>→ Die Kinder suchen <strong>das</strong> Osterei. <em>(neutru → das)</em></p>
                <p>→ Wir bemalen <strong>die</strong> Eier bunt. <em>(plural → die)</em></p>
                <p>→ Er kauft <strong>einen</strong> Osterkorb. <em>(mask. indef. → einen)</em></p>
                <p>→ Sie schenkt <strong>eine</strong> Osterkerze. <em>(fem. indef. → eine)</em></p>
            </div>
        `
    }
];

// ── RENDER THEORY ──────────────────────────────────────────────────────────
function renderTheory() {
    const container = document.getElementById('main-section-0');
    if (!container) return;

    theoryContent.forEach((section, index) => {
        const div = document.createElement('div');
        div.className = 'sub-section';
        div.innerHTML = `
            <div class="sub-section-header" onclick="toggleSubSection(${index})">
                <span>${section.title}</span>
                <span class="sub-arrow" id="sub-arrow-${index}">▼</span>
            </div>
            <div class="sub-section-content" id="sub-section-${index}">
                <a class="audio-btn" href="${section.audio}" download>
                    🔊 Ascultă / Audio herunterladen
                </a>
                ${section.content}
            </div>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', renderTheory);
