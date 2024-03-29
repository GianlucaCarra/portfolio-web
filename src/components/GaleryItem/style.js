import styled from "styled-components";

export const Container = styled.button`
  height: 200px;
  width: 350px;

  display: block;

  position: relative;

  border: none;

  transition: 0.5s;

  &:hover {
    transform: scale(1.4);
    transition: 0.5s;
    
    z-index: 1;

    cursor: pointer;

    .info {
      display: flex;

      margin-top: 15px;
      min-width: 100%;

      animation: .5s slide-bottom;
      position: absolute;
      z-index: -1;

      border: 1px solid ${({ theme }) =>  theme.COLOR.WHITE};
    }
  }

  > img {
    height: 100%;
    width: 100%;
    
    object-position: top;
    object-fit: cover;

    transition: 0.5s;
  }

  .info {
    backdrop-filter: blur(10px);
    padding: 20px;
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    border-radius: 10px;

    transition: .4s;

    color: ${({ theme }) =>  theme.COLOR.WHITE};

    > p {
      font-size: 14px
    }
  }

  @keyframes slide-bottom {
    from {
      transform: translateY(-50%);
    } to {
      transform: translateY(0);
    }
  }
`;