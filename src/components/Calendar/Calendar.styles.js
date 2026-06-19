import styled, { css } from 'styled-components'
import {
  accentColor,
  hoverBackground,
  hoverColor,
  selectedDate,
} from '../Styles/Mexins.style'

export const Calendar = styled.div`
  width: 182px;
  margin-top: 14px;

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`

export const CalendarTitle = styled.div`
  margin-bottom: 7px;
  display: flex;
  justify-content: space-between;
`

export const CalendarBlock = styled.div`
  display: block;
`

export const CalendarMonth = styled.div`
  color: ${accentColor};
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`

export const CalendarBtnGroup = styled.div`
  display: flex;
  align-items: center;
`

export const CalendarAndDateContainer = styled.div`
  display: block;
  margin-left: 20px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`

export const CalendarBtn = styled.button`
  background-color: transparent;
  display: inline-block;
  width: 10px;
  height: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
  background-image: ${({ $isLeft }) =>
    $isLeft ? "url('/prev.svg')" : "url('/next.svg')"};

  margin-right: ${({ $isLeft }) => ($isLeft ? '10px' : '0')};
  margin-left: ${({ $isLeft }) => ($isLeft ? '0' : '10px')};
`

export const CalendarContent = styled.div`
  margin-bottom: 12px;
  margin-left: -7px;
`

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 35px;
  }
`

export const CalendarDayName = styled.div`
  color: ${accentColor};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`

export const CalendarCells = styled.div`
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 20px;
  }
  width: 182px;
  display: flex;
  flex-wrap: wrap;
`

export const CalendarCell = styled.div`
  @media (max-width: 600px) {
    width: 22px;
    height: 22px;
  }
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${accentColor};
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;

  transition: background 0.2s;
  cursor: pointer;

  ${({ $past }) =>
    $past &&
    css`
      cursor: default;
      color: #47464c;
    `}

  ${({ $isEditMode }) =>
    !$isEditMode &&
    css`
      cursor: default;
    `}

    ${({ $otherMonth }) =>
    $otherMonth &&
    css`
      opacity: 0;
      pointer-events: none;
    `};
  ${({ $isToday }) =>
    $isToday &&
    css`
      background-color: ${accentColor};
      color: black;
    `};
  ${({ $cellDay, $isEditMode, $past }) =>
    $cellDay &&
    $isEditMode &&
    !$past &&
    css`
      ${hoverBackground} : none;
      ${hoverColor};
    `};
  ${({ $selected }) =>
    $selected &&
    css`
      ${selectedDate}
    `}
`
