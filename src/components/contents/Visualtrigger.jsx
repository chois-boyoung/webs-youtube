import React from 'react'
import { visualtriggerText } from '../../data/visualtrigger'
import { Link } from 'react-router-dom'

const Visualtrigger = () => {
  return (
		<section id='visualtrigger'>
			<h2>👀눈으로도 팅글을 즐기는 Visual Trigger Asmr</h2>
			<div className="video__inner">
				{visualtriggerText.map((video, key) => (
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

export default Visualtrigger