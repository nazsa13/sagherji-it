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

  // Partner logo auto-scroll
  var partnerWrappers = document.querySelectorAll('.partners-track-wrapper');
  partnerWrappers.forEach(function (wrapper) {
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
})();
