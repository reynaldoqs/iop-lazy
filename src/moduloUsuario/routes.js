export default [

  {
    path: '/',
    redirect: 'usuario'
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/moduloUsuario/views/NotFound.vue'),
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import('@/moduloUsuario/views/Main.vue'),
  },
]

