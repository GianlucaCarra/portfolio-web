import styled from "styled-components";

export const Container = styled.button`
  height: 200px;
  width: 350px;
  overflow: hidden;

  position: relative;

  border: none;

  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  font-size: 24px;

  &:hover {
    cursor: pointer;

    span {
      display: grid;
    }
  }

  img {
    height: 100%;
    width: 100%;

    object-fit: cover;
    object-position: top;
  }

  span {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    place-items: center;

    color: ${({ theme }) => theme.COLOR.WHITE};

    background-color: #00000060;

    display: none;
  }
`;