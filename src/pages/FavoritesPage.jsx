import { Section } from "../components/Section/Section";
import { FilterList } from "../components/CatalogList/FilterList";

export function Component() {
  return (
    <Section>
      <FilterList />
    </Section>
  );
}

Component.displayName = "FavoritesPage";
