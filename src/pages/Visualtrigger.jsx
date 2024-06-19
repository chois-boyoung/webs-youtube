import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/video/VideoCards'

import { visualtriggerText } from '../data/visualtrigger'

const Visualtrigger = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	const visualtriggerPageClass = loading ? 'isloading' : 'isloaded';

	return (
		<Main 
			title="Visual Trigger Asmr" 
			description="시각적 자극 asmr 영상입니다.">
			
			<section id='visualtriggerPage' className={visualtriggerPageClass}>
				<h2>👀눈으로도 팅글을 즐기는 Visual Trigger Asmr</h2>
				<div className="video__inner">
					<VideoCards videos={visualtriggerText} />
				</div>
			</section>
		</Main>
  )
}

export default Visualtrigger