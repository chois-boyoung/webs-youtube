import React from 'react'

import { youtuberText } from '../../data/youtuber'
import { Link } from 'react-router-dom'

const Youtuber = () => {
  return (
    <section id='youtuber'>
        <h2>🫶 추천 ASMR 유튜버를 소개합니다.</h2>
        <div className='youtuber__inner overflow'>
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
  )
}

export default Youtuber