export const filterCarCatalog = (filter, data) => {
  const filterCars = [];
  data.map((item) => {
    if (
      (filter.make ? item.make === filter.make : true) &&
      (filter.price.length === 2
        ? parseInt(filter.price[0]) <= parseInt(item.rentalPrice.slice(1)) &&
          parseInt(item.rentalPrice.slice(1)) < parseInt(filter.price[1])
        : true) &&
      (filter.mileFrom ? item.mileage >= parseInt(filter.mileFrom) : true) &&
      (filter.mileTo ? item.mileage <= parseInt(filter.mileTo) : true)
    ) {
      filterCars.push(item);
    }
  });
  return filterCars;
};
