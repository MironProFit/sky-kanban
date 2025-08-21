import styled from 'styled-components'
import { mainBacground } from '../../components/Styles/Mexins.style'
import Column from '../../components/Layout/Column'
mainBacground

export const MainContainer = styled.main`
    width: 100%;
    ${mainBacground}
`

export const MainBlock = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 25px 0 49px;
    @media screen and (max-width: 1200px) {
        width: 100%;
        margin: 0 auto;
        padding: 40px 0 64px;
    }
`

export const MainContent = styled.div`
    width: 100%;
    display: flex;
    @media screen and (max-width: 1200px) {
        display: block;
    }
`

// .main {
//     width: 100%;
//     background-color: #eaeef6;
// }
// .main__loading {
//     display: flex;
//        justify-content: center;
// }
// .main__block {
//     width: 100%;
//     margin: 0 auto;
//     padding: 25px 0 49px;
// }
// .main__content {
//     width: 100%;
//     display: flex;
// }
// .main__column {
//     width: 20%;
//     margin: 0 auto;
//     display: block;
// }

// @media screen and (max-width: 1200px) {
//     .main__block {
//         width: 100%;
//         margin: 0 auto;
//         padding: 40px 0 64px;
//     }
//     .main__content {
//         display: block;
//     }
//     .main__column {
//         width: 100%;
//         margin: 0 auto;
//         display: block;
//     }
//     .cards {
//         width: 100%;
//         display: flex;
//         overflow-y: auto;
//     }
//     .cards__card {
//         width: 220px;
//         height: 130px;
//         background-color: #ffffff;
//         border-radius: 10px;
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         justify-content: stretch;
//         padding: 15px 13px 19px;
//     }
// }
