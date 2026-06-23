import { logout } from "./session.js";

const EPREUVE_LABELS = {
  DM: "Double Messieurs",
  DD: "Double Dames",
  ALL: "Toutes les épreuves"
};

const EPREUVES = ["DM", "DD"];

const headerMount = document.getElementById("jatHeader");

const currentPage = location.pathname.split("/").pop() || "index.html";
const needsZoneSelector = document.body.dataset.zoneSelector !== "none";

function navClass(page){
  return currentPage === page ? "jat-nav-link primary" : "jat-nav-link";
}

function getSavedZone(){
  let epreuve = "DM";

  try{
    const savedEpreuve = localStorage.getItem("tsck_jat_epreuve");
    if(EPREUVES.includes(savedEpreuve)) epreuve = savedEpreuve;
  }catch(error){}

  return { categorie: "Seniors", epreuve };
}

function saveZone(epreuve){
  try{
    localStorage.setItem("tsck_jat_epreuve", epreuve);
  }catch(error){}
}

function emitZoneChange(epreuve){
  document.dispatchEvent(new CustomEvent("jatZoneChange", {
    detail: {
      categorie: "Seniors",
      epreuve,
      label: EPREUVE_LABELS[epreuve] || "Toutes les épreuves"
    }
  }));
}

function centerActiveNav(){
  const nav = document.querySelector(".jat-nav");
  const active = document.querySelector(".jat-nav-link.primary");

  if(!nav || !active) return;

  const navRect = nav.getBoundingClientRect();
  const activeRect = active.getBoundingClientRect();
  const activeCenter = active.offsetLeft + (activeRect.width / 2);
  const target = activeCenter - (navRect.width / 2);

  nav.scrollTo({
    left: Math.max(0, target),
    behavior: "auto"
  });
}

function centerActiveNavAfterLoad(){
  centerActiveNav();
  requestAnimationFrame(centerActiveNav);
  setTimeout(centerActiveNav, 80);
  setTimeout(centerActiveNav, 250);
  setTimeout(centerActiveNav, 600);
}

function injectStyles(){
  if(document.getElementById("jatHeaderStyles")) return;

  const style = document.createElement("style");
  style.id = "jatHeaderStyles";
  style.textContent = `
    :root{
      --palm:#0b7a3b;
      --palm-dark:#064d28;
      --palm-light:#15a658;
      --navy:#06284a;
      --navy-dark:#03172b;
      --sun:#ffd21f;
      --sun-dark:#f3b800;
      --sand:#f4d9a4;
      --container:1180px;

      --jat-header-h:158px;
      --jat-zone-gap:14px;
      --jat-zone-h:58px;
      --jat-total-top:230px;
    }

    .jat-container{
      width:min(var(--container), calc(100% - 28px));
      margin:0 auto;
    }

    .jat-site-header{
      position:fixed;
      top:0;
      left:0;
      right:0;
      z-index:1000;
      background:
        radial-gradient(circle at 8% 0%, rgba(255,210,31,.30), transparent 28%),
        radial-gradient(circle at 92% 0%, rgba(244,217,164,.22), transparent 28%),
        linear-gradient(135deg,var(--palm-dark),var(--palm),var(--palm-light));
      box-shadow:0 10px 26px rgba(6,77,40,.34);
      border-bottom:4px solid var(--sun);
    }

    .jat-header-inner{
      min-height:var(--jat-header-h);
      display:grid;
      grid-template-columns:80px 1fr 80px;
      grid-template-rows:auto auto;
      align-items:center;
      gap:10px 18px;
      padding:12px 0 14px;
    }

    .jat-header-logo{
      width:80px;
      height:80px;
      display:flex;
      align-items:center;
      justify-content:center;
      background:transparent;
      border:none;
      box-shadow:none;
      border-radius:0;
    }

    .jat-header-logo img{
      max-width:100%;
      max-height:100%;
      object-fit:contain;
      filter:drop-shadow(0 6px 10px rgba(0,0,0,.22));
    }

    .jat-header-title{
      text-align:center;
      color:#fff;
      text-shadow:0 6px 18px rgba(0,0,0,.26);
    }

    .jat-header-title strong{
      display:block;
      font-size:clamp(22px,4vw,42px);
      line-height:.95;
      letter-spacing:-.04em;
      text-transform:uppercase;
      font-weight:1000;
    }

    .jat-header-title span{
      display:block;
      margin-top:6px;
      color:var(--sun);
      font-size:13px;
      font-weight:1000;
      text-transform:uppercase;
      letter-spacing:.08em;
    }

    .jat-nav-wrap{
      grid-column:1 / 4;
      position:relative;
      overflow:hidden;
      padding:0 34px;
    }

    .jat-nav-wrap::before{
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      left:0;
      width:40px;
      z-index:2;
      pointer-events:none;
      background:linear-gradient(90deg, rgba(6,77,40,.98), rgba(6,77,40,0));
    }

    .jat-nav-wrap::after{
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      right:0;
      width:40px;
      z-index:2;
      pointer-events:none;
      background:linear-gradient(270deg, rgba(11,122,59,.98), rgba(11,122,59,0));
    }

    .jat-nav-arrow{
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      z-index:3;
      width:28px;
      height:28px;
      border-radius:999px;
      display:flex;
      align-items:center;
      justify-content:center;
      background:rgba(255,210,31,.96);
      color:var(--navy-dark);
      font-size:20px;
      font-weight:1000;
      box-shadow:0 6px 14px rgba(0,0,0,.20);
      pointer-events:none;
    }

    .jat-nav-arrow.left{left:2px;}
    .jat-nav-arrow.right{right:2px;}

    .jat-nav{
      display:flex;
      gap:10px;
      overflow-x:auto;
      padding:2px 4px;
      scrollbar-width:none;
      -webkit-overflow-scrolling:touch;
      scroll-behavior:smooth;
    }

    .jat-nav::-webkit-scrollbar{display:none;}

    .jat-nav-link{
      flex:0 0 auto;
      min-height:42px;
      padding:10px 17px;
      border-radius:999px;
      background:rgba(255,255,255,.92);
      color:var(--navy);
      font-size:14px;
      font-weight:900;
      white-space:nowrap;
      box-shadow:0 8px 16px rgba(0,0,0,.14);
      text-decoration:none;
    }

    .jat-nav-link.primary{
      background:linear-gradient(180deg,var(--sun),var(--sun-dark));
      color:var(--navy-dark);
      box-shadow:0 10px 20px rgba(255,210,31,.22);
    }

    .jat-zonebar{
      position:fixed;
      top:calc(var(--jat-header-h) + var(--jat-zone-gap));
      left:0;
      right:0;
      z-index:998;
      background:
        radial-gradient(circle at 8% 0%, rgba(255,210,31,.28), transparent 28%),
        radial-gradient(circle at 92% 0%, rgba(244,217,164,.20), transparent 28%),
        linear-gradient(135deg,var(--navy-dark),var(--navy),var(--palm));
      box-shadow:0 8px 18px rgba(16,24,40,.12);
      border-bottom:2px solid var(--sun);
      padding:12px 0 14px;
    }

    .jat-zone-inner{
      display:grid;
      gap:8px;
    }

    .jat-zone-line{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:10px;
      overflow-x:auto;
      scrollbar-width:none;
      -webkit-overflow-scrolling:touch;
      padding:3px 2px;
    }

    .jat-zone-line::-webkit-scrollbar{display:none;}

    .jat-zone-btn{
      flex:0 0 auto;
      min-height:34px;
      padding:7px 18px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.32);
      background:rgba(255,255,255,.88);
      color:var(--navy-dark);
      font-size:13px;
      font-weight:1000;
      cursor:pointer;
      box-shadow:0 5px 12px rgba(16,24,40,.10);
      touch-action:manipulation;
      text-align:center;
      white-space:nowrap;
    }

    .jat-zone-btn[aria-selected="true"],
    .jat-zone-btn.all-active,
    .jat-zone-btn.all-active[aria-selected="true"]{
      background:linear-gradient(180deg,var(--sun),var(--sun-dark));
      color:var(--navy-dark);
      border-color:var(--sun);
      box-shadow:0 8px 18px rgba(255,210,31,.22);
    }

    @media (min-width:760px){
      .jat-header-inner{
        grid-template-columns:100px 1fr 100px;
      }

      .jat-header-logo{
        width:96px;
        height:80px;
      }
    }

    @media (max-width:759px){
      :root{
        --jat-header-h:150px;
        --jat-zone-gap:14px;
        --jat-zone-h:58px;
        --jat-total-top:222px;
      }

      .jat-zone-line{
        justify-content:flex-start;
      }
    }
  `;
  document.head.appendChild(style);
}

function renderHeader(){
  if(!headerMount) return;

  const zone = getSavedZone();

  headerMount.innerHTML = `
    <header class="jat-site-header">
      <div class="jat-container jat-header-inner">
        <div class="jat-header-logo">
          <img src="../assets/img/logo-tsck.png" alt="Tennis Squash Club de Kourou">
        </div>

        <div class="jat-header-title">
          <strong>JAT TSCK</strong>
          <span>Open Beach Tennis — 28 juin 2026</span>
        </div>

        <div class="jat-header-logo">
          <img src="../assets/img/logo-julyana.png" alt="Jul’Yana BT">
        </div>

        <div class="jat-nav-wrap">
          <span class="jat-nav-arrow left">‹</span>
          <nav class="jat-nav" aria-label="Navigation JAT">
            <a class="jat-nav-link" href="../index.html">🏠 Accueil public</a>
            <a class="${navClass("index.html")}" href="index.html">⚖️ JAT</a>
            <a class="${navClass("verification.html")}" href="verification.html">✅ Vérification</a>
            <a class="${navClass("programmation.html")}" href="programmation.html">📅 Programmation</a>
            <a class="${navClass("resultats.html")}" href="resultats.html">🏆 Résultats</a>
            <a class="${navClass("classements.html")}" href="classements.html">📊 Classements</a>
            <a class="jat-nav-link" href="#" id="jatBtnLogout">🚪 Déconnexion</a>
          </nav>
          <span class="jat-nav-arrow right">›</span>
        </div>
      </div>
    </header>

    <section class="jat-zonebar">
      <div class="jat-container jat-zone-inner">
        <div class="jat-zone-line" aria-label="Sélection épreuve">
          <button
            class="jat-zone-btn ${needsZoneSelector ? "" : "all-active"}"
            type="button"
            data-jat-epreuve="DM"
            aria-selected="${needsZoneSelector ? String(zone.epreuve === "DM") : "true"}"
          >👨 Double Messieurs</button>

          <button
            class="jat-zone-btn ${needsZoneSelector ? "" : "all-active"}"
            type="button"
            data-jat-epreuve="DD"
            aria-selected="${needsZoneSelector ? String(zone.epreuve === "DD") : "true"}"
          >👩 Double Dames</button>
        </div>
      </div>
    </section>
  `;

  const logoutBtn = document.getElementById("jatBtnLogout");
  if(logoutBtn){
    logoutBtn.onclick = async (event) => {
      event.preventDefault();
      await logout();
      window.location.href = "../index.html";
    };
  }

  if(needsZoneSelector){
    bindZoneButtons(zone.epreuve);
  }else{
    emitZoneChange("ALL");
  }

  centerActiveNavAfterLoad();

  window.addEventListener("resize", () => {
    centerActiveNavAfterLoad();
  });
}

function bindZoneButtons(initialEpreuve){
  let epreuve = initialEpreuve;

  const epreuveBtns = [...document.querySelectorAll("[data-jat-epreuve]")];

  function refresh(){
    epreuveBtns.forEach(btn => {
      btn.setAttribute("aria-selected", btn.dataset.jatEpreuve === epreuve ? "true" : "false");
    });

    saveZone(epreuve);
    emitZoneChange(epreuve);
  }

  epreuveBtns.forEach(btn => {
    btn.onclick = () => {
      epreuve = btn.dataset.jatEpreuve;
      refresh();
    };
  });

  refresh();
}

injectStyles();
renderHeader();
