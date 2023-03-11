import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContentCard = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  margin-top: 3rem;
  height: 4rem;
  top: 0;
  background: var(--backgroundNavbar);

  .cardContent {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
      padding-left: 4rem;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  width: 9rem;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0rem 0.5rem 0rem 0.5rem;
  color: ${({ isSelection }) =>
    !isSelection
      ? "var(--textColorCardAnimate)"
      : "var(--textFormColor)"};
  border-radius: ${({ isSelection }) =>
    isSelection ? "1rem 1rem 0 0" : "1rem 1rem 1rem 1rem"};
  transition: 0.3s all ease;
  background-color: ${({ isSelection }) =>
    isSelection ? "var(--backgroundForm)" : null};
  @media (max-width: 1024px) {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    .container-icon {
      font-size: 1.5rem;
    }
  }

  :hover {
    cursor: pointer;
    color: var(--textFormColor);
    background-color: var(--backgroundForm);
  }
  .container-icon {
    font-size: 1.2rem;
  }
  .container-label {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .curva-izquierda,
  .curva-derecha {
    position: absolute;
    width: 0.8rem;
    height: 1rem;
    bottom: 0;
    transition: 0.4s all ease;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .curva-izquierda {
    left: -0.8rem;
    border-bottom-right-radius: 20px;
    box-shadow: ${({ isSelection }) =>
      isSelection
        ? "4px 1.5px 0 1.5px var(--backgroundForm)"
        : null};
  }
  .curva-derecha {
    right: -0.8rem;
    border-bottom-left-radius: 30px;
    box-shadow: ${({ isSelection }) =>
      isSelection
        ? "-4px 1.5px 0 1.5px var(--backgroundForm)"
        : null};
  }
`;

export const Content = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;