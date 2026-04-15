import CreateBlock from './components/CreateBlock.jsx'
import TimerBlock from './components/TimerBlock.jsx'
import Home from './components/Home.jsx'
import {Route,Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<CreateBlock />}></Route>
        <Route path='/timerblock' element={<TimerBlock />}></Route>
      </Routes>
    </>
  )
}

export default App
