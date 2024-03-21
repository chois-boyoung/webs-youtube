import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Youtuber = lazy(() => import('./pages/Youtuber'));
const Eating = lazy(() => import('./pages/Eating'));
const Notalking = lazy(() => import('./pages/Notalking'));
const Earcleaning = lazy(() => import('./pages/Earcleaning'));
const Makeup = lazy(() => import('./pages/Makeup'));
const Visualtrigger = lazy(() => import('./pages/Visualtrigger'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>

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
      </Suspense>

    </BrowserRouter>
  )
}

export default App