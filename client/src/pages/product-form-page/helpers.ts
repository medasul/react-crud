const isStringArray = (
  arr: Array<unknown | string>,
): arr is string[] => arr.every((str) => typeof str === 'string');

export const getProductFormValues = (form: HTMLFormElement | undefined): Omit<ProductModel, 'id'> => {
  const formData = new FormData(form);
  const title = formData.get('title');
  if (typeof title !== 'string') throw new Error('Missing Title');
  if (title.length < 2) throw new Error('title must have at least 2 symbols');

  const inventory = formData.get('inventory');
  if (typeof inventory !== 'string') throw new Error('Missing Inventory');
  if (inventory.length < 2) throw new Error('inventory must have at least 2 symbols');

  const price = formData.get('price');
  if (typeof price !== 'string') throw new Error('Missing price');
  if (price.length < 1) throw new Error('price must have at least 1 number');

  const images = formData.getAll('images');
  if (!isStringArray(images)) throw new Error('All images must be strings');

  const values = {
    title,
    inventory,
    price: `${price}€`,
    images: images.filter((img) => img !== ''),
  };

  return values;
};
