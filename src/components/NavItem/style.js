import styled from "styled-components";

export const Container = styled.a`
  text-decoration: none;

  display: flex;
  justify-content: center;

  position: relative;

  width: fit-content;
  padding: 0 5px;
  overflow: hidden;

  &:hover {
    > div {
      display: block;
      animation: .5s slide-in;
    }
  }

  > span {
    font-family: 'Unica One', sans-serif;
    font-size: 20px;

    color: ${({ theme }) => theme.COLOR.WHITE};

    margin-bottom: 4px;
  }

  > div {
    border: 2px solid ${({ theme }) => theme.COLOR.BLUE};
    border-radius: 50px;

    position: absolute;
    bottom: 0;
    right: 0;

    display: none;
    width: 100%;
  }

  > .selected {
    display: block;
  }

  @keyframes slide-in {
    from {
     transform: translate(-100%);
    } to {
     transform: translate(0%);
    }
  }
`;