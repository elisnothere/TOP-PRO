const { useEffect, useRef, useState } = React;
const html = htm.bind(React.createElement);

const navigation = [
  { label: 'Productos', href: 'productos.html' },
  { label: 'Contacto', href: '#contact' }
];

const notebookAsset = './assets/notebook.png';
const bagAsset = './assets/bag.png';
const shirtAsset = './assets/shirt.png';
const headerLogoAsset = './assets/logo.png';
const slideshowAssets = ['./assets/SL1.png', './assets/SL2.png', './assets/SL3.png'];
const assetVersion = '20260618p';
const faviconAssetCandidates = [
  './assets/car.png',
  './assets/tab-icon.png',
  './assets/favicon.png'
];

const topProData = window.TOP_PRO_DATA || {};
const availableProducts = topProData.products || [];
const availableStores = topProData.stores || [];
const whatsappNumber = topProData.whatsappNumber || '595986732551';
const bagProduct = availableProducts.find((product) => product.slug === 'bolso-organizador') || null;
const shirtProduct = availableProducts.find((product) => product.slug === 'remera-top-pro') || null;
const bagVariantFronts = ((bagProduct && Array.isArray(bagProduct.variants)) ? bagProduct.variants : [])
  .map((variant) => {
    const frontView = (variant.views || []).find((view) => view.id === 'front') || (variant.views || [])[0] || null;

    if (!frontView) {
      return null;
    }

    return {
      id: variant.id,
      label: variant.label,
      src: frontView.src,
      alt: frontView.alt || `${bagProduct.name} ${variant.label}`
    };
  })
  .filter(Boolean);
const shirtViews = ((shirtProduct && Array.isArray(shirtProduct.views)) ? shirtProduct.views : [])
  .map((view) => ({
    id: view.id,
    label: view.label,
    src: view.src,
    alt: view.alt || shirtProduct.alt || shirtProduct.name
  }))
  .filter(Boolean);

const fallbackFeaturedProduct = {
  name: 'Cuaderno de Rally',
  price: '9.85 USD',
};

const featuredProduct =
  availableProducts.find((product) => product.slug === 'cuaderno-de-rally')
  || availableProducts[0]
  || fallbackFeaturedProduct;

const formatList = (items) => {
  if (!items.length) {
    return '';
  }

  if (items.length === 1) {
    return items[0];
  }

  return `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`;
};

const storeSummary = formatList(availableStores.map((store) => store.name));
const landingWhatsappHref = `https://wa.me/${whatsappNumber}`;

const withAssetVersion = (path) => `${path}?v=${assetVersion}`;

const applyImageFallback = (event, fallbackSrc) => {
  const image = event.currentTarget;

  if (!image || !fallbackSrc || image.dataset.fallbackApplied === 'true') {
    return;
  }

  image.dataset.fallbackApplied = 'true';
  image.src = withAssetVersion(fallbackSrc);
};

function ProductPhoto({ className, src, alt = '', ariaHidden = false }) {
  return html`
    <div className=${className} aria-hidden=${ariaHidden ? 'true' : undefined}>
      <img className="cover-photo" src=${withAssetVersion(src)} alt=${alt} />
    </div>
  `;
}

function BackdropSlideshow({ slides }) {
  if (!slides.length) {
    return null;
  }

  return html`
    <div className="backdrop-slideshow" aria-hidden="true">
      ${slides.map(
        (src, index) => html`
          <span
            className=${`backdrop-slide backdrop-slide-${index + 1}`}
            style=${{ backgroundImage: `url(${withAssetVersion(src)})` }}
          ></span>
        `
      )}
    </div>
  `;
}

const highlights = [
  'Inspirados en el espíritu del rally, manteniendo la pasión y la emoción en cada detalle.',
  'Único en su ambito, innovando desde el inicio.',
  'Mejor calidad de productos para Co-pilotos en el mercado.'
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [hasHeaderLogo, setHasHeaderLogo] = useState(false);
  const [heroAssets, setHeroAssets] = useState({ bagPrimary: false, bagSecondary: false, shirt: false });
  const [backdropSlides, setBackdropSlides] = useState([]);
  const carouselShellRef = useRef(null);
  const carouselGroupRef = useRef(null);

  const renderCarouselMedia = (product) => {
    if (product.slug === 'bolso-organizador' && bagVariantFronts.length > 0) {
      return html`
        <div className="carousel-card-image-grid">
          ${bagVariantFronts.map((variant) => html`
            <div key=${variant.id} className="carousel-card-image-tile">
              <img
                className="carousel-card-image carousel-card-image-variant"
                src=${withAssetVersion(variant.src)}
                alt=${variant.alt}
                onError=${(event) => applyImageFallback(event, product.src)}
              />
            </div>
          `)}
        </div>
      `;
    }

    if (product.slug === 'remera-top-pro' && shirtViews.length > 0) {
      return html`
        <div className="carousel-card-image-grid">
          ${shirtViews.map((view) => html`
            <div key=${view.id} className="carousel-card-image-tile">
              <img
                className="carousel-card-image carousel-card-image-variant"
                src=${withAssetVersion(view.src)}
                alt=${view.alt}
                onError=${(event) => applyImageFallback(event, product.src)}
              />
            </div>
          `)}
        </div>
      `;
    }

    return html`
      <img
        className="carousel-card-image"
        src=${withAssetVersion(product.src)}
        alt=${product.alt}
        onError=${(event) => applyImageFallback(event, product.src)}
      />
    `;
  };

  const renderCarouselCard = (product, index, keyPrefix = 'primary') => {
    const key = `${keyPrefix}-${product.name}-${index}`;

    if (!product.page) {
      return html`
        <article key=${key} className="carousel-card">
          <div className="carousel-card-image-wrap">
            ${renderCarouselMedia(product)}
          </div>
          <div className="carousel-card-copy">
            <span>${product.label}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
        </article>
      `;
    }

    return html`
      <a
        key=${key}
        className="carousel-card-link"
        href=${product.page}
        aria-label=${`Ver detalle de ${product.name}`}
      >
        <article className="carousel-card">
          <div className="carousel-card-image-wrap">
            ${renderCarouselMedia(product)}
          </div>
          <div className="carousel-card-copy">
            <span>${product.label}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <strong className="carousel-card-cta">Ver detalle</strong>
          </div>
        </article>
      </a>
    `;
  };

  useEffect(() => {
    let cancelled = false;
    const image = new Image();

    image.onload = () => {
      if (!cancelled) {
        setHasHeaderLogo(true);
      }
    };

    image.onerror = () => {
      if (!cancelled) {
        setHasHeaderLogo(false);
      }
    };

    image.src = withAssetVersion(headerLogoAsset);

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const checkAsset = (src) => new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
      image.src = withAssetVersion(src);
    });

    const loadHeroAssets = async () => {
      const [bagPrimary, bagSecondary, shirt] = await Promise.all([
        checkAsset(bagVariantFronts[0]?.src || bagAsset),
        checkAsset(bagVariantFronts[1]?.src || bagAsset),
        checkAsset(shirtAsset)
      ]);

      if (!cancelled) {
        setHeroAssets({ bagPrimary, bagSecondary, shirt });
      }
    };

    loadHeroAssets();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const checkAsset = (src) => new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(true);
      image.onerror = () => resolve(false);
      image.src = withAssetVersion(src);
    });

    const loadBackdropSlides = async () => {
      const availability = await Promise.all(
        slideshowAssets.map(async (src) => ((await checkAsset(src)) ? src : null))
      );

      if (!cancelled) {
        setBackdropSlides(availability.filter(Boolean));
      }
    };

    loadBackdropSlides();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const faviconLink = document.getElementById('app-favicon');

    if (!faviconLink) {
      return undefined;
    }

    const trySetFavicon = async () => {
      for (const assetPath of faviconAssetCandidates) {
        const exists = await new Promise((resolve) => {
          const image = new Image();
          image.onload = () => resolve(true);
          image.onerror = () => resolve(false);
          image.src = withAssetVersion(assetPath);
        });

        if (!exists || cancelled) {
          continue;
        }

        faviconLink.href = withAssetVersion(assetPath);
        return;
      }
    };

    trySetFavicon();

    return () => {
      cancelled = true;
    };
  }, []);

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
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const shell = carouselShellRef.current;
    const group = carouselGroupRef.current;

    if (!shell || !group) {
      return undefined;
    }

    let frameId = 0;
    let resumeTimerId = 0;
    let loopWidth = 0;
    let autoScrollPaused = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const normalizeScrollPosition = () => {
      if (!loopWidth) {
        return;
      }

      if (shell.scrollLeft < 0) {
        shell.scrollLeft += loopWidth;
      } else if (shell.scrollLeft >= loopWidth) {
        shell.scrollLeft -= loopWidth;
      }
    };

    const setAutoScrollPaused = (paused) => {
      autoScrollPaused = paused;
      shell.classList.toggle('is-paused', paused);
    };

    const scheduleAutoScrollResume = () => {
      window.clearTimeout(resumeTimerId);
      resumeTimerId = window.setTimeout(() => {
        setAutoScrollPaused(false);
      }, 120);
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

    const onMouseEnter = () => {
      setAutoScrollPaused(true);
    };

    const onMouseLeave = () => {
      scheduleAutoScrollResume();
    };

    const onFocusIn = () => {
      setAutoScrollPaused(true);
    };

    const onFocusOut = (event) => {
      if (!shell.contains(event.relatedTarget)) {
        scheduleAutoScrollResume();
      }
    };

    syncCarouselWidth();
    frameId = window.requestAnimationFrame(tick);

    const resizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(() => {
        syncCarouselWidth();
      })
      : null;

    if (resizeObserver) {
      resizeObserver.observe(shell);
      resizeObserver.observe(group);
    }

    window.addEventListener('resize', syncCarouselWidth);
    shell.addEventListener('mouseleave', onMouseLeave);
    shell.addEventListener('mouseenter', onMouseEnter);
    shell.addEventListener('focusin', onFocusIn);
    shell.addEventListener('focusout', onFocusOut);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.clearTimeout(resumeTimerId);
      resizeObserver?.disconnect();
      window.removeEventListener('resize', syncCarouselWidth);
      shell.removeEventListener('mouseleave', onMouseLeave);
      shell.removeEventListener('mouseenter', onMouseEnter);
      shell.removeEventListener('focusin', onFocusIn);
      shell.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  useEffect(() => {
    const closeMenuOnDesktop = () => {
      if (window.innerWidth > 760) {
        setNavOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnDesktop);

    return () => {
      window.removeEventListener('resize', closeMenuOnDesktop);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', navOpen);

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setNavOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [navOpen]);

  return html`
    <div className="site-shell">
      <main>
        <section className="feature-showcase" id="home">
          <div className="feature-showcase-backdrop" aria-hidden="true">
            <${BackdropSlideshow} slides=${backdropSlides} />
          </div>

          <header className=${`topbar${navOpen ? ' is-open' : ''}`}>
            <a className="brand" href="#home" aria-label="Top Pro home">
              <span className=${`brand-mark${hasHeaderLogo ? ' has-logo' : ''}`}>
                ${hasHeaderLogo
                  ? html`<img className="brand-logo" src=${withAssetVersion(headerLogoAsset)} alt="Top Pro logo" />`
                  : 'TP'}
              </span>
              <span className="brand-copy">
                <strong>Top Pro</strong>
                <small>Rally-ready goods</small>
              </span>
            </a>

            <button
              className="nav-toggle"
              type="button"
              aria-expanded=${String(navOpen)}
              aria-controls="site-nav"
              onClick=${() => setNavOpen((open) => !open)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span className="sr-only">Toggle navigation</span>
            </button>

            <nav className=${`nav${navOpen ? ' is-open' : ''}`} id="site-nav">
              ${navigation.map(
                (item) => html`<a href=${item.href} onClick=${() => setNavOpen(false)}>${item.label}</a>`
              )}
            </nav>
          </header>

          <button
            className=${`mobile-menu-backdrop${navOpen ? ' is-visible' : ''}`}
            type="button"
            aria-label="Cerrar navegacion"
            onClick=${() => setNavOpen(false)}
          ></button>

          <section className="hero-section">
            <div className="hero-copy">
              <p className="eyebrow">Rediseñando el rally</p>
              <h1>Pionero nacional en accesorios para Co-pilotos.</h1>
              <div className="hero-actions">
                <a className="button button-primary" href="productos.html">Ver productos</a>
              </div>

              <div className="hero-strip" aria-label="Brand highlights">
                ${highlights.map((item) => html`<article className="strip-card"><p>${item}</p></article>`) }
              </div>
            </div>

            <div className="visual-stage" id="featured">
              <div className="visual-backdrop" aria-hidden="true">
                <span className="glow glow-sun"></span>
                <span className="glow glow-ice"></span>
                <span className="landscape slope"></span>
              </div>

              <div className="notebook-cluster has-photo" aria-label="Top Pro Rally Book product image">
                ${heroAssets.bagSecondary && bagVariantFronts[1]
                  ? html`<${ProductPhoto}
                      className="hero-product photo-bag photo-bag-secondary ghost"
                      src=${bagVariantFronts[1].src}
                      alt=${bagVariantFronts[1].alt}
                      ariaHidden=${true}
                    />`
                  : null}
                ${heroAssets.bagPrimary && bagVariantFronts[0]
                  ? html`<${ProductPhoto}
                      className="hero-product photo-bag photo-bag-primary ghost"
                      src=${bagVariantFronts[0].src}
                      alt=${bagVariantFronts[0].alt}
                      ariaHidden=${true}
                    />`
                  : null}
                <${ProductPhoto}
                  className="notebook photo-notebook featured-notebook has-photo"
                  src=${notebookAsset}
                  alt="Top Pro Rally Book notebook cover"
                />
                ${heroAssets.shirt
                  ? html`<${ProductPhoto}
                      className="hero-product photo-shirt ghost ghost-left"
                      src=${shirtAsset}
                      alt="Top Pro Rally Book shirt"
                      ariaHidden=${true}
                    />`
                  : null}
              </div>

              <article className="price-card">
                <p>Producto destacado</p>
                <strong>${featuredProduct.name}</strong>
                <span>${featuredProduct.price}</span>
              </article>
            </div>
          </section>

          <section className="stats-band">

          </section>
        </section>

        <section className="products-carousel-section" id="products" aria-labelledby="products-carousel-heading">
          <div className="section-heading carousel-heading">
            <p className="eyebrow">Productos disponibles</p>
            <h2 id="products-carousel-heading">Productos disponibles:</h2>
            <p> 
              Hace click en cualquiera de los productos para ir a su pagina dedicada y pedirlo directamente por WhatsApp.
            </p>
          </div>

          <div
            className="product-carousel-shell"
            aria-label="Productos disponibles Top Pro"
            ref=${carouselShellRef}
          >
            <div className="product-carousel-track">
              <div className="product-carousel-group" ref=${carouselGroupRef}>
                ${availableProducts.map((product, index) => renderCarouselCard(product, index))}
              </div>
              <div className="product-carousel-group" aria-hidden="true">
                ${availableProducts.map((product, index) => renderCarouselCard(product, index, 'duplicate'))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Donde encontrarnos</p>
            <h2>Encontranos en nuestros puntos de venta aliados.</h2>
            <p>
            </p>
          </div>

          <div className="contact-panel">
            <a className="button button-primary" href="donde-encontrarnos.html">Donde encontrarnos</a>
            <a className="button button-secondary" href=${landingWhatsappHref}>Contactanos a traves de whatsapp</a>
          </div>
        </section>
      </main>
    </div>
  `;
}

ReactDOM.createRoot(document.getElementById('app')).render(html`<${App} />`);
