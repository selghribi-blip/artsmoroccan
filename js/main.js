/* ============================================================
   Arts Moroccan — Main JavaScript
   Features: i18n, product filter, cart, lazy load, mobile nav
   ============================================================ */

'use strict';

/* ------------------------------------------------------------------ */
/*  1. TRANSLATIONS                                                     */
/* ------------------------------------------------------------------ */
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_products: "المنتجات",
    nav_about: "من نحن",
    nav_contact: "اتصل بنا",
    nav_cart: "السلة",
    hero_title: "الفنون المغربية الأصيلة",
    hero_subtitle: "اكتشف جمال الحرف اليدوية المغربية التقليدية",
    hero_cta: "تسوق الآن",
    hero_cta2: "اكتشف المزيد",
    featured_title: "منتجات مميزة",
    featured_subtitle: "مجموعة مختارة من أجمل الحرف المغربية",
    about_title: "من نحن",
    about_text: "نحن متجر متخصص في بيع الفنون والحرف المغربية التقليدية الأصيلة. نقدم مجموعة واسعة من الفخار والسجاد والمجوهرات الأمازيغية والأعمال الخشبية والمنتجات الجلدية والتحف القديمة.",
    contact_title: "اتصل بنا",
    contact_subtitle: "نحن هنا للإجابة على جميع استفساراتكم",
    services_title: "خدماتنا",
    services_subtitle: "نقدم لك أفضل خدمات الفنون والحرف المغربية الأصيلة",
    service_pottery: "الفخار والخزف",
    service_pottery_desc: "تحف فخارية وخزفية مصنوعة يدويًا بألوان مغربية أصيلة من حرفيي فاس ومراكش.",
    service_textiles: "السجاد والنسيج",
    service_textiles_desc: "سجاد أمازيغي وبربري بزخارف تقليدية محكمة مُحاكة بالطرق الأصيلة.",
    service_jewelry: "المجوهرات الأمازيغية",
    service_jewelry_desc: "حلي ومجوهرات فضية بزخارف الجنوب المغربي مُصنوعة يدويًا بخبرة عريقة.",
    service_woodwork: "النجارة والخشب المنقوش",
    service_woodwork_desc: "أعمال خشبية منقوشة ومطعمة بأنماط مراكشية فريدة، تُزيّن المنازل والمكاتب.",
    service_leather: "الجلديات التقليدية",
    service_leather_desc: "حقائب وأحذية وأحزمة جلدية مدبوغة بطريقة تقليدية من دباغي فاس العتيقة.",
    service_shipping: "توصيل دولي آمن",
    service_shipping_desc: "نشحن منتجاتنا إلى جميع دول العالم بتغليف محكم وضمان كامل لسلامة البضاعة.",
    testimonials_title: "شهادات عملائنا",
    testimonials_subtitle: "ماذا يقول عملاؤنا عن تجربتهم معنا",
    form_success: "تم إرسال رسالتك بنجاح! سنرد عليك خلال 24 ساعة.",
    form_error: "حدث خطأ أثناء الإرسال. يرجى المحاولة مجددًا.",
    nav_services: "خدماتنا",
    footer_newsletter: "اشترك في نشرتنا البريدية",
    footer_newsletter_placeholder: "أدخل بريدك الإلكتروني",
    footer_newsletter_btn: "اشترك",
    footer_rights: "جميع الحقوق محفوظة",
    add_to_cart: "أضف للسلة",
    filter_all: "الكل",
    filter_pottery: "فخار",
    filter_textiles: "نسيج",
    filter_jewelry: "مجوهرات",
    filter_woodwork: "أعمال خشبية",
    filter_leather: "جلديات",
    filter_vintage: "تحف قديمة",
    products_title: "كتالوج المنتجات",
    products_subtitle: "اكتشف مجموعتنا من الحرف المغربية الأصيلة",
    about_page_title: "قصتنا",
    about_page_subtitle: "شغف بالتراث المغربي الأصيل",
    contact_page_title: "تواصل معنا",
    contact_name: "الاسم الكامل",
    contact_email: "البريد الإلكتروني",
    contact_phone: "رقم الهاتف",
    contact_message: "رسالتك",
    contact_send: "إرسال",
    cart_title: "سلة التسوق",
    cart_empty: "السلة فارغة",
    cart_total: "المجموع",
    cart_checkout: "إتمام الشراء",
    cart_remove: "إزالة",
    back_to_top: "العودة للأعلى",
    currency: "درهم",
    loading: "جاري التحميل...",
    no_products: "لا توجد منتجات في هذه الفئة",
    view_details: "عرض التفاصيل",
    in_stock: "متوفر",
    out_of_stock: "غير متوفر"
  },
  fr: {
    nav_home: "Accueil",
    nav_products: "Produits",
    nav_about: "À propos",
    nav_contact: "Contact",
    nav_cart: "Panier",
    hero_title: "Arts Marocains Authentiques",
    hero_subtitle: "Découvrez la beauté de l'artisanat traditionnel marocain",
    hero_cta: "Acheter maintenant",
    hero_cta2: "Découvrir plus",
    featured_title: "Produits en vedette",
    featured_subtitle: "Une sélection des plus beaux artisanats marocains",
    about_title: "À propos",
    about_text: "Nous sommes une boutique spécialisée dans la vente d'arts et d'artisanats marocains traditionnels authentiques. Nous proposons une large gamme de poteries, tapis, bijoux berbères, objets en bois, maroquinerie et antiquités.",
    contact_title: "Contactez-nous",
    contact_subtitle: "Nous sommes là pour répondre à toutes vos questions",
    services_title: "Nos Services",
    services_subtitle: "Découvrez l'excellence de l'artisanat marocain authentique",
    service_pottery: "Poterie & Céramique",
    service_pottery_desc: "Pièces en céramique faites à la main avec des couleurs marocaines authentiques.",
    service_textiles: "Tapis & Tissus",
    service_textiles_desc: "Tapis berbères et amazighs aux motifs traditionnels tissés selon des techniques ancestrales.",
    service_jewelry: "Bijoux Amazighs",
    service_jewelry_desc: "Bijoux en argent ornés de motifs du sud marocain, façonnés à la main avec savoir-faire.",
    service_woodwork: "Boiserie Sculptée",
    service_woodwork_desc: "Pièces en bois sculpté avec des motifs marrakchis uniques pour décorer maison et bureau.",
    service_leather: "Maroquinerie Traditionnelle",
    service_leather_desc: "Sacs, chaussures et ceintures en cuir tanné selon la méthode traditionnelle de Fès.",
    service_shipping: "Livraison Internationale",
    service_shipping_desc: "Nous expédions dans le monde entier avec un emballage soigné et une garantie complète.",
    testimonials_title: "Témoignages Clients",
    testimonials_subtitle: "Ce que nos clients disent de leur expérience",
    form_success: "Message envoyé avec succès ! Nous vous répondrons dans 24 heures.",
    form_error: "Une erreur s'est produite. Veuillez réessayer.",
    nav_services: "Services",
    footer_newsletter: "Abonnez-vous à notre newsletter",
    footer_newsletter_placeholder: "Entrez votre email",
    footer_newsletter_btn: "S'abonner",
    footer_rights: "Tous droits réservés",
    add_to_cart: "Ajouter au panier",
    filter_all: "Tout",
    filter_pottery: "Poterie",
    filter_textiles: "Textiles",
    filter_jewelry: "Bijoux",
    filter_woodwork: "Boiserie",
    filter_leather: "Maroquinerie",
    filter_vintage: "Vintage",
    products_title: "Catalogue de produits",
    products_subtitle: "Découvrez notre collection d'artisanat marocain authentique",
    about_page_title: "Notre histoire",
    about_page_subtitle: "Passion pour le patrimoine marocain authentique",
    contact_page_title: "Contactez-nous",
    contact_name: "Nom complet",
    contact_email: "Adresse email",
    contact_phone: "Numéro de téléphone",
    contact_message: "Votre message",
    contact_send: "Envoyer",
    cart_title: "Panier",
    cart_empty: "Le panier est vide",
    cart_total: "Total",
    cart_checkout: "Commander",
    cart_remove: "Supprimer",
    back_to_top: "Retour en haut",
    currency: "MAD",
    loading: "Chargement...",
    no_products: "Aucun produit dans cette catégorie",
    view_details: "Voir détails",
    in_stock: "En stock",
    out_of_stock: "Rupture de stock"
  },
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_about: "About",
    nav_contact: "Contact",
    nav_cart: "Cart",
    hero_title: "Authentic Moroccan Arts",
    hero_subtitle: "Discover the beauty of traditional Moroccan handcrafts",
    hero_cta: "Shop Now",
    hero_cta2: "Explore More",
    featured_title: "Featured Products",
    featured_subtitle: "A curated selection of the finest Moroccan crafts",
    about_title: "About Us",
    about_text: "We are a specialized store selling authentic traditional Moroccan arts and crafts. We offer a wide range of pottery, rugs, Berber jewelry, woodwork, leather goods, and antiques.",
    contact_title: "Contact Us",
    contact_subtitle: "We are here to answer all your inquiries",
    services_title: "Our Services",
    services_subtitle: "Discover the finest Moroccan arts and crafts services",
    service_pottery: "Pottery & Ceramics",
    service_pottery_desc: "Handcrafted ceramic pieces with authentic Moroccan colors from Fès and Marrakech artisans.",
    service_textiles: "Carpets & Textiles",
    service_textiles_desc: "Berber and Amazigh carpets with traditional patterns woven using ancestral techniques.",
    service_jewelry: "Amazigh Jewelry",
    service_jewelry_desc: "Silver jewelry with Southern Moroccan motifs, hand-crafted with generations of expertise.",
    service_woodwork: "Sculpted Woodwork",
    service_woodwork_desc: "Carved and inlaid wooden pieces with unique Marrakchi patterns to adorn homes and offices.",
    service_leather: "Traditional Leather Goods",
    service_leather_desc: "Bags, shoes, and belts tanned in the traditional method from the ancient tanneries of Fès.",
    service_shipping: "Safe International Shipping",
    service_shipping_desc: "We ship worldwide with secure packaging and a full guarantee for your merchandise.",
    testimonials_title: "Customer Testimonials",
    testimonials_subtitle: "What our customers say about their experience with us",
    form_success: "Your message was sent successfully! We will reply within 24 hours.",
    form_error: "An error occurred while sending. Please try again.",
    nav_services: "Services",
    footer_newsletter: "Subscribe to our newsletter",
    footer_newsletter_placeholder: "Enter your email",
    footer_newsletter_btn: "Subscribe",
    footer_rights: "All rights reserved",
    add_to_cart: "Add to Cart",
    filter_all: "All",
    filter_pottery: "Pottery",
    filter_textiles: "Textiles",
    filter_jewelry: "Jewelry",
    filter_woodwork: "Woodwork",
    filter_leather: "Leather",
    filter_vintage: "Vintage",
    products_title: "Product Catalog",
    products_subtitle: "Discover our collection of authentic Moroccan crafts",
    about_page_title: "Our Story",
    about_page_subtitle: "Passion for authentic Moroccan heritage",
    contact_page_title: "Get in Touch",
    contact_name: "Full name",
    contact_email: "Email address",
    contact_phone: "Phone number",
    contact_message: "Your message",
    contact_send: "Send",
    cart_title: "Shopping Cart",
    cart_empty: "Your cart is empty",
    cart_total: "Total",
    cart_checkout: "Checkout",
    cart_remove: "Remove",
    back_to_top: "Back to top",
    currency: "MAD",
    loading: "Loading...",
    no_products: "No products in this category",
    view_details: "View details",
    in_stock: "In stock",
    out_of_stock: "Out of stock"
  }
};

/* ------------------------------------------------------------------ */
/*  2. STATE                                                            */
/* ------------------------------------------------------------------ */
let currentLang = localStorage.getItem('am_lang') || 'ar';
let cart = JSON.parse(localStorage.getItem('am_cart') || '[]');

/* ------------------------------------------------------------------ */
/*  3. LANGUAGE / i18n                                                  */
/* ------------------------------------------------------------------ */
function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('am_lang', lang);

  // direction
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lang);

  // translate all elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text === undefined) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  // translate placeholders via data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = translations[lang][key];
    if (text !== undefined) el.placeholder = text;
  });

  // mark active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ------------------------------------------------------------------ */
/*  4. SHOPPING CART                                                    */
/* ------------------------------------------------------------------ */
function saveCart() {
  localStorage.setItem('am_cart', JSON.stringify(cart));
}

function addToCart(id, name, price, img) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, img, qty: 1 });
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
  openCart();
  showToast(translations[currentLang]['add_to_cart'] + ' ✓');
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function updateCartBadge() {
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = total;
    badge.classList.toggle('visible', total > 0);
  });
}

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  if (!container) return;

  const t = translations[currentLang];

  if (cart.length === 0) {
    container.innerHTML = '';
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'cart-empty-msg';
    emptyDiv.innerHTML = '<div class="empty-icon">🛒</div>';
    const emptyP = document.createElement('p');
    emptyP.setAttribute('data-i18n', 'cart_empty');
    emptyP.textContent = t.cart_empty;
    emptyDiv.appendChild(emptyP);
    container.appendChild(emptyDiv);
    updateCartTotal();
    return;
  }

  container.innerHTML = '';
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.dataset.id = item.id;

    const img = document.createElement('img');
    img.className = 'cart-item-img';
    img.src = item.img;
    img.alt = item.name;
    img.loading = 'lazy';

    const info = document.createElement('div');
    info.className = 'cart-item-info';
    const nameEl  = document.createElement('div'); nameEl.className = 'cart-item-name';  nameEl.textContent = item.name;
    const priceEl = document.createElement('div'); priceEl.className = 'cart-item-price'; priceEl.textContent = `${item.price} ${t.currency}`;
    const qtyEl   = document.createElement('div'); qtyEl.className = 'cart-item-qty';   qtyEl.textContent = `x${item.qty}`;
    info.append(nameEl, priceEl, qtyEl);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'cart-item-remove';
    removeBtn.setAttribute('aria-label', t.cart_remove);
    removeBtn.textContent = '✕';
    removeBtn.dataset.itemId = item.id;

    row.append(img, info, removeBtn);
    container.appendChild(row);
  });

  // Event delegation for remove buttons — no inline handlers
  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.itemId));
  });

  updateCartTotal();
}

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const t = translations[currentLang];
  document.querySelectorAll('.cart-total-amount').forEach(el => {
    el.textContent = `${total} ${t.currency}`;
  });
}

function openCart() {
  document.getElementById('cart-sidebar')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cart-sidebar')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ------------------------------------------------------------------ */
/*  5. PRODUCT FILTERING                                                */
/* ------------------------------------------------------------------ */
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card[data-category]');
  const t = translations[currentLang];
  let visible = 0;

  cards.forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  // show/hide no-products message
  let msg = document.querySelector('.no-products-msg');
  if (visible === 0) {
    if (!msg) {
      msg = document.createElement('p');
      msg.className = 'no-products-msg';
      document.querySelector('.products-grid')?.appendChild(msg);
    }
    msg.textContent = t.no_products;
    msg.style.display = '';
  } else if (msg) {
    msg.style.display = 'none';
  }

  // update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });
}

/* ------------------------------------------------------------------ */
/*  6. MOBILE NAVIGATION                                                */
/* ------------------------------------------------------------------ */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // close on outside click
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // close on nav link click (mobile)
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ------------------------------------------------------------------ */
/*  7. SMOOTH SCROLLING                                                 */
/* ------------------------------------------------------------------ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ------------------------------------------------------------------ */
/*  8. IMAGE LAZY LOADING                                               */
/* ------------------------------------------------------------------ */
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  if (!images.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '100px' });

  images.forEach(img => {
    img.classList.add('img-lazy');
    observer.observe(img);
  });
}

/* ------------------------------------------------------------------ */
/*  9. BACK TO TOP                                                      */
/* ------------------------------------------------------------------ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const toggle = () => btn.classList.toggle('visible', window.scrollY > 400);
  window.addEventListener('scroll', toggle, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ------------------------------------------------------------------ */
/*  10. TOAST NOTIFICATION                                              */
/* ------------------------------------------------------------------ */
let toastTimer;
function showToast(message) {
  let toast = document.getElementById('am-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'am-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ------------------------------------------------------------------ */
/*  11. CONTACT FORM (Formspree)                                        */
/* ------------------------------------------------------------------ */
/**
 * Submit a form to Formspree via async fetch.
 * @param {HTMLFormElement} form - The form element (must have a valid Formspree action URL).
 * @param {HTMLElement|null} statusEl - Optional element to display success/error message.
 */
async function submitFormspree(form, statusEl) {
  const t = translations[currentLang];
  const data = new FormData(form);
  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      if (statusEl) {
        statusEl.textContent = t.form_success || 'Message sent successfully!';
        statusEl.className = 'form-status success';
      }
      showToast('✉️ ' + (t.form_success || 'Sent ✓'));
      form.reset();
    } else {
      const json = await res.json().catch(() => ({}));
      const msg = (json.errors && json.errors.map(e => e.message).join(', ')) || t.form_error || 'Error sending message.';
      if (statusEl) {
        statusEl.textContent = msg;
        statusEl.className = 'form-status error';
      }
      showToast('⚠️ ' + (t.form_error || 'Error'));
    }
  } catch (err) {
    if (statusEl) {
      statusEl.textContent = t.form_error || 'Connection error.';
      statusEl.className = 'form-status error';
    }
    showToast('⚠️ ' + (t.form_error || 'Connection error'));
  }
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const statusEl = document.getElementById('contact-form-status');
  form.addEventListener('submit', e => {
    e.preventDefault();
    submitFormspree(form, statusEl);
  });
}

function initLandingContactForm() {
  const form = document.getElementById('landing-contact-form');
  if (!form) return;
  const statusEl = document.getElementById('lc-status');
  form.addEventListener('submit', e => {
    e.preventDefault();
    submitFormspree(form, statusEl);
  });
}

/* ------------------------------------------------------------------ */
/*  12. NEWSLETTER FORM                                                 */
/* ------------------------------------------------------------------ */
function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      showToast('📧 ' + (translations[currentLang].footer_newsletter_btn || 'Subscribed') + ' ✓');
      form.reset();
    });
  });
}

/* ------------------------------------------------------------------ */
/*  13. ACTIVE NAV LINK                                                 */
/* ------------------------------------------------------------------ */
function setActiveNavLink() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    const linkPage = href.split('/').pop();
    const isActive =
      (path === 'index.html' || path === '') && (linkPage === 'index.html' || linkPage === '') ||
      linkPage === path;
    a.classList.toggle('active', isActive);
  });
}

/* ------------------------------------------------------------------ */
/*  14. INIT                                                            */
/* ------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Cart open/close
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sidebar = document.getElementById('cart-sidebar');
      sidebar?.classList.contains('open') ? closeCart() : openCart();
    });
  });
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);

  // Add-to-cart buttons (product cards)
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.product-card');
      if (!card) return;
      const id    = card.dataset.id;
      const name  = card.querySelector('.product-name')?.textContent || '';
      const price = parseFloat(card.dataset.price) || 0;
      const img   = card.querySelector('img')?.src || '';
      addToCart(id, name, price, img);

      btn.classList.add('added');
      setTimeout(() => btn.classList.remove('added'), 1400);
    });
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
  });

  // Modules
  initMobileNav();
  initSmoothScroll();
  initLazyLoad();
  initBackToTop();
  initContactForm();
  initLandingContactForm();
  initNewsletterForms();
  setActiveNavLink();

  // Apply category filter from URL query param (products.html)
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam && document.querySelector('.filter-btn[data-filter="' + catParam + '"]')) {
    filterProducts(catParam);
  }

  // Apply saved/default language
  applyLanguage(currentLang);

  // Render cart from localStorage
  updateCartBadge();
  renderCartItems();
});
