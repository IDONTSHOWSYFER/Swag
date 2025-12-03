/* ------------------------------------------------------------
   ONBOARDING : 1 scroll = 1 mot tapé
------------------------------------------------------------ */

const words = [
    document.getElementById("word1"),
    document.getElementById("word2"),
    document.getElementById("word3")
];

let step = 0;
let isTyping = false;
let onboardingDone = false;

function typeWord(element, callback) {
    const text = element.dataset.text;
    element.textContent = "";
    element.classList.add("show");
    let i = 0;
    isTyping = true;

    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            isTyping = false;
            if (callback) callback();
        }
    }, 80);
}

// Onboarding scroll controller
window.addEventListener(
    "wheel",
    (e) => {
        if (onboardingDone) return;

        // Bloque le scroll pendant onboarding
        e.preventDefault();

        if (e.deltaY > 0 && !isTyping && step < 3) {
            const el = words[step];

            typeWord(el, () => {
                step++;

                // FIN ONBOARDING → navbar + scroll débloqué
                if (step === 3) {
                    document.querySelector(".navbar").classList.add("show");

                    onboardingDone = true;

                    // Autorise enfin le scroll normal :
                    document.body.classList.add("can-scroll");

                    // Retire le blocage du scroll
                    setTimeout(() => {
                        document.body.style.overflowY = "auto";
                    }, 300);
                }
            });
        }
    },
    { passive: false }
);


/* ------------------------------------------------------------
   KPI ANIMATION FIX — CHAQUE KPI SE LANCE INDIVIDUELLEMENT
------------------------------------------------------------ */

const kpis = document.querySelectorAll(".kpi");
let kpiTriggered = false;

function animateKPIs() {
    const triggerPoint = window.innerHeight * 0.80;

    kpis.forEach((kpi) => {
        const rect = kpi.getBoundingClientRect();

        // Si KPI visible à l'écran
        if (rect.top < triggerPoint && !kpi.classList.contains("animated")) {
            startCount(kpi);
            kpi.classList.add("animated");
        }
    });
}

function startCount(el) {
    const target = +el.dataset.target;
    let count = 0;
    const speed = target / 70;

    const interval = setInterval(() => {
        count += speed;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        el.textContent = Math.floor(count);
        el.classList.add("show");
    }, 20);
}

// MODELVIEWER INTERACTIONS
const shoe = document.getElementById("shoe3D");
const popup = document.getElementById("itemPopup");
const closePopup = document.getElementById("closePopup");
const lootSound = document.getElementById("lootSound");

shoe.addEventListener("click", () => {
    lootSound.currentTime = 0;
    lootSound.play();
    popup.style.display = "block";
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("scroll", animateKPIs);