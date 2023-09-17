import { useEffect, useState } from "react";
import { CatalogList } from "../components/CatalogList/CatalogList";
import { FilterForm } from "../components/FilterForm/FilterForm";
import { Section } from "../components/Section/Section";
import { useLoaderData } from "react-router-dom";
import { setUniqueMake } from "../helpers/setUniqueMake";
import { filterCarCatalog } from "../helpers/filterCarCatalog";

export function Component() {
  const data = useLoaderData();

  const [filteredCatalog, setFilteredCatalog] = useState(data);
  const [makeOption, setMakeOption] = useState([]);

  useEffect(() => {
    const selectMake = setUniqueMake(data);
    setMakeOption(selectMake);
  }, [data]);

  const onSubmitSearch = (e) => {
    e.preventDefault();
    const filter = {
      make: e.target[1].value,
      price: e.target[3].value.split("-"),
      mileFrom: e.target[4].value,
      mileTo: e.target[5].value,
    };

    if (
      !filter.make &&
      filter.price.length === 1 &&
      !filter.mileFrom &&
      !filter.mileTo
    ) {
      setFilteredCatalog(data);
      return;
    }
    const filterCars = filterCarCatalog(filter, data);
    setFilteredCatalog(filterCars);
  };

  return (
    <Section>
      <FilterForm makeOption={makeOption} onSubmit={onSubmitSearch} />
      <CatalogList items={filteredCatalog} />
    </Section>
  );
}

Component.displayName = "CarCatalog";
