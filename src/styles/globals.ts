import { Global, css } from "@emotion/react";
import styled from '@emotion/styled'

export const theme = {
  colors: {
    primary: "#0E0D10",
    secondary: "#F6F6F7",
    white: "#fff",
    black: "#000",
    dark: "#1C1B1F",
    success: "#35D6A6",
    error: "#FF5757",
    errorText: "rgba(255, 87, 87, .5)",
    errorBorder: "rgba(255, 87, 87, .3)",
  },
  responsive: {
    xsMobile: "@media screen and (min-width: 320px)",
    mobile: "@media screen and (min-width: 375px)",
    tablet: "@media screen and (min-width: 540px)",
    laptop: "@media screen and (min-width: 769px)",
    tabletLandscape: "@media screen and (min-width: 1024px)",
    desktop: "@media screen and (min-width: 1440px)",
    largeDesktop: "@media screen and (min-width: 1600px)",
  },
};

export const GlobalStyles = css`
  body {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "DM Sans", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.375;
      height: 100%;
      color: #0e0d10;
      scroll-behavior: smooth;
    }
    body {
      min-width: 320px;
      @media (min-width: 769px) {
        overflow: initial !important;
      }
    }
    body.hidden {
      overflow: hidden;
    }
    #__next {
      height: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700;
      margin: 0;
    }

    p {
      &:first-child {
        margin-top: 0 !important;
      }
      &:last-child {
        margin-bottom: 0 !important;
      }
    }
    a {
      text-decoration: none;
      color: #9783d0;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 20px;
`;
