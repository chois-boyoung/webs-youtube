import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';


const Youtuber = ({ videos, title, id }) => {

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 400);
	}, []);

	const youtuberClass = loading ? 'isloading' : 'isloaded'

	return (
		<section id={id} className={youtuberClass}>
			<h2>{title}</h2>
			<div className='youtuber__inner'>
				<Swiper
					slidesPerView={4}
					spaceBetween={15}
					navigation={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: {
							slidesPerView: 5,
							spaceBetween: 15
						},
						768: {
							slidesPerView: 6,
							spaceBetween: 15
						},
						1024: {
							slidesPerView: 7,
							spaceBetween: 15
						},
						1240: {
							slidesPerView: 8,
							spaceBetween: 15
						},
						1640: {
							slidesPerView: 9,
							spaceBetween: 15
						},
						2000: {
							slidesPerView: 10,
							spaceBetween: 15
						},
					}}
					modules={[Autoplay, Navigation]}
					className="mySwiper"


				>
					{videos.map((youtuber, key) => (
						<SwiperSlide key={key}>
							<div className='youtuber'>
								<div className="youtuber__img play__icon">
									<Link to={`/channel/${youtuber.channelId}`}>
										<img src={youtuber.img} alt={youtuber.name} />
									</Link>
								</div>
								<div className="youtuber__info">
									<Link to={`/channel/${youtuber.channelId}`}>
										{youtuber.name}
									</Link>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Youtuber