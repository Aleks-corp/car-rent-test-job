import { CompanyDescription } from "../components/CompanyDescription/CompanyDescription";
import { HomeRentCar } from "../components/HomeRentCar/HomeRentCar";
import { Section } from "../components/Section/Section";

export function Component() {
  return (
    <Section>
      <HomeRentCar />
      <CompanyDescription />
    </Section>
  );
}

Component.displayName = "HomePage";
