import './App.css'
import JoinGame from './pages/JoinGame'
import ChoosePlayer from './pages/ChoosePlayer'
import BoardPlayers from './pages/BoardPlayers/index'
import Menu from './pages/Menu'
import Waiting from './pages/Waiting'
import Welcome from './pages/Welcome'
import {Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div>
      {/* <JoinGame/> */}

      {/* <ChoosePlayer/> */}
      {/* <Menu/> */}
{/* <Waiting/> */}
{/* <ChoosePlayer/> */}

<Routes>
<Route path="/" element={<Welcome/>}/>
<Route path="/menu" element={<Menu/>}/>
<Route path="/joinGame" element={<JoinGame/>}/>
<Route path="/waiting" element={<Waiting/>}/>
<Route path="/choosePlayer" element={<ChoosePlayer/>}/>
<Route path="/boardPlayers" element={<BoardPlayers/>}/>
</Routes>
    </div>
  )

}