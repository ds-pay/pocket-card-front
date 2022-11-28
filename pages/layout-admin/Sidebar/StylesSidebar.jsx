import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: ${({isActivate}) => isActivate ? "4rem" : "15.5rem" };
    height: 100%;
    background: var(--nextui-colors-backgroundNavbar);
    position: absolute;
    transition: 0.5s all ease;
    white-space: nowrap;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 1rem 0rem 1rem 0rem;
  align-items: flex-start;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  .container {
    display: flex;
    align-content: space-between;
    margin: 0.5rem 1rem 0.5rem 1rem;
    .contain-img,
    .contain-label,
    .contain-notifi {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .contain-img {
        margin: 0.5rem 0.2rem 0.5rem 0.2rem;
    }
    .contain-label{
        font-size: 1rem;
    }
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  height: 5rem;
  color: white;
  .contain-logo,
  .contain-name {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contain-logo {
    padding: 1rem;
    margin: 0.5rem;
  }
  .contain-name {
    flex-wrap: nowrap;
    position: relative;
    overflow: hidden;
    transition: 0.5s all ease;
    opacity: ${({ isActivate }) => (isActivate ? "0" : "1")};
  }
`;

export const ButtonArrow = styled.div`
    width: 1.85rem;
    height: 1.85rem;
    background-color: blue;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: -0.9rem;
    top: 1rem;
    color: white;
    font-size: 1.75rem;
    border-radius: 2rem;
    transform: ${({isActivate}) => isActivate ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 0.2s all ease;
    z-index: 1;
    :hover{
        cursor: pointer;
    }
`;