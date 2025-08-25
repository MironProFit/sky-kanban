import { css } from 'styled-components'

// Миксины


export const textColor = css`
    color: ${({ $isDark }) => ($isDark ? '#FFFFFF' : '#606060')};
`

export const reverseTextColor = css`
    color: ${({ $isDark }) => (!$isDark ? '#FFFFFF' : '#606060')};
`
export const wrapperColor = (darkColor = '#151419', lightColor = '#EAEEF6') => css`
    background-color: ${({ $isDark, $darkColor = darkColor, $lightColor = lightColor }) => ($isDark ? $darkColor : $lightColor)};
`
export const primaryColor = css`
    color: ${({ $isDark }) => ($isDark ? 'black' : '#ffff')};
`
export const reversePrimaryColor = css`
    color: ${({ $isDark }) => (!$isDark ? 'black' : '#ffff')};
`

export const secondaryColor = css`
    color: ${({ $isDark }) => ($isDark ? 'black' : '#FFFFFF')};
`
export const reverseSecondaryColor = css`
    color: ${({ $isDark }) => (!$isDark ? 'black' : '#FFFFFF')};
`

export const primaryBacground = css`
    background-color: ${({ $isDark }) => ($isDark ? '#20202C' : '#FFFFFF')};
`

export const mainBacground = css`
    background-color: ${({ $isDark }) => ($isDark ? '#151419' : '#EAEEF6')};
`

export const inputColor = css`
    background-color: ${({ $isDark }) => ($isDark ? '#20202C' : '#94a6be')};
`

export const setButtonsColor = css`
    color: ${({ $isDark }) => ($isDark ? '#FFFFFF' : '#565eef')};
`
export const setHoverButtonsColor = css`
    color: ${({ $isDark }) => (!$isDark ? '#FFFFFF' : '#565eef')};
`

// Цвета
export const accentColor = '#94A6BE'
export const accentButtonColor = '#565eef'
export const accentPrimaryColor = '#151419'

export const borderColor = ({ $isDark }) => ($isDark ? '#4e5566' : '#D4DBE5')

export const primaryHoverColor = '#33399b'

export const white = '#ffff'
export const linkColor = '#94A6BE66'

// Ховеры
export const hoverBackground = css`
    &:hover {
        background-color: ${primaryHoverColor};
    }
`

export const hoverColor = css`

&:hover {
        color: ${accentButtonColor};
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
