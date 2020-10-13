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
            <h2>Christian Romedahl</h2>
            <div className="underline"></div>
            <h4>🌞💥✨</h4>
            - ✨ Born and raised in Sweden. Speaks swedish and english. 💕
            <br />
            - 👨‍🎓 Learning software development @ <a href="https://www.tucsweden.se/">[ TUC Sweden ]</a>
            <br />
            - 😍 Attaining skills in Backend and Frontend dev.
            <br />
            - ✨ Now: C#, ASP.NET Core, SQL, CSS, HTML, Javascript etc.
            <br/>
            - 🌱 Earlier: C++, C, Pascal, Basic, MS-DOS, etc.
            <br />
            - 💬 Ask me about music production
            <br />
            - 🎶 My productions: <a href="http://www.soundcloud.com/krishanromeda">[ Soundcloud ]</a>
            <br/>
            - 🙌 Dj'ing: <a href="http://www.mixcloud.com/krishanromeda">[ Mixcloud ]</a>
            <br />
            - ⚡ Fun facts: Likes to travel and explore
            <br />
            - 😄 Worked professionally as a chef 😄
            <br />
            - 😄 Also interested in visual design! 😄
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