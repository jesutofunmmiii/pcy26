/* ---- Global scroll motion: progress bar + rise-in reveals ---- */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll-progress bar
  var bar = document.getElementById('scroll-progress');
  function onScroll() {
    var h = document.documentElement;
    var max = (h.scrollHeight - h.clientHeight) || 1;
    var pct = Math.min(100, Math.max(0, (h.scrollTop || window.pageYOffset) / max * 100));
    if (bar) bar.style.width = pct + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0, rootMargin: '0px 0px -5% 0px' });

  function tag() {
    var sections = document.querySelectorAll('#root section');
    sections.forEach(function (sec) {
      Array.prototype.forEach.call(sec.children, function (child) {
        if (child.__revealTagged) return;
        // Scrims/washes opt out — they must never sit at opacity 0 waiting to be revealed.
        if (child.hasAttribute && child.hasAttribute('data-no-reveal')) { child.__revealTagged = true; return; }
        // Hero handles its own orchestrated rise-in load animation — skip it.
        if (child.querySelector && child.querySelector('.rise')) { child.__revealTagged = true; return; }
        child.__revealTagged = true;
        var masonry = child.querySelector && child.querySelector('.pcy-masonry');
        var target = masonry || child;
        // Reduced motion: never hide anything. Reveal on sight otherwise, with a
        // safety net so content can never be stranded at opacity 0.
        target.classList.add(masonry ? 'reveal-stagger' : 'reveal');
        if (reduce) { target.classList.add('in'); return; }
        io.observe(target);
        setTimeout(function () { target.classList.add('in'); }, 2500);
      });
    });
  }

  function boot() {
    var root = document.getElementById('root');
    if (!root) { setTimeout(boot, 40); return; }
    tag();
    var mo = new MutationObserver(function () { tag(); });
    mo.observe(root, { childList: true, subtree: true });
  }
  boot();
})();
