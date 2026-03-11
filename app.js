document.addEventListener('DOMContentLoaded', () => {
    
    // ---- Data Structure: Workouts ----
    const workoutsData = {
        home: {
            title: "Home Workout (Pesi & Manubri)",
            icon: `<i class="fa-solid fa-house"></i>`,
            equipment: "2 Dischi da 5kg, 2 Dischi da 1kg, Manubri da 2kg e 1.5kg.",
            levels: {
                1: [
                    { name: "1. Goblet Squat (o Front con dischi)", reps: "4 x 10-12", desc: "Mantieni i dischi al petto. Scendi profondo, schiena dritta. Esplosivo in salita." },
                    { name: "2. Affondi Bulgari", reps: "4 x 10 per gamba", desc: "Piede posteriore su una sedia. Usa manubri. Fondamentale per calciare." },
                    { name: "3. Floor Press con dischi", reps: "4 x 12", desc: "Spingi in alto dal pavimento. Controlla la discesa." },
                    { name: "4. Rematore con Manubri/Dischi", reps: "4 x 12-15", desc: "Schiena a 45 gradi. Tira verso l'ombelico." },
                    { name: "5. Alzate laterali + Curl bicipiti", reps: "3 x 15 + 15", desc: "Alzate lente e controllate seguite dai curl in superserie." },
                    { name: "6. Plank e Core anti-rotazione", reps: "3 x max tempo", desc: "Plank classico o spostando un disco da 1kg da un lato all'altro." }
                ],
                2: [
                    { name: "1. Pause Goblet Squat", reps: "4 x 8-10", desc: "Fermo in basso di 2 secondi. Azzera il riflesso miotatico per maggiore forza pura." },
                    { name: "2. Pistol Squat assistiti", reps: "3 x 5-8 per gamba", desc: "Aiutati con una porta/sedia. Massimo focus sulla forza della singola gamba." },
                    { name: "3. Floor Press lenta + Esplosiva", reps: "4 x 10", desc: "3 secondi a scendere, spinta verso l'alto il più veloce possibile." },
                    { name: "4. Rematore fermo 2\"", reps: "4 x 10-12", desc: "Mantieni la contrazione di picco per 2 secondi ad ogni ripetizione." },
                    { name: "5. Manmaker leggero", reps: "3 x 10", desc: "Push up sui manubri, rematore destro, rematore sinistro, squat e spinta in alto." },
                    { name: "6. Hollow Body Hold con disco", reps: "3 x 45 sec", desc: "Mantieni la posizione a barchetta tenendo il disco da 1/5kg dietro la testa." }
                ],
                3: [
                    { name: "1. Jump Squat con Manubri", reps: "4 x 6", desc: "Massima esplosività. Tieni i manubri e salta più in alto che puoi." },
                    { name: "2. Affondi in avanzamento (Walking Lunges)", reps: "4 x 12 passi", desc: "Sfrutta lo spazio in casa per affondi dinamici." },
                    { name: "3. Spinte a terra alternate veloci", reps: "4 x 14", desc: "Spingi un braccio mentre l'altro scende, ritmo elevato." },
                    { name: "4. Trazioni orizzontali sotto il tavolo", reps: "4 x cedimento", desc: "Reverse row usando un tavolo robusto (se fattibile) o rematore pesante." },
                    { name: "5. Curl + Press + Estensione", reps: "3 x 10", desc: "Complesso per le braccia totale in un unico movimento." },
                    { name: "6. Russian Twist con dischi", reps: "3 x 20", desc: "Piedi sollevati, tocca terra a lato per stimolare gli obliqui." }
                ]
            }
        },
        park: {
            title: "Park Workout (Corpo libero & Sprint)",
            icon: `<i class="fa-solid fa-tree"></i>`,
            equipment: "Forza esplosiva, Plyometria, Nessun attrezzo richiesto.",
            levels: {
                1: [
                    { name: "Riscaldamento Dinamico", reps: "10 Minuti", desc: "Corsa leggera, skip alto, calciata dietro, andature." },
                    { name: "1. Sprint Brevi", reps: "6 x 20 metri", desc: "Scatto massimale. Recupero COMPLETO (60-90s)." },
                    { name: "2. Balzi Orizzontali (Broad Jumps)", reps: "4 x 5 balzi", desc: "Salta in avanti il più lontano possibile atterrando stabile." },
                    { name: "3. Jump Squat", reps: "4 x 8-10", desc: "Squat a corpo libero con salto esplosivo verso l'alto." },
                    { name: "4. Agility T-Drill", reps: "4 volte", desc: "Scivolamenti laterali e scatti per i cambi di direzione." },
                    { name: "5. Flessioni normali o Plio", reps: "3 x Max", desc: "Spingendo forte fino a staccare le mani da terra se riesci." }
                ],
                2: [
                    { name: "Riscaldamento Dinamico Avanzato", reps: "10 Minuti", desc: "Include affondi incrociati e mobilità articolare." },
                    { name: "1. Sprint in Salita (o da terra)", reps: "8 x 20 metri", desc: "Cerca una leggera pendenza o parti dalla posizione prona (pancia a terra)." },
                    { name: "2. Single Leg Broad Jumps", reps: "3 x 4 per gamba", desc: "Balzo in avanti su una singola gamba. Estremamente reclutante per i glutei." },
                    { name: "3. Tuck Jumps", reps: "4 x 8", desc: "Salta portando le ginocchia al petto nel minor tempo di contatto possibile a terra." },
                    { name: "4. Scatti a Zig-Zag", reps: "5 volte", desc: "Imita il dribbling e il superamento avversari." },
                    { name: "5. Clap Push-ups", reps: "3 x cedimento", desc: "Flessioni con battito di mani." }
                ],
                3: [
                    { name: "Riscaldamento Reattivo", reps: "10 Minuti", desc: "Balzelli e skip reattivi." },
                    { name: "1. Sprint con Cambio di Direzione 180°", reps: "6 x 30m totali", desc: "Scatta 15m, tocca la linea, girati e scatta 15m al traguardo." },
                    { name: "2. Depth Jumps (da panchina)", reps: "4 x 5", desc: "Lasciati cadere da una panchina e appena tocchi terra salta in alto immediatamente." },
                    { name: "3. Skater Jumps", reps: "4 x 10", desc: "Balzi laterali da una gamba all'altra, massima distanza." },
                    { name: "4. Suicide Drills", reps: "3 serie", desc: "Navetta classica del calcio. Corsa continua su 5m, 10m, 15m." },
                    { name: "5. X-Plank Crawl", reps: "3 x 10m", desc: "Camminata in plank stile uomo ragno." }
                ]
            }
        },
        gym: {
            title: "Palestra (Macchine & Pesi Liberi)",
            icon: `<i class="fa-solid fa-dumbbell"></i>`,
            equipment: "Focus sui grandi esercizi per forza massima e ipertrofia.",
            levels: {
                1: [
                    { name: "1. Squat con Bilanciere", reps: "4 x 8-10", desc: "Il re degli esercizi per le gambe. Non esagerare col peso, cura la profondità." },
                    { name: "2. Stacchi Romeni (RDL)", reps: "4 x 10", desc: "Cura i femorali e la catena cinetica posteriore per prevenire infortuni." },
                    { name: "3. Panca Piana o Inclinata manubri", reps: "4 x 8-10", desc: "Spinta fondamentale per i contrasti spalla a spalla nel calcio." },
                    { name: "4. Lat Machine o Trazioni", reps: "4 x 10-12", desc: "Tirata verticale per ampiezza e forza dorsale." },
                    { name: "5. Leg Press", reps: "3 x 12-15", desc: "Pompaggio per le gambe senza stressare la schiena." },
                    { name: "6. Cable Crunch (Core alla fune)", reps: "4 x 15-20", desc: "Abdominal crunch pesante in ginocchio al cavo." }
                ],
                2: [
                    { name: "1. Front Squat", reps: "4 x 8", desc: "Bilanciere frontale. Maggiore enfasi sui quadricipiti e per la postura del busto." },
                    { name: "2. Hip Thrust con Bilanciere", reps: "4 x 8-10", desc: "Essenziale per la forza nello sprint e la stabilità delle anche." },
                    { name: "3. Spinte Manubri Panca Inclinata", reps: "4 x 10", desc: "Lavoro sul petto alto." },
                    { name: "4. Rematore con Bilanciere", reps: "4 x 8-10", desc: "Forza pura per la schiena. Schiena ben bloccata." },
                    { name: "5. Leg Extension Singola", reps: "3 x 12 per gamba", desc: "Isolamento quadricipiti lavorando sulle asimmetrie." },
                    { name: "6. Ab Wheel Rollout", reps: "3 x 10-12", desc: "Rotella per addominali. Estensione completa fermandoti se curvi la lombare." }
                ],
                3: [
                    { name: "1. Squat Esplosivo (Catene/Elastici o Basso peso)", reps: "5 x 5", desc: "Col 60% del peso massimale. Scendi controllato, esplodi in salita muovendoti come un proiettile." },
                    { name: "2. Stacco da Terra Classico", reps: "4 x 5-6", desc: "Forza assoluta. Solleva da terra a peso morto." },
                    { name: "3. Panca Piana con Fermo", reps: "4 x 6-8", desc: "Fermo al petto per 1 secondo. Niente rimbalzi." },
                    { name: "4. Trazioni Zavorrate", reps: "4 x 6-8", desc: "Aggiungi peso con una cintura." },
                    { name: "5. Affondi in Camminata Pesanti", reps: "3 x 20 passi", desc: "Manubri pesanti, cammina per la palestra." },
                    { name: "6. Woodchopper al Cavo", reps: "3 x 12 per lato", desc: "Torsioni pesanti per potenza del core nel tiro." }
                ]
            }
        }
    };


    // ---- User State & Local Storage ----
    let weightData = JSON.parse(localStorage.getItem('gfit_weights')) || [];
    
    // Convert old format to new format if needed
    weightData = weightData.map(d => {
        if (!d.workoutArea) d.workoutArea = 'rest'; // Default for old entries
        return d;
    });

    let currentEnv = 'home';
    let currentLvl = 1;

    // ---- Abstract Minimalist Animated Icons ----
    const stickmanAnims = {
        squat: `
            <svg viewBox="0 0 100 150" class="anim-abstract">
                <path d="M 50 20 L 50 130" style="stroke: rgba(255,255,255,0.2); stroke-width: 4; stroke-dasharray: 4 4;" />
                <circle cx="50" cy="20" r="14" style="fill: var(--primary); animation: animVerticalMove 2s ease-in-out infinite;" />
                <path d="M 30 110 L 50 130 L 70 110" style="stroke: var(--primary); stroke-width: 6; fill: none; opacity: 0.5;" />
            </svg>
        `,
        pushup: `
            <svg viewBox="0 0 150 100" class="anim-abstract">
                <path d="M 20 90 L 130 90" style="stroke: rgba(255,255,255,0.2); stroke-width: 4;" />
                <circle cx="75" cy="50" r="14" style="fill: var(--secondary); animation: animPushMove 2s ease-in-out infinite;" />
                <path d="M 55 30 L 75 10 L 95 30" style="stroke: var(--secondary); stroke-width: 6; fill: none; animation: animFade 2s ease-in-out infinite;" />
            </svg>
        `,
        run: `
            <svg viewBox="0 0 150 100" class="anim-abstract">
                <g style="fill: none; stroke: var(--primary); stroke-width: 8; stroke-linecap: round; stroke-linejoin: round;">
                    <path d="M 30 20 L 60 50 L 30 80" style="animation: animPulse 1s linear infinite; animation-delay: 0s;" />
                    <path d="M 60 20 L 90 50 L 60 80" style="animation: animPulse 1s linear infinite; animation-delay: 0.2s;" />
                    <path d="M 90 20 L 120 50 L 90 80" style="animation: animPulse 1s linear infinite; animation-delay: 0.4s;" />
                </g>
            </svg>
        `,
        lift: `
            <svg viewBox="0 0 100 150" class="anim-abstract">
                <rect x="20" y="110" width="60" height="20" rx="4" style="fill: rgba(255,255,255,0.2);" />
                <path d="M 50 110 L 50 30" style="stroke: var(--primary); stroke-width: 8; stroke-linecap: round; animation: animLiftMove 2s ease-in-out infinite;" />
                <path d="M 30 50 L 50 30 L 70 50" style="fill: none; stroke: var(--primary); stroke-width: 8; stroke-linecap: round; stroke-linejoin: round; animation: animLiftMove 2s ease-in-out infinite;" />
            </svg>
        `,
        core: `
            <svg viewBox="0 0 100 100" class="anim-abstract">
                <circle cx="50" cy="50" r="30" style="fill: none; stroke: rgba(255,255,255,0.1); stroke-width: 8;" />
                <circle cx="50" cy="50" r="30" style="fill: none; stroke: var(--secondary); stroke-width: 8; stroke-dasharray: 188; stroke-dashoffset: 188; animation: animCoreRing 3s ease-in-out infinite;" />
                <circle cx="50" cy="50" r="10" style="fill: var(--primary); animation: animCoreBreath 3s ease-in-out infinite;" />
            </svg>
        `
    };

    // Helper to determine animation type matching the exercise name
    function getAnimationType(name) {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('squat') || lowerName.includes('affondi')) return 'squat';
        if (lowerName.includes('push') || lowerName.includes('flessioni') || lowerName.includes('press') || lowerName.includes('panca')) return 'pushup';
        if (lowerName.includes('sprint') || lowerName.includes('jump') || lowerName.includes('balzi') || lowerName.includes('scatti')) return 'run';
        if (lowerName.includes('rematore') || lowerName.includes('stacc') || lowerName.includes('trazioni') || lowerName.includes('tira')) return 'lift';
        if (lowerName.includes('plank') || lowerName.includes('core') || lowerName.includes('twist') || lowerName.includes('crunch') || lowerName.includes('hollow')) return 'core';
        return 'lift'; // Fallback
    }

    // ---- DOM Elements ----
    const dynamicWorkoutContent = document.getElementById('dynamic-workout-content');
    const progressText = document.getElementById('progress-text');
    const progressCount = document.getElementById('progress-count');
    const progressFill = document.getElementById('progress-fill');
    
    // Modal Elements
    const exerciseModal = document.getElementById('exercise-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalReps = document.getElementById('modal-reps');
    const modalDesc = document.getElementById('modal-desc');
    const stickmanContainer = document.getElementById('stickman-container');

    
    // ---- Navigation Logic ----
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(n => n.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // ---- Helper Functions ----
    function getWorkoutCount(env) {
        return weightData.filter(d => d.workoutArea === env).length;
    }

    function calculateUnlockedLevel(env) {
        const count = getWorkoutCount(env);
        if (count >= 20) return 3;
        if (count >= 10) return 2;
        return 1;
    }

    function updateWorkoutUI() {
        const unlockedLvl = calculateUnlockedLevel(currentEnv);
        const currentCount = getWorkoutCount(currentEnv);

        // Update Level Tabs UI (Locks)
        const lTabs = document.querySelectorAll('.l-tab');
        lTabs.forEach(tab => {
            const lvl = parseInt(tab.getAttribute('data-ltab'));
            if (lvl <= unlockedLvl) {
                tab.classList.remove('locked');
                tab.innerHTML = `Livello ${lvl}`;
            } else {
                tab.classList.add('locked');
                tab.innerHTML = `<i class="fa-solid fa-lock" style="font-size:12px"></i> Lvl ${lvl}`;
            }
            
            // Set active
            if (lvl === currentLvl) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        // If current level is locked (e.g. switched envs), fallback to unlocked
        if (currentLvl > unlockedLvl) {
            currentLvl = unlockedLvl;
            updateWorkoutUI(); // Recurse to fix UI
            return;
        }

        // Update Progress Bar
        let nextTarget = 10;
        let progressVal = 0;
        if (currentCount < 10) {
            nextTarget = 10;
            progressText.innerText = "Allenati per sbloccare il Livello 2";
            progressVal = (currentCount / 10) * 100;
            progressCount.innerText = `${currentCount}/10`;
        } else if (currentCount < 20) {
            nextTarget = 20;
            progressText.innerText = "Ottimo! Allenati per sbloccare il Livello 3";
            progressVal = ((currentCount - 10) / 10) * 100;
            progressCount.innerText = `${currentCount}/20`;
        } else {
            progressText.innerText = "Hai sbloccato tutti i livelli per quest'area!";
            progressVal = 100;
            progressCount.innerText = `Lv. Max (${currentCount})`;
        }
        progressFill.style.width = `${progressVal}%`;

        // Render Cards
        renderWorkoutCards();
    }

    function renderWorkoutCards() {
        const envData = workoutsData[currentEnv];
        const lvlData = envData.levels[currentLvl];

        let html = `
            <div class="workout-content active" style="animation: none;">
                <div class="equipment-info glass">
                    ${envData.icon}
                    <p><strong>Info:</strong> ${envData.equipment}</p>
                </div>
                <div class="exercise-list">
        `;

        lvlData.forEach(ex => {
            html += `
                <div class="exercise-card glass">
                    <div class="ex-header">
                        <h4>${ex.name}</h4>
                        <span class="reps">${ex.reps}</span>
                    </div>
                    <p>${ex.desc}</p>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;

        dynamicWorkoutContent.innerHTML = html;

        // Bind Micro-animations & Modal
        const cards = dynamicWorkoutContent.querySelectorAll('.exercise-card');
        cards.forEach(card => {
            const h4 = card.querySelector('h4').innerText;
            const reps = card.querySelector('.reps').innerText;
            const desc = card.querySelector('p').innerText;

            card.addEventListener('click', () => {
                // Micro-animation
                card.classList.remove('exercise-anim-active');
                void card.offsetWidth;
                card.classList.add('exercise-anim-active');

                // Set Modal Data
                modalTitle.innerText = h4;
                modalReps.innerText = reps;
                modalDesc.innerText = desc;

                // Set Animation
                const animKey = getAnimationType(h4);
                stickmanContainer.innerHTML = stickmanAnims[animKey];

                // Show Modal
                exerciseModal.classList.add('active');
            });
        });
    }

    // Modal Close Logic
    modalCloseBtn.addEventListener('click', () => {
        exerciseModal.classList.remove('active');
        // Clear SVG after transition to avoid weird glitches on reopening
        setTimeout(() => stickmanContainer.innerHTML = '', 400); 
    });

    exerciseModal.addEventListener('click', (e) => {
        if (e.target === exerciseModal) {
            exerciseModal.classList.remove('active');
            setTimeout(() => stickmanContainer.innerHTML = '', 400); 
        }
    });

    // ---- Workout & Level Tab Listeners ----
    const wTabs = document.querySelectorAll('.w-tab');
    wTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            wTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentEnv = tab.getAttribute('data-wtab');
            currentLvl = calculateUnlockedLevel(currentEnv); // Default to highest unlocked or Level 1
            updateWorkoutUI();
        });
    });

    const lTabs = document.querySelectorAll('.l-tab');
    lTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const requestedLvl = parseInt(tab.getAttribute('data-ltab'));
            const unlockedLvl = calculateUnlockedLevel(currentEnv);
            
            if (requestedLvl <= unlockedLvl) {
                currentLvl = requestedLvl;
                updateWorkoutUI();
            } else {
                // Shake animation for locked tab could go here
                tab.style.transform = "translateX(5px)";
                setTimeout(() => tab.style.transform = "translateX(-5px)", 100);
                setTimeout(() => tab.style.transform = "translateX(0)", 200);
            }
        });
    });


    // ---- Calculations & Dashboard Updates ----
    const HEIGHT_CM = 183;
    const AGE = 25; 
    const ACTIVITY_FACTOR = 1.725; 

    // Target Deficit for Fat Loss
    const CALORIC_DEFICIT = 500; 

    const bmiDisplay = document.getElementById('bmi-display');
    const tdeeDisplay = document.getElementById('tdee-display');
    const currentWeightDisplay = document.getElementById('current-weight-display');

    function updateProfileStats(weightKg) {
        const heightM = HEIGHT_CM / 100;
        const bmi = (weightKg / (heightM * heightM)).toFixed(1);
        bmiDisplay.innerHTML = `${bmi} <small>BMI</small>`;
        
        const bmr = (10 * weightKg) + (6.25 * HEIGHT_CM) - (5 * AGE) + 5;
        const tdee = Math.round(bmr * ACTIVITY_FACTOR);
        const targetCalories = tdee - CALORIC_DEFICIT; // Apply deficit for fat loss
        
        tdeeDisplay.innerHTML = `${targetCalories} <small>kcal</small>`;
        currentWeightDisplay.innerHTML = `${weightKg} <small>kg</small>`;
    }


    // ---- Tracker & Local Storage Logic ----
    const weightForm = document.getElementById('weight-form');
    const weightInput = document.getElementById('weight-input');
    const weightDate = document.getElementById('weight-date');
    const workoutTypeInput = document.getElementById('workout-type');
    
    weightDate.valueAsDate = new Date();

    if (weightData.length === 0) {
        updateProfileStats(80);
    } else {
        const latestWeight = weightData[weightData.length - 1].weight;
        updateProfileStats(latestWeight);
        weightInput.value = latestWeight;
    }

    weightForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dateVal = weightDate.value;
        const weightVal = parseFloat(weightInput.value);
        const workoutAreaVal = workoutTypeInput.value;

        if(!dateVal || isNaN(weightVal)) return;

        const existingIndex = weightData.findIndex(d => d.date === dateVal);
        if (existingIndex >= 0) {
            weightData[existingIndex].weight = weightVal;
            weightData[existingIndex].workoutArea = workoutAreaVal;
        } else {
            weightData.push({ date: dateVal, weight: weightVal, workoutArea: workoutAreaVal });
            weightData.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        localStorage.setItem('gfit_weights', JSON.stringify(weightData));
        
        updateProfileStats(weightData[weightData.length - 1].weight);
        renderChart();
        updateWorkoutUI(); // Instantly update progress bars if relevant
        
        // Brief success feedback
        const btn = weightForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = "Salvato!";
        btn.style.background = "#fff";
        btn.style.color = "#000";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "var(--primary)";
            btn.style.color = "var(--bg-color)";
        }, 2000);
    });

    // ---- Chart.js Rendering ----
    let weightChartInstance = null;
    
    function renderChart() {
        const ctx = document.getElementById('weightChart').getContext('2d');
        
        if (weightChartInstance) {
            weightChartInstance.destroy();
        }

        let displayData = weightData;
        if (displayData.length === 0) {
             const d = new Date();
             const str = d.toISOString().split('T')[0];
             displayData = [{ date: str, weight: 80 }];
        }

        const labels = displayData.map(d => {
            const pts = d.date.split('-');
            return `${pts[2]}/${pts[1]}`;
        });
        const dataPoints = displayData.map(d => d.weight);

        const Math_min = Math.min(...dataPoints);
        const Math_max = Math.max(...dataPoints);
        const minWeight = Math_min !== Infinity ? Math_min : 0;
        const maxWeight = Math_max !== -Infinity ? Math_max : 80;

        weightChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Peso (kg)',
                    data: dataPoints,
                    borderColor: '#39FF14',
                    backgroundColor: 'rgba(57, 255, 20, 0.1)',
                    borderWidth: 3,
                    pointBackgroundColor: '#00F0FF',
                    pointBorderColor: '#fff',
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(18, 20, 26, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#39FF14',
                        padding: 12,
                        cornerRadius: 8,
                        displayColors: false
                    }
                },
                scales: {
                    y: {
                        min: Math.max(0, minWeight - 2),
                        max: maxWeight + 2,
                        grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                        ticks: { color: '#a0a0a0', font: { family: "'Inter', sans-serif" } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#a0a0a0', font: { family: "'Inter', sans-serif" } }
                    }
                }
            }
        });
    }

    // ---- Data Export & Import Logic ----
    const exportBtn = document.getElementById('export-btn');
    const importBtnTrigger = document.getElementById('import-btn-trigger');
    const importFileInput = document.getElementById('import-file');

    if(exportBtn) {
        exportBtn.addEventListener('click', () => {
            const dataStr = JSON.stringify(weightData, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'gfit_backup_gianluca.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }

    if(importBtnTrigger) {
        importBtnTrigger.addEventListener('click', () => {
            importFileInput.click();
        });
    }

    if(importFileInput) {
        importFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    if (Array.isArray(importedData)) {
                        weightData = importedData;
                        
                        // Convert old to new just in case
                        weightData = weightData.map(d => {
                            if (!d.workoutArea) d.workoutArea = 'rest';
                            return d;
                        });

                        weightData.sort((a, b) => new Date(a.date) - new Date(b.date));
                        localStorage.setItem('gfit_weights', JSON.stringify(weightData));
                        
                        if (weightData.length > 0) {
                            updateProfileStats(weightData[weightData.length - 1].weight);
                        }
                        renderChart();
                        updateWorkoutUI();
                        
                        const originalText = importBtnTrigger.innerHTML;
                        importBtnTrigger.innerHTML = '<i class="fa-solid fa-check"></i> Importato!';
                        importBtnTrigger.style.background = "var(--primary)";
                        importBtnTrigger.style.color = "var(--bg-color)";
                        setTimeout(() => {
                            importBtnTrigger.innerHTML = originalText;
                            importBtnTrigger.style.background = "rgba(255,255,255,0.1)";
                            importBtnTrigger.style.color = "var(--text-main)";
                        }, 3000);
                    } else {
                        alert('Formato file non valido.');
                    }
                } catch (err) {
                    alert('Errore durante la lettura del file. Assicurati che sia il file corretto JSON.');
                }
            };
            reader.readAsText(file);
            importFileInput.value = '';
        });
    }

    // Initialization
    renderChart();
    updateWorkoutUI();
});
