import * as React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const greeting = "Hello, my name is Jesse Li";
const arrow = ">";
const location = "Toronto, CA";
const education = "University of Waterloo";
const major = "Computer Science";
const graduation = "April 2025";
const interests = "[\"Hockey\", \"Code\", \"Valorant\", \"Biking\"]";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <h2>{greeting}</h2>
    </div>
    <div id="about"><div class="inner">
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
							<span class="answer">"<a target="_blank" rel="noreferrer" href="http://www.google.ca">resume</a>"<br/><br/></span>
							{arrow} Jesse.contact<br/>
							<span class="answer">"<a target="_blank" rel="noreferrer" href="mailto:jesse.li286@gmail.com">jesse.li286@gmail.com</a>"<br/><br/></span>
						</div>
					</div>
				</div>
				<br/>
			</div>
  </Layout>
)

export default IndexPage
