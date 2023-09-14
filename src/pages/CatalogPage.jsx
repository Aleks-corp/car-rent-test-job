import { useEffect, useState } from "react";
import { Section } from "../components/Section/Section";
import { fetchAllCars } from "../api/axios";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  // const [filteredCars, setFilteredCars] = useState([]);
  const fetch = async () => {
    const data = await fetchAllCars();
    console.log("data:", data);
    setCars(data);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <Section>
      <>
        <form>
          <input />
          <input />
          <input />
          <input />
        </form>
        {cars.length === 0 ? (
          <p>Loading</p>
        ) : (
          cars.map((item) => (
            <li key={item.id}>
              <img src={item.img} width="300" />
              <p>{`${item.make} ${item.model}`}</p>
            </li>
          ))
        )}
      </>
    </Section>
  );
};
export default CatalogPage;
