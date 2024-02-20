import styled from "styled-components";

export const Container = styled.div`
  max-width: 310px;

  display: flex;
  align-items: start;

  > .number {
    display: flex;
    align-items: center;

    span {
      font-weight: 700;
      font-size: 20px;

      color: ${({ theme }) => theme.COLOR.BLUE};
    }

    .line {
      width: 25px;
      height: 1px;

      margin: 0 8px;

      background-color: ${({ theme }) => theme.COLOR.BLUE};
    }
  }

  > .text {
    color: ${({ theme }) => theme.COLOR.WHITE};
    
    h2 {
      font-size: 20px;

      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
    }

    strong, span {
      color: ${({ theme }) => theme.COLOR.BLUE};
    }
  }
`;



