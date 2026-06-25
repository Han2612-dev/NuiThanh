/**
 * DIGITAL STORYTELLING - CORE APP LOGIC
 * RỪNG NGẬP MẶN NÚI THÀNH (2026 - 2030)
 * Trực quan hóa toàn bộ thông tin từ tài liệu Đề án
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out-quad',
        once: true,
        mirror: false
    });

    // 2. Populate Project General Info (Phần I)
    populateGeneralInfo();

    // 3. Render Climate Warning Stats (Phần II)
    renderClimateStats();

    // 4. Render Core Goals Metrics (Phần III)
    renderCoreGoals();

    // 5. Render Implementation Phases (Phần III)
    renderPhases();

    // 6. Initialize & Render 6-Pillar Hexagon Model (Phần VII)
    initHexagonPillars();

    // 7. Render Expected Benefits & Budget (Phần IV & V)
    renderBenefitsAndBudget();

    // 8. Render Recommendations (Phần VIII)
    renderRecommendations();

    // 9. Render Legal Basis (Default: Central Laws) (Phụ lục)
    switchLegalTab('central');

    // 10. Render Press Reference Links (Phụ lục)
    renderPressLinks();

    // 11. Initialize Image Comparison Slider (Phần II)
    initImageComparison();

    // 12. Handle Navigation Scrolling Effect
    initHeaderScroll();

    // 13. Mobile Menu Toggle
    initMobileNav();
});

/* ==========================================================================
   FUNCTION IMPLEMENTATIONS
   ========================================================================== */

// Header shrinking & navigation active link highlighting
function initHeaderScroll() {
    const header = document.getElementById("header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {
        // Shrink header on scroll
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Highlight active link
        let currentSectionId = "";
        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.clientHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSectionId = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.parentElement.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.parentElement.classList.add("active");
            }
        });
    });
}

// Mobile navigation menu toggle
function initMobileNav() {
    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("nav-menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        const icon = toggle.querySelector("i");
        if (menu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Close menu when clicking a link
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
            toggle.querySelector("i").className = "fa-solid fa-bars";
        });
    });
}

// Populate Project General Info (Phần I)
function populateGeneralInfo() {
    document.getElementById("proj-title").textContent = PROJECT_INFO.title;
    document.getElementById("proj-lead").textContent = PROJECT_INFO.leadUnit;

    const partnersContainer = document.getElementById("proj-partners");
    partnersContainer.innerHTML = PROJECT_INFO.partners.map(p => `
        <li>
            <strong>${p.name}:</strong> ${p.role}
        </li>
    `).join("");

    document.getElementById("proj-time").textContent = PROJECT_INFO.general.timeline;
    document.getElementById("proj-loc").textContent = PROJECT_INFO.general.location;
    document.getElementById("proj-budget").textContent = PROJECT_INFO.general.budget;
    document.getElementById("proj-scope").textContent = PROJECT_INFO.targets.scope;
    document.getElementById("proj-participants").textContent = PROJECT_INFO.targets.participants;
}

// Render climate warning stats (Phần II)
function renderClimateStats() {
    const container = document.getElementById("climate-stats-container");
    if (!container) return;

    const stats = [
        { val: `+${CLIMATE_WARNING.tempRiseMin}°C - ${CLIMATE_WARNING.tempRiseMax}°C`, lbl: "Nhiệt độ TB toàn cầu tăng (2025-2029)" },
        { val: `${CLIMATE_WARNING.probability15C}%`, lbl: "Cơ hội vượt ngưỡng 1.5°C trong 1 năm" },
        { val: `${CLIMATE_WARNING.arcticMultiplier}x`, lbl: "Bắc Cực nóng nhanh gấp toàn cầu" }
    ];

    container.innerHTML = stats.map(s => `
        <div class="c-stat-card">
            <div class="c-stat-val">${s.val}</div>
            <div class="c-stat-lbl">${s.lbl}</div>
        </div>
    `).join("");
}

// Render core goal cards (Phần III)
function renderCoreGoals() {
    const container = document.getElementById("goals-container");
    if (!container) return;

    container.innerHTML = CORE_GOALS.map((goal, idx) => `
        <div class="goal-card" data-aos="fade-up" data-aos-delay="${idx * 100}">
            <div class="goal-number">${goal.value}</div>
            <div class="goal-unit">${goal.unit}</div>
            <h4 style="margin-bottom: 0.5rem; color: white; font-size: 1rem;">${goal.title}</h4>
            <p class="goal-desc">${goal.description || goal.desc}</p>
        </div>
    `).join("");
}

// Render Implementation Phases (Phần III)
function renderPhases() {
    const container = document.getElementById("phases-container");
    if (!container) return;

    container.innerHTML = IMPLEMENTATION_PHASES.map((phase, idx) => `
        <div class="phase-step" data-aos="fade-up" data-aos-delay="${idx * 150}">
            <span class="phase-num">Giai đoạn 0${idx + 1}</span>
            <h4>${phase.phase.split(':')[1]?.trim() || phase.phase}</h4>
            <span class="phase-duration"><i class="fa-regular fa-clock"></i> Thời gian: ${phase.duration}</span>
            <ul class="phase-details">
                ${phase.details.map(detail => `<li>${detail}</li>`).join("")}
            </ul>
        </div>
    `).join("");
}

// Initialize & render 6-Pillar Hexagon Model (Phần VII)
let activePillarId = 1;
function initHexagonPillars() {
    const nodesContainer = document.getElementById("hexagon-nodes-container");
    const linesSvg = document.getElementById("hexagon-lines-svg");
    if (!nodesContainer || !linesSvg) return;

    nodesContainer.innerHTML = "";
    linesSvg.innerHTML = "";

    const radius = 38; // Radius in percent

    PILLARS_DATA.forEach((pillar, idx) => {
        const angleDeg = idx * 60; // 0, 60, 120, 180, 240, 300
        const angleRad = (angleDeg * Math.PI) / 180;
        
        // Calculate coordinates relative to center (50%, 50%)
        const x = 50 + radius * Math.sin(angleRad);
        const y = 50 - radius * Math.cos(angleRad);

        // Render nodes
        const node = document.createElement("div");
        node.className = `pillar-node ${pillar.id === activePillarId ? 'active' : ''}`;
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;
        node.setAttribute("data-id", pillar.id);
        node.innerHTML = `
            <i class="fa-solid ${pillar.icon}"></i>
            <span class="node-num">${pillar.id}</span>
        `;
        nodesContainer.appendChild(node);

        // Render connection lines
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", "50%");
        line.setAttribute("y1", "50%");
        line.setAttribute("x2", `${x}%`);
        line.setAttribute("y2", `${y}%`);
        line.setAttribute("id", `line-pillar-${pillar.id}`);
        if (pillar.id === activePillarId) {
            line.classList.add("active");
        }
        linesSvg.appendChild(line);

        // Click Event listener
        node.addEventListener("click", () => {
            selectPillar(pillar.id);
        });
    });

    // Initial load of content
    updatePillarDetails(activePillarId);
}

function selectPillar(id) {
    activePillarId = id;
    
    // Update active node
    document.querySelectorAll(".pillar-node").forEach(node => {
        node.classList.remove("active");
        if (parseInt(node.getAttribute("data-id")) === id) {
            node.classList.add("active");
        }
    });

    // Update active connection lines
    document.querySelectorAll(".hexagon-svg line").forEach(line => {
        line.classList.remove("active");
    });
    const activeLine = document.getElementById(`line-pillar-${id}`);
    if (activeLine) {
        activeLine.classList.add("active");
    }

    // Update info details with animations
    const infoBox = document.getElementById("pillar-info-box");
    infoBox.style.opacity = "0";
    infoBox.style.transform = "translateX(20px)";
    
    setTimeout(() => {
        updatePillarDetails(id);
        infoBox.style.opacity = "1";
        infoBox.style.transform = "translateX(0)";
    }, 200);
}

function updatePillarDetails(id) {
    const infoBox = document.getElementById("pillar-info-box");
    const data = PILLARS_DATA.find(p => p.id === id);
    if (!data || !infoBox) return;

    infoBox.innerHTML = `
        <div class="pillar-info-header">
            <div class="pillar-info-icon">
                <i class="fa-solid ${data.icon}"></i>
            </div>
            <div class="pillar-info-title">
                <span>Khối liên kết ${data.id} / 6</span>
                <h3>${data.title}</h3>
            </div>
        </div>
        <div style="font-weight: 600; color: var(--text-highlight); margin-bottom: 1rem; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.05em;">
            Vai trò cốt lõi: ${data.role}
        </div>
        <ul class="pillar-info-details">
            ${data.details.map(detail => `<li>${detail}</li>`).join("")}
        </ul>
    `;
}

// Render Expected Benefits & Budget (Phần IV & V)
function renderBenefitsAndBudget() {
    // Expected benefits
    document.getElementById("benefits-env-list").innerHTML = EXPECTED_BENEFITS.environment.map(item => `
        <li>${item}</li>
    `).join("");
    
    document.getElementById("benefits-soc-list").innerHTML = EXPECTED_BENEFITS.social.map(item => `
        <li>${item}</li>
    `).join("");

    // Financial budget
    document.getElementById("budget-sources-list").innerHTML = FINANCIAL_BUDGET.sources.map(item => `
        <li>${item}</li>
    `).join("");

    document.getElementById("budget-expenses-list").innerHTML = FINANCIAL_BUDGET.expenses.map(item => `
        <li>${item}</li>
    `).join("");
}

// Render Recommendations (Phần VIII)
function renderRecommendations() {
    const container = document.getElementById("recommendations-list");
    if (!container) return;

    container.innerHTML = PROJECT_RECOMMENDATIONS.map(rec => `
        <li>${rec}</li>
    `).join("");
}

// Render Legal basis tab switcher (Phụ lục)
function switchLegalTab(tab) {
    const listContainer = document.getElementById("legal-list-container");
    const centralBtn = document.getElementById("btn-central-laws");
    const localBtn = document.getElementById("btn-local-laws");
    if (!listContainer || !centralBtn || !localBtn) return;

    if (tab === 'central') {
        centralBtn.classList.add("active");
        localBtn.classList.remove("active");
        listContainer.innerHTML = LEGAL_BASIS.central.map(doc => `<li>${doc}</li>`).join("");
    } else {
        localBtn.classList.add("active");
        centralBtn.classList.remove("active");
        listContainer.innerHTML = LEGAL_BASIS.local.map(doc => `<li>${doc}</li>`).join("");
    }
}

// Render Press links (Phụ lục)
function renderPressLinks() {
    const container = document.getElementById("press-links-container");
    if (!container) return;

    container.innerHTML = NEWS_LINKS.map(link => `
        <li>
            <a href="${link.url}" target="_blank">
                <div>
                    <span class="press-title">${link.title}</span>
                    <span class="press-src"><i class="fa-regular fa-newspaper"></i> ${link.source}</span>
                </div>
                <i class="fa-solid fa-arrow-up-right-from-square press-icon"></i>
            </a>
        </li>
    `).join("");
}

// Drag Image Comparison Slider (Phần II)
function initImageComparison() {
    const container = document.getElementById("image-comparison");
    const slider = document.getElementById("comparison-slider");
    const afterImg = document.getElementById("comparison-after-img");
    if (!container || !slider || !afterImg) return;

    let active = false;

    function moveSlider(x) {
        let rect = container.getBoundingClientRect();
        let position = ((x - rect.left) / rect.width) * 100;
        
        if (position < 0) position = 0;
        if (position > 100) position = 100;

        slider.style.left = `${position}%`;
        afterImg.style.clipPath = `inset(0 0 0 ${position}%)`;
    }

    // Mouse events
    slider.addEventListener("mousedown", () => { active = true; });
    window.addEventListener("mouseup", () => { active = false; });
    
    window.addEventListener("mousemove", (e) => {
        if (!active) return;
        moveSlider(e.clientX);
    });

    // Touch events (for mobile)
    slider.addEventListener("touchstart", () => { active = true; });
    window.addEventListener("touchend", () => { active = false; });
    
    window.addEventListener("touchmove", (e) => {
        if (!active) return;
        moveSlider(e.touches[0].clientX);
    });
}
