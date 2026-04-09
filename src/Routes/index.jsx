
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { Route, Routes } from 'react-router'

const MyRouting = () => {
  return (
    
<div>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
</div>
    
  )
}

export default MyRouting