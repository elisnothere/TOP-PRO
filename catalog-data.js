window.TOP_PRO_DATA = {
  whatsappNumber: '595986732551',
  products: [
    {
      slug: 'cuaderno-de-rally',
      page: 'cuaderno-de-rally.html',
      name: 'Cuaderno de Co-Pilotos',
      label: 'Disponible ahora',
      description: 'El cuaderno preferido de los Co-pilotos Paraguayos.',
      detailDescription: [
        'El mejor cuaderno con el que podes contar para el tramo, fácil, practico y Top Pro.',
        'Formato practico e ingenioso para tus notas de cada P.E.'
      ],
      price: '9.85 USD',
      src: './assets/notebook.png',
      alt: 'Cuaderno de Rally Top Pro'
    },
    {
      slug: 'remera-top-pro',
      page: 'remera-top-pro.html',
      name: 'Remera Top Pro',
      label: 'Merch oficial',
      description: 'Una remera ligera para llevar la identidad de Top Pro fuera del auto y del parque de reparaciones.',
      detailDescription: [
        'Una prenda comoda para eventos, viajes y dias de carrera, con una presencia simple que mantiene visible la identidad de Top Pro.',
        'Ideal para quienes quieren vestir la marca dentro y fuera del circuito sin perder practicidad ni estilo.'
      ],
      price: 'Pronto disponible',
      src: './assets/shirt.png',
      alt: 'Remera Top Pro',
      carouselViews: [
        {
          id: 'front',
          label: 'Frente',
          src: './assets/shirt-carousel-front.png',
          alt: 'Remera Top Pro para carrusel de frente'
        },
        {
          id: 'back',
          label: 'Dorso',
          src: './assets/shirt-carousel-back.png',
          alt: 'Remera Top Pro para carrusel de dorso'
        }
      ],
      views: [
        {
          id: 'front',
          label: 'Frente',
          src: './assets/shirt-front.png',
          alt: 'Remera Top Pro de frente'
        },
        {
          id: 'back',
          label: 'Dorso',
          src: './assets/shirt-back.png',
          alt: 'Remera Top Pro de dorso'
        }
      ]
    },
    {
      slug: 'bolso-organizador',
      page: 'bolso-organizador.html',
      name: 'Bolso Organizador',
      label: 'Equipo esencial',
      description: 'Bolsones de símil carbono con velcro y cierres resistentes hechos para accesorios ajustable a la jaula del vehículo, cuentan con varios compartimentos.',
      detailDescription: [
        'Diseñado para mantener accesorios, documentos y elementos de apoyo ordenados antes, durante y despues de cada salida.',
        'Es una opcion practica para mover tu equipo dentro y fuera del tramo.'
      ],
      price: '57.47 USD',
      src: './assets/bag.png',
      alt: 'Bolso organizador Top Pro',
      variants: [
        {
          id: 'bag-1',
          label: 'Maletin de copiloto',
          whatsappLabel: 'Maletin de copiloto',
          views: [
            {
              id: 'front',
              label: 'Frente',
              src: './assets/Bag 1 front.png',
              alt: 'Bolso Organizador Top Pro modelo 1 de frente'
            },
            {
              id: 'back',
              label: 'Dorso',
              src: './assets/Bag 1 back.png',
              alt: 'Bolso Organizador Top Pro modelo 1 de dorso'
            }
          ]
        },
        {
          id: 'bag-2',
          label: 'Organizador de Co-Piloto',
          whatsappLabel: 'Organizador de Co-Piloto',
          price: '41 USD',
          views: [
            {
              id: 'front',
              label: 'Frente',
              src: './assets/Bag 2 front.png',
              alt: 'Bolso Organizador Top Pro modelo 2 de frente'
            },
            {
              id: 'back',
              label: 'Dorso',
              src: './assets/Bag 2 back.png',
              alt: 'Bolso Organizador Top Pro modelo 2 de dorso'
            }
          ]
        }
      ]
    }
  ],
stores: [
  {
    name: 'Tienda Rally',
    detail: 'Punto de venta aliado.',
    action: () => window.open(
      'https://maps.app.goo.gl/pEd7NmqUiVsvqf436',
      '_blank'
    )
  },
  {
    name: 'Proximamente',
    detail: 'Esperanos, muy pronto estaremos mas cerca de vos.'
  },
  {
    name: 'Proximamente',
    detail: 'Esperanos, muy pronto estaremos mas cerca de vos.'
  }
]
};
