import styled, { css } from 'styled-components'
import { primaryBacground, reverseSecondaryColor } from '../../../components/Styles/Mexins.style'

import { PrimaryButton, SecondaryButton } from '../../../components/Styles/GlobalStyle'

export const PopExit = styled.div`
    display: none;
    width: 100%;
    /* height: 100%; */
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
`

export const PopExitContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
`
export const PopExitBlock = styled.div`
    display: block;
    margin: 0 auto;
    ${primaryBacground}
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    ${({ $isMobile }) =>
        $isMobile &&
        css`
            max-width: 100%;
            padding: 50px 20px;
        `}
`
export const PopExitTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    ${reverseSecondaryColor}
`

export const PopExitFormGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    ${({ $isMobile }) =>
        $isMobile &&
        css`
            flex-direction: column;
            gap: 10px;
        `}
`

export const PopExitButtonYes = styled(PrimaryButton)`
    width: 153px;
    height: 30px;
    background-color: #565eef;
    margin-right: 10px;
    font-size: 14px;
    line-height: 21px;

    ${({ $isMobile }) =>
        $isMobile &&
        css`
            width: 100%;
            height: 41px;
        `}
`

export const PopExitButtonYesLink = styled(PopExitButtonYes)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const PopExitButtonNo = styled(SecondaryButton)`
    width: 153px;
    height: 30px;
    border-radius: 4px;
    outline: none;
    ${({ $isMobile }) =>
        $isMobile &&
        css`
            width: 100%;
            height: 41px;
        `}
`

export const PopExitButtonNoLink = styled(PopExitButtonYes)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
