import React from 'react';
import blob from '../../assets/blob2.svg';

const Intro = () => {
	return (
		<div className='intro-box'>
			<div className='introText'>
				<p>
					The <span className='introColor'> JavaScript</span> Computer Science
					Platform
				</p>
				<h1 className='introTitle'>Find Experiences</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
					nullam congue dictum nulla egestas sit nulla quisque. Velit, faucibus
					consequat neque, condimentum proin tincidunt maecenas ac.
				</p>
				<button>Curriculum</button>
			</div>
				<img className='blob' src={blob} />
		</div>
	);
};

export default Intro;
