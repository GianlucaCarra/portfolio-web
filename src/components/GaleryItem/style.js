import styled from "styled-components";

export const Container = styled.button`
  display: grid;
  place-items: center;

  border: none;

  &:hover {
    > span {
      z-index: 0;
      transition: .4s;
    }
  }

  > img {
    height: 150px;
    width: 300px;

    position: relative;
    
    transition: .4s;

    &:hover {
      cursor: pointer;

      filter: brightness(.6);
      transition: .4s;
    }
  }

  span {
    font-family: "Nunito", sans-serif;
    font-size: 26px;
    font-weight: 700;

    width: 250px;
    text-overflow: wrap;

    color: ${({ theme }) => theme.COLOR.WHITE};

    position: absolute;
    z-index: -1;
    transition: .4s;

    &:hover {
      cursor: pointer;
      transition: .4s;
    }
  }
`;