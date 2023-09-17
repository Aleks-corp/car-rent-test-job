import { useState, useEffect } from "react";
import { PRICE_LIST } from "../../constants/priceList";
import {
  Btn,
  Form,
  InputFrom,
  InputPlaceholderFrom,
  InputPlaceholderTo,
  InputTo,
  InputWraper,
  ErrorThumb,
  StyledSelect,
} from "./FilterForm.styled";
import { setUniqueMake } from "../../helpers/setUniqueMake";
import { useDispatch, useSelector } from "react-redux";
import { selectCatalogList } from "../../redux/selectors";
import { filterCarCatalog } from "../../helpers/filterCarCatalog";
import { filteredCatalog } from "../../redux/catalog/catalogSlice";

export const FilterForm = () => {
  const items = useSelector(selectCatalogList);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
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
      dispatch(filteredCatalog(items));
      return;
    }
    const filterCars = filterCarCatalog(filter, items);
    dispatch(filteredCatalog(filterCars));
  };

  const [mileFrom, setMileFrom] = useState("");
  const [mileTo, setMileTo] = useState("");
  const [error, setError] = useState("");
  const [makeOption, setMakeOption] = useState([]);

  useEffect(() => {
    const selectMake = setUniqueMake(items);
    setMakeOption(selectMake);
  }, [items]);

  const errorInput = (value) => {
    isNaN(value) || (value.length < 3 && value.length !== 0)
      ? setError("Please enter 3 - 5 digits to set mileage")
      : setError("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <StyledSelect
        classNamePrefix="SelectMake"
        placeholder="Enter the text"
        isClearable={true}
        isSearchable={true}
        name="make"
        options={makeOption}
      />
      <StyledSelect
        classNamePrefix="SelectPrice"
        placeholder="To $"
        isClearable={true}
        name="price"
        options={PRICE_LIST}
      />
      <InputWraper>
        <InputFrom
          type="text"
          pattern="[0-9]{3,5}"
          maxLength="5"
          value={mileFrom}
          onChange={(e) => {
            errorInput(e.target.value);
            setMileFrom(e.target.value);
          }}
        />
        <InputPlaceholderFrom>From</InputPlaceholderFrom>
        <InputTo
          type="text"
          pattern="[0-9]{3,5}"
          maxLength="5"
          value={mileTo}
          onChange={(e) => {
            errorInput(e.target.value);
            setMileTo(e.target.value);
          }}
        />
        <InputPlaceholderTo>To</InputPlaceholderTo>
        <ErrorThumb>{error}</ErrorThumb>
      </InputWraper>
      <Btn type="submit">Search</Btn>
    </Form>
  );
};
