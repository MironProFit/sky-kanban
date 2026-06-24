import Card from '../Card/Card'
import CardSkeleton from '../Card/CardSkeleton'
import {
  CardsContainer,
  ColumnTitle,
  MainColumn,
  TitleText,
} from './Column.styles'
import { useDrop } from 'react-dnd'

export default function Column({
  title,
  $isDark,
  cardsData,
  onCardDrop,
  isLoading,
}) {
  const [, drop] = useDrop(
    () => ({
      accept: 'CARD',
      drop(item, monitor) {
        if (!monitor.didDrop()) {
          onCardDrop(item.id, title)
        }
      },
    }),
    [cardsData, onCardDrop, title],
  )

  // Показываем скелетон во время загрузки
  if (isLoading) {
    return (
      <MainColumn ref={drop}>
        <ColumnTitle>
          <TitleText>{title}</TitleText>
        </ColumnTitle>
        <CardsContainer $isDark={$isDark}>
          <CardSkeleton $isDark={$isDark} />
        </CardsContainer>
      </MainColumn>
    )
  }

  return (
    <MainColumn ref={drop}>
      <ColumnTitle>
        <TitleText>{title}</TitleText>
      </ColumnTitle>
      <CardsContainer $isDark={$isDark}>
        {cardsData && cardsData.length > 0
          ? cardsData.map((card) => (
              <Card key={card._id} $isDark={$isDark} {...card} id={card._id} />
            ))
          : null}
      </CardsContainer>
    </MainColumn>
  )
}
