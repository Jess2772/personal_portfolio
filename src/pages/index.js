import * as React from "react"
//import { Link } from "gatsby"
import resume from '../images/JesseLiResumeS23.pdf'
import cowbellLogo from '../images/cowbellLogo.png'
import rbcLogo from '../images/rbc.png'
import smsLogo from '../images/sms.png'
import FadeIn from 'react-fade-in';

import Layout from "../components/layout"
import Seo from "../components/seo"

const greeting = "Hello, I'm Jesse Li";
const arrow = ">";
const location = "Toronto, CA";
const education = "University of Waterloo";
const major = "BCS Candidate, Honours Computer Science Co-op";
const graduation = "April 2025";
const interests = "[\"Hockey\", \"Coding\", \"Nature\", \"Reading\"]";



function Status() {
	const aboutMe = "I am a curious and avid learner with a passion for creating unique products/experiences!"
	const currentStatus =  "I am currently in my 3A term studying Computer Science at the Universify of Waterloo, seeking Summer 2023 opportunities."
	const learnMore = "Below, you will be able to learn more about me, as well as how to get in contact. Hope you hear from you!"
	return (
		<div>
			<p class="regular-text"> {aboutMe} <br/> <br/> {currentStatus} <br/> <br/> {learnMore}</p>
		</div>
	)
}

function Experience() {
	return (
		<div>
			<h3>Work Experience</h3>
			<p class="experience-text">
				<a target="_blank" href="https://cowbell.insure/"><img class="icon-cowbell" src={cowbellLogo}/></a><b>Cowbell Cyber</b>
				<span class="right"><i>Sept. - Dec. 2022</i></span><br/>
				<b>Backend Software Engineer</b>
				<span class="right"><i>Toronto, ON</i></span><br/><br/>
			</p>

			<p class="experience-text">
				<a target="_blank" href="https://www.rbc.com/about-rbc.html"><img class="icon-rbc" src={rbcLogo}/></a><b>Royal Bank of Canada (RBC)</b>
				<span class="right"><i>Jan. - Apr. 2022</i></span><br/>
				<b>Cloud Software Developer</b>
				<span class="right"><i>Toronto, ON</i></span><br/><br/>
			</p>

			<p class="experience-text">
				<a target="_blank" href="https://www.rbc.com/about-rbc.html"><img class="icon-rbc" src={rbcLogo}/></a><b>Royal Bank of Canada (RBC)</b>
				<span class="right"><i>May - Aug. 2021</i></span><br/>
				<b>Cloud Software Developer</b>
				<span class="right"><i>Toronto, ON</i></span><br/><br/>
			</p>


			<p class="experience-text">
				<a target="_blank" href="https://spiritofmath.com/"><img class="icon-sms" src={smsLogo}/></a><b>Spirit of Math Schools</b>
				<span class="right"><i>Sept. 2017 - Oct. 2019</i></span><br/>
				<b>Teaching Assistant</b>
				<span class="right"><i>Toronto, ON</i></span><br/><br/>
			</p>

		</div>


	)

}

const IndexPage = () => (
  <Layout>
    <Seo title="Jesse's Portfolio" />
	<FadeIn>
		<h2>{arrow} {greeting}</h2>
	</FadeIn>

	<FadeIn delay="150">
		<Status/>
	</FadeIn>

	<FadeIn delay="300">
		<div id="about">
				<div id="code">
					<div id="console">
						{arrow} Jesse.location<br/>
						<span class="answer"> "{location}" <br/><br/></span>
						{arrow} Jesse.education<br/>
						<span class="answer"> "{education}" <br/><br/></span>
						{arrow} Jesse.major<br/>
						<span class="answer"> "{major}"" <br/><br/></span>
						{arrow} Jesse.expectedGraduation<br/>
						<span class="answer"> "{graduation}" <br/><br/></span>
						{arrow} Jesse.interests<br/>
						<span class="answer"> {interests} <br/><br/></span>
						{arrow} Jesse.resume<br/>
						<span class="answer">"<a target="_blank" rel="noreferrer" href={resume}>resume</a>"<br/><br/></span>
						{arrow} Jesse.contact<br/>
						<span class="answer">["<a target="_blank" rel="noreferrer" href="mailto:jesse.li286@gmail.com">jesse.li286@gmail.com</a>",
											"<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jesse-li-62b275201/">LinkedIn</a>",
											"<a target="_blank" rel="noreferrer" href="https://github.com/Jess2772">GitHub</a>"]<br/><br/></span>
					</div>
				</div>
			<br/>
		</div>
	</FadeIn>

	<FadeIn delay="450">
		<Experience/>
	</FadeIn>
	

  </Layout>
)


export default IndexPage
