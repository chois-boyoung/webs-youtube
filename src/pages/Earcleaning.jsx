import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/video/VideoCards'
import { earcleaningText } from '../data/earcleaning'

const Earcleaning = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	const earcleaningPageClass = loading ? 'isloading' : 'isloaded';

	return (
		<Main 
			title="Ear Cleaning Asmr" 
			description="귀청소 asmr 영상입니다.">
			
			<section id='earcleaningPage' className={earcleaningPageClass}>
				<h2>👂귓속이 시원해지는 Ear Cleaning Asmr</h2>
				<div className="video__inner">
					<VideoCards videos={earcleaningText} />
				</div>
			</section>
		</Main>
	)
}

export default Earcleaning