import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/video/VideoCards'

import { eatingText } from '../data/eating'

const Eating = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	const eatingPageClass = loading ? 'isloading' : 'isloaded';
	
	return (
		<Main 
			title="Eating Asmr" 
			description="먹방 asmr 영상입니다.">

			<section id='eatingPage' className={eatingPageClass}>
				<h2>🍭귀로 느끼는 달콤한 Eating Asmr</h2>
				<div className="video__inner">
					<VideoCards videos={eatingText} />
				</div>
			</section>
		</Main>
	)
}

export default Eating