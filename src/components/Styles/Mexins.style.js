import { css } from 'styled-components'

//Mexins
export const textColor = css`
    color: ${({ $isDark }) => ($isDark ? '#FFFFFF' : '#606060')};
`
export const wrapperColor = (darkColor = '#151419', lightColor = '#ffff') => css`
    background-color: ${({ $isDark, $darkColor = darkColor, $lightColor = lightColor }) => ($isDark ? $darkColor : $lightColor)};
`

export const secondaryColor = css`
    color: ${({ $isDark }) => ($isDark ? 'black' : '#FFFFFF')};
`
export const reverseSecondaryColor = css`
    color: ${({ $isDark }) => (!$isDark ? 'black' : '#FFFFFF')};
`
// export const primaryTextColor = css`
//     color: ${({ $isDark }) => ($isDark ? '#20202C' : '#FFFFFF')};
// `

export const primaryBacground = css`
    background-color: ${({ $isDark }) => ($isDark ? '#20202C' : '#FFFFFF')};
`

export const inputColor = css`
    background-color: ${({ $isDark }) => ($isDark ? '#20202C' : '#94a6be')};
`

export const primaryColor = css`
    color: ${({ $isDark }) => ($isDark ? 'black' : '#ffff')};
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
    transition: color 0.3s;

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
