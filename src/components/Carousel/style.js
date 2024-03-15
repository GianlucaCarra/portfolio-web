import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  .slide {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    gap: 20px;
  }
`;