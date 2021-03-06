import React from 'react';
// import ReactHeader from './ReactHeader';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ProfilePic from './ProfilePic';

class About extends React.Component {
  render() {
    return (
			<div className='masthead'>
				{/* <ReactHeader /> */}
				<Navbar />
				<div id='main-container' className='container'>
					<section className='main-section'>
					<h1>About Me</h1>
					<ProfilePic />
					<p className='bio'>	William Blake is a business school graduate with 3 years of web development experience. He was born and raised in Austin, TX but enjoys traveling and the great
					diversity of the United States. He holds a Full-Stack Web Developer certification from The
					University of Texas and received a BBA in Finance from Texas State University in 2006. He
					most enjoyed his time working for an Entrepreneur running two web stores, which furthered
					his passion for technology and design. He was able to marry skills in coding, graphics
					editing, Management, Finance, and Business Administration. The demand to approach issues
					from different perspectives and wear many hats at a small business quenched his thirst as an
					ENTP, which rarely pass up the opportunity to learn something new. It was during his time
					there he decided to take the necessary steps to switch careers to a more fulfilling and
					dynamic field.</p>
				<br />
					<p className='bio'>When he isn’t making computers dance, he spends time playing guitar, learning
					Spanish, running marathons, and trying not to fall down on the soccer field. He is currently
					working on coding a website to showcase his many hobbies. You can reach him at
					willblakebooking@gmail.com or on Twitter at @trill_will.</p>
					</section>
					<Sidebar />
				</div>
				<Footer />
			</div>
    );
  }
}

export default About;
