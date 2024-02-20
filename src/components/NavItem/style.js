import styled from "styled-components";

export const Container = styled.div`
  

  > span {
    font-family: 'Unica One', sans-serif;
    font-size: 20px;

    color: ${({ theme }) => theme.COLOR.WHITE};

    margin: 0 4px;
  }

  > div {
    border: 2px solid ${({ theme }) => theme.COLOR.BLUE};
    border-radius: 50px;
  }
`;