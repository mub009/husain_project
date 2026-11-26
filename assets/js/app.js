(function () {
  'use strict';
  var C = window.CATALOG;
  var co = C.company;

  var T = {
    ar: {
      skip: 'انتقل إلى المنتجات', company: co.name.ar, tagline: co.tagline.ar,
      navDevices: 'الأجهزة', navCatalog: 'المنتجات', navContact: 'تواصل معنا',
      heroTitle: 'كل ما تحتاجه عيادتك للتجميل والتعافي بعد العمليات',
      heroLead: 'أجهزة متقدمة للعناية بالبشرة، ومشدات ضغط طبية من أورافكس بشهادات ISO 13485 و ISO 9001، لعيادات التجميل والجراحة التجميلية.',
      browse: 'تصفح المنتجات', askQuote: 'اطلب عرض سعر',
      f1: 'منتجاً في الكتالوج', f2: 'أسابيع من الضغط الفعّال', f3: 'تقنية في جهاز هيدرا ماستر',
      devTitle: 'أجهزة العناية بالبشرة', devLead: 'أجهزة احترافية للعيادات ومراكز التجميل، بشهادات CE و FDA و ISO 13485.',
      catTitle: 'مشدات ومستلزمات ما بعد العمليات',
      catLead: 'من أورافكس — قماش مضاد للبكتيريا، يُلبس من 4 إلى 8 أسابيع حسب كمية الدهون المزالة.',
      searchLabel: 'ابحث في المنتجات', searchPh: 'ابحث بالاسم أو الرمز، مثل LC-1500',
      all: 'الكل', empty: 'لا توجد منتجات مطابقة. جرّب كلمة أخرى أو اختر "الكل".',
      count: function (n) { return n === 1 ? 'منتج واحد' : n === 2 ? 'منتجان' : (n <= 10 ? n + ' منتجات' : n + ' منتجاً'); },
      fabTitle: 'أقمشة أورافكس',
      fab1: 'قماش مضاد للبكتيريا يسرّع التئام مناطق العملية، متين ومرن، ويحافظ على الضغط 8 أسابيع بمقاومة مضاعفة 5 مرات.',
      fab2: 'ملمس قطني ناعم وثبات كامل، مضاد للبكتيريا وللحساسية ولطيف على البشرة.',
      fab3: 'قماش منسوج خاص يتكيّف مع منطقة الاستخدام بمرونة عالية، ويزيد راحة المريض وسهولة الاستخدام.',
      contactTitle: 'اطلب عرض سعر أو استشارة',
      contactLead: 'أرسل لنا رمز المنتج والمقاس والكمية، وسنرد عليك بالسعر وموعد التوريد.',
      brochures: 'الكتالوجات الأصلية (PDF):',
      phone: 'الهاتف', whatsapp: 'واتساب', email: 'البريد الإلكتروني', web: 'الموقع',
      details: 'التفاصيل', indications: 'دواعي الاستخدام', sizeChart: 'جدول المقاسات',
      quote: 'اطلب عرض سعر عبر واتساب', brochure: 'تحميل الكتالوج (PDF)',
      specs: 'المواصفات', modules: 'التقنيات المدمجة', steps: 'خطوات الجلسة', goodFor: 'مناسب لـ',
      variant: 'متوفر أيضاً بقماش أورافكس كوتن:', view: 'عرض المنتج',
      waMsg: function (p) { return 'مرحباً، أرغب في عرض سعر للمنتج: ' + p.id + ' — ' + p.title.ar; },
      waGeneral: 'مرحباً، أرغب في الاستفسار عن منتجاتكم.',
      other: 'English', title: 'أورافكس للمنتجات الصحية | كتالوج المنتجات'
    },
    en: {
      skip: 'Skip to products', company: co.name.en, tagline: co.tagline.en,
      navDevices: 'Devices', navCatalog: 'Products', navContact: 'Contact',
      heroTitle: 'Everything your clinic needs for aesthetics and post-op recovery',
      heroLead: 'Advanced skin-care devices and Aurafix medical compression garments, certified ISO 13485 and ISO 9001, for aesthetic and plastic-surgery clinics.',
      browse: 'Browse products', askQuote: 'Request a quote',
      f1: 'products in the catalog', f2: 'weeks of effective compression', f3: 'technologies in HydraMaster',
      devTitle: 'Skin-care devices', devLead: 'Professional devices for clinics and beauty centers, certified CE, FDA and ISO 13485.',
      catTitle: 'Post-op garments & accessories',
      catLead: 'By Aurafix — antibacterial fabric, worn for 4 to 8 weeks depending on the amount of fat removed.',
      searchLabel: 'Search products', searchPh: 'Search by name or code, e.g. LC-1500',
      all: 'All', empty: 'No matching products. Try another word or choose "All".',
      count: function (n) { return n + (n === 1 ? ' product' : ' products'); },
      fabTitle: 'Aurafix fabrics',
      fab1: 'Antibacterial fabric that speeds healing of operated areas — durable and flexible, holding compression for 8 weeks with 5-fold resistance.',
      fab2: 'Soft cotton touch with a full grip, antibacterial, anti-allergic and skin friendly.',
      fab3: 'A specially woven fabric that adapts closely to the treated area, improving patient comfort and ease of use.',
      contactTitle: 'Request a quote or consultation',
      contactLead: 'Send us the product code, size and quantity and we will reply with pricing and delivery time.',
      brochures: 'Original catalogs (PDF):',
      phone: 'Phone', whatsapp: 'WhatsApp', email: 'Email', web: 'Website',
      details: 'Details', indications: 'Indications', sizeChart: 'Size chart',
      quote: 'Request a quote on WhatsApp', brochure: 'Download brochure (PDF)',
      specs: 'Specifications', modules: 'Built-in technologies', steps: 'Treatment steps', goodFor: 'Good for',
      variant: 'Also available in Aurafix Cotton:', view: 'View product',
      waMsg: function (p) { return 'Hello, I would like a quote for: ' + p.id + ' — ' + p.title.en; },
      waGeneral: 'Hello, I would like to ask about your products.',
      other: 'العربية', title: 'Aurafix Health Products | Product Catalog'
    }
  };

  var lang = 'ar';
  try { lang = localStorage.getItem('sh-lang') || 'ar'; } catch (e) {}
  var state = { cat: 'all', q: '' };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var wa = function (text) { return 'https://wa.me/' + co.whatsapp + '?text=' + encodeURIComponent(text); };
  var catName = function (id) { var c = C.cats.filter(function (x) { return x.id === id; })[0]; return c ? c[lang] : ''; };

  function applyLang() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = t.title;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.placeholder = t[el.getAttribute('data-i18n-ph')]; });
    $('#langBtn').textContent = t.other;
    $('#langBtn').setAttribute('lang', lang === 'ar' ? 'en' : 'ar');
    $('#heroWa').href = wa(t.waGeneral);
    $('#waFloat').href = wa(t.waGeneral);
    renderContacts(); renderLineup(); renderDevices(); renderTabs(); renderGrid();
  }

  function renderContacts() {
    var t = T[lang];
    $('#contactList').innerHTML =
      '<li><span>' + t.whatsapp + '</span><a dir="ltr" href="' + wa(t.waGeneral) + '" target="_blank" rel="noopener">' + co.whatsappDisplay + '</a></li>' +
      '<li><span>' + t.phone + '</span><a dir="ltr" href="tel:' + co.phone + '">' + co.phoneDisplay + '</a></li>' +
      (co.email ? '<li><span>' + t.email + '</span><a dir="ltr" href="mailto:' + co.email + '">' + co.email + '</a></li>' : '') +
      (co.web ? '<li><span>' + t.web + '</span><a dir="ltr" href="https://' + co.web + '" target="_blank" rel="noopener">' + co.web + '</a></li>' : '');
  }

  function renderLineup() {
    var picks = ['LC-1581', 'LC-1505', 'LC-1720', 'LC-1600', 'LC-1586', 'LC-1905'];
    $('#lineup').innerHTML = picks.map(function (id, i) {
      var p = C.products.filter(function (x) { return x.id === id; })[0];
      return '<img src="' + p.images[0] + '" alt="" style="--i:' + i + '" loading="eager">';
    }).join('');
  }

  function renderDevices() {
    var t = T[lang];
    var devs = C.products.filter(function (p) { return p.cat === 'devices'; });
    $('#devList').innerHTML = devs.map(function (p, i) {
      return '<article class="dev' + (i === 0 ? ' dev-lead' : '') + '">' +
        '<div class="dev-img"><img src="' + p.images[0] + '" alt="' + esc(p.title[lang]) + '" loading="lazy" decoding="async"></div>' +
        '<div class="dev-copy"><p class="code">' + esc(p.brand) + '</p><h3>' + esc(p.title[lang]) + '</h3>' +
        '<p>' + esc(p.desc[lang]) + '</p>' +
        '<ul class="chips">' + p.tags[lang].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        '<button class="btn btn-primary" type="button" data-open="' + p.id + '">' + t.details + '</button></div></article>';
    }).join('');
  }

  function renderTabs() {
    var t = T[lang];
    var cats = C.cats.filter(function (c) { return c.id !== 'devices'; });
    var html = '<button role="tab" type="button" data-cat="all" aria-selected="' + (state.cat === 'all') + '">' + t.all + '</button>';
    html += cats.map(function (c) {
      return '<button role="tab" type="button" data-cat="' + c.id + '" aria-selected="' + (state.cat === c.id) + '">' + esc(c[lang]) + '</button>';
    }).join('');
    $('#tabs').innerHTML = html;
  }

  function matches(p) {
    if (p.cat === 'devices') return false;
    if (state.cat !== 'all' && p.cat !== state.cat) return false;
    if (!state.q) return true;
    var hay = (p.id + ' ' + (p.variant || '') + ' ' + p.title.en + ' ' + p.title.ar + ' ' + p.desc.en + ' ' + p.desc.ar).toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) > -1; });
  }

  function renderGrid() {
    var t = T[lang];
    var list = C.products.filter(matches);
    $('#count').textContent = t.count(list.length);
    $('#empty').hidden = list.length > 0;
    $('#grid').innerHTML = list.map(function (p) {
      return '<button class="card" type="button" data-open="' + p.id + '" aria-label="' + esc(t.view + ': ' + p.id + ' ' + p.title[lang]) + '">' +
        '<span class="card-img"><img src="' + p.images[0] + '" alt="" loading="lazy" decoding="async"></span>' +
        '<span class="card-body"><span class="code" dir="ltr">' + p.id + '</span>' +
        '<span class="card-title">' + esc(p.title[lang]) + '</span>' +
        '<span class="card-cat">' + esc(catName(p.cat)) + '</span></span></button>';
    }).join('');
  }

  var lastFocus = null;
  function openSheet(id) {
    var t = T[lang];
    var p = C.products.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    var h = '';
    h += '<div class="gal' + (p.cat === 'devices' ? ' gal-dev' : '') + '">' + p.images.map(function (src, i) {
      return '<img src="' + src + '" alt="' + esc(p.title[lang]) + (i ? ' (' + (i + 1) + ')' : '') + '">';
    }).join('') + '</div>';
    h += '<p class="code" dir="ltr">' + esc(p.cat === 'devices' ? p.brand : p.id) + '</p>';
    h += '<h2 id="sheetTitle">' + esc(p.title[lang]) + '</h2>';
    if (p.tags && p.tags[lang].length) h += '<ul class="chips">' + p.tags[lang].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    h += '<p class="desc">' + esc(p.desc[lang]) + '</p>';
    if (p.variant) h += '<p class="variant">' + t.variant + ' <b dir="ltr">' + p.variant + '</b></p>';
    var waBtn = '<a class="btn btn-wa" href="' + wa(t.waMsg(p)) + '" target="_blank" rel="noopener">' + t.quote + '</a>';
    h += '<div class="sheet-cta">' + waBtn + (p.brochure ? '<a class="btn btn-ghost" href="' + p.brochure + '" target="_blank" rel="noopener">' + t.brochure + '</a>' : '') + '</div>';
    if (p.ind && p.ind[lang].length) h += '<h3>' + t.indications + '</h3><ul class="ticks">' + p.ind[lang].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (p.steps) h += '<h3>' + t.steps + '</h3><ol class="steps">' + p.steps[lang].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>';
    if (p.goodFor) h += '<h3>' + t.goodFor + '</h3><ul class="chips chips-soft">' + p.goodFor[lang].map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (p.modules) h += '<h3>' + t.modules + '</h3><div class="mods">' + p.modules.map(function (m) {
      return '<figure><img src="' + m.img + '" alt="" loading="lazy" decoding="async"><figcaption><b>' + esc(m[lang]) + '</b><span>' + esc(lang === 'ar' ? m.dar : m.den) + '</span></figcaption></figure>';
    }).join('') + '</div>';
    if (p.specs) h += '<h3>' + t.specs + '</h3><dl class="specs">' + p.specs.map(function (s) { return '<div><dt>' + esc(s.k[lang]) + '</dt><dd>' + esc(s.v[lang]) + '</dd></div>'; }).join('') + '</dl>';
    if (p.size) h += '<h3>' + t.sizeChart + '</h3><img class="size" src="' + p.size + '" alt="' + t.sizeChart + ' ' + p.id + '" loading="lazy" decoding="async" dir="ltr">';
    $('#sheetBody').innerHTML = h;
    lastFocus = document.activeElement;
    $('#sheet').hidden = false;
    document.body.classList.add('locked');
    requestAnimationFrame(function () { $('#sheet').classList.add('open'); $('.sheet-panel').focus(); });
    try { history.replaceState(null, '', '#p=' + p.id); } catch (e) {}
  }
  function closeSheet() {
    $('#sheet').classList.remove('open');
    document.body.classList.remove('locked');
    setTimeout(function () { $('#sheet').hidden = true; }, 220);
    try { history.replaceState(null, '', location.pathname); } catch (e) {}
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener('click', function (e) {
    var o = e.target.closest('[data-open]');
    if (o) { openSheet(o.getAttribute('data-open')); return; }
    if (e.target.closest('[data-close]')) { closeSheet(); return; }
    var tab = e.target.closest('[data-cat]');
    if (tab) { state.cat = tab.getAttribute('data-cat'); renderTabs(); renderGrid(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !$('#sheet').hidden) closeSheet();
    if (e.key === 'Tab' && !$('#sheet').hidden) {
      var f = $('.sheet-panel').querySelectorAll('a,button');
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  $('#q').addEventListener('input', function (e) { state.q = e.target.value.trim(); renderGrid(); });
  $('#langBtn').addEventListener('click', function () {
    lang = lang === 'ar' ? 'en' : 'ar';
    try { localStorage.setItem('sh-lang', lang); } catch (e) {}
    applyLang();
  });
  $('#yr').textContent = new Date().getFullYear();

  applyLang();
  var m = location.hash.match(/^#p=(.+)$/);
  if (m) openSheet(decodeURIComponent(m[1]));
})();
