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
  if (saved === 'dark') setTheme(true);

  function toggleTheme() {
    var isDark = htmlEl.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

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
    var overlay = document.createElement('div');
    overlay.id = 'consultOverlay';
    overlay.className = 'consult-overlay';
    overlay.innerHTML = '<div class="consult-modal" role="dialog" aria-modal="true" aria-labelledby="consultTitle">'
      + '<div class="consult-header">'
      + '<h2 id="consultTitle" class="consult-title">Get a Free Consultation</h2>'
      + '<button class="consult-close" aria-label="Close popup"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>'
      + '</div>'
      + '<div class="consult-body">'
      + '<form class="consult-form" id="consultForm" novalidate>'
      + '<div class="consult-field"><label class="consult-label">Name</label><input type="text" name="name" class="consult-input" placeholder="John Doe" required /></div>'
      + '<div class="consult-field"><label class="consult-label">Email</label><input type="email" name="email" class="consult-input" placeholder="john@example.com" required /></div>'
      + '<div class="consult-field"><label class="consult-label">Phone</label><input type="tel" name="phone" class="consult-input" placeholder="+963 900 000 000" required /></div>'
      + '<div class="consult-field"><label class="consult-label">Property Type</label><div class="consult-radio-group"><label class="consult-radio"><input type="radio" name="propertyType" value="Personal" checked /> Personal</label><label class="consult-radio"><input type="radio" name="propertyType" value="Business" /> Business</label></div></div>'
      + '<div class="consult-field consult-field-full"><label class="consult-label">Message</label><textarea name="message" class="consult-input consult-textarea" rows="4" placeholder="Tell us about your project..."></textarea></div>'
      + '<button type="submit" class="consult-submit">Request Consultation</button>'
      + '<p class="consult-note">We respect your privacy. No spam, ever.</p>'
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
          showToast('Consultation request sent!', 'success');
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
      var inputs = form.querySelectorAll('input, textarea, select');
      var nameVal = (inputs[0] && inputs[0].value.trim()) || '';
      var emailVal = (inputs[1] && inputs[1].value.trim()) || '';
      var interestVal = (inputs[2] && inputs[2].value.trim()) || '';
      var messageVal = (form.querySelector('textarea') && form.querySelector('textarea').value.trim()) || '';
      if (!nameVal || !emailVal || !messageVal) {
        errorEl.textContent = 'Please fill in Name, Email and Message.';
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
        interest: interestVal,
        message: messageVal,
        formType: 'contact'
      };

      submitToVercel(payload)
        .then(function () {
          successEl.classList.add('show');
          showToast('Message sent successfully!', 'success');
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
          showToast('Subscribed! Thank you.', 'success');
          input.value = '';
        })
        .catch(function () { showToast('Failed to subscribe. Try again.', 'error'); })
        .then(function () { btn.disabled = false; btn.textContent = orig; });
    });
  });
})();
