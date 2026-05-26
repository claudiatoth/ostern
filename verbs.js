// ============================================
// VERB-KONJUGATION — Ostern auf Deutsch (refactor mai 2026)
// Claudia Toth · 4 verbe-cheie ale Paștelui
// Toate PONS-verified · Präteritum → RO IMPERFECT (regula 26 mai)
// ============================================

const verbsData = [
    {
        inf: 'feiern', ro: 'a sărbători', typ: 'regulat', aux: 'haben', part: 'gefeiert',
        praes: [['ich','feiere','sărbătoresc'],['du','feierst','sărbătorești'],['er/sie/es','feiert','sărbătorește'],['wir','feiern','sărbătorim'],['ihr','feiert','sărbătoriți'],['sie/Sie','feiern','sărbătoresc']],
        praet: [['ich','feierte','sărbătoream'],['du','feiertest','sărbătoreai'],['er/sie/es','feierte','sărbătorea'],['wir','feierten','sărbătoream'],['ihr','feiertet','sărbătoreați'],['sie/Sie','feierten','sărbătoreau']],
        perf: [['ich','habe gefeiert','am sărbătorit'],['du','hast gefeiert','ai sărbătorit'],['er/sie/es','hat gefeiert','a sărbătorit'],['wir','haben gefeiert','am sărbătorit'],['ihr','habt gefeiert','ați sărbătorit'],['sie/Sie','haben gefeiert','au sărbătorit']],
        note: '🔗 Verbul-cheie al lecției: *Wir feiern Ostern bei der Familie.* (Sărbătorim Paștele cu familia.) Regulat — Partizip cu ge- + -t.',
        same: 'lernen, kochen, kaufen, spielen, hören — același tipar regulat (slab)'
    },
    {
        inf: 'verstecken', ro: 'a ascunde', typ: 'regulat', aux: 'haben', part: 'versteckt',
        praes: [['ich','verstecke','ascund'],['du','versteckst','ascunzi'],['er/sie/es','versteckt','ascunde'],['wir','verstecken','ascundem'],['ihr','versteckt','ascundeți'],['sie/Sie','verstecken','ascund']],
        praet: [['ich','versteckte','ascundeam'],['du','verstecktest','ascundeai'],['er/sie/es','versteckte','ascundea'],['wir','versteckten','ascundeam'],['ihr','verstecktet','ascundeați'],['sie/Sie','versteckten','ascundeau']],
        perf: [['ich','habe versteckt','am ascuns'],['du','hast versteckt','ai ascuns'],['er/sie/es','hat versteckt','a ascuns'],['wir','haben versteckt','am ascuns'],['ihr','habt versteckt','ați ascuns'],['sie/Sie','haben versteckt','au ascuns']],
        note: '🔗 Acțiunea iepurașului de Paști: *Der Osterhase versteckt die Ostereier im Garten.* (Iepurașul ascunde ouăle în grădină.) Prefix INSEPARABIL ver- → Partizip FĂRĂ ge- (versteckt, NU geversteckt).'
    },
    {
        inf: 'suchen', ro: 'a căuta', typ: 'regulat', aux: 'haben', part: 'gesucht',
        praes: [['ich','suche','caut'],['du','suchst','cauți'],['er/sie/es','sucht','caută'],['wir','suchen','căutăm'],['ihr','sucht','căutați'],['sie/Sie','suchen','caută']],
        praet: [['ich','suchte','căutam'],['du','suchtest','căutai'],['er/sie/es','suchte','căuta'],['wir','suchten','căutam'],['ihr','suchtet','căutați'],['sie/Sie','suchten','căutau']],
        perf: [['ich','habe gesucht','am căutat'],['du','hast gesucht','ai căutat'],['er/sie/es','hat gesucht','a căutat'],['wir','haben gesucht','am căutat'],['ihr','habt gesucht','ați căutat'],['sie/Sie','haben gesucht','au căutat']],
        note: '🔗 Acțiunea copiilor de Paști: *Die Kinder suchen die Ostereier.* (Copiii caută ouăle.) Verb regulat clasic — Partizip cu ge- + -t.',
        same: 'kochen, lernen, kaufen — același tipar regulat'
    },
    {
        inf: 'auferstehen', ro: 'a învia', typ: 'separabil tare / neregulat', aux: 'sein', part: 'auferstanden',
        praes: [['ich','erstehe auf','înviu'],['du','erstehst auf','învii'],['er/sie/es','ersteht auf','învie'],['wir','erstehen auf','înviem'],['ihr','ersteht auf','înviați'],['sie/Sie','erstehen auf','învie']],
        praet: [['ich','erstand auf','înviam'],['du','erstandest auf','înviai'],['er/sie/es','erstand auf','învia'],['wir','erstanden auf','înviam'],['ihr','erstandet auf','înviați'],['sie/Sie','erstanden auf','înviau']],
        perf: [['ich','bin auferstanden','am înviat'],['du','bist auferstanden','ai înviat'],['er/sie/es','ist auferstanden','a înviat'],['wir','sind auferstanden','am înviat'],['ihr','seid auferstanden','ați înviat'],['sie/Sie','sind auferstanden','au înviat']],
        note: '🚨 Verb TARE + SEPARABIL + Perfekt cu SEIN (schimbare de stare). Prefix auf- se separă la Präsens și Präteritum (*er ersteht auf* / *er erstand auf*), DAR la Partizip rămâne lipit: <strong>auferstanden</strong>. Salutul liturgic: *Christus ist auferstanden!* — folosit la Liturghia de Înviere.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function(x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (perfect compus / timp vorbit)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '<div class="exercise-instruction"><strong>🔁 4 verbe-cheie ale Paștelui</strong> — feiern (a sărbători) · verstecken (a ascunde — acțiunea iepurașului) · suchen (a căuta — acțiunea copiilor) · auferstehen (a învia — salut liturgic). Toate verificate <strong>PONS</strong>.</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">Cele 4 verbe construiesc povestea de Paști: Osterhase VERSTECKT (ascunde) ouăle, copiii SUCHEN (caută) ouăle, familia FEIERT (sărbătorește) împreună, iar la biserică auzim că Christus IST AUFERSTANDEN (a înviat). Capcana cea mai mare: <em>auferstehen</em> e separabil TARE și Perfekt cu SEIN — *ist auferstanden*, NU *hat auferstanden*! 🐰🦋</div>' +
        '</div></div>';

    verbsData.forEach(function(v, i) {
        let badge;
        if (v.typ.indexOf('auxiliar') >= 0) badge = '#7c3aed';
        else if (v.typ.indexOf('tare') >= 0) badge = '#dc2626';
        else badge = '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            (v.same ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Același tipar regulat:</strong> ' + v.same + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
