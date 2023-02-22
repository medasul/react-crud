
const singleProductPageRoot = '/product/';


const routes = {
  HomePage: '/',
  SingleProductPage: {
    path: `${singleProductPageRoot}:id`,
  createLink: (id: string | number) => `${singleProductPageRoot}${id}` }
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
