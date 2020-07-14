import React from 'react';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 40,
  (x - window.innerWidth / 2) / 40,
  1.05,
];

const trans = (x, y, s) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ProjectIcon = ({ project }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 8, tension: 550, friction: 60 },
  }));
  return (
    <animated.div
      className={`project-icon`}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
      <div className='project-icon-bar'>
        <ul>
          <li className='project-icon-bar-circle red'></li>
          <li className='project-icon-bar-circle orange'></li>
          <li className='project-icon-bar-circle green'></li>
        </ul>
        <div className='project-icon-bar-title'>{project.title}</div>
        <div></div>
      </div>
      <div className='project-icon-img'>
        <img
          src={require(`../media/screenshots/${project.img}`)}
          alt='screenshot'
        />
      </div>
    </animated.div>
  );
};

export default ProjectIcon;
