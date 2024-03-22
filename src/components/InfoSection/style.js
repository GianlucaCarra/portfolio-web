import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 700px;
  max-height: 125px;
  overflow: hidden;
  gap: 15px;

  .reverse {
    
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.COLOR.WHITE};
  }
  
  img {
    height: 125px;
    width: 200px;
    object-fit: cover;
  }

`;