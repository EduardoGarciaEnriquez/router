//UI component
import React from 'react';
import Rainbow from '../hoc/rainbow.js';

const About = () =>{
  return(
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quidem! Quam quia earum minus neque excepturi ipsam est obcaecati facere cupiditate exercitationem dolor iusto ullam, accusantium ut fuga laudantium aperiam!</p>
    </div>
  )
}

export default Rainbow(About);