import React from 'react';
import techStuff from '../media/icons/tech-stuff-1.svg';
import videoCamera from '../media/icons/video-camera.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
        <img src={techStuff} alt='tech-stuff graphic' />
      </div>
      <div className='about-bottom'>
        <div className='about-bottom-title'>Hello, Nice to meet you.</div>
        <div className='about-bottom-bullets'>
          <ul>
            <li>
              <div className='about-bottom-bullets-img'>
                <img src={videoCamera} alt='video camera' />
              </div>
              <div className='about-bottom-bullets-copy'>
                I spent over 10 years in video and film production. I started as
                an intern cleaning toilets and getting people coffee and worked
                my way on to film sets on large films and commercials. I
                followed my passions and tought myself video editing and
                animation and convicened people to trust me enough to edit their
                projects.
              </div>
            </li>
            <li>
              <div className='about-bottom-bullets-img'>
                <img src={videoCamera} alt='video camera' />
              </div>
              <div className='about-bottom-bullets-copy'>
                I spent over 10 years in video and film production. I started as
                an intern cleaning toilets and getting people coffee and worked
                my way on to film sets on large films and commercials. I
                followed my passions and tought myself video editing and
                animation and convicened people to trust me enough to edit their
                projects.
              </div>
            </li>
            <li>
              <div className='about-bottom-bullets-img'>
                <img src={videoCamera} alt='video camera' />
              </div>
              <div className='about-bottom-bullets-copy'>
                I spent over 10 years in video and film production. I started as
                an intern cleaning toilets and getting people coffee and worked
                my way on to film sets on large films and commercials. I
                followed my passions and tought myself video editing and
                animation and convicened people to trust me enough to edit their
                projects.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
