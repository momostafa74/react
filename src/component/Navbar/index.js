import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection , Anchor ,Logo ,LogoText , UlList , ListItem} from'./style.js'

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        
        <UlList>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ListItem><Anchor to="/Work">Work</Anchor></ListItem>
          <ListItem><Anchor to="/Portfolio">Portfolio</Anchor></ListItem>
          <ListItem><Anchor to="/Resume">Resume</Anchor></ListItem>
          <ListItem><Anchor to="/About">About</Anchor></ListItem>
          <ListItem><Link to="/Contact">Contact</Link></ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
}

export default Navbar;