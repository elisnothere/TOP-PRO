'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Header from './Header';

function CarouselMedia({ product }) {
  const views = product.slug === 'remera-top-pro'
    ? (product.carouselViews?.length ? product.carouselViews : product.views || [])
    : [];

  if (product.slug === 'bolso-organizador' && product.variants?.length) {
    return (
      <div className="carousel-card-image-grid">
        {product.variants.map((variant) => {
          const front = variant.views?.find((view) => view.id === 'front') || variant.views?.[0];
          return <div className="carousel-card-image-tile" key={variant.id}><img className="carousel-card-image carousel-card-image-variant" src={front?.src || product.src} alt={front?.alt || variant.label} /></div>;
        })}
      </div>
    );
  }

  if (views.length) {
    return (
      <div className="carousel-card-image-grid">
        {views.map((view) => <div className="carousel-card-image-tile" key={view.id}><img className="carousel-card-image carousel-card-image-variant" src={view.src} alt={view.alt || product.name} /></div>)}
      </div>
    );
  }

  return <img className="carousel-card-image" src={product.src} alt={product.alt || product.name} />;
}

function CarouselCard({ product, duplicate = false }) {
  return (
    <article className="carousel-card">
      <Link className="carousel-card-link" href={product.page || `/producto/${product.slug}`} tabIndex={duplicate ? -1 : 0}>
        <div className="carousel-card-image-wrap"><CarouselMedia product={product} /></div>
        <div className="carousel-card-copy">
          <span>{product.label}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <strong className="carousel-card-cta">Ver detalle</strong>
        </div>
      </Link>
    </article>
  );
}

export default function HomeClient({ products }) {
  const carouselShellRef = useRef(null);
  const carouselGroupRef = useRef(null);
  const carouselProducts = products.filter((product) => product.showInCarousel !== false);
  const featured = products.find((product) => product.slug === 'cuaderno-de-rally') || products[0];
  const bag = products.find((product) => product.slug === 'bolso-organizador');
  const shirt = products.find((product) => product.slug === 'remera-top-pro');
  const bagFronts = (bag?.variants || []).map((variant) => variant.views?.find((view) => view.id === 'front') || variant.views?.[0]).filter(Boolean);

  useEffect(() => {
    let frameId = 0;

    const updateNotebookMotion = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / maxScroll, 1);
      const root = document.documentElement;

      root.style.setProperty('--scroll-progress', progress.toFixed(4));
      root.style.setProperty('--notebook-rotate', `${-9 + progress * 22}deg`);
      root.style.setProperty('--notebook-shift', `${progress * -48}px`);
      root.style.setProperty('--hero-glow-shift', `${progress * 18}px`);
      frameId = 0;
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateNotebookMotion);
    };

    updateNotebookMotion();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const shell = carouselShellRef.current;
    const group = carouselGroupRef.current;

    if (!shell || !group) return undefined;

    let frameId = 0;
    let resumeTimerId = 0;
    let loopWidth = 0;
    let autoScrollPaused = false;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const normalizeScrollPosition = () => {
      if (!loopWidth) return;
      if (shell.scrollLeft < 0) shell.scrollLeft += loopWidth;
      else if (shell.scrollLeft >= loopWidth) shell.scrollLeft -= loopWidth;
    };

    const setAutoScrollPaused = (paused) => {
      autoScrollPaused = paused;
      shell.classList.toggle('is-paused', paused);
    };

    const scheduleAutoScrollResume = () => {
      window.clearTimeout(resumeTimerId);
      resumeTimerId = window.setTimeout(() => setAutoScrollPaused(false), 120);
    };

    const syncCarouselWidth = () => {
      const shellStyles = window.getComputedStyle(shell);
      const gap = Number.parseFloat(shellStyles.getPropertyValue('--carousel-gap')) || 0;
      loopWidth = group.getBoundingClientRect().width + gap;
      shell.style.setProperty('--carousel-loop-width', `${loopWidth}px`);
      normalizeScrollPosition();
    };

    const tick = () => {
      if (!autoScrollPaused && !reducedMotion.matches && loopWidth > 0) {
        shell.scrollLeft += 0.65;
        normalizeScrollPosition();
      }

      frameId = window.requestAnimationFrame(tick);
    };

    const onMouseEnter = () => setAutoScrollPaused(true);
    const onMouseLeave = () => scheduleAutoScrollResume();
    const onFocusIn = () => setAutoScrollPaused(true);
    const onFocusOut = (event) => {
      if (!shell.contains(event.relatedTarget)) scheduleAutoScrollResume();
    };

    const onPointerDown = (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      isDragging = true;
      dragStartX = event.clientX;
      dragStartScrollLeft = shell.scrollLeft;
      setAutoScrollPaused(true);
      shell.classList.add('is-dragging');
      shell.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event) => {
      if (!isDragging) return;
      event.preventDefault();
      shell.scrollLeft = dragStartScrollLeft - (event.clientX - dragStartX);
      normalizeScrollPosition();
    };

    const endDrag = (event) => {
      if (!isDragging) return;
      isDragging = false;
      shell.classList.remove('is-dragging');
      shell.releasePointerCapture?.(event.pointerId);
      scheduleAutoScrollResume();
    };

    syncCarouselWidth();
    frameId = window.requestAnimationFrame(tick);

    const resizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(() => syncCarouselWidth())
      : null;

    resizeObserver?.observe(shell);
    resizeObserver?.observe(group);
    window.addEventListener('resize', syncCarouselWidth);
    shell.addEventListener('mouseleave', onMouseLeave);
    shell.addEventListener('mouseenter', onMouseEnter);
    shell.addEventListener('focusin', onFocusIn);
    shell.addEventListener('focusout', onFocusOut);
    shell.addEventListener('pointerdown', onPointerDown);
    shell.addEventListener('pointermove', onPointerMove);
    shell.addEventListener('pointerup', endDrag);
    shell.addEventListener('pointercancel', endDrag);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.clearTimeout(resumeTimerId);
      resizeObserver?.disconnect();
      window.removeEventListener('resize', syncCarouselWidth);
      shell.removeEventListener('mouseleave', onMouseLeave);
      shell.removeEventListener('mouseenter', onMouseEnter);
      shell.removeEventListener('focusin', onFocusIn);
      shell.removeEventListener('focusout', onFocusOut);
      shell.removeEventListener('pointerdown', onPointerDown);
      shell.removeEventListener('pointermove', onPointerMove);
      shell.removeEventListener('pointerup', endDrag);
      shell.removeEventListener('pointercancel', endDrag);
    };
  }, []);

  return (
    <div className="site-shell">
      <main>
        <section className="feature-showcase" id="home">
          <div className="feature-showcase-backdrop" aria-hidden="true">
            <div className="backdrop-slideshow" aria-hidden="true">
              {['/assets/SL1.png', '/assets/SL2.png', '/assets/SL3.png'].map((src, index) => <span key={src} className={`backdrop-slide backdrop-slide-${index + 1}`} style={{ backgroundImage: `url(${src})` }}></span>)}
            </div>
          </div>
          <Header />
          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Rediseñando el rally</p>
              <h1>Pionero nacional en accesorios para Co-pilotos.</h1>
              <div className="hero-actions"><Link className="button button-primary" href="/productos">Ver productos</Link></div>
              <div className="hero-strip" aria-label="Brand highlights">
                {[
                  'Inspirados en el espíritu del rally, manteniendo la pasión y la emoción en cada detalle.',
                  'Único en su ambito, innovando desde el inicio.',
                  'Mejor calidad de productos para Co-pilotos en el mercado.'
                ].map((item) => <article className="strip-card" key={item}><p>{item}</p></article>)}
              </div>
            </div>
            <div className="visual-stage" id="featured">
              <div className="visual-backdrop" aria-hidden="true"><span className="glow glow-sun"></span><span className="glow glow-ice"></span><span className="landscape slope"></span></div>
              <div className="notebook-cluster has-photo" aria-label="Top Pro products">
                {bagFronts[1] ? <div className="hero-product photo-bag photo-bag-secondary ghost"><img className="cover-photo" src={bagFronts[1].src} alt="" /></div> : null}
                {bagFronts[0] ? <div className="hero-product photo-bag photo-bag-primary ghost"><img className="cover-photo" src={bagFronts[0].src} alt="" /></div> : null}
                <div className="notebook photo-notebook featured-notebook has-photo"><img className="cover-photo" src="/assets/notebook.png" alt="Top Pro Rally Book notebook cover" /></div>
                {shirt ? <div className="hero-product photo-shirt ghost ghost-left"><img className="cover-photo" src="/assets/shirt.png" alt="Top Pro shirt" /></div> : null}
              </div>
              {featured ? <article className="price-card"><p>Producto destacado</p><strong>{featured.name}</strong><span>{featured.price}</span></article> : null}
            </div>
          </section>
        </section>
        <section className="products-carousel-section" id="products">
          <div className="section-heading carousel-heading">
            <p className="eyebrow">Productos disponibles</p>
            <h2>Productos disponibles:</h2>
            <p>Agrega los productos que quieras al carrito desde el catalogo y despues pedi todo junto por WhatsApp o checkout.</p>
          </div>
          <div className="product-carousel-shell" ref={carouselShellRef}>
            <div className="product-carousel-track">
              <div className="product-carousel-group" ref={carouselGroupRef}>{carouselProducts.map((product) => <CarouselCard key={product.slug} product={product} />)}</div>
              <div className="product-carousel-group" aria-hidden="true">{carouselProducts.map((product) => <CarouselCard key={`${product.slug}-2`} product={product} duplicate />)}</div>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div><p className="eyebrow">Donde encontrarnos</p><h2>Encontranos en nuestros puntos de venta aliados.</h2></div>
          <div className="contact-panel">
            <Link className="button button-primary" href="/donde-encontrarnos">Donde encontrarnos</Link>
            <a className="button button-secondary" href="https://wa.me/595986732551">Contactanos a traves de whatsapp</a>
          </div>
        </section>
      </main>
    </div>
  );
}
