import React from 'react';
import { HomeSection , HomeInformation ,HomeTitle ,HomeInfo ,HomeDesc ,Span ,HomeBtn } from './style.js';
const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeInformation>
          <HomeTitle>Mostafa ELmahdei</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>
            I am a professional <Span>UX Designer</Span> and Front-End Developer creating modern and responsive designs for the web and mobile. Let's work together. Thank you.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeInformation>
      </div>
    </HomeSection>
  );
}

export default Home;