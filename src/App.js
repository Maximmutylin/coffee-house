import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Main } from './components/Main'
import { HeaderBurger } from './components/HeaderBurger'
import { useResizeWidth } from './hooks/use-resize-width'



const App = () => {


  const size = useResizeWidth()

  return (
    <>
      <BrowserRouter>
        {size <= 768 ? <HeaderBurger /> : <Header />}
        <Main />
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App