import styled from 'styled-components'

export const MainColumn = styled.div`
    margin: 0 auto;
    display: block;
`
export const MainLoading = styled.div`
    display: flex;
    justify-content: center;
`

export const ColumnTitle = styled.div`
    padding: 0 10px;
    margin: 15px 0;
`

export const TitleText = styled.p`
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
`

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    overflow-x: hidden;
    white-space: nowrap;
`

export const CardWrapper = styled.div`
    &.visible {
        transition: opacity 0.5s ease;
        opacity: 1;
    }
    opacity: 0;
`
