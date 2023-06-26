import { HeaderContainer } from './styles'
import logoIgnite from '../../assents/logo-ignite.svg'
import { Timer, Scroll, Sun, Moon } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { AppThemeContext } from '../../App'
import { useContext } from 'react'

export const Header = () => {
  const { editTheme, statusTheme } = useContext(AppThemeContext)

  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt=""></img>
        {statusTheme === 'darkTheme' ? (
          <Sun size={24} onClick={editTheme} />
        ) : (
          <Moon size={24} onClick={editTheme} />
        )}
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
