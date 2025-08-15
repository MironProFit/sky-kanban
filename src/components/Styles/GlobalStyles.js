import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${({ $darkcolor, $lightcolor, isTheme }) => (isTheme ? $darkcolor : $lightcolor)};
    position: relative;
    top: 0;
    left: 0;
`
export const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media screen and (max-width: 495px) {
        width: 100%;
        padding: 0 16px;
    }
`
// Button
export const PrimaryButton = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565eef;
    color: #ffffff;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
    &:hover {
        background-color: #33399b;
    }
    a {
        color: #ffffff;
    }
`
//Button hover

// ._hover01:hover {
//   background-color: #33399b;
// }

// ._hover02:hover, .header__user:hover {
//   color: #33399b;
// }
// ._hover02:hover::after, .header__user:hover::after {
//   border-left-color: #33399b;
//   border-bottom-color: #33399b;
// }

// ._hover03:hover {
//   background-color: #33399b;
//   color: #FFFFFF;
// }
// ._hover03:hover a {
//   color: #FFFFFF;
// }
