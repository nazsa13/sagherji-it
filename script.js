(function () {
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuIcon = document.getElementById('menu-icon');
  var closeIcon = document.getElementById('close-icon');

  // Scroll handler
  var navbar = document.getElementById('navbar');
  function handleScroll() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  // Mobile menu toggle
  function setMenuState(open) {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    if (menuIcon) menuIcon.style.display = open ? 'none' : 'inline-flex';
    if (closeIcon) closeIcon.style.display = open ? 'inline-flex' : 'none';
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll('.mobile-link, .mobile-quote, .mobile-theme-toggle').forEach(function (el) {
      el.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) {
        setMenuState(false);
      }
    });
  }

  // Hero carousel
  var carousel = document.getElementById('heroCarousel');
  if (carousel) {
    var slides = carousel.querySelectorAll('.slide');
    var current = 0;
    var total = slides.length;

    if (total > 1) {
      setInterval(function () {
        slides[current].classList.remove('active');
        current = (current + 1) % total;
        slides[current].classList.add('active');
      }, 4000);
    }
  }

  // Dark mode toggle
  var htmlEl = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var themeToggleMobile = document.getElementById('theme-toggle-mobile');

  function setTheme(dark) {
    if (dark) {
      htmlEl.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlEl.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var sun = btn.querySelector('.sun-icon');
      var moon = btn.querySelector('.moon-icon');
      if (sun && moon) {
        sun.style.display = dark ? 'none' : 'block';
        moon.style.display = dark ? 'block' : 'none';
      }
    });
  }

  var saved = localStorage.getItem('theme');
  if (saved === 'light') setTheme(false); else setTheme(true);

  function toggleTheme() {
    var isDark = htmlEl.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  var I18N = {
    en: {
      nav_home: 'Home', nav_services: 'Services', nav_projects: 'Projects', nav_about: 'About', nav_contact: 'Contact', nav_quote: 'Get Quote',
      hero_badge: 'Next-Gen Tech Solutions',
      hero_title_securing: 'Securing Today,', hero_title_powering: 'Powering Tomorrow',
      hero_desc: 'We provide smart, integrated technological solutions for modern security, energy, and communication needs. Transforming the way you live and work.',
      hero_explore: 'Explore Our Services', hero_learn: 'Learn More', hero_projects: 'View Our Projects', hero_enquire: 'Enquire Now',
      stats_projects: 'Successful Projects', stats_engineers: 'Expert Engineers', stats_years: 'Years Experience',
      services_label: 'What We Do', services_title: 'Our Specialized Solutions',
      svc_security_title: 'Security Systems', svc_security_desc: 'Advanced intrusion detection, motion sensors, and crystal-clear 4K video surveillance with remote monitoring for complete protection.',
      svc_lighting_title: 'Lighting Solutions', svc_lighting_desc: 'Design & Supply energy-efficient LED systems with intelligent controls for residential, commercial, and industrial spaces.',
      svc_telecom_title: 'Telecom & Networking Solutions', svc_telecom_desc: 'End-to-end network infrastructure including IP telephony, routers, switches, and wireless backhaul — from copper to fibre to lightbeam.',
      svc_access_title: 'Access Control & Time Attendance', svc_access_desc: 'Comprehensive entry management with biometric readers, smart cards, PIN pads, and integrated time & attendance tracking with automated salary calculation.',
      svc_auto_title: 'Automation & Control Systems', svc_auto_desc: 'Integrated building automation for smart control of lighting, HVAC, shading, and energy management through a single platform.',
      svc_solar_title: 'Solar Energy Solutions', svc_solar_desc: 'Harness the power of the sun with our high-efficiency PV panels and smart energy storage systems.',
      learn_more: 'Learn More',
      btn_view_projects: 'View Our Projects', btn_enquire_now: 'Enquire Now',
      features_title_pre: 'Building the Future of', features_title_hl: 'Integrated Security',
      features_desc: 'We are currently expanding our digital presence to serve you better. Our new platform will feature a full product catalog, online technical support, and real-time project tracking.',
      features_li1: 'Comprehensive site surveys and needs assessment',
      features_li2: 'Professional installation by certified technicians',
      features_li3: 'Lifetime maintenance and 24/7 technical support',
      features_li4: 'Cloud-based management for all security systems',
      features_float_title: 'Fast Installation', features_float_sub: 'Within 48 Hours',
      about_label: 'Who We Are', about_title: 'Trusted Since 1994',
      about_p1: 'Sagherji Integrated Technologies is a premier provider of smart security, energy, communication solutions, lighting, and smart home solutions across Syria and the Middle East. We combine decades of engineering expertise with cutting-edge technology to deliver systems that are reliable, scalable, and future-ready.',
      about_p2: 'From biometric access control and 4K surveillance to solar energy and unified telecom platforms, every solution we deploy is tailored to the unique needs of our clients — whether residential, commercial, or government.',
      val_reliability: 'Reliability', val_reliability_desc: 'Every system backed by 24/7 support and lifetime maintenance.',
      val_innovation: 'Innovation', val_innovation_desc: 'Continuously adopting the latest technologies to stay ahead.',
      val_partnership: 'Partnership', val_partnership_desc: 'Close collaboration with clients from design through deployment.',
      stats_delivered: 'Projects Delivered', stats_engineers2: 'Expert Engineers', stats_years2: 'Years Experience', stats_satisfaction: 'Client Satisfaction',
      contact_title: "Let's Secure Your", contact_title2: 'Project Together',
      contact_desc: 'Have a question or ready to start your journey with us? Our team is standing by to provide expert consultation.',
      contact_hq: 'Our Headquarters', contact_hq_val: 'Maysaloon St.<br/>Damascus - SYRIA',
      contact_call: 'Call Us', contact_email: 'Email Support',
      form_name: 'Name', form_email: 'Email', form_phone: 'Phone', form_property: 'Property Type', form_personal: 'Personal', form_business: 'Business', form_message: 'Message', form_send: 'Send Message', form_msg_ph: 'Tell us about your project...',
      consult_title: 'Get a Free Consultation', consult_name: 'Name', consult_email: 'Email', consult_phone: 'Phone', consult_property: 'Property Type', consult_msg: 'Message', consult_submit: 'Request Consultation', consult_note: 'We respect your privacy. No spam, ever.',
      footer_desc: 'Leading provider of integrated security and smart technology solutions. We protect what matters most to you.',
      footer_solutions: 'Solutions', footer_company: 'Company', footer_about: 'About Us', footer_portfolio: 'Our Portfolio', footer_careers: 'Careers',
      footer_newsletter: 'Newsletter', footer_newsletter_desc: 'Stay updated with the latest tech news.', footer_enter_email: 'Enter email', footer_join: 'Join',
      footer_copy: 'SAGHERJI Integrated Technologies. All rights reserved.',
      partners_title: 'Our Partners', clients_title: 'Our Clients', and_more: 'and more...',
      projects_title: 'Our Projects', projects_sub: 'Explore our portfolio of integrated security, energy, and communication solutions.', projects_soon: 'Coming Soon', projects_soon_p: "We're building a dedicated page for each project category. Check back soon!",
      toast_success: 'Message sent successfully!', toast_consult: 'Consultation request sent!', toast_sub: 'Subscribed! Thank you.'
    },
    ar: {
      nav_home: 'الرئيسية', nav_services: 'الخدمات', nav_projects: 'المشاريع', nav_about: 'من نحن', nav_contact: 'تواصل معنا', nav_quote: 'احصل على عرض',
      hero_badge: 'حلول تقنية للجيل القادم',
      hero_title_securing: 'تأمين الحاضر،', hero_title_powering: 'تمكين المستقبل',
      hero_desc: 'نقدّم حلولاً تقنية ذكية ومتكاملة لاحتياجات الأمن الحديث والطاقة والاتصالات. نُحوّل طريقة عيشك وعملك.',
      hero_explore: 'استكشف خدماتنا', hero_learn: 'اعرف المزيد', hero_projects: 'عرض مشاريعنا', hero_enquire: 'استفسر الآن',
      stats_projects: 'مشاريع ناجحة', stats_engineers: 'مهندس خبير', stats_years: 'سنة خبرة',
      services_label: 'ماذا نفعل', services_title: 'حلولنا المتخصصة',
      svc_security_title: 'أنظمة الأمان', svc_security_desc: 'كشف تسلل متقدّم، حساسات حركة، ومراقبة فيديو بدقة 4K مع متابعة عن بُعد لحماية كاملة.',
      svc_lighting_title: 'حلول الإضاءة', svc_lighting_desc: 'تصميم وتوريد أنظمة LED موفّرة للطاقة مع تحكم ذكي للمساحات السكنية والتجارية والصناعية.',
      svc_telecom_title: 'حلول الاتصالات والشبكات', svc_telecom_desc: 'بنية تحتية متكاملة تشمل هاتف IP، الموجّهات، المحوّلات، والربط اللاسلكي — من النحاس إلى الألياف إلى الحزمة الضوئية.',
      svc_access_title: 'التحكم بالدخول والحضور', svc_access_desc: 'إدارة دخول شاملة بقارئات بيومترية وبطاقات ذكية ورموز PIN مع تتبع الحضور وحساب رواتب آلي.',
      svc_auto_title: 'الأتمتة وأنظمة التحكم', svc_auto_desc: 'أتمتة مباني متكاملة للتحكم الذكي بالإضاءة والتكييف والتظليل وإدارة الطاقة عبر منصة واحدة.',
      svc_solar_title: 'حلول الطاقة الشمسية', svc_solar_desc: 'استفد من طاقة الشمس عبر ألواحنا الكهروضوئية عالية الكفاءة وأنظمة تخزين ذكية.',
      learn_more: 'اعرف المزيد',
      btn_view_projects: 'عرض مشاريعنا', btn_enquire_now: 'استفسر الآن',
      features_title_pre: 'نبني مستقبل', features_title_hl: 'الأمن المتكامل',
      features_desc: 'نوسّع حالياً حضورنا الرقمي لخدمتك بشكل أفضل. ستوفر منصتنا الجديدة كتالوج منتجات كامل ودعم فني عبر الإنترنت وتتبع مشاريع لحظي.',
      features_li1: 'مسوحات موقع شاملة وتقييم احتياجات',
      features_li2: 'تركيب احترافي بواسطة فنيين معتمدين',
      features_li3: 'صيانة مدى الحياة ودعم فني 24/7',
      features_li4: 'إدارة سحابية لجميع أنظمة الأمان',
      features_float_title: 'تركيب سريع', features_float_sub: 'خلال 48 ساعة',
      about_label: 'من نحن', about_title: 'موثوقون منذ 1994',
      about_p1: 'ساغرجي للتقنيات المتكاملة مزوّد رائد لحلول الأمن الذكي والطاقة والاتصالات والإضاءة والمنزل الذكي في سوريا والشرق الأوسط. نجمع عقوداً من الخبرة الهندسية مع أحدث التقنيات لتقديم أنظمة موثوقة وقابلة للتوسع وجاهزة للمستقبل.',
      about_p2: 'من التحكم البيومتري والمراقبة بدقة 4K إلى الطاقة الشمسية ومنصات الاتصالات الموحّدة، كل حل ننفّذه مصمّم لاحتياجات عملائنا — سكني أو تجاري أو حكومي.',
      val_reliability: 'الموثوقية', val_reliability_desc: 'كل نظام مدعوم بدعم 24/7 وصيانة مدى الحياة.',
      val_innovation: 'الابتكار', val_innovation_desc: 'نتبنى باستمرار أحدث التقنيات لنبقى في المقدمة.',
      val_partnership: 'الشراكة', val_partnership_desc: 'تعاون وثيق مع العملاء من التصميم حتى التنفيذ.',
      stats_delivered: 'مشاريع منجزة', stats_engineers2: 'مهندس خبير', stats_years2: 'سنة خبرة', stats_satisfaction: 'رضا العملاء',
      contact_title: 'لنؤمّن مشروعك', contact_title2: 'معاً',
      contact_desc: 'لديك سؤال أو جاهز للبدء؟ فريقنا مستعد لتقديم استشارة خبيرة.',
      contact_hq: 'مقرنا', contact_hq_val: 'شارع الميسلون<br/>دمشق - سوريا',
      contact_call: 'اتصل بنا', contact_email: 'الدعم عبر البريد',
      form_name: 'الاسم', form_email: 'البريد الإلكتروني', form_phone: 'الهاتف', form_property: 'نوع العقار', form_personal: 'شخصي', form_business: 'تجاري', form_message: 'الرسالة', form_send: 'إرسال الرسالة', form_msg_ph: 'أخبرنا عن مشروعك...',
      consult_title: 'احصل على استشارة مجانية', consult_name: 'الاسم', consult_email: 'البريد الإلكتروني', consult_phone: 'الهاتف', consult_property: 'نوع العقار', consult_msg: 'الرسالة', consult_submit: 'طلب استشارة', consult_note: 'نحترم خصوصيتك. لا رسائل مزعجة.',
      footer_desc: 'مزود رائد لحلول الأمن المتكامل والتقنيات الذكية. نحمي ما يهمك أكثر.',
      footer_solutions: 'الحلول', footer_company: 'الشركة', footer_about: 'من نحن', footer_portfolio: 'محفظتنا', footer_careers: 'الوظائف',
      footer_newsletter: 'النشرة البريدية', footer_newsletter_desc: 'ابق على اطلاع بآخر الأخبار التقنية.', footer_enter_email: 'أدخل البريد', footer_join: 'انضمام',
      footer_copy: 'ساغرجي للتقنيات المتكاملة. جميع الحقوق محفوظة.',
      partners_title: 'شركاؤنا', clients_title: 'عملاؤنا', and_more: 'والمزيد...',
      projects_title: 'مشاريعنا', projects_sub: 'استكشف محفظتنا من حلول الأمن والطاقة والاتصالات المتكاملة.', projects_soon: 'قريباً', projects_soon_p: 'نبني صفحة مخصصة لكل فئة مشاريع. عُد قريباً!',
      toast_success: 'تم إرسال الرسالة بنجاح!', toast_consult: 'تم إرسال طلب الاستشارة!', toast_sub: 'تم الاشتراك! شكراً لك.'
    }
  };

  function setLang(lang) {
    var dict = I18N[lang] || I18N.ar;
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.placeholder !== undefined) el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });
    var navKeys = ['nav_home','nav_services','nav_projects','nav_about','nav_contact'];
    document.querySelectorAll('.nav-link, .mobile-link').forEach(function (el, i) {
      var k = navKeys[i % navKeys.length];
      if (dict[k] && !el.hasAttribute('data-i18n')) el.textContent = dict[k];
    });
    document.querySelectorAll('.nav-links .btn-quote, .mobile-quote').forEach(function (el) {
      if (!el.hasAttribute('data-i18n') && dict.nav_quote) el.textContent = dict.nav_quote;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.placeholder = dict[key];
    });
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'ar' ? 'En' : 'ع';
      btn.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    });
    var consultTitle = document.getElementById('consultTitle');
    if (consultTitle && dict.consult_title) consultTitle.textContent = dict.consult_title;
  }

  var savedLang = localStorage.getItem('lang');
  setLang(savedLang === 'en' ? 'en' : 'ar');
  window.setLang = setLang;
  window.I18N = I18N;
  document.querySelectorAll('.lang-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cur = htmlEl.getAttribute('lang') === 'ar' ? 'ar' : 'en';
      setLang(cur === 'ar' ? 'en' : 'ar');
    });
  });

  // Partner logo: horizontal wheel scroll
  document.querySelectorAll('.partners-section:not(.partners-center)').forEach(function (section) {
    var wrapper = section.querySelector('.partners-track-wrapper');
    if (!wrapper) return;

    section.addEventListener('wheel', function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        wrapper.scrollLeft += e.deltaY;
      }
    }, { passive: false });
  });

  // Partner logo: auto-scroll
  document.querySelectorAll('.partners-track-wrapper').forEach(function (wrapper) {
    var section = wrapper.closest('.partners-section');
    if (section && section.classList.contains('partners-center')) return;
    if (wrapper.scrollWidth <= wrapper.clientWidth) return;

    var isPaused = false;
    var animId = null;

    function step() {
      if (!isPaused) {
        wrapper.scrollLeft += 1;
        if (wrapper.scrollLeft >= wrapper.scrollWidth / 2) {
          wrapper.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    }

    wrapper.addEventListener('mouseenter', function () { isPaused = true; });
    wrapper.addEventListener('mouseleave', function () { isPaused = false; });

    animId = requestAnimationFrame(step);
  });

  // Consultation popup
  var POPUP_KEY = 'sagherji_consult_dismissed';
  var POPUP_DELAY = 2500;

  function createConsultPopup() {
    if (document.getElementById('consultOverlay')) return document.getElementById('consultOverlay');
    var curLang = htmlEl.getAttribute('lang') === 'en' ? 'en' : 'ar';
    var d = I18N[curLang] || I18N.ar;
    var overlay = document.createElement('div');
    overlay.id = 'consultOverlay';
    overlay.className = 'consult-overlay';
    overlay.innerHTML = '<div class="consult-modal" role="dialog" aria-modal="true" aria-labelledby="consultTitle">'
      + '<div class="consult-header">'
      + '<h2 id="consultTitle" class="consult-title" data-i18n="consult_title">' + d.consult_title + '</h2>'
      + '<button class="consult-close" aria-label="Close popup"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>'
      + '</div>'
      + '<div class="consult-body">'
      + '<form class="consult-form" id="consultForm" novalidate>'
      + '<div class="consult-field"><label class="consult-label" data-i18n="consult_name">' + d.consult_name + '</label><input type="text" name="name" class="consult-input" placeholder="John Doe" required /></div>'
      + '<div class="consult-field"><label class="consult-label" data-i18n="consult_email">' + d.consult_email + '</label><input type="email" name="email" class="consult-input" placeholder="john@example.com" required /></div>'
      + '<div class="consult-field"><label class="consult-label" data-i18n="consult_phone">' + d.consult_phone + '</label><input type="tel" name="phone" class="consult-input" placeholder="+963 900 000 000" required /></div>'
      + '<div class="consult-field"><label class="consult-label" data-i18n="consult_property">' + d.consult_property + '</label><div class="consult-radio-group"><label class="consult-radio"><input type="radio" name="propertyType" value="Personal" checked /> <span data-i18n="form_personal">' + d.form_personal + '</span></label><label class="consult-radio"><input type="radio" name="propertyType" value="Business" /> <span data-i18n="form_business">' + d.form_business + '</span></label></div></div>'
      + '<div class="consult-field consult-field-full"><label class="consult-label" data-i18n="consult_msg">' + d.consult_msg + '</label><textarea name="message" class="consult-input consult-textarea" rows="4" data-i18n-placeholder="form_msg_ph" placeholder="' + d.form_msg_ph + '"></textarea></div>'
      + '<button type="submit" class="consult-submit" data-i18n="consult_submit">' + d.consult_submit + '</button>'
      + '<p class="consult-note" data-i18n="consult_note">' + d.consult_note + '</p>'
      + '</form>'
      + '</div></div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  var consultOverlay = createConsultPopup();
  var consultForm = document.getElementById('consultForm');

  function openConsult() {
    consultOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeConsult(persist) {
    consultOverlay.classList.remove('open');
    document.body.style.overflow = '';
    if (persist) {
      try { sessionStorage.setItem(POPUP_KEY, '1'); } catch (e) {}
    }
  }

  consultOverlay.addEventListener('click', function (e) {
    if (e.target === consultOverlay) closeConsult(true);
  });

  consultOverlay.querySelector('.consult-close').addEventListener('click', function () { closeConsult(true); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && consultOverlay.classList.contains('open')) closeConsult(true);
  });

  function showToast(msg, type) {
    var t = document.getElementById('appToast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'appToast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.className = 'toast show ' + (type || '');
    setTimeout(function () { t.classList.remove('show'); }, 4000);
  }

  function submitToVercel(payload) {
    return fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) return res.json().then(function (j) { throw new Error(j.error || 'Failed'); });
      return res.json();
    });
  }

  if (consultForm) {
    var consultSuccess = document.createElement('div');
    consultSuccess.className = 'form-success';
    consultSuccess.textContent = 'Thank you! Your request has been sent. We will contact you shortly.';
    var consultError = document.createElement('div');
    consultError.className = 'form-error';
    consultForm.appendChild(consultSuccess);
    consultForm.appendChild(consultError);

    consultForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!consultForm.checkValidity()) { consultForm.reportValidity(); return; }
      var data = new FormData(consultForm);
      var btn = consultForm.querySelector('.consult-submit');
      var payload = {
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        propertyType: data.get('propertyType'),
        message: data.get('message'),
        formType: 'consultation'
      };
      btn.disabled = true;
      btn.textContent = 'Sending...';
      consultSuccess.classList.remove('show');
      consultError.classList.remove('show');
      submitToVercel(payload)
        .then(function () {
          consultSuccess.classList.add('show');
          var _d = I18N[htmlEl.getAttribute('lang')] || I18N.ar;
          showToast(_d.toast_consult, 'success');
          consultForm.reset();
          setTimeout(function () { closeConsult(true); consultSuccess.classList.remove('show'); }, 2500);
        })
        .catch(function () {
          consultError.textContent = 'Failed to send. Please try again or email info@sagherji.com';
          consultError.classList.add('show');
          showToast('Failed to send. Please try again.', 'error');
        })
        .then(function () {
          btn.disabled = false;
          btn.textContent = 'Request Consultation';
        });
    });
  }

  var dismissed = false;
  try { dismissed = sessionStorage.getItem(POPUP_KEY) === '1'; } catch (e) {}

  if (!dismissed) {
    setTimeout(openConsult, POPUP_DELAY);
  }

  document.querySelectorAll('.btn-quote, .btn-enquire, .btn-section-enquire, .btn-project, .btn-section-project').forEach(function (btn) {
    var href = btn.getAttribute('href');
    if (href && href.indexOf('#contact') !== -1) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openConsult();
      });
    } else if (btn.classList.contains('btn-quote')) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openConsult();
      });
    }
  });

  document.querySelectorAll('.contact-form').forEach(function (form) {
    if (form.dataset.bound) return;
    form.dataset.bound = '1';
    var successEl = document.createElement('div');
    successEl.className = 'contact-success';
    successEl.textContent = 'Thank you! Your message has been sent. We will reply shortly.';
    var errorEl = document.createElement('div');
    errorEl.className = 'contact-error';
    form.parentNode.appendChild(successEl);
    form.parentNode.appendChild(errorEl);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var fd = new FormData(form);
      var nameVal = (fd.get('name') || '').trim();
      var emailVal = (fd.get('email') || '').trim();
      var phoneVal = (fd.get('phone') || '').trim();
      var propertyTypeVal = fd.get('propertyType') || 'Personal';
      var messageVal = (fd.get('message') || '').trim();
      if (!nameVal || !emailVal || !phoneVal || !messageVal) {
        errorEl.textContent = 'Please fill in all fields.';
        errorEl.classList.add('show');
        successEl.classList.remove('show');
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        errorEl.textContent = 'Please enter a valid email address.';
        errorEl.classList.add('show');
        return;
      }
      var btn = form.querySelector('.btn-submit');
      var origText = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
      successEl.classList.remove('show');
      errorEl.classList.remove('show');

      var payload = {
        name: nameVal,
        email: emailVal,
        phone: phoneVal,
        propertyType: propertyTypeVal,
        message: messageVal,
        formType: 'contact'
      };

      submitToVercel(payload)
        .then(function () {
          successEl.classList.add('show');
          var _d2 = I18N[htmlEl.getAttribute('lang')] || I18N.ar;
          showToast(_d2.toast_success, 'success');
          form.reset();
          setTimeout(function () { successEl.classList.remove('show'); }, 5000);
        })
        .catch(function () {
          errorEl.textContent = 'Failed to send. Please email directly to info@sagherji.com';
          errorEl.classList.add('show');
          showToast('Failed to send. Please try again.', 'error');
        })
        .then(function () {
          if (btn) { btn.disabled = false; btn.textContent = origText; }
        });
    });
  });

  document.querySelectorAll('.footer-newsletter').forEach(function (wrap) {
    var input = wrap.querySelector('.newsletter-input');
    var btn = wrap.querySelector('.newsletter-btn');
    if (!input || !btn || wrap.dataset.bound) return;
    wrap.dataset.bound = '1';
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var email = input.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email.', 'error');
        return;
      }
      btn.disabled = true;
      var orig = btn.textContent;
      btn.textContent = '...';
      submitToVercel({ name: 'Newsletter', email: email, message: 'Newsletter subscription request', formType: 'newsletter' })
        .then(function () {
          var _d3 = I18N[htmlEl.getAttribute('lang')] || I18N.ar;
          showToast(_d3.toast_sub, 'success');
          input.value = '';
        })
        .catch(function () { showToast('Failed to subscribe. Try again.', 'error'); })
        .then(function () { btn.disabled = false; btn.textContent = orig; });
    });
  });
})();
