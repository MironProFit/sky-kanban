import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -600px 0;
  }
  100% {
    background-position: 600px 0;
  }
`

export const SkeletonCardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background: ${({ $isDark }) => ($isDark ? '#20202C' : '#FFFFFF')};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ $isDark }) =>
        $isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.4)'},
      transparent
    );
    animation: ${shimmer} 2s infinite linear;
  }
`

export const SkeletonCardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SkeletonTheme = styled.div`
  width: 100px;
  height: 20px;
  background: ${({ $isDark }) => ($isDark ? '#2D2D3A' : '#E0E0E0')};
  border-radius: 18px;
`

export const SkeletonTitle = styled.div`
  width: 100%;
  height: 18px;
  background: ${({ $isDark }) => ($isDark ? '#2D2D3A' : '#E0E0E0')};
  border-radius: 4px;
  margin-bottom: 10px;
`

export const SkeletonContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const SkeletonDate = styled.div`
  width: 80px;
  height: 13px;
  background: ${({ $isDark }) => ($isDark ? '#2D2D3A' : '#E0E0E0')};
  border-radius: 4px;
`

export const SkeletonDotContainer = styled.div`
  display: flex;
  gap: 2px;
`

export const SkeletonDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ $isDark }) => ($isDark ? '#2D2D3A' : '#E0E0E0')};
`
