export function ProductMedia({ product, className = 'catalog-product-image-wrap' }) {
  const variants = Array.isArray(product.variants) ? product.variants : [];
  if (product.slug === 'bolso-organizador' && variants.length > 0) {
    return (
      <div className={className}>
        <div className="catalog-product-image-grid">
          {variants.map((variant) => {
            const front = variant.views?.find((view) => view.id === 'front') || variant.views?.[0];
            return <div className="catalog-product-image-tile" key={variant.id}><img src={front?.src || product.src} alt={front?.alt || variant.label} /></div>;
          })}
        </div>
      </div>
    );
  }
  return <div className={className}><img src={product.src} alt={product.alt || product.name} /></div>;
}
