import React from 'react'
import { notalkingText } from '../../data/notalking'
import { Link } from 'react-router-dom'

const Notalking = () => {
  return (
    <section id='notalking'>
		<h2>🔇쉿! 오로지 팅글에만 집중하게 되는 No Talking Asmr</h2>
		<div className="video__inner">
			{notalkingText.map((video, key) => (
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

export default Notalking