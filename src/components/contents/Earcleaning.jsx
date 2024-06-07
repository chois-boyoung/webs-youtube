import React from 'react'
import { earcleaningText } from '../../data/earcleaning'
import { Link } from 'react-router-dom'

const Earcleaning = () => {
  return (
	<section id='earcleaning'>
		<h2>👂귓속이 시원해지는 Ear Cleaning Asmr</h2>
		<div className="video__inner">
			{earcleaningText.map((video, key) => (
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

export default Earcleaning