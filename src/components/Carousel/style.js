import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  > h1 {
    color: ${({ theme }) => theme.COLOR.WHITE};

    font-size: 28px;
  }

  .slider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    > svg {
      color: ${({ theme }) => theme.COLOR.GRAY_200};
      transition: .4s;

      &:hover {
        cursor: pointer;
        filter: brightness(0.8);
        transition: .4s;
        transform: scale(1.5);
      }
    }
    
    .slide {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);

      gap: 20px;
    }

    .slide-hidden {
      display: none;
    }
  }

  .indicators {
    display: flex;
    gap: 15px;

    .indicator {
      height: 10px;
      width: 10px;

      border-radius: 50%;

      background-color: ${({ theme }) => theme.COLOR.BLUE};
    }

    .indicator-inactive {
      background-color: ${({ theme }) => theme.COLOR.GRAY_200};
    }
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  > svg {
    color: ${({ theme }) => theme.COLOR.BLUE};
    position: absolute;
    left: 100px;
    transition: .4s;

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
      transition: .4s;
      transform: scale(1.2);
    }
  }

  > h1 {
    color: ${({ theme }) => theme.COLOR.WHITE};

    text-align: center;
    font-size: 28px;
  }
`;