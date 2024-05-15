import React from 'react'
import Main from '../components/section/Main'

import { youtuberText } from '../data/youtuber'
import { Link } from 'react-router-dom'

const Youtuber = () => {
  return (
    <Main 
        title="ASMR 유튜버 추천" 
        description="ASMR 유튜버 추천 페이지입니다.">
        
        <section id='youtuberPage'>
            <h2>🫶 추천 ASMR 유튜버를 소개합니다.</h2>
            <div className='youtuber__inner'>
                {youtuberText.map((youtuber, key) => (
                    <div className='youtuber' key={key}>
                        <div className="youtuber__img play__icon">
                            <Link to={`/channel/${youtuber.channelId}`}>
                                <img src={youtuber.img} alt={youtuber.name} />
                            </Link>
                        </div>
                        <div className="youtuber__info">
                            <Link to={`/channel/${youtuber.channelId}`}>
                                {youtuber.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    </Main>
  )
}

export default Youtuber