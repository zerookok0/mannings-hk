/* 站点侧结账页脚本（在 connector 之后加载）
   契约要求：原地 mutate __BP_CART__、金额三处同源、兜底 submit 无条件 preventDefault、
   不写卡片格式化、不读卡片值、不注册 Service Worker。 */
(function () {
  'use strict';

  var CART = window.__BP_CART__;

  function money(n) { return 'HK$' + (Number(n || 0) / 100).toFixed(2); }
  function dollars(precise) { return 'HK$' + Number(precise || 0).toFixed(2); }

  // 原地赋值，绝不整体替换对象
  function assignCart(src) {
    if (!src) return;
    CART.order_number = src.order_number || CART.order_number;
    CART.currency = src.currency || 'HKD';
    CART.total = Number(src.total || 0);
    CART.total_amount = src.total_amount || money(CART.total);
    CART.locale = src.locale || 'zh-Hant';
    CART.items.length = 0;
    (src.items || []).forEach(function (it) {
      CART.items.push({ name: it.name, qty: it.qty, price: it.price });
    });
  }

  // 金额三处同源：#bp-total 文本 = data-amount(整数) = __BP_CART__.total_amount
  function syncTotal() {
    var el = document.getElementById('bp-total');
    var side = document.getElementById('bp-total-side');
    var btn = document.getElementById('bp-submit');
    var txt = CART.total_amount || money(CART.total);
    if (el) el.textContent = txt;
    if (side) side.textContent = txt;
    if (btn) {
      btn.setAttribute('data-amount', String(Math.round(CART.total)));
      btn.setAttribute('data-total-amount', txt);
    }
    try { sessionStorage.setItem('mn_last_total', String((CART.total || 0) / 100)); } catch (e) { }
    var box = document.getElementById('bp-items');
    if (box) {
      box.innerHTML = CART.items.map(function (it) {
        return '<div><span>' + String(it.name || '').slice(0, 24) + ' ×' + it.qty + '</span><span>' + dollars(it.price * it.qty) + '</span></div>';
      }).join('') || '<div style="color:#8b93a1">購物車是空</div>';
    }
  }

  function readCookie(name) {
    var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : '';
  }

  // 读本地购物车（与 /api/cart 同构，用于离线兜底）
  function localCart() {
    try {
      var ck = readCookie('bp_cart');
      if (!ck) return null;
      var b64 = ck.replace(/-/g, '+').replace(/_/g, '/');
      var raw = JSON.parse(decodeURIComponent(escape(atob(b64 + '==='.slice((b64.length + 3) % 4)))));
      var cat = window.__MN_CATALOG__ || null;
      return raw;
    } catch (e) { return null; }
  }

  function loadCart() {
    fetch('/api/cart', { credentials: 'same-origin', cache: 'no-store' })
      .then(function (r) { return r.json(); })
      .then(function (c) {
        assignCart(c);
        syncTotal();
        window.dispatchEvent(new CustomEvent('bp:cart-ready', { detail: CART }));
      })
      .catch(function () {
        syncTotal();
        window.dispatchEvent(new CustomEvent('bp:cart-ready', { detail: CART }));
      });
  }

  // 兜底 submit：在 connector 之后注册，无条件阻止默认提交
  var form = document.getElementById('checkout-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      return false;
    });
  }

  /* ---------- 預計送貨時間：未来 10 天，前 3 天首时段额满 ---------- */
  var WEEK = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  var SLOTS = ['09:00-14:00', '14:00-21:00'];

  function fmtDate(d) {
    return '2026年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
  }

  function buildDays() {
    var out = [];
    var base = new Date();
    base.setHours(0, 0, 0, 0);
    for (var k = 0; k < 10; k++) {
      var d = new Date(base.getTime() + k * 86400000);
      out.push({
        date: d,
        dow: WEEK[d.getDay()],
        dd: (d.getMonth() + 1) + '月' + d.getDate() + '日',
        full: k < 3,           // 前 3 天 09:00-14:00 额满（与目标站一致）
      });
    }
    return out;
  }

  var picked = null;   // { date, slot }
  var pending = null;

  function renderTimes() {
    var box = document.getElementById('time-list');
    if (!box) return;
    var days = buildDays();
    box.innerHTML = days.map(function (d, i) {
      var slots = SLOTS.map(function (s, si) {
        var disabled = d.full && si === 0;
        var on = pending && pending.i === i && pending.slot === s;
        return '<button type="button" class="slot' + (on ? ' on' : '') + '" data-i="' + i + '" data-slot="' + s + '"' + (disabled ? ' disabled' : '') + '>' + s + (disabled ? '（額滿）' : '') + '</button>';
      }).join('');
      return '<div class="day' + (i === 0 ? ' today' : '') + '">' +
        '<div class="day-left"><div class="dow">' + d.dow + '</div><div class="dd">' + d.dd + '</div></div>' +
        '<div class="slots">' + slots + '</div></div>';
    }).join('');
    box.querySelectorAll('.slot:not([disabled])').forEach(function (b) {
      b.addEventListener('click', function () {
        pending = { i: Number(b.getAttribute('data-i')), slot: b.getAttribute('data-slot'), day: days[Number(b.getAttribute('data-i'))] };
        renderTimes();
      });
    });
  }

  function openSheet() {
    var sheet = document.getElementById('time-sheet');
    pending = picked ? { i: picked.i, slot: picked.slot } : { i: 3, slot: SLOTS[0] };
    renderTimes();
    sheet.classList.add('on');
    sheet.setAttribute('aria-hidden', 'false');
  }
  function closeSheet() {
    var sheet = document.getElementById('time-sheet');
    sheet.classList.remove('on');
    sheet.setAttribute('aria-hidden', 'true');
  }

  function paintTime() {
    var el = document.getElementById('time-val');
    if (!el) return;
    if (!picked) {
      el.className = 'mod-empty';
      el.textContent = '尚未選擇送貨時間';
      return;
    }
    el.className = 'mod-val';
    el.textContent = fmtDate(picked.day.date) + '，' + picked.slot;
    try { sessionStorage.setItem('mn_delivery_time', JSON.stringify({ date: fmtDate(picked.day.date), slot: picked.slot })); } catch (e) { }
  }

  var pickBtn = document.getElementById('pick-time');
  if (pickBtn) pickBtn.addEventListener('click', openSheet);
  var sheetClose = document.getElementById('sheet-close');
  if (sheetClose) sheetClose.addEventListener('click', closeSheet);
  var sheetOk = document.getElementById('sheet-ok');
  if (sheetOk) sheetOk.addEventListener('click', function () {
    if (!pending) { closeSheet(); return; }
    picked = { i: pending.i, slot: pending.slot, day: buildDays()[pending.i] };
    paintTime();
    closeSheet();
  });
  var sheet = document.getElementById('time-sheet');
  if (sheet) sheet.addEventListener('click', function (e) { if (e.target === sheet) closeSheet(); });

  /* ---------- 送貨偏好 ---------- */
  var prefBtns = document.querySelectorAll('#pref-btns .pref');
  prefBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      prefBtns.forEach(function (x) { x.classList.remove('on'); });
      b.classList.add('on');
      try { sessionStorage.setItem('mn_delivery_pref', b.getAttribute('data-pref')); } catch (e) { }
    });
  });

  /* 默认选中「放於門口」 */
  if (prefBtns.length) { prefBtns[0].classList.add('on'); }

  loadCart();
  window.addEventListener('pageshow', function () { loadCart(); });
})();
