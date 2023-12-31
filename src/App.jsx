import { Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import Aboutus from './pages/AboutUs'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Signup from './pages/Signup'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Aboutus />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  )
}
export default App