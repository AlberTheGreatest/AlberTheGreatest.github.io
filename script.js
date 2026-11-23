/* Albert Shamaev · Portfolio · content + interactions */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Video lengths (seconds) ---------- */
const DUR = {
  bellavista: 23, solea: 21, aurasync: 35, royalty: 21, "diamond-rain": 13, "sketch-to-ring": 29,
  bride: 35, "craft-to-love": 43, "made-by-hand": 60, "shoot-days": 60,
  mia: 13, "ring-guide": 17, natalie: 11, eleanor: 17,
  "three-points": 136, "lb-beauty": 54, "kevin-intro": 40, lidor: 151, tomorrow: 236, "two-am": 30,
  bulgaryo: 18, retro: 52, "look-14": 52, "dark-style": 10
};
const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
$$(".card[data-v]").forEach(c => { const d = $(".dur", c); if (d && DUR[c.dataset.v]) d.textContent = fmt(DUR[c.dataset.v]); });

/* ---------- Photo series ---------- */
const P = id => ({ thumb: `assets/photo/thumb/${id}.jpg`, full: `assets/photo/${id}.jpg` });
const SERIES = [
  { key: "fashion", name: "Fashion",
    desc: "Editorial, campaign and model sessions. Movement, attitude and presence held in a single frame.",
    items: [
      ["a25983_d2ac6511e7514a8e98efae01ecfdc7bf", "Leather coat & red fedora, Tel Aviv"],
      ["a25983_be6c5478c89548b084bffbe5f9fb388f", "Red blazer, pastel shutters"],
      ["a25983_42f76f7ebb994640a0cda9a2766de9e1", "Dancer on a stone balcony"],
      ["a25983_91d6329a5da04ef6b96bf95a6f4d8e8f", "Green dress, neoclassical columns"],
      ["a25983_1e6e5e6eb8434e6787f34a74ff1b9c21", "Slip dress, graffiti & cranes"],
      ["a25983_d5380e6b4a194bf89f422392b2f27478", "Gingham & white sunglasses"],
      ["a25983_b5c8cd81bcd444f4bacac35d709a2556", "Backlit on a coastal path"],
      ["a25983_35d50006567b4c0d9199bd9409b11e6a", "Tire swing, blue sky"],
      ["a25983_80b03aa7772e474d8ad9c89ec94c9a27", "Motion under blue stage light"],
      ["a25983_e363dcfaf3204331bdb3cf730dd8f817", "Climb"]
    ] },
  { key: "fragments", name: "Fragments of Presence",
    desc: "Unstaged street photography from Tel Aviv: gestures, postures and fleeting moments between strangers.",
    items: [
      ["a25983_84738b3003924b5eac6bd9e9a47e4b13", "Fedora, bicycle, green crate"],
      ["a25983_1c68d2abcb804ccaaf72f63d84ed50e6", "Waiting to cross Dizengoff"],
      ["a25983_a2270dbdc998418e884364ae137eeb43", "Above the Bauhaus rooftops"],
      ["a25983_8bf26ffa554a411ea4c2b6ea78c64d88", "Busker on Rothschild"],
      ["a25983_fc5b053a9da74357b730ff167abf68c6", "Chairs on a motorcycle"],
      ["a25983_e772d271ffcc4dc0905a4ae4b624eebe", "Reflection, taqueria window"],
      ["a25983_1262d732bf324b20b984b143164eab59", "Concrete"],
      ["a25983_aed6ee7616cb42abadecd54c300bae22", "Lottery, rainy Allenby"],
      ["a25983_a031acb7255c42ec90ccd19db84ebb04", "Rothschild Blvd portrait"],
      ["a25983_1611856fb9eb4b3f9de525ffe4844b9b", "Watching, Dizengoff Square"]
    ] },
  { key: "october", name: "October 7",
    desc: "Documentary photographs from Tel Aviv and the Gaza envelope in the months after October 7.",
    items: [
      ["a25983_7d5a4c2f8bea410fbf916aa3e07e43a6", "Teddy bear on a Tel Aviv bench for the kidnapped children"],
      ["a25983_08998a1f77974c0598edd534ee714595", "Protest on Dizengoff"],
      ["a25983_579e7171966e4947afc717a50adff593", "Empty yellow chairs installation"],
      ["a25983_4177e5a06bc34ef7abf8bf37028af53b", "Info booth at a hostage rally"],
      ["a25983_473f42a99ee34e67af43a9c2a66de6e4", "Vigil poster with Israeli flags"],
      ["a25983_f319ced84cca4bf7bf04542f58c1086f", "Gaza border, Iron Swords"],
      ["a25983_4332019f3bf7418bbe6d7ee5d7276fcf", "Soldier on a bench, supply bags"],
      ["a25983_ef9e62196fbf45578725e0e6e561204c", "Rothschild Boulevard memorial"],
      ["a25983_cdc0df4f073847dcb099ada55e686c1d", "Hostage Square, Tel Aviv"],
      ["a25983_9263af54482544218e8a1eca632b7ccc", "Night-long vigil, Tel Aviv"],
      ["a25983_4173be0fcd25499a93666a29577525c9", "“Alive” poster on a Tel Aviv pole"],
      ["a25983_987354223cc94fba8efeda5181c806d5", "Merkava IV, Gaza envelope"],
      ["a25983_4c56c2645e7d4ed29dde92f28d759e31", "Off-duty soldier at dusk"],
      ["a25983_186dfa979d334b53a4f9b0f80a788dfc", "“Our brothers are bringing you home”"]
    ] },
  { key: "thailand", name: "Thailand",
    desc: "A visual diary of light, colour and people across temples, rural roads, night fire shows and jungle mist.",
    items: [
      ["a25983_d84afc29d40946e1bdb319387c658974", "Naga staircase in the mist, Chiang Rai"],
      ["a25983_f294d45c282042198922ebdb6ff54ade", "Blessing in a red-gold temple"],
      ["a25983_c21b4e670bfc4bae99396273d615ff68", "Monks in saffron robes"],
      ["a25983_fee258a2bf474174b2dc937d4a60b3eb", "Fire dancer"],
      ["a25983_47b9ce84666446eea87c6bab1c60cb22", "Market stall"],
      ["a25983_301fae08657f4dc0b86939495ad1dc43", "Terraced paddies at dusk, Pai"],
      ["a25983_6b3018df995c4ff4a09a3f0bd25ec82b", "Crossing blazing staffs"],
      ["a25983_f34fbd28e124404fb900e3e174867c11", "Monk and motorbike"],
      ["a25983_24fd3046f46741d0a6f728cb57837b95", "Arms out, jungle road"],
      ["a25983_ffe570c39c294ff48db126fa94835390", "Bamboo fence, hillside farmer"],
      ["a25983_39fdbbaa1b59401393d17c9d53600f0a", "Bangla Road, Phuket"]
    ] }
];
const ORDER = ["thailand", "fashion", "october", "fragments"];
SERIES.sort((a, b) => ORDER.indexOf(a.key) - ORDER.indexOf(b.key));
const SHOW = 6;
const tabs = $("#tabs"), grid = $("#seriesGrid"), more = $("#seriesMore");
let current = SERIES[0];
const seriesList = s => s.items.map(([id, c]) => ({ type: "img", src: P(id).full, cap: `${s.name} · ${c}` }));
function showSeries(s) {
  current = s;
  $$("button", tabs).forEach(b => b.setAttribute("aria-selected", b.dataset.key === s.key));
  $("#seriesDesc").textContent = s.desc;
  $("#seriesCount").textContent = `${s.items.length} photos`;
  grid.innerHTML = "";
  s.items.slice(0, SHOW).forEach(([id, c], i) => {
    const f = document.createElement("figure");
    f.className = "fade bw"; f.style.animationDelay = `${i * .06}s`; f.dataset.cursor = "View";
    f.innerHTML = `<img src="${P(id).thumb}" alt="${c}" loading="lazy"><figcaption class="mono">${c}</figcaption>`;
    f.addEventListener("click", () => openPhotos(seriesList(s), i));
    grid.appendChild(f);
    if (window.colorObserver) window.colorObserver.observe(f);
  });
  more.textContent = `View all ${s.items.length} →`;
}
SERIES.forEach(s => {
  const b = document.createElement("button");
  b.textContent = s.name; b.dataset.key = s.key; b.setAttribute("role", "tab");
  b.addEventListener("click", () => showSeries(s));
  tabs.appendChild(b);
});
more.addEventListener("click", () => openPhotos(seriesList(current), 0));

/* ==========================================================
   MOODBOARDS (every film) · title opens the board, image plays the film
   ========================================================== */
const caseEl = $("#case"), caseInner = $("#caseInner"), caseScroll = $("#caseScroll");
const FILM_ORDER = $$(".card[data-v]").map(c => c.dataset.v).filter(v => MB[v]);
const pad2 = n => String(n).padStart(2, "0");

function openCase(key) {
  const m = MB[key]; if (!m) return;
  const i = FILM_ORDER.indexOf(key), n = FILM_ORDER.length;
  const prev = FILM_ORDER[(i + n - 1) % n], next = FILM_ORDER[(i + 1) % n];
  const card = $(`.card[data-v="${key}"]`);
  const shots = m.labels.map((l, k) => `<figure class="${k === 0 ? "lead" : ""}" style="animation-delay:${.12 + k * .07}s"><img src="assets/img/mb/${key}-${k + 1}.jpg" alt="${m.t.join(" ")}, ${l}"><b class="chip">${l}</b></figure>`).join("");
  caseInner.innerHTML = `
    <div class="mb ${m.v ? "is-v" : ""}">
      <div class="mb-side">
        <p class="mb-kicker">Mood board <i></i> ${pad2(i + 1)}</p>
        <h2 class="mb-title">${m.t[0]}<em>${m.t[1]}</em></h2>
        <p class="mb-desc">${m.desc}</p>
        <div class="mb-tags">${m.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <dl class="mb-meta">${m.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
        <button class="mb-play" data-playfilm><b></b>Play the film <small>${card ? $(".dur", card).textContent : ""}</small></button>
      </div>
      <div class="mb-grid">${shots}</div>
      <div class="mb-foot">
        <div><p class="mb-label">Palette, sampled from the film</p>
          <div class="mb-pal">${m.pal.map(([nm, hx], k) => `<div style="animation-delay:${.4 + k * .05}s"><span style="background:${hx}"></span><b>${nm}</b><small>${hx}</small></div>`).join("")}</div></div>
        <div><p class="mb-label">Typography</p>
          <div class="mb-type"><span class="aa">Aa</span><span class="it">${m.phrase}</span></div>
          <p class="mb-typenote"><b>JetBrains Mono</b> Instrument Serif · title line</p></div>
        <div class="mb-beats-wrap"><p class="mb-label">Story beats</p>
          <ol class="mb-beats">${m.beats.map(([t, d], k) => `<li><small>${pad2(k + 1)}</small><b>${t}</b><span>${d}</span></li>`).join("")}</ol></div>
      </div>
    </div>
    <div class="mb-film" id="mbFilm"></div>
    <div class="case-nav">
      <button data-go="${prev}"><small>← Previous board</small>${MB[prev].t.join(" ")}</button>
      <button data-go="${next}" style="text-align:right"><small>Next board →</small>${MB[next].t.join(" ")}</button>
    </div>`;
  $$("[data-go]", caseInner).forEach(b => b.addEventListener("click", () => openCase(b.dataset.go)));
  const frames = m.labels.map((l, j) => ({ type: "img", src: `assets/img/mb/${key}-${j + 1}.jpg`, cap: `${m.t.join(" ")} · ${l}` }));
  $$(".mb-grid figure", caseInner).forEach((f, k) => f.addEventListener("click", () => open(frames, k)));
  $("[data-playfilm]", caseInner).addEventListener("click", () => {
    const box = $("#mbFilm");
    if (!box.firstChild) {
      box.innerHTML = `<video src="assets/video/${key}.mp4" poster="${card ? $("img", card).getAttribute("src") : ""}" controls playsinline autoplay></video>`;
      box.classList.add(m.v ? "is-v" : "is-w");
    }
    box.scrollIntoView({ behavior: "smooth", block: "center" });
    $("video", box).play().catch(() => {});
  });
  caseScroll.scrollTop = 0;
  if (!caseEl.classList.contains("open")) { caseEl.classList.add("open"); caseEl.setAttribute("aria-hidden", "false"); lockScroll(true); }
  $("#caseClose").focus({ preventScroll: true });
}
function closeCase() {
  const v = $("video", caseInner); if (v) v.pause();
  caseEl.classList.remove("open"); caseEl.setAttribute("aria-hidden", "true"); lockScroll(false);
  setTimeout(() => { if (!caseEl.classList.contains("open")) caseInner.innerHTML = ""; }, 500);
}
$("#caseClose").addEventListener("click", closeCase);

/* ==========================================================
   CONTACT POPOVER
   ========================================================== */
const pop = $("#pop");
const openPop = () => { pop.classList.add("open"); pop.setAttribute("aria-hidden", "false"); lockScroll(true); setTimeout(() => $(".pop-btn", pop).focus(), 50); };
const closePop = () => { pop.classList.remove("open"); pop.setAttribute("aria-hidden", "true"); lockScroll(false); };
$$("[data-contact]").forEach(b => b.addEventListener("click", openPop));
$("#popClose").addEventListener("click", closePop);
pop.addEventListener("click", e => { if (e.target === pop) closePop(); });

/* ==========================================================
   LIGHTBOX
   ========================================================== */
const lb = $("#lb"), stage = $("#lbStage"), cap = $("#lbCap");
let list = [], idx = 0, lastFocus = null, locks = 0;
function lockScroll(on) { locks = Math.max(0, locks + (on ? 1 : -1)); document.body.style.overflow = locks ? "hidden" : ""; if (window.lenis) locks ? lenis.stop() : lenis.start(); }

function render() {
  const it = list[idx];
  stage.innerHTML = "";
  if (it.type === "video") {
    const v = document.createElement("video");
    v.src = it.src; v.poster = it.poster; v.controls = true; v.autoplay = true; v.playsInline = true; v.setAttribute("playsinline", "");
    stage.appendChild(v); v.play().catch(() => {});
  } else {
    const im = document.createElement("img"); im.src = it.src; im.alt = it.cap; stage.appendChild(im);
  }
  cap.textContent = list.length > 1 ? `${it.cap}   ·   ${idx + 1} / ${list.length}` : it.cap;
  $("#lbPrev").hidden = $("#lbNext").hidden = list.length < 2;
}
function open(items, i) {
  list = items; idx = i; lastFocus = document.activeElement;
  lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); lockScroll(true);
  render(); $("#lbClose").focus();
}
function close() {
  lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); lockScroll(false); stage.innerHTML = "";
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}
const step = d => { idx = (idx + d + list.length) % list.length; render(); };
const openPhotos = (items, i) => open(items, i);
$("#lbClose").addEventListener("click", close);
$("#lbPrev").addEventListener("click", () => step(-1));
$("#lbNext").addEventListener("click", () => step(1));
lb.addEventListener("click", e => { if (e.target === lb || e.target === stage) close(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { if (lb.classList.contains("open")) close(); else if (pop.classList.contains("open")) closePop(); else if (caseEl.classList.contains("open")) closeCase(); else if (document.body.classList.contains("menu-open")) setMenu(false); }
  if (!lb.classList.contains("open")) return;
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});
let tx = 0;
lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 60 && list.length > 1 && list[idx].type === "img") step(dx < 0 ? 1 : -1);
});

/* Video cards: the image plays the film (each row is a playlist), the title opens the moodboard */
const hasMouse = matchMedia("(hover:hover) and (pointer:fine)").matches;
const asButton = (el, label, fn) => {
  el.setAttribute("role", "button"); el.setAttribute("tabindex", "0"); el.setAttribute("aria-label", label);
  el.addEventListener("click", fn);
  el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } });
};
$$("[data-group]").forEach(g => {
  const cards = $$(".card[data-v]", g);
  const items = cards.map(c => ({ type: "video", src: `assets/video/${c.dataset.v}.mp4`, poster: $("img", c).getAttribute("src"), cap: c.dataset.t }));
  cards.forEach((c, i) => {
    const frame = $(".frame", c), meta = $(".meta", c);
    frame.dataset.cursor = "Play";
    asButton(frame, `Play ${c.dataset.t}`, () => open(items, i));
    if (MB[c.dataset.v]) {
      const h = $("h4", meta);
      h.insertAdjacentHTML("afterend", `<span class="mb-cue mono">✱ Moodboard</span>`);
      meta.classList.add("has-mb"); meta.dataset.cursor = "Moodboard";
      asButton(meta, `Open the moodboard for ${c.dataset.t}`, () => openCase(c.dataset.v));
    }
    if (hasMouse) {
      let v = null, t = null;
      frame.addEventListener("mouseenter", () => {
        t = setTimeout(() => {
          if (!v) { v = document.createElement("video"); v.muted = true; v.loop = true; v.playsInline = true; v.preload = "auto"; v.src = items[i].src; frame.appendChild(v); }
          c.classList.add("previewing"); v.currentTime = Math.min(2, (DUR[c.dataset.v] || 4) / 4); v.play().catch(() => {});
        }, 380);
      });
      frame.addEventListener("mouseleave", () => { clearTimeout(t); c.classList.remove("previewing"); if (v) v.pause(); });
    }
  });
});

/* Photography grid */
$$("[data-photos]").forEach(g => {
  const imgs = $$("img", g);
  const items = imgs.map(im => ({ type: "img", src: im.dataset.full || im.src, cap: im.alt }));
  imgs.forEach((im, i) => im.parentElement.addEventListener("click", () => openPhotos(items, i)));
});

/* ==========================================================
   MOTION: split headings, reveals, colour-on-view (touch), cursor, progress, parallax
   ========================================================== */
$$(".split").forEach(el => {
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const w = document.createElement("span"); w.className = "w";
          const inner = document.createElement("span"); inner.textContent = part; w.appendChild(inner); frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
    });
  };
  walk(el);
  $$(".w>span", el).forEach((s, k) => s.style.transitionDelay = `${k * .07}s`);
});

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
$$(".reveal, .split, .sec-head").forEach(el => io.observe(el));

/* On touch screens there is no hover: colour fades in while a card sits mid-screen */
if (!hasMouse) {
  const co = window.colorObserver = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("inview", e.isIntersecting)),
    { rootMargin: "-30% 0px -30% 0px" });
  $$(".bw, .tile").forEach(el => co.observe(el));
}

/* Cursor: a small dot that eases after the mouse and swells slightly over anything clickable */
if (hasMouse) {
  const cur = $("#cursor");
  document.body.classList.add("has-cursor");
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; cur.classList.add("on"); }, { passive: true });
  document.addEventListener("mouseleave", () => cur.classList.remove("on"));
  (function loop() { cx += (x - cx) * .22; cy += (y - cy) * .22; cur.style.transform = `translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(loop); })();
  document.addEventListener("mouseover", e => cur.classList.toggle("hover", !!e.target.closest("[data-cursor],a,button,[role=button]")));
}

/* Smooth wheel scrolling (Lenis) · native touch scrolling on phones */
if (window.Lenis && hasMouse && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
  window.lenis = new Lenis({ duration: 1.1, easing: t => 1 - Math.pow(1 - t, 4), smoothWheel: true });
  (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(performance.now());
}

/* Scroll: progress bar, nav state, hero parallax */
const nav = $("#nav"), bar = $("#progress"), heroMedia = $(".hero-media");
let ticking = false;
const onScroll = () => {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    nav.classList.toggle("scrolled", y > 40);
    if (y < innerHeight) heroMedia.style.transform = `translate3d(0,${(y * .2).toFixed(1)}px,0)`;
    ticking = false;
  });
};
addEventListener("scroll", onScroll, { passive: true });

/* Active nav link */
const links = $$(".nav-links a");
const so = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("section[id]").forEach(s => so.observe(s));

/* Mobile menu */
const menuBtn = $("#menuBtn");
function setMenu(on) {
  document.body.classList.toggle("menu-open", on);
  menuBtn.setAttribute("aria-expanded", on);
  menuBtn.setAttribute("aria-label", on ? "Close menu" : "Open menu");
  lockScroll(on);
}
menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));

/* Anchors: land exactly even while lazy images load */
$$('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
  const id = a.getAttribute("href"), target = id === "#top" ? document.body : $(id);
  if (!target) return;
  e.preventDefault();
  if (document.body.classList.contains("menu-open")) setMenu(false);
  history.replaceState(null, "", id);
  const go = () => window.lenis ? lenis.scrollTo(id === "#top" ? 0 : target, { duration: 1.4 }) : scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + scrollY), behavior: "smooth" });
  go(); setTimeout(go, 900);
}));
showSeries(SERIES[0]);
