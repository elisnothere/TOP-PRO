import './globals.css';

export const metadata = {
  title: 'Top Pro | Accesorios de Rally',
  description: 'Top Pro, pionero y número uno en venta de accesorios de rally.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/assets/car.png" />
      </head>
      <body>
        <div className="noise" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
