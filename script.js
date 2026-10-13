// Datos de contacto: se cambian acá y se actualiza todo el sitio.
const WHATSAPP = '5491127897528';
const MENSAJE = 'Hola, llegué desde la web de muse studio y quiero contarles sobre mi negocio.';

// Cada botón con data-wa abre WhatsApp. Si tiene data-wa-msg, usa ese mensaje; si no, el general.
document.querySelectorAll('[data-wa]').forEach((a) => {
  const msg = a.dataset.waMsg || MENSAJE;
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  a.target = '_blank';
  a.rel = 'noopener';
});

// Header: transparente sobre la foto, sólido al bajar.
const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 560);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
