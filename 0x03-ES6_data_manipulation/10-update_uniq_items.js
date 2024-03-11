export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  const updatedMap = new Map([...groceriesMap].map(([item, quantity]) => {
    quantity = Number(quantity);
    return [item, quantity === 1 ? 100 : quantity];
  }));
  return updatedMap;
}
