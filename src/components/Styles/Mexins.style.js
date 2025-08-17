import { css } from 'styled-components'

//Mexins
export const textColor = css`
    color: ${({ $isDark }) => ($isDark ? '#FFFFFF' : '#606060')};
`
export const wrapperColor = (darkColor = '#151419', lightColor = '#ffff') => css`
    background-color: ${({ $isDark, $darkColor = darkColor, $lightColor = lightColor }) => ($isDark ? $darkColor : $lightColor)};
`

export const secondaryColor = css`
    color: ${({ $isDark }) => ($isDark ? '#0000' : '#FFFFFF')};
`

export const primaryBacground = css`
    background-color: ${({ $isDark }) => ($isDark ? '#20202C' : '#FFFFFF')};
`

export const inputColor = css`
    background-color: ${({ $isDark }) => ($isDark ? '#20202C' : '#94a6be')};
`

export const primaryColor = css`
    color: ${({ $isDark }) => ($isDark ? '#000' : '#ffff')};
`

//Colors
export const accentColor = '#94A6BE'
export const accentPrimaryColor = '#151419'

export const borderColor = ({ $isDark }) => ($isDark ? '#FFFFFF' : '#606060')

export const primaryHoverColor = '#33399b'

export const white = '#ffff'
export const linkColor = '#94A6BE66'

//Hovers

export const hoverColor = css`
    &:hover {
        color: ${primaryHoverColor};
    }
`
export const hoverBackground = css`
    &:hover {
        background-color: ${primaryHoverColor};
    }
`
export const hoverBorder = css`
    &:hover::after {
        border-left-color: ${primaryHoverColor};
        border-bottom-color: ${primaryHoverColor};
    }
`

export const hoverCombination = css`
    &:hover {
        background-color: ${primaryHoverColor};
        color: ${white};
    }
    &:hover a {
        color: ${white};
    }
`

// ._hover01:hover {
//   background-color: ${primaryHoverColor};
// }

// ._hover02:hover, .header__user:hover {
//   color: #33399b;
// }
// ._hover02:hover::after, .header__user:hover::after {
//   border-left-color: #33399b;
//   border-bottom-color: #33399b;
// }

// ._hover03:hover {
//   background-color: #33399b;
//   color: #FFFFFF;
// }
// ._hover03:hover a {
//   color: #FFFFFF;
// }
