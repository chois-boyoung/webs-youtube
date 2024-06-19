import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/video/VideoCards'

import { makeupText } from '../data/makeup'

const Makeup = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 300);
	}, []);

	const makeupPageClass = loading ? 'isloading' : 'isloaded';

	return (
		<Main 
			title="Make Up Asmr" 
			description="화장 asmr 영상입니다.">
			
			<section id='makeupPage' className={makeupPageClass}>
				<h2>💄팅글과 함께 재미까지 즐기는 Make Up Asmr</h2>
				<div className="video__inner">
					<VideoCards videos={makeupText} />
				</div>
			</section>

		</Main>
	)
}

export default Makeup