import styled from 'styled-components'
import { textColor, wrapperColor, primaryColor, secondaryColor, hoverColor, hoverBackground, reverseTextColor, primaryBacground, reverseSecondaryColor } from '../../../components/Styles/Mexins.style'

import { PrimaryButton, SecondaryButton } from '../../../components/Styles/GlobalStyle'

export const PopExit = styled.div`
    display: none;
    width: 100%;
    height: 100%;
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
export const PopExitButtonYes = styled(PrimaryButton)`
    width: 153px;
    height: 30px;
    background-color: #565eef;
    margin-right: 10px;
    font-size: 14px;
    line-height: 21px;
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
`

export const PopExitButtonNoLink = styled(PopExitButtonYes)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PopExitFormGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
