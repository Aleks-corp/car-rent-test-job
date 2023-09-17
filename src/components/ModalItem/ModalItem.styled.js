import styled from "styled-components";

export const ModalContainer = styled.div`
  max-width: calc(100vw - 44px);
  max-height: calc(100vh - 44px);
  padding: 20px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: auto;
  background-color: #ffffff;
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 14px;
  width: 460px;
  height: 248px;
  margin-bottom: 14px;
`;
export const Image = styled.img`
  width: 460px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
`;
export const CloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  padding: 0;
  border: 0;
  top: -20px;
  right: -20px;
  width: 24px;
  height: 24px;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin-top: 14px;
  margin-bottom: 9px;
`;
export const Title = styled.p`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;
export const ModelTitle = styled.span`
  color: #3470ff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;
export const Text = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  word-spacing: 2px;
  max-width: 460px;
`;

export const Description = styled.p`
  max-width: 460px;
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  margin-bottom: 24px;
`;
export const TextTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const ConditionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 460px;
  gap: 8px;
  margin-bottom: 24px;
`;

export const ConditionItem = styled.p`
  padding: 7px 14px;
  color: #363535;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const ConditionAccent = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const CallLink = styled.a`
  width: 168px;
  border-radius: 12px;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #3470ff;
  line-height: 1.42;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
