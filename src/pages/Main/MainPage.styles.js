import styled from 'styled-components'
import {
  mainBacground,
  scrollbarThumbColor,
  scrollbarTrackColor,
} from '../../components/Styles/Mexins.style'

export const MainContainer = styled.main`
  /* flex: 1 1 0; */
  display: flex;
  flex-direction: column;
  width: 100%;

  ${mainBacground}
  @media (max-width: 600px) {
    display: ${({ $isModal }) => ($isModal ? 'none' : 'flex')};
  }
`
export const MainBlock = styled.div`
  @media (min-width: 601px) {
    overflow-y: auto;
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
    /* flex: 1 1 auto; */

    &::-webkit-scrollbar-track {
      border-radius: 10px;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
    padding: 30px 0 64px;
    display: flex;
    flex-direction: row;
  }
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${scrollbarTrackColor};
    border-radius: 10px;
    &:hover {
      background: ${scrollbarTrackColor};
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${scrollbarThumbColor};
    border-radius: 10px;
    transition: 1s ease; /* Плавный переход для цвета */
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    &:last-child {
      margin-bottom: 30px;
    }
  }
`
export const NoTasksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width: 100%;
`

export const NoTasksText = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${({ $isDark }) => ($isDark ? '#94A6BE' : '#6B7280')};
  text-align: center;
  padding: 40px;
`
