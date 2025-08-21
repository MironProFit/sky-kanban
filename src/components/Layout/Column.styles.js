// .main__column {
//     width: 20%;
//     margin: 0 auto;
//     display: block;
// }

import styled from 'styled-components'

// .column__title {
//     padding: 0 10px;
//     margin: 15px 0;
// }
// .column__title p {
//     color: #94a6be;
//     font-size: 14px;
//     font-weight: 600;
//     line-height: 1;
//     text-transform: uppercase;
// }

// .cards {
//     width: 100%;
//     display: block;
//     position: relative;
// }

export const MainColumn = styled.div`
    width: 20%;
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
    display: block;
    position: relative;
`

export const CardWrapper = styled.div`
    &.visible {
        transition: opacity 0.5s ease;
        opacity: 1;
    }
    opacity: 0;
`
