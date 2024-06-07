import React from 'react'
import { eatingText } from '../../data/eating'
import { Link } from 'react-router-dom'

const Eating = () => {
	return (
    	<section id='eating'>
			<h2>🍭귀로 느끼는 달콤한 Eating Asmr</h2>
			<div className="video__inner">
				{eatingText.map((video, key) => (
					<div className="video" key={key}>
						<div className="video__thumb play__icon">
							<Link to={`/video/${video.videoId}`}>
								<img src={video.img} alt={video.title} />
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
  	)
}

export default Eating