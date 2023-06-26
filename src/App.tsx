import { ThemeProvider } from 'styled-components'
// import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CycleContextProvider } from './contexts/CyclesContext'
import { createContext, useState } from 'react'
import { darkTheme, ligthTheme } from './styles/themes'

interface ThemeContextType {
  statusTheme: string
  editTheme: () => void
}

export const AppThemeContext = createContext({} as ThemeContextType)

export const App = () => {
  const [theme, setTheme] = useState(ligthTheme)
  const [statusTheme, setStatusTheme] = useState('ligthTheme')

  const editTheme = () => {
    setTheme(theme === darkTheme ? ligthTheme : darkTheme)
    setStatusTheme(statusTheme === 'darkTheme' ? 'ligthTheme' : 'darkTheme')
  }

  return (
    <AppThemeContext.Provider value={{ editTheme, statusTheme }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CycleContextProvider>
            <Router />
          </CycleContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}
