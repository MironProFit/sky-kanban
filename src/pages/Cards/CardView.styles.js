import styled, { css } from 'styled-components'

import {
    textColor,
    reverseTextColor,
    wrapperColor,
    primaryColor,
    reversePrimaryColor,
    secondaryColor,
    reverseSecondaryColor,
    primaryBacground,
    mainBacground,
    inputColor,
    setButtonsColor,
    setHoverButtonsColor,
    hoverBackground,
    hoverColor,
    hoverBorder,
    hoverCombination,
} from '../../components/Styles/Mexins.style'

export const PopBrowse = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`

export const PopBrowseContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
`

export const PopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #ffffff;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    position: relative;

    ${primaryBacground}
`

export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;

    .categories__theme {
        opacity: 1;
    }
    .theme-top {
        display: none;
    }
`

export const PopBrowseTitle = styled.h3`
    ${textColor}
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`

export const FormWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const Form = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`

export const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormArea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    ${inputColor}
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94a6be;
        letter-spacing: -0.14px;
    }
`

export const Status = styled.div`
    margin-bottom: 11px;

    .status__p {
        margin-bottom: 14px;
    }

    .status__themes {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .status__theme {
        border-radius: 24px;
        border: 0.7px solid rgba(148, 166, 190, 0.4);
        ${textColor}
        padding: 11px 14px 10px;
        margin-right: 7px;
        margin-bottom: 7px;
    }

    .status__theme p {
        font-size: 14px;
        line-height: 1;
        letter-spacing: -0.14px;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    /* button { */
    /* height: 30px;
        margin-bottom: 10px;
        padding: 0 14px;
        margin-right: 8px; */
    /* ${setButtonsColor} */
    /* ${hoverCombination} */
    /* } */
`

// export const CloseButton = styled.button`
//     ${hoverBackground}
//     background-color: #f44336;
// `
