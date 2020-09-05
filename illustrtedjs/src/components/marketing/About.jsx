import React from 'react';
import './About.css';
import TopWave from '../../assets/intro-top-wave.svg';
import BottomWave from '../../assets/intro-bottom-wave.svg';
import Video from '../../assets/video.svg';
import Illustration from '../../assets/illustration.svg';
import Problems from '../../assets/Problems.svg';
import Doc from '../../assets/Doc.svg';
import Code from '../../assets/Code.svg';
import Discord from '../../assets/Discord.svg';
import Modal from './Modal.jsx';

const About = () => {
	return (
		<div>
			<img className='top-wave' src={TopWave} />
			<div className='about-box'>
				<div className='about-title'>
					<h2>About Illustrated JS</h2>
					<p className='introParagraph' style={{'text-align': 'justify'}}>
						We're on a mission to change the way you think and learn about
						computer science. Don't spend another minute looking through threads
						for solutions or watching 4 different videos just to try to piece
						together what you don't know. As a team we focus on delivering you
						high quality visualizations to supplement abstract concepts. Our
						entire product is focused on providing you materials that support
						all learning styles.{' '}
					</p>
				</div>
				<Modal
					activate={({ setIsVisible }) => (
						<div
							className='vid-desc'
							type='button'
							onClick={() => {
								setIsVisible(true);
							}}
						>
							<img className='icons' src={Video} />
							<h4>Video Walk Through</h4>
							<p>
								Documented steps walking you through each key decision when
								solving a problem
							</p>
						</div>
					)}
				>
					<h4>Video Description</h4>
					<p> Hi </p>
				</Modal>
				<Modal
					activate={({ setIsVisible }) => (
						<div
							className='illu'
							type='button'
							onClick={() => {
								setIsVisible(true);
							}}
						>
							<img className='icons' src={Illustration} />
							<h4>Illustrations</h4>
							<p>
								Visualize concepts through illustrations and animations during
								each lesson
							</p>
						</div>
					)}
				>
					<h4>Illustrations</h4>
					<p> Hi </p>
				</Modal>
				<Modal
					activate={({ setIsVisible }) => (
						<div
							className='doc-code'
							type='button'
							onClick={() => {
								setIsVisible(true);
							}}
						>
							<img className='icons' src={Doc} />
							<h4>Documented Code</h4>
							<p>
								Access to clearly commented code walking through each decision
								made and WHY
							</p>
						</div>
					)}
				>
					<h4>Documented Code</h4>
					<p> Hi </p>
				</Modal>
				<Modal
					activate={({ setIsVisible }) => (
						<div
							className='probs'
							type='button'
							onClick={() => {
								setIsVisible(true);
							}}
						>
							<img className='icons' src={Code} />
							<h4>100+ Problems</h4>
							<p>
								We showed you how to solve the problem. Now it's your turn. Test your knowledge against a growing library of 100+ problems
							</p>
						</div>
					)}
				>
					<h4>100+ Problems</h4>
					<p> Hi </p>
				</Modal>
				<Modal
					activate={({ setIsVisible }) => (
						<div
							className='about-6'
							type='button'
							onClick={() => {
								setIsVisible(true);
							}}
						>
							<img className='icons' src={Discord} />
							<h4>Online Community</h4>
							<p>
								Learning these concepts by yourself is hard. Join an active online community to learn, practice and interview with!
							</p>
						</div>
					)}
				>
					<h4>Online Community</h4>
					<p> Hi </p>
				</Modal>
				<Modal
					activate={({ setIsVisible }) => (
						<div
							className='about-5'
							type='button'
							onClick={() => {
								setIsVisible(true);
							}}
						>
							<img className='icons' src={Problems} />
							<h4>Written Guides</h4>
							<p>
								Access how to solve a problem and understand what goes into the
								decision making process at each step in the code
							</p>
						</div>
					)}
				>
					<h4>Illustrations</h4>
					<p> Hi </p>
				</Modal>
			</div>
			<img src={BottomWave} />
		</div>
	);
};

export default About;
