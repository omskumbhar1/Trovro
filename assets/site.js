// year
  document.getElementById('yr').textContent = new Date().getFullYear();

  // nav scrolled state
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 12);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // mobile menu
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const toggleMenu = (open) => {
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  };
  burger.addEventListener('click', () => toggleMenu(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));