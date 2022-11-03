import './App.css'
import { useEffect } from 'react'
import Header from './components/Headers/Header'
import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import ProductsList from './components/Lists/ProductsList'
import Form from './components/Forms/Form'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App () {
  const { tg } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Header/>
      {tg?.colorScheme}
      <Routes>
        <Route index element={<ProductsList/>}/>
        <Route path={'/form'} element={<Form/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App
