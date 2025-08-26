import styled from 'styled-components'
import { textColor, primaryBacground, primaryColor, accentColor, mainBacground, reversePrimaryColor, white } from '../../components/Styles/Mexins.style'

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
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    position: relative;
    ${primaryBacground};
    ${primaryColor}
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

export const TopicContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const PopBrowseTitle = styled.h3`
    ${textColor}
    margin-bottom: 21px;
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
    color: ${white};
    font-weight: 400;
    font-size: 14px;
    display: flex;
    flex-direction: column;

    .subttl {
        font-weight: 400;
        font-size: 14px;
        ${reversePrimaryColor};
    }
`
export const FormArea = styled.textarea`
    color: ${({ $isDark }) => ($isDark ? accentColor : 'black')};

    cursor: ${({ $isEditMode }) => ($isEditMode ? 'text' : 'not-allowed')};
    resize: none;
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    ${mainBacground}
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 236px;

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: ${accentColor};
        letter-spacing: -0.14px;
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: ${accentColor};
        letter-spacing: -0.14px;
    }
`

export const FormDateControl = styled.p`
    color: ${accentColor};
    font-size: 12px;
    & span {
        color: ${white};
        font-size: 12px;
    }
`

export const FormDateTitle = styled.p`
    color: ${white};
    font-weight: 400;
    font-size: 14px;
`
export const Status = styled.div`
    margin-bottom: 11px;
`

export const StatusTitle = styled.p`
    ${reversePrimaryColor};

    margin-bottom: 14px;
`
export const StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`
export const StatusTheme = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    background-color: ${accentColor};
`

export const StatusButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    color: ${accentColor};

    ${({ $active }) => $active && ` background-color: ${accentColor};  ${reversePrimaryColor};`}
`

export const StatusText = styled.p`
    ${({ $active }) => $active && primaryColor}
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
`
export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
