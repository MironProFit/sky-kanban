import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0%, 80%, 100% {
    opacity: 0.25;
    transform: scale(0.87);
  }
  40% {
    opacity: 1;
    transform: scale(1.18);
  }
`

export const Overlay = styled.div`
    position: fixed;
    z-index: 1400;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
`

export const SpinnerWrap = styled.div`
    padding: 20px;
    background-color: ${({ $isDark }) => ($isDark ? 'whitesmoke' : 'black')};
    opacity: 0.6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DotsSpinner = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 14px;

    div {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: ${({ $isDark }) => (!$isDark ? 'whitesmoke' : 'black')};
        opacity: 0.25;
        animation: ${bounce} 1.15s infinite;
    }
    div:nth-child(2) {
        animation-delay: 0.19s;
    }
    div:nth-child(3) {
        animation-delay: 0.38s;
    }
`

export const SpinnerText = styled.div`
    font-size: 1.03rem;
    color: ${({ $isDark }) => (!$isDark ? 'whitesmoke' : 'black')};
    opacity: 0.8;
    font-family: inherit;
    font-weight: 500;
    letter-spacing: 0.04em;
    user-select: none;
`
