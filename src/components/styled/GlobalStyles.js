import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    // RESET
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    // VARIABLES
    :root {
        // FONT STACK
        --font-body: 'Public Sans', sans-serif;
        --font-heading: 'DM Serif Display', serif;
        // COLOR PALETTE
        --color-primary: hsl(337, 48%, 49%); // DARK PINK
        --color-primary-active: hsl(337, 60%, 64%); // CHARM PINK (ACTIVES)
        --color-light: hsl(220, 60%, 99%); // LINK WATER WHITE
        --color-heading: hsl(207, 33%, 32%); // SAN JUAN BLUE
        --color-text: hsl(207, 16%, 50%); // LIGHT SAN JUAN BLUE
        --color-dark: hsl(207, 27%, 15%); // MIRAGE BLUE
    }

    html { font-size: 100%; }

    body {
        font-family: var(--font-body);
        font-size: .9375rem; // 15px
        line-height: 1.8667;
        color: var(--color-text);
        background-color: var(--color-light);
    }

    h1,
    h2,
    h3 {
        color: var(--color-heading);
    }

    h1,
    h2 {
        font-family: var(--font-heading);
    }

    h3 {
        font-family: var(--font-body);
    }

    ul { list-style: none; }

    a { text-decoration: none; }

    img { 
        display: block;
        max-width: 100%;
    }
`;