import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container, LinkButton, PrimaryButton } from '../Styles/GlobalStyle'
import {
  HeaderStyled,
  HeaderLogo,
  HeaderBlock,
  HeaderNav,
} from './Header.styles'
import UserMenuModal from './UserMenuModal'
import { useAuthContext } from '../../context/AuthContext'
import { useTasksContext } from '../../context/TasksContext'

export default function Header() {
  const {
    isAuth,
    setIsAuth,
    isTheme,
    $isDark,
    isMobile,
    isUserMenuOpen,
    toggleUserMenu,
    userName,
    errorMessage,
  } = useAuthContext()
  const { handleModalOpen } = useTasksContext()

  const [isAuthPage, setIsAuthPage] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setIsAuthPage(true)
    } else {
      setIsAuthPage(false)
    }
  }, [location.pathname])

  const handleAuth = () => {
    navigate('/exit')
    setIsAuth(true)
  }

  return (
    <HeaderStyled $isDark={$isDark}>
      <Container>
        {!isAuthPage && isAuth && (
          <>
            <HeaderBlock>
              <HeaderLogo>
                <Link to="/" target="_self">
                  <img
                    src={`/${isTheme ? 'logo_dark.png' : 'logo.png'}`}
                    alt="logo"
                  ></img>
                </Link>
              </HeaderLogo>
              <div>
                <p>{errorMessage}</p>
              </div>

              {!isAuthPage && isAuth && (
                <>
                  <HeaderNav>
                    {(!isMobile || (isMobile && location.pathname === '/')) && (
                      <Link
                        style={{ marginRight: '20px' }}
                        to="card/create"
                        state={{ createMode: true }}
                      >
                        <PrimaryButton
                          style={{ whiteSpace: 'nowrap' }}
                          $mobileFixed={isMobile && location.pathname === '/'}
                          onClick={handleModalOpen}
                          $isDark={$isDark}
                          id="btnMainNew"
                          type="button"
                        >
                          Создать новую задачу
                        </PrimaryButton>
                      </Link>
                    )}
                    <LinkButton
                      style={{ whiteSpace: 'nowrap' }}
                      $isDark={$isDark}
                      $isOpen={isUserMenuOpen}
                      onClick={toggleUserMenu}
                    >
                      {userName || 'Личный кабинет'}
                    </LinkButton>
                    {isUserMenuOpen && (
                      <UserMenuModal
                        toggleUserMenu={toggleUserMenu}
                        isAuth={isAuth}
                        handleAuth={handleAuth}
                        isTheme={isTheme}
                        $isDark={$isDark}
                      />
                    )}
                  </HeaderNav>
                </>
              )}
            </HeaderBlock>
          </>
        )}
      </Container>
    </HeaderStyled>
  )
}
