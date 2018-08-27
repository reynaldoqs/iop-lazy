export default [
  {
    path: '/cliente',
    component: () => import('@/moduloCliente/views/Main.vue'),
    children: [
      {
        path: '/',
        redirect: 'inicio'
      },
      {
        path: 'inicio',
        name: 'inicio-cliente',
        components: {
          cliente: () => import('@/moduloCliente/views/Inicio.vue'),
        },
        meta: {
          auth: true,
        }
      },
      {
        path: 'servicios',
        name: 'servicios-cliente',
        components: {
          cliente: () => import('@/moduloCliente/views/Servicios.vue'),
        },
        meta: {
          auth: true,
        }
      },
      {
        path: 'rutas',
        name: 'rutas-cliente',
        components: {
          cliente: () => import('@/moduloCliente/views/Rutas.vue'),
        },
        meta: {
          auth: true,
        }
      },
      {
        path: 'rutas/:idRuta',
        name: 'detalles-ruta',
        components: {
          cliente: () => import('@/moduloCliente/views/DetallesRuta.vue'),
        },
        meta: {
          auth: true,
        }
      }
    ],
    meta: {
      auth: true,
    },

  }
]

