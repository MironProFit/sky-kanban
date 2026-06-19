import styled, { css } from 'styled-components'
import {
  textColor,
  primaryBacground,
  primaryColor,
  accentColor,
  mainBacground,
  reversePrimaryColor,
  white,
  gradientTo,
} from '../../components/Styles/Mexins.style'

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  @media (max-width: 600px) {
    position: relative;
    background-color: inherit;
    min-width: auto;
    min-height: auto;
  }
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

  @media (max-width: 600px) {
    padding: 0;
    background-color: inherit;
    min-height: 0;
  }
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
  @media (max-width: 600px) {
    display: flex;
    border: none;
    align-items: center;
    border-radius: 0;
    border: none;
    padding: 0;
    height: ${({ $isEditMode }) => ($isEditMode ? '135vh' : '130vh')};
    flex-direction: column;
  }
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
  @media (max-width: 600px) {
    width: 300px;
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  @media (max-width: 600px) {
  }
`

export const FormWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Form = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-bottom: 40px;
  }
`
export const FormBlock = styled.div`
  margin-bottom: ${({ $marginBotton }) =>
    $marginBotton ? $marginBotton : 'none'};
  color: ${white};
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    height: 30px;
  }

  .subttl {
    font-weight: 400;
    font-size: 14px;
    ${reversePrimaryColor};
  }
`
export const FormArea = styled.textarea`
  color: ${({ $isDark }) => ($isDark ? accentColor : 'black')};

  cursor: ${({ $isEditMode, $isCreateMode }) =>
    $isEditMode || $isCreateMode ? 'text' : 'not-allowed'};
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
  height: ${({ $maxHeight }) => $maxHeight || '236px'};
  transition: 0.3s;
  @media (max-width: 600px) {
    overflow: hidden;
    background-color: transparent;
  }

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
  ${({ $isEditMode }) =>
    $isEditMode &&
    css`
      &:focus {
        border: 1px solid ${gradientTo};
      }
    `}
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
  @media (max-width: 600px) {
    margin-bottom: 13px;
    margin-top: 20px;
  }
`
export const Status = styled.div`
  margin-bottom: 11px;
`

export const StatusTitle = styled.p`
  ${reversePrimaryColor};
  margin-bottom: 14px;
  display: flex;
`
export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 600px) {
    width: 300px;
    flex-wrap: wrap;
    flex-direction: row;
  }
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

  ${({ $active }) =>
    $active && ` background-color: ${accentColor};  ${reversePrimaryColor};`}
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
  @media (max-width: 600px) {
  }
`
export const ButtonControlsWrap = styled.div`
  display: flex;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
  }

  ${({ $fixed }) =>
    $fixed &&
    css`
      bottom: 130px;
      @media (max-width: 600px) {
        width: unset;
        height: 40px;
        margin: 0 30px;
        padding: 0;
        position: fixed;
        /* bottom: 30px; */
        left: 0;
        right: 0;
        z-index: 9999;
      }

      @media screen and (max-width: 495px) {
        width: unset;
        height: 40px;
        margin: 0 16px;
        padding: 0;
        position: fixed;
        /* bottom: 30px; */
        left: 0;
        right: 0;
        z-index: 9999;
      }
    `}
`
