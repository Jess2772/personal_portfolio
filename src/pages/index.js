import * as React from "react"
//import { Link } from "gatsby"
import resume from '/Users/jesseli/Desktop/jesse-portfolio/src/images/Jesse_Resume_2022.pdf'
import FadeIn from 'react-fade-in';

import Layout from "../components/layout"
import Seo from "../components/seo"

const greeting = "Hello, I'm Jesse Li";
const arrow = ">";
const location = "Toronto, CA";
const education = "University of Waterloo";
const major = "Computer Science";
const graduation = "April 2025";
const interests = "[\"Hockey\", \"Code\", \"Valorant\", \"Biking\"]";


function Status() {
	const status = "I am currently on my second co-op term at the Royal Bank of Canada as a Cloud Software Developer (January - August 2022)."
	const studyTerm = "My most recently completed study term is 2A."
	return (
		<div>
			<h4> {status} </h4>
			<h4> {studyTerm} </h4>
		</div>
	)
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
	<FadeIn>
		<h2>{greeting}</h2>
	</FadeIn>

	<FadeIn delay="150">
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

	<FadeIn delay="300">
		<Status/>
	</FadeIn>

  </Layout>
)


export default IndexPage
