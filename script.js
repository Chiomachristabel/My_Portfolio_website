/* ================================================
   CHIOMA CHRISTABEL OKPETAH — PORTFOLIO SCRIPTS
   ================================================
   FILE: script.js
   Linked from: index.html (bottom of body)

   WHAT THIS FILE DOES:
   1. Custom cursor — glowing dot + lagging ring
   2. Scroll reveal — elements fade in as you scroll
   3. Active nav — highlights current section in nav
   ================================================ */


/* ------------------------------------------------
   1. CUSTOM CURSOR
   A glowing cyan dot replaces the default cursor.
   A larger ring follows it with a slight lag.
   ------------------------------------------------ */

const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

// current mouse position
let mouseX = 0;
let mouseY = 0;

// ring position (lags behind mouse)
let ringX = 0;
let ringY = 0;

// update dot position instantly on mouse move
document.addEventListener('mousemove', function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // dot follows instantly (minus half its size to center it)
  cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
});

// animate the ring so it smoothly follows the mouse
function animateRing() {
  // ease toward mouse position
  ringX += (mouseX - ringX - 20) * 0.12;
  ringY += (mouseY - ringY - 20) * 0.12;

  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;

  // keep looping every frame
  requestAnimationFrame(animateRing);
}
animateRing();

// make cursor bigger when hovering links and buttons
document.querySelectorAll('a, button').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    cursorRing.style.width       = '60px';
    cursorRing.style.height      = '60px';
    cursorRing.style.borderColor = 'rgba(0, 245, 212, 0.6)';
  });

  el.addEventListener('mouseleave', function() {
    cursorRing.style.width       = '40px';
    cursorRing.style.height      = '40px';
    cursorRing.style.borderColor = 'rgba(0, 245, 212, 0.4)';
  });
});


/* ------------------------------------------------
   2. SCROLL REVEAL
   Any element with class="reveal" starts invisible.
   When it enters the viewport, class "visible" is
   added, which triggers the CSS fade-in animation.
   ------------------------------------------------ */

const revealObserver = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        // add visible class to trigger CSS transition
        entry.target.classList.add('visible');

        // stop watching this element — no need to re-animate
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,           // trigger when 10% of element is visible
    rootMargin: '0px 0px -40px 0px'  // trigger slightly before edge of screen
  }
);

// stagger each reveal element slightly so they don't all pop at once
document.querySelectorAll('.reveal').forEach(function(el, index) {
  el.style.transitionDelay = (index % 5) * 0.1 + 's';
  revealObserver.observe(el);
});


/* ------------------------------------------------
   3. ACTIVE NAV HIGHLIGHTING
   As you scroll through sections, the matching
   nav link lights up in cyan.
   ------------------------------------------------ */

const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  let currentSection = '';

  // find which section is currently in view
  sections.forEach(function(section) {
    if (window.scrollY >= section.offsetTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  // highlight the matching nav link
  navLinks.forEach(function(link) {
    if (link.getAttribute('href') === '#' + currentSection) {
      link.style.color = 'var(--cyan)';
    } else {
      link.style.color = '';  // reset to default (var(--muted) from CSS)
    }
  });
});
