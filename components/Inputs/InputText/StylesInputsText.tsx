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
        color: var(--nextui-colors-bgThridGlass);
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
            color: #fff;
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
            border-bottom: ${({ IsColor }) => IsColor ? "1px solid #c7c7c7" : "1px solid var(--nextui-colors-bgThridGlass)"};
        }
        .lbl-name:after{
            content: '';
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 100%;
            height: 100%;
            border-bottom: ${({ IsColor }) => IsColor ? "3px solid var(--nextui-colors-bgThridGlass)" : "1px solid #c7c7c7"};
            border-bottom: 3px solid var(--nextui-colors-bgThridGlass);
            transform: translateX(-100%);
            transition: all 0.3s ease;
        }
        .text-name{
            position: absolute;
            bottom: 5px;
            left: 0;
            transition: all 0.3s ease;
            color: ${({ IsColor }) => IsColor ? "#fff" : "var(--nextui-colors-bgThridGlass)"};
        }
        input:focus + .lbl-name .text-name, input:valid + .lbl-name .text-name{
            transform: translateY(-120%);
            font-size: 14px;
            color: ${({ IsColor }) => IsColor ? "var(--nextui-colors-bgThridGlass)" : "#fff"};
        }
        input:focus + .lbl-name:after, input:valid + .lbl-name:after{
            transform: translateX(0%);
        }
        div{
            position: relative;
        }
    }
`;