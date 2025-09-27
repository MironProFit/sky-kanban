import styled, { css, keyframes } from 'styled-components'
import { accentPrimaryBackg, gradientFrom, gradientTo, linkColor, primaryBacground, reversePrimaryColor } from '../Styles/Mexins.style'
import { Link } from 'react-router-dom'

export const CardsContainer = styled.div`
    width: 100%;
    display: block;
    position: relative;
`

export const CardItem = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
    @media (max-width: 600px) {
        padding-bottom: 15px;
    }
`
export const CardWrapper = styled.div`
    width: 220px;
    height: 130px;

    background: ${({ $loadingStyles, $isDark }) => ($loadingStyles ? `linear-gradient(180deg, ${$isDark ? accentPrimaryBackg : '#FFFFFF'}, transparent 50%)` : $isDark ? '#20202C' : '#FFFFFF')};
    /* ${({ $loadingStyles }) => !$loadingStyles && { primaryBacground }} */

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
`

export const CardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Theme = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: ${({ $loadingCard }) => (!$loadingCard ? 'auto' : '100px')};

    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    transition: width 0.3s ease, background-color 0.3s ease, color 0.3s ease; /* Добавили плавный переход */

    ${({ $loadingCard }) =>
        !$loadingCard
            ? css`
                  &.dark {
                      &._orange {
                          background-color: #ff6d00;
                          color: #ffe4c2;
                      }
                      &._green {
                          background-color: #06b16e;
                          color: #b4fdd1;
                      }
                      &._purple {
                          background-color: #9a48f1;
                          color: #e9d4ff;
                      }
                      &._gray {
                          background: #94a6be;
                          color: #ffffff;
                      }
                  }

                  &.light {
                      &._orange {
                          background-color: #ffe4c2;
                          color: #ff6d00;
                      }
                      &._green {
                          background-color: #b4fdd1;
                          color: #06b16e;
                      }
                      &._purple {
                          background-color: #e9d4ff;
                          color: #9a48f1;
                      }
                      &._gray {
                          background: #94a6be;
                          color: #ffffff;
                      }
                  }
              `
            : css`
                  animation: ${gradientMove} 20s linear infinite;
                  background: linear-gradient(to right, ${gradientFrom}, ${gradientTo}, ${gradientFrom});
                  background-size: 2000% 400%;
                  background-position: 200% 0%, 0% 0%;
              `}
`

const gradientMove = keyframes`

  0% {
    background-position: 100% 100%;
  }
  25% {
    background-position: 200% 100%;

  }
  50% {
    background-position: 300% 100%;
  }
  75% {
    background-position: 400% 100%;
  }
  100% {
    background-position: 500% 100%;
  }
`

export const ThemeText = styled.p`
    color: ${({ $loadingCard }) => $loadingCard && 'transparent'};

    /* padding: 5px 10px 5px 10px; */
    border-radius: 18px;
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`

export const CardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    ${reversePrimaryColor}
    margin-bottom: 10px;
    white-space: break-spaces;
    color: ${({ $loadingCard }) => $loadingCard && 'transparent'};
    border-radius: 15px;

    ${({ $loadingCard }) =>
        $loadingCard &&
        css`
            animation: ${gradientMove} 20s linear infinite;
            background: linear-gradient(to right, ${gradientFrom}, ${gradientTo}, ${gradientFrom});
            background-size: 2000% 400%;
            background-position: 200% 0%, 0% 0%;
        `}
`

export const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

export const CardDate = styled.div`
    width: ${({ $loadingCard }) => ($loadingCard ? '50px' : 'auto')};

    display: ${({ $loadingStyles }) => ($loadingStyles ? 'none' : 'flex')};
    align-items: center;
    justify-content: flex-start;
    color: ${({ $loadingCard }) => $loadingCard && 'transparent'};
    border-radius: 15px;
    & svg {
        fill: transparent;
    }
    &:svg {
        display: none;
    }

    ${({ $loadingCard }) =>
        $loadingCard &&
        css`
            animation: ${gradientMove} 20s linear infinite;
            background: linear-gradient(to right, ${gradientFrom}, ${gradientTo}, ${gradientFrom});
            background-size: 2000% 400%;
            background-position: 200% 0%, 0% 0%;
        `}
`

export const CardDateText = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${({ $loadingCard }) => ($loadingCard ? 'transparent' : ' #94a6be')};

    letter-spacing: 0.2px;
`

export const CardLink = styled(Link)`
    display: flex;
    position: relative;
    &:hover > div {
        opacity: 1;
    }
`

export const DotContainer = styled.div`
    border-radius: 15px;
    display: flex;
    ${({ $loadingCard }) =>
        $loadingCard &&
        css`
            animation: ${gradientMove} 20s linear infinite;
            background: linear-gradient(to right, ${gradientFrom}, ${gradientTo}, ${gradientFrom});
            background-size: 2000% 400%;
            background-position: 200% 0%, 0% 0%;
        `}
`
export const Dot = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${linkColor};
    opacity: 0.5;
    transition: opacity 0.3s;
    margin-left: 2px;

    ${CardLink}:hover & {
        opacity: 1;
    }
`
