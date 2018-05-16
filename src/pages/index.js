import React from "react"
import styled, { injectGlobal } from "styled-components"
import Link from "gatsby-link"
import "../fonts/fonts.css"
import Heading from "../components/Heading"
import LogoCircle from "../img/logo_circle.png"

injectGlobal`
  body {
    height: 100%;
    width: 100%;
    background-color: black;
  }

  * {
    font-family: 'lunchtype24expanded_regular';
  }
`

const Logo = styled.img.attrs({
  src: LogoCircle
})`
  width: 70%;
  max-width: 350px;
  height: auto;
  -webkit-filter: drop-shadow(0px 0px 8px white);
  margin-bottom: 12px;
  filter: drop-shadow(0px 0px 8px white);
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Bold = styled.span`
  font-family: "lunchtype24expanded_medium";
`

const Text = styled.p`
  color: white;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  text-align: justify;
  font-size: 36px;
  text-shadow: 0px 0px 8px white;
`
export default class IndexPage extends React.Component {
  render() {
    return (
      <Container>
        <Logo/>
        <Text>
          <Bold>CALL IN SILENCE</Bold> IS AN{" "}
          <Bold>UPCOMING DIGITAL MUSIC AND MEDIA ZINE</Bold> BY{" "}
          <Bold>WIPEYADOCSOFF</Bold> AND COMPANY.
        </Text>
      </Container>
    )
  }
}
