import React, { useEffect } from 'react';
import './About.css';
import Video from '../../assets/icons/video.svg';
import Illustration from '../../assets/icons/illu.svg';
import Guides from '../../assets/icons/guides.svg';
import Doc from '../../assets/icons/docu.svg';
import Code from '../../assets/icons/code.svg';
import Discord from '../../assets/icons/discord.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

	useEffect(() => {
    AOS.init({
      duration: 100,
    });
    AOS.refresh();
  })
	return (
		<div>
			<div className='about-box'>
				<div className='about-title' data-aos='fade-down' data-aos-once="true">
					<h2>illustratedJS is built for learning developers like you.  As a team, we focus on delivering <span className="introColor">intuitive visualizations</span> to supplement abstract concepts.</h2>

				</div>
						<div className="vid-desc" data-aos='zoom-in' data-aos-once="true">
							<div className='topic-title'>
								<img className='icons' src={Video} />
								<h4>Video Walk Through</h4>
							</div>
							<p className="about-p">
								Documented steps walking you through each key decision when
								solving a problem
							</p>
						</div>

						<div className="illu" data-aos='zoom-in' data-aos-once="true" data-aos-delay="100">
							<div className='topic-title'>
								<img className='icons' src={Illustration} />
								<h4>Illustrations</h4>
							</div>
							<p className="about-p">
								Visualize concepts through illustrations and animations during
								each lesson
							</p>
						</div>

						<div className="doc-code" data-aos='zoom-in' data-aos-once="true" data-aos-delay="200">
							<div className='topic-title'>
								<img className='icons' src={Doc} />
								<h4>Documented Code</h4>
							</div>
							<p className="about-p">
								Access to clearly commented code walking through each decision
								made and WHY
							</p>
						</div>

						<div className="probs" data-aos='zoom-in' data-aos-once="true">
							<div className='topic-title'>
								<img className='icons' src={Code} />
								<h4>100+ Problems</h4>
							</div>
							<p className="about-p">
								We showed you how to solve the problem. Now it's your turn. Test your knowledge against a growing library of 100+ problems
							</p>
						</div>
				
						<div className="about-5" data-aos='zoom-in' data-aos-once="true" data-aos-delay="100">
						<div className='topic-title'>
							<img className='icons' src={Discord} />
							<h4>Online Community</h4>
							</div>
							<p className="about-p">
								Learning these concepts by yourself is hard. Join an active online community to learn, practice and interview with!
							</p>
						</div>

						<div className="about-6" data-aos='zoom-in' data-aos-once="true" data-aos-delay="200">
							<div className='topic-title'>
								<img className='icons' src={Guides} />
								<h4>Written Guides</h4>
							</div>
							<p className="about-p">
								Access how to solve a problem and understand what goes into the
								decision making process at each step in the code
							</p>
						</div>
							</div>
							</div>
	);
};

export default About;
