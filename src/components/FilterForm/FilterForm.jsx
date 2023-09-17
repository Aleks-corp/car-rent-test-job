import PropTypes from "prop-types";
import { useState } from "react";
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

export const FilterForm = ({ makeOption, onSubmit }) => {
  const [mileFrom, setMileFrom] = useState("");
  const [mileTo, setMileTo] = useState("");
  const [error, setError] = useState("");
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

FilterForm.propTypes = {
  makeOption: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onSubmit: PropTypes.func.isRequired,
};
