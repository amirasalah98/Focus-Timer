import Home from './components/Home.jsx'
import CreateBlock from './components/createBlock.jsx'
import TimerBlock from './components/timerBlock.jsx'
import TimerDown from './components/TimerDown.jsx'
import {Route,Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<CreateBlock />}></Route>
        <Route path='/timerblock' element={<TimerBlock />}></Route>
        <Route path='/timerdown' element={<TimerDown />}></Route>
      </Routes>
    </>
  )
}

export default App
