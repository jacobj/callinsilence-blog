import React from 'react'
import styled from "styled-components"
import Link from 'gatsby-link'
import Logo from '../img/Logo';

const Nav = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px black;
`

const Item = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;

  &:hover {
    background: blue;
    color: white;

    svg {
      stroke: white;
    }
  }
`

const Navbar = () => (
  <Nav>
      <div>
        <Item to="/">
          <figure>
            <Logo />
          </figure>
        </Item>
      </div>
  </Nav>
)

export default Navbar
