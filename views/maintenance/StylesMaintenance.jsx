import styled from "@emotion/styled";
import "@fontsource/russo-one"

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Lato|Russo+One');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      to bottom,
      #292256 0%,
      #8446cf 70%,
      #a871d6 100%
    );
  .container-star {
    ::after {
      background: radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 40%,
        rgba(15, 10, 38, 0.2) 100%
      );
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }
    .star-1 {
      position: absolute;
      border-radius: 50%;
      background-color: #ffffff;
      -webkit-animation: twinkle 5s infinite ease-in-out;
      animation: twinkle 5s infinite ease-in-out;

      ::after {
        height: 100%;
        width: 100%;
        transform: rotate(90deg);
        content: "";
        position: absolute;
        background-color: #fff;
        border-radius: 50%;
      }

      ::before {
        background: radial-gradient(
          ellipse at center,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0) 60%,
          rgba(15, 10, 38, 0) 100%
        );
        position: absolute;
        border-radius: 50%;
        content: "";
        top: -20%;
        left: -50%;
      }

      :nth-of-type(1) {
        top: 82vh;
        left: 60vw;
        width: 7px;
        height: 2.3333333333px;
        -webkit-animation-delay: 5s;
        animation-delay: 5s;

        ::before {
          width: 14px;
          height: 14px;
          top: -250%;
        }
      }
      :nth-of-type(2) {
        top: 36vh;
        left: 30vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 2s;
        animation-delay: 2s;

        ::before {
          width: 10px;
          height: 10px;
          top: -225%;
        }
      }
      :nth-of-type(3) {
        top: 55vh;
        left: 38vw;
        width: 20px;
        height: 2.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 10px;
          height: 10px;
          top: -225%;
        }
      }
      :nth-of-type(4) {
        top: 21vh;
        left: 48vw;
        width: 10px;
        height: 2.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 10px;
          height: 10px;
          top: -225%;
        }
      }
      :nth-of-type(5) {
        top: 15vh;
        left: 18vw;
        width: 5px;
        height: 2.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 10px;
          height: 10px;
          top: -225%;
        }
      }
      :nth-of-type(6) {
        top: 70vh;
        left: 18vw;
        width: 8px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 10px;
          height: 10px;
          top: -225%;
        }
      }
      :nth-of-type(6) {
        top: 70vh;
        left: 8vw;
        width: 8px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 10px;
          height: 10px;
          top: -225%;
        }
      }
      :nth-of-type(7) {
        top: 78vh;
        left: 15vw;
        width: 3px;
        height: 0.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;
      }
      :nth-of-type(8) {
        top: 78vh;
        left: 25vw;
        width: 7px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(9) {
        top: 25vh;
        left: 13vw;
        width: 7px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(10) {
        top: 50vh;
        left: 13vw;
        width: 7px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(11) {
        top: 60vh;
        left: 23vw;
        width: 1px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(12) {
        top: 60vh;
        left: 50vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(13) {
        top: 60vh;
        left: 30vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(14) {
        top: 80vh;
        left: 40vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(15) {
        top: 10vh;
        left: 40vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(16) {
        top: 10vh;
        left: 60vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(17) {
        top: 30vh;
        left: 60vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(18) {
        top: 35vh;
        left: 65vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(19) {
        top: 50vh;
        left: 58vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(20) {
        top: 65vh;
        left: 63vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(21) {
        top: 5vh;
        left: 93vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(22) {
        top: 5vh;
        left: 3vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(23) {
        top: 58vh;
        left: 98vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(24) {
        top: 12vh;
        left: 82vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(25) {
        top: 32vh;
        left: 75vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(26) {
        top: 52vh;
        left: 83vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(27) {
        top: 22vh;
        left: 83vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(28) {
        top: 17vh;
        left: 88vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(29) {
        top: 26vh;
        left: 90vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(30) {
        top: 36vh;
        left: 86vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(31) {
        top: 15vh;
        left: 95vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(32) {
        top: 45vh;
        left: 95vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(33) {
        top: 48vh;
        left: 72vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(34) {
        top: 59vh;
        left: 78vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(35) {
        top: 65vh;
        left: 71vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(36) {
        top: 85vh;
        left: 71vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(37) {
        top: 80vh;
        left: 78vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(38) {
        top: 13vh;
        left: 75vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(39) {
        top: 75vh;
        left: 83vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(40) {
        top: 65vh;
        left: 89vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
      :nth-of-type(41) {
        top: 76vh;
        left: 95vw;
        width: 5px;
        height: 1.6666666667px;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;

        ::before {
          width: 5px;
          height: 5px;
          top: -25%;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  .title-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    .title {
      display: flex;
      .moon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 13rem;
        height: 13rem;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 0 40px 12px white;
        @media only screen and (max-width: 800px) {
          width: 10rem;
          height: 10rem;
        }
        .face {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 10rem;
          height: 10rem;
          background-color: transparent;

          .astronaut {
            transform: rotate(-10deg);
            top: -3rem;
            left: 1rem;
            right: 6rem;
            z-index: 6;
            position: absolute;
            @media only screen and (max-width: 650px) {
              top: -1.9rem;
              left: 1.5rem;
              right: 5.5rem;
            }
            img {
            }
          }

          .band-1 {
            background: rgb(233, 233, 233);
            background: linear-gradient(
              0deg,
              rgba(233, 233, 233, 1) 0%,
              rgba(255, 255, 255, 1) 35%,
              rgba(214, 214, 214, 1) 100%
            );
            width: 120%;
            border-radius: 5rem 5rem 0 0;
            position: relative;
            height: 3rem;
            top: 0rem;
            z-index: 5;
            @media only screen and (max-width: 650px) {
              width: 90%;
              top: 0.7rem;
              height: 2rem;
            }
          }
          .band-2 {
            background: rgb(233, 233, 233);
            background: linear-gradient(
              0deg,
              rgba(233, 233, 233, 1) 0%,
              rgba(255, 255, 255, 1) 35%,
              rgba(214, 214, 214, 1) 100%
            );
            width: 11.7rem;
            border-radius: 8rem 8rem 0 0;
            position: absolute;
            height: 3rem;
            transform: rotate(-30deg);
            top: 0.3rem;
            left: -2.7rem;
            z-index: 4;
            @media only screen and (max-width: 650px) {
              width: 80%;
              top: 0.5rem;
              height: 2rem;
              left: -0.8rem;
              top: 1rem;
            }
          }

          .mouth {
            top: 1.2rem;
            right: -1rem;
            position: relative;
            width: 40px;
            height: 50px;
            background-color: white;
            border-top: 3px solid black;
            border-radius: 0.5rem 1.5rem;
            @media only screen and (max-width: 650px) {
              width: 2rem;
              height: 2.5rem;
              top: 0;
            }
          }
          .eyes {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 50%;

            .eye-left,
            .eye-right {
              position: relative;
              width: 2.5rem;
              height: 3.8rem;
              margin: 0 1rem;
              background-color: black;
              border-bottom: 3px solid black;
              border-radius: 2rem 2rem 2rem 2rem;
              @media only screen and (max-width: 650px) {
                height: 3rem;
                width: 2rem;
              }
              .pupil {
                top: 0.3rem;
                left: 0.1rem;
                position: absolute;
                width: 1rem;
                height: 1.5rem;
                border-radius: 1rem;
                background-color: #ffffff;
                @media only screen and (max-width: 650px) {
                  height: 1.2rem;
                  width: 0.8rem;
                }
              }
            }
          }
        }
      }
      h1 {
        font-size: 8rem;
        font-weight: 600;
        filter: drop-shadow(5px 4px 10px white);
        @media only screen and (max-width: 650px) {
        }
      }
    }
    h2 {
      margin: 0 2rem;
      font-size: 3rem;
      text-align: justify;
      filter: drop-shadow(5px 4px 10px white);
      @media only screen and (max-width: 650px) {
        font-size: 2.2rem;
        text-align: center;
      }
    }
    button {
      z-index: 5;
      width: 8rem;
      margin: 2rem 0;
      height: 3rem;
      background: none;
      color: #ffffff;
      border-radius: 1rem;
      border: 2px solid white;
      transition: 0.5s all ease;
      :hover {
        cursor: pointer;
        border: 1px solid white;
        background: rgba(212, 212, 214, 0.336) 100%;
      }
    }
  }
`;