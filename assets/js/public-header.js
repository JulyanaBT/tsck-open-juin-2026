const headerMount = document.getElementById("publicHeader");

const currentPage = location.pathname.split("/").pop() || "index.html";

function navClass(page){
  return currentPage === page ? "public-nav-link primary" : "public-nav-link";
}

function injectStyles(){
  if(document.getElementById("publicHeaderStyles")) return;

  const style = document.createElement("style");
  style.id = "publicHeaderStyles";
  style.textContent = `
    :root{
      --palm:#0b7a3b;
      --palm-dark:#064d28;
      --palm-light:#15a658;
      --navy:#06284a;
      --navy-dark:#03172b;
      --sun:#ffd21f;
      --sand:#f4d9a4;
      --white:#ffffff;
      --container:1180px;
      --public-header-h:158px;
      --public-total-top:158px;
    }

    .public-container{
      width:min(var(--container), calc(100% - 28px));
      margin:0 auto;
    }

    .public-site-header{
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

    .public-header-inner{
      min-height:var(--public-header-h);
      display:grid;
      grid-template-columns:80px 1fr 80px;
      grid-template-rows:auto auto;
      align-items:center;
      gap:10px 18px;
      padding:12px 0 14px;
    }

    .public-header-logo{
      width:80px;
      height:80px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:22px;
      background:rgba(255,255,255,.12);
      box-shadow:inset 0 0 0 1px rgba(255,255,255,.18);
    }

    .public-header-logo img{
      max-width:100%;
      max-height:100%;
      object-fit:contain;
      filter:drop-shadow(0 6px 10px rgba(0,0,0,.22));
    }

    .public-header-title{
      text-align:center;
      color:#fff;
      text-shadow:0 6px 18px rgba(0,0,0,.26);
    }

    .public-header-title strong{
      display:block;
      font-size:clamp(22px,4vw,42px);
      line-height:.95;
      letter-spacing:-.04em;
      text-transform:uppercase;
      font-weight:1000;
    }

    .public-header-title span{
      display:block;
      margin-top:6px;
      color:var(--sun);
      font-size:13px;
      font-weight:1000;
      text-transform:uppercase;
      letter-spacing:.08em;
    }

    .public-nav-wrap{
      grid-column:1 / 4;
      position:relative;
      overflow:hidden;
      padding:0 34px;
    }

    .public-nav-wrap::before,
    .public-nav-wrap::after{
      content:"";
      position:absolute;
      top:0;
      bottom:0;
      width:40px;
      z-index:2;
      pointer-events:none;
    }

    .public-nav-wrap::before{
      left:0;
      background:linear-gradient(90deg, rgba(6,77,40,.98), rgba(6,77,40,0));
    }

    .public-nav-wrap::after{
      right:0;
      background:linear-gradient(270deg, rgba(11,122,59,.98), rgba(11,122,59,0));
    }

    .public-nav-arrow{
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

    .public-nav-arrow.left{left:2px;}
    .public-nav-arrow.right{right:2px;}

    .public-nav{
      display:flex;
      gap:10px;
      overflow-x:auto;
      padding:2px 4px;
      scrollbar-width:none;
      -webkit-overflow-scrolling:touch;
      scroll-behavior:smooth;
    }

    .public-nav::-webkit-scrollbar{display:none;}

    .public-nav-link{
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

    .public-nav-link.primary{
      background:linear-gradient(180deg,var(--sun),#f3b800);
      color:var(--navy-dark);
      box-shadow:0 10px 20px rgba(255,210,31,.22);
    }

    @media (min-width:760px){
      .public-header-inner{
        grid-template-columns:100px 1fr 100px;
      }

      .public-header-logo{
        width:96px;
        height:80px;
      }
    }

    @media (max-width:759px){
      :root{
        --public-header-h:150px;
        --public-total-top:150px;
      }
    }
  `;
  document.head.appendChild(style);
}

function centerActiveNav(){
  const nav = document.querySelector(".public-nav");
  const active = document.querySelector(".public-nav-link.primary");

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

function renderHeader(){
  if(!headerMount) return;

  headerMount.innerHTML = `
    <header class="public-site-header">
      <div class="public-container public-header-inner">
        <div class="public-header-logo">
          <img src="../assets/img/logo-tsck.png" alt="Tennis Squash Club de Kourou">
        </div>

        <div class="public-header-title">
          <strong>Open BT TSCK</strong>
          <span>28 juin 2026</span>
        </div>

        <div class="public-header-logo">
          <img src="../assets/img/logo-julyana.png" alt="Jul’Yana BT">
        </div>

        <div class="public-nav-wrap">
          <span class="public-nav-arrow left">‹</span>
          <nav class="public-nav" aria-label="Navigation publique">
            <a class="public-nav-link" href="../index.html">🏠 Accueil</a>
            <a class="${navClass("equipes.html")}" href="public/equipes.html">👥 Équipes</a>
            <a class="${navClass("programmation.html")}" href="public/programmation.html">📅 Programmation</a>
            <a class="${navClass("matchs-direct.html")}" href="public/matchs-direct.html">🔴 Match en direct</a>
            <a class="${navClass("reglement.html")}" href="public/reglement.html">📘 Règlement</a>
            <a class="${navClass("tirage.html")}" href="public/tirage.html">🎲 Tirage</a>
            <a class="${navClass("restauration.html")}" href="public/restauration.html">🍽️ Restauration</a>
            <a class="${navClass("contact.html")}" href="public/contact.html">📩 Contact</a>
          </nav>
          <span class="public-nav-arrow right">›</span>
        </div>
      </div>
    </header>
  `;

  centerActiveNavAfterLoad();

  window.addEventListener("resize", () => {
    centerActiveNavAfterLoad();
  });
}

injectStyles();
renderHeader();
