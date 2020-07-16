import React from 'react';
import techStuff from '../media/icons/tech-stuff.png';
// import videoCamera from '../media/icons/video-camera.png';
import Robot from '../media/icons/robot.svg';
// import webpage from '../media/icons/webpage.png';
import reactCloud from '../media/icons/react-cloud.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about-top' id='about'>
        <img src={techStuff} alt='tech-stuff graphic' />
      </div>
      <div className='about-bottom'>
        <div className='about-bottom-title'>Hello, Nice to meet you.</div>
        <div className='about-bottom-bullets'>
          <ul>
            <li>
              <div className='about-bottom-bullets-img'>
                <img src={Robot} alt='video camera' />
              </div>
              <div className='about-bottom-bullets-copy'>
                I am a web developer who also spent a decade in video production
                as an editor and animator. My hobby has always been learning new
                skills and building things. Over the last couple of years I have
                been making and maintaining websites for friends and
                organisations that help build community and push my
                understanding of software development. At the end of 2019 I
                decided to pursue web development full time.
              </div>
            </li>
            <li>
              <div className='about-bottom-bullets-img'>
                <img src={reactCloud} alt='cloud' />
              </div>
              <div className='about-bottom-bullets-copy'>
                I am endlessly curious about full-stack development because I
                enjoy knowing how the sauce is made. The Front-End interests me
                as well because I love design, storytelling, and making
                interactive user interfaces that function and look pretty.
              </div>
            </li>
            {/* <li>
              <div className='about-bottom-bullets-img'>
                <img src={webpage} alt='video camera' />
              </div>
              <div className='about-bottom-bullets-copy'>
                I spent over 10 years in video and film production. I started as
                an intern cleaning toilets and getting people coffee and worked
                my way on to film sets on large films and commercials. I
                followed my passions and tought myself video editing and
                animation and convicened people to trust me enough to edit their
                projects.
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
