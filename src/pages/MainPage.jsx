import { HomeDescription } from "../components/HomeDescription/HomeDescription";
import { HomeModels } from "../components/HomeModels/HomeModels";
import { HomeRentCar } from "../components/HomeRentCar/HomeRentCar";
import { Section } from "../components/Section/Section";

export function Component() {
  return (
    <Section>
      <HomeRentCar />
      <HomeDescription />
      <HomeModels />
    </Section>
  );
}

Component.displayName = "HomePage";
