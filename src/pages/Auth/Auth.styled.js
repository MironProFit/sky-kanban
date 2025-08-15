import styled from 'styled-components'

export const ContainerSignin = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`
export const ModalSignin = styled.div`
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const ModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${({ isTheme }) => (isTheme ? '#20202C' : ' #ffffff')};
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #d4dbe5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`
