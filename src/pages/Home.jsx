import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Youtuber from '../components/contents/Youtuber'
import Eating from '../components/contents/Eating'
import Makeup from '../components/contents/Makeup'
import Notalking from '../components/contents/Notalking'
import Earcleaning from '../components/contents/Earcleaning'
import Visualtrigger from '../components/contents/Visualtrigger'

const Home = () => {
  return (
    <Main title="CHOIS 유튜브" description="CHOIS의 ASMR 유튜브 추천!">
        
        <Today />
        <Youtuber />
        <Eating />
        <Notalking />
        <Earcleaning />
        <Makeup />
        <Visualtrigger />
        
    </Main>
  )
}

export default Home