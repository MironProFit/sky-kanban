import { SpinnerWrap, SpinnerText, DotsSpinner, Overlay } from './LoadingModal.styles'

const Loading = ({ text = 'Загрузка данных...', $isDark }) => (
    <Overlay>
        <SpinnerWrap $isDark={$isDark}>
            <DotsSpinner $isDark={$isDark}>
                <div />
                <div />
                <div />
            </DotsSpinner>
            <SpinnerText $$isDark={$isDark}>{text}</SpinnerText>
        </SpinnerWrap>
    </Overlay>
)


export default Loading
