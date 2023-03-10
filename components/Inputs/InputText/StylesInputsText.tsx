import styled from "@emotion/styled";
import { ContainTextProps } from  './Interface'

export const ContainInputText = styled.div<ContainTextProps>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 0;
    .eye-pass{
        display: flex;
        position: absolute;
        right: 0;
        cursor: pointer;
        color: var(--textFormColor);
    }
    .form{
        width: 100%;
        height: 3rem;
        position: relative;
        overflow: hidden;
        input{
            width: 100%;
            height: 100%;
            background: none;
            color: var(--textFormColor);
            padding-top: 20px;
            border: none;
            outline: 0px;
        }
        .lbl-name{
            z-index: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            border-bottom: ${({ IsColor }) => IsColor ? "1px solid  var(--textFormColor)" : "1px solid white"};
        }
        .lbl-name:after{
            content: '';
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 100%;
            border-bottom: ${({ IsColor }) => IsColor ? "3px solid  var(--textFormColor)" : "1px solid #c7c7c7"};
            border-bottom: 3px solid var(--bgThridGlass);
            transform: translateX(-100%);
            transition: all 0.3s ease;
        }
        .text-name{
            position: absolute;
            bottom: 5px;
            left: 0;
            transform: translateY(-30%);
            transition: all 0.3s ease;
            color: ${({ IsColor }) => IsColor ? " var(--textFormColor)" : " var(--textFormColor)"};
        }
        input:focus + .lbl-name .text-name, input:valid + .lbl-name .text-name, input:focus + .eye-pass, input:valid + .eye-pass{
            transform: translateY(-120%);
            font-size: 14px;
            color: ${({ IsColor }) => IsColor ? "var(--bgThridGlass)" : "#fff"};
        }
        input:focus + .lbl-name:after, input:valid + .lbl-name:after{
            transform: translateX(0%);
        }
        div{
            position: relative;
        }
    }
`;