/* 萬寧鏡像站前端：購物車 / 分類瀏覽 / 商品圖集 / 結帳（純離線，資料存 localStorage） */
(function () {
  'use strict';
  var CART_KEY = 'mn_cart_v1';
  var INDEX = null, INDEX_P = null;

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function money(v) { return '$' + Number(v || 0).toLocaleString('en-HK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }

  /* ---------- 购物车 ---------- */
  function readCart() { try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch (e) { return []; } }
  function writeCart(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); paintCount(); }
  function addToCart(sku, qty) {
    var c = readCart(), hit = false;
    c.forEach(function (i) { if (i.sku === sku) { i.qty += (qty || 1); hit = true; } });
    if (!hit) c.push({ sku: sku, qty: qty || 1 });
    writeCart(c);
    toast('已加入購物車');
  }
  function setQty(sku, qty) {
    var c = readCart().map(function (i) { return i.sku === sku ? { sku: sku, qty: Math.max(1, qty) } : i; });
    writeCart(c);
  }
  function removeItem(sku) { writeCart(readCart().filter(function (i) { return i.sku !== sku; })); renderCart(); }
  function paintCount() {
    var n = readCart().reduce(function (a, i) { return a + i.qty; }, 0);
    $$('[data-cart-count]').forEach(function (e) { e.textContent = n; });
  }
  function toast(msg) {
    var t = $('#toast'); if (!t) return;
    t.textContent = msg; t.classList.add('on');
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('on'); }, 1600);
  }

  /* ---------- 商品索引 ---------- */
  function loadIndex() {
    if (INDEX_P) return INDEX_P;
    INDEX_P = fetch('/data/catalog.json').then(function (r) { return r.json(); }).then(function (j) {
      INDEX = {}; (j.products || []).forEach(function (p) { INDEX[p.sku] = p; });
      return INDEX;
    }).catch(function () { INDEX = {}; return INDEX; });
    return INDEX_P;
  }

  function card(p, ctx) {
    var img = p.i || '/media/site/placeholder.svg';
    var off = p.d > 0 ? '<span class="off">-' + Math.round(p.d) + '%</span>' : '';
    var was = (p.r && p.f && p.r > p.f) ? '<span class="was">' + money(p.r) + '</span>' : '';
    return '<article class="card" data-sku="' + p.sku + '">' +
      '<a class="thumb" href="/p/' + p.sku + '.html"><img src="' + img + '" alt="' + esc(p.n) + '" loading="lazy"></a>' +
      '<a class="brand" href="/b/' + slug(p.b || '') + '.html">' + esc(p.b || '') + '</a>' +
      '<a class="name" href="/p/' + p.sku + '.html">' + esc(p.n) + '</a>' +
      '<div class="size">' + esc(p.s || '') + '</div>' +
      '<div class="prices"><span class="now">' + money(p.f) + '</span>' + was + off + '</div>' +
      '<button class="add" data-add="' + p.sku + '">加入購物車</button>' +
      '</article>';
  }
  function slug(s) { return String(s).trim().toLowerCase().replace(/['"’]/g, '').replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '') || 'x'; }

  /* ---------- 分类页 ---------- */
  function initCategory() {
    var grid = $('#grid'); if (!grid) return;
    var src = grid.getAttribute('data-src');
    if (!window.__CAT__ && src) {
      fetch(src).then(function (r) { return r.json(); }).then(function (list) {
        window.__CAT__ = list;
        startCategory();
      }).catch(function () { });
      return;
    }
    startCategory();

    function startCategory() {
      var all = (window.__CAT__ || []).slice(), page = 1, per = 40;
      var brands = {}, prices = null;
      var grid = $('#grid');
      if (!all.length) return;
    function anyBrand() { return Object.keys(brands).length === 0; }
    function current() {
      var list = all.filter(function (p) { return anyBrand() || brands[p.b]; });
      if (prices) list = list.filter(function (p) { return p.f >= prices[0] && p.f < prices[1]; });
      var sort = ($('#sortSel') || {}).value;
      if (sort === 'price-asc') list.sort(function (a, b) { return a.f - b.f; });
      else if (sort === 'price-desc') list.sort(function (a, b) { return b.f - a.f; });
      else if (sort === 'name') list.sort(function (a, b) { return a.n.localeCompare(b.n, 'zh-Hant'); });
      return list;
    }
    function render() {
      var list = current(), pages = Math.max(1, Math.ceil(list.length / per));
      if (page > pages) page = pages;
      grid.innerHTML = list.slice((page - 1) * per, page * per).map(function (p) { return card(p); }).join('');
      var sc = $('#showCount'); if (sc) sc.textContent = list.length;
      var pg = $('#pager');
      if (pg) {
        var html = '';
        var start = Math.max(1, page - 2), end = Math.min(pages, start + 4);
        if (page > 1) html += '<button data-p="' + (page - 1) + '">‹</button>';
        for (var i = start; i <= end; i++) html += '<button data-p="' + i + '" class="' + (i === page ? 'on' : '') + '">' + i + '</button>';
        if (page < pages) html += '<button data-p="' + (page + 1) + '">›</button>';
        pg.innerHTML = pages > 1 ? html : '';
      }
      paintCount();
    }
    $$('#brandFacet input').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var b = cb.getAttribute('data-brand');
        if (cb.checked) brands[b] = 1; else delete brands[b];
        page = 1; render();
      });
    });
    $$('[data-price]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var v = btn.getAttribute('data-price').split('-').map(Number);
        var on = btn.classList.contains('on');
        $$('[data-price]').forEach(function (b2) { b2.classList.remove('on'); });
        if (on) { prices = null; } else { prices = v; btn.classList.add('on'); }
        page = 1; render();
      });
    });
    var sel = $('#sortSel'); if (sel) sel.addEventListener('change', function () { page = 1; render(); });
    var pg = $('#pager');
    if (pg) pg.addEventListener('click', function (e) {
      var b = e.target.closest('[data-p]'); if (!b) return;
      page = Number(b.getAttribute('data-p')); render();
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
      render();
    }
  }

  /* ---------- 商品页 ---------- */
  function initProduct() {
    var main = $('#mainImg');
    if (main) {
      $$('.thumbs img').forEach(function (t) {
        t.addEventListener('click', function () {
          main.src = t.src;
          $$('.thumbs img').forEach(function (x) { x.classList.remove('on'); });
          t.classList.add('on');
        });
      });
    }
    var qty = $('#qty');
    if (qty) {
      $$('[data-q]').forEach(function (b) {
        b.addEventListener('click', function () {
          var v = parseInt(qty.value || '1', 10) + (b.getAttribute('data-q') === '+' ? 1 : -1);
          qty.value = Math.max(1, Math.min(99, v));
        });
      });
    }
    $$('[data-buy]').forEach(function (b) {
      b.addEventListener('click', function () {
        addToCart(b.getAttribute('data-buy'), qty ? parseInt(qty.value || '1', 10) : 1);
        location.href = '/cart.html';
      });
    });
    var bar = $('.tabbar');
    if (bar) bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tab]'); if (!b) return;
      $$('.tabbar button').forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      $$('.pane').forEach(function (p) { p.classList.toggle('hide', p.getAttribute('data-pane') !== b.getAttribute('data-tab')); });
    });
  }

  /* ---------- 购物车页 ---------- */
  function renderCart() {
    var list = $('#cartList'); if (!list) return;
    loadIndex().then(function (idx) {
      var cart = readCart();
      if (!cart.length) {
        list.innerHTML = '<div class="empty">購物車是空的，<a href="/index.html" style="color:#ff8300">去逛逛</a></div>';
        ['subtotal', 'ship', 'disc', 'total'].forEach(function (id) { var e = $('#' + id); if (e) e.textContent = money(0); });
        return;
      }
      var sub = 0;
      list.innerHTML = cart.map(function (it) {
        var p = idx[it.sku] || { sku: it.sku, n: '商品 ' + it.sku, f: 0, i: '/media/site/placeholder.svg', b: '' };
        sub += (p.f || 0) * it.qty;
        return '<div class="citem">' +
          '<a href="/p/' + it.sku + '.html"><img src="' + (p.i || '/media/site/placeholder.svg') + '" alt=""></a>' +
          '<div><div class="n"><a href="/p/' + it.sku + '.html">' + esc(p.n) + '</a></div><div class="m">' + esc(p.b || '') + (p.s ? ' · ' + esc(p.s) : '') + ' · SKU ' + it.sku + '</div>' +
          '<div class="m"><button class="chip" data-dec="' + it.sku + '">−</button> <span style="display:inline-block;min-width:22px;text-align:center">' + it.qty + '</span> <button class="chip" data-inc="' + it.sku + '">+</button> <button class="chip" data-del="' + it.sku + '">移除</button></div></div>' +
          '<div class="p">' + money((p.f || 0) * it.qty) + '</div>' +
          '<div style="font-size:12px;color:#9ca3af">' + money(p.f || 0) + ' / 件</div>' +
          '</div>';
      }).join('');
      var ship = sub >= 399 || sub === 0 ? 0 : 30;
      var disc = 0;
      [['subtotal', sub], ['ship', ship], ['disc', disc], ['total', sub + ship - disc]].forEach(function (kv) {
        var e = $('#' + kv[0]); if (e) e.textContent = (kv[0] === 'disc' ? '-' : '') + money(kv[1]);
      });
      paintCount();
    });
  }
  function initCartEvents() {
    var list = $('#cartList'); if (!list) return;
    list.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t) return;
      var cart = readCart();
      if (t.hasAttribute('data-del')) { removeItem(t.getAttribute('data-del')); return; }
      if (t.hasAttribute('data-inc')) {
        var sku = t.getAttribute('data-inc');
        cart.forEach(function (i) { if (i.sku === sku) i.qty++; });
        writeCart(cart); renderCart(); return;
      }
      if (t.hasAttribute('data-dec')) {
        var s2 = t.getAttribute('data-dec');
        cart.forEach(function (i) { if (i.sku === s2) i.qty = Math.max(1, i.qty - 1); });
        writeCart(cart); renderCart(); return;
      }
    });
  }

  /* ---------- 结账 ---------- */
  function initCheckout() {
    var form = $('#checkoutForm'); if (!form) return;
    loadIndex().then(function (idx) {
      var cart = readCart(), sub = 0, html = '';
      cart.forEach(function (it) {
        var p = idx[it.sku] || { n: it.sku, f: 0 };
        sub += (p.f || 0) * it.qty;
        html += '<div style="display:flex;justify-content:space-between;padding:4px 0"><span>' + esc(p.n).slice(0, 28) + ' ×' + it.qty + '</span><span>' + money((p.f || 0) * it.qty) + '</span></div>';
      });
      var box = $('#coItems'); if (box) box.innerHTML = html || '<div style="color:#9ca3af">購物車是空的</div>';
      var ship = sub >= 399 || sub === 0 ? 0 : 30;
      var tt = $('#coTotal'); if (tt) tt.textContent = money(sub + ship);
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var no = 'MN' + Date.now().toString().slice(-10);
        localStorage.setItem('mn_last_order', JSON.stringify({
          no: no, at: new Date().toISOString(), items: readCart(),
          form: Object.fromEntries(new FormData(form).entries()),
        }));
        var r = $('#orderResult');
        if (r) { r.style.display = 'block'; r.innerHTML = '訂單已提交（本機）：<b>' + no + '</b>，總計 ' + money(sub + ship) + '。<br>此為離線鏡像站，未進行任何真實支付。'; }
        writeCart([]);
      });
    });
  }

  /* ---------- 全局 ---------- */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-add]');
    if (a) {
      e.preventDefault();
      var q = $('#qty');
      addToCart(a.getAttribute('data-add'), q ? parseInt(q.value || '1', 10) : 1);
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    paintCount();
    initCategory();
    initProduct();
    initCartEvents();
    renderCart();
    initCheckout();
  });
})();
