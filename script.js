/* Albert Shamaev · Portfolio · content + interactions */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ---------- Video lengths (seconds) ---------- */
const DUR = {
  bellavista: 23, solea: 21, aurasync: 35, royalty: 21, "diamond-rain": 13, "sketch-to-ring": 29,
  bride: 35, "craft-to-love": 43, "made-by-hand": 60, "shoot-days": 60,
  mia: 13, "ring-guide": 17, natalie: 11, eleanor: 17,
  "three-points": 136, "lb-beauty": 54, "kevin-intro": 40, lidor: 151, tomorrow: 236, "two-am": 30,
  "four-seasons": 18, bulgaryo: 18, retro: 52, "look-14": 52, "red-suit": 11, reel: 33, reel: 33
};
const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
$$(".card[data-v]").forEach(c => { const d = $(".dur", c); if (d && DUR[c.dataset.v]) d.textContent = fmt(DUR[c.dataset.v]); });

/* ---------- Photo series ---------- */
const P = id => ({ thumb: `assets/photo/thumb/${id}.webp`, full: `assets/photo/${id}.webp` });
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
/* ---------- Photography: four chapters, three frames each, full set in the viewer ---------- */
const S = key => SERIES.find(x => x.key === key);
const byId = (key, ids) => ids.map(id => { const it = S(key).items.find(([x]) => x.includes(id)); return { thumb: P(it[0]).thumb, full: P(it[0]).full, cap: it[1] }; });
const PIC = (n, cap) => ({ thumb: `assets/img/p${n}.webp`, full: `assets/photo/full/p${n}.webp`, cap });
const TRV = (k, cap) => ({ thumb: `assets/photo/travel/thumb/${k}.webp`, full: `assets/photo/travel/${k}.webp`, cap });
const CHAPTERS = [
  { name: "Jewelry", line: "Campaign and product stills for Keyzar.",
    all: [PIC(1, "Three rings on white silk"), PIC(2, "Oval ring in sunlight"), PIC(3, "Eye through the ring"), PIC(4, "Radiant hidden halo, macro"), PIC(5, "Open ring box")] },
  { name: "Fashion", line: "Silhouette, attitude and light, composed for the editorial page.",
    all: [...byId("fashion", ["91d6329a"]), PIC(6, "Red dress against the sky"), { thumb: "assets/photo/thumb/fashion-blazer.webp", full: "assets/photo/fashion-blazer.webp", cap: "Tailored blazer, black and white" }, ...byId("fashion", ["d2ac6511", "be6c5478", "b5c8cd81", "1e6e5e6e", "d5380e6b", "42f76f7e"])] },
  { name: "Travel", line: "Light, colour and water, collected on the road.",
    all: [...byId("thailand", ["fee258a2"]), TRV("sharm-coast", "Sinai coast"), TRV("sinai-underwater", "Underwater"),
          ...byId("thailand", ["d84afc29", "c21b4e67", "f294d45c", "301fae08", "f34fbd28", "24fd3046"]),
          TRV("sharm-wake", "Boat wake, Red Sea"), TRV("salt-sunset", "Mirror shore at sunset"), TRV("sharm-yacht", "Yacht at anchor, Red Sea"), TRV("sea-toast", "A toast at sunset")] },
  { name: "October 7", line: "Documentary photographs from Tel Aviv and the Gaza Envelope communities: the protests at home, and the forces gearing up before heading into battle.",
    all: byId("october", ["7d5a4c2f", "987354223", "08998a1f", "f319ced8", "579e7171", "4332019f", "9263af54", "4c56c264"]) }
];
const chapWrap = $("#chapters");
if (chapWrap) CHAPTERS.forEach((ch, ci) => {
  const items = ch.all.map(x => ({ type: "img", src: x.full, cap: `${ch.name} · ${x.cap}` }));
  const el = document.createElement("article");
  el.className = "chapter reveal";
  el.innerHTML = `
    <div class="chapter-rail">
      <span class="mono chapter-num">${String(ci + 1).padStart(2, "0")}</span>
      <h3 class="chapter-name">${ch.name}</h3>
      <p class="chapter-line">${ch.line}</p>
      <button class="pill mono chapter-all">View all ${items.length} <span aria-hidden="true">→</span></button>
    </div>
    <div class="chapter-frames">${[0, 1, 2].map(i => `<figure class="bw" data-cursor="View" data-i="${i}"><img src="${ch.all[i].thumb}" alt="${ch.all[i].cap}" loading="lazy"><figcaption class="mono">${ch.all[i].cap}</figcaption></figure>`).join("")}</div>`;
  $(".chapter-all", el).addEventListener("click", () => open(items, 0));
  $$("figure", el).forEach(f => f.addEventListener("click", () => open(items, +f.dataset.i)));
  chapWrap.appendChild(el);
});

/* ==========================================================
   MOODBOARDS (every film) · title opens the board, image plays the film
   ========================================================== */
const caseEl = $("#case"), caseInner = $("#caseInner"), caseScroll = $("#caseScroll");
const FILM_ORDER = $$(".card[data-v]").map(c => c.dataset.v).filter(v => MB[v]);
const pad2 = n => String(n).padStart(2, "0");

const MBV = 9;
function openCase(key) {
  const m = MB[key]; if (!m) return;
  const i = FILM_ORDER.indexOf(key), n = FILM_ORDER.length;
  const prev = FILM_ORDER[(i + n - 1) % n], next = FILM_ORDER[(i + 1) % n];
  const card = $(`.card[data-v="${key}"]`);
  const src = k => `assets/img/mb/${key}-${k + 1}.webp?v=${MBV}`;
  const shots = m.labels.map((l, k) => `<figure class="${k === 0 ? "lead" : ""}" style="animation-delay:${.12 + k * .05}s"><img src="${src(k)}" alt="${m.t.join(" ")}, ${l}"><b class="chip"><i>${pad2(k + 1)}</i>${l}</b></figure>`).join("");
  const tc = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  const bar = (m.bar || []).map(c => `<span style="background:${c}"></span>`).join("");
  const marks = (m.marks || []).map((p, k) => `<b style="left:${(p * 100).toFixed(2)}%"><i>${pad2(k + 1)}</i></b>`).join("");
  const ticks = m.beats.map(([s]) => `<u style="left:${(Math.min(s / m.dur, 1) * 100).toFixed(2)}%"></u>`).join("");
  const type = m.phrase ? `<div class="mb-typemini"><p class="mb-label">Type</p><div><span class="aa">Aa</span><span class="it">${m.phrase}</span></div></div>` : "";
  const pal = `<div class="mb-palmini"><p class="mb-label">Palette</p><div>${m.pal.map(([nm, hx]) => `<span><i style="background:${hx}"></i><b>${nm}</b><small>${hx}</small></span>`).join("")}</div></div>`;
  caseInner.innerHTML = `
    <div class="mb v4 ${m.palside ? "pal-side" : ""} ${m.v ? "is-v" : ""} ${m.labels.length > 5 ? "is-many" : ""} ${m.phrase ? "" : "no-type"}">
      <header class="mb-side">
        <p class="mb-kicker"><span>Mood board</span><i></i><span>${pad2(i + 1)} / ${pad2(n)}</span><span class="mb-cat">${m.cat || ""}</span></p>
        <h2 class="mb-title"><span>${m.t[0]}</span><em>${m.t[1]}</em></h2>
        ${m.vision ? `<p class="mb-vision">${m.vision}</p>` : ""}
        <p class="mb-desc">${m.desc}</p>
        <div class="mb-tags">${m.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <dl class="mb-meta">${m.meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}</dl>
        ${m.palside ? `<div class="mb-sidepal">${pal}${type}</div>` : ""}
      </header>
      <div class="mb-main">
        <div class="mb-grid">${shots}</div>
        <div class="mb-timeline" aria-hidden="true">
          <div class="mb-bar">${bar}${ticks}${marks}</div>
          <div class="mb-tc mono"><span>0:00</span><span>The film, start to finish · numbers mark the frames above</span><span>${tc(m.dur || 0)}</span></div>
        </div>
        <ol class="mb-beats" style="--n:${m.beats.length}">${m.beats.map(([s, t, d]) => `<li><small>${tc(s)}</small><b>${t}</b><span>${d}</span></li>`).join("")}</ol>
      </div>
      <div class="mb-foot">
        <button class="mb-play" data-playfilm><b></b>Play the film <small>${card ? $(".dur", card).textContent : ""}</small></button>
        ${m.palside ? "" : pal + type}
        <div class="mb-nav"><button data-go="${prev}" aria-label="Previous board: ${MB[prev].t.join(" ")}">← Prev</button><button data-go="${next}" aria-label="Next board: ${MB[next].t.join(" ")}">Next →</button></div>
      </div>
    </div>`;
  $$("[data-go]", caseInner).forEach(b => b.addEventListener("click", () => openCase(b.dataset.go)));
  const frames = m.labels.map((l, j) => ({ type: "img", src: src(j), cap: `${m.t.join(" ")} · ${l}` }));
  $$(".mb-grid figure", caseInner).forEach((f, k) => f.addEventListener("click", () => open(frames, k)));
  $("[data-playfilm]", caseInner).addEventListener("click", () => open([{ type: "video", src: `assets/video/${key}.mp4?v=3`, poster: card ? $("img", card).getAttribute("src") : "", cap: m.t.join(" ") }], 0));
  caseScroll.scrollTop = 0;
  if (!caseEl.classList.contains("open")) { caseEl.classList.add("open"); caseEl.setAttribute("aria-hidden", "false"); lockScroll(true); }
  fitBoard();
  $("#caseClose").focus({ preventScroll: true });
}
/* Size the frame grid so the whole board fits one screen (desktop) */
function fitBoard() {
  const mb = $(".mb.v4", caseInner); if (!mb) return;
  const main = $(".mb-main", mb), grid = $(".mb-grid", mb), n = $$("figure", grid).length, gap = 10;
  grid.style.cssText = ""; main.style.removeProperty("--gw");
  if (innerWidth <= 1000) return;
  const W = grid.clientWidth, H = grid.clientHeight;
  if (mb.classList.contains("is-v")) {
    let best = { fw: 0 };
    for (let r = 1; r <= 3; r++) {
      const c = Math.ceil(n / r);
      const fw = Math.min((W - gap * (c - 1)) / c, ((H - gap * (r - 1)) / r) * 9 / 16);
      if (fw > best.fw + 4) best = { fw, c, r };
    }
    const fw = Math.floor(best.fw), fh = Math.floor(fw * 16 / 9);
    grid.style.cssText = `flex:none;grid-template-columns:repeat(${best.c},${fw}px);grid-template-rows:repeat(${best.r},${fh}px)`;
  } else {
    /* lead frame spans a 2x2 block; the other frames fill the remaining cells */
    let best = { s: 0 };
    for (let C = 3; C <= 5; C++) for (let R = 2; R <= 4; R++) {
      if (C * R - 4 !== n - 1) continue;
      const s = Math.min((W - gap * (C - 1)) / C, ((H - gap * (R - 1)) / R) * 16 / 9);
      if (s > best.s) best = { s, C, R };
    }
    if (!best.C) best = { s: Math.min((W - 3 * gap) / 4, (H - gap) / 2 * 16 / 9), C: 4, R: 2 };
    const s = Math.floor(best.s), h = Math.floor(s * 9 / 16);
    grid.style.cssText = `flex:none;grid-template-columns:repeat(${best.C},${s}px);grid-template-rows:repeat(${best.R},${h}px)`;
  }
  /* timeline and beats share the frame grid's exact width */
  const gw = [...getComputedStyle(grid).gridTemplateColumns.split(" ")].reduce((a, v) => a + parseFloat(v), 0) + gap * (getComputedStyle(grid).gridTemplateColumns.split(" ").length - 1);
  main.style.setProperty("--gw", `${Math.ceil(gw)}px`);
}
addEventListener("resize", () => { if (caseEl.classList.contains("open")) fitBoard(); });
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
  if (!lb.classList.contains("open") && caseEl.classList.contains("open") && !pop.classList.contains("open")) {
    const go = $(`[data-go]:${e.key === "ArrowRight" ? "last" : "first"}-child`, caseInner);
    if ((e.key === "ArrowRight" || e.key === "ArrowLeft") && go) go.click();
    return;
  }
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
  const items = cards.map(c => ({ type: "video", src: `assets/video/${c.dataset.v}.mp4?v=3`, poster: $("img", c).getAttribute("src"), cap: c.dataset.t }));
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
          if (!v) { v = document.createElement("video"); v.muted = true; v.loop = true; v.playsInline = true; v.preload = "metadata"; v.src = items[i].src; frame.appendChild(v); }
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

/* Intro curtain: counts up while the hero video gets ready, then lifts (max ~1.8 s) */
(() => {
  const body = document.body, count = $("#introCount"), hero = $(".hero-video");
  if (matchMedia("(prefers-reduced-motion:reduce)").matches || sessionStorage.getItem("as-intro")) { body.classList.remove("loading"); body.classList.add("ready"); return; }
  let n = 0, ready = false, done = false;
  const finish = () => { if (done) return; done = true; count.textContent = "100"; setTimeout(() => { body.classList.add("ready"); body.classList.remove("loading"); try { sessionStorage.setItem("as-intro", "1"); } catch (e) {} }, 180); };
  hero.addEventListener("canplay", () => ready = true, { once: true });
  if (hero.readyState >= 3) ready = true;
  const tick = () => { n = Math.min(ready ? n + 9 : n + 2, ready ? 100 : 88); count.textContent = String(n).padStart(2, "0"); if (n >= 100) finish(); else if (!done) setTimeout(tick, 40); };
  tick(); setTimeout(finish, 1800);
})();

/* Focus trap: Tab stays inside whichever dialog is open */
document.addEventListener("keydown", e => {
  if (e.key !== "Tab") return;
  const d = [lb, pop, caseEl].find(x => x.classList.contains("open"));
  if (!d) return;
  const f = $$('button, a[href], video[controls], [tabindex="0"]', d).filter(el => el.offsetParent !== null && !el.hidden);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  else if (!d.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
});
