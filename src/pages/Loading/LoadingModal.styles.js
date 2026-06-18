import styled, { keyframes } from 'styled-components'
import { linkColor } from '../../components/Styles/Mexins.style'

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
  z-index: 9999;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`

const pulseAnimationDark = keyframes`
  0% {
    box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.5);
  }
  14% {
    box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.7);
  }
  28% {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  }
  42% {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.7);
  }
  57% {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.5);
  }
  71% {
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.7);
  }
  85% {
    box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.7);
  }
  100% {
    box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.5);
  }
`
const pulseAnimationWhite = keyframes`
  0% {
    box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.5);
  }
  14% {
    box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.7);
  }
  28% {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5); 
  }
  42% {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.7); 
  }
  57% {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5); 
  }
  71% {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.7); 
  }
  85% {
    box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.7);
  }
  100% {
    box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.5);
  }
`

export const SpinnerWrap = styled.div`
  width: 300px;
  padding: 20px;
  background-color: ${({ $isDark }) => (!$isDark ? 'whitesmoke' : 'black')};
  opacity: 0.6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-shadow: 0 0 20px 0 rgba(86, 94, 239, 0.2); */
  animation: ${({ $isDark }) =>
      $isDark ? pulseAnimationDark : pulseAnimationWhite}
    5s infinite ease-in-out;
`

export const DotsSpinner = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 14px;

  div {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ $isDark }) => ($isDark ? 'whitesmoke' : 'black')};
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
  color: ${({ $isDark }) => ($isDark ? 'whitesmoke' : 'black')};
  opacity: 0.8;
  font-family: inherit;
  font-weight: 500;
  letter-spacing: 0.04em;
  user-select: none;
`
