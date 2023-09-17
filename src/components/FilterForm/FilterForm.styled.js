import styled from "styled-components";
import Select from "react-select";

export const Form = styled.form`
  position: relative;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 20px;
  gap: 18px;
`;
export const Btn = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 12px;
  padding: 12px 44px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #3470ff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const InputWraper = styled.div`
  display: flex;
  position: relative;
`;

export const InputFrom = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 0 14px 72px;
  border: 0;
  border-radius: 14px 0 0 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  &:focus {
    outline: 0;
  }
`;
export const InputTo = styled.input`
  position: relative;
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 0 14px 72px;
  border: 0;
  border-radius: 0 14px 14px 0;
  background: #f7f7fb;
  &:focus {
    outline: 0;
  }
`;

export const InputPlaceholderFrom = styled.p`
  position: absolute;
  top: 12px;
  left: 24px;
`;

export const InputPlaceholderTo = styled.p`
  position: absolute;
  top: 12px;
  right: 120px;
`;

export const ErrorThumb = styled.p`
  position: absolute;
  top: 45px;
  right: 45px;
  color: red;
  font-size: 12px;
  font-weight: 400;
`;

export const StyledSelect = styled(Select)`
  .SelectMake__control {
    height: 48px;
    width: 224px;
    border: 0;
    border-radius: 14px;
    background: #f7f7fb;
    cursor: pointer;
    padding: 8px 0 8px 18px;
  }
  .SelectPrice__control {
    height: 48px;
    width: 175px;
    border: 0;
    border-radius: 14px;
    background: #f7f7fb;
    cursor: pointer;
    padding: 8px 0 8px 18px;
  }

  .SelectMake__control:hover,
  .SelectPrice__control:hover {
    box-shadow: 0 0 0 0 #f7f7fb;
    border-color: #000000;
  }

  .SelectMake__control--is-focused,
  .SelectPrice__control--is-focused {
    box-shadow: 0 0 0 0 #f7f7fb;
    outline: none;
  }
  .SelectMake__menu,
  .SelectPrice__menu {
    border-radius: 10px;
    padding: 5px;
    background-color: #f7f7fb;
    color: #3c3d3e;
  }

  .SelectMake__indicator-separator,
  .SelectPrice__indicator-separator {
    display: none;
  }

  .SelectMake__menu-list,
  .SelectPrice__menu-list {
    background-color: #f7f7fb;
    height: 200px;
    padding: 0;
  }
  .SelectMake__option,
  .SelectPrice__option {
    font-size: 16px;
    cursor: pointer;
    padding: 0 10px 5px;
  }
`;
