import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   

    </>
  )
}

export default App