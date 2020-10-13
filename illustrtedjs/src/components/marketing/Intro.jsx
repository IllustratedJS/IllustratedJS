import React from 'react';
import Lottie from 'react-lottie';
import computer from "../../assets/lotties/Computer.json";
      // <Computer loop={true} />

const Intro = () => {
	const defaultOptions = {
		
		loop: false,
		autoplay: true,
		animationData: computer,
		rendererSettings: {
			className: "computer"
			// preserveAspectRatio: "xMidYMid slice"
		}
	};
	return (
		<div className='intro-box'>
			<div className='introText'>
				<p className="pre-header">
					THE <span className='introColor'> JAVASCRIPT</span> COMPUTER SCIENCE
					PLATFORM
				</p>
				<h1 className='introTitle'>Reshape your learning</h1>
				<p className="intro-paragraph">
				Computer Science for those without a math and engineering degree. Learn skills to transform your applications, improve performance and crush your interview. Watch complex structures transform into life with examples you can relate to. Get started now with illustrative examples, detailed notes, code snippets, video demos and more. 
				</p>
				<a href="#curriculum" className="intro-button">Curriculum</a>
			</div>
			<div className="computer-box">
				<Lottie
					options={defaultOptions}
					/>
			</div>
		</div>
	);
};

export default Intro;
