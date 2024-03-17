import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.COLOR.BLACK_900};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 100px;

  position: sticky;
  top: 0;
  z-index: 2;

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
    max-width: 780px;

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
  flex-direction: column;
  align-items: center;
  
  height: fit-content;

  gap: 25px;
  padding: 25px 100px;

  > h1 {
    color: ${({ theme }) => theme.COLOR.WHITE};

    font-size: 28px;
  }
`;

export const Contact = styled.section`
  background-color: ${({ theme }) => theme.COLOR.BLACK_800};
  
  padding: 25px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h1 {
    color: ${({ theme }) => theme.COLOR.WHITE};

    font-size: 28px;

    margin: 0 auto 25px;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    max-height: fit-content;

    > .action {
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 25px;
    max-width: 780px;

    color: ${({ theme }) => theme.COLOR.WHITE};

    > h2 {
      font-size: 20px;

      span {
        color: ${({ theme }) => theme.COLOR.BLUE};
      }
    }

    > p {
      text-align: left;

      font-size: 18px;

      max-width: 600px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 25px;
      justify-content: center;
    }

    .email, .phone {
      display: flex;
      gap: 25px;
      align-items: center;

      > svg {
        font-size: 50px;
        color: ${({ theme }) => theme.COLOR.BLUE};
      }

      > div {
        display: flex;
        flex-direction: column;

        span {
          color: ${({ theme }) => theme.COLOR.GRAY_200};

          font-family: "Alumni Sans", sans-serif;
          font-size: 24px;
            font-weight: 400;
          }

          a {
            color:  ${({ theme }) => theme.COLOR.WHITE};
            text-decoration: none;
            font-size: 16px;

            transition: .4s;

            &:hover {
              color:  ${({ theme }) => theme.COLOR.BLUE};
              transition: .4s;
            }
          }
        }
      }

      > ul {
        list-style: none;

        display: flex;
        gap: 25px;
        
        li {
          width: fit-content;

          a {
            display: grid;
            place-items: center;

            color:  ${({ theme }) => theme.COLOR.WHITE};

            text-decoration: none;

            background-color: ${({ theme }) => theme.COLOR.BLACK_700};

            padding: 15px;
            border-radius: 50%;

            transition: .4s;

            &:hover {
              background-color: ${({ theme }) => theme.COLOR.BLUE};
              transition: .4s;
            }

            svg {
              font-size: 28px;
            }
          }
        } 
      }
    }

    > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      width: 550px;
      max-width: 550px;

      .input-wrapper {
        display: flex;
        gap: 15px;
        width: 100%;

        input {
          width: 100%;
        }
      }

      input, textarea {
        height: 45px;
        border: none;
        border-radius: 50px;
        width: 100%;

        padding: 0 20px;

        font-family: "Nunito", sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.COLOR.WHITE};

        background-color: ${({ theme }) => theme.COLOR.BLACK_700};
      }

      .textarea {
        height: 180px;
      }

      textarea {
        border-radius: 25px;

        height: 100%;
        padding: 12px 20px ;

        resize: none;
      }

      textarea:focus, input:focus, select:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
      } 

      button {
      height: 45px;
      border: none;
      border-radius: 50px;
      width: calc(100% - 20%);

      align-self: center;
      background-color: ${({ theme }) => theme.COLOR.BLUE};

      font-family: "Nunito", sans-serif;
      font-size: 16px;
      color: ${({ theme }) => theme.COLOR.WHITE};

      cursor: pointer;

      display: grid;
      place-items: center;
    }
  }
}
`;

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.COLOR.BLACK_900};
  
  padding: 25px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .help {
    display: flex;
    flex-direction: column;
    gap: 25px;

    color: ${({ theme }) => theme.COLOR.WHITE};

    max-width: 500px;

    > h1 {
      font-size: 26px;

      span {
        color: ${({ theme }) => theme.COLOR.BLUE};
      }
    }

    > p {
      text-align: left;

      font-size: 18px;

      max-width: 600px;
    }

    a {
      padding: 15px;
      width: 100%;

      background-color: ${({ theme }) => theme.COLOR.BLACK_700};

      border-radius: 50px;

      color: ${({ theme }) => theme.COLOR.WHITE};
      text-decoration: none;

      display: grid;
      place-items: center;
      transition: .4s;

      &:hover {
        background-color: ${({ theme }) => theme.COLOR.BLUE};
        transition: .4s;

        cursor: pointer;
      }
    }
  }

    .sep {
      border: 1px solid ${({ theme }) => theme.COLOR.WHITE};

      height: 200px;

      position: absolute;
      left: 50%;
    }

  .info {
    display: grid;
    place-items: center;
    width: 50%;

    
  span {
    display: grid;
    place-items: center;

    font-family: 'Roboto', sans-serif;
    line-height: 200%;
    color: ${({ theme }) => theme.COLOR.WHITE};
  }
}
`;