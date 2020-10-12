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
            <h4>Student</h4>
            - 🔭 Learning software development @ <a href="https://www.tucsweden.se/">TUC Sweden</a>
            <br />
            - 🌱 Earlier: C++, C, Pascal, Basic, MS-DOS, etc.
            <br />
            - ✨ Now: C#, ASP.NET Core, SQL, CSS, HTML, Javascript etc.
            <br/>
            - 😍 Backend and Frontend
            <br />
            - 💬 Ask me about music production
            <br />
            - 😄 Worked professionally as a chef 😄 
            <br />
            - 🎶 Music production: <a href="http://www.soundcloud.com/krishanromeda">[ Soundcloud ]</a>
            <br/>
            - 🙌 Dj'ing: <a href="http://www.mixcloud.com/krishanromeda">[ Mixcloud ]</a>
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