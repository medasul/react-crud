const singleProductPageRoot = '/product/';
const updateProductPageRoot = '/update-product/';

// mes i dinaminius linkus neisime, tokie kaip single page nebus navigation'e
// is dinaminio routo nekursime statines nuorodos

// 1 budas

const staticRoutes = {
  HomePage: '/',
  ProductFormPage: '/create-product',
} as const;

const dynamicRoutes = {
  SingleProductPage: {
    path: `${singleProductPageRoot}:id`,
    createLink: (id: string | number) => `${singleProductPageRoot}${id}`,
  },
  UpdateProductPage: {
    path: `${updateProductPageRoot}:id`,
    createLink: (id: string | number) => `${updateProductPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;

// 2 budas

/*
const routes = {
  HomePage: '/',
  ProductFormPage: '/create-product',
  SingleProductPage: {
    path: `${singleProductPageRoot}:id`,
  createLink: (id: string | number) => `${singleProductPageRoot}${id}` }
} as const;

// 2 budas
export type Routes = typeof routes;
export type RouteLink ={
[Key in keyof Routes]: Routes[Key] extends string ? Routes[Key] : never
} [keyof Routes]
// export type Routes = typeof routes;
// export type RouteLink = Routes[keyof Routes];

export default routes;
*/
