(function () {
  var navbar = document.getElementById('navbar');
  var menuToggle = document.getElementById('menu-toggle');
  var menuIcon = document.getElementById('menu-icon');
  var closeIcon = document.getElementById('close-icon');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileLinks = mobileMenu.querySelectorAll('.mobile-link');

  var isMenuOpen = false;

  // Scroll handler
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Mobile menu toggle
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('open', isMenuOpen);
    menuIcon.style.display = isMenuOpen ? 'none' : 'block';
    closeIcon.style.display = isMenuOpen ? 'block' : 'none';
  }

  menuToggle.addEventListener('click', toggleMenu);

  // Close mobile menu on link click
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (isMenuOpen) toggleMenu();
    });
  });

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
})();
