import { useAppContext } from '../../routes/AppContext'
import { SpinnerWrap, SpinnerText, DotsSpinner, Overlay } from './LoadingModal.styles'

const Loading = () => {
    const { $isDark, isLoading, loadingMessage = DEFAULT_MESSAGE_LOADING, DEFAULT_MESSAGE_LOADING } = useAppContext()

    return (
        <>
            {isLoading && (
                <Overlay>
                    <SpinnerWrap $isDark={$isDark}>
                        <DotsSpinner $isDark={$isDark}>
                            <div />
                            <div />
                            <div />
                        </DotsSpinner>
                        <SpinnerText $isDark={$isDark}>{loadingMessage}</SpinnerText>
                    </SpinnerWrap>
                </Overlay>
            )}
        </>
    )
}

export default Loading
