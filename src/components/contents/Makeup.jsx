import React from 'react'
import { makeupText } from '../../data/makeup'
import { Link } from 'react-router-dom'

const Makeup = () => {
  return (
		<section id='makeup'>
			<h2>💄팅글과 함께 재미까지 즐기는 Make Up Asmr</h2>
			<div className="video__inner">
				{makeupText.map((video, key) => (
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

export default Makeup