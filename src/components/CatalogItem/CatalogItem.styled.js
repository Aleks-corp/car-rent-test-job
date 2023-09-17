import styled from "styled-components";

export const ItemContainer = styled.li`
  width: 274px;
`;
export const ImageContainer = styled.div`
  border-radius: 14px;
  width: 274px;
  height: 268px;
  position: relative;
`;
export const ImageWrapper = styled.div`
  position: absolute;
  z-index: 5;
  top: -268px;
  border-radius: 14px;
  width: 274px;
  height: 268px;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`;

export const Image = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 9px;
`;
export const Title = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
`;

export const Description = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  word-spacing: 2px;
`;
