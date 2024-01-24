import React from 'react';
import BannerImage from '../assets/about-pic.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage:`url(${BannerImage})` }}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
        The principal features to consider in paragraph organization are the topic sentence and controlling idea, supporting details, organizational patterns, and signal words. Together, these features develop a topic and connect ideas from one point to the next, logically and fluidly. This resource explains these features and provides numerous examples of paragraph organization.
        </p>
        <p>
        The economy also plays a role in an increase in prescription pain reliever addiction. According to Jungeun Olivia Lee, a social work professor at University of Southern California, “The relationship between joblessness and substance abuse is strongest among people from low socioeconomic brackets, who might not be able to afford healthier ways to relieve their stress” (2017, as cited in Khazan, 2017, para. 8). Additionally, every point the unemployment rate rises, opioid-related death rates rise by almost 4 percent (Khazan, 2017). Unemployment makes it not only difficult for those suffering from pain to afford medication or healthy alternatives, but it can also contribute to depression and varying degrees of self-medication and addiction.
        </p>
      </div>
    </div>
  )
}

export default About
