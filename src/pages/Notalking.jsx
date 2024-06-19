import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/video/VideoCards'

import { notalkingText } from '../data/notalking'

const Notalking = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	const notalkingPageClass = loading ? 'isloading' : 'isloaded';

		
	return (
			<Main title="No Talking Asmr" 
			description="말 없는 asmr 영상입니다.">

			<section id='notalkingPage' className={notalkingPageClass}>
				<h2>🔇쉿! 오로지 팅글에만 집중하게 되는 No Talking Asmr</h2>
				<div className="video__inner">
					<VideoCards videos={notalkingText} />
				</div>
			</section>
			</Main>
	)
}

export default Notalking