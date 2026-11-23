/* 萬寧官方網店 —— 前臺店鋪（全站 5 折 / 購物車 / 結帳 / 會員） */
(() => {
  'use strict';

  const API = 'https://mannings-api.mating.workers.dev';
  const V = 'v=20261123b';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const money = (v) => 'HK$' + Number(v || 0).toLocaleString('en-HK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const money0 = (v) => 'HK$' + Math.round(Number(v || 0)).toLocaleString('en-HK');
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const stars = (r) => { const n = Math.round(r); return '★★★★★'.slice(0, n) + '☆☆☆☆☆'.slice(0, 5 - n); };

  const LS = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
    set(k, v) { localStorage.setItem(k, JSON.stringify(v)); },
  };

  const state = {
    catalog: [], cats: [], brands: [], detailCache: new Map(),
    cart: LS.get('mn_cart', {}),        // {sku: qty}
    user: LS.get('mn_user', null),
  };

  /* ---------- 基础 ---------- */
  function toast(msg, ms = 1800) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('on');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), ms);
  }

  function cartCount() { return Object.values(state.cart).reduce((a, b) => a + b, 0); }
  function cartItems() {
    return Object.entries(state.cart)
      .map(([sku, qty]) => ({ p: state.catalog.find((x) => x.sku === sku), qty }))
      .filter((x) => x.p);
  }
  function cartTotals() {
    const items = cartItems();
    const sub = items.reduce((a, i) => a + i.p.f * i.qty, 0);
    const orig = items.reduce((a, i) => a + i.p.o * i.qty, 0);
    return { items, sub, orig, save: orig - sub, ship: 0, total: sub };
  }
  function writeCartCookie() {
    try {
      var arr = Object.keys(state.cart).map(function (sku) { return { sku: sku, qty: state.cart[sku] }; });
      var json = JSON.stringify(arr);
      var b64 = btoa(unescape(encodeURIComponent(json))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      document.cookie = 'bp_cart=' + encodeURIComponent(b64) + '; path=/; max-age=604800; SameSite=Lax';
    } catch (e) { }
  }
  function paintCart() {
    writeCartCookie();
    const n = cartCount();
    const el = $('#cartcount'); if (el) el.textContent = n;
    const acc = $('#acct');
    if (acc) acc.textContent = state.user ? state.user.name || '我的帳戶' : '登入 / 註冊';
    if (acc) acc.setAttribute('href', state.user ? '#/account' : '#/login');
  }
  function addToCart(sku, qty = 1) {
    state.cart[sku] = (state.cart[sku] || 0) + qty;
    LS.set('mn_cart', state.cart);
    paintCart();
    toast('已加入購物車');
  }
  function setQty(sku, qty) {
    qty = Math.max(1, Math.min(99, qty));
    state.cart[sku] = qty;
    LS.set('mn_cart', state.cart);
    paintCart();
  }
  function removeItem(sku) { delete state.cart[sku]; LS.set('mn_cart', state.cart); paintCart(); }

  /* ---------- 数据加载 ---------- */
  async function loadBase() {
    const [cat, cats, brands] = await Promise.all([
      fetch('./data/catalog.json?' + V).then((r) => r.json()),
      fetch('./data/cats.json?' + V).then((r) => r.json()),
      fetch('./data/brands.json?' + V).then((r) => r.json()),
    ]);
    state.catalog = cat; state.cats = cats; state.brands = brands;
    paintCart();
    buildNav();
  }
  async function detail(sku) {
    if (state.detailCache.has(sku)) return state.detailCache.get(sku);
    const shard = String(Number(String(sku).slice(-1)) % 10);
    const j = await fetch('./data/detail/' + shard + '.json?' + V).then((r) => r.json());
    for (const [k, v] of Object.entries(j)) state.detailCache.set(k, v);
    return state.detailCache.get(sku) || null;
  }

  function buildNav() {
    const nav = $('#nav');
    const hot = [['最新優惠', '#/search?q='], ['全站 5 折', '#/search?q=']];
    let html = '<a class="hot" href="#/search?q=">🔥 全站 5 折</a>';
    for (const c of state.cats.slice(0, 11)) {
      html += '<a href="#/c/' + encodeURIComponent(c.name) + '">' + esc(c.name) + '</a>';
    }
    nav.innerHTML = html;
  }

  /* ---------- 卡片 ---------- */
  function card(p) {
    return '<article class="card">' +
      '<a class="ph" href="#/p/' + p.sku + '">' +
        '<img loading="lazy" src="' + p.i + '&width=400" alt="' + esc(p.n) + '">' +
        '<span class="badge">-50%</span>' +
      '</a>' +
      '<a class="bn" href="#/p/' + p.sku + '">' + esc(p.b) + '</a>' +
      '<a class="nm" href="#/p/' + p.sku + '">' + esc(p.n) + '</a>' +
      '<div class="sz">' + esc(p.s) + '</div>' +
      '<div class="rate"><span class="stars">' + stars(p.r) + '</span>' + p.r.toFixed(1) + '（' + p.rc + '）</div>' +
      '<div class="pv"><span class="now">' + money0(p.f) + '</span><span class="was">' + money0(p.o) + '</span></div>' +
      '<button class="add" data-add="' + p.sku + '">加入購物車</button>' +
      '</article>';
  }
  function grid(list) { return '<div class="grid">' + list.map(card).join('') + '</div>'; }

  /* ---------- 页面 ---------- */
  function viewHome() {
    const hot = state.catalog.slice().sort((a, b) => b.sold - a.sold).slice(0, 10);
    const newest = state.catalog.slice(2000, 2010);
    const cheap = state.catalog.filter((p) => p.f <= 60).slice(0, 10);
    return `
    <section class="hero">
      <div class="hero-l">
        <div class="hero-tags"><span>全站 5 折</span><span>免運費</span><span>當日送達</span><span>正貨保證</span></div>
        <h1>全站 <em>5 折</em><br>今日落單 · 當日送到</h1>
        <p>7,780 件萬寧正貨，健康 / 美容 / 母嬰 / 家居全品類。滿額即免運費，註冊再送 $45 購物金。</p>
        <div class="cta-row">
          <a class="btn dark" href="#/search?q=">立即搶購 5 折</a>
          <a class="btn ghost" href="#/c/${encodeURIComponent('健康')}" style="background:#fff">睇健康專區</a>
        </div>
      </div>
      <div class="hero-img">🛒</div>
    </section>
    <section class="sec">
      <div class="sec-h"><h2>🔥 人氣熱賣（5 折）</h2><a href="#/search?q=">查看全部 ›</a></div>
      ${grid(hot)}
    </section>
    <section class="sec">
      <div class="sec-h"><h2>💊 健康專區</h2><a href="#/c/${encodeURIComponent('健康')}">更多 ›</a></div>
      ${grid(state.catalog.filter((p) => p.c[0] === '健康').slice(0, 10))}
    </section>
    <section class="sec">
      <div class="sec-h"><h2>💄 美容護膚</h2><a href="#/c/${encodeURIComponent('美容')}">更多 ›</a></div>
      ${grid(state.catalog.filter((p) => p.c[0] === '美容').slice(0, 10))}
    </section>
    <section class="sec">
      <div class="sec-h"><h2>🆕 新品上架</h2><a href="#/search?q=">查看全部 ›</a></div>
      ${grid(newest)}
    </section>
    <section class="sec">
      <div class="sec-h"><h2>💰 $60 以下激安</h2><a href="#/search?q=">查看全部 ›</a></div>
      ${grid(cheap)}
    </section>`;
  }

  function viewCategory(name) {
    const all = state.catalog.filter((p) => p.c.includes(name));
    return `
    <div class="list">
      <aside class="side">
        <h4>品牌</h4>
        <div class="items" id="f-brand"></div>
        <h4 style="margin-top:14px">價格（5 折價）</h4>
        <div id="f-price">
          <span class="chip" data-p="0-50">$50 以下</span>
          <span class="chip" data-p="50-100">$50–100</span>
          <span class="chip" data-p="100-300">$100–300</span>
          <span class="chip" data-p="300-99999">$300 以上</span>
        </div>
        <h4 style="margin-top:14px">評分</h4>
        <label><input type="checkbox" id="f-rate"> 4 星以上</label>
        <h4 style="margin-top:14px">其他</h4>
        <label><input type="checkbox" id="f-stock" checked> 只看有貨</label>
      </aside>
      <section>
        <div class="lh">
          <div><h1>${esc(name)}</h1><div class="cnt" id="cnt">${all.length} 件商品 · 全部 5 折</div></div>
          <select id="sort">
            <option value="hot">人氣排序</option>
            <option value="asc">價格低→高</option>
            <option value="desc">價格高→低</option>
            <option value="rate">評分最高</option>
          </select>
        </div>
        <div id="grid">${grid(all.slice(0, 40))}</div>
        <div style="text-align:center;margin:18px 0"><button class="btn ghost" id="more">載入更多</button></div>
      </section>
    </div>`;
  }

  async function viewProduct(sku) {
    const p = state.catalog.find((x) => x.sku === sku);
    if (!p) return '<div class="empty">找不到商品</div>';
    const d = (await detail(sku)) || { images: [p.i], reviews: [], attrs: [] };
    const imgs = d.images && d.images.length ? d.images : [p.i];
    const total = p.sold + p.stock;
    const pct = Math.min(98, Math.round((p.sold / Math.max(1, total)) * 100));
    return `
    <div class="pdp">
      <div class="gal">
        <div class="main"><img id="mainimg" src="${imgs[0]}" alt="${esc(p.n)}"></div>
        <div class="thumbs">${imgs.map((u, i) => `<img class="${i === 0 ? 'on' : ''}" data-i="${i}" src="${u}&width=160" alt="">`).join('')}</div>
      </div>
      <div class="pinfo">
        <a class="brand" href="#/c/${encodeURIComponent(p.c[0] || '')}">${esc(p.b)}</a>
        <h1>${esc(p.n)}</h1>
        <div class="meta">
          <span>貨號：${p.sku}</span><span>規格：${esc(p.s)}</span>
          ${d.country ? '<span>產地：' + esc(d.country) + '</span>' : ''}
          <span class="stars">${stars(p.r)}</span><span>${p.r.toFixed(1)}（${p.rc} 則評價）</span>
        </div>
        <div class="pricebox">
          <span class="now"><small>HK$</small>${money0(p.f).replace('HK$', '')}</span>
          <span class="was">${money0(p.o)}</span>
          <span class="off">-50%</span>
          <span style="font-size:12px;color:var(--muted)">原價 ${money0(p.o)} · 已售 ${p.sold} 件</span>
        </div>
        <div class="stockbar">
          <div class="row"><span>已售 ${p.sold} 件</span><span>剩餘 ${p.stock} 件</span></div>
          <div class="bar"><div class="fill" style="width:${pct}%"></div></div>
        </div>
        ${(d.offers && d.offers.length) ? '<div class="note">優惠：' + d.offers.map(esc).join(' ｜ ') + '</div>' : ''}
        <div class="buy">
          <div class="qty"><button data-q="-">−</button><input id="qty" value="1" inputmode="numeric"><button data-q="+">+</button></div>
          <button class="btn" data-add="${p.sku}" style="flex:1">加入購物車</button>
          <button class="btn dark" data-buy="${p.sku}" style="flex:1">立即購買</button>
        </div>
        <div class="svc">
          <div><b>免運費</b><br>全單免運，不設最低消費</div>
          <div><b>當日送達</b><br>下午 4 點前落單，即日送到</div>
          <div><b>正貨保證</b><br>7 天無理由退換</div>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tabbar">
        <button class="on" data-tab="desc">商品簡介</button>
        <button data-tab="use">使用方法</button>
        <button data-tab="spec">成分與規格</button>
        <button data-tab="rev">評價（${p.rc}）</button>
      </div>
      <div class="pane" data-pane="desc">${esc(d.desc || '暫無簡介')}</div>
      <div class="pane" data-pane="use" hidden>${esc(d.usage || '請參考包裝說明')}</div>
      <div class="pane" data-pane="spec" hidden>
        ${d.ingredients ? '<p><b>成分：</b>' + esc(d.ingredients) + '</p>' : ''}
        <table>${(d.attrs || []).map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</table>
      </div>
      <div class="pane" data-pane="rev" hidden>
        <div style="margin-bottom:8px"><span class="stars" style="font-size:16px">${stars(p.r)}</span> <b>${p.r.toFixed(1)}</b> · ${p.rc} 則評價</div>
        ${(d.reviews || []).map((r) => `<div class="rev"><div class="top"><b>${esc(r.name)}</b><span class="stars">${stars(r.stars)}</span>${r.tag ? `<span style="background:#fff4e6;color:#ff8300;border-radius:6px;padding:1px 6px;font-size:11px;font-weight:800">${esc(r.tag)}</span>` : ''}<span>${r.date}</span></div><div class="txt">${esc(r.text)}</div></div>`).join('')}
      </div>
    </div>
    <section class="sec"><div class="sec-h"><h2>同類推薦</h2></div>${grid(state.catalog.filter((x) => x.c[0] === p.c[0] && x.sku !== p.sku).slice(0, 5))}</section>`;
  }

  function viewSearch(q) {
    const kw = (q || '').trim().toLowerCase();
    if (!kw) return `<div class="lh"><h1>全部商品</h1><div class="cnt">${state.catalog.length} 件 · 全部 5 折</div></div>` + grid(state.catalog.slice(0, 40));
    const list = state.catalog.filter((p) =>
      p.n.toLowerCase().includes(kw) || p.b.toLowerCase().includes(kw) || String(p.sku).includes(kw));
    return `<div class="lh"><h1>「${esc(q)}」的搜尋結果</h1><div class="cnt">共 ${list.length} 件</div></div>` +
      (list.length ? grid(list.slice(0, 60)) : '<div class="empty">沒有符合的商品，試試其他關鍵字</div>');
  }

  function viewCart() {
    const t = cartTotals();
    if (!t.items.length) return '<div class="panel"><div class="empty">購物車是空的<br><a class="btn" style="margin-top:12px" href="#/">去購物</a></div></div>';
    return `<div class="twocol">
      <div class="panel">
        ${t.items.map((i) => `<div class="crow">
          <a href="#/p/${i.p.sku}"><img src="${i.p.i}&width=160" alt=""></a>
          <div><div class="n"><a href="#/p/${i.p.sku}">${esc(i.p.n)}</a></div>
            <div class="m">${esc(i.p.b)} · ${esc(i.p.s)}</div>
            <div class="m" style="margin-top:6px">
              <button class="chip" data-dec="${i.p.sku}">−</button>
              <span style="display:inline-block;min-width:24px;text-align:center">${i.qty}</span>
              <button class="chip" data-inc="${i.p.sku}">+</button>
              <button class="chip" data-del="${i.p.sku}">移除</button>
            </div></div>
          <div class="p">${money0(i.p.f * i.qty)}</div>
          <div class="m">${money0(i.p.f)} / 件</div>
        </div>`).join('')}
      </div>
      <aside class="panel sum">
        <h3 style="margin:0 0 8px">訂單摘要</h3>
        <div class="row"><span>商品原價</span><span style="text-decoration:line-through">${money0(t.orig)}</span></div>
        <div class="row"><span>5 折優惠</span><span style="color:var(--ok)">-${money0(t.save)}</span></div>
        <div class="row"><span>運費</span><span style="color:var(--ok)">免運費</span></div>
        <div class="tot"><span>應付</span><span>${money(t.total)}</span></div>
        <a class="btn big" style="margin-top:12px" href="/checkout">前往結帳</a>
        <div class="note">下午 4 點前完成付款，今日送到。</div>
      </aside>
    </div>`;
  }

  function viewCheckout() {
    const t = cartTotals();
    if (!t.items.length) return '<div class="panel"><div class="empty">購物車是空的</div></div>';
    return `<div class="twocol">
      <div class="panel">
        <h3 style="margin:0 0 12px">收貨資料</h3>
        <div class="grid2">
          <div class="field"><label>收件人姓名 *</label><input id="c-name" value="${esc(state.user ? state.user.name : '')}" placeholder="陳大文"></div>
          <div class="field"><label>聯絡電話 *</label><input id="c-phone" value="${esc(state.user ? state.user.phone : '')}" placeholder="9123 4567"></div>
        </div>
        <div class="field"><label>電郵</label><input id="c-email" value="${esc(state.user ? state.user.email : '')}" placeholder="you@example.com"></div>
        <div class="grid2">
          <div class="field"><label>送貨方式</label><select id="c-delivery"><option>送貨上門（免運費·當日送達）</option><option>門市自取</option><option>順豐智能櫃</option></select></div>
          <div class="field"><label>地區</label><select id="c-district"><option>香港島</option><option>九龍</option><option>新界</option></select></div>
        </div>
        <div class="field"><label>詳細地址 *</label><input id="c-addr" placeholder="街道、門牌、樓層"></div>
        <div class="field"><label>備註</label><textarea id="c-note" placeholder="例如：請於下午送達"></textarea></div>
        <h3 style="margin:18px 0 10px">付款方式</h3>
        <div class="pay" id="pay">
          <label class="on"><input type="radio" name="pay" value="信用卡" checked> 信用卡（VISA / Master / 銀聯）</label>
          <label><input type="radio" name="pay" value="PayMe"> PayMe</label>
          <label><input type="radio" name="pay" value="AlipayHK"> AlipayHK</label>
          <label><input type="radio" name="pay" value="WeChat Pay"> WeChat Pay HK</label>
          <label><input type="radio" name="pay" value="FPS"> 轉數快 FPS</label>
        </div>
        <div id="cardbox" style="margin-top:12px">
          <div class="field"><label>卡號</label><input id="c-card" inputmode="numeric" placeholder="4242 4242 4242 4242" maxlength="23"></div>
          <div class="grid2">
            <div class="field"><label>有效期</label><input id="c-exp" placeholder="MM/YY" maxlength="5"></div>
            <div class="field"><label>安全碼</label><input id="c-cvc" placeholder="CVC" maxlength="4"></div>
          </div>
        </div>
        <button class="btn big" id="pay-btn">確認付款 ${money(t.total)}</button>
        <div class="note">付款資料以 TLS 加密傳輸；交易完成後即時確認訂單。</div>
      </div>
      <aside class="panel sum">
        <h3 style="margin:0 0 8px">訂單摘要</h3>
        ${t.items.map((i) => `<div class="row"><span>${esc(i.p.n).slice(0, 22)} ×${i.qty}</span><span>${money0(i.p.f * i.qty)}</span></div>`).join('')}
        <div class="row"><span>運費</span><span style="color:var(--ok)">免運費</span></div>
        <div class="tot"><span>應付</span><span>${money(t.total)}</span></div>
      </aside>
    </div>`;
  }

  function viewAuth(tab) {
    const login = tab !== 'register';
    return `<div class="auth">
      <h2>${login ? '會員登入' : '註冊新會員'}</h2>
      <div class="sub">${login ? '輸入帳號與密碼即可登入' : '註冊即送 $45 購物金'}</div>
      <div class="tabs2">
        <button class="${login ? 'on' : ''}" data-tab="login">登入</button>
        <button class="${login ? '' : 'on'}" data-tab="register">註冊</button>
      </div>
      ${login ? `
        <div class="field"><label>手機號碼 / 電郵</label><input id="l-acc" placeholder="91234567 或 you@example.com"></div>
        <div class="field"><label>密碼</label><input id="l-pw" type="password" placeholder="••••••••"></div>
        <button class="btn big" id="login-btn">登入</button>
        <div class="note">可使用手機號碼或電郵登入。</div>
      ` : `
        <div class="field"><label>姓名</label><input id="r-name" placeholder="陳大文"></div>
        <div class="field"><label>手機號碼</label><input id="r-phone" placeholder="91234567"></div>
        <div class="field"><label>電郵</label><input id="r-email" placeholder="you@example.com"></div>
        <div class="field"><label>設定密碼</label><input id="r-pw" type="password" placeholder="至少 6 位"></div>
        <button class="btn big" id="reg-btn">註冊並登入</button>
        <div class="note">註冊不設驗證碼，填好即成功。</div>
      `}
    </div>`;
  }

  function viewAccount() {
    if (!state.user) return viewAuth('login');
    const orders = LS.get('mn_orders', []);
    return `<div class="panel" style="max-width:720px;margin:20px auto">
      <h2 style="margin:0 0 4px">你好，${esc(state.user.name || state.user.email)}</h2>
      <div class="sub" style="color:var(--muted);font-size:12.5px">${esc(state.user.email || '')} ${state.user.phone ? '· ' + esc(state.user.phone) : ''}</div>
      <div style="margin:16px 0"><a class="btn" href="#/">繼續購物</a> <button class="btn ghost" id="logout">登出</button></div>
      <h3 style="font-size:15px;margin:16px 0 8px">我的訂單（${orders.length}）</h3>
      ${orders.length ? orders.slice().reverse().map((o) => `<div class="crow" style="grid-template-columns:1fr auto">
        <div><div class="n">訂單 ${o.no}</div><div class="m">${o.date} · ${o.items.length} 件 · ${esc(o.pay)}</div></div>
        <div class="p">${money(o.total)}</div></div>`).join('') : '<div class="empty">還沒有訂單</div>'}
    </div>`;
  }

  function viewOrder(no) {
    const o = LS.get('mn_orders', []).find((x) => x.no === no);
    if (!o) return '<div class="empty">找不到訂單</div>';
    return `<div class="panel" style="max-width:720px;margin:20px auto;text-align:center">
      <div style="font-size:46px">✅</div>
      <h2 style="margin:6px 0">付款成功，訂單已確認</h2>
      <p style="color:var(--muted)">訂單編號 <b>${o.no}</b> · ${o.date}</p>
      <div class="note" style="text-align:left">我們已收到你的 ${esc(o.pay)} 付款 ${money(o.total)}，將於今日送達（下午 4 點前落單）。</div>
      <div style="text-align:left;margin:12px 0">${o.items.map((i) => `<div class="row" style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--line)"><span>${esc(i.n)} ×${i.qty}</span><span>${money0(i.f * i.qty)}</span></div>`).join('')}</div>
      <a class="btn" href="#/">繼續購物</a>
    </div>`;
  }

  let PAGES = null;
  async function pages() {
    if (PAGES) return PAGES;
    try { PAGES = await fetch('./data/pages.json?' + V).then((r) => r.json()); } catch { PAGES = {}; }
    return PAGES;
  }
  async function viewStatic(kind) {
    const titles = { terms: '服務條款', privacy: '私隱政策', shipping: '送貨及退貨', about: '關於我們' };
    const data = await pages();
    const parts = (data[kind] || []);
    const body = parts.length
      ? parts.map((p) => `<h2 style="font-size:16px;margin:18px 0 8px">${esc(p.title)}</h2><div style="white-space:pre-wrap;line-height:1.9;color:#374151;font-size:13.5px">${esc(p.text)}</div>`).join('')
      : '<p style="line-height:1.9;color:#374151">請聯絡客戶服務查詢詳情。</p>';
    return `<div class="panel" style="max-width:880px;margin:20px auto"><h1 style="font-size:22px;margin:0 0 6px">${titles[kind] || '說明'}</h1>${body}</div>`;
  }

  /* ---------- 路由 ---------- */
  async function route() {
    const app = $('#app');
    const h = location.hash.replace(/^#\/?/, '');
    const [pathPart, queryPart] = h.split('?');
    const seg = pathPart.split('/').filter(Boolean);
    const q = new URLSearchParams(queryPart || '');
    window.scrollTo(0, 0);

    if (!seg.length) { app.innerHTML = viewHome(); bindGrid(); return; }
    if (seg[0] === 'c') { app.innerHTML = viewCategory(decodeURIComponent(seg[1] || '')); bindCategory(decodeURIComponent(seg[1] || '')); return; }
    if (seg[0] === 'p') { app.innerHTML = await viewProduct(seg[1]); bindProduct(); return; }
    if (seg[0] === 'search') { app.innerHTML = viewSearch(q.get('q') || ''); bindGrid(); return; }
    if (seg[0] === 'cart') { app.innerHTML = viewCart(); bindCart(); return; }
    if (seg[0] === 'checkout') { location.replace('/checkout'); return; }
    if (seg[0] === 'login') { app.innerHTML = viewAuth('login'); bindAuth(); return; }
    if (seg[0] === 'register') { app.innerHTML = viewAuth('register'); bindAuth(); return; }
    if (seg[0] === 'account') { app.innerHTML = viewAccount(); bindAccount(); return; }
    if (seg[0] === 'order') { app.innerHTML = viewOrder(seg[1]); return; }
    if (['terms', 'privacy', 'shipping', 'about'].includes(seg[0])) { app.innerHTML = await viewStatic(seg[0]); return; }
    app.innerHTML = '<div class="empty">頁面不存在</div>';
  }

  /* ---------- 事件绑定 ---------- */
  function bindGrid() {
    $$('[data-add]').forEach((b) => b.addEventListener('click', (e) => {
      e.preventDefault(); addToCart(b.getAttribute('data-add'), 1);
    }));
  }

  function bindCategory(name) {
    bindGrid();
    const all = state.catalog.filter((p) => p.c.includes(name));
    let page = 1, brands = new Set(), price = null, rate = false, onlyStock = true, sort = 'hot';
    const pool = () => {
      let list = all.filter((p) => (!brands.size || brands.has(p.b)) && (!onlyStock || p.stock > 0));
      if (price) list = list.filter((p) => p.f >= price[0] && p.f < price[1]);
      if (rate) list = list.filter((p) => p.r >= 4);
      if (sort === 'asc') list.sort((a, b) => a.f - b.f);
      else if (sort === 'desc') list.sort((a, b) => b.f - a.f);
      else if (sort === 'rate') list.sort((a, b) => b.r - a.r);
      else list.sort((a, b) => b.sold - a.sold);
      return list;
    };
    const paint = () => {
      const list = pool();
      $('#grid').innerHTML = grid(list.slice(0, page * 40));
      $('#cnt').textContent = list.length + ' 件商品 · 全部 5 折';
      $('#more').style.display = list.length > page * 40 ? '' : 'none';
      bindGrid();
    };
    const bc = new Map();
    for (const p of all) if (p.b) bc.set(p.b, (bc.get(p.b) || 0) + 1);
    $('#f-brand').innerHTML = [...bc.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)
      .map(([b, n]) => `<label><input type="checkbox" data-b="${esc(b)}"> ${esc(b)} <span style="color:#9aa4b2">(${n})</span></label>`).join('');
    $$('#f-brand input').forEach((cb) => cb.addEventListener('change', () => {
      const b = cb.getAttribute('data-b');
      cb.checked ? brands.add(b) : brands.delete(b);
      page = 1; paint();
    }));
    $$('#f-price .chip').forEach((c) => c.addEventListener('click', () => {
      const on = c.classList.contains('on');
      $$('#f-price .chip').forEach((x) => x.classList.remove('on'));
      price = on ? null : c.getAttribute('data-p').split('-').map(Number);
      if (!on) c.classList.add('on');
      page = 1; paint();
    }));
    $('#f-rate').addEventListener('change', (e) => { rate = e.target.checked; page = 1; paint(); });
    $('#f-stock').addEventListener('change', (e) => { onlyStock = e.target.checked; page = 1; paint(); });
    $('#sort').addEventListener('change', (e) => { sort = e.target.value; page = 1; paint(); });
    $('#more').addEventListener('click', () => { page++; paint(); });
    paint();
  }

  function bindProduct() {
    $$('.thumbs img').forEach((t) => t.addEventListener('click', () => {
      $('#mainimg').src = t.src.replace('&width=160', '&width=800');
      $$('.thumbs img').forEach((x) => x.classList.remove('on'));
      t.classList.add('on');
    }));
    const qty = $('#qty');
    $$('[data-q]').forEach((b) => b.addEventListener('click', () => {
      qty.value = Math.max(1, Math.min(99, (parseInt(qty.value || '1', 10) || 1) + (b.getAttribute('data-q') === '+' ? 1 : -1)));
    }));
    $$('[data-add]').forEach((b) => b.addEventListener('click', () => addToCart(b.getAttribute('data-add'), parseInt(qty.value || '1', 10))));
    $$('[data-buy]').forEach((b) => b.addEventListener('click', () => {
      addToCart(b.getAttribute('data-buy'), parseInt(qty.value || '1', 10));
      location.href = '/checkout';
    }));
    $('.tabbar').addEventListener('click', (e) => {
      const b = e.target.closest('[data-tab]'); if (!b) return;
      $$('.tabbar button').forEach((x) => x.classList.remove('on'));
      b.classList.add('on');
      $$('.pane').forEach((p) => { p.hidden = p.getAttribute('data-pane') !== b.getAttribute('data-tab'); });
    });
    bindGrid();
  }

  function bindCart() {
    const app = $('#app');
    app.addEventListener('click', (e) => {
      const t = e.target.closest('button'); if (!t) return;
      const inc = t.getAttribute('data-inc'), dec = t.getAttribute('data-dec'), del = t.getAttribute('data-del');
      if (inc) { setQty(inc, (state.cart[inc] || 1) + 1); route(); }
      if (dec) { setQty(dec, (state.cart[dec] || 1) - 1); route(); }
      if (del) { removeItem(del); route(); }
    });
  }

  function bindCheckout() {
    const payBox = $('#pay');
    payBox.addEventListener('change', () => {
      $$('#pay label').forEach((l) => l.classList.toggle('on', l.querySelector('input').checked));
      const v = payBox.querySelector('input:checked').value;
      $('#cardbox').style.display = v === '信用卡' ? '' : 'none';
    });
    const card = $('#c-card');
    card.addEventListener('input', () => {
      card.value = card.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    });
    $('#c-exp').addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').slice(0, 4);
      if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
      e.target.value = v;
    });
    $('#pay-btn').addEventListener('click', () => {
      const name = $('#c-name').value.trim(), phone = $('#c-phone').value.trim(), addr = $('#c-addr').value.trim();
      if (!name) return toast('請填寫收件人姓名');
      if (!/^\d{8}$/.test(phone.replace(/\s/g, ''))) return toast('請填寫 8 位手機號碼');
      if (!addr) return toast('請填寫詳細地址');
      const pay = payBox.querySelector('input:checked').value;
      if (pay === '信用卡') {
        const num = $('#c-card').value.replace(/\s/g, ''), exp = $('#c-exp').value, cvc = $('#c-cvc').value;
        if (!/^\d{13,19}$/.test(num)) return toast('請輸入正確的卡號');
        if (!/^\d{2}\/\d{2}$/.test(exp)) return toast('請輸入有效期 MM/YY');
        if (!/^\d{3,4}$/.test(cvc)) return toast('請輸入安全碼');
      }
      const t = cartTotals();
      const no = 'MN' + Date.now().toString().slice(-10);
      const order = {
        no, date: new Date().toLocaleString('zh-HK'), pay, total: t.total,
        items: t.items.map((i) => ({ sku: i.p.sku, n: i.p.n, qty: i.qty, f: i.p.f })),
        addr: { name, phone, addr, district: $('#c-district').value, delivery: $('#c-delivery').value },
      };
      const orders = LS.get('mn_orders', []); orders.push(order); LS.set('mn_orders', orders);
      state.cart = {}; LS.set('mn_cart', state.cart); paintCart();
      location.hash = '#/order/' + no;
      toast('付款成功');
    });
  }

  function bindAuth() {
    $$('.tabs2 button').forEach((b) => b.addEventListener('click', () => {
      location.hash = b.getAttribute('data-tab') === 'register' ? '#/register' : '#/login';
    }));
    const login = $('#login-btn');
    if (login) login.addEventListener('click', () => {
      const acc = $('#l-acc').value.trim(), pw = $('#l-pw').value;
      if (!acc) return toast('請輸入手機號碼或電郵');
      const users = LS.get('mn_users', []);
      const u = users.find((x) => x.email === acc || x.phone === acc);
      if (u) {
        if (u.pw !== pw) return toast('密碼不正確');
        state.user = { name: u.name, email: u.email, phone: u.phone };
      } else {
        state.user = { name: acc.includes('@') ? acc.split('@')[0] : '會員 ' + acc.slice(-4), email: acc.includes('@') ? acc : '', phone: acc.includes('@') ? '' : acc };
      }
      LS.set('mn_user', state.user);
      paintCart();
      toast('登录成功');
      setTimeout(() => { location.hash = '#/'; }, 600);
    });
    const reg = $('#reg-btn');
    if (reg) reg.addEventListener('click', () => {
      const name = $('#r-name').value.trim(), phone = $('#r-phone').value.trim(), email = $('#r-email').value.trim(), pw = $('#r-pw').value;
      if (!name) return toast('請填寫姓名');
      if (!/^\d{8}$/.test(phone)) return toast('請填寫 8 位手機號碼');
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return toast('請填寫正確電郵');
      if (!pw || pw.length < 6) return toast('密碼至少 6 位');
      const users = LS.get('mn_users', []);
      if (users.some((x) => x.email === email || x.phone === phone)) return toast('此帳號已註冊，請直接登入');
      users.push({ name, phone, email, pw });
      LS.set('mn_users', users);
      state.user = { name, phone, email };
      LS.set('mn_user', state.user);
      paintCart();
      toast('註冊成功，已為你登入');
      setTimeout(() => { location.hash = '#/'; }, 700);
    });
  }

  function bindAccount() {
    const out = $('#logout');
    if (out) out.addEventListener('click', () => {
      state.user = null; localStorage.removeItem('mn_user'); paintCart(); toast('已登出'); location.hash = '#/';
    });
  }

  /* ---------- 搜索框 ---------- */
  function bindSearch() {
    const q = $('#q'), s = $('#sugg');
    const go = () => { location.hash = '#/search?q=' + encodeURIComponent(q.value.trim()); s.classList.remove('on'); };
    $('#qbtn').addEventListener('click', go);
    q.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
    q.addEventListener('input', () => {
      const kw = q.value.trim().toLowerCase();
      if (kw.length < 1) { s.classList.remove('on'); return; }
      const list = state.catalog.filter((p) => p.n.toLowerCase().includes(kw) || p.b.toLowerCase().includes(kw) || String(p.sku).includes(kw)).slice(0, 8);
      if (!list.length) { s.classList.remove('on'); return; }
      s.innerHTML = list.map((p) => `<a href="#/p/${p.sku}"><img src="${p.i}&width=120"><span class="nm">${esc(p.n)}</span><span class="pr">${money0(p.f)}</span></a>`).join('');
      s.classList.add('on');
    });
    document.addEventListener('click', (e) => { if (!e.target.closest('.sbar')) s.classList.remove('on'); });
  }

  /* ---------- 進站彈窗（1 小時倒數） ---------- */
  function initPopup() {
    const KEY = 'mn_pop_until';
    let until = Number(localStorage.getItem(KEY) || 0);
    const now = Date.now();
    if (!until || until < now) { until = now + 3600 * 1000; localStorage.setItem(KEY, String(until)); }
    const pop = $('#pop'), cd = $('#cd');
    const seen = sessionStorage.getItem('mn_pop_seen');
    if (!seen) { pop.classList.add('on'); sessionStorage.setItem('mn_pop_seen', '1'); }
    const tick = () => {
      const left = Math.max(0, until - Date.now());
      const m = Math.floor(left / 60000), sec = Math.floor((left % 60000) / 1000);
      cd.textContent = String(m).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
      if (left <= 0) { localStorage.removeItem(KEY); clearInterval(timer); }
    };
    const timer = setInterval(tick, 1000); tick();
    window.closePop = () => { pop.classList.remove('on'); sessionStorage.setItem('mn_pop_seen', '1'); };
    pop.addEventListener('click', (e) => { if (e.target === pop) window.closePop(); });
  }

  /* ---------- 启动 ---------- */
  (async function boot() {
    initPopup();
    bindSearch();
    await loadBase();
    window.addEventListener('hashchange', route);
    await route();
  })();
})();
