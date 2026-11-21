/* 搜尋頁：全站 7,780+ SKU 客戶端檢索 */
(function () {
  'use strict';
  var DATA = null, ALL = [], page = 1, per = 40, KEY = '';
  function $(s) { return document.querySelector(s); }
  function money(v) { return '$' + Number(v || 0).toLocaleString('en-HK', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]; }); }
  function slug(s) { return String(s).trim().toLowerCase().replace(/['"’]/g, '').replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-').replace(/^-+|-+$/g, '') || 'x'; }

  function card(p) {
    var img = p.i || '/media/site/placeholder.svg';
    var off = p.d > 0 ? '<span class="off">-' + Math.round(p.d) + '%</span>' : '';
    var was = (p.r && p.f && p.r > p.f) ? '<span class="was">' + money(p.r) + '</span>' : '';
    return '<article class="card" data-sku="' + p.sku + '">' +
      '<a class="thumb" href="/p/' + p.sku + '.html"><img src="' + img + '" alt="' + esc(p.n) + '" loading="lazy"></a>' +
      '<a class="brand" href="/b/' + slug(p.b || '') + '.html">' + esc(p.b || '') + '</a>' +
      '<a class="name" href="/p/' + p.sku + '.html">' + esc(p.n) + '</a>' +
      '<div class="size">' + esc(p.s || '') + '</div>' +
      '<div class="prices"><span class="now">' + money(p.f) + '</span>' + was + off + '</div>' +
      '<button class="add" data-add="' + p.sku + '">加入購物車</button></article>';
  }

  function run() {
    var q = KEY.trim().toLowerCase();
    var list = !q ? ALL.slice(0, 200) : ALL.filter(function (p) {
      return (p.n && p.n.toLowerCase().indexOf(q) >= 0) || (p.b && p.b.toLowerCase().indexOf(q) >= 0) || String(p.sku).indexOf(q) >= 0;
    });
    var pages = Math.max(1, Math.ceil(list.length / per));
    if (page > pages) page = pages;
    var grid = $('#grid'); if (!grid) return;
    grid.innerHTML = list.slice((page - 1) * per, page * per).map(card).join('') ||
      '<div class="empty" style="grid-column:1/-1">沒有符合「' + esc(KEY) + '」的商品</div>';
    $('#scount').textContent = q ? '找到 ' + list.length + ' 件商品' : '輸入關鍵字開始搜尋，共 ' + ALL.length + ' 件商品可搜';
    $('#stitle').textContent = q ? '搜尋：' + KEY : '搜尋商品';
    var pg = $('#pager'), html = '';
    var start = Math.max(1, page - 2), end = Math.min(pages, start + 4);
    if (page > 1) html += '<button data-p="' + (page - 1) + '">‹</button>';
    for (var i = start; i <= end; i++) html += '<button data-p="' + i + '" class="' + (i === page ? 'on' : '') + '">' + i + '</button>';
    if (page < pages) html += '<button data-p="' + (page + 1) + '">›</button>';
    pg.innerHTML = pages > 1 ? html : '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var params = new URLSearchParams(location.search);
    KEY = params.get('q') || '';
    var input = $('#sq'); if (input) {
      input.value = KEY;
      input.addEventListener('input', function () { KEY = input.value; page = 1; run(); });
    }
    var pg = $('#pager');
    if (pg) pg.addEventListener('click', function (e) {
      var b = e.target.closest('[data-p]'); if (!b) return;
      page = Number(b.getAttribute('data-p')); run(); window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    fetch('/data/catalog.json').then(function (r) { return r.json(); }).then(function (j) {
      ALL = j.products || [];
      if (params.get('sort') === 'new') { ALL = ALL.slice().reverse(); }
      run();
    });
  });
})();
