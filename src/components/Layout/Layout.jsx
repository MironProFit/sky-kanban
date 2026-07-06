import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'
import Loading from '../../pages/Loading/LoadingModal'
import { GlobalStyle, Wrapper } from '../Styles/GlobalStyle'
import { useAuthContext } from '../../context/AuthContext'
import MainWithModal from './MainWithModal'
import AuthModal from '../../pages/Auth/AuthModal'
import ConfirmExit from '../../pages/Confirmation/ConfirmExit/ConfirmExit'
import CardCreate from '../../pages/Cards/CardCreate'
import CardViewEdit from '../../pages/Cards/CardViewEdit'
import ConfirmDelTask from '../../pages/Confirmation/ConfirmDelTask/ConfirmDelTask'
import PrivateRoute from '../../routes/PrivateRoute'
import NotFound from '../../pages/Main/NotFound'

function Layout() {
  const { isTheme, isUserMenuOpen, toggleUserMenu } = useAuthContext()

  return (
    <>
      <GlobalStyle $isDark={isTheme} />
      <Wrapper
        onClick={() => {
          isUserMenuOpen && toggleUserMenu()
        }}
        $isDark={isTheme}
      >
        <Header />
        <Loading />
        <Routes>
          <Route path="login" element={<AuthModal />} />
          <Route path="register" element={<AuthModal />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<MainWithModal />}>
              <Route index element={null} />
              <Route path="card">
                <Route path="create" element={<CardCreate />} />
                <Route path=":id" element={<CardViewEdit />} />
                <Route path=":id/edit" element={<CardViewEdit />} />
                <Route path=":id/delete" element={<ConfirmDelTask />} />
              </Route>
              <Route path="exit" element={<ConfirmExit />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </>
  )
}

export default Layout
