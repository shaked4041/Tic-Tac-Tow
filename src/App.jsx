import './App.css'
import BoardPlayers from './pages/BoardPlayers'
import ChoosePlayer from './pages/ChoosePlayer'
import JoinGame from './pages/JoinGame'
import Menu from './pages/Menu'
import Setting from './pages/Setting'
import Waiting from './pages/Waiting'
import Welcome from './pages/Welcome'
import WaitingJoin from './pages/WaitingJoin'
import {Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <div>
<Routes>
<Route path="/" element={<Welcome/>}/>
<Route path="/menu" element={<Menu/>}/>
<Route path="/setting" element={<Setting/>}/>
<Route path="/joinGame" element={<JoinGame/>}/>
<Route path="/waiting" element={<Waiting/>}/>
<Route path="/choosePlayer" element={<ChoosePlayer/>}/>
<Route path="/boardPlayers" element={<BoardPlayers/>}/>
<Route path="/waitingJoin" element={<WaitingJoin/>}/>
</Routes>
    </div>
  )

}