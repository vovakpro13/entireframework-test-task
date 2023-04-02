import React from "react";
import styled from "styled-components/macro";
import { CircleLoader } from "react-spinners";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  width: 100%;

  font-size: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <CircleLoader size={40} color="white" />
      Loading the best Menu...
    </SpinnerWrapper>
  );
};

export default Spinner;
