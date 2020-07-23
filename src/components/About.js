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
                as an editor and animator. My hobbies have always included
                learning new skills and building things. Over the last few
                years, I have been making and maintaining websites for friends
                and organizations that help build community while pushing my
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
