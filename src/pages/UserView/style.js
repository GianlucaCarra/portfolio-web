import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLOR.BLACK_900};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 100px;

  position: sticky;
  top: 0;

  > img {
    height: 30px;
  }

  > nav {
    display: flex;
    align-items: center;

    gap: 50px;
  }
`;

export const Home = styled.section`
  background-color: ${({ theme }) => theme.COLOR.BLACK_700};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 100px;

  position: relative;

  > .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    max-width: 800px;

    color: ${({ theme }) => theme.COLOR.WHITE};

    > h2 {
      font-size: 20px;

      span {
        color: ${({ theme }) => theme.COLOR.BLUE};
      }
    }

    > p {
      text-align: center;

      font-size: 18px;
    }
  }

  > img {
    width: 350px;
  }
`;

export const Card = styled.div`
  background: rgb(0,29,180);
  background: linear-gradient(137deg, rgba(0,29,180,1) 0%, rgba(0,103,232,1) 35%, rgba(0,95,238,1) 65%, rgba(0,123,255,1) 100%);

  display: flex;
  align-items: center;
  
  padding: 25px;
  width: fit-content;
  border-radius: 8px;

  position: absolute;
  bottom: -15%;
  z-index: 1;

  color: ${({ theme }) => theme.COLOR.WHITE};

  > span {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 22px;

    > strong {
      font-weight: 900;
      font-size: 40px;
    }
  }

  > .separator {
    height: 70px;
    border: 0.5px solid #FFFFFF50;
    margin: 0 20px
  }
`;

export const About = styled.section`
  background-color: ${({ theme }) => theme.COLOR.BLACK_800};

  position: relative;

  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 100px 100px 25px;
`;


export const Projects = styled.section`
  background-color: ${({ theme }) => theme.COLOR.BLACK_700};

  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 25px 100px;
`;