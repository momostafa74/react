import  React, { Component, } from'react';

import Home from '../Home'
import About from '../About'
import Work from '../Work'
import PortoFolio from '../PortoFolio'
import Profile from '../Profile'


import SocialMedia from '../SocialMedia'

import Footer from '../Footer'


class Index extends Component {
 render (){
  return (
    <div >
     
      <Home/>
      <PortoFolio/>
      <Work/>
      <Profile/>
      <SocialMedia/>
      
      <About/>
      <Footer/>

    </div>
  )
}
}
export default Index;
