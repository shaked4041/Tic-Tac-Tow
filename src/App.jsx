import './App.css'
import BoardPlayers from './pages/BoardPlayers'
import ChoosePlayer from './pages/ChoosePlayer'
import JoinGame from './pages/JoinGame'
import Menu from './pages/Menu'
import Setting from './pages/Setting'
import Waiting from './pages/Waiting'
import Welcome from './pages/Welcome'
import WaitingJoin from './pages/WaitingJoin'
import { Route, Routes } from 'react-router-dom'
import { SocketProvider } from "./socket"
import { useState } from 'react'




export default function App() {
  const [roomId, setRoomId] = useState(null)
  // const [isXNext, setIsXNext] = useState(true);

    return (
              <SocketProvider>
        <div>
    <Routes>
    <Route path="/" element={<Welcome/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/setting" element={<Setting/>}/>
    <Route path="/joinGame" element={<JoinGame/>}/>
    <Route path="/waiting/:roomNumber" element={<Waiting/>}/>
    <Route path="/choosePlayer" element={<ChoosePlayer />}/>
    <Route path="/boardPlayers" element={<BoardPlayers/>}/>
    <Route path="/waitingJoin" element={<WaitingJoin/>}/>
    </Routes>
        </div>
             </SocketProvider>
      )
    }
    
    
    
    // export default function App() {
    
    //   const router = createBrowserRouter([
    //     { path: '/', action: () => <Welcome /> },
    //     { path: '/menu', action: () => <Menu /> },
    //     { path: '/joinGame', action: () => <JoinGame /> },
    //     { path: '/waiting', action: () => <Waiting /> },
    //     { path: '/choosePlayer', action: () => <ChoosePlayer /> },
    //     { path: '/boardPlayers', action: () => <BoardPlayers /> },
    //     { path: '/waitingJoin', action: () => <WaitingJoin /> }
    //   ]);
    
    //   // Assuming SocketProvider requires some props, modify as necessary
    //   return (
    //     <SocketProvider>
    //       <RouterProvider router={router} />
    //     </SocketProvider>
    //   );
    // }
