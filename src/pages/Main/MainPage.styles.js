import styled from 'styled-components'
import { mainBacground } from '../../components/Styles/Mexins.style'

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
`
