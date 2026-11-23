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

  loadCart();
  window.addEventListener('pageshow', function () { loadCart(); });
})();
