import {
  SkeletonCardWrapper,
  SkeletonCardGroup,
  SkeletonTheme,
  SkeletonContent,
  SkeletonTitle,
  SkeletonDate,
  SkeletonDotContainer,
  SkeletonDot,
} from './CardSkeleton.styles'

export default function CardSkeleton({ $isDark }) {
  return (
    <SkeletonCardWrapper $isDark={$isDark}>
      <SkeletonCardGroup>
        <SkeletonTheme $isDark={$isDark} />
        <SkeletonDotContainer>
          <SkeletonDot $isDark={$isDark} />
          <SkeletonDot $isDark={$isDark} />
          <SkeletonDot $isDark={$isDark} />
        </SkeletonDotContainer>
      </SkeletonCardGroup>
      <SkeletonContent>
        <SkeletonTitle $isDark={$isDark} />
        <SkeletonDate $isDark={$isDark} />
      </SkeletonContent>
    </SkeletonCardWrapper>
  )
}
