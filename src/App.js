import './App.css'
import { useEffect } from 'react'
import Header from './components/Headers/Header'
import { useTelegram } from './hooks/useTelegram'
import { Route, Routes } from 'react-router-dom'
import ProductsList from './components/Lists/ProductsList'
import Form from './components/Forms/Form'

function App () {
  const { tg, onToggleButton } = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<ProductsList/>}/>
        <Route path={'/form'} element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
