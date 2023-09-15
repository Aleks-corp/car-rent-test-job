import { CompanyDescription } from "../components/CompanyDescription/CompanyDescription";
import { Section } from "../components/Section/Section";

export function Component() {
  return (
    <Section title="Car Rent">
      <CompanyDescription />
    </Section>
  );
}

Component.displayName = "HomePage";
