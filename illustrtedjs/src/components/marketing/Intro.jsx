import React from 'react';
import blob from '../../assets/intro-grey-blob.svg';
import computer from '../../assets/computer-svg-simple.svg';

const Intro = () => {
	return (
		<div className='intro-box'>
			<div className='introText'>
				<p>
					The <span className='introColor'> JavaScript</span> Computer Science
					Platform
				</p>
				<h1 className='introTitle'>Reshape your learning</h1>
				<p className="intro-paragraph">
				Computer Science for those without a math and engineering degree. Learn skills to transform your applications, improve performance and crush your interview. Watch complex structures transform into life with examples you can relate to. Get started now with illustrative examples, detailed notes, code snippets, video demos and more. 
				</p>
				<a href="#curriculum" className="intro-button">Curriculum</a>
			</div>
			<div className="computer-box">
				<img className="computer" alt="computer graphic with computer science symbols" src={computer}/>
			</div>
		</div>
	);
};

export default Intro;
