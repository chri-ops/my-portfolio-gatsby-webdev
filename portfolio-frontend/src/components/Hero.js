import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h2>Krishan Romeda</h2>
            <h4>Real name: Christian Romedahl</h4>
            <h5>Page in English, but I'm Swedish 😊</h5>
            <div className="underline"></div>
            <h4>Student</h4>
            - 🔭 Learning software development
            <br />
            - 🌱 C#, C/C++, Pascal, Basic, HTML, CSS, Javascript...
            <br />
            - 🤔 Backend and Frontend
            <br />
            - 💬 Ask me about music production
            <br />
            - 😄 Worked professionally as a chef 😄 
            <br />
            - 💜 <a href="http://www.soundcloud.com/krishanromeda">[LINK] Some of my music productions</a>
            <br/>
            - 💜 <a href="http://www.mixcloud.com/krishanromeda">[LINK] Some of my DJ-sets</a>
            <br />
            - ⚡ Fun facts: Likes to travel and explore
            <br />
            - 📫 Contact me via the link below:
            <br />
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero