// ============================================
// TEORIE — Ostern auf Deutsch (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · Material suplimentar tematic
// 7 subsecțiuni cu audio Hedda · Sg + Pl la TOATE substantivele (regula 26 mai)
// ============================================

const theoryHTML = `
    <!-- Sub 0: Kultureller Kontext -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🌷 1. Kultureller Kontext — Paștele în spațiul german</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-kontext.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă introducerea</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Ostern (Paștele) e cea mai importantă sărbătoare creștină în Germania, Austria și Elveția. Dincolo de partea religioasă, e și o sărbătoare DE FAMILIE: copiii caută ouăle ascunse de Osterhase (iepurașul de Paști), familiile aprind Osterfeuer (focuri de Paști) sâmbătă seara, iar magazinele se umplu cu ouă vopsite și ciocolată. Învățăm vocabularul ESENȚIAL — cu Sg + Pl + traducere RO la fiecare substantiv. 🐰🥚🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>Ce vei învăța în această lecție</h4>
                <ul>
                    <li>✅ <strong>15 substantive Ostern</strong> cu Singular + Plural (der/die/das + forma de plural)</li>
                    <li>✅ <strong>Salutările liturgice</strong> pascale (Christus ist auferstanden! · Wahrhaftig ist er auferstanden!)</li>
                    <li>✅ <strong>10 verbe Ostern</strong> + 8 adjective de sărbătoare</li>
                    <li>✅ <strong>7 urări specifice</strong> de Paști (Frohe Ostern, Gesegnete Ostern, Schöne Osterferien etc.)</li>
                    <li>✅ <strong>Akkusativ cu Osterwörter</strong> (Ich verstecke den Osterhasen)</li>
                    <li>✅ <strong>Cultural:</strong> calendar (Karfreitag, Ostersonntag, Ostermontag — zile libere), Osterfeuer, Osternest</li>
                </ul>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">📅 Calendarul Paștelui în Germania</h4>
            <table class="grammar-table">
                <thead><tr><th>Zi</th><th>Sg / Pl</th><th>Traducere RO</th><th>Status</th></tr></thead>
                <tbody>
                    <tr><td><strong>Palmsonntag</strong></td><td>der Palmsonntag · die Palmsonntage</td><td>Duminica Floriilor (zi unică în calendar) · Duminicile Floriilor (rar, peste ani)</td><td>începutul Săptămânii Sfinte</td></tr>
                    <tr><td><strong>Karfreitag</strong></td><td>der Karfreitag · die Karfreitage</td><td>Vinerea Mare · Vinerile Mari (rar, peste ani)</td><td>🏖️ zi liberă (Feiertag)</td></tr>
                    <tr><td><strong>Karsamstag</strong></td><td>der Karsamstag · die Karsamstage</td><td>Sâmbăta Mare · Sâmbetele Mari (rar, peste ani)</td><td>seara: Osterfeuer</td></tr>
                    <tr><td><strong>Ostersonntag</strong></td><td>der Ostersonntag · die Ostersonntage</td><td>Duminica Paștelui · Duminicile Paștelui (rar, peste ani)</td><td>🥚 căutare Ostereier</td></tr>
                    <tr><td><strong>Ostermontag</strong></td><td>der Ostermontag · die Ostermontage</td><td>Lunea de Paști · Lunile de Paști (rar, peste ani)</td><td>🏖️ zi liberă (Feiertag)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#dbeafe; border-color:#3b82f6;">
                <h4>💡 Dată mobilă</h4>
                <p>Ostern NU are dată fixă — cade în prima duminică după prima lună plină de primăvară (între <strong>22 martie și 25 aprilie</strong>). Așa că <em>Karfreitag</em> și <em>Ostermontag</em> (cele 2 zile libere oficiale) se schimbă în fiecare an.</p>
            </div>
        </div>
    </div>

    <!-- Sub 1: Liturgische Ostergrüße -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>✝ 2. Liturgische Ostergrüße — Salutările liturgice pascale</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-liturgisch.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Pronunție Hedda salutări liturgice</span>
            </div>

            <div class="theory-box" style="background:#fef3c7; border-color:#f59e0b;">
                <h4>✝ Salutul tradițional creștin de Paști</h4>
                <p style="font-size:1.05rem; margin-top:8px;">— Persoana 1: <strong style="color:#065f46;">Christus ist auferstanden!</strong> <em style="color:#6b7280;">(Hristos a înviat!)</em></p>
                <p style="font-size:1.05rem;">— Persoana 2 răspunde: <strong style="color:#065f46;">Wahrhaftig ist er auferstanden!</strong> <em style="color:#6b7280;">(Adevărat a înviat!)</em></p>
            </div>

            <div class="theory-box">
                <h4>📖 Context</h4>
                <p>Acesta este salutul pascal tradițional creștin, folosit în bisericile <strong>ortodoxe</strong>, <strong>catolice</strong> și <strong>protestante</strong> din spațiul german. Se rostește la Liturghia de Înviere și în întâlnirile din perioada pascală (<em>Osterzeit</em>).</p>
                <p style="margin-top:8px;">🗣️ <strong>Pronunție aproximativă:</strong> [KRI-stus ist AUF-er-shtan-den] · [VAR-haf-tih ist er AUF-er-shtan-den]</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🌍 Aceleași salutări în alte limbi</h4>
            <table class="grammar-table">
                <thead><tr><th>Limba</th><th>Salut</th><th>Răspuns</th></tr></thead>
                <tbody>
                    <tr><td>🇩🇪 Germană</td><td>Christus ist auferstanden!</td><td>Wahrhaftig ist er auferstanden!</td></tr>
                    <tr><td>🇷🇴 Română</td><td>Hristos a înviat!</td><td>Adevărat a înviat!</td></tr>
                    <tr><td>🏛 Latină</td><td>Christus resurrexit!</td><td>Vere resurrexit!</td></tr>
                    <tr><td>🇬🇧 Engleză</td><td>Christ is risen!</td><td>He is risen indeed!</td></tr>
                    <tr><td>📜 Slavonă</td><td>Hristos Voskrese!</td><td>Voistinu Voskrese!</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Sub 2: Grundvokabular cu Sg + Pl -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📚 3. Grundvokabular — vocabular de bază cu Singular + Plural</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-vokabular.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Pronunție Hedda 15 substantive</span>
            </div>

            <div class="theory-box" style="background:#ecfdf5; border-color:#10b981;">
                <h4>🔤 Atenție: substantivele în germană au MEREU articol + plural</h4>
                <p>În germană, un substantiv se învață <strong>împreună cu articolul lui</strong> (der/die/das) și <strong>cu forma de plural</strong> — pentru că pluralul e <em>imprevizibil</em> (terminații diferite: -e, -en, -er, -s, +Umlaut etc.). Învață mereu cele 3 informații împreună: articol · singular · plural.</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🥚 Substantive masculine (der)</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Tipar plural</th></tr></thead>
                <tbody>
                    <tr><td><strong>der Osterhase</strong></td><td><strong>die Osterhasen</strong></td><td>iepurașul · iepurașii de Paști</td><td>+n (n-Deklination)</td></tr>
                    <tr><td><strong>der Osterkorb</strong></td><td><strong>die Osterkörbe</strong></td><td>coșul · coșurile de Paști</td><td>+Umlaut +e</td></tr>
                    <tr><td><strong>der Palmsonntag</strong></td><td><strong>die Palmsonntage</strong></td><td>Duminica Floriilor · Duminicile Floriilor (rar, peste ani)</td><td>+e</td></tr>
                    <tr><td><strong>der Karfreitag</strong></td><td><strong>die Karfreitage</strong></td><td>Vinerea Mare · Vinerile Mari (rar, peste ani)</td><td>+e</td></tr>
                    <tr><td><strong>der Ostermontag</strong></td><td><strong>die Ostermontage</strong></td><td>Lunea de Paști · Lunile de Paști (rar, peste ani)</td><td>+e</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🕯️ Substantive feminine (die)</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Tipar plural</th></tr></thead>
                <tbody>
                    <tr><td><strong>die Osterkerze</strong></td><td><strong>die Osterkerzen</strong></td><td>lumânarea · lumânările de Paști</td><td>+n</td></tr>
                    <tr><td><strong>die Auferstehung</strong></td><td><strong>die Auferstehungen</strong></td><td>Învierea (creștină) · învierile (rar, termen religios general)</td><td>+en (-ung)</td></tr>
                    <tr><td><strong>die Fastenzeit</strong></td><td><strong>die Fastenzeiten</strong></td><td>Postul · Posturile Mari</td><td>+en</td></tr>
                    <tr><td><strong>die Osterzeit</strong></td><td><strong>die Osterzeiten</strong></td><td>perioada · perioadele de Paști</td><td>+en</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🥚 Substantive neutre (das)</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Tipar plural</th></tr></thead>
                <tbody>
                    <tr><td><strong>das Osterei</strong></td><td><strong>die Ostereier</strong></td><td>oul · ouăle de Paști</td><td>+er</td></tr>
                    <tr><td><strong>das Osterlamm</strong></td><td><strong>die Osterlämmer</strong></td><td>mielul · mieii de Paști</td><td>+Umlaut +er</td></tr>
                    <tr><td><strong>das Osterfeuer</strong></td><td><strong>die Osterfeuer</strong></td><td>focul · focurile de Paști</td><td>invariabil (terminat în -er)</td></tr>
                    <tr><td><strong>das Osternest</strong></td><td><strong>die Osternester</strong></td><td>cuibul · cuiburile de Paști</td><td>+er</td></tr>
                    <tr><td><strong>das Osterfest</strong></td><td><strong>die Osterfeste</strong></td><td>sărbătoarea · sărbătorile de Paști</td><td>+e</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7;">
                <h4>📌 Atenție la pluralele cu Umlaut</h4>
                <p><strong>das Lamm → die Lämmer</strong> (mielul · mieii) — la plural apare Umlaut + terminație -er. Asta e o regulă productivă la multe neutre cu o silabă: das Buch → die Bücher, das Haus → die Häuser. Învață Sg + Pl ÎMPREUNĂ.</p>
            </div>
        </div>
    </div>

    <!-- Sub 3: Verben + Adjektive -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🔤 4. Verben & Adjektive — verbele și adjectivele Paștelui</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-verben-adjektive.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Pronunție Hedda verbe + adjective</span>
            </div>

            <h4 style="color:#065f46; margin-top:8px; margin-bottom:8px;">🔁 10 verbe ale Paștelui</h4>
            <table class="grammar-table">
                <thead><tr><th>Infinitiv</th><th>Traducere RO</th><th>Tip</th></tr></thead>
                <tbody>
                    <tr><td><strong>feiern</strong></td><td>a sărbători</td><td>regulat (haben)</td></tr>
                    <tr><td><strong>verstecken</strong></td><td>a ascunde</td><td>regulat (haben)</td></tr>
                    <tr><td><strong>suchen</strong></td><td>a căuta</td><td>regulat (haben)</td></tr>
                    <tr><td><strong>bemalen</strong></td><td>a vopsi (a picta)</td><td>regulat (haben)</td></tr>
                    <tr><td><strong>färben</strong></td><td>a colora</td><td>regulat (haben)</td></tr>
                    <tr><td><strong>auferstehen</strong></td><td>a învia</td><td>separabil tare (sein)</td></tr>
                    <tr><td><strong>beten</strong></td><td>a se ruga</td><td>regulat (haben) — T-stem</td></tr>
                    <tr><td><strong>fasten</strong></td><td>a posti</td><td>regulat (haben) — T-stem</td></tr>
                    <tr><td><strong>schmücken</strong></td><td>a decora, a împodobi</td><td>regulat (haben)</td></tr>
                    <tr><td><strong>schenken</strong></td><td>a dărui, a face cadou</td><td>regulat (haben)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#dbeafe;">
                <p>📌 <strong>Conjugarea completă</strong> pentru 4 verbe-cheie (feiern · verstecken · suchen · auferstehen) o ai în secțiunea <strong>🔁 Verbe</strong>.</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🎨 8 adjective de sărbătoare</h4>
            <table class="grammar-table">
                <thead><tr><th>Adjectiv</th><th>Traducere RO</th><th>Context tipic</th></tr></thead>
                <tbody>
                    <tr><td><strong>bunt</strong></td><td>colorat</td><td>bunte Eier (ouă colorate)</td></tr>
                    <tr><td><strong>festlich</strong></td><td>festiv, de sărbătoare</td><td>festliches Essen (mâncare festivă)</td></tr>
                    <tr><td><strong>fröhlich</strong></td><td>vesel, bucuros</td><td>fröhliche Kinder (copii veseli)</td></tr>
                    <tr><td><strong>feierlich</strong></td><td>solemn, ceremonios</td><td>feierliche Messe (slujbă solemnă)</td></tr>
                    <tr><td><strong>herzlich</strong></td><td>cordial, călduros</td><td>herzliche Grüße (salutări călduroase)</td></tr>
                    <tr><td><strong>gesegnet</strong></td><td>binecuvântat</td><td>gesegnete Ostern (Paște binecuvântat)</td></tr>
                    <tr><td><strong>traditionell</strong></td><td>tradițional</td><td>traditionelles Osterfest (sărbătoare tradițională)</td></tr>
                    <tr><td><strong>religiös</strong></td><td>religios</td><td>religiöse Familie (familie religioasă)</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Sub 4: Redewendungen + Dialoguri -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>💬 5. Redewendungen & Wünsche — Urări și expresii de Paști</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-redewendungen.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Pronunție Hedda urări + dialoguri</span>
            </div>

            <h4 style="color:#065f46; margin-top:8px; margin-bottom:8px;">🎉 7 urări specifice de Paști</h4>
            <table class="grammar-table">
                <thead><tr><th>Germană</th><th>Traducere RO</th><th>Registru</th></tr></thead>
                <tbody>
                    <tr><td><strong>Frohe Ostern!</strong></td><td>Paște fericit!</td><td>universal, neutru</td></tr>
                    <tr><td><strong>Gesegnete Ostern!</strong></td><td>Paște binecuvântat!</td><td>religios, tradițional</td></tr>
                    <tr><td><strong>Ein frohes Osterfest!</strong></td><td>O sărbătoare de Paști fericită!</td><td>formal, festiv</td></tr>
                    <tr><td><strong>Frohe Osterzeit!</strong></td><td>Perioadă de Paști fericită!</td><td>pentru întregul sezon</td></tr>
                    <tr><td><strong>Schöne Osterferien!</strong></td><td>Vacanță de Paști frumoasă!</td><td>pentru copii / elevi</td></tr>
                    <tr><td><strong>Alles Gute zu Ostern!</strong></td><td>Toate cele bune de Paști!</td><td>prietenos, casual</td></tr>
                    <tr><td><strong>Ich wünsche dir frohe Ostern!</strong></td><td>Îți doresc Paște fericit!</td><td>formulare completă, personală</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🗣️ Dialog 1 — Annette (Lehrerin) și Andreea la școală</h4>
            <div class="theory-box" style="background:#f0fdf4;">
                <p><strong>Annette:</strong> Was machst du zu Ostern, Andreea? <em style="color:#6b7280;">(Ce faci de Paște?)</em></p>
                <p><strong>Andreea:</strong> Ich fahre zu meiner Oma und wir färben Ostereier zusammen. <em style="color:#6b7280;">(Mă duc la bunica și vopsim ouă de Paști împreună.)</em></p>
                <p><strong>Annette:</strong> Das klingt wunderschön! Frohe Ostern! <em style="color:#6b7280;">(Sună minunat! Paște fericit!)</em></p>
                <p><strong>Andreea:</strong> Danke, Ihnen auch! Frohe Ostern! <em style="color:#6b7280;">(Mulțumesc, și dvs.! Paște fericit!)</em></p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🗣️ Dialog 2 — Carolina și Mihai pe stradă</h4>
            <div class="theory-box" style="background:#f0fdf4;">
                <p><strong>Carolina:</strong> Guten Morgen, Mihai! Frohe Ostern! <em style="color:#6b7280;">(Bună dimineața, Mihai! Paște fericit!)</em></p>
                <p><strong>Mihai:</strong> Danke, gleichfalls! Hast du schöne Pläne? <em style="color:#6b7280;">(Mulțumesc, asemenea! Ai planuri frumoase?)</em></p>
                <p><strong>Carolina:</strong> Ja, die ganze Familie kommt zusammen. Es wird ein Fest! <em style="color:#6b7280;">(Da, toată familia se adună. Va fi o sărbătoare!)</em></p>
                <p><strong>Mihai:</strong> Wie schön! Genieße das Wochenende! <em style="color:#6b7280;">(Ce frumos! Bucură-te de weekend!)</em></p>
            </div>

            <div class="theory-box" style="margin-top:14px;">
                <h4>📝 Propoziții utile pentru conversație</h4>
                <p>→ <em>Ich freue mich auf Ostern.</em> <span class="ro-translation">— Abia aștept Paștele.</span></p>
                <p>→ <em>Wir feiern Ostern bei meinen Eltern.</em> <span class="ro-translation">— Sărbătorim Paștele la părinții mei.</span></p>
                <p>→ <em>Die Kinder suchen Ostereier im Garten.</em> <span class="ro-translation">— Copiii caută ouă de Paști în grădină.</span></p>
                <p>→ <em>Ich habe meiner Oma eine Osterkarte geschrieben.</em> <span class="ro-translation">— I-am scris bunicii o felicitare de Paști.</span></p>
                <p>→ <em>Am Karfreitag essen viele Menschen kein Fleisch.</em> <span class="ro-translation">— De Vinerea Mare mulți oameni nu mănâncă carne.</span></p>
            </div>
        </div>
    </div>

    <!-- Sub 5: Grammatik im Kontext -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>📐 6. Grammatik im Kontext — Akkusativ cu substantivele Paștelui</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-grammatik.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Pronunție Hedda exemple Akkusativ</span>
            </div>

            <h4 style="color:#065f46; margin-top:8px; margin-bottom:8px;">🎯 Articolele la Akkusativ (obiect direct)</h4>
            <table class="grammar-table">
                <thead><tr><th>Gen</th><th>Nominativ</th><th>Akkusativ</th></tr></thead>
                <tbody>
                    <tr><td>masculin</td><td>der</td><td><strong>den</strong> (singura schimbare!)</td></tr>
                    <tr><td>feminin</td><td>die</td><td>die (identic)</td></tr>
                    <tr><td>neutru</td><td>das</td><td>das (identic)</td></tr>
                    <tr><td>plural</td><td>die</td><td>die (identic)</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#fef3c7;">
                <h4>📌 Regula cheie</h4>
                <p>Doar <strong>der</strong> (masculin) se schimbă la Akkusativ în <strong>den</strong>. Articolele <em>die</em> (feminin/plural) și <em>das</em> (neutru) rămân identice. La articolul nehotărât: <strong>einen</strong> (m. Akk) · eine (f.) · ein (n.).</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">📝 Exemple cu Osterwörter</h4>
            <table class="grammar-table">
                <thead><tr><th>Propoziție germană</th><th>Traducere RO</th><th>Explicație</th></tr></thead>
                <tbody>
                    <tr><td>Ich verstecke <strong>den</strong> Osterhasen.</td><td>Ascund iepurașul de Paști.</td><td>der Osterhase → den (masc. Akk + n-Deklination)</td></tr>
                    <tr><td>Die Kinder suchen <strong>das</strong> Osterei.</td><td>Copiii caută oul de Paști.</td><td>das Osterei → das (neutru identic)</td></tr>
                    <tr><td>Wir bemalen <strong>die</strong> Ostereier bunt.</td><td>Vopsim ouăle de Paști colorat.</td><td>die Ostereier (plural identic)</td></tr>
                    <tr><td>Er kauft <strong>einen</strong> Osterkorb.</td><td>El cumpără un coș de Paști.</td><td>der Osterkorb → einen (masc. Akk indef.)</td></tr>
                    <tr><td>Sie schenkt <strong>eine</strong> Osterkerze.</td><td>Ea dăruiește o lumânare de Paști.</td><td>die Osterkerze → eine (fem. identic)</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Sub 6: Andreeas Ostern - narațiune de sinteză -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>🐰 7. Andreeas Ostern in Brandenburg — sinteza vocabularului</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none"><source src="audio/07-andreeas-ostern.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă narațiunea Andreei</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți povestește:</div>
                    <div class="text">„Eu sărbătoresc Ostern la bunica mea, în Brandenburg. Săptămâna întreagă pregătim casa: schmücken (decorăm) ferestrele cu ramuri colorate și ouă pictate. La Karfreitag (Vinerea Mare) postim toată ziua (wir fasten). Sâmbătă seara mergem la Osterfeuer (focul de Paști) în sat. Apoi, duminică dimineața (Ostersonntag), copiii caută Ostereier în grădină — Osterhase le-a ascuns peste tot! Mâncăm Osterlamm (miel de Paști) la prânz, în familie. La biserică auzim salutul liturgic: <em>Christus ist auferstanden!</em> și răspundem <em>Wahrhaftig ist er auferstanden!</em> E cea mai frumoasă sărbătoare a anului. 🐰🥚🦋"</div>
                </div>
            </div>

            <div class="theory-box" style="background:#fef3c7;">
                <h4>🎯 Vocabular cheie din narațiune</h4>
                <ul>
                    <li><strong>schmücken</strong> — a decora · <em>Wir schmücken die Fenster.</em></li>
                    <li><strong>fasten</strong> — a posti · <em>Wir fasten am Karfreitag.</em></li>
                    <li><strong>das Osterfeuer · die Osterfeuer</strong> — focul · focurile de Paști</li>
                    <li><strong>suchen</strong> — a căuta · <em>Die Kinder suchen Ostereier.</em></li>
                    <li><strong>verstecken</strong> — a ascunde · <em>Der Osterhase versteckt die Eier.</em></li>
                    <li><strong>das Osterlamm · die Osterlämmer</strong> — mielul · mieii de Paști (felul tradițional)</li>
                </ul>
            </div>

            <div class="theory-box" style="background:#ecfdf5; border-color:#10b981; margin-top:14px; text-align:center;">
                <h4>🦋 Felicitări — ai învățat vocabularul Ostern!</h4>
                <p>Acum poți să saluți pe cineva de Paști în germană, să descrii tradițiile, să folosești corect articolele și pluralele celor 15 substantive de Paști. <strong>Frohe Ostern!</strong></p>
            </div>
        </div>
    </div>

    <!-- ===== SCHREIBWERKSTATT — Trimite textul Claudiei ===== -->
    <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin: 26px 0 8px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
        <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
        <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Schreibwerkstatt — vrei să-ți corectez textul?</h4>
        <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 540px; margin-left: auto; margin-right: auto; line-height: 1.5;">
            Scrie despre cum sărbătorești Paștele (Ostern) — tradiții, mâncare, familie. Min. 50 cuvinte. Îți răspund personal pe email. 🦋
        </p>
        <a href="https://forms.gle/wi2auaXwMZpqxizT9" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3);">
            Trimite textul Claudiei →
        </a>
        <p style="color: #6b7280; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
            ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
        </p>
    </div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (!container) return;
    container.innerHTML = theoryHTML;
}

function toggleSubSection(i) {
    const c = document.getElementById('sub-section-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#theory-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸';
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
    audio.onended = function() { btn.textContent = '▶'; };
}

buildTheory();
