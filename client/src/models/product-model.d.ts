// failo pletinys d.ts - galima aprasius d.ts ji tureti viesai ir jo neimportuoti

type ProductModel = {
  id: string,
  title: string,
  inventory: {
    status: string,
    units: number
  },
  images: string [],
  price: string,
};
