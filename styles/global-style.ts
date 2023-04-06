import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { media } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html, body{
        font-size: 16px;
        font-family: 'Montserrat', sans-serif !important;
        background: conic-gradient(at 90% 105%, transparent 50%, rgb(162, 128, 255) 75%, rgb(225, 128, 255) 80%, transparent) repeat scroll 0% 0%, rgba(0, 0, 0, 0) conic-gradient(at 50% -5%, rgb(101, 234, 209) 25%, rgb(252, 255, 193), rgb(244, 105, 169) 75%) repeat scroll 0% 0%;
        color:white;
        ${media.tablet}{
          font-size: 16px;
        }
    }
    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        ${media.mobile} {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        ${media.tablet}{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }
`;
