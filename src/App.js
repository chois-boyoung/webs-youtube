import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'
import Eating from './pages/Eating'
import Notalking from './pages/Notalking'
import Earcleaning from './pages/Earcleaning'
import Makeup from './pages/Makeup'
import Visualtrigger from './pages/Visualtrigger'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/today'  element={<Today/>} />
        <Route path='/youtuber'  element={<Youtuber/>} />
        <Route path='/eating'  element={<Eating/>} />
        <Route path='/notalking'  element={<Notalking/>} />
        <Route path='/earcleaning'  element={<Earcleaning/>} />
        <Route path='/makeup'  element={<Makeup/>} />
        <Route path='/visualtrigger'  element={<Visualtrigger/>} />
        <Route path='/channel/:channelID'  element={<Channel/>} />
        <Route path='/video/:videoID'  element={<Video/>} />
        <Route path='/search/:videoID'  element={<Search/>} />
        <Route path='/*'  element={<Not/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App