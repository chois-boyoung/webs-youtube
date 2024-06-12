import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Youtuber from '../components/contents/Youtuber'
import VideoSlider from '../components/video/VideoSlider'

import { eatingText } from '../data/eating'
import { notalkingText } from '../data/notalking'
import { earcleaningText } from '../data/earcleaning'
import { makeupText } from '../data/makeup'
import { visualtriggerText } from '../data/visualtrigger'
import { youtuberText } from '../data/youtuber'
import { todayText } from '../data/today'


const Home = () => {
  return (
    <Main title="CHOIS 유튜브" description="CHOIS의 ASMR 유튜브 추천!">
        
        <Today videos={todayText} id='today' />
        <Youtuber videos={youtuberText} title='👏추천 ASMR 유튜버를 소개합니다'/> 
        <VideoSlider videos={eatingText} title='🍭귀로 느끼는 달콤한 Eating Asmr' />
        <VideoSlider videos={notalkingText} title='🔇쉿! 오로지 팅글에만 집중하게 되는 No Talking Asmr' />
        <VideoSlider videos={earcleaningText} title='👂귓속이 시원해지는 Ear Cleaning Asmr' />
        <VideoSlider videos={makeupText} title='💄팅글과 함께 재미까지 즐기는 Make Up Asmr' />
        <VideoSlider videos={visualtriggerText} title='👀눈으로도 팅글을 즐기는 Visual Trigger Asmr' />
        
    </Main>
  )
}

export default Home