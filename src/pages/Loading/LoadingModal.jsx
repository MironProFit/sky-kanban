import { useAuthContext } from '../../context/AuthContext'
import {
  SpinnerWrap,
  SpinnerText,
  DotsSpinner,
  Overlay,
} from './LoadingModal.styles'

const Loading = () => {
  const { $isDark, isLoading, loadingMessage } = useAuthContext()

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
