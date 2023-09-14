import axios from "axios";

const instance = axios.create({
  baseURL: "https://65008fca18c34dee0cd51a8e.mockapi.io",
});
export const fetchAllCars = async () => {
  const { data } = await instance.get("/cars");
  return data;
};

export const fetchCarById = async (id) => {
  const data = await instance.get(`/cars/${id}`);
  return data;
};
