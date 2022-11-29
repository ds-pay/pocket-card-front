import styled from "@emotion/styled";

export const ContainerNewClient = styled.div`
    background-color:  var(--nextui-colors-bgAdminMenu);
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
`;

export const ContentUp = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    .content-left, .content-right{
        width: 100%;
        height: 100%;
        padding: 3rem;
    }
    .content-left{
        display: flex;
        flex-direction: column;
        h3{
            font-size: 15px;
        }
    }
    .content-right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3{
            font-size: 15px;
        }
    }
`;

export const ContentDown = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    .content-down{
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100%;
        
    }
`;