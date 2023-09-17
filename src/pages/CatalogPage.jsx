import { CatalogList } from "../components/CatalogList/CatalogList";
import { FilterForm } from "../components/FilterForm/FilterForm";
import { Section } from "../components/Section/Section";

export function Component() {
  return (
    <Section>
      <FilterForm />
      <CatalogList />
    </Section>
  );
}

Component.displayName = "CarCatalog";
