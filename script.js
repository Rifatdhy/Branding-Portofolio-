(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var backToTop = document.getElementById('back-to-top');
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var progressBar = document.getElementById('progress-bar');
  var menuOpen = false;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Mobile Menu ── */
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      menuToggle.innerHTML = menuOpen
        ? '<i aria-hidden="true" class="ph ph-x text-2xl"></i>'
        : '<i aria-hidden="true" class="ph ph-list text-2xl"></i>';
    });
  }

  document.querySelectorAll('#mobile-menu .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      if (menuToggle) menuToggle.innerHTML = '<i aria-hidden="true" class="ph ph-list text-2xl"></i>';
    });
  });

  /* ── Nav scroll state ── */
  var hero = document.getElementById('hero');
  if (hero) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        nav.classList.toggle('nav-scrolled', !entry.isIntersecting);
        if (backToTop) backToTop.classList.toggle('show', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    navObserver.observe(hero);
  }

  /* ── Progress bar ── */
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (progressBar) progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ── Active section observer ── */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          var match = link.getAttribute('href') === '#' + id;
          link.classList.toggle('active', match);
          if (match) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' });
  sections.forEach(function (s) { sectionObserver.observe(s); });

  /* ── Scroll reveal ── */
  var revealEls = document.querySelectorAll('.r, .rl, .rr, .rs');
  if (revealEls.length > 0) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ── 3D Tilt ── */
  if (!reduceMotion) {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var w = rect.width;
        var h = rect.height;
        var rotateX = ((y / h) - 0.5) * -8;
        var rotateY = ((x / w) - 0.5) * 8;
        el.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-3px)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }

  /* ── Magnetic Buttons ── */
  if (!reduceMotion) {
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }

  /* ── Counter Animation ── */
  var counterEls = document.querySelectorAll('.counter-value');
  if (counterEls.length > 0) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          var current = 0;
          var step = Math.max(1, Math.floor(target / 30));
          var interval = setInterval(function () {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent = current;
          }, 40);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(function (el) { counterObserver.observe(el); });
  }

  /* ── Back to top ── */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Reduced motion ── */
  if (reduceMotion) {
    document.querySelectorAll('.r, .rl, .rr, .rs').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Smooth scroll anchors ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Auto year ── */
  var yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  /* ── Contact form ── */
  var form = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i aria-hidden="true" class="ph ph-spinner-gap ph-spin text-lg"></i> Mengirim\u2026';

      var formData = new FormData(form);
      formData.append('_to', 'rifatdhiyaullail@gmail.com');
      formData.append('_subject', 'Pesan Baru dari Portfolio');

      fetch('https://formsubmit.co/ajax/rifatdhiyaullail@gmail.com', {
        method: 'POST',
        body: formData
      })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.success) {
          formStatus.className = 'text-sm text-center mt-3 text-[#10B981]';
          formStatus.textContent = 'Pesan berhasil dikirim! Saya akan menghubungi Anda segera.';
        } else {
          fallbackSuccess();
        }
      })
      .catch(function () {
        fallbackSuccess();
      });

      function fallbackSuccess () {
        formStatus.className = 'text-sm text-center mt-3 text-[#737373]';
        formStatus.textContent = 'Pesan terkirim! Untuk saat ini, kirim langsung ke rifatdhiyaullail@gmail.com atau via WhatsApp.';
      }

      formStatus.classList.remove('hidden');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = 'Kirim Pesan <i aria-hidden="true" class="ph ph-paper-plane-right text-lg"></i>';
    });
  }

})();
